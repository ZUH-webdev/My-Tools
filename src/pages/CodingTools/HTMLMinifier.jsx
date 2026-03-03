import htmlMinifier from "../../images/DetailPageImages/htmlMinifier.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import MinifierTool from "../../components/MinifierTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const HTMLMinifier = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="HTML Minifier" icon={htmlMinifier} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <MinifierTool
                    type="html"
                    placeholder="Paste your HTML code here..."
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="html-minifier" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online HTML Minifier?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    HTML Minifier is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for minifying and compressing HTML code</span>. HTML (Hyper Text Markup Language) is a markup language used web browsers for displaying webpages. All necessary structure and links for a webpage is stored in .html files and served to users by browsers via rendering the tags, styles and interactions provided by JavaScript.
                                </p>
                                <p>
                                    Size of an HTML file plays an important role on the time needed to load a webpage. You can improve performance of a website by minifying your HTML code. Most UI frameworks which use bundlers like Webpack or Rollup has automatic HTML minification processes. But, if you made a landing page or a small personal site with minimum setup, you may need to minify your code manually to improve your site performance by compressing HTML code. It is a time-consuming process to do it manually, so it is better to use online HTML Minifier. It will work as a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">HTML compressor</span> and boost your site performance.
                                </p>
                                <p>
                                    Here, you can see how HTML code looks before and after minification process. There is a small HTML boilerplate on both sides and it is clear that size of the minified version takes less space than other.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/html-minifier/html-minification-before-after.jpg"
                                        alt="HTML Minifier"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Before vs. After HTML Minification
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    You will see a statistic about code compression ratio after HTML minification if there is any. There are many configurations related to HTML minification, but optimum configuration is made to keep things as simple as possible. So, only thing you would do is to click "Minify" button.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online HTML Minifier?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">HTML code can be compressed by minification process by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Paste your final HTML code to the input field. Minification will be performed with HTML5 standards.</li>
                                <li className="pl-2 marker:text-gray-800">Click the "Minify" button to start minification operation.</li>
                                <li className='pl-2 marker:text-gray-800'>Minified code will be available in output field if your code is valid. You will see a notification if there is a validation error in your HTML code.</li>
                                <li className='pl-2 marker:text-gray-800'>There will be two options for exporting output. One is to copy the minified HTML to your clipboard and second is to download it as minified.html file.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HTMLMinifier