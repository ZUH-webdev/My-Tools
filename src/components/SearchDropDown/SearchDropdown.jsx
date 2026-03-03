import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { normalizeCategory } from "../../utils/normalizeCategory";

function ToolIcon({ tool }) {
  if (tool.image) {
    return (
      <img
        src={`/images/${tool.image}`}
        alt={tool.title}
        className="w-7 h-7 rounded-md object-cover shrink-0"
      />
    );
  }

  const initial = tool.title?.charAt(0).toUpperCase() || "T";

  return (
    <div
      className="w-7 h-7 rounded-md bg-gray-500
                 text-white text-xs font-semibold
                 flex items-center justify-center
                 shrink-0"
    >
      {initial}
    </div>
  );
}

export default function SearchDropdown({ open, query }) {
  const [groups, setGroups] = useState({});
  const innerRef = useRef(null);

  /* ----------------------------------------
     Fetch + filter + normalize + group tools
  ----------------------------------------- */
  useEffect(() => {
    if (!open) return;

    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => {
        const map = {};
        const q = query?.toLowerCase().trim();

        data.forEach((tool) => {
          const category = normalizeCategory(tool.category || "other");

          const matches =
            !q ||
            tool.title?.toLowerCase().includes(q) ||
            category.includes(q);

          if (!matches) return;

          if (!map[category]) map[category] = [];
          map[category].push(tool);
        });

        // sort tools inside each category
        Object.keys(map).forEach((k) => {
          map[k].sort((a, b) =>
            (a.title || "").localeCompare(b.title || "")
          );
        });

        setGroups(map);
      })
      .catch(() => { });
  }, [open, query]);

  if (!open) return null;

  const hasResults = Object.keys(groups).length > 0;

  return (
    <div
      className="absolute top-14 left-0 w-full sm:w-105 max-h-120
                 bg-white border border-gray-200 rounded-lg
                 shadow-lg z-1200 overflow-hidden"
    >
      <div
        ref={innerRef}
        className="overflow-y-auto max-h-120 p-2"
      >
        {!hasResults && (
          <div className="px-4 py-6 text-sm text-gray-500 text-center">
            No tools found
          </div>
        )}

        {Object.keys(groups)
          .sort()
          .map((category) => (
            <div key={category} className="mb-3">
              {/* Category Header */}
              <div
                className="px-3 py-1 text-xs font-semibold
                           uppercase text-gray-500 tracking-wide"
              >
                {category.replace(/-/g, " ")}
              </div>

              {/* Tools */}
              {groups[category].map((tool) => (
                <Link
                  key={tool.id || tool.slug}
                  to={`/tools/${tool.category}/${tool.slug}`}
                  className="flex items-center gap-3
                             px-3 py-2 rounded-md
                             text-sm text-gray-800
                             hover:bg-indigo-50"
                >
                  <ToolIcon tool={tool} />
                  <span>{tool.title}</span>
                </Link>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
