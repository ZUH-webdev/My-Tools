import cssFormatter from "../../images/DetailPageImages/cssFormatter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import FormatterTool from "../../components/FormatterTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const CSSFormatter = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Formatter" icon={cssFormatter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <FormatterTool 
                type="css"
                placeholder="Paste your CSS code..."
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-formatter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]"></span>
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Formatter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Formatter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for formatting CSS code and beautify it</span> to make it more readable. CSS is one of the major components of a web project. It controls the visual part of a website, and it has a simple syntax where you add your properties and values within curly brackets under a CSS selector class, id, tag or attribute. Even though it has an easy syntax, it will be hard to manage your CSS code if it is not formatted properly.
                                </p>
                                <p>
                                    For increasing readability of CSS code, you can use this tool as <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS beautifier</span>. It has minimal configuration where you only set the indent size. Its default value is 2 but you can set it between 1 to 5 from the list before clicking "Format". Other options are not revealed because the main aim is to create a tool with minimum configuration and maximum performance.
                                </p>
                                <p>
                                    One of the most important things about an unformatted CSS code is that it becomes easier to make a syntax error if the code is not formatted. Any typo will make you code useless and your styles on your page will be missing. Sometimes, it is hard to find these typos and one of the advantages of this tool is that it shows the line number of the typos if your code is not valid.
                                </p>
                                <p>
                                    Here, you can see the difference between a raw CSS code vs. formatted CSS code. It becomes easy to read when you format the code with a standard.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-formatter/css-format-before-after.jpg"
                                        alt="CSS Formatter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Before vs. After CSS Formatting
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Formatter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">CSS code can be formatted / beautified by following the items in the list:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter your CSS code you want to format into Input field.</li>
                                <li className="pl-2 marker:text-gray-800">Set indent size to define how much space will be added before properties. Its default is 2 spaces, but you can change it if needed. There is no standard, but 2 or 4 spaces is the most common values.</li>
                                <li className='pl-2 marker:text-gray-800'>Click "Format" to start formatting process. It will parse your CSS code and warn if there is a syntax error in the code. If your code is valid, it rearranges it and beautify you CSS. You can copy it or download as a file according to your needs.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSFormatter