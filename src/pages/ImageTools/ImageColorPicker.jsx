import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"
import imageColorPicker from "../../images/DetailPageImages/imageColorPicker.svg"
import CommentsSection from "../../components/CommentsSection"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import SimilarTools from "../../components/SimilarTools"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import ImageColorPick from "../../components/ImageColorPick"


const ImageColorPicker = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image Color Picker" icon={imageColorPicker} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ImageColorPick />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-color-picker" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Image Color Picker?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Image Color Picker is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for picking any color from an image</span>. While you are moving your cursor over the image, a magnifier will zoom in the related area and help you to choose the exact pixel you want to pick from the image.
                                </p>
                                <p>
                                    When you make a design or code a website, you may need color code of a specific part of an image to use it in another section to increase consistency between elements. If you don't want to open big desktop applications like Photoshop, Sketch or Figma just to pick a color from an image, online Image Color Picker will help you to pick the color with the fastest way. Result will be listed in Hex, RGBA & HSL color code format and you can copy any of them according to your needs.
                                </p>
                                <p>
                                    Here you can see how Image Color Picker works on an image and how you can pick the desired color.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-color-picker/image-color-picker.jpg"
                                        alt="Image Color Picker"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Image Color Picker Tool on Mona Lisa Painting
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image Color Picker?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For picking up color on an image with an eyedropper, follow these steps one by one:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Upload an image which you want to pick a color in it.</li>
                                <li className="pl-2">When you move the mouse over the uploaded image, you will see an eyedropper and a magnifier. When you find the exact color on the image, click your mouse button, or touch the screen in your mobile device. It will show a color box which gives detailed information about the color codes.</li>
                                <li className='pl-2'>You can copy color codes and use on your projects directly.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageColorPicker