import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Check,
  Upload,
  Download,
  Copy,
  Image as ChevronRight,
  User,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  Instagram,
} from "lucide-react";

const InstaPostGenerator = () => {
  const [postData, setPostData] = useState({
    theme: "Light",
    username: "usama",
    isVerified: false,
    location: "New York, USA",
    postDate: "2026-01-28T15:51",
    postText:
      "This is a sample post text. @mentions, #hashtags, https://links.com are all automatically converted.",
    avatar: null,
    postImages: [],
    imageCount: 1,
    currentImgIndex: 0,
    likeCount: "1,234",
    commentCount: "1,234",
    isLiked: false,
    isTagged: false,
    hasStory: false,
    showComments: false,
    comments: [
      { username: "usama", text: "I liked the post. Thanks for sharing." },
      { username: "ali", text: "🔥🔥🔥" },
    ],
  });

  const [showExportMenu, setShowExportMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "" });

  const postRef = useRef(null);
  const avatarInputRef = useRef(null);
  const postImageInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-area")) {
        setActiveDropdown(null);
        setShowExportMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const handleInputChange = (field, value) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e, field) => {
    const files = Array.from(e.target.files);
    if (field === "avatar") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) =>
          handleInputChange("avatar", event.target.result);
        reader.readAsDataURL(file);
      }
    } else {
      const readers = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => resolve(ev.target.result);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then((images) => {
        setPostData((prev) => ({
          ...prev,
          postImages: [...prev.postImages, ...images].slice(0, prev.imageCount),
        }));
      });
    }
  };

  const updateComment = (index, field, value) => {
    setPostData((prev) => {
      const newComments = [...prev.comments];
      newComments[index] = { ...newComments[index], [field]: value };
      return { ...prev, comments: newComments };
    });
  };

  const exportImage = async (type) => {
    if (!postRef.current) return;
    try {
      const htmlToImage = await import("html-to-image");
      const options = {
        pixelRatio: 3,
        backgroundColor: postData.theme === "Dark" ? "#000000" : "#ffffff",
      };
      if (type === "download") {
        const dataUrl = await htmlToImage.toPng(postRef.current, options);
        const link = document.createElement("a");
        link.download = `insta-post-${postData.username}.png`;
        link.href = dataUrl;
        link.click();
        showToast("Post Downloaded! ✅");
      } else {
        const blob = await htmlToImage.toBlob(postRef.current, options);
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        showToast("Copied to Clipboard! 📋");
      }
    } catch {
      showToast("Error exporting image");
    }
    setShowExportMenu(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-2 font-manrope text-[#334155]">
      {toast.show && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-100 bg-black/80 text-white px-6 py-3 rounded-full shadow-2xl backdrop-blur-md font-bold">
          {toast.message}
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT: PREVIEW */}
          <div className="flex justify-center h-full">
            <div
              ref={postRef}
              className={`w-full max-w-117.5 self-start rounded-lg overflow-hidden ${
                postData.theme === "Dark"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => avatarInputRef.current.click()}
                    className={`w-10 h-10 rounded-full cursor-pointer overflow-hidden shrink-0 border border-gray-100 ${
                      postData.hasStory
                        ? "p-0.5 bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="w-full h-full rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      {postData.avatar ? (
                        <img
                          src={postData.avatar}
                          className="w-full h-full object-cover"
                          alt="avatar"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <User size={20} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-[14px] leading-tight">
                        {postData.username}
                      </span>
                      {postData.isVerified && (
                        <BadgeCheck
                          size={16}
                          className="text-[#0095f6] fill-[#0095f6]"
                          stroke="white"
                          strokeWidth={1.5}
                        />
                      )}
                      <span className="text-[#8e8e8e] text-[14px] ml-1">
                        • 1h
                      </span>
                    </div>
                    <span className="text-[12px] opacity-80">
                      {postData.location}
                    </span>
                  </div>
                </div>
                <MoreHorizontal size={18} />
              </div>

              <div className="aspect-square border-t border-b border-slate-50 bg-black relative group flex items-center justify-center overflow-hidden">
                {postData.postImages.length > 0 ? (
                  <img
                    src={postData.postImages[postData.currentImgIndex]}
                    className="w-full h-full object-cover"
                    alt="post"
                  />
                ) : (
                  <div
                    className="text-gray-300 flex flex-col items-center cursor-pointer"
                    onClick={() => postImageInputRef.current.click()}
                  >
                    <Instagram size={170} strokeWidth={2} />
                  </div>
                )}
                {postData.isTagged && (
                  <div className="absolute bottom-3 left-3 z-10 animate-in fade-in zoom-in duration-200">
                    <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-white/20">
                      <User size={14} className="text-white" fill="white" />
                    </div>
                  </div>
                )}
                {postData.postImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        handleInputChange(
                          "currentImgIndex",
                          Math.max(0, postData.currentImgIndex - 1)
                        )
                      }
                      className="absolute left-2 bg-white/70 p-1 rounded-full text-black"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        handleInputChange(
                          "currentImgIndex",
                          Math.min(
                            postData.postImages.length - 1,
                            postData.currentImgIndex + 1
                          )
                        )
                      }
                      className="absolute right-2 bg-white/70 p-1 rounded-full text-black"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Heart
                      size={24}
                      className={
                        postData.isLiked ? "text-[#ed4956] fill-[#ed4956]" : ""
                      }
                    />
                    <MessageCircle size={24} />
                    <Send size={24} />
                  </div>
                  <Bookmark size={24} />
                </div>
                <p className="font-semibold text-sm">
                  {postData.likeCount} likes
                </p>
                <div className="text-sm">
                  <span className="font-semibold mr-2">
                    {postData.username}
                  </span>
                  {postData.postText}
                </div>
                {postData.showComments && (
                  <div className="mt-2 space-y-1 text-sm">
                    <p className="text-[#8e8e8e]">
                      View all {postData.commentCount} comments
                    </p>
                    {postData.comments.map((c, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="font-semibold">{c.username}</span>
                        <span className="flex-1">{c.text}</span>
                        <Heart size={12} className="text-[#8e8e8e] mt-1" />
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-[#8e8e8e] text-[10px] uppercase mt-1">
                  {new Date(postData.postDate).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTROLS */}
          <div className="space-y-6 h-full">
            <h2 className="text-xl font-bold">Post Body</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Theme Dropdown */}
              <div className="relative dropdown-area border border-gray-200 rounded-lg">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDropdown(
                      activeDropdown === "theme" ? null : "theme"
                    );
                  }}
                  className="bg-white px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center"
                >
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                      Theme
                    </label>
                    <span className="text-sm font-medium">
                      {postData.theme}
                    </span>
                  </div>
                  <ChevronDown size={14} className="text-gray-400" />
                </div>
                {activeDropdown === "theme" && (
                  <div className="absolute top-full w-full bg-white rounded-lg mt-1 z-50 border border-gray-200 overflow-hidden">
                    {["Light", "Dark"].map((t) => (
                      <div
                        key={t}
                        onClick={() => {
                          handleInputChange("theme", t);
                          setActiveDropdown(null);
                        }}
                        className="px-6 py-4 text-sm font-bold hover:bg-indigo-400 hover:text-white cursor-pointer"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-white px-4 py-2 rounded-lg flex items-end border border-gray-200">
                <div className="flex-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={postData.username}
                    onChange={(e) =>
                      handleInputChange("username", e.target.value)
                    }
                    className="w-full bg-transparent outline-none font-medium text-sm"
                  />
                </div>
                <button
                  onClick={() =>
                    handleInputChange("isVerified", !postData.isVerified)
                  }
                  className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-colors ${
                    postData.isVerified
                      ? "bg-indigo-600 text-white"
                      : "border text-gray-500"
                  }`}
                >
                  Verified
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                  Description
                </label>
                <input
                  type="text"
                  value={postData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="w-full bg-transparent outline-none font-medium text-sm"
                />
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                  Post Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={postData.postDate}
                  onChange={(e) =>
                    handleInputChange("postDate", e.target.value)
                  }
                  className="w-full bg-transparent outline-none font-medium text-sm cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div
                onClick={() => avatarInputRef.current.click()}
                className="bg-white border border-gray-200 px-4 py-2 rounded-lg cursor-pointer"
              >
                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                  Avatar
                </label>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Upload size={16} /> Click to upload
                </div>
                <input
                  ref={avatarInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, "avatar")}
                />
              </div>
              <div
                onClick={() => postImageInputRef.current.click()}
                className="bg-white border border-gray-200 px-4 py-2 rounded-lg cursor-pointer"
              >
                <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                  Post Image
                </label>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Upload size={16} /> Multi Upload
                </div>
                <input
                  ref={postImageInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, "postImage")}
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
              <label className="text-[10px] font-bold text-gray-400 uppercase">
                Post Text
              </label>
              <textarea
                value={postData.postText}
                onChange={(e) => handleInputChange("postText", e.target.value)}
                className="w-full bg-transparent outline-none font-medium text-sm pt-1 resize-none h-16"
              />
            </div>

            {/* Stats Section */}
            <div className="pt-4">
              <h3 className="text-lg font-bold mb-4">Stats & States</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Count Dropdown */}
                <div className="relative dropdown-area">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(
                        activeDropdown === "count" ? null : "count"
                      );
                    }}
                    className="bg-white border border-gray-200 px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center h-full"
                  >
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                        Count
                      </label>
                      <span className="text-sm font-bold">
                        {postData.imageCount}
                      </span>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                  {activeDropdown === "count" && (
                    <div className="absolute top-full w-full bg-white rounded-lg mt-1 z-50 max-h-40 overflow-y-auto border">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            handleInputChange("imageCount", i + 1);
                            setActiveDropdown(null);
                          }}
                          className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                    Likes
                  </label>
                  <input
                    type="text"
                    value={postData.likeCount}
                    onChange={(e) =>
                      handleInputChange("likeCount", e.target.value)
                    }
                    className="w-full bg-transparent outline-none font-bold text-sm"
                  />
                </div>
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                    Comments
                  </label>
                  <input
                    type="text"
                    value={postData.commentCount}
                    onChange={(e) =>
                      handleInputChange("commentCount", e.target.value)
                    }
                    className="w-full bg-transparent outline-none font-bold text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                {[
                  { label: "Is post liked by viewer?", key: "isLiked" },
                  { label: "Is someone tagged?", key: "isTagged" },
                  { label: "Has an Instagram story?", key: "hasStory" },
                  { label: "Are comments displayed?", key: "showComments" },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        postData[item.key]
                          ? "bg-indigo-600 border-indigo-600"
                          : "bg-white"
                      }`}
                    >
                      {postData[item.key] && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={postData[item.key]}
                      onChange={() =>
                        handleInputChange(item.key, !postData[item.key])
                      }
                    />
                    <span className="text-[13px] font-medium text-slate-600 group-hover:text-indigo-600 transition-colors">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comments Editing Section */}
        {postData.showComments && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold px-2">Comments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {postData.comments.map((comment, i) => (
                <React.Fragment key={i}>
                  <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                      User {i + 1}
                    </label>
                    <input
                      type="text"
                      value={comment.username}
                      onChange={(e) =>
                        updateComment(i, "username", e.target.value)
                      }
                      className="w-full bg-transparent outline-none font-bold text-sm"
                    />
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                    <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">
                      Text {i + 1}
                    </label>
                    <input
                      type="text"
                      value={comment.text}
                      onChange={(e) => updateComment(i, "text", e.target.value)}
                      className="w-full bg-transparent outline-none font-medium text-sm"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* EXPORT SECTION */}
        <div className="text-center space-y-6 pt-10">
          <p className="text-[13px] text-gray-500">
            By using Instagram Post Generator, you agree to our{" "}
            <span className="text-indigo-600 font-bold">Usage Policy</span>.
          </p>
          <div className="relative inline-block dropdown-area">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowExportMenu(!showExportMenu);
              }}
              className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 active:scale-95 transition-all hover:bg-indigo-700"
            >
              Export Instagram Post 
              <ChevronDown size={18} />
            </button>
            {showExportMenu && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-65 bg-white rounded-lg border border-gray-200 p-1 z-100 overflow-hidden">
                <button
                  onClick={() => exportImage("download")}
                  className="w-full flex items-center gap-3 px-6 py-4 hover:bg-indigo-400 hover:text-white rounded-lg text-sm font-bold text-left"
                >
                  <Download size={16} /> Download Image
                </button>
                <button
                  onClick={() => exportImage("copy")}
                  className="w-full flex items-center gap-3 px-6 py-4 hover:bg-indigo-400 hover:text-white rounded-lg text-sm font-bold text-left"
                >
                  <Copy size={16} /> Copy to Clipboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPostGenerator;
