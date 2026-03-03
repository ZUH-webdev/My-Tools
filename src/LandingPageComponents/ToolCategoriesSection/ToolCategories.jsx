import {  useNavigate } from "react-router-dom";

const ToolCategories = () => {
  const categories = [
    { name: "Text Tools", slug: "text-tools" },
    { name: "Image Tools", slug: "image-tools" },
    { name: "CSS Tools", slug: "css-tools" },
    { name: "Coding Tools", slug: "coding-tools" },
    { name: "Color Tools", slug: "color-tools" },
    { name: "Social Media Tools", slug: "social-media-tools" },
    { name: "Miscellaneous Tools", slug: "miscellaneous-tools" },
  ];

  const navigate = useNavigate();

  const handleNavigateToCategory = (slug) => {
    navigate(`/#${slug}`);
    setTimeout(() => {
      const el = document.getElementById(slug);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  return (
    <section className="w-full bg-[#f5f7fb] py-12 sm:py-15 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-[28px] md:text-[32px] font-bold text-[#1f1f2b] mb-8 sm:mb-10 font-['Space_Grotesk']">
        Tool Categories
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 
                      max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleNavigateToCategory(cat.slug)}
            className="w-full bg-white text-center py-5 sm:py-6 md:py-7 rounded-xl sm:rounded-[14px]
                       text-base sm:text-[17px] md:text-[18px] font-semibold text-[#1f1f2b]
                       font-['Space_Grotesk']
                       shadow-[0_4px_16px_rgba(0,0,0,0.06)]
                       transition-all duration-300
                       hover:-translate-y-1.5
                       hover:shadow-[0_6px_22px_rgba(0,0,0,0.1)]
                       active:translate-y-0"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ToolCategories;
