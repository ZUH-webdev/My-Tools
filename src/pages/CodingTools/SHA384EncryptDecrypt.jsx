import sha384EncryptDecrypt from "../../images/DetailPageImages/sha384EncryptDecrypt.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import DecryptionInfoMessage from "../../components/DecryptionInfoMessage";
import { EncryptDecryptTools } from "../../components/EncryptDecryptTools";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const SHA384EncryptDecrypt = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="SHA384 Encrypt/Decrypt" icon={sha384EncryptDecrypt} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <EncryptDecryptTools
                    algorithm="SHA384"
                />

                <DecryptionInfoMessage toolName="SHA384" />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="sha384-encrypt-decrypt" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online SHA384 Encrypt/Decrypt?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    SHA384 Encrypt/Decrypt is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating SHA384 hashes from strings and decrypting SHA384 hashes to strings</span>. In other words, this tool is a combination of <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SHA384 hash generator</span> and <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SHA384 decrypter</span>. SHA384 is a hashing function that creates a unique 384-bit hash with 96 characters long for every string. SHA384 is the truncated version of SHA512, that means, it is almost same as SHA512, but main differences are its staring hash values from h0 to h7 are different and its length is 384 bits which corresponds to a 96-character long string.
                                </p>
                                <p>
                                    There may be a question about where to use SHA384. As mentioned before, it can be used as a replacement for SHA512 since it has similar collusion resistance and it is more advantageous in terms of storage size in databases as it is 32 (128-96) character shorter than SHA512. Other than that, it can be used as an identifier or as an indicator for checksums.
                                </p>
                                <p>
                                    Here, you can see how <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SHA384 encoder decoder</span> works; even the input lengths are different, it produces 96 character-long strings for both cases.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/sha384-encrypt-decrypt/sha384-encrypt-decrypt.jpg"
                                        alt="SHA384 Encrypt Decrypt"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    SHA384 Encrypt and Decrypt
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    While decrypting SHA384, same methods that used in descripting SHA1, SHA256 and SHA512 are used which is iteration over a list. This list may be predefined or can be created from combinations of a character set. Predefined lists work better and faster since they eliminate unnecessary possibilities, but if this does not give a result, you need to use brute force method which takes more time. Especially, if the character set is larger, it increases the total number of combinations. Therefore, you need to wait some time for the process to finish.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online SHA384 Encrypt/Decrypt?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For encoding / decoding a string into or from SHA384, please follow these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">If you want to create a SHA384 hash from a string, please click on the "Encrypt" button after filling the input field with the string.</li>
                                <li className="pl-2 marker:text-gray-800">If you want to decrypt a SHA384 hash, you can use the same method as encryption. But this time, it iterates over common passwords list as default. If decryption is not successful, you can try to use character set option by clicking "Decryption Settings" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SHA384EncryptDecrypt