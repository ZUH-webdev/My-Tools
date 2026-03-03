import { useApiContext } from "../contexts/api-context"

const MobileFilters = () => {
    const { categories, selectedCategory, setSelectedCategory, selectedTag, setSelectedTag, tags } = useApiContext();


    const handleSelectChange = (e) => {
        const selectedTagName = e.target.value;
        const tagObj = tags.find(tag => tag.name === selectedTagName);
        setSelectedTag(tagObj);
    }


    return (
        <div className="lg:hidden flex gap-3 px-6 py-4 bg-white border-b border-gray-200">
            {/* Category Dropdown */}
            <div className="relative w-1/2 border border-gray-300 rounded-lg px-3 py-2">
                <label className="text-[13px] font-semibold text-gray-400  mb-2 block">
                    Category
                </label>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='w-full outline-none border-none bg-transparent text-gray-600 font-medium'>
                    {categories.map((category, idx) => (
                        <option
                            key={idx}
                            value={category.name}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Tags Dropdown */}
            <div className="relative w-1/2 border border-gray-300 rounded-lg px-3 py-2">
                <label className="text-[13px] font-semibold text-gray-400 tracking-wide mb-2 block">
                    Tags
                </label>
                <select value={selectedTag?.name || ''} onChange={handleSelectChange} className='w-full outline-none border-none bg-transparent text-gray-600 font-medium'>
                    {tags.map((tag, idx) => (
                        <option
                            className='w-1/2 border-none outline-none text-[12px] font-medium p-6'
                            key={idx}
                            value={tag.name}
                        >
                            {tag.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default MobileFilters
