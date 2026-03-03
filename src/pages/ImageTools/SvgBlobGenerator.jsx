import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"
import svgBlobGenerator from "../../images/DetailPageImages/svgBlobGenerator.svg";
import CommentsSection from "../../components/CommentsSection";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import SimilarTools from "../../components/SimilarTools";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import { ExternalLink } from "lucide-react";
import BlobGenerator from "../../components/BlobGenerator";


const SvgBlobGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="SVG Blob Generator" icon={svgBlobGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <BlobGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="svg-blob-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online SVG Blob Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    SVG Blob Generator is a free online tool for generating SVG blobs for using in designs as background. You can set color, randomness, and complexity of the shape for your needs. After finding the shape you want, you can either copy the SVG code into your clipboard or download it as a .svg file.
                                </p>
                                <p>
                                    SVGs are very popular in recent years because of their scalability and quality in designs. Since it is a vector-type format, you can resize it without losing quality. SVG blobs are mainly used as background in designs and their randomness gives designs a unique feeling. Its circular shape makes it appropriate for using as background with images or text. You can also use SVG blobs to make logos. SVG blob maker is the easiest way to create SVG blobs without using design tools or drawing paths manually.
                                </p>
                                <p>
                                    In addition to solid color backgrounds, blobs can be used as a clip path for images, so images can be used as blob backgrounds. Check "Use Image Background" checkbox if you want to use image backgrounds in blobs instead of color. These images will be centered and cropped if needed to cover the blob without image distortion. You may see a white blank preview after you set an image URL, that may be caused by an URL which does not belong to an image or there is a network issue while image is fetching.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/svg-blob-generator/svg-blob-usage-logo-background.png"
                                        alt="SVG Blob Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    SVG Blob Usage as Logo and Image Background
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online SVG Blob Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can create SVG blobs by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Set growth. It's minimum size of the blob as percentage. If you increase it, it will decrease the randomness of the shape since its hills and pits will be smoother.</li>
                                <li className="pl-2">Set edge count. It is the number of edges in the shape. It will increase the complexity of SVG blob if you increase it.</li>
                                <li className='pl-2'>If you prefer image instead of color as blob fill, use the checkbox to turn on image backgrounds and enter your URL in the input field.</li>
                                <li className="pl-2">After setting all parameters for your needs, you can shuffle until you get the desired shape.</li>
                                <li className="pl-2">Click "Copy" button to copy SVG code on your clipboard or click "Download" to download the shape as an SVG file.</li>
                            </ol>

                            {/* Section 4: Credits */}
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Credits</h4>
                                <p className="text-md font-semibold text-gray-700">
                                    Dummy images used as blob background is taken from <a href="https://www.unsplash.com/" title="Unsplash.com" target="_blank" rel="noopener noreferrer nofollow"><span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> Unsplash.com <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvgBlobGenerator