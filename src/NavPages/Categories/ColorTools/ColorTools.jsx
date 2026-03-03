import React, { useEffect, useRef } from "react";
import colortools from "../../../assets/colortools.svg";
import colortools1 from "../../../assets/colortools1.svg";

import { useDispatch, useSelector } from "react-redux";
import { fetchTools } from "../../../redux/slices/toolsSlice";

import CategoryCard from "../../../components/cetegorycard/CategoryCard";
import Hero from "../../../components/categoryHerosection/Hero";
import BottomSection from "../../../components/categoryHerosection/BottomSection";

import { FaShareAlt } from "react-icons/fa";
import { openShareModal } from "../../../redux/slices/modalSlice";
import BuyMeACoffee from "../../../components/BuyMeACoffee";

function ColorTools() {
  const dispatch = useDispatch();

  const { items: tools = [], status } = useSelector((state) => state.tools);

  const colorTools = tools.filter((p) => p.category === "color-tools");

  const cardsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTools());
  }, [dispatch]);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <>
      <Hero
        title="Online Color Tools For Free"
paragraphs={[
  "Find the perfect color every time with free online color tools.",

"10015.io's online color tools make it easy to find the perfect color for your project and convert it to different color formats, whether you're a designer, artist, or just looking for a new hue."
]}
        image={colortools}
        buttonText="Explore Color Tools"
        onScroll={scrollToCards}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 space-y-12">
        <div className="flex justify-between items-center mb-4 mt-10 h-14  w-full max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900">
            Color Tools Collection
          </h2>
          <button
            className="flex items-center gap-2 px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100"
            onClick={() =>
              dispatch(
                openShareModal({
                  title: "Text Tools",
                  category: "text-tools",
                }),
              )
            }
          >
            <FaShareAlt />
            Share
          </button>
        </div>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
        >
          {colorTools.map((item) => (
            <CategoryCard key={item.id} product={item} />
          ))}
        </div>

        <div classNam>
          <BuyMeACoffee />
        </div>

       
      </div>
       <BottomSection
          image={colortools1}
          title="Top Color Tools On The Web"
          paragraphs={[
         " Color is an important part of design. The right color can make or break a design. That's why it's important to choose the right color for your project. Designers use color in web design to create visual interest, achieve different objectives and communicate messages.",

"There are a number of color tools available on 10015.io that can be used for free. These tools allow users to create color palettes, convert colors into different formats, choose colors, and even create color schemes.",
          ]}
        />
    </>
  );
}

export default ColorTools;
