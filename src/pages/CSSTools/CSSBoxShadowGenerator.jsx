import cssBoxShadowGenerator from "../../images/DetailPageImages/cssBoxShadowGenerator.svg";
import BoxShadowGenerator from "../../components/BoxShadowGenerator";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const CSSBoxShadowGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Box Shadow Generator" icon={cssBoxShadowGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <BoxShadowGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-box-shadow-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Box Shadow Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Box Shadow Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating CSS box shadows</span> in any color and size. You can create the box shadow you need by tuning the parameters, preview it as a box, circle or header and get the CSS code directly. Here is how a box shadow looks in HTML.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-box-shadow-generator/box-shadow.png"
                                        alt="CSS Box Shadow Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How box-shadow looks in HTML
                                </p>
                            </div>

                             <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    There are different parameters you must set in CSS box-shadow property. These are the following. Optional parameters are showed in parenthesis.
                                </p>
                                <p className="text-lg text-gray-700 mt-4 text-center italic">
                                    box-shadow: (inset) h-offset v-offset (blur) (spread) color;
                                </p>
                                <ul className="p-4 space-y-6 list-disc text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900">Inset:</span> "inset" is an optional parameter works like a flag and it changes the shadow from outer to inner. By default, shadow is outset, and you don't need to write anything to set it in CSS. Just use "inset" to change its default position.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Horizontal Offset:</span> Horizontal offset or h-offset is the distance of shadow from center in x-axis. It's a required parameter. It may be either negative or positive. Negative values put the shadow to the left of the box, while positive put the shadow to the right.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Vertical Offset:</span> Vertical offset or v-offset is the distance of shadow from center in y-axis. It's a required parameter. It may be either negative or positive. Negative values put the shadow above the box, while positive values put the shadow below.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Blur:</span> Blur is the amount of blur that will be applied to shadow. It has to be zero or positive. Blur is an optional parameter. If you don't set it, it will be calculated as zero.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Spread:</span> Spread is the radius of the shadow spread that will be subtracted or added to shadow itself. If its value is negative, shadow will be smaller, vice versa. Spread is an optional parameter. If you don't set it, it will be calculated as zero.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Color:</span> It determines the color of the shadow. It's a required parameter.
                                    </li>
                                </ul>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Box Shadow Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate a CSS box shadow by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, set the sizes of h-offset, v-offset, blur and spread in pixels.</li>
                                <li className="pl-2">Determine the colors for background, box, and shadow. Background and box colors are for preview-only. Shadow color will be used in the CSS code generated.</li>
                                <li className='pl-2'>You can enable inset shadow by activating the checkbox if needed.</li>
                                <li className="pl-2">There are 2 preview modes. One is box and other is header. You can check the generated box shadow in both modes according to your needs.</li>
                                <li className="pl-2">You can copy the CSS code generated manually or by using the button "Copy CSS".</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSBoxShadowGenerator