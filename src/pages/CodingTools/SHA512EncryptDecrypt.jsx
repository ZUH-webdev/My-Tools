import sha512EncryptDecrypt from "../../images/DetailPageImages/sha512EncryptDecrypt.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import DecryptionInfoMessage from "../../components/DecryptionInfoMessage";
import { EncryptDecryptTools } from "../../components/EncryptDecryptTools";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const SHA512EncryptDecrypt = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="SHA512 Encrypt/Decrypt" icon={sha512EncryptDecrypt} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <EncryptDecryptTools
                    algorithm="SHA512"
                />

                <DecryptionInfoMessage toolName="SHA512" />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="sha512-encrypt-decrypt" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online SHA512 Encrypt/Decrypt?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    SHA512 Encrypt/Decrypt is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating SHA512 hashes from strings and decrypting SHA512 hashes to strings</span>. In other words, this tool is a combination of <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SHA512 hash generator</span> and <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SHA512 decrypter</span>. SHA512 is a hashing function that creates a unique 512-bit hash with 128 characters long for every string. After MD5 started to lose its popularity because of its vulnerabilities, people started to look for new hashing functions as a replacement. SHA256 and SHA512 was founded for this purpose which have more strength for collusions than MD5 and have less vulnerabilities.
                                </p>
                                <p>
                                    People are asking whether to use SHA256 or SHA512, which one is safer and what is the main difference between SHA256 and SHA512. The main difference is SHA256 generates a 64 characters long output while SHA512 generates 128. That means SHA512 is more collusion resistant. In terms of security, they are identical because both are open to dictionary attacks and brute force attacks. If you want to hash your passwords in your databases, think twice since short length strings which converted to SHA256 or SHA512 can be easily cracked/decrypted with modern computers as this tool offers. In terms of storage, people tend to use SHA256 because it takes up half space in the database.
                                </p>
                                <p>
                                    Here is a representation of how <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SHA512 encoder decoder</span> works; there are two different strings with different character lengths, both produces unique SHA512 hashes with 128 characters long.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/sha512-encrypt-decrypt/sha512-encrypt-decrypt.jpg"
                                        alt="SHA512 Encrypt Decrypt"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    SHA512 Encrypt and Decrypt
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Encryption and decryption process is same for SHA256 and SHA512. It can be decrypted either by a dictionary attack or a brute force attack. This tool uses a list which includes most common 100k passwords for the first method. If this does not work, you can skip to the second method which is more time consuming.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online SHA512 Encrypt/Decrypt?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can encode or decode your string into/from SHA512 by following the guide below:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Generating a SHA512 has is straightforward. Just enter your text into input area and press "Encrypt" button.</li>
                                <li className="pl-2 marker:text-gray-800">For SHA512 decryption, best practice is to use default settings first which looks for a common password dictionary. If there is no result, you can widen your trials by extending character sets which is available in "Decryption Settings".</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SHA512EncryptDecrypt