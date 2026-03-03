import hexToRgbaConverter from "../../images/DetailPageImages/hexToRgbaConverter.svg"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import CommentsSection from "../../components/CommentsSection"
import HexToRgba from "../../components/HexToRgba"
import SimilarTools from "../../components/SimilarTools"
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"

const HexToRgbaConverter = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="HEX to RGBA Converter" icon={hexToRgbaConverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <HexToRgba />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="hex-to-rgba-converter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online HEX to RGBA Converter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    HEX to RGBA Converter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for converting HEX color code to RGBA format</span>. There are different color formats to define a color in CSS. Some are HEX (Hexadecimal Colors), RGB & RGBA, HSL & HSLA. There are also pre-defines color names like "red, green, lightblue..." etc. Also, you can use the keyword "currentColor".
                                </p>
                                <p>
                                    Most used color formats are HEX and RGBA. HEX stands for hexadecimal colors while RGBA stands for "red, green, blue, alpha". HEX color code may have varying character length with a maximum of 8 without # sign. First 6 characters shows the amount or red, green and blue. There are 2 hexadecimal characters for each color. Each character may vary within 0-9 & a-f which means a total of 16 possibilities. For 2 characters, it means 256 possibilities. If you use 8-character length HEX code, last 2 characters symbolizes alpha of the color. In RGBA color format, there are 4 arguments. First 3 is red, green, and blue which is varying between 0 to 255 and last one is the alpha (or opacity) which varies from 0 to 1.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/hex-to-rgba-converter/hex-rgba.png"
                                        alt="Hex to Rgba Converter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Same Color Both in HEX and RGBA Color Format
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    For the example in the image, if you convert each hexadecimal pair to decimals, 00 ={">"} 0, 52 ={">"} 82, cc ={">"} 204, you will get the RGB colors. Since, HEX color is 6 characters only, alpha is equal to 1.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online HEX to RGBA Converter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can convert a HEX color to RGBA by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">First, enter the HEX code you want to convert to RGBA in the input area.</li>
                                <li className="pl-2 marker:text-gray-800">Click the convert button. If the code you entered is valid, RGBA code will pop, otherwise you will see an error. You can also use the color picker directly, then you don't need to use Convert button since it automatically fills both color codes.</li>
                                <li className="pl-2 marker:text-gray-800">You can copy the RGBA code to your clipboard by using the "Copy RGBA Color" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HexToRgbaConverter