import imageColorExtractor from "../../images/DetailPageImages/imageColorExtractor.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import ImageColorExtract from "../../components/ImageColorExtract";

const ImageColorExtractor = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image Color Extractor" icon={imageColorExtractor} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ImageColorExtract />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-color-extractor" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Image Color Extractor?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Image Color Extractor is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for extracting all colors in an image</span> and gives detailed information about all these colors as a color palette. You can get info and copy all data of these colors as well as copy all colors as a list to use in your projects.
                                </p>
                                <p>
                                    For example, if you design a hero with an image and don't know which colors may be complementary with the image, extracting colors from this image will be a good reference point to choose the right color. Also, you can create your color palettes and themes from extracted colors for color harmony and complementing images with other elements.
                                </p>
                                <p>
                                    This is an example output for the well-known painting of Mona Lisa and its color set as a result.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-color-extractor/extracted-colors-of-mona-lisa-painting.jpg"
                                        alt="Image Color Extractor"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Main Colors Extracted from Da Vinci's Mona Lisa Painting
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image Color Extractor?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">Finding main colors of an image is an easy process. Just follow this list:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, upload the image you want to work on from your device.</li>
                                <li className="pl-2">After uploading the image file, all colors will be listed under the image. You can change the number of colors to be extracted from the image by changing the count from the list.</li>
                                <li className='pl-2'>You can explore all colors one-by-one and see color code as HEX, RGBA or HSL. You can also copy HEX codes of all colors as an array list.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageColorExtractor