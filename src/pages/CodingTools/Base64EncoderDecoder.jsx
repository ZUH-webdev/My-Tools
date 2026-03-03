import base64EncoderDecoder from "../../images/DetailPageImages/base64EncoderDecoder.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import { EncodeDecodeTools } from "../../components/EncodeDecodeTools";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const Base64EncoderDecoder = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Base64 Encoder/Decoder" icon={base64EncoderDecoder} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <EncodeDecodeTools
                    inputLabel="Text"
                    outputLabel="Base64"
                    encodeFn={(str) => btoa(str)}
                    decodeFn={(str) => atob(str)}
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="base64-encoder-decoder" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Base64 Encoder/Decoder?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Base64 Encoder/Decoder is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for encoding string to Base64 or decoding Base64 to string</span>. Base64 is a binary-to-text encoding scheme. You can store data as string with Base64. It's very popular in developer community since you can store data of an image (JPG, PNG or even SVG) as string with Base64. Base64 is also popular since it includes very common 64 characters which are supported almost everywhere. These 64 characters are [A-Z], [a-z], [0-9], "+", "/" and "=". Each Base64 character represents 6-bit binary data. All combinations of 1's and 0's in 6-digit is 2^6 which is 64. There is a character for each combination.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/base64-encoder-decoder/base64-index-table.png"
                                        alt="Base64 Encoder/Decoder"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Base64 Index Table
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Base64 Encoder/Decoder?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can encode or decode your text by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">First, paste your string in the input field. It may be standard text or Base64.</li>
                                <li className="pl-2 marker:text-gray-800">There are 2 buttons for conversion. One is "Encode" and other is "Decode". If you have a standard text and you want to convert it to Base64, click "Encode" button. If you have a string in Base64 format and want to convert it to standard text, click decode button.</li>
                                <li className='pl-2 marker:text-gray-800'>If you paste an encoded Base64 data and you want to decode it, you may take a warning if the data is somehow malformed or having missing parts.</li>
                                <li className='pl-2 marker:text-gray-800'>You can select the output directly from "Output" area or use "Copy" button to copy the output into your clipboard.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base64EncoderDecoder