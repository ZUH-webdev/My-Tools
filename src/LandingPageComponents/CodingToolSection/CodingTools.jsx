import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTools } from "../../redux/slices/toolsSlice";
import CategoryCard from "../../components/cetegorycard/CategoryCard";

const CodingTools = () => {
  const dispatch = useDispatch();
  const { items: tools = [], status } = useSelector((state) => state.tools || {});
  const codingTools = Array.isArray(tools)
    ? tools.filter((t) => {
        const c = String(t.category || "").toLowerCase();
        return c === "coding-tools" || c === "developer-tools" || c.includes("code") || c.includes("developer");
      })
    : [];
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!tools || tools.length === 0) dispatch(fetchTools());
  }, [dispatch, tools]);

  if (status === "loading") return <p>Loading...</p>;

  const QuickLinks = [
    "Discover More",
    "Web Development Services",
    "Productivity tool platform",
    "Social media tools",
    "Social media management tools",
    "Image tools",
    "Pdf editing software",
    "Productivity apps",
  ];

  return (
    <section id="coding-tools" className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Coding Tools</h1>

      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {QuickLinks.map((link, index) => (
          <React.Fragment key={index}>
            <button type="button" className="text-blue-600 font-medium hover:underline">
              {link}
            </button>
            {index < QuickLinks.length - 1 && <span className="text-gray-400">•</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="h-px bg-gray-200 my-8" />

      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {codingTools.length > 0 ? (
          codingTools.map((tool) => <CategoryCard key={tool.id} product={tool} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No coding tools found.</p>
        )}
      </div>
    </section>
  );
};

export default CodingTools;
