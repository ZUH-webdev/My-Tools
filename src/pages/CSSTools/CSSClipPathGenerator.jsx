import { ExternalLink } from "lucide-react";
import cssClipPathGenerator from "../../images/DetailPageImages/cssClipPathGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import ClipPathGenerator from "../../components/ClipPathGenerator";


const CSSClipPathGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Clip Path Generator" icon={cssClipPathGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ClipPathGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-clip-path-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Clip Path Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Clip Path Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating CSS clip path for masking your images</span>. "clip-path" is a CSS property for restricting the boundaries of an image by predefined rules. It gives you flexibility to obtain image masks just by using CSS. You can obtain image background transparency with JPG file type partially with this feature without using PNG and make an indirect image optimization.
                                </p>
                                <p>
                                    There are 4 different clip-path types, polygon, circle, ellipse and inset. Most widely used CSS clip-path type is polygon. You can put as much dots as you want to obtain a polygon and this shape will be used as a reference to you image mask. There are many geometric polygon shapes are available in the tool to use as a template to obtain the desired clip-path. They are varying from simple geometric shapes to more complex structures.
                                </p>
                                <p>
                                    CSS clip-path property can be used for different purposes. It is mostly used in landing page and hero images as image mask. We can say that it works as a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS shapes generator</span>. It is not mandatory to use an image as background. You can use css clip-path property with solid backgrounds or backgrounds with gradients. Also, you can use clip-path to shape your section separators. It is a common trick to use CSS clip-path to obtain diagonal section separators. It is better to use SVG mask for complex shapes like waves, curves, etc., but online CSS Clip Path Generator will be sufficient if the shape is simple.
                                </p>
                                <p>
                                    Here is an artistic image that is clipped with CSS clip-path. It looks more aesthetic than the raw image in your UI (user interface) design and webpages for most cases and it's a relatively low-cost operation.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-clip-path-generator/css-clip-path-with-rhombus.jpg"
                                        alt="CSS Clip Path Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Clipped image with rhombus-shaped CSS clip-path
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Clip Path Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate CSS clip-path code with the help of the instructions below:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Select the shape you want to use as a template for your clip-path.</li>
                                <li className="pl-2">You can either use placeholder images or your own background image by setting its URL.</li>
                                <li className='pl-2'>You can change the width and height of the preview image. Be careful, since clip-path coordinates are given in percentage, aspect ratio of the image is more important than the width and the height.</li>
                                <li className='pl-2'>Move the dots to change the path as you need by dragging them. When you get the desired result, you can use "Hide the guides" option to see the final result.</li>
                                <li className="pl-2">If you get the desired clip-path, you can copy the CSS code to your clipboard and paste into your web project.</li>
                            </ol>
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-2xl text-gray-900 mb-2 font-space-grotesk">Credits</h4>
                                <ul>
                                    <li className="text-md font-semibold text-gray-700">
                                        Images used under the clip path for preview purposes are served by <a href="https://www.unsplash.com/" title="unsplash.com" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> unsplash.com <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CSSClipPathGenerator