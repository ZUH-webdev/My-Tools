import javascriptMinifier from "../../images/DetailPageImages/javascriptMinifier.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import MinifierTool from "../../components/MinifierTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const JavascriptMinifier = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="JavaScript Minifier" icon={javascriptMinifier} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <MinifierTool
                    type="js"
                    placeholder="Paste your JS code here..."
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="javascript-minifier" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online JavaScript Minifier?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    JavaScript Minifier is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for minifying and compressing JavaScript code</span>. JavaScript is a scripting language used in web browsers. Its usage is extended in recent years with Node.js but main idea is to manage interactions and data flow in a webpage.
                                </p>
                                <p>
                                    JavaScript code may be written in HTML as inline script within script tags, or it may be added to the page with a link that referencing a .js file. There are many module bundlers which automatically converts the code you wrote into minified JS files like webpack, parcel, rollup or browserify. You need to configure them, and they merge and compress your JS files without any hustle. But, if you have a tiny project which you don't need these module bundlers and you need to minify your JS code by yourself, online JavaScript Minifier will help you a lot.
                                </p>
                                <p>
                                    When you compress Javascript code by minifying them, your file size will be decreased remarkably and it affects positively your webpages loading time and UX (User Experience). There are many configuration options in JS minification, yet this tool uses the defaults to keep things minimalistic.
                                </p>
                                <p>
                                    Here is an image showing how Javascript minification works and how the size is decreasing after compression. It shows before vs. after for minification of a Fibonacci generator function.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/javascript-minifier/javascript-minification-before-after.jpg"
                                        alt="JS Minifier"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Before vs. After JavaScript Minification
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    After the end of minification process, a green box will be showed up that shows compression percentage if the code has not been minified already. Keep in mind that a warning will be showed if there is a validation problem with the JS code.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online JavaScript Minifier?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can easily compress your JS code by following these:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Fill the input field with your JavaScript code that will be converted into minified version.</li>
                                <li className="pl-2 marker:text-gray-800">Click the button "Minify" to start minification.</li>
                                <li className='pl-2 marker:text-gray-800'>If there is no validation error in your code, you can get the result as raw code by copying to your clipboard or as a downloadable file called script.min.js.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JavascriptMinifier