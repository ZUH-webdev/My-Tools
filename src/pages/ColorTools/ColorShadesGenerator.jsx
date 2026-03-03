import colorShadesGenerator from "../../images/DetailPageImages/colorShadesGenerator.svg"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import CommentsSection from "../../components/CommentsSection"
import ShadesGenerator from "../../components/ShadesGenerator"
import SimilarTools from "../../components/SimilarTools"
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"

const ColorShadesGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Color Shades Generator" icon={colorShadesGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ShadesGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="color-shades-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Color Shades Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Color Shades Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating a color palette from shades of a color</span>. You can set the step size and step count for your needs easily.
                                </p>
                                <p>
                                    If you are working on a user interface (UI) design or coding a website, it is better to use shades of a color instead of using random colors to provide a more holistic view for users. If you define these colors as parameters in your theme and use them on your project, it will provide consistency between your pages. Otherwise, it will become hard to control your color palette.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/color-shades-generator/shades-of-gray.jpg"
                                        alt="Color Shades Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Color Palette with Shades of Gray
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Using lighter or darker shade of a color may be useful on hover effects, box-shadows, borders and on many UI elements since it gives a more natural look on the design as well as all elements looks complementary and become a piece of a puzzle.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Color Shades Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For generating color shades and creating color palettes from a reference color, following these steps will be helpful:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Select your reference color which will be lighten and darken to generate all shades.</li>
                                <li className="pl-2 marker:text-gray-800">Set darken/lighten ratio that will be applied in each step. Lower the value, closer the colors.</li>
                                <li className="pl-2 marker:text-gray-800">If you want lower or higher number of colors in your color shades palette, you can change step count. For example, if you set it to 3, it will generate 3 lighter and 3 darker colors by referencing the main color.</li>
                                <li className="pl-2 marker:text-gray-800">You can copy each color individually or copy them as a color array. Also, details will be listed if you click on any color from the list.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ColorShadesGenerator