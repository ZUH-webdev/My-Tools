import React from "react";
import { CiCoffeeCup } from "react-icons/ci";
import coffee1 from "../assets/coffee1.svg";

function SupportSection() {
  return (
  <div
    className=" w-full px-4 py-8
        bg-white rounded-2xl shadow-md
        flex items-center justify-center
        h-64 md:h-32
    "
  >
        <div className="flex sm:flex-row  gap-10  pt-8 content-center ">

          <h2 className="text-xl font-semibold text-indigo-700 mb-6 md:mb-0">
      Want to support?
    </h2>
<div >
          <a
            href="https://buymeacoffee.com/fatihtelis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-amber-300 hover:bg-amber-400
                       px-6 py-3 rounded-3xl font-semibold text-gray-900
                       active:scale-95 transition-transform h-13 w-40 "
          >
            <CiCoffeeCup className="h-6 w-6" />
            <img src={coffee1} alt="Coffee" className="h-10 w-20" />
          </a>
</div>
        </div>
      </div>
  );
}

export default SupportSection;
