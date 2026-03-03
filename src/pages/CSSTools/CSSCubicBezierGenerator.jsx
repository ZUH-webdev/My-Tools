import cssCubicBezierGenerator from "../../images/DetailPageImages/cssCubicBezierGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import CubicBezierGenerator from "../../components/CubicBezierGenerator";

const CSSCubicBezierGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Cubic Bezier Generator" icon={cssCubicBezierGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <CubicBezierGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-cubic-bezier-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Cubic Bezier Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Cubic Bezier Generator is a <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">free online tool for generating CSS code for cubic bezier easing functions</span> by getting info about the animation from time vs progress graph or directly previewing the animation.
                                </p>
                                <p>
                                    When creating animations on web development, mostly linear transitions are used since most animations are very short and users may not feel the difference between a linear CSS animation and an animation which has an easing function. But, if you are working with complex animations which has a duration above ~0.5s, it is important to use more natural easing functions or elastic movements which attracts users more. There are predefined easing functions in CSS which can be used for better animations which are ease, ease-in, ease-out and ease-in-out. When these easing types are not sufficient, best way to manage an animation timing in CSS is to use Cubic Bezier easing functions.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-cubic-bezier-generator/cubic-bezier-graph.jpg"
                                        alt="CSS Cubic Bezier Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Time vs Progress graph for Cubic Bezier Easing
                                </p>
                                <h2 className="text-lg text-gray-800 mt-4 text-center italic">
                                    animation-timing-function: cubic-bezier(x1, y1, x2, y2);
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold pb-4">
                                <p>
                                    There are 4 parameters in CSS cubic Bezier animation timing function which defines the positions of 2 points, P1 & P2. First point P1 identifies the progress at the start of the animation while P2 identifies the final part. Cubic bezier curve is defined in coordinate system starting from point (0,0) to point (1,1). The path between these points describes the progress of the CSS animation.
                                </p>
                                <ul className="list-disc pl-8">
                                    <li className="text-md font-semibold text-gray-700">
                                        <span className="font-bold text-gray-900">x1, y1: </span>
                                         x and y coordinates of P1 (Point 1) which defines start of animation.
                                    </li>
                                    <li className="text-md font-semibold text-gray-700">
                                        <span className="font-bold text-gray-900">x2, y2: </span>
                                        x and y coordinates of P2 (Point 2) which defines end of animation.
                                    </li>
                                    </ul>
                                <p>
                                    By defining x and y coordinates of these 2 points, you can define the progress of all animation with cubic Bezier function in CSS. x values are limited between 0 and 1 while y values may be between minus infinity to plus infinity. But, in terms of achieving natural animation progress, it is limited between -2 to +2 in the tool.
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Cubic Bezier Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate CSS code for cubic Bezier animation timing functions by following these easy steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, you have to select 4 coordinates for constructing the cubic Bezier starting and ending points.</li>
                                <li className="pl-2">Animation can be previewed online by pressing the play icon. If the result is not satisfactory, you can fine tune it easily by changing the coordinates. Also, the graph is helpful to predict the CSS animation progress. Its path and slopes give ideas about the result.</li>
                                <li className='pl-2'>Default animation duration is one second, but you can change it between a range from 0 to 5 seconds. Also, predefined CSS animation timing functions can be selected from the list see how they behave.</li>
                                <li className='pl-2'>CSS code or cubic Bezier coordinates can be copied and used in your project by just pasting it in your stylesheet.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSCubicBezierGenerator