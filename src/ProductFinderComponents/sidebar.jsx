import { useApiContext } from "../contexts/api-context"
const Sidebar = ({className}) => {
  const { categories, selectedCategory, setSelectedCategory, selectedTag, setSelectedTag, tags } = useApiContext();

  return (
    <aside className={`${className}`}>
        <div className="hidden lg:flex flex-col bg-white border-r border-gray-200 fixed top-16 left-0 h-[calc(100vh-64px)] max-w-90 w-full">

        {/* Product Categories */}
        <div className="p-5 border-b border-gray-200">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Product Categories
          </h3>

          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                  }}
                  className={`w-full border border-gray-200 text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium cursor-pointer
                ${selectedCategory === category.name
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 bg-gray-100"
                    }`}
                >
                  <Icon
                    className={
                      selectedCategory === category.name
                        ? "text-white"
                        : "text-indigo-600"
                    }
                  />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] border-y border-gray-200 p-3 pl-6 bg-gray-100 sticky top-0">
            #Tags
          </h3>
          <div className="p-5 space-y-1">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedTag(tag);
                }}
                className={`w-full text-left px-3 py-1.5 text-base rounded-lg cursor-pointer transition-colors text-gray-600 hover:bg-gray-100 hover:text-indigo-500 ${selectedTag === tag ? "bg-indigo-50 text-indigo-600 font-medium" : setSelectedTag === tag ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`}
              >
                #{tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;