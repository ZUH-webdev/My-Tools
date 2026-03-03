import cssBorderRadiusGenerator from "../../images/DetailPageImages/cssBorderRadiusGenerator.svg";
import BorderRadiusGenerator from "../../components/BorderRadiusGenerator";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const CSSBorderRadiusGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Border Radius Generator" icon={cssBorderRadiusGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <BorderRadiusGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-border-radius-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Border Radius Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Border Radius Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating CSS border radius</span>. "border-radius" is one of the most used CSS properties to soften corners of HTML boxes. If you use equal border-radius on all corners, it is relatively easy to apply, and you don't need any helper tool to set it. Even most developers don't know, CSS border radius may take arguments up to 8, 2 for each corner and each one determines slope of each axis of the corner. By setting all these 8 parameters, you can use CSS border-radius property in a more professional way to mask colors, images, and html elements.
                                </p>
                                <p>
                                    You can either use standard CSS units like pixel (px), rem, em or percentages for border-radius. Percentages will be used in this tool to represent a more general solution, but you can convert them to standard units by your own if you prefer.
                                </p>
                                <p>
                                    Here is a representation of an advanced usage of border-radius for masking an image. By settings border-radius of each corner individually, it is possible to obtain artistic results with images, gradients, or event with solid colors.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-border-radius-generator/css-border-radius-advanced-usage.jpg"
                                        alt="CSS Border Radius Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Advanced usage of CSS border-radius
                                </p>
                            </div>

                             <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    There are 2 main options for settings radius of each border. By default, there are 8 dots to set, 2 for each corner. If you enable "Merge Edge Radiuses" option, number of dots will reduce to 4 and each dot will control 2 radii at the same time. This option is better for setting more curvy shapes.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Border Radius Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate CSS code for border-radius property by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Set the positions of each dot by dragging them to desired positions.</li>
                                <li className="pl-2">There are 3 preview types. Solid color, gradient, or image. You can preview border-radius in each mode, either with guides or by hiding them with "Hide Guides" option to see result.</li>
                                <li className='pl-2'>Width and height of the image can be set if you need.</li>
                                <li className="pl-2">If you want to merge edge radiuses, you can enable this option to control 2 neighbor radiuses with one dot.</li>
                                <li className="pl-2">If you get the desired result in preview, you can copy the CSS code by clicking "Copy" button and paste it in your project's styles directly.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSBorderRadiusGenerator