import photoCensor from "../../images/DetailPageImages/photoCensor.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import PhotoCensored from "../../components/PhotoCensored";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader'

const PhotoCensor = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Photo Censor" icon={photoCensor} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <PhotoCensored />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="photo-censor" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Photo Censor?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Photo Censor is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for censor photos and hide faces in a photo</span> by pixelate or blur the selected region or putting a black stripe in the desired area. Here is 3 different censorship method that is used in image process:
                                </p>
                                <ul className="space-y-6 text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                <li>
                                    <span className="font-bold text-gray-800">Pixelate:</span> When an area is selected in a photo, this region will be pixelated, and it will look like a low resolution region. For hiding faces in a photo, just select the face or eyes of a person you want to hide, set the unit width and height of the squares in pixels, and censor the image. Pixelating a photo is the most common way of image censorship.
                                </li>

                                <li>
                                    <span className="font-bold text-gray-800">Blur:</span> By making a region blurry, you can hide a person's face, but since it is not effective as pixelate, people may still recognize the person whose face is censored. For preventing this, set the strength of blur so that the face become unrecognizable.
                                </li>

                                <li>
                                    <span className="font-bold text-gray-800">Black Bar:</span> It is the most dominant way of censoring face of a person. Select the region you want to hide in the face. You can select only the eyes or the full face. When you click Censor button, it will hide that region and put a black stripe in the photo instead.
                                </li>
                            </ul>
                            <p>This is a side-by-side comparison between each photo censor type.</p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/photo-censor/photo-censor-types.jpg"
                                        alt="Photo Censor"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Image Censor Types: Pixelate, Blur & Black Bar
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Photo Censor?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For censoring faces in photos, you can follow these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, select type of image processing method from the list.</li>
                                <li className="pl-2">For pixelate and blur, you need to set the amount of the censorship.</li>
                                <li className='pl-2'>Select the region from the image you want to hide by setting position and size of the area.</li>
                                <li className="pl-2">Click the button "Censor" for applying the filter to image. You can download the censored image by using the "Download Image" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PhotoCensor