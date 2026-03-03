import { useState, useEffect } from "react";
import SidebarSection from "./SidebarSection";
import { buildSidebarData } from "./sidebarData";
import { useParams } from "react-router-dom";

const ToolSidebar = () => {
  const { slug } = useParams();
  const [sidebarData, setSidebarData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await buildSidebarData();
      setSidebarData(data);
    };
    fetchData();
  }, []);

 useEffect(() => {
  if (!sidebarData.length) return;

  const index = sidebarData.findIndex((category) =>
    category.tools.some((tool) => tool.slug === slug)
  );

  const timer = setTimeout(() => {
    setOpenIndex((prev) =>
      prev !== index ? (index !== -1 ? index : null) : prev
    );
  }, 0); 

  return () => clearTimeout(timer);
}, [slug, sidebarData]);


  return (
    <div className="h-full flex flex-col px-3 py-4">
      
      <h3 className="text-xs text-gray-400 uppercase mb-3 flex items-center justify-center tracking-wider h-5 font-bold shrink">
        TOOL CATEGORIES
      </h3>

      <div className="flex-1 overflow-y-auto space-y-1">
        {sidebarData.map((category, index) => (
          <SidebarSection
            key={category.category}
            category={category}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>

    </div>
  );
};

export default ToolSidebar;
