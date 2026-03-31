// import React, { useEffect, useRef } from 'react';
import social from "../../../assets/social.svg";
import social2 from "../../../assets/social2.svg";

import { useDispatch, useSelector } from "react-redux";
import { fetchTools } from "../../../redux/slices/toolsSlice";
import CategoryCard from '../../../components/categorycard/CategoryCard';
import Hero from "../../../components/categoryHerosection/Hero";
import BottomSection from "../../../components/categoryHerosection/BottomSection";

import { FaShareAlt } from 'react-icons/fa';
import { useEffect, useRef } from "react";
import { openShareModal } from "../../../redux/slices/modalSlice";
import BuyMeACoffee from "../../../components/BuyMeACoffee";

function SocialMedia() {
  const dispatch = useDispatch();

  const { items: tools = [], status } = useSelector(
    (state) => state.tools
  );

  const socialMediaProducts = tools.filter(
    (p) => p.category === "social-media-tools"
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
  <div >
 
      <Hero
        title="Online Social Media Tools For Free"
paragraphs={[
 " Looking for the best online social media tools to help you grow your online presence? Look no further than 10015.io.",

"Our social media tools are designed to help you save time and engage with your audience easily. And best of all, they're free!"
]}
        image={social}
        buttonText="Explore Social Media Tools"
        onScroll={scrollToCards}
      />
           <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 py-12 space-y-12">
<div className="flex justify-between items-center mb-4 mt-10 h-14  w-full max-w-5xl">
  <h2 className="text-xl font-semibold text-gray-900">Social Media Tools Collection</h2>
<button className="flex items-center gap-2 px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100" onClick={()=>dispatch(
          openShareModal({
            title:"Social Media Tools",
            category:"social-media-tools"
          })
        )}>
  <FaShareAlt/>
  Share
</button>
</div>
      <div ref={cardsRef}  className="grid grid-cols-1 sm:grid-cols-2  justify-items-center
     sm:justify-items-stretch   md:grid-cols-3 md:gap-4  md:justify-items-stretch gap-4 sm:gap-6">
        {socialMediaProducts.map((item) => (
          <CategoryCard key={item.id} product={item} />
        ))}
      </div>

      <div >
        <BuyMeACoffee />
      </div>

   

    </div>
       <BottomSection
        image={social2}
        title="Top Social Media Tools On The Web"
        paragraphs={[
"With the advent of social media, there has been a tremendous increase in the amount of information that is shared online. This has led to the development of new tools. These tools can be used for a variety of purposes, including building relationships, promoting your brand, and connecting with potential customers.",

"Social media has become an integral part of our lives and is used by people of all ages. It is a powerful tool that can be used to connect with friends, family, and strangers from all over the world.",

"The best part about the tools on 10015.io is that they're free and easy to use! We'll introduce you to some of the best social media tools out there. So whether you're a small business owner, a solopreneur, or just someone who wants to be more active on social media, you can find the right tool for you."
        ]}
      />
    </div>
  );
}

export default SocialMedia;
