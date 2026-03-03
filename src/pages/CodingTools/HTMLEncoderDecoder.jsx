import htmlEncoderDecoder from "../../images/DetailPageImages/htmlEncoderDecoder.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import { EncodeDecodeTools } from "../../components/EncodeDecodeTools";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const HTMLEncoderDecoder = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="HTML Encoder/Decoder" icon={htmlEncoderDecoder} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <EncodeDecodeTools
                    inputLabel="HTML"
                    outputLabel="Encoded HTML"
                    encodeFn={(str) => str.replace(/[&<>"']/g, c => `&#x${c.charCodeAt(0).toString(16).toUpperCase()};`)}
                    decodeFn={(str) => new DOMParser().parseFromString(str, "text/html").documentElement.textContent}
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="html-encoder-decoder" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online HTML Encoder/Decoder?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    HTML Encoder/Decoder is a free online tool for encoding and decoding HTML entities. If you want to store or use HTML entities and don't want to get in trouble in any way, you should encode them. In HTML encode, {"<"}, {">"}, ", ', &, ` and unprintable ASCII characters are converted into character codes.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/html-encoder-decoder/html-encode-decode.png"
                                        alt="HTML Encoder/Decoder"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How characters encoded and decoded in HTML entities
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    As shown in the table, characters converted into character codes for escaping. It prevents the text or string to process as an HTML entity. For example, if you have a div with text in it. This HTML will be encoded like this.
                                </p>
                                <p>
                                    Raw HTML: <div>Text</div>
                                </p>
                                <p>
                                    Encoded: &#x3C;div&#x3E;Text&#x3C;/div&#x3E;
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online HTML Encoder/Decoder?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can encode and decode HTML entities by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter the text you want to encode or decode.</li>
                                <li className="pl-2 marker:text-gray-800">Click the buttons "Encode" or "Decode" to convert your HTML entity or Encoded string.</li>
                                <li className='pl-2 marker:text-gray-800'>You can copy the encoded or decoded text by manually or by using the "Copy" button. If you want to reset all inputs and outputs and start from scratch, use "Reset" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HTMLEncoderDecoder