import twitterAdRevenueGenerator from "../../images/DetailPageImages/twitterAdRevenueGenerator.svg"
import AdRevenueGenerator from "../../components/AdRevenueGenerator"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import CommentsSection from "../../components/CommentsSection"
import SimilarTools from "../../components/SimilarTools"
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"

const TwitterAdRevenueGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Twitter Ad Revenue Generator" icon={twitterAdRevenueGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <AdRevenueGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="twitter-ad-revenue-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Twitter Ad Revenue Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Twitter Ad Revenue Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating fake Twitter ad revenue notification screenshots</span> for sharing with your Twitter audience and shocking your community. After Elon Musk acquired Twitter, he re-branded it as "X" and he has added Ad Revenue Sharing feature to the platform. This tool allows you to generate <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">fake X ad revenue notification screenshots</span> to make fun of your followers.
                                </p>
                                <p>
                                    "X" a.k.a. Twitter, one of the most popular social media platforms, has a feature called "Twitter Ad Revenue" which allows users to earn money by tweeting. This tool allows you to generate fake Twitter ad revenue notification screenshots to make fun of your friends.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="flex items-center justify-center p-2 bg-white w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/twitter-ad-revenue-generator/twitter-ad-revenue-screenshot.jpg"
                                        alt="Twitter Ad Revenue Generator"
                                        className="w-60 h-120"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    A generated Twitter "X" ad revenue notification screenshot
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Twitter Ad Revenue Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">X Ad Revenue Generator is very easy to use. You can generate your own Twitter ad revenue screenshot in 3 simple steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Select a wallpaper from "Ready-To-Use Wallpaper" section or upload your own wallpaper from "Custom Wallpaper" section.</li>
                                <li className="pl-2 marker:text-gray-800">Enter the details about Carrier (Telecommunication Company) and Revenue.</li>
                                <li className="pl-2 marker:text-gray-800">Export X ad revenue screenshot by clicking "Export" button. You can either download the screenshot or copy the image to your clipboard.</li>
                            </ol>

                            {/* Section 4: Usage Policy */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">X Ad Revenue Generator Usage Policy</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">10015.io is not responsible for the generated images by users. By using Twitter Ad Revenue Generator by 10015.io, you agree to use our tool lawfully and ethically, and in accordance with these rules:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">You do not use generated images to spread false information that will affect human life in a negative way.</li>
                                <li className="pl-2 marker:text-gray-800">You do not present generated images as fact. As mentioned above, main aim of the tool is to make jokes with your followers, not just misleading them.</li>
                                <li className="pl-2 marker:text-gray-800">You make it obvious to any viewers that generated screenshots are not original/genuine.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TwitterAdRevenueGenerator