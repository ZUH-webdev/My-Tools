import imageToBase64Converter from "../../images/DetailPageImages/imageToBase64Converter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import ImageToBase64 from "../../components/ImageToBase64";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const ImageToBase64Converter = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Image To Base64 Converter" icon={imageToBase64Converter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

               <ImageToBase64 />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="image-to-base64-converter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Image to Base64 Converter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Image to Base64 Converter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for converting images to base64 strings</span>. You can select different formats as output such as raw base64, data URI, HTML Image, CSS Background Image, Hyperlink, Downloadable Hyperlink, and HTML Favicon.
                                </p>
                                <p>
                                    Base64 is one of the most popular formats for storing any type of data as string such as images, videos or even texts. It makes it easier to store or transfer data between different applications as strings, so you don't need to worry about the format of the data. Base64 strings consist of 64 different characters which are uppercase Latin letters (26), lowercase Latin letters (26), numbers (10) and "+" and "/" symbols (2). The name of the algorithm comes from these 64 characters. Also, "=" may be used as padding. For encoding any type of images (JPG, PNG, SVG or GIF) as base64 strings, you can use the tool.
                                </p>
                                <p>
                                    Here, you can see how a 1px-to-1px black rectangle image in JPG format is converted to base64.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/image-to-base64-converter/image-to-base64-converter.jpg"
                                        alt="Image To Base64 Converter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How an image is converted to base64
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold mb-6">
                                <p>
                                    When you use this algorithm on browser, you generally need to use it as data URI where you need to define the MIME type just before the raw data. For example, if you want to show a JPEG image in your page, you need to use it as src="data:image/jpeg;base64,..." or if you want to form a downloadable link to a PNG image, you need to specify it as href="data:image/png;base64,...". If you somehow want to display it on your page as text, don't forget to check if the length of the string is not too long because some browsers have restrictions for the length of text.
                                </p>
                                <p>
                                    Base64 is also used for different purposes. For example, mail attachments are transferred with this format because of SMTP protocol restrictions. Main reason behind email attachment size limitations is this format since the length of the data becomes very large if the attachment size is too big.
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Image to Base64 Converter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">Follow these steps to convert your image to base64 string:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Drag your image into drop zone or select it from the file explorer.</li>
                                <li className="pl-2">It will be automatically converted to base64 string right after the upload finished. You can select the desired output format from the list according to your needs.</li>
                                <li className='pl-2'>Use "Copy Base64" button to copy the string to your clipboard. If it is too long to render on browser, you will see a warning in the output text area. But full base64 string will always be available if you use the button to copy the content.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ImageToBase64Converter