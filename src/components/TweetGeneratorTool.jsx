import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  ChevronDown,
  Download,
  Copy,
  Upload,
  Check,
  Bookmark,
  Share,
  User,
  BadgeCheck,
  X,
  FolderOpen
} from "lucide-react";

const TweetGeneratorTool = () => {
  const [theme, setTheme] = useState("Light");
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const [name, setName] = useState("Usama Masood");
  const [username, setUsername] = useState("usama");
  const [isVerified, setIsVerified] = useState(true);
  const [tweetDate, setTweetDate] = useState("2026-01-28T17:07");
  const [tweetText, setTweetText] = useState(
    "This is a sample tweet. @mentions, #hashtags, https://links.com are all automatically converted."
  );
  const [stats, setStats] = useState({
    reply: 0,
    retweet: 0,
    like: 0,
    view: 0,
  });

  const [avatar, setAvatar] = useState(null);
  const [tweetImages, setTweetImages] = useState([]);

  const themeRef = useRef(null);
  const exportRef = useRef(null);
  const avatarInputRef = useRef(null);
  const tweetCardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeRef.current && !themeRef.current.contains(event.target))
        setIsThemeOpen(false);
      if (exportRef.current && !exportRef.current.contains(event.target))
        setIsExportOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const handleExport = async (action) => {
    setIsProcessing(true);
    try {
      const { toPng, toBlob } = await import("html-to-image");
      if (!tweetCardRef.current) return;

      if (action === "download") {
        const dataUrl = await toPng(tweetCardRef.current, {
          cacheBust: true,
          pixelRatio: 3,
          backgroundColor:
            theme === "Light"
              ? "#ffffff"
              : theme === "Dark"
              ? "#000000"
              : "#15202b",
        });
        const link = document.createElement("a");
        link.download = `tweet-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
        showToast("Tweet downloaded successfully!");
      } else if (action === "copy") {
        const blob = await toBlob(tweetCardRef.current, { pixelRatio: 3 });
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        showToast("Tweet copied to clipboard!");
      }
    } catch (err) {
      console.error("Export failed:", err);
      showToast("Something went wrong!", "error");
    } finally {
      setIsProcessing(false);
      setIsExportOpen(false);
    }
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === "avatar") setAvatar(reader.result);
      else if (tweetImages.length < 4)
        setTweetImages([...tweetImages, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const getCardThemeStyles = () => {
    if (theme === "Dark") return "bg-black text-white border-gray-800";
    if (theme === "Dim") return "bg-[#15202b] text-white border-gray-700";
    return "bg-white text-black border-gray-200";
  };

  const renderImageGrid = () => {
    const count = tweetImages.length;
    if (count === 0) return null;
    const gridConfigs = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-2",
      4: "grid-cols-2",
    };

    return (
      <div
        className={`mt-3 grid gap-0.5 rounded-2xl overflow-hidden border ${
          theme === "Light" ? "border-gray-200" : "border-gray-700"
        } ${gridConfigs[count]}`}
      >
        {tweetImages.map((img, i) => (
          <div
            key={i}
            className={`relative ${
              count === 3 && i === 0 ? "row-span-2 h-full" : "h-32 md:h-48"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="tweet" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-manrope p-1 md:p-8 relative">
      {toast.show && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-100 flex items-center gap-3 px-6 py-3 rounded-2xl shadow-2xl border transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${
            toast.type === "success"
              ? "bg-white border-green-100 text-green-600"
              : "bg-white border-red-100 text-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <Check size={20} className="bg-green-100 rounded-full p-0.5" />
          ) : (
            <X size={20} className="bg-red-100 rounded-full p-0.5" />
          )}
          <span className="font-bold text-sm">{toast.message}</span>
        </div>
      )}

      <div className="max-w-5xl mx-auto space-y-6">
        {/* PREVIEW */}
        <div className="w-full bg-white border border-gray-200 rounded-lg p-4 md:p-16 flex justify-center items-center overflow-hidden">
          <div
            ref={tweetCardRef}
            className={`w-full max-w-137.5 border rounded-lg p-3 md:p-4 transition-all duration-300 ${getCardThemeStyles()}`}
          >
            <div className="flex gap-2 md:gap-3">
              <div
                onClick={() => avatarInputRef.current.click()}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden shrink-0 cursor-pointer"
              >
                {avatar ? (
                  <img
                    src={avatar}
                    className="w-full h-full object-cover"
                    alt="avatar"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User size={20} />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-1 overflow-hidden">
                    <div className="flex items-center gap-1">
                      <span className="font-bold truncate text-[14px] md:text-[15px]">
                        {name}
                      </span>
                      {isVerified && (
                        <BadgeCheck
                          size={17}
                          className="text-[#1d9bf0] fill-[#1d9bf0] shrink-0"
                          stroke="white"
                          strokeWidth={1.5}
                        />
                      )}
                    </div>
                    <span className="text-gray-500 truncate text-[13px] md:text-[14px]">
                      @{username}
                    </span>
                  </div>
                  <div className="text-gray-500 font-bold tracking-widest text-xs">
                    ···
                  </div>
                </div>
                <p className="mt-1 text-[14px] md:text-[15px] leading-normal whitespace-pre-wrap wrap-break-word">
                  {tweetText}
                </p>
                {renderImageGrid()}

                <div className="mt-3 text-gray-500 text-[14px]">
                  {tweetDate.replace("T", " ")}
                </div>

                <div className="mt-4 flex justify-between text-gray-500 max-w-full">
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <MessageCircle size={17} />
                    <span className="text-[10px] md:text-xs">
                      {stats.reply}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Repeat2 size={17} />
                    <span className="text-[10px] md:text-xs">
                      {stats.retweet}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <Heart size={17} />
                    <span className="text-[10px] md:text-xs">{stats.like}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-1.5">
                    <BarChart2 size={17} />
                    <span className="text-[10px] md:text-xs">{stats.view}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <Bookmark size={17} />
                    <Share size={17} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative" ref={themeRef}>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4 z-10">
                Theme
              </label>
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="w-full h-14 bg-white border border-gray-200 rounded-lg px-4 pt-5 flex items-center justify-between font-semibold text-gray-700"
              >
                {theme}{" "}
                <ChevronDown
                  size={18}
                  className={isThemeOpen ? "rotate-180" : ""}
                />
              </button>
              {isThemeOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-100 rounded-lg z-50 overflow-hidden">
                  {["Light", "Dim", "Dark"].map((t) => (
                    <div
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setIsThemeOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-indigo-400 hover:text-white cursor-pointer text-sm font-semibold flex justify-between items-center"
                    >
                      {t}{" "}
                      {theme === t && (
                        <Check size={14} className="text-indigo-600" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              onClick={() => avatarInputRef.current.click()}
              className="relative border border-gray-200 bg-white rounded-lg h-14 flex items-center px-4 pt-2 cursor-pointer transition-colors"
            >
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4">
                Avatar
              </label>
              <input
                type="file"
                ref={avatarInputRef}
                onChange={(e) => handleImageUpload(e, "avatar")}
                className="hidden"
              />
              <div className="pt-4 flex items-center gap-2 text-sm text-gray-500">
                <FolderOpen size={16} />{" "}
                <span className="truncate text-sm font-bold text-slate-600 hover:text-slate-700">Click to upload</span>
              </div>
            </div>
            <div className="relative border border-gray-200 bg-white rounded-lg h-14 flex items-center px-4 pt-2 cursor-pointer hover:bg-gray-50 overflow-hidden transition-colors">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4">
                Tweet Images ({tweetImages.length}/4)
              </label>
              <input
                type="file"
                onChange={(e) => handleImageUpload(e, "content")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="pt-4 flex items-center gap-2 text-sm text-gray-500">
                <FolderOpen size={16} />{" "}
                <span className="truncate text-sm font-bold text-slate-600 hover:text-slate-700">Click to Upload</span>
                {tweetImages.length > 0 && (
                  <span className="bg-indigo-100 text-indigo-600 px-2 rounded-full text-[10px] font-bold ml-1">
                    {tweetImages.length}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative bg-white">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 border border-gray-200 rounded-lg px-4 pt-5 outline-none focus:ring-1 focus:ring-indigo-500 font-semibold"
              />
            </div>
            <div className="relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4">
                Username
              </label>
              <div className="flex items-center h-14 border border-gray-200 bg-white rounded-lg px-4">
                <span className="text-gray-400 pt-5">@</span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 pt-5 outline-none font-medium ml-1 min-w-0"
                />
                <button
                  onClick={() => setIsVerified(!isVerified)}
                  className={`shrink-0 px-6 py-2 rounded-full text-[16px] font-bold transition-colors border border-gray-400 tracking-wider ${
                    isVerified
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  Verified
                </button>
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4 z-10">
                Tweet Date
              </label>
              <div className="relative flex items-center">
                <input
                  type="datetime-local"
                  value={tweetDate}
                  onChange={(e) => setTweetDate(e.target.value)}
                  className="w-full h-14 border border-gray-200 rounded-lg px-4 pt-5 outline-none text-sm font-medium bg-white cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4">
              Tweet Text
            </label>
            <textarea
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              className="w-full min-h-30 border border-gray-200 bg-white rounded-lg px-4 pt-8 outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
            />
            <span className="absolute top-2 right-4 text-[10px] font-bold text-gray-300">
              {tweetText.length}/4000
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Reply", "Retweet", "Like", "View"].map((field) => (
              <div key={field} className="relative">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest absolute top-2 left-4">
                  {field}
                </label>
                <input
                  type="number"
                  value={stats[field.toLowerCase()]}
                  onChange={(e) =>
                    setStats({
                      ...stats,
                      [field.toLowerCase()]: e.target.value,
                    })
                  }
                  className="w-full h-14 border border-gray-200 bg-white rounded-lg px-4 pt-5 outline-none font-semibold"
                />
              </div>
            ))}
          </div>

          <div
            className="flex justify-center relative w-full pt-4 pb-4"
            ref={exportRef}
          >
            <button
              disabled={isProcessing}
              onClick={() => setIsExportOpen(!isExportOpen)}
              className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Export Tweet Image"}{" "}
              <ChevronDown
                size={20}
                className={isExportOpen ? "rotate-180" : ""}
              />
            </button>
            {isExportOpen && (
              <div className="absolute top-full w-full md:w-64 bg-white border border-gray-200 rounded-lg overflow-hidden py-2 z-50">
                <div
                  onClick={() => handleExport("download")}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-400 hover:text-white hover:rounded-lg hover:mx-2  cursor-pointer text-gray-700 font-bold text-sm"
                >
                  <Download size={18} className="text-indigo-600" /> Download
                  PNG
                </div>
                <div
                  onClick={() => handleExport("copy")}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-400 hover:text-white hover:rounded-lg hover:mx-2 cursor-pointer text-gray-700 font-bold text-sm border-t border-gray-50"
                >
                  <Copy size={18} className="text-indigo-600" /> Copy to
                  Clipboard
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetGeneratorTool;
