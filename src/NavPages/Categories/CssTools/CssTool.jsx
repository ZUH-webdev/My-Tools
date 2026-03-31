import React, { useEffect, useRef } from 'react';
import csstools from "../../../assets/csstools.svg";
import csstools1 from "../../../assets/csstools1.svg";

import { useDispatch, useSelector } from "react-redux";
import { fetchTools } from "../../../redux/slices/toolsSlice";
import CategoryCard from '../../../components/categorycard/CategoryCard';
import Hero from "../../../components/categoryHerosection/Hero";
import BottomSection from "../../../components/categoryHerosection/BottomSection";

import { FaShareAlt } from 'react-icons/fa';
import { openShareModal } from "../../../redux/slices/modalSlice";
import BuyMeACoffee from '../../../components/BuyMeACoffee';
function CssTools() {
   const dispatch = useDispatch();

   const { items: tools = [], status } = useSelector(
  (state) => state.tools
);

  const cssTools = tools.filter(
    (p) => p.category === "css-tools"
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
        title="Online CSS Tools For Free"
      paragraphs={["Looking to spruce up your website's style? Check out 10015.io's online CSS Tools!",

"With a variety of online tools available, you can easily customize your site's look and feel. And best of all, our CSS tools are free to use!"]}
        image={csstools}
        buttonText="Explore CSS Tools"
        onScroll={scrollToCards}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 py-12 space-y-12">  
<div className="flex justify-between items-center mb-4 mt-10 h-14  w-full ">
  <h2 className="text-xl font-semibold text-gray-900">Css Tools Collection</h2>
<button className="flex items-center gap-2 px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100" onClick={()=>dispatch(
          openShareModal({
            title:"CSS Tools",
            category:"css-tools"
          })
        )}>
  <FaShareAlt/>
  Share
</button>
</div>  
<div ref={cardsRef}  className="grid grid-cols-1 sm:grid-cols-2 justify-items-center
     sm:justify-items-stretch   md:grid-cols-3   md:justify-items-stretch gap-4 sm:gap-6">
        {cssTools.map((item) => (
          <CategoryCard key={item.id} product={item} />
        ))}
      </div>

      <div >
        <BuyMeACoffee />
      </div>

  

    </div>
        <BottomSection
        image={csstools1}
        title="Top Css Tools On The Web"
        paragraphs={[
          "There are a wide variety of CSS tools available online, and it can be tough to know which ones are the best to use. But don't worry - we're here to help. In 10015.io, you will get a collection of the best CSS tools on web, all in one place.",

"One of the best things about CSS is that it's easy to learn and use. However, even though CSS is simple, there are still a few tools that can make your life easier. In 10015.io, you'll get some of the best CSS tools available and see how they can help you with your web development projects.",

"We'll cover a wide range of tools, from CSS generators to CSS animation tools. So whether you're looking for help with your CSS code or you want to add some extra flair to your web designs, you'll find what you're looking for."
        ]}
      />
    </>
  );
}

export default CssTools;
