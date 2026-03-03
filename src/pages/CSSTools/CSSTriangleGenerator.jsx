import cssTriangleGenerator from "../../images/DetailPageImages/cssTriangleGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import TriangleGenerator from "../../components/TriangleGenerator";

const CSSTriangleGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Triangle Generator" icon={cssTriangleGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <TriangleGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-triangle-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Triangle Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Triangle Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating CSS triangles</span>. There is no simple and direct method for creating triangles in CSS. Therefore, it's a little tricky / complicated and using an online CSS triangle generator is a good practice for saving time.
                                </p>
                                <p>
                                    You can generate different shapes in HTML with single line of code, but when it comes to creating a CSS triangle, it becomes a hassle for software developers even if triangle is one of the most basic shapes in geometry. Main reason for this is there isn't a shortcut method for creating triangle with CSS styles. It may be added to CSS standards in future if major browsers come to an agreement in future, but for now, best way is to use <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS triangle maker</span>. Also, if you merge your triangle with a square or rectangle that have compatible size with triangle, you can obtain arrows with CSS that means you can use this tool as <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS arrow generator</span>. You can set direction of the arrow by using triangles that have different directions. Left, right, top or bottom arrows can be created easily with a little CSS tuning.
                                </p>
                                <p>
                                    Triangles are used for different purposes in HTML designs such as comment or chat boxes, dropdown menus, header menu indicators etc. Here is a basic example that shows how CSS triangles are used in designs.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-triangle-generator/css-triangle-usage.png"
                                        alt="CSS Triangle Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Usage of CSS Triangles
                                </p>
                            </div>

                             <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Most generic way to produce CSS triangles is to manipulate border widths of a 0x0 HTML element. There are 4 width and 4 color for the border you can determine. By setting these parameters properly, you can obtain a CSS-only triangle easily.
                                </p>
                                <p>
                                    There is a major issue with CSS triangles when you need to set box shadows on them. Since they are 0x0 size HTML elements with borders, it is impossible to give box shadow or elevation to them directly. If you have such necessity, you may use SVGs or images instead of HTML & CSS. But most of the time, triangles are so small, and it is almost impossible to distinguish if they have box shadows or not. So, you can also use them even they have shadows in UI designs by considering drawbacks and advantages.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Triangle Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate CSS triangles by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, chose the direction of the triangle. There are 8 options. 4 of them in the corners are 90° triangles, therefore you cannot customize their width or height.</li>
                                <li className="pl-2">Select the color of the triangle. It may be a solid or an opaque color according to your choice.</li>
                                <li className='pl-2'>Set width and height of the triangle. You can customize width for triangles pointing up and down and customize height for triangles pointing left and right. 90° triangles cannot be customized.</li>
                                <li className="pl-2">You can check the triangle in the preview section.</li>
                                <li className="pl-2">If everything is ok, you can copy the CSS code for the created triangle by using the "Copy" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSTriangleGenerator