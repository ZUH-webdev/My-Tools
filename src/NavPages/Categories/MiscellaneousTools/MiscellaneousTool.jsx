import React, { useEffect, useRef } from 'react';
import miscellaneoustools from "../../../assets/miscellaneoustools.svg";

import { useDispatch, useSelector } from "react-redux";
import { fetchTools } from "../../../redux/slices/toolsSlice";
import CategoryCard from '../../../components/categorycard/CategoryCard';
import Hero from "../../../components/categoryHerosection/Hero";
// import BottomSection from "../../components/categoryHerosection/BottomSection";
import { FaShareAlt } from 'react-icons/fa';
import { openShareModal } from '../../../redux/slices/modalSlice';
import BuyMeACoffee from '../../../components/BuyMeACoffee';

function MiscelleneousTools() {
   const dispatch = useDispatch();

  const { items: tools = [], status } = useSelector(
  (state) => state.tools
);

  const miscelleneousTools = tools.filter(
    (p) => p.category === "Miscellaneous-tools"
  );

  const cardsRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTools());
  }, [dispatch]);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
  <>
     <Hero
        title="Online Miscelleneous Tools For Free"
paragraphs={[
 " A growing collection of free online tools to help you work smarter which are not categorized under main tool categories."
]}
        image={miscellaneoustools}
        buttonText="Explore Miscelleneous Tools"
        onScroll={scrollToCards}
      />
       <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 py-12 space-y-12">

     
<div className="flex justify-between items-center mb-4 mt-10 h-14  w-full max-w-5xl">
  <h2 className="text-xl font-semibold text-gray-900">Miscellaneous Tools Collection</h2>
<button className="flex items-center gap-2 px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100" onClick={()=>dispatch(
          openShareModal({
            title:"Miscellaneous Tools",
            category:"miscellaneous-tools"
          })
        )}>
  <FaShareAlt/>
  Share
</button>
</div>
     <div
  ref={cardsRef}
  className="
    grid
    grid-cols-1
    gap-6

    sm:grid-cols-2
    sm:justify-items-stretch

    lg:grid-cols-3
  "
>
        {miscelleneousTools.map((item) => (
          <CategoryCard key={item.id} product={item} />
        ))}
      </div>

      <div >
        <BuyMeACoffee />
      </div>

      

    </div>
    </>
  );
}

export default MiscelleneousTools;
