import BuyMeACoffee from "../../components/BuyMeACoffee";
import productFinderImg from "../../images/LandingPageImages/productFinder.png";

const PreFooter = () => {
  return (
    <section className="bg-[#f7f8fc] py-8 sm:py-10 px-4 sm:px-6 md:px-8 font-['Space_Grotesk']">
      {/* Main Container */}
      <div
        className="max-w-7xl mx-auto bg-[#eef0f5] rounded-3xl sm:rounded-[50px] md:rounded-[70px]
                   px-6 sm:px-8 md:px-10 py-10 sm:py-12 md:py-15
                   flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-15
                   text-center lg:text-left"
      >
        {/* Image */}
        <div className="flex justify-center shrink-0 w-full sm:w-auto">
          <img
            src={productFinderImg}
            alt="Product Finder"
            className="w-full max-w-50 sm:max-w-62.5 md:w-65 h-auto"
          />
        </div>

        {/* Content */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#1e1e2f] mb-4">
            Explore the Best Digital Products
          </h2>

          <p className="text-sm sm:text-[15px] md:text-[16px] leading-relaxed text-[#4a4a68] mb-6 sm:mb-7 max-w-full lg:max-w-180">
            Discover standout websites, apps, and digital products in our Product
            Finder. Browse by category or tag — from productivity to social media,
            development to AI, design to marketing, and more. Find what you need
            fast in the product directory.
            <br />
            <strong>Got something great?</strong> Submit your product in seconds.
          </p>

          <button
            className="bg-[#4c5cff] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-[15px] md:text-[16px] font-semibold
                       rounded-full sm:rounded-[25px] md:rounded-[30px] transition-all duration-300
                       hover:bg-[#3a49e0] hover:-translate-y-0.5 active:translate-y-0
                       w-full sm:w-auto"
          >
            <a href="/product-finder" className="text-white no-underline">
              Explore Products
            </a>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <BuyMeACoffee />
   
    </section>
  );
};

export default PreFooter;
