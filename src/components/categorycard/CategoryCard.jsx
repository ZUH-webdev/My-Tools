import { Link,  useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavourites,
  addToFavourites,
} from "../../redux/slices/favouritesSlice";

export default function CategoryCard({ product }) {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const favourites = useSelector(
    (state) => state.favourites.items
  );

  const isFavourite = favourites.some(
    (item) => item.id === product.id
  );

  const handleFavourite = (e) => {
    if (isFavourite) {
      e.stopPropagation();
      dispatch(removeFromFavourites(product.id));
    } else {
      e.stopPropagation();
      dispatch(addToFavourites(product));
    }
  };

  return (
    <div
      className="
        bg-white rounded-[18px] p-6
        shadow-[0_2px_10px_rgba(0,0,0,0.06)]
        hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]
        transition-all duration-300
        flex flex-col
        w-full h-full
        cursor-pointer
        hover:-translate-y-1"
           onClick={() =>
    navigate(`/tools/${product.category}/${product.slug}`)}
      
    >
      <div className="flex items-center mb-3"
    
    >
        <img
          src={`/images/${product.image}`}
          alt={product.title}
          className="w-12 h-12 object-contain"
        />
      </div>

      <h3 className="text-[1.1rem] font-bold text-[#1e1e1e]">
        {product.title}
      </h3>

      <p className="text-[0.9rem] text-[#6b6b6b] leading-[1.4] grow mt-1">
        {product.description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <Link
          to={`/tools/${product.category}/${product.slug}`}
          className="text-[0.9rem] text-[#4567ff] font-medium inline-flex items-center gap-1 hover:to-blue-400"
        >
          Open <FiArrowRight />
        </Link>

        <div className="relative flex items-center">
          
          <span
            className="
              absolute right-full mr-2
              text-sm font-medium text-[#4567ff]
              bg-[#eef0ff]
              px-3 py-1.5 rounded-full
              whitespace-nowrap
              opacity-0 scale-95
              transition-all duration-200
              pointer-events-none
              group-hover:opacity-100
              group-hover:scale-100
            "
          >
            {isFavourite ? "Remove from Favs" : "Add to Favs"}
          </span>

          <span
            onClick={handleFavourite}
            className="
              group
              text-[22px]
              cursor-pointer
              select-none
              transition-transform
              hover:scale-110
            "
          >
            {isFavourite ? "❤️" : "♡"}
          </span>
        </div>
      </div>
    </div>
  );
}
