import imageAverageColorFinder from "../../images/DetailPageImages/imageAverageColorFinder.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import ImageAverageColorFind from "../../components/ImageAverageColorFind";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader'

const ImageAverageColorFinder = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image Average Color Finder" icon={imageAverageColorFinder} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ImageAverageColorFind />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-average-color-finder" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Image Average Color Finder?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Image Average Color Finder is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for finding average color in an image</span> by interpolating all colors in an image. You can use this color as background color, gradient, border, box shadow or for any other purpose. There are 3 different algorithms you can select for finding the average color of an image. These are listed below.
                                </p>

                                <ul className="list-disc space-y-6 text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-800">Simple:</span> As the name suggests, it processes all color units one by one, accumulates all reds, greens, blues, and alphas, divides them by the number of units and makes a simple interpolation for finding image's average color.
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-800">Square Root:</span> Only difference between simple and square root algorithm is square root algorithm takes square root of the accumulated colors.
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-800">Dominant:</span> It tends to find not average but the most used and dominant color in an image.
                                    </li>
                                </ul>
                                <p>Here you can see usage of image average color as background.</p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-average-color-finder/usage-of-image-average-color.jpg"
                                        alt="Image Average Color Finder"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Usage of Image Average Color as Background
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image Average Color Finder?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can find average color of an image by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, drag your image into image upload zone or manually choose from your file system by clicking the upload box.</li>
                                <li className="pl-2">It will be processes within seconds and calculated color as an average color will be showed right below the image you upload.</li>
                                <li className='pl-2'>The color will be shown in HEX and RGBA format. It will also show whether it is a dark or light color.</li>
                                <li className='pl-2'>You can copy the color code of the average color of the image in HEX or RGBA format by using "Copy" buttons.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageAverageColorFinder