import javascriptFormatter from "../../images/DetailPageImages/javascriptFormatter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import FormatterTool from "../../components/FormatterTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const JavascriptFormatter = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="JavaScript Formatter" icon={javascriptFormatter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <FormatterTool 
                type="js"
                placeholder="Paste your JavaScript code..."
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="javascript-formatter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online JavaScript Formatter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    JavaScript Formatter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for formatting and beautifying JavaScript code</span>. JavaScript is a scripting language used in web browsers to provide interaction between user and screen as well as managing data structures and data flow. It may be a headache to read even your own code if it is not formatted properly. For increasing your productivity and providing easy code management, this tool will help you as <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">JavaScript Beautifier</span> to arrange your code lines with a standardization.
                                </p>
                                <p>
                                    In general, HTML and CSS codes are shorter than JavaScript if you deal with a project where there are a lot of user interaction and data state management. Since JavaScript affects the functionality of your web application, it is not a good practice to write your code without formatting since any typo error may break your application. Even the design and UI of the page looks okay, it doesn't mean anything without functionality.
                                </p>
                                <p>
                                    Since JavaScript has a complex structure, there are many options that must be configured while you are formatting your code. But, for preserving simpleness of the tool, only indentation size will be available as a setting and all other parameters will be used as default.
                                </p>
                                <p>
                                    Here, you can see how formatting affects JavaScript code. As you see, it is hard to understand unformatted code event it is just a simple function.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/javascript-formatter/javascript-format-before-after.jpg"
                                        alt="JS Formatter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    JavaScript Formatting Before vs. After
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online JavaScript Formatter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">JavaScript codes can be formatted with minimal effort by following:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter unformatted Javascript code that you need to beautify in input text area.</li>
                                <li className="pl-2 marker:text-gray-800">Indentation size may be changed if you need a spacing other than 2-spaces. Options are available from 1 to 5.</li>
                                <li className='pl-2 marker:text-gray-800'>Click the "Format" button to end the process. Formatted JS code will be shown on output field.</li>
                                <li className='pl-2 marker:text-gray-800'>Download the formatted script as a .js file or copy it to use it in your projects directly.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default JavascriptFormatter