import illustration from "../../images/LandingPageImages/FooterIcon.svg";

const PreFooter = () => {
  return (
    <section className="w-full bg-[#f6f7fb] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Left Illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img
              src={illustration}
              alt="All-in-one tools illustration"
              className="w-full max-w-70 sm:max-w-[320px] md:max-w-md h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Best Online All-In-One Toolbox
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              10015.io brings all online tools together. If you got tired of
              bookmarking a single website for each online tool, you are in
              the right place.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              10015.io has designed as simple as possible to make it easier
              to focus on functionality of the tool. Main aim of the tools
              is to perform the operation in minimum steps with a clear UI/UX.
            </p>

            <p className="text-gray-700 text-sm sm:text-base font-medium">
              Start to use 10015.io and forget all other tools you use forever.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreFooter;
