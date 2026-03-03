import { Link, useParams } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const SidebarSection = ({ category, isOpen, onToggle }) => {
  const { slug } = useParams();

  return (
    <div className="bg-gray-100">

      <button
        onClick={onToggle}
        className="
          w-full flex items-center justify-between
          px-3 py-2 text-sm font-medium
          text-gray-700 rounded
          hover:bg-gray-100 h-12
        "
      >
        <span>{category.displayName}</span>
        <FiChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="mt-1 space-y-0.5 ">
          {category.tools.map((tool) => {
            const isActive = slug === tool.slug;

            return (
              <li key={tool.slug}>
                <Link
                  to={`/tools/${category.category}/${tool.slug}`}
                  className={`
                    flex items-center gap-2
                    px-6 py-2 text-sm rounded
                    transition pl-4
                    bg-white
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                  `}
                >
                  <img
                    src={`/images/${tool.image}`}
                    alt={tool.title}
                    className="w-4 h-4"
                  />
                  <span>{tool.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

    </div>
  );
};

export default SidebarSection;
