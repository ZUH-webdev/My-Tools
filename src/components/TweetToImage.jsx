import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Download,
  Copy,
  Maximize,
  Camera,
  Check,
  X,
  ScanLine,
  BadgeCheck,
  Upload,
  Image as ImageIcon,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { ImEqualizer } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { getTweetByUrl } from "../api/tweetApi";

const TweetToImage = () => {
  // --- States ---
  const [tweetUrl, setTweetUrl] = useState("");
  const [padding, setPadding] = useState(72);
  const [showSettings, setShowSettings] = useState(false);
  const [isWatermarkEnabled, setIsWatermarkEnabled] = useState(false);
  const [aspect, setAspect] = useState("Wide");
  const [exportOpen, setExportOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- Tweet Specific ---
  const [tweetTheme, setTweetTheme] = useState("Light");
  const [tweetLanguage, setTweetLanguage] = useState("English");
  const [tweetTransparency, setTweetTransparency] = useState("No Transparency");
  const [hideParent, setHideParent] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [hideLinks, setHideLinks] = useState(false);
  const [shadow, setShadow] = useState("Soft");
  const [imageQuality, setImageQuality] = useState("High (2x)");

  // --- Watermark ---
  const [watermarkPos, setWatermarkPos] = useState("Bottom Left");
  const [watermarkType, setWatermarkType] = useState("Text Only");
  const [watermarkName, setWatermarkName] = useState("johndoe");
  const [watermarkColor, setWatermarkColor] = useState("#ffffff");

  // --- Backgrounds ---
  const [bgType, setBgType] = useState("Gradient");
  const [bgValue, setBgValue] = useState("Select BG");

  // --- Dynamic Tweet Data ---
  const [tweetData, setTweetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const canvasRef = useRef(null);
  const settingsRef = useRef(null);
  const exportRef = useRef(null);

  // --- Click Outside Logic ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(".custom-dropdown")) {
        setOpenDropdown(null);
      }
      if (
        showSettings &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        !event.target.closest(".settings-btn")
      ) {
        setShowSettings(false);
      }
      if (
        exportOpen &&
        exportRef.current &&
        !exportRef.current.contains(event.target)
      ) {
        setExportOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, showSettings, exportOpen]);

  // --- Capture Tweet Function ---
  const handleCapture = async () => {
    if (!tweetUrl.trim()) {
      setError("Please enter a tweet URL");
      return;
    }

    setIsLoading(true);
    setError(null);

    const result = await getTweetByUrl(tweetUrl);

    if (result.success) {
      setTweetData(result.data);
      setError(null);
    } else {
      setError(result.error);
      setTweetData(null);
    }

    setIsLoading(false);
  };

  // --- Data ---
  const gradients = [
    {
      name: "Ocean Breeze",
      value: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    },
    {
      name: "Purple Bliss",
      value: "linear-gradient(to right, #667eea, #764ba2)",
    },
    { name: "Sunset", value: "linear-gradient(to right, #ff7e5f, #feb47b)" },
    { name: "Lush", value: "linear-gradient(to right, #56ab2f, #a8e063)" },
    { name: "Midnight", value: "linear-gradient(to right, #232526, #414345)" },
    { name: "Mango", value: "linear-gradient(to right, #ffe259, #ffa751)" },
    {
      name: "Fire",
      value: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    },
    {
      name: "Cosmic",
      value: "linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%)",
    },
    { name: "Royal", value: "linear-gradient(to right, #141e30, #243b55)" },
    {
      name: "Neon",
      value: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      name: "Frost",
      value: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    },
    {
      name: "Kashmir",
      value: "linear-gradient(135deg, #614385 0%, #516395 100%)",
    },
    { name: "Emerald", value: "linear-gradient(to right, #348f50, #56b4d3)" },
    {
      name: "Bloody Mary",
      value: "linear-gradient(to right, #ff512f, #dd2476)",
    },
    { name: "Aque", value: "linear-gradient(to right, #00c6ff, #0072ff)" },
    {
      name: "Morpheus Den",
      value: "linear-gradient(to right, #30cfd0, #330867)",
    },
    {
      name: "Celestial",
      value: "linear-gradient(135deg, #c33764 0%, #1d2671 100%)",
    },
    {
      name: "Aubergine",
      value: "linear-gradient(135deg, #aa076b 0%, #61045f 100%)",
    },
    {
      name: "Endless River",
      value: "linear-gradient(to right, #43e97b, #38f9d7)",
    },
    {
      name: "Plum Plate",
      value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
  ];

  const readyImages = [
    {
      name: "Abstract Blue",
      value: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
    },
    {
      name: "Soft Purple",
      value: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800",
    },
    {
      name: "Midnight Sky",
      value:
        "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800",
    },
    {
      name: "Oceanic",
      value:
        "https://images.unsplash.com/photo-1505118380757-91f5f45d8de8?w=800",
    },
    {
      name: "Nature Green",
      value:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    },
    {
      name: "Warm Sunset",
      value:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800",
    },
    {
      name: "Minimal Grey",
      value:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    },
    {
      name: "Mountain Peak",
      value:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    },
    {
      name: "Cyberpunk",
      value: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    },
    {
      name: "Clean White",
      value:
        "https://images.unsplash.com/photo-1518655061766-4a7493741630?w=800",
    },
  ];

  const handleExport = async (type) => {
    if (!canvasRef.current) return;
    try {
      const htmlToImage = await import("html-to-image");
      const scale = imageQuality.includes("2x") ? 2 : 1;
      const options = {
        pixelRatio: scale,
        cacheBust: true,
        backgroundColor: null,
        includeQueryParams: true,
      };

      if (type === "download") {
        const dataUrl = await htmlToImage.toPng(canvasRef.current, options);
        const link = document.createElement("a");
        link.download = `tweet-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      } else if (type === "copy") {
        const blob = await htmlToImage.toBlob(canvasRef.current, options);
        if (!blob) throw new Error("Blob generation failed");
        const item = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([item]);
        alert("Copied to clipboard!");
      }
    } catch (err) {
      console.error("Export Error:", err);
      alert("Export failed.");
    } finally {
      setExportOpen(false);
    }
  };

  const CustomSelect = ({
    label,
    value,
    options,
    onSelect,
    id,
    width = "w-48",
  }) => {
    const selected = options.find((opt) => (opt.value || opt) === value);
    const displayLabel = selected ? selected.name || selected : value;
    return (
      <div
        className={`relative custom-dropdown flex flex-col gap-1 ${width} w-full md:${width}`}
      >
        <label className="text-[10px] font-bold text-slate-400 uppercase">
          {label}
        </label>
        <button
          onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
          className="h-12 w-full bg-white border border-slate-200 rounded-lg px-3 flex items-center justify-between text-sm font-medium text-slate-700 outline-none hover:border-indigo-300 transition-colors"
        >
          <span className="truncate">{displayLabel}</span>
          <ChevronDown
            size={16}
            className={`shrink-0 transition-transform ${
              openDropdown === id ? "rotate-180" : ""
            }`}
          />
        </button>
        {openDropdown === id && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-slate-100 rounded-lg shadow-xl z-500 py-1 max-h-60 overflow-y-auto">
            {options.map((opt, i) => (
              <div
                key={i}
                onClick={() => {
                  onSelect(opt.value || opt);
                  setOpenDropdown(null);
                }}
                className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-sm font-medium flex justify-between items-center"
              >
                {opt.name || opt}{" "}
                {(opt.value || opt) === value && (
                  <Check size={14} className="text-indigo-600" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const PreviewContent = () => {
    // Use dynamic data if available, otherwise use default
    const displayData = tweetData || {
      author: {
        name: "Usama",
        username: "UsamaMasood",
        profileImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s",
        verified: true,
      },
      text: "American elections are for American citizens. Period. \n\nI am a proud cosponsor of the SAVE Act to ensure only U.S. citizens can vote in our elections.",
      formattedDate: "1:09 AM · Jan 29, 2026",
      stats: {
        formattedLikes: "17.2K",
        formattedReplies: "1.1K",
      },
    };

    return (
      <div
        ref={canvasRef}
        style={{
          padding: `${padding}px`,
          background:
            bgType === "No Background"
              ? "transparent"
              : bgType === "Gradient" || bgType === "Solid Color"
              ? bgValue
              : `url(${bgValue}) center/cover no-repeat`,
        }}
        className={`transition-all duration-300 flex items-center justify-center relative 
                scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 origin-center
                ${
                  aspect === "Wide"
                    ? "w-full"
                    : aspect === "Compact"
                    ? "w-[80%]"
                    : "aspect-square w-125"
                }`}
      >
        <div
          className={`w-full max-w-137.5 rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
            tweetTheme === "Light"
              ? "bg-white text-black border border-gray-100"
              : "bg-black text-white border border-white/10"
          } ${
            tweetTransparency !== "No Transparency"
              ? "bg-opacity-80 backdrop-blur-md"
              : ""
          }`}
        >
          <div className="flex gap-3 items-start mb-3 relative">
            <img
              src={displayData.author.profileImage}
              className="w-12 h-12 rounded-full shrink-0 object-cover"
              alt="Profile"
              onError={(e) => {
                e.target.src =
                  "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png";
              }}
            />
            <div className="flex flex-col">
              <div className="font-bold flex items-center gap-1 text-[16px]">
                {displayData.author.name}
                {displayData.author.verified && (
                  <BadgeCheck
                    size={18}
                    className="text-[#1d9bf0] fill-[#1d9bf0]"
                    stroke="white"
                  />
                )}
              </div>
              <div className="text-[#536471] text-[15px]">
                @{displayData.author.username} ·{" "}
                <span className="text-[#1d9bf0] hover:underline cursor-pointer">
                  Follow
                </span>
              </div>
            </div>
            <FaSquareXTwitter className="absolute top-0 right-0" size={24} />
          </div>
          <div
            className="text-[19px] leading-relaxed mb-3"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {displayData.text}
          </div>
          <div className="flex items-center gap-1 text-[#536471] text-[15px] mb-4">
            <span>{displayData.formattedDate}</span>
            <span className="ml-auto opacity-60">
              <X size={14} className="rotate-45" />
            </span>
          </div>
          {!hideFooter && (
            <>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-6 text-[#536471] text-[14px] font-medium">
                <div className="flex items-center gap-2">
                  <Heart size={18} className="text-pink-500 fill-pink-500" />
                  {displayData.stats.formattedLikes}
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} /> Reply
                </div>
                <div className="flex items-center gap-2">
                  <Share2 size={18} /> Copy link
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full py-2 border border-[#cfd9de] rounded-full text-[#1d9bf0] font-bold text-[15px]">
                  Read {displayData.stats.formattedReplies} replies
                </button>
              </div>
            </>
          )}
        </div>
        {isWatermarkEnabled && (
          <div
            style={{ color: watermarkColor }}
            className={`absolute p-6 text-[10px] font-bold uppercase tracking-widest z-50 flex items-center gap-2 ${
              watermarkPos === "Bottom Left"
                ? "bottom-0 left-0"
                : watermarkPos === "Bottom Right"
                ? "bottom-0 right-0"
                : "top-0 left-0"
            }`}
          >
            {watermarkType === "Avatar + Text" && (
              <div className="w-5 h-5 bg-slate-400 rounded-full" />
            )}
            {watermarkType === "Twitter Handle"
              ? "@" + watermarkName
              : watermarkName}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-manrope text-slate-700">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <label className="text-[10px] font-bold text-slate-400 uppercase absolute left-4 top-2 z-10">
              Tweet URL
            </label>
            <input
              type="text"
              value={tweetUrl}
              onChange={(e) => setTweetUrl(e.target.value)}
              placeholder="Paste tweet link here..."
              className="w-full h-14 bg-white border border-gray-200 rounded-lg px-4 pt-6 outline-none focus:ring-2 ring-indigo-400 font-medium"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCapture();
                }
              }}
            />
            {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <button
              onClick={handleCapture}
              disabled={isLoading}
              className="flex-1 md:flex-none h-14 px-8 bg-indigo-600 text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                <>
                  <ScanLine size={16} /> Capture
                </>
              )}
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="settings-btn flex-1 md:flex-none h-14 px-8 bg-white border border-slate-200 text-slate-600 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              <ImEqualizer size={16} /> Settings
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-white rounded-lg border border-gray-200 p-2 md:p-12 min-h-100 overflow-hidden">
          <PreviewContent />
          {showSettings && (
            <div
              ref={settingsRef}
              className="absolute inset-0 md:inset-auto md:-top-5 md:-right-1 w-full md:max-w-xl bg-white rounded-lg border border-gray-200 z-1000 p-8 shadow-2xl animate-in fade-in zoom-in-95 overflow-y-auto"
            >
              <div className="flex justify-between md:hidden mb-4 border-b pb-2">
                <h3 className="font-bold text-[#4D44F0]">SETTINGS</h3>
                <X
                  onClick={() => setShowSettings(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-[#4D44F0] font-bold text-sm uppercase tracking-wider">
                    <FaSquareXTwitter /> Tweet Settings
                  </h3>
                  <CustomSelect
                    label="Theme"
                    value={tweetTheme}
                    options={["Light", "Dark"]}
                    onSelect={setTweetTheme}
                    id="tTheme"
                    width="w-full"
                  />
                  <CustomSelect
                    label="Language"
                    value={tweetLanguage}
                    options={["English", "Urdu", "Hindi", "Arabic"]}
                    onSelect={setTweetLanguage}
                    id="tLang"
                    width="w-full"
                  />
                  <CustomSelect
                    label="Transparency"
                    value={tweetTransparency}
                    options={["No Transparency", "Semi Transparent"]}
                    onSelect={setTweetTransparency}
                    id="tTrans"
                    width="w-full"
                  />
                  <div className="space-y-2 pt-2">
                    {[
                      [hideParent, setHideParent, "Hide Parent"],
                      [hideFooter, setHideFooter, "Hide Footer"],
                      [hideLinks, setHideLinks, "Hide Links"],
                    ].map(([val, set, lab]) => (
                      <label
                        key={lab}
                        className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={val}
                          onChange={(e) => set(e.target.checked)}
                          className="w-4 h-4 accent-indigo-600"
                        />{" "}
                        {lab}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-[#4D44F0] font-bold text-sm uppercase tracking-wider">
                    <Camera size={16} /> Image Settings
                  </h3>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                      Padding: {padding}px
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="150"
                      value={padding}
                      onChange={(e) => setPadding(e.target.value)}
                      className="w-full accent-indigo-600"
                    />
                  </div>
                  <CustomSelect
                    label="Shadow"
                    value={shadow}
                    options={["Soft", "Medium", "Hard"]}
                    onSelect={setShadow}
                    id="iShadow"
                    width="w-full"
                  />
                  <CustomSelect
                    label="Image Quality"
                    value={imageQuality}
                    options={["High (2x)", "Normal (1x)"]}
                    onSelect={setImageQuality}
                    id="iQuality"
                    width="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-center py-6 border-b border-slate-200">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={isWatermarkEnabled}
              onChange={(e) => setIsWatermarkEnabled(e.target.checked)}
              className="w-5 h-5 accent-indigo-600"
            />{" "}
            Add Your Watermark
          </label>
          <div className="flex justify-center gap-4 overflow-x-auto w-full md:w-auto">
            {["Wide", "Compact", "Square"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 text-sm font-bold text-slate-500 cursor-pointer whitespace-nowrap"
              >
                <input
                  type="radio"
                  name="aspect"
                  checked={aspect === item}
                  onChange={() => setAspect(item)}
                  className="w-4 h-4 accent-indigo-600"
                />{" "}
                {item}
              </label>
            ))}
          </div>
          <div className="flex justify-center md:justify-end w-full">
            <button
              onClick={() => setIsFullscreen(true)}
              className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <Maximize size={16} /> Fullscreen Preview
            </button>
          </div>
        </div>

        {isWatermarkEnabled && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6 bg-white rounded-xl border border-slate-100">
            <CustomSelect
              label="Position"
              value={watermarkPos}
              options={["Bottom Left", "Bottom Right", "Top Left"]}
              onSelect={setWatermarkPos}
              id="wPos"
              width="w-full"
            />
            <CustomSelect
              label="Watermark Type"
              value={watermarkType}
              options={["Text Only", "Avatar + Text", "Twitter Handle"]}
              onSelect={setWatermarkType}
              id="wType"
              width="w-full"
            />
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Logo
              </label>
              <label className="h-12 border border-dashed border-slate-300 rounded-lg flex items-center justify-center gap-2 text-slate-400 text-xs font-bold cursor-pointer">
                <Upload size={14} /> Upload{" "}
                <input type="file" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Name / URL
              </label>
              <input
                type="text"
                value={watermarkName}
                onChange={(e) => setWatermarkName(e.target.value)}
                className="h-12 border border-slate-200 rounded-lg px-3 text-sm font-medium outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[10px] font-bold text-slate-400 uppercase">
                Color
              </label>
              <div className="h-12 border border-slate-200 rounded-lg px-2 flex items-center gap-2">
                <input
                  type="color"
                  value={watermarkColor}
                  onChange={(e) => setWatermarkColor(e.target.value)}
                  className="w-8 h-8 rounded border-none bg-transparent"
                />
                <span className="text-xs font-mono font-bold">
                  {watermarkColor}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-end gap-6 pb-12">
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <CustomSelect
              label="Background Type"
              value={bgType}
              options={[
                "Gradient",
                "Solid Color",
                "Image (Ready-to-use)",
                "Image (Upload)",
                "No Background",
              ]}
              onSelect={setBgType}
              id="bgType"
            />
            {bgType === "Gradient" && (
              <CustomSelect
                label="Gradients"
                value={bgValue}
                options={gradients}
                onSelect={setBgValue}
                id="bgGrad"
              />
            )}
            {bgType === "Solid Color" && (
              <div className="flex flex-col gap-1 w-full sm:w-48">
                <label className="text-[10px] font-bold text-slate-400 uppercase">
                  Solid Color
                </label>
                <input
                  type="color"
                  value={bgValue}
                  onChange={(e) => setBgValue(e.target.value)}
                  className="h-12 w-full bg-white border border-slate-200 rounded-lg p-1"
                />
              </div>
            )}
            {bgType === "Image (Ready-to-use)" && (
              <CustomSelect
                label="Backgrounds"
                value={bgValue}
                options={readyImages}
                onSelect={setBgValue}
                id="bgReady"
              />
            )}
            {bgType === "Image (Upload)" && (
              <label className="h-12 w-full sm:w-48 bg-white border border-dashed border-slate-300 rounded-lg flex items-center justify-center gap-2 text-slate-400 text-xs font-bold cursor-pointer mt-5">
                <ImageIcon size={16} /> Upload Background{" "}
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    setBgValue(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </label>
            )}
          </div>
          <div ref={exportRef} className="relative w-full lg:w-64 mt-4 lg:mt-0">
            <button
              onClick={() => setExportOpen(!exportOpen)}
              className="h-14 w-full bg-[#4D44F0] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl"
            >
              Export Image <ChevronDown size={20} />
            </button>
            {exportOpen && (
              <div className="absolute bottom-[110%] right-0 w-full bg-white rounded-xl shadow-2xl border border-slate-100 z-500 py-1">
                <button
                  onClick={() => handleExport("download")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 border-b border-slate-50"
                >
                  <Download size={18} className="text-indigo-600" /> Download
                  Image
                </button>
                <button
                  onClick={() => handleExport("copy")}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  <Copy size={18} className="text-indigo-600" /> Copy Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-2000 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
          >
            <X size={32} />
          </button>
          <div className="max-w-full max-h-full overflow-auto flex items-center justify-center">
            <PreviewContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetToImage;
