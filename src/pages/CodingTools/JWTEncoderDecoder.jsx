import { ExternalLink } from "lucide-react";
import jwtEncoderDecoder from "../../images/DetailPageImages/jwtEncoderDecoder.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import JWTTool from "../../components/JWTTool";

const JWTEncoderDecoder = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="JWT Encoder/Decoder" icon={jwtEncoderDecoder} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <JWTTool />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="jwt-encoder-decoder" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online JWT Encoder/Decoder?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    JWT Encoder/Decoder is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for encoding and decoding JWT (JSON Web Token)</span>. JWT is a standard for transferring JSON data securely by signing it with a key. You can use this tool as an <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">online JWT debugger</span>, so you can sign a JWT with a signing key or private key, verify a JWT with a signing key or public key, or just decode a JWT without verifying the signature.
                                </p>
                                <p>
                                    There are 9 algorithms available which are HS256, HS384, HS512, RS256, RS384, RS512, ES256, ES384 and ES512. HSxxx algorithms works with a single signing key as a string while RSxxx and ESxxx algorithms works with a public & private key pair. Private key is using in encoding while public key is used for decoding JWT. If there is one key that is used both for encoding and decoding JWT, it is called <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">symmetric algorithm</span>, if there is a public/private key pair, then it is called <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">asymmetric algorithm</span>.
                                </p>
                                <p>
                                    There are 3 parts of a JWT which are separated with dots. They are header, payload, and signature. Therefore, all JWT have a structure of "aaaaa.bbbbb.cccc". They are all in base64 format. Header and payload of the JWT can be seen by everyone after decoding. Signature is very important for securely transferring this data. When you send data from server to client and get it back, you verify your data with this signature.
                                </p>
                                <p>
                                    There are some predefined claims such as "iss" (issuer), "exp" (expiration time), "sub" (subject), "aud" (audience) that is stored in the payload of a JWT. Even if they are not mandatory, it is advised to use them for defining the data and data validity better. Meta data of the token is stored in the header section like what is the algorithm etc.
                                </p>
                                <p>
                                    For JWT decoding, you can either verify the signing key or not. Even if the signature is invalid, you will still see the payload and header of the JSON web token.
                                </p>
                                <p>
                                    If you are using HSxxx (symmetric) algorithms, for security reasons, it is advised to have 256 bit (32 characters), 384 bit (48 characters), 512 bit (64 characters) and longer signing keys for HS256, HS384 & HS512 respectively. Otherwise, your signing key may be cracked with brute force. Reference:<a href="https://auth0.com/blog/brute-forcing-hs256-is-possible-the-importance-of-using-strong-keys-to-sign-jwts/" title="strong keys with JWT" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> Importance of using strong keys with JWT <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/jwt-encoder-decoder/jwt-structure.jpg"
                                        alt="JWT Encoder Decoder"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    JWT Structure Before Decoding
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online JWT Encoder/Decoder?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can encode, decode, or debug a JWT by using these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">If you want to generate a JWT, fill input field with the payload. If you want to decode a JWT, fill input field with the JWT that you want to decode.</li>
                                <li className="pl-2 marker:text-gray-800">Make your configuration for encoding/decoding and fill signing keys if needed.</li>
                                <li className="pl-2 marker:text-gray-800">When all configuration is completed, click the button "Encode" or "Decode" according to your needs. If all required fields are filled and there is no problem about parsing the input, you will get your result from the output field.</li>
                            </ol>

                            <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                Security Note
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Information regarding any JWT that is generated or decoded in this tool including signing keys, public and private key pairs are <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">used only in your browser</span>. This <span className="border-b border-[#0c0c0c]">data is not transferred</span> to any server. However, for security purposes, it is advised to protect your signing keys and public/private key pairs from any 3rd party tool including 10015.io (even if it is a client-side tool) if this information is crucial for you application. This tool is designed as a JWT debugger to demonstrate how JWT works.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JWTEncoderDecoder