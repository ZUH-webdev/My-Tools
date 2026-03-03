import colorMixer from "../../images/DetailPageImages/colorMixer.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import ColorMixerTool from "../../components/ColorMixerTool";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const ColorMixer = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Color Mixer" icon={colorMixer} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ColorMixerTool />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="color-mixer" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Color Mixer?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Color Mixer is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for blending two colors</span> and find the interpolated colors just between these two. You can either enter a HEX color or an RGBA color with opacity as input and the tool calculates the mixed color by making an interpolation. It finds the color just between these two colors by blending these HTML colors.
                                </p>
                                <p>
                                    You can define step size for interpolation, that means you can find all colors between 2 HTML colors in n steps. You can select step size between a range from 1 to 10. By using steps, you can get a color spectrum between 2 colors or find shades of a tone.
                                </p>
                                <p>
                                    Here is an image showing how 2 colors are mixed. When blue and red are blended, you get purple. In terms of rgba, blue is rgb(0, 0, 255) and red is rgb(255, 0, 0). When these 2 colors mixed, the result in rgba is rgb(128, 0, 128) which is the color code of purple. It is basic interpolation.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/color-mixer/how-color-mixer-works.png"
                                        alt="Color Mixer"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How Color Mixer Works on Blending Colors
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    The situation is a little complicated when alpha (opacity) of colors is different than 1. But, since there is a math in color coding, it's not rocket science. The tool works like an <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">online HTML color blender</span>, and it can mix either solid or opaque colors.
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Color Mixer?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can mix two colors and get the color code of mixed colors by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Select 2 colors that you want to mix. It can be either a solid color or a color with opacity.</li>
                                <li className="pl-2 marker:text-gray-800">Select step size from list between 1 and 10. It defines the number of colors between the colors you choose.</li>
                                <li className="pl-2 marker:text-gray-800">Click "Mix Colors" button for seeing the mixed color codes and its color preview.</li>
                                <li className="pl-2 marker:text-gray-800">Results will be shown in 3 color code formats: HEX, RGBA and HSLA. Click on color codes to copy their values on your clipboard. Also, you can view whether the color is light or dark.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ColorMixer