import { ExternalLink } from "lucide-react";
import cssGlassmorphismGenerator from "../../images/DetailPageImages/cssGlassmorphismGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import GlassmorphismGenerator from "../../components/GlassmorphismGenerator";

const CSSGlassmorphismGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Glassmorphism Generator" icon={cssGlassmorphismGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <GlassmorphismGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-glassmorphism-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Glassmorphism Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Glassmorphism Generator is a <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">free online tool for generating CSS frosted-glass effect</span> by using backdrop-filter + blur property of CSS. This tool can also be called as <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">CSS glass effect generator</span>. There is a growing trend on CSS glassmorphism such that we see the usage of this effect more and more on designs day by day. For using this effect on your webpages, you can use this tool and copy the CSS code directly into your projects' styles.
                                </p>
                                <p>
                                    It is advised to be careful about browser support when using backdrop-filter property since it is not supported by all browsers especially by Firefox. You can check it before use: <a href="https://caniuse.com/css-backdrop-filter" title="backdrop filter" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> CSS backdrop-filter browser support <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>.
                                </p>
                                <p>
                                    When using <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">CSS glass effect</span>, it is very important to set the background color, blur and opacity. If it is not balanced properly, its glass feeling may not be seen as expected in the web page.
                                </p>
                                <p>
                                    There is a growing tendency from big companies to use glassmorphism in their designs. Apple and Microsoft are some examples using this method in their user interfaces. There are many applications of glass effect on Windows 11 UI. There is a similar trend called "Neumorphism", but unlikely, glassmorphism increases its impact day by day as it looks very professional if you use it properly. It is not advised to use this effect on your whole design since excessive usage may lead to bad user experience.
                                </p>
                                <p>
                                    For increasing the look of the effect, you can use a transparent border which has the same color with the glass. It makes the edges shiny and completes the overall look in a nice way.
                                </p>
                                <p>
                                    Here, you can see an example for the CSS glass effect and the difference between the applied background versus raw background. Also, you can check Dribble to see the <a href="https://dribbble.com/search/glassmorphism" title="Glassmorphism" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> examples of CSS glassmorphism <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-glassmorphism-generator/glassmorphism.jpg"
                                        alt="CSS Glassmorphism Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    CSS Frosted Glass Effect by Using Background Blur
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Glassmorphism Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can create your own CSS glass effects by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, you need to select glass color. It is advised to use white color on dark backgrounds and black color on light backgrounds, but you can use any color according to your needs.</li>
                                <li className="pl-2">Then, you must set blur and transparency. When you increase the amount of blur, it increases the frostiness of the glass effect. If you want to use any text on the glass effect, it is a good practice to use high opacity values and decrease transparency. But keep in mind that, if the opacity is too high, it becomes hard to see the effect at some point.</li>
                                <li className='pl-2'>You can both use an image or shapes for previewing the glass effect. Also, you can shuffle both glass color and background image to check different combinations.</li>
                                <li className='pl-2'>"Copy CSS" button can be used to get the CSS code and paste to your project.</li>
                            </ol>
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-2xl text-gray-900 mb-2 font-space-grotesk">Credits</h4>
                                <ul>
                                    <li className="text-md font-semibold text-gray-700">
                                        Placeholder images that used as a preview background under frozen glass effect are taken from <a href="https://www.unsplash.com/" title="unsplash.com" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> unsplash.com <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>.
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

export default CSSGlassmorphismGenerator