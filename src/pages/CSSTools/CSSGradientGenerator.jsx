import cssGradientGenerator from "../../images/DetailPageImages/cssGradientGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import GradientGenerator from "../../components/GradientGenerator";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const CSSGradientGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Gradient Generator" icon={cssGradientGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <GradientGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-gradient-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Gradient Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Gradient Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating CSS gradients</span>. CSS gradient is a commonly used background type which contains two or more colors which have a color distribution that changes gradually. They are widely used as backgrounds in webpages to provide a fancy effect on design and attract users. If you think that solid backgrounds are boring for your user interface and looking for a lite weight solution, CSS backgrounds is one of the best solutions for this purpose. Image backgrounds has page loading costs and they increase the time needed to load a page. Gradients are a perfect solution if you have concerns on page loading time.
                                </p>
                                <p>
                                    You must be careful when choosing the colors as they have to complete each other. If you need inspiration for colors, you can either use presets or shuffle colors with the button to get random gradients. You can pick if you like any of them and get the code easily.
                                </p>
                                <p>
                                    You can generate CSS gradients manually by using up to 3 colors by your own or you may use preset gradients by choosing from the list. There are 2 main gradient type in CSS, one is linear, and one is radial. It identifies the distribution axis of the colors. Here is a basic comparison between linear and radial gradient.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-gradient-generator/css-gradient-comparison.png"
                                        alt="CSS Gradient Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    CSS Gradient Types - Linear vs. Radial
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Gradient Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can create your own CSS gradients by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, set the colors you want to use in your gradient. 2 colors are enabled as default. You can enable 3rd color by checking the "Use 3rd color" checkbox.</li>
                                <li className="pl-2">Select the direction of the gradient. You can either choose linear and radial. If you have selected linear, you must send angle of the gradient.</li>
                                <li className='pl-2'>If you want to use a preset gradient, you can select from the list, and it automatically set colors for you.</li>
                                <li className="pl-2">You can copy the CSS code for gradient either manually or by clicking "Copy CSS" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSGradientGenerator