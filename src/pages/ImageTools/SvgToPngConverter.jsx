import svgToPngConverter from "../../images/DetailPageImages/svgToPngConverter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import SvgToPng from "../../components/SvgToPng";
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader'

const SvgToPngConverter = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="SVG to PNG Converter" icon={svgToPngConverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <SvgToPng />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="svg-to-png-converter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online SVG to PNG Converter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    SVG to PNG Converter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool converting SVG images to PNG format</span>. SVG stands for Scalable Vector Graphics and it's a vectorial image type which means you can scale up or down an SVG image without losing any quality. If you want to obtain sharp and quality designs, SVG files are a good way to reach your goal. Also, SVG images have lower file sizes since they are text based.
                                </p>
                                <p>
                                    Although SVG images are widely used for their advantages, sometimes you cannot use SVG files in some cases. For example, SVG images are not usable natively in mobile applications. Therefore, you need to convert SVG images into compatible formats to use them. Best solution is to convert SVG files into PNG, since it supports transparency.
                                </p>
                                <p>Here is an image in PNG format that shows how SVG vectors work.</p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/svg-to-png-converter/how-svg-works.png"
                                        alt="SVG to PNG Converter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    An image showing how SVG works in PNG format
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online SVG to PNG Converter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can convert an SVG image into PNG format by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Upload the SVG image you want to convert into PNG from file upload area either by dropping or browsing.</li>
                                <li className="pl-2">SVG image will be converted to PNG right after the upload is finished.</li>
                                <li className='pl-2'>Its size will be as same as the default SVG size. You can scale up or down the PNG without losing quality by setting the scale factor and click "Apply".</li>
                                <li className="pl-2">You can download the converted PNG image by using "Download".</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvgToPngConverter