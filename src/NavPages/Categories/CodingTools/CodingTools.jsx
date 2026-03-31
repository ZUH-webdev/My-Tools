import React, { useEffect, useRef } from "react";
import codingtools from "../../../assets/codingtools.svg";
import codingtools1 from "../../../assets/codingtools1.svg";

import { useDispatch, useSelector } from "react-redux";
import { fetchTools } from "../../../redux/slices/toolsSlice";
import { openShareModal } from "../../../redux/slices/modalSlice";

import CategoryCard from "../../../components/categorycard/CategoryCard";
import Hero from "../../../components/categoryHerosection/Hero";
import BottomSection from "../../../components/categoryHerosection/BottomSection";

import { FaShareAlt } from "react-icons/fa";
import BuyMeACoffee from "../../../components/BuyMeACoffee";

function CodingTools() {
  const dispatch = useDispatch();
  const { items: tools = [], status } = useSelector((state) => state.tools);

  const codingTools = tools.filter(
    (tool) => tool.category === "coding-tools"
  );

  const cardsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTools());
  }, [dispatch]);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (status === "loading") return <p className="text-center py-20">Loading...</p>;

  return (
    <>
      {/* HERO SECTION */}
      <Hero
        title="Online Coding Tools For Free"
        paragraphs={[
          "Build, debug, and optimize your code effortlessly using powerful online coding tools.",
          "10015.io provides free coding utilities that help developers format code, generate hashes, convert data formats, and improve productivity — all without installing any software.",
        ]}
        image={codingtools}
        buttonText="Explore Coding Tools"
        onScroll={scrollToCards}
      />

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 space-y-12">
        {/* HEADER */}
        <div className="flex justify-between items-center mt-10 h-14 w-full">
          <h2 className="text-xl font-semibold text-gray-900">
            Coding Tools Collection
          </h2>

          <button
            className="flex items-center gap-2 px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100 transition"
            onClick={() =>
              dispatch(
                openShareModal({
                  title: "Coding Tools",
                  category: "coding-tools",
                })
              )
            }
          >
            <FaShareAlt />
            Share
          </button>
        </div>

        {/* TOOLS GRID */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6"
        >
          {codingTools.map((item) => (
            <CategoryCard key={item.id} product={item} />
          ))}
        </div>

        {/* SUPPORT */}
        <BuyMeACoffee />
      </div>

      {/* BOTTOM SECTION */}
      <BottomSection
        image={codingtools1}
        title="Top Coding Tools On The Web"
        paragraphs={[
          "Coding is the foundation of modern technology. From web development to system programming, developers rely on tools to write clean, efficient, and secure code.",
          "10015.io offers a wide range of free coding tools such as code formatters, encoders, decoders, hash generators, and converters that simplify everyday development tasks.",
          "All tools are browser-based, fast, and designed to boost productivity for developers of all skill levels.",
        ]}
      />
    </>
  );
}

export default CodingTools;
