import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApiContext } from "../contexts/api-context";
import { Undo2, ExternalLink } from "lucide-react";

const DetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const {
    data,
    setSelectedCategory,
    setSelectedTag,
  } = useApiContext();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!data?.pageProps?.products) return;
    const found = data.pageProps.products.find(
      (p) => p.slug === slug
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProduct(found);
  }, [data, slug]);
  
  if (!product) return <div className="p-10">Loading...</div>;

  const category =
    product.category?.name ||
    product.category ||
    product.categories?.[0]?.name ||
    "All";

  const heroImage =
    product.image ||
    product.coverImage ||
    product.screenshot ||
    product.media?.[0]?.url;

  const website =
    product.website || product.url || product.link;


  const handleBack = () => {
    navigate("/product-finder");
  };

  const goToAllProducts = () => {
    setSelectedTag({ name: "All" });
    setSelectedCategory("All");
    navigate("/product-finder");
  };

  const handleCategoryClick = () => {
    setSelectedTag({ name: "All" });
    setSelectedCategory(category);
    navigate("/product-finder");
  };

  const handleTagClick = (tag) => {
    setSelectedCategory("All");
    setSelectedTag(tag);
    navigate("/product-finder");
  };

  return (
    <div className="max-w-215 mx-auto px-5 py-10 flex flex-col gap-8">

      <div className="flex items-center gap-3 border border-gray-200 rounded-full bg-white">
        <button
          onClick={handleBack}
          className="px-4 py-3.5 rounded-l-full hover:bg-gray-100"
        >
          <Undo2 />
        </button>

        <div className="flex items-center gap-2 flex-1 text-sm">
          <span
            onClick={goToAllProducts}
            className="cursor-pointer text-gray-700 hover:text-indigo-600"
          >
            Products
          </span>
          <span className="text-gray-400">›</span>
          <span
            onClick={handleCategoryClick}
            className="cursor-pointer text-gray-700 hover:text-indigo-600"
          >
            {category}
          </span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-500">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="border border-gray-200 rounded-2xl p-8 bg-white">
        {heroImage && (
          <div className="rounded-2xl overflow-hidden mb-6">
            <img src={heroImage} alt={product.name} className="w-full" />
          </div>
        )}

        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold text-[#1f1f3d]">
              {product.name}
            </h1>
          </div>

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                bg-indigo-600 text-white
                px-5 py-2.5
                rounded-full
                text-sm font-medium
                hover:bg-indigo-700
                transition
              "
            >
              Visit <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="border border-gray-200 rounded-2xl p-8 bg-white">
        <p className="text-gray-700 leading-relaxed">
          {product.description || product.shortDescription}
        </p>
        <p className="text-gray-500 text-lg mt-4">
  {product.shortDescription}
</p>
      </div>

      <div className="border border-gray-200 rounded-2xl p-8 bg-white">
        <h3 className="text-lg font-semibold mb-4">Product Bento</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <MetaBox title="Pricing" value={product.pricing || "Free"} />

          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-500 mb-1">Category</p>
            <span
              onClick={handleCategoryClick}
              className="cursor-pointer font-medium hover:text-indigo-600"
            >
              {category}
            </span>
          </div>

          <TagsBox tags={product.tags} onTagClick={handleTagClick} />
        </div>

        <div className="h-px bg-gray-200 my-8" />

        {/* Social + people */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SocialCard />
          <PeopleCard people={product.people} />
        </div>
      </div>
    </div>
  );
};


/* Small Components */
const MetaBox = ({ title, value }) => (
  <div className="border border-gray-200 rounded-xl p-4">
    <p className="text-xs text-gray-500 mb-1">{title}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const TagsBox = ({ tags, onTagClick }) => (
  <div className="border border-gray-200 rounded-xl p-4">
    <p className="text-xs text-gray-500 mb-2">Tags</p>
    <div className="flex flex-wrap gap-2">
      {tags?.length ? (
        tags.map((tag) => (
          <span
            key={tag.slug || tag.name}
            onClick={() => onTagClick(tag)}
            className="bg-gray-100 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-indigo-100 hover:text-indigo-700"
          >
            #{tag.name}
          </span>
        ))
      ) : (
        <span className="text-xs text-gray-400">No tags</span>
      )}
    </div>
  </div>
);

const SocialCard = () => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
    <h4 className="font-semibold mb-4">Social Media & Links</h4>
    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
      𝕏
    </div>
  </div>
);

const PeopleCard = ({ people }) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
    <h4 className="font-semibold mb-4">People</h4>

    {people?.length ? (
      people.map((person, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
            {person.avatar ? (
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              person.name?.[0]
            )}
          </div>

          <div>
            <p className="font-medium">{person.name}</p>
            <p className="text-xs text-gray-500">
              {person.role || "Founder"}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-sm text-gray-400">No people listed</p>
    )}
  </div>
  
);


export default DetailsPage;
