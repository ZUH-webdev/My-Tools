import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTools } from "../../redux/slices/toolsSlice";
import CategoryCard from "../../components/categorycard/CategoryCard";

const ImageTools = () => {
  const dispatch = useDispatch();
  const cardsRef = useRef(null);

  const { items: tools = [], status } = useSelector(
    (state) => state.tools
  );

  /* Fetch tools once */
  useEffect(() => {
    if (!tools.length) {
      dispatch(fetchTools());
    }
  }, [dispatch, tools.length]);

  /* Filter image tools */
  const imageTools = tools.filter(
    (tool) => tool.category === "image-tools"
  );

  if (status === "loading") {
    return <p className="text-center py-10">Loading...</p>;
  }

  const quickLinks = [
    "Discover More",
    "Web Development Services",
    "Productivity tool platform",
    "Image tools",
    "Pdf editing software",
  ];

  return (
    <section
      id="image-tools"
      className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10"
    >
      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-5">
          Image Tools
        </h1>

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
        {imageTools.length > 0 ? (
          imageTools.map((tool) => (
            <CategoryCard
              key={tool.id}
              product={tool}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No image tools found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ImageTools;
