import imageCropper from "../../images/DetailPageImages/imageCropper.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import ImageCrop from "../../components/ImageCrop";

const ImageCropper = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image Cropper" icon={imageCropper} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ImageCrop />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-cropper" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Image Cropper?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Image Cropper is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for cropping images</span> in any size and portion. You can select any part of the image, crop it and download the desired part of the image easily.
                                </p>
                                <p>
                                    If you have an image that have some parts you want to throw away, Online Image Cropper is the most easy-to-use and solution for you. Here, there is an image how you select the desired part of an image. For example, you have a photo consisting of many people and you want only some of them in the photo and cut others out, you can crop the photo just like below.
                                </p>
                                
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-cropper/image-cropper.png"
                                        alt="Image Cropper"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How Image Cropper Works
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image Cropper?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can create your own barcode by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Upload the image you want to crop by dropping it into the upload zone or by picking from your computer.</li>
                                <li className="pl-2">Select the desired area in the image you want to crop by moving the blue guidelines.</li>
                                <li className='pl-2'>Click the button "Crop" for cropping the selected area.</li>
                                <li className='pl-2'>You can crop an image multiple times until you get the desired result.</li>
                                <li className='pl-2'>You can also rotate the image before cropping by using the "Rotate" button.</li>
                                <li className="pl-2">If you want to reset all crop operations and want to start from point 0, use "Reset" button.</li>
                                <li className="pl-2">Use "Download" button to download the cropped image.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCropper