import { useState, useMemo } from 'react';
import LoaderCard from './LoaderCard';
import { ChevronDownIcon } from 'lucide-react';
import CustomizeModal from './CustomizationModal';
import { loadersData } from '../data/loaders/loadersData';

const LoaderGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Loaders');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLoader, setSelectedLoader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [settings, setSettings] = useState({
    primaryColor: '#474bff',
    secondaryColor: '#dbdcef',
    size: 45,
    speed: '1.5s'
  });

  // --- 1. Filter Logic  ---
  const filteredLoaders = useMemo(() => {
    if (selectedCategory === 'All Loaders') return loadersData;
    
    return loadersData.filter(loader => {
      const id = loader.id.toLowerCase();
      if (selectedCategory === 'Spinners') return id.includes('spinner');
      if (selectedCategory === 'Progress Loaders') return id.includes('progress');
      if (selectedCategory === 'Dot Loaders') return id.includes('dots') || (id.startsWith('l') && loader.category === 'Dots');
      if (selectedCategory === 'Bar Loaders') return id.includes('bar') && !id.includes('dots') && !id.includes('spinner');
      return true;
    });
  }, [selectedCategory]);

  const itemsPerPage = 6;
  
  // --- 2. Pagination Calculations ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLoaders = filteredLoaders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredLoaders.length / itemsPerPage);

  const handleCustomize = (loader) => {
    setSelectedLoader(loader);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto font-manrope text-slate-700">

      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div className="w-64">
          <label className="text-xs text-slate-400 font-semibold block mb-1">CSS Loader Categories</label>
          <div className="relative">
            <select 
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1); 
              }}
              className="w-full mx-auto p-3 bg-white border border-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>All Loaders</option>
              <option>Spinners</option>
              <option>Progress Loaders</option>
              <option>Dot Loaders</option>
              <option>Bar Loaders</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
              <ChevronDownIcon size={16} />
            </div>
          </div>
        </div>
        <div className="text-slate-500 font-medium text-sm">
          Total CSS Loader Count: <span className="font-bold text-slate-800">{filteredLoaders.length}</span>
        </div>
      </div>

      <CustomizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        loader={selectedLoader}
        settings={settings}
        setSettings={setSettings}
      />

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-125">
        {currentLoaders.map((loader) => (
          <LoaderCard 
            key={loader.id} 
            title={loader.name} 
            html={loader.html}
            
            css={loader.getCss(
              settings.primaryColor, 
              settings.secondaryColor, 
              settings.size, 
              settings.speed
            )}
            onCustomize={() => handleCustomize(loader)} 
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-6">
          <button
            onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 font-medium transition ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-indigo-600'}`}
          >
            ‹ Prev
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`transition-all duration-300 ${currentPage === i + 1
                  ? 'w-8 h-2.5 bg-indigo-600 rounded-full'
                  : 'w-2.5 h-2.5 bg-indigo-100 rounded-full hover:bg-indigo-300'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 font-medium transition ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-800 hover:text-indigo-600'}`}
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
};

export default LoaderGenerator;