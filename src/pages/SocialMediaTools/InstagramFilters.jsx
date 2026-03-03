import instagramFilters from "../../images/DetailPageImages/instagramFilters.svg"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import CommentsSection from "../../components/CommentsSection"
import SimilarTools from "../../components/SimilarTools"
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"
import InstagramFiltersTool from "../../components/InstagramFiltersTool"

const InstagramFilters = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Instagram Filters" icon={instagramFilters} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <InstagramFiltersTool />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="instagram-filters" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Instagram Filters?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Instagram Filters is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for applying Instagram-like filters on images</span>. All filters are set for achieving the same effect that Instagram gives on photos with its filters on the mobile app. If you don't want to use the mobile app of Instagram and need an online web tool which mimics Instagram filters on your web browser, you are in the right place. Here is an example on how Instagram Filters works on same image.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/instagram-filters/instagram-filters.jpg"
                                        alt="Instagram Filters"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Original Image vs Image After Instagram Filters
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    There are several filters on Instagram. All give a different feel on an image, some turns the image into a more vivid one while some turns it to an old photo. Here is a list of all Instagram filters with small details about them.
                                </p>
                                <ul className="p-4 space-y-6 list-disc text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900">Normal:</span> Original version of the image. You can compare the filtered one with the original version to see the effect of filter.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Clarendon:</span>  It adds a blueish overlay while increases the contrast of the image a little bit.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Gingham, Reyes & Aden:</span> After using these filters, your image will look like an old photo.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Moon:</span> As the name suggests, it de-saturates all colors and makes your image black & white.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Lark:</span> It increases the vividness and contrast of the picture while adding a blue tone on the image.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Juno:</span> This filter decreases the saturation of the photo while adding a turquoise effect.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Slumber, Crema & Ludwig:</span> These three filters all de-saturate the colors but have different color overlays.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Perpetua:</span> It adds blue and yellow overlays on the image slightly.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Instagram Filters?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can apply Instagram filters to an image by following these easy steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Upload the image you want to apply Instagram filters by using the drop zone, or by browsing from your local device. You can add also add images from URL.</li>
                                <li className="pl-2 marker:text-gray-800">Select an Instagram filter. Each filter has a preview image which demonstrates the effect of filter on image. It may give you an opinion about the before and after of the filter.</li>
                                <li className="pl-2 marker:text-gray-800">You can download the filtered image which is processed by the tool by using "Download" button or reset the effect of the filter by using "Reset" button which sets the filter value to "Normal".</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default InstagramFilters