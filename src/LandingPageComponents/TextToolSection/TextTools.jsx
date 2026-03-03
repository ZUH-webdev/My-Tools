import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryCard from "../../components/cetegorycard/CategoryCard";
import { fetchTools } from "../../redux/slices/toolsSlice";

const TextTools = () => {
  const dispatch = useDispatch();
  const cardsRef = useRef(null);

  const { items: tools = [], status } = useSelector(
    (state) => state.tools
  );

  /* Fetch tools once */
  useEffect(() => {
    dispatch(fetchTools());
  }, [dispatch]);

  /* Filter only text tools */
  const textTools = tools.filter(
    (tool) => tool.category === "text-tools"
  );

  if (status === "loading") {
    return <p className="text-center py-10">Loading...</p>;
  }

  const quickLinks = [
    "Discover more",
    "Graphic design software",
    "Apps",
    "Project management software",
    "App development resources",
    "Online tool collection",
    "Firefox extensions",
  ];

  return (
    <section
      id="text-tools"
      className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10"
    >
      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">
          # Text Tools
        </h1>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
          {quickLinks.map((link, index) => (
            <React.Fragment key={index}>
              <button
                type="button"
                className="text-blue-600 font-medium hover:underline"
              >
                {link}
              </button>
              {index < quickLinks.length - 1 && (
                <span className="text-gray-400">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-8" />

      {/* Tools Grid */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {textTools.map((tool) => (
          <CategoryCard
            key={tool.id}
            product={tool}
          />
        ))}
      </div>
    </section>
  );
};

export default TextTools;
