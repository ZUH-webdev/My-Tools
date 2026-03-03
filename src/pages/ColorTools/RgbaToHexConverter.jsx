import rgbaToHexConverter from "../../images/DetailPageImages/rgbaToHexConverter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import RgbaToHex from "../../components/RgbaToHex";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const RgbaToHexConverter = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="RGBA to HEX Converter" icon={rgbaToHexConverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <RgbaToHex />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="rgba-to-hex-converter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online RGBA to HEX Converter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    RGBA to HEX Converter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for converting RGBA color code to HEX format</span>. RGBA and HEX are the most common color code formats other than HSL (HSLA) and predefined color codes.
                                </p>
                                <p>
                                    RGBA stands for red, blue, green, and alpha (opacity). Red, green, and blue are numbers between 0 to 256 while alpha (opacity) is between 0 to 1. These values express the amount of any r, g, b color in the mixture. For example, if the color code is rgb(255,0,0), this is pure red as there is no green and blue in the mixture while red is maximum. HEX color code works just like that, but the main difference is it uses base 16 or hexadecimal number system to represent each color. There are 6 digits, each pair represents red, green, and blue respectively.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/rgba-to-hex-converter/rgba-hex.png"
                                        alt="Rgba to Hex Converter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Same Color Both in RGBA and HEX Color Format
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    For the example in the image, if you convert each r, g, b number to hexadecimal, 0 ={">"} 00, 82 ={">"} 52, 204 ={">"} cc, you will get the HEX code. Since alpha opacity is 1, HEX color have 6 digits.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online RGBA to HEX Converter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can convert a RGBA color to HEX by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">First, enter the RGBA code you want to convert to HEX in the input area.</li>
                                <li className="pl-2 marker:text-gray-800">Click the convert button. If the RGBA color code you entered is valid, HEX color code will be shown as output, otherwise you will see an error. You can also use the color picker to see HEX equivalent of any color directly. You don't need to use Convert button in this case as it automatically fill both RGBA and HEX color codes.</li>
                                <li className="pl-2 marker:text-gray-800">You can copy the HEX code to your clipboard by using the "Copy HEX Color" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RgbaToHexConverter