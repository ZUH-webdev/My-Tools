import imageResizer from "../../images/DetailPageImages/imageResizer.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import ImageResizzer from "../../components/ImageResizzer";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const ImageResizer = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image Resizer" icon={imageResizer} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ImageResizzer />
                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-resizer" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Image Resizer?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Image Resizer is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for resizing images</span> in different formats such as JPG/JPEG, PNG, SVG, GIF etc. If you have a big size raw image or an oversize image for the place you put it, you must resize it for getting better performance. For optimization purposes and increasing page load times, image resizing is a good practice.
                                </p>
                                <p>
                                    If you have an avatar area in your design with 100x100 pixel size, but you have an image of 300x300, you can still use it in that area, but your page load time increases. If you use 100x100px image in this area, it will be much better on page loading. There is a basic comparison for image resizing below. You can save around ~70% for this scenario by optimizing your image size.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-resizer/image-resize-comparison.png"
                                        alt="Image Resizer"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Image Resize Comparison
                                </p>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold pb-4">
                                <p>
                                    You can either scale up or down your image. If you scale down, it is always ok, but if you scale up your image and use it with its original width, you may face with quality issues. Be aware of the fact that, scaling up an image without losing quality needs extra effort and you have to use AI or different algorithms to fill the interpolated areas.
                                </p>
                                </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image Resizer?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can resize images by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, upload the image you want to resize. You can resize JPG/JPEG, PNG or other popular image formats.</li>
                                <li className="pl-2">Enter either width or height of the image you desired. If "Preserve Aspect Ratio" is checked, it automatically calculates width and height accordingly. If you uncheck, it may distort your image and you may get unexpected results. So, preserving the ratio is a good practice for the stability of your image.</li>
                                <li className='pl-2'>Click the button "Resize" after setting your desired image width and height.</li>
                                <li className='pl-2'>Use "Download" button to get the resized image.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageResizer