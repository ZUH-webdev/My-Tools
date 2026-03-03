import { useState } from 'react';
import CheckboxCard from './CheckboxCard';
import CheckboxCustomizeModal from './CheckboxCustomizeModal'; 
import { checkboxDesigns } from '../data/checkbox/checkboxData'; 

const CheckboxGenerator = () => {
    const [primaryColor, setPrimaryColor] = useState('#4f46e5');

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [activeTab, setActiveTab] = useState('customize');

    const openModal = (design, tab) => {
        setSelectedDesign(design);
        setActiveTab(tab);
        setIsModalOpen(true);
    };

    const totalPages = Math.ceil(checkboxDesigns.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = checkboxDesigns.slice(indexOfFirstItem, indexOfLastItem);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="max-w-5xl mx-auto min-h-screen bg-gray-50 font-manrope">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <label className="text-sm font-bold text-gray-600">Global Theme:</label>
                    <input 
                        type="color" 
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-8 h-8 cursor-pointer rounded-lg overflow-hidden border-none"
                    />
                </div>
                <p className="text-slate-500 text-sm font-semibold tracking-wide">
                    Total CSS Checkbox Count: <span className="text-indigo-900 font-bold">{checkboxDesigns.length}</span>
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-112.5">
                {currentItems.map((item) => (
                    <CheckboxCard 
                        key={item.id} 
                        design={item}
                        primaryColor={primaryColor}
                        onCustomize={() => openModal(item, 'customize')}
                        onGetCode={() => openModal(item, 'code')} 
                    />
                ))}
            </div>

            {/* Pagination Logic */}
            <div className="mt-16 flex items-center justify-center gap-8">
                <button
                    onClick={goToPrev}
                    disabled={currentPage === 1}
                    className={`font-bold flex items-center gap-2 transition ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-indigo-600'}`}
                >
                    <span className="text-xl">‹</span> Prev
                </button>

                <div className="flex items-center gap-3">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`transition-all duration-300 rounded-full ${currentPage === index + 1 ? 'h-1.5 w-10 bg-indigo-600' : 'h-2 w-2 bg-indigo-200 hover:bg-indigo-400'}`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className={`font-bold flex items-center gap-2 transition ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-900 hover:text-indigo-600'}`}
                >
                    Next <span className="text-xl">›</span>
                </button>
            </div>

            {/* Modal */}
            <CheckboxCustomizeModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                design={selectedDesign}
                initialColor={primaryColor}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    );
};

export default CheckboxGenerator;