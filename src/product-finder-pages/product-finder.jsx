import React, {
  useMemo,
  useRef,
  useEffect,
  useState
} from 'react';
import { Link } from 'react-router';
import { useApiContext } from '../contexts/api-context';
import MobileFilters from '../ProductFinderComponents/MobileFilters';

const ITEMS_PER_LOAD = 9;

const ProductFinderPage = () => {
  const {
    categories,
    filteredData = [],
    errors,
    selectedTag,
    selectedCategory
  } = useApiContext();

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [loadingMore, setLoadingMore] = useState(true);
  const loaderRef = useRef(null);

  /* Reset on filter change */
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
    setLoadingMore(true);

    const t = setTimeout(() => setLoadingMore(false), 600);
    return () => clearTimeout(t);
  }, [selectedCategory, selectedTag]);

  /* Infinite scroll observer */
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(entries => {
      if (
        entries[0].isIntersecting &&
        visibleCount < filteredData.length
      ) {
        setLoadingMore(true);

        setTimeout(() => {
          setVisibleCount(prev =>
            Math.min(prev + ITEMS_PER_LOAD, filteredData.length)
          );
          setLoadingMore(false);
        }, 600);
      }
    });

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredData.length]);

  /* Category Icon */
  const Icon = useMemo(() => {
    const category = categories.find(
      cat => cat.name === selectedCategory
    );
    return category ? category.icon : null;
  }, [categories, selectedCategory]);

  return (
    <div className="flex-1 overflow-y-auto" id="product-finder">
      <MobileFilters />

      <div className="px-6 py-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6 mt-14 ml-8">
          {(selectedTag?.name && selectedTag.name !== 'All') ||
            (selectedCategory && selectedCategory !== 'All') ? (
            <div className="flex gap-2 items-center">
              {Icon && <Icon className="w-6 h-6 text-indigo-600" />}
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory}
              </h2>
              {selectedTag?.name && selectedTag.name !== 'All' && (
                <h2 className="text-2xl font-bold text-gray-900">
                  #{selectedTag.name}
                </h2>
              )}
            </div>
          ) : (
            <h2 className="text-2xl font-bold text-gray-900">
              Product Finder{' '}
              <span className="text-[#73738f]">Beta*</span>
            </h2>
          )}
        </div>

        {/* Error */}
        {errors && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error: {errors}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:pl-8">
          {/* Products */}
          {!loadingMore &&
            filteredData
              .slice(0, visibleCount)
              .map(item => (
                <ProductCard key={item.slug} item={item} />
              ))}

          {/* Skeletons */}
          {loadingMore &&
            Array.from({ length: ITEMS_PER_LOAD }).map((_, i) => (
              <ProductSkeleton key={`skeleton-${i}`} />
            ))}
        </div>

        {/* Infinite Scroll Trigger */}
        {visibleCount < filteredData.length && (
          <div
            ref={loaderRef}
            className="py-12 text-center text-gray-400"
          >
            Loading more products...
          </div>
        )}

        {/* Empty */}
        {!loadingMore && filteredData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFinderPage;

/* Product Card Component */
const ProductCard = ({ item }) => (
  <Link
    to={`/product-finder/${item.slug}`}
    className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col transform hover:-translate-y-0.5 h-97.5"
  >
    <div className="relative bg-gray-100 h-56 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-start gap-3 mb-3">
        <img
          src={item.icon}
          alt={`${item.name} icon`}
          loading="lazy"
          className="w-8 h-8 rounded-lg shrink-0 object-cover mt-3"
        />
        <div className="flex-1 min-w-0">
          <h2 className="font-bold text-gray-700 truncate text-xl">
            {item.name}
          </h2>
          <p className="text-sm text-gray-600 truncate">
            {item.tagline}
          </p>
        </div>
      </div>

      <p className="text-md text-gray-500 mb-4 line-clamp-2 flex-1">
        {item.shortDescription}
      </p>

      {/* Tags */}
      <div className="flex gap-2 mb-4 truncate">
        {item.tags?.slice(0, 3).map(tag => (
          <span
            key={tag.slug}
            className="text-xs px-2.5 py-1 bg-indigo-50 text-gray-500 rounded-md font-medium"
          >
            #{tag.name}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500 font-medium">
          {item.pricing}
        </span>
        <span className="text-sm text-gray-500 group-hover:text-indigo-600">
          Visit →
        </span>
      </div>
    </div>
  </Link>
);

/* Skeleton Card */
const ProductSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse h-97.5">
    <div className="h-56 bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-5 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  </div>
);