import htmlFormatter from "../../images/DetailPageImages/htmlFormatter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import FormatterTool from "../../components/FormatterTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const HTMLFormatter = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="HTML Formatter" icon={htmlFormatter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <FormatterTool 
                type="html"
                placeholder="Paste your HTML code..."
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="html-formatter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online HTML Formatter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    HTML Formatter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for formatting HTML code with HTML Beautifier</span> to increase readability. HTML is a markup language which defines the skeleton of a webpage. It not only defines structure with div's and other tags but also includes inline CSS or JS and give references to external files. To sum up, all elements of a website are merged in HTML.
                                </p>
                                <p>
                                    When you deal with HTML code, sometimes it may be somehow unformatted, and it can be problematic to read it and add/update features. For increasing your productivity, it is suggested to format your HTML code with some standards.
                                </p>
                                <p>
                                    There are many configurative parameters for HTML beautification, yet online HTML Formatter use default parameters for decreasing complexity. Only indent size is configurable, and it is sufficient for most cases.
                                </p>
                                <p>
                                    There is an image below that shows before and after state for formatting of a HTML code sample. It is obvious that it is easier to read and control the code after formatting. It is especially crucial if the length of your code increases.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/html-formatter/html-format-before-after.jpg"
                                        alt="HTML Formatter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    HTML Formatting Before vs. After
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online HTML Formatter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can beautify your HTML code just by using the guide below:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Fill input field with the HTML code you want to format.</li>
                                <li className="pl-2 marker:text-gray-800">You can set indent size if you want to use a value other than 2. Most common indent sizes are 2-space and 4-space indentation, but it is all up to you. You can set any value that makes your comfortable when reading code.</li>
                                <li className='pl-2 marker:text-gray-800'>When all are set, click the button "Format". A downloadable file named index.html will be available when you click the button "Download". Or you can copy the formatted HTML into your clipboard.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HTMLFormatter