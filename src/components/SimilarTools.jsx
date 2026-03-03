import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import CategoryCard from '../components/cetegorycard/CategoryCard';



const SimilarTools = () => {
  const [relatedTools, setRelatedTools] = useState([]);
  const [category, setCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const currentSlug = pathParts[pathParts.length - 1];

    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const currentTool = data.find(t => t.slug === currentSlug);

        if (currentTool) {
          setCategory(currentTool.category);
          
          const filtered = data
            .filter(item =>
              item.category === currentTool.category &&
              item.slug !== currentSlug
            )
            .slice(0, 3);
          setRelatedTools(filtered);
        }
      });
  }, [location.pathname]);

  if (relatedTools.length === 0) return null;

  return (
    <div className="w-full pt-12 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800 capitalize">
            More {category}
          </h2>
          
          <a 
            href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`} 
            className="flex items-center text-indigo-600 font-bold hover:underline"
          >
            See All <ChevronRight size={18} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTools.map((tool) => (
            <CategoryCard key={tool.slug} product={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SimilarTools;