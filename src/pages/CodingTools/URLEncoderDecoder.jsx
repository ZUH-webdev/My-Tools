import urlEncoderDecoder from "../../images/DetailPageImages/urlEncoderDecoder.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import { EncodeDecodeTools } from "../../components/EncodeDecodeTools";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const URLEncoderDecoder = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="URL Encoder/Decoder" icon={urlEncoderDecoder} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <EncodeDecodeTools
                    inputLabel="URL"
                    outputLabel="Encoded URL"
                    encodeFn={(str) => encodeURIComponent(str)}
                    decodeFn={(str) => decodeURIComponent(str)}
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="url-encoder-decoder" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online URL Encoder/Decoder?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    URL Encoder/Decoder is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for URL encoding and decoding</span>. When you want to escape certain reserved characters in URLs with escape sequences with 1,2 or 3 character lengths, you should encode them. In URL encode, characters like /, ?, +, =, space and comma are converted into character codes. Characters that does not convert are: [A-Za-z] [0-9] - _ . ! ~ * ' ( ). All characters other than that are converted. Here is a table that shows conversion of some characters.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/url-encoder-decoder/url-encode-decode.png"
                                        alt="URL Encoder/Decoder"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How characters encoded and decoded in URL
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    As seen in the table, characters converted into character codes in URLs for escaping. Some characters have semantic importance in URL's such as #, ?, and &. For example, # is used for navigation, ? and & are used for queries. So, if you have a query parameter like '...?search=xxxxx' includes these characters in the xxxxx part in your URL, these has to be escaped to prevent conflicts.
                                </p>
                                <p>
                                    Raw URL: https://google.com
                                </p>
                                <p>
                                    Encoded: https%3A%2F%2Fgoogle.com
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online URL Encoder/Decoder?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can encode and decode URL by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter the URL you want to encode or decode.</li>
                                <li className="pl-2 marker:text-gray-800">Click the buttons "Encode" or "Decode" according to your input.</li>
                                <li className='pl-2 marker:text-gray-800'>You can copy the encoded or decoded URL by manually or by using the "Copy" button. If you want to reset all inputs and outputs and start from scratch, use "Reset" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default URLEncoderDecoder