import imageFilters from "../../images/DetailPageImages/imageFilters.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import ImageFilter from "../../components/ImageFilter";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const ImageFilters = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image Filters" icon={imageFilters} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ImageFilter />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-filters" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-2 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">

                            <h1 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">What is Online Image Filters?</h1>

                            <div className="space-y-4 text-gray-800 leading-relaxed mb-8 font-manrope text-sm md:text-base">
                                <p>
                                    Image Filters is a free online tool for applying filters on images. There are different types of filters you can apply to image. They can be either color manipulation such as brighten, lighten, darken, saturate/de-saturate, grayscale, hue, tint, shade, dither, invert, or image distortion such as blur, horizontal flip, vertical flip, fisheye. Here is an example of an image before and after the image filter.
                                </p>
                            </div>

                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-filters/image-filter-before-after.png"
                                        alt="Image Filters"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Same Image, Before and After Hue Filter
                                </p>
                            </div>

                            <p className="text-gray-800 mb-4 font-manrope font-semibold">There are many different image filters available. You can manipulate images in different aspects. Here are short explanations of some image filters you can use.</p>

                            <ul className="space-y-6 text-gray-800 mb-8 font-manrope text-sm md:text-base">
                                <li>
                                    <span className="font-bold">Lighten/Darken:</span>  Makes an image lighter or darker.
                                </li>

                                <li>
                                    <span className="font-bold">Brighten:</span> Increases brightness of the image.
                                </li>

                                <li>
                                    <span className="font-bold">Saturate/De-saturate:</span> Sets the color saturation of the image. If saturation level of an image is low, it tends to become black & white.
                                </li>

                                <li>
                                    <span className="font-bold">Blur:</span> Makes image blurrier. It gives an effect to an image like an unfocused camera.
                                </li>

                                <li>
                                    <span className="font-bold">Grayscale:</span> Makes an image black & white.
                                </li>

                                <li>
                                    <span className="font-bold">Hue:</span> Changes the reference of a color with respect to Red, Green and Blue. It takes values between 0° to 360° (it may also be between 0° to -360°, theoretically, but not used here). 0° and 360° are both the same point, where red, green, and blue is the default references. By changing the degree, you give an offset for these color references.
                                </li>
                                <li>
                                    <span className="font-bold">Fisheye:</span> Gives fisheye lens effect to the image.
                                </li>
                                <li>
                                    <span className="font-bold">Invert:</span> Inverts all colors of an image to its inverse (opposite) colors.
                                </li>
                                <li>
                                    <span className="font-bold">Flip Horizontal/Vertical:</span> Flips image in horizontal or vertical axis. It gives mirror effect to an image.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image Filters?</h2>

                            <p className="text-gray-800 mb-6 font-manrope">You can apply filters to an image by following these steps:</p>

                            <ol className="space-y-4 text-gray-800 mb-8 list-decimal list-inside font-manrope text-sm md:text-base">
                                <li>Upload the image you want to apply filters by using the drop area, or by browsing from your local device.</li>
                                <li>Select an image filter from the list.</li>
                                <li>Some filters need a value between a range while others don't. If no extra option is needed, the filter will be applied right after. If it's needed, you must set it, and click "Apply" button to activate the selected image filter.</li>
                                <li>You can download the filtered image by using "Download" button or reset all filters by using "Reset" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageFilters