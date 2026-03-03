import React, { useEffect, useRef } from 'react'
import Hero from '../../../components/categoryHerosection/Hero'
import imagetools from '../../../assets/imagetools.svg'
import imagtools1 from '../../../assets/imagtools1.svg'
import BottomSection from '../../../components/categoryHerosection/BottomSection'
import { FaShareAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTools} from '../../../redux/slices/toolsSlice'
import CategoryCard from '../../../components/cetegorycard/CategoryCard'
import { openShareModal } from '../../../redux/slices/modalSlice'
import BuyMeACoffee from '../../../components/BuyMeACoffee'

function ImageTools() {
      const dispatch = useDispatch();
 const { items: tools = [], status } = useSelector(
  (state) => state.tools
);
  const imagestools = tools.filter(
    (p) => p.category === "image-tools"
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
        title="Online Image Tools For Free"
paragraphs={["Looking for the best online image tools? Look no further than our collection of image tools here at 10015.io.",

"From basic editing to complex effects, these tools will help you get the most out of your images."]}        image={imagetools}
        buttonText="Explore Image Tools"
      onScroll={scrollToCards}
        />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 py-12 space-y-12"> 
      <div className="flex justify-between items-center mb-4 mt-10 h-14 w-full max-w-5xl">
        <h2 className="text-xl font-semibold text-gray-900">Image Tools Collection</h2>
      <button className="flex items-center gap-2 px-5 py-2 border rounded-full text-gray-700 hover:bg-gray-100" onClick={()=>dispatch(
                openShareModal({
                  title:"Image Tools",
                  category:"image-tools"
                })
              )}>
        <FaShareAlt/>
        Share
      </button>
      </div>
           <div ref={cardsRef}  className="grid grid-cols-1 sm:grid-cols-2 justify-items-center
     sm:justify-items-stretch   md:grid-cols-3   md:justify-items-stretch gap-4 sm:gap-6">
                {imagestools.map((item) => (
                  <CategoryCard key={item.id} product={item} />
                ))}
              </div>
      <div >
        <BuyMeACoffee />
      </div>
  
    </div>
    <BottomSection
        image={imagtools1}
        title="Top Image Tools On The Web"
        paragraphs={[
          "The ever-growing popularity of digital image tools has led to the development of a number of online and free services. These tools allow users to edit, crop, and resize their images with ease. In addition, many of these tools also offer a wide range of filters and effects that can be applied to images.",

"On 10015.io, you will get some of the best image tools that are available online. You will also be informed about the different features and options that these tools offer.",

"These tools are easy to use and free. So, whether you are a beginner or a professional, these image tools will help you get the most out of your photos."
        ]}
      />
    </>
  )
}

export default ImageTools