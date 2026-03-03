import { useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import chromeImg from "../../images/LandingPageImages/chrome.png";
import firefoxImg from "../../images/LandingPageImages/firefox.png";

// Lazy load the heavy DotLottie animation component
const Animation = lazy(() => import('../DotLottieReact'));

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="
  relative w-full min-h-[calc(100vh-60px)]
  flex justify-between items-center gap-16
  bg-[#f1f2fb]
  overflow-hidden
  max-lg:flex-col max-lg:justify-start max-lg:gap-0
"
      >
        {/* Decorative Radial Gradient */}
        <div
          className="
          pointer-events-none absolute
          -top-[30%] left-[10%]
          w-100 h-100
          rounded-full
          bg-[radial-gradient(circle,rgba(71,82,236,0.08)_0%,transparent_70%)]
          z-1

          max-lg:w-75 max-lg:h-75
          max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-top-[20%]

          max-md:w-50 max-md:h-50 max-md:opacity-50
          max-sm:w-37.5 max-sm:h-37.5 max-sm:top-0 max-sm:opacity-30
        "
        />

        {/* Left Content */}
        <div className="flex-1 flex items-center relative z-2 w-full">
          <div
            className="
            w-full max-w-150
            pl-25 pr-15 text-left

            max-xl:max-w-125
            max-xl:pl-20 max-xl:pr-10

            max-lg:max-w-full max-lg:px-7.5
            max-lg:pt-10 max-lg:text-center
            max-md:px-5
            max-sm:px-4
          "
          >
            <h1
              className="
  text-[40px] font-bold text-[#1f2348]
  leading-tight tracking-[-1px] pt-20 sm:pt-24 md:pt-32 mb-5 
  whitespace-nowrap

  max-xl:text-[52px]
  max-lg:text-[42px] max-lg:whitespace-normal
  max-md:text-[36px]
  max-sm:text-[28px] max-sm:tracking-[-0.5px]
"
            >
              All Online Tools In "One Box"
            </h1>
            <img
              src="./images/headingline.svg"
              alt=""
              className="mb-5 max-md:mb-4 max-sm:mb-3"
            />

            <p
              className="
              text-[17px] text-[#555] leading-relaxed mb-4 
              max-xl:text-[16px]
              max-lg:text-[15px]
              max-md:text-[14px]
              max-sm:text-[13px]
            "
            >
              No need to bookmark the tools you like separately.
            </p>

            <p
              className="
              text-[17px] text-[#555] leading-relaxed mb-4
              max-xl:text-[16px]
              max-lg:text-[15px]
              max-md:text-[14px]
              max-sm:text-[13px]
            "
            >
              10015.io is a{" "}
              <strong className="text-[#4752ec] font-semibold">
                "free all-in-one toolbox"
              </strong>{" "}
              solution created to ease your life by preventing bookmark mess.
            </p>

            {/* Buttons */}
            <div
              className="
              flex gap-4 items-center mt-8
              max-lg:justify-center
              max-md:flex-wrap max-md:gap-3
              max-sm:flex-col max-sm:gap-2.5
            "
            >
              <button
                className="
                bg-linear-to-br from-[#4752ec] to-[#3a42b8]
                text-white px-7 py-3.25
                rounded-full text-[15px] font-semibold
                shadow-[0_4px_15px_rgba(71,82,236,0.3)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_6px_20px_rgba(71,82,236,0.4)]
                active:translate-y-0

                max-lg:px-6 max-lg:text-[14px]
                max-md:px-5 max-md:text-[13px]
                max-sm:w-full max-sm:text-[12px]
              "
                onClick={() => {
                  navigate("/#featured-tools");
                  const el = document.getElementById("featured-tools");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Tools →
              </button>

              <button
                className="
                border-2 border-[#4752ec]
                text-[#4752ec]
                px-7 py-3.25
                rounded-full text-[15px] font-semibold
                transition-all duration-300
                hover:bg-[#f0f4ff]
                hover:-translate-y-0.5
                active:translate-y-0

                max-lg:px-6 max-lg:text-[14px]
                max-md:px-5 max-md:text-[13px]
                max-sm:w-full max-sm:text-[12px]
              "
                onClick={() => {
                  navigate("/product-finder");
                  const el = document.getElementById("product-finder");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Product Finder
              </button>
            </div>

            {/* Extensions */}
            <div
              className="
              mt-10
              max-lg:mt-8 max-lg:text-center
              max-md:mt-6
              max-sm:mt-5
            "
            >
              <p
                className="
                text-[15px] font-medium text-[#333] mb-4
                max-lg:text-[14px]
                max-md:text-[13px]
                max-sm:text-[12px]
              "
              >
                Get the extension and access all tools with just one click
              </p>

              {[
                {
                  img: chromeImg,
                  text: "Add to Chrome",
                  url: "https://chromewebstore.google.com/detail/online-tools-by-10015io/afbphoagjpegnkpeiliacmiiggojdabo?pli=1",
                },
                {
                  img: firefoxImg,
                  text: "Add to Firefox",
                  url: "https://addons.mozilla.org/en-US/firefox/addon/online-tools-by-10015-io/",
                },
              ].map((ext) => (
                <a
                  key={ext.text}
                  href={ext.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2.5
                    bg-white text-[rgb(60,60,70)]
                    px-4.5 py-2.75
                    border border-[rgba(90,88,88,0.12)]
                    rounded-[20px]
                    text-[15px] font-semibold
                    mr-3 mb-2
                    transition-all duration-200
                    hover:bg-[#fbfbff]
                    hover:-translate-y-0.5
                    hover:border-[rgba(71,82,236,0.2)]
                    hover:shadow-[0_3px_10px_rgba(71,82,236,0.1)]
                    active:translate-y-0

                    max-lg:px-4 max-lg:py-2.5 max-lg:text-[14px]
                    max-md:px-3.5 max-md:text-[13px]
                    max-sm:px-3 max-sm:text-[12px]
                  "
                >
                  <img
                    src={ext.img}
                    alt={ext.text}
                    className="
                      w-4.5 h-4.5 object-contain
                      max-sm:w-4 max-sm:h-4
                    "
                  />
                  {ext.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Animation */}
        <div
          className="
          flex-1 flex justify-center items-center
          relative z-2
          pr-40 pt-22.5

          max-xl:pr-10 max-xl:pt-20
          max-lg:w-full max-lg:p-10
          max-md:p-7.5
          max-sm:p-5  
        "
        >
          <div
            className="
            w-full max-w-full h-auto
            max-h-[80vh]
            flex items-center justify-center

            max-xl:max-h-[75vh]
            max-lg:max-h-[50vh]
            max-md:max-h-[40vh]
            max-sm:max-h-[35vh]
          "
          >
            <Suspense fallback={<div className="w-165 h-112.5" />}>
              <Animation className="w-165 h-112.5" />
            </Suspense>
          </div>
        </div>
      </section>
      <section className="bg-[#E9EbF9] py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center sm:justify-evenly gap-6 sm:gap-8 md:gap-10 text-[#9aa0d9]">
            {/* Featured In Text */}
            <span className="text-xs sm:text-sm font-medium tracking-wide opacity-80 w-full sm:w-auto text-center sm:text-left">
              Featured in:
            </span>

            {/* Product Hunt */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-80">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#9aa0d9] text-[10px] sm:text-xs font-bold">
                P
              </span>
              <span className="hidden sm:inline">Product Hunt</span>
              <span className="sm:hidden">PH</span>
            </div>

            {/* Y Combinator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-80">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 border border-[#9aa0d9] text-[10px] sm:text-xs font-bold">
                Y
              </span>
              <span className="hidden sm:inline">Combinator</span>
              <span className="sm:hidden">YC</span>
            </div>

            {/* Indie Hackers */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-80">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 border border-[#9aa0d9] text-[10px] sm:text-xs font-bold">
                IH
              </span>
              <span className="hidden md:inline">INDIE HACKERS</span>
              <span className="hidden sm:inline md:hidden">Indie Hackers</span>
              <span className="sm:hidden">IH</span>
            </div>

            {/* Reddit */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-80">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#9aa0d9] text-[10px] sm:text-xs font-bold">
                r
              </span>
              <span className="hidden sm:inline">reddit</span>
              <span className="sm:hidden">r/</span>
            </div>

            {/* SitePoint */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold opacity-80">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 border border-[#9aa0d9] text-[10px] sm:text-xs font-bold">
                S
              </span>
              <span className="hidden sm:inline">sitepoint</span>
              <span className="sm:hidden">SP</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
