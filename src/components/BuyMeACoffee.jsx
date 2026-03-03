import buymeacoffee from "../images/DetailPageImages/buymeacoffee.svg";
import mugicon from "../images/DetailPageImages/mugicon.png";

const BuyMeACoffee = () => {
  return (
    <div className="w-full pt-4 pb-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm px-4 py-8 flex items-center gap-8 justify-around md:justify-center flex-col md:flex-row border border-gray-100">
        
        <h2 className="text-2xl font-bold text-gray-800 font-space-grotesk">
          Want to support?
        </h2>

        <a
          href="https://buymeacoffee.com/fatihtelis"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center
            bg-[#FFD600]
            px-5 py-3
            rounded-2xl
            hover:brightness-95
            transition-all
            shadow-sm
          "
        >
          <div className="rounded-md flex items-center justify-center">
            <span className="w-12 h-12">
              <img src={mugicon} alt="mugIcon" />
            </span>
          </div>

          <div className="rounded-md flex items-center justify-center">
            <span className="h-6 w-44">
              <img src={buymeacoffee} alt="buyMeACoffee" />
            </span>
          </div>
        </a>

      </div>
    </div>
  );
};

export default BuyMeACoffee;