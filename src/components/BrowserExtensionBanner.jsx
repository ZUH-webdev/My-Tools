import chrome from "../images/DetailPageImages/chrome.svg";
import firefox from "../images/DetailPageImages/firefox.svg";
import iconblack from "../images/DetailPageImages/iconblack.svg";
import { IoExtensionPuzzle } from "react-icons/io5";

const BrowserExtensionBanner = () => {
  return (
    <div className="w-full pt-4 pb-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm px-6 md:px-12 py-10 text-center border border-gray-100">
        
        {/* Icons Row */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={iconblack} alt="icon" className="w-full h-full object-contain" />
          </div>

          <span className="text-2xl font-bold text-gray-300">+</span>

          <div className="flex items-center justify-center">
            <IoExtensionPuzzle className="w-12 h-12 text-[#2b2b4f]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#2b2b4f] mb-3 font-space-grotesk tracking-tight">
          Get{" "}
          <span className="relative inline-block">
            <span className="relative z-10">“Online Tools”</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#e5e4ff] rounded-full z-0"></span>
          </span>{" "}
          browser extension by 10015!
        </h1>

        {/* Subtitle */}
        <p className="text-base text-gray-500 mb-8 font-manrope">
          Access all tools powered by 10015.io with just one click
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#c7c6ff] text-gray-600 font-manrope font-bold hover:bg-gray-50 transition text-sm">
            <img src={chrome} alt="chrome" className="w-5 h-5" />
            Add to Chrome
          </button>

          <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#c7c6ff] text-gray-600 font-manrope font-bold hover:bg-gray-50 transition text-sm">
            <img src={firefox} alt="firefox" className="w-5 h-5" />
            Add to Firefox
          </button>

        </div>
      </div>
    </div>
  );
};

export default BrowserExtensionBanner;