import tweetGenerator from "../../images/DetailPageImages/tweetGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import TweetGeneratorTool from "../../components/TweetGeneratorTool";

const TweetGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Tweet Generator" icon={tweetGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <TweetGeneratorTool />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="tweet-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Tweet Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Tweet Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating tweets</span> for making jokes to your friends, colleagues or community. It works like a Tweet maker. Twitter is one of the biggest social networks. Even it is not possible to make sure if the information given is 100% true or not as all other internet sources, people are getting information by following accounts of other people, communities, organizations.
                                </p>
                                <p>
                                    You can make fun with your friends by generating real looking tweets online and share the generated tweet images with your friends. Don't forget that main intention of this tool is just to entertain and make jokes to people, nothing more. So, checkout the usage policy below if you have any questions on your mind about usage details.
                                </p>
                                <p>
                                    If you need online fake Tweet Generator to make fun of people, this tool will make most of the work for you. For now, basic tweet capabilities are available for keeping things simple. If users need more complex features like link sharing, tweet sharing, tweet flood, liked or retweeted tweet, theming, they will be added soon.
                                </p>
                                <p>
                                    For tweet images, Twitter has a special algorithm to decide which part of the image is worth showing in the tweet body. It detects faces and texts in images and use these parts in previews. This tool has not such mechanism, it just centers the image. If you want to show specific part of an image which is not in the center of the image, you can use image cropper.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="flex items-center justify-center p-2 bg-white w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/tweet-generator/generated-tweet.jpg"
                                        alt="Tweet Generator"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    A generated tweet to joke your friends about aliens
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Tweet Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate tweet images by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Upload the images that will be used in tweet. You can upload avatar and tweet images up to 4. Both are optional.</li>
                                <li className="pl-2 marker:text-gray-800">Choose your theme. You can choose between light, dim and dark. This will change the color palette of the tweet.</li>
                                <li className="pl-2 marker:text-gray-800">Enter required fields like name, username, tweet date, tweet content etc. Also, you can set tweet statistics that shows reply, retweet and like count.</li>
                                <li className="pl-2 marker:text-gray-800">When you set all the fields and you are okay with the result showed in preview field, you can export the tweet according to your needs. You can download it as an image by using "Download Tweet" option or copy the Tweet image into your clipboard and paste it directly into your messaging channels.</li>
                            </ol>

                            {/* Section 4: Usage Policy */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">Usage Policy</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">10015.io is not responsible for the generated images by users. By using Tweet Generator by 10015.io, you agree to use our tool lawfully and ethically, and in accordance with these rules:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">You do not use generated images to create content that has ill intent including but not limited to harass, attack, incite violence, slander, threaten, disparage, intimidate, or otherwise hurt other people or entities.</li>
                                <li className="pl-2 marker:text-gray-800">You do not use generated images to spread false information that will affect human life in a negative way.</li>
                                <li className="pl-2 marker:text-gray-800">You do not present generated images as fact. As described, main intent is having good time by making fun of people, not just misleading them.</li>
                                <li className="pl-2 marker:text-gray-800">You make it obvious to any viewers that generated images are not original/genuine.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TweetGenerator