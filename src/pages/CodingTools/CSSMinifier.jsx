import cssMinifier from "../../images/DetailPageImages/cssMinifier.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import MinifierTool from "../../components/MinifierTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const CSSMinifier = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Minifier" icon={cssMinifier} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <MinifierTool
                    type="css"
                    placeholder="Paste your CSS code here..."
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-minifier" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Minifier?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Minifier is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for minifying and compressing CSS code</span>. CSS (Cascading Style Sheets) is a stylesheet language used for defining the display properties of HTML (Hyper Text Markup Language) codes in browsers. All colors, sizes, fonts, alignments, positionings, animations and many different properties of a webpage are defined by CSS.
                                </p>
                                <p>
                                    There are 3 types of CSS; inline, internal or external CSS. Inline CSS is the one which is written directly in an HTML tag. They are generally short and minification is not critical for this type. HTML minification is also handle these types of styles. Internal CSS is the type where you put your styles between <style></style> tags directly in the HTML. This type is a lot longer and it is either handled by CSS Minifiers or HTML minifiers. Third type is external CSS and it is the one where you put your code into a separate file with .css extension. This is the most common way to use CSS in HTML. These files are included to the webpages with a {"<link>"} property and it is suggested to add these files to your projects after minified.
                                </p>
                                <p>
                                    It is suggested to use minified/compressed versions of CSS in your webpages. When you minified your CSS, the size will be decreased, and it has a positive impact on page load time and performance. By reducing CSS file size, you can improve user experience by reducing first meaningful paint time.
                                </p>
                                <p>
                                    If you use webpack or other bundlers in your projects, generally they handle these types of minifications. If you make a small webpage without any bundler, you must handle it on your own and you need a CSS minifier/compressor. This tool will work as a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS compressor</span> and perform these operations automatically for you.
                                </p>
                                <p>
                                    Here is a basic comparison for before and after CSS minification. You can see the size reduction with your bare eyes.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-minifier/css-minification-before-after.jpg"
                                        alt="CSS Minifier"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Before vs. After CSS Minification
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    When you compress your CSS code, you will see an info box which shows the estimated percentage for size reduction. It will give you an idea about your performance increase for the time you saved when your file is fetched by the browsers.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Minifier?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">CSS styles can be minified / compressed by following the steps below:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Put your CSS styles to the input textbox which you want to minify.</li>
                                <li className="pl-2 marker:text-gray-800">Click "Minify" button.</li>
                                <li className='pl-2 marker:text-gray-800'>You will see the result in output textbox. If there is a validation error in your CSS and compression is somehow failed, you will see a warning about validation. If your CSS is valid, you can either copy the minified code into your clipboard or download it as style.min.css file.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CSSMinifier