import { useState, useEffect, useRef } from 'react';
import { Loader2, Send, MessageSquare, Trash2, Reply, X, AlertCircle, Flag, ChevronDown, BadgeCheck } from 'lucide-react';
import { auth, db } from "../firebase";
import {
  collection, addDoc, query, orderBy, onSnapshot,
  deleteDoc, doc, serverTimestamp, where, updateDoc, arrayUnion, limit, startAfter, getDocs
} from "firebase/firestore";
import profile from "../assets/profile.png";

const ADMIN_UID = "aef7dD3YBtNIAqvC5uiGVKHbBqQ2";
const COMMENTS_PER_PAGE = 6;

// --- Helper: Relative Time ---
const formatRelativeTime = (timestamp) => {
  if (!timestamp) return "Just now";
  const now = new Date();
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const diffInSeconds = Math.floor((now - date) / 1000);
  if (diffInSeconds < 60) return "Just now";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};

// --- Component 1: Report Modal ---
const ReportModal = ({ isOpen, onClose, onSubmit, commentAuthor }) => {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const reasons = ["Spam", "Harassment", "Inappropriate Content", "Misleading Information", "Other"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-lg overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-200">
        <div className="p-5 md:p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-red-50 rounded-full flex items-center justify-center">
              <Flag size={18} className="text-red-500" />
            </div>
            <h3 className="font-bold text-gray-900 text-base md:text-lg tracking-tight">Report Comment</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-gray-900"><X size={20} /></button>
        </div>

        <div className="p-5 md:p-6 space-y-4 md:space-y-6">
          <p className="text-[12px] md:text-sm text-gray-500 leading-relaxed italic">You are reporting a comment by <span className="font-bold text-indigo-600 not-italic">{commentAuthor || "User"}</span>.</p>

          <div className="relative" ref={dropdownRef}>
            <label className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-[1.5px] mb-2 block ml-1">Select Reason</label>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between p-3 md:p-4 bg-gray-50 border border-gray-200 rounded-lg text-left text-sm text-gray-700 hover:border-indigo-300 hover:bg-white transition-all"
            >
              <span className={reason ? "text-gray-900 font-medium" : "text-gray-400"}>{reason || "Choose a reason..."}</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-indigo-500' : 'text-gray-400'}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden z-110 py-2 animate-in slide-in-from-top-2">
                {reasons.map((r) => (
                  <button
                    key={r}
                    onClick={() => { setReason(r); setIsDropdownOpen(false); }}
                    className="w-full p-3 md:p-4 text-left text-sm hover:bg-indigo-50 text-gray-700 transition-colors font-medium flex items-center justify-between group"
                  >
                    {r}
                    {reason === r && <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-[1.5px] mb-2 block ml-1">Additional Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Provide more context..."
              className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-lg outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-400 focus:bg-white transition-all min-h-25 resize-none text-sm leading-relaxed"
            />
          </div>
        </div>

        <div className="p-5 md:p-6 bg-gray-50/50 flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 md:py-4 font-bold text-gray-500 hover:bg-gray-100 rounded-full transition-all text-sm md:text-base">Cancel</button>
          <button
            disabled={!reason}
            onClick={() => onSubmit({ reason, details })}
            className="flex-1 py-3 md:py-4 bg-red-500 hover:bg-red-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold rounded-full transition-all"
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component 2: Comment Item ---
const CommentItem = ({ item, allComments, onReply, onDelete, currentUserId, onReport }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayTime, setDisplayTime] = useState(formatRelativeTime(item.createdAt));
  const isOwner = currentUserId === item.userId;
  const isItemAdmin = item.userId === ADMIN_UID;
  const replies = allComments.filter(c => c.parentId === item.id);

  useEffect(() => {
    const timer = setInterval(() => setDisplayTime(formatRelativeTime(item.createdAt)), 60000);
    return () => clearInterval(timer);
  }, [item.createdAt]);

  return (
    <div className={`group flex gap-2.5 md:gap-4 ${item.parentId ? 'ml-6 md:ml-10 mt-3 border-l-2 border-gray-100 pl-3 md:pl-4' : 'mb-5 pb-5 border-b border-gray-50 last:border-0'}`}>
      <img src={item.avatar || profile} referrerPolicy="no-referrer" className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover shrink-0 ring-2 ring-white" alt="avatar" />
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-bold text-[13px] md:text-[15px] flex items-center gap-1 ${isItemAdmin ? 'text-indigo-600' : 'text-gray-900'}`}>
              {item.user}
              {isItemAdmin && <BadgeCheck size={18} className="text-white fill-indigo-600 stroke-[2.5px]" />}
            </span>
            <span className="text-gray-300 text-[10px]">•</span>
            <span className="text-gray-400 text-[10px] md:text-[11px] font-medium">{displayTime}</span>

            {!isOwner && (
              <button
                onClick={() => onReport(item)}
                className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] md:text-[11px] text-gray-400 hover:text-red-500 ml-1 font-bold"
              >
                <Flag size={11} /> Report
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isOwner && !isDeleting && (
              <button onClick={() => setIsDeleting(true)} className="text-gray-300 hover:text-red-500 transition-colors p-1 opacity-100 md:opacity-0 group-hover:opacity-100">
                <Trash2 size={16} />
              </button>
            )}
            {isDeleting && (
              <div className="flex items-center gap-2 bg-red-50 px-2 py-1 rounded-full animate-in slide-in-from-right-2">
                <button onClick={() => onDelete(item.id)} className="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full font-bold hover:bg-red-600 transition-colors">Delete</button>
                <button onClick={() => setIsDeleting(false)} className="text-[10px] text-gray-500 font-bold uppercase px-1">No</button>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed whitespace-pre-wrap wrap-break-word">{item.comment}</p>
        <div className="mt-2">
          <button onClick={() => onReply(item)} className="text-indigo-600 text-[12px] md:text-[13px] font-bold hover:text-indigo-800 flex items-center gap-1.5 transition-all active:scale-95 group">
            <Reply size={14} className="group-hover:-translate-x-0.5 transition-transform" /> Reply
          </button>
        </div>
        {replies.map(reply => (
          <CommentItem key={reply.id} item={reply} allComments={allComments} onReply={onReply} onDelete={onDelete} currentUserId={currentUserId} onReport={onReport} />
        ))}
      </div>
    </div>
  );
};

// --- Main Component: CommentsSection ---
const CommentsSection = ({ toolId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [reportTarget, setReportTarget] = useState(null);
  const [replyTarget, setReplyTarget] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const unsubAuth = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubAuth();
  }, []);

  // Initial Real-time Sync (First 6)
  useEffect(() => {
    if (!toolId) return;
    const q = query(collection(db, "comments"), where("toolId", "==", toolId), orderBy("createdAt", "desc"), limit(COMMENTS_PER_PAGE));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedDocs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(fetchedDocs);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === COMMENTS_PER_PAGE);
      setLoading(false);
    }, (err) => {
      console.error(err);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [toolId]);

  // Pagination Handler
  const loadMoreComments = async () => {
    if (!lastDoc || loadingMore) return;
    setLoadingMore(true);
    try {
      const nextQ = query(collection(db, "comments"), where("toolId", "==", toolId), orderBy("createdAt", "desc"), startAfter(lastDoc), limit(COMMENTS_PER_PAGE));
      const snapshot = await getDocs(nextQ);
      const newDocs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setComments(prev => [...prev, ...newDocs]);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === COMMENTS_PER_PAGE);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleSubmit = async () => {
    if (!newComment.trim()) return;
    if (!user) {
      setError("Please sign in to join the conversation");
      setTimeout(() => setError(null), 4000);
      return;
    }

    try {
      await addDoc(collection(db, "comments"), {
        userId: user.uid,
        user: user.displayName || 'Anonymous User',
        avatar: user.photoURL || profile,
        comment: newComment,
        parentId: replyTarget ? replyTarget.id : null,
        toolId: toolId,
        createdAt: serverTimestamp(),
      });
      setNewComment('');
      setReplyTarget(null);
    } catch {
      setError("Failed to post comment.");
    }
  };

  const handleReportSubmit = async (reportData) => {
    if (!reportTarget || !user) return;
    try {
      const commentRef = doc(db, "comments", reportTarget.id);
      await updateDoc(commentRef, {
        reports: arrayUnion({
          reportedBy: user.uid,
          reason: reportData.reason,
          details: reportData.details,
          timestamp: new Date().toISOString()
        }),
        isReported: true
      });
      setReportTarget(null);
    } catch {
      setError("Could not submit report.");
    }
  };

  return (
    <div className="w-full py-6 md:py-12 max-w-5xl mx-auto font-manrope">
      <ReportModal
        isOpen={!!reportTarget}
        onClose={() => setReportTarget(null)}
        onSubmit={handleReportSubmit}
        commentAuthor={reportTarget?.user}
      />

      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter">Comments</h2>
      </div>

      <div className="bg-white rounded-lg p-5 md:p-10 border border-gray-200">
        {/* Post Comment Area */}
        <div className="flex gap-3 md:gap-4 mb-8 md:mb-12">
          <img src={user && user.photoURL ? user.photoURL : profile} referrerPolicy="no-referrer" className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gray-100 shadow-sm object-cover shrink-0" alt="user" key={user?.photoURL} />
          <div className="flex-1 min-w-0">
            {replyTarget && (
              <div className="flex justify-between items-center bg-indigo-50/70 p-3 rounded-t-lg border-x border-t border-indigo-100/50">
                <span className="text-[11px] md:text-[13px] text-indigo-700 font-bold flex items-center gap-2"><Reply size={14} /> Replying to <span className="underline underline-offset-4">{replyTarget.user}</span></span>
                <button onClick={() => setReplyTarget(null)} className="p-1 hover:bg-white rounded-full transition-all"><X size={16} className="text-indigo-400" /></button>
              </div>
            )}
            <div className="relative">
              <textarea
                ref={inputRef}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={replyTarget ? "Write a professional reply..." : "Share your thoughts or ask a question..."}
                className={`w-full p-4 md:p-6 text-gray-700 bg-gray-50/50 border border-gray-200 outline-none focus:bg-white focus:border-indigo-400 resize-none transition-all min-h-30 text-sm md:text-base leading-relaxed ${replyTarget ? 'rounded-b-lg border-t-0' : 'rounded-lg'}`}
              />
              {error && (
                <div className="absolute -bottom-8 left-1 flex items-center gap-1.5 text-red-500 text-[10px] md:text-xs font-bold animate-pulse">
                  <AlertCircle size={14} /> {error}
                </div>
              )}
            </div>
            <div className="flex justify-end mt-3">
              <button
                onClick={handleSubmit}
                className="p-3 md:p-4 bg-indigo-600 text-white font-black rounded-full hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-100"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Comments List */}
        {loading ? (
          <div className="py-16 md:py-24 flex flex-col items-center gap-4">
            <Loader2 className="animate-spin text-indigo-500" size={32} />
            <p className="text-gray-400 font-bold tracking-widest text-[9px] uppercase">Syncing Comments...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className="py-16 md:py-24 flex flex-col items-center text-center max-w-xs mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare size={32} className="text-indigo-400" />
            </div>
            <h3 className="text-gray-900 font-black text-xl md:text-2xl tracking-tighter">No Comments yet.</h3>
            <p className="text-gray-500 mt-2 text-xs md:text-sm font-medium">Be the one to spark a conversation.</p>
          </div>
        ) : (
          <div className="mt-4">
            {comments.filter(c => !c.parentId).map(item => (
              <CommentItem
                key={item.id}
                item={item}
                allComments={comments}
                currentUserId={user?.uid}
                onReply={(t) => { setReplyTarget(t); inputRef.current.focus(); }}
                onDelete={(id) => deleteDoc(doc(db, "comments", id))}
                onReport={setReportTarget}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMoreComments}
              disabled={loadingMore}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-xs md:text-sm font-black text-gray-500 hover:border-indigo-200 hover:text-indigo-600 transition-all shadow-sm active:scale-95"
            >
              {loadingMore ? <Loader2 size={18} className="animate-spin" /> : (
                <>
                  Load More
                  <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;