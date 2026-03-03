import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { normalizeCategory } from "../../utils/normalizeCategory";


function renderIcon(name, image, color = "6b7280") {
  if (image) {
    return (
      <img
        src={`/images/${image}`}
        alt={name}
        className="w-8 h-8 rounded-md object-cover flex-shrink-0"
      />
    );
  }
  const initial = name ? name.trim().charAt(0).toUpperCase() : "T";
  const fill = `#${color}`;
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 rounded-md"
      aria-hidden="true"
    >
      <rect rx="6" width="32" height="32" fill={fill} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Inter, Arial, Helvetica, sans-serif"
        fontSize="14"
        fill="#ffffff"
      >
        {initial}
      </text>
    </svg>
  );
}

export default function AllToolsList() {
  const [groups, setGroups] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        const map = {};
        data.forEach((t) => {
         const cat = normalizeCategory(t.category || "other");
          if (!map[cat]) map[cat] = [];
          map[cat].push(t);
        });
        // optional: sort categories and items
        Object.keys(map).forEach((k) => {
          map[k].sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        });
        setGroups(map);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="p-4 text-sm text-gray-500">Loading tools…</div>;

  return (
    <div className="p-4 grid gap-6">
      {Object.keys(groups)
        .sort()
        .map((cat) => (
          <section key={cat} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{cat}</h3>
              <span className="text-sm text-gray-500">{groups[cat].length} tools</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {groups[cat].map((tool) => (
                <Link
                  key={tool.id || tool.slug || tool.title}
                  to={tool.slug ? `/${tool.slug}` : tool.path || "#"}
                  className="flex items-center gap-3 p-3 rounded hover:bg-gray-50"
                >
                  {renderIcon(tool.title, tool.image)}
                  <div>
                    <div className="text-sm font-medium text-gray-800">{tool.title}</div>
                    {tool.description && (
                      <div className="text-xs text-gray-500">{tool.description}</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}
