import { useState, useRef, useEffect } from "react";
import { Copy, RotateCcw, ChevronDown, Check } from "lucide-react";

const TextGlitchEffectGenerator = () => {
  const [glitchType, setGlitchType] = useState("Glitch with Color");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [text, setText] = useState("Glitch");
  const [fontSize, setFontSize] = useState(80);
  const [bgColor, setBgColor] = useState("#222222");
  const [textColor, setTextColor] = useState("#ffffff");
  const [glitchColor1, setGlitchColor1] = useState("#00ffff");
  const [glitchColor2, setGlitchColor2] = useState("#ff00ff");
  const [copied, setCopied] = useState(false);
  
  const dropdownRef = useRef(null);

  const glitchOptions = [
    "Glitch with Color",
    "Glitch with Noise",
    "Glitch with Transformation",
    "All-in-One",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const generateCSS = () => {
    const isColor = glitchType === "Glitch with Color" || glitchType === "All-in-One";
    const isNoise = glitchType === "Glitch with Noise" || glitchType === "All-in-One";
    const isTransform = glitchType === "Glitch with Transformation" || glitchType === "All-in-One";

    const animSpeed1 = isColor && !isTransform && !isNoise ? "0.2s" : "2.5s";
    const animSpeed2 = isColor && !isTransform && !isNoise ? "0.3s" : "2.5s";

    return `.glitch-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background-color: ${bgColor};
  padding: 40px 20px;
}

.glitch {
  position: relative;
  font-size: ${fontSize}px;
  font-weight: bold;
  color: ${textColor};
  letter-spacing: 3px;
  /* text-transform: lowercase; <- FIXED: Property removed to support Mixed Case */
  font-family: 'Arial Black', sans-serif;
}

.glitch::before,
.glitch::after {
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 ${isColor ? glitchColor1 : "transparent"};
  animation: glitch-1 ${animSpeed1} cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

.glitch::after {
  left: -2px;
  text-shadow: 2px 0 ${isColor ? glitchColor2 : "transparent"};
  animation: glitch-2 ${animSpeed2} cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
}

@keyframes glitch-1 {
  0% { transform: translateX(0); clip-path: inset(0 0 0 0); ${isColor ? `text-shadow: 2px 0 ${glitchColor1}, -2px 0 ${glitchColor2};` : ""} }
  20% { transform: translateX(${isTransform ? "-3px" : "0"}); clip-path: inset(${isNoise ? "40% 0 10% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: -2px 0 ${glitchColor1}, 2px 0 ${glitchColor2};` : ""} }
  40% { transform: translateX(${isTransform ? "3px" : "0"}); clip-path: inset(${isNoise ? "80% 0 5% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: 2px 0 ${glitchColor2}, -2px 0 ${glitchColor1};` : ""} }
  60% { transform: translateX(${isTransform ? "-5px" : "0"}); clip-path: inset(${isNoise ? "10% 0 70% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: -2px 0 ${glitchColor2}, 2px 0 ${glitchColor1};` : ""} }
  80% { transform: translateX(${isTransform ? "5px" : "0"}); clip-path: inset(${isNoise ? "50% 0 30% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: 2px 0 ${glitchColor1}, -2px 0 ${glitchColor2};` : ""} }
  100% { transform: translateX(0); clip-path: inset(0 0 0 0); }
}

@keyframes glitch-2 {
  0% { transform: translateX(0); clip-path: inset(0 0 0 0); ${isColor ? `text-shadow: -2px 0 ${glitchColor2}, 2px 0 ${glitchColor1};` : ""} }
  20% { transform: translateX(${isTransform ? "3px" : "0"}); clip-path: inset(${isNoise ? "15% 0 45% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: 2px 0 ${glitchColor1}, -2px 0 ${glitchColor2};` : ""} }
  40% { transform: translateX(${isTransform ? "-3px" : "0"}); clip-path: inset(${isNoise ? "45% 0 15% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: -2px 0 ${glitchColor1}, 2px 0 ${glitchColor2};` : ""} }
  60% { transform: translateX(${isTransform ? "5px" : "0"}); clip-path: inset(${isNoise ? "70% 0 5% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: 2px 0 ${glitchColor2}, -2px 0 ${glitchColor1};` : ""} }
  80% { transform: translateX(${isTransform ? "-5px" : "0"}); clip-path: inset(${isNoise ? "5% 0 85% 0" : "0 0 0 0"}); ${isColor ? `text-shadow: -2px 0 ${glitchColor2}, 2px 0 ${glitchColor1};` : ""} }
  100% { transform: translateX(0); clip-path: inset(0 0 0 0); }
}`;
  };

  const handleCopy = () => {
    const code = `<div class="glitch-wrapper">\n  <div class="glitch" data-glitch="${text}">${text}</div>\n</div>\n\n<style>\n${generateCSS()}\n</style>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 font-sans text-gray-700">
      <style>{generateCSS().replace(/.glitch-wrapper/g, ".preview-box")}</style>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* TOP CONTROLS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* CUSTOM STYLISH DROPDOWN */}
          <div className="md:col-span-4 relative" ref={dropdownRef}>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white border border-gray-200 rounded-lg p-3 px-4 shadow-sm cursor-pointer hover:border-indigo-300 transition-all flex flex-col justify-center min-h-16"
            >
              <label className="block text-xs text-gray-400 mb-0.5 font-semibold">Glitch Effect</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 text-[15px] font-medium">{glitchType}</span>
                <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[110%] left-0 w-full bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {glitchOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setGlitchType(opt);
                      setIsDropdownOpen(false);
                    }}
                    className={`px-4 py-2.5 text-[14px] cursor-pointer transition-colors flex items-center justify-between ${
                      glitchType === opt ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {opt}
                    {glitchType === opt && <Check size={14} />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-4 bg-white border border-gray-200 rounded-lg p-3 px-4 shadow-sm min-h-16 flex flex-col justify-center">
            <label className="block text-xs text-gray-400 mb-0.5 font-semibold">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
              className="w-full bg-transparent text-[15px] font-medium outline-none text-gray-700"
            />
          </div>

          <div className="md:col-span-4 bg-white border border-gray-200 rounded-lg p-3 px-4 shadow-sm flex flex-col justify-center min-h-16">
            <label className="text-xs text-gray-400 mb-1 font-semibold">
              Font Size: <span className="text-gray-700 font-bold">{fontSize}px</span>
            </label>
            <input
              type="range"
              min="30"
              max="150"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        {/* PREVIEW CONTAINER */}
        <div className="preview-box rounded-xl shadow-sm overflow-hidden min-h-87.5 flex items-center justify-center transition-all duration-300 border border-gray-100">
          <div className="glitch" data-glitch={text}>{text}</div>
        </div>

        {/* COLOR CONTROLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Background Color", val: bgColor, set: setBgColor },
            { label: "Text Color", val: textColor, set: setTextColor },
            { label: "Glitch Color #1", val: glitchColor1, set: setGlitchColor1 },
            { label: "Glitch Color #2", val: glitchColor2, set: setGlitchColor2 },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 px-4 flex items-center gap-3 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="w-9 h-9 rounded shadow-inner overflow-hidden relative shrink-0 border border-gray-100">
                <input
                  type="color"
                  value={item.val}
                  onChange={(e) => item.set(e.target.value)}
                  className="absolute -inset-2 w-14 h-14 cursor-pointer"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-0.5">{item.label}</span>
                <input
                  type="text"
                  value={item.val}
                  onChange={(e) => item.set(e.target.value)}
                  className="text-[13px] font-mono font-semibold outline-none w-20 uppercase text-gray-600"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CODE BOX */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="px-4 py-2 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">HTML & CSS Code</span>
          </div>
          <pre className="p-6 text-[13px] leading-relaxed font-mono overflow-x-auto max-h-64 bg-white scrollbar-thin scrollbar-thumb-gray-200">
            <code className="text-cyan-600">{"<div"}</code> <code className="text-orange-500">{"class"}</code>=<code className="text-indigo-500">{'"glitch-wrapper"'}</code>{">"}{"\n"}
            {"  "}<code className="text-cyan-600">{"<div"}</code> <code className="text-orange-500">{"class"}</code>=<code className="text-indigo-500">{'"glitch"'}</code> <code className="text-orange-500">{"data-glitch"}</code>=<code className="text-indigo-500">{`"${text}"`}</code>{">"}{text}<code className="text-cyan-600">{"</div>"}\n</code>
            <code className="text-cyan-600">{"</div>"}</code>
            {"\n\n"}
            <code className="text-cyan-600">{"<style>"}</code>{"\n"}
            <code className="text-indigo-600">{generateCSS()}</code>{"\n"}
            <code className="text-cyan-600">{"</style>"}</code>
          </pre>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 justify-center pt-4 pb-12">
          <button
            onClick={() => {
              setGlitchType("Glitch with Color");
              setText("Glitch");
              setFontSize(80);
              setBgColor("#222222");
              setTextColor("#ffffff");
              setGlitchColor1("#00ffff");
              setGlitchColor2("#ff00ff");
            }}
            className="flex items-center gap-2 px-10 py-3 bg-white border border-gray-200 text-gray-500 rounded-full font-bold hover:bg-gray-50 hover:text-gray-700 transition-all active:scale-95 shadow-sm"
          >
            <RotateCcw size={18} /> Reset
          </button>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-14 py-3 rounded-full font-bold transition-all active:scale-95 shadow-lg ${
              copied ? "bg-emerald-500 text-white" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy Snippet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextGlitchEffectGenerator;