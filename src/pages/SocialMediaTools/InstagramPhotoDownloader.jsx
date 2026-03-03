import { ExternalLink } from "lucide-react";
import instagramPhotoDownloader from "../../images/DetailPageImages/instagramPhotoDownloader.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import InstaPhotoDownloader from "../../components/InstaPhotoDownloader";

const InstagramPhotoDownloader = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Instagram Photo Downloader" icon={instagramPhotoDownloader} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <InstaPhotoDownloader />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="instagram-photo-downloader" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Instagram Photo Downloader?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Instagram Photo Downloader is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for downloading public Instagram post images</span>. It can be also described as <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Instagram image downloader</span>. <a href="https://instagram.com/" title="instagram.com" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> Instagram <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> is a well-known social media application and website where people share their visual medias such as images and videos. It is founded by Kevin Systrom and Mike Krieger in 2010 and acquired by Facebook just after two years later in 2012 after it became the market leader in its own field. It can be used for sharing your daily life, experiences, interests, and anything else with your friends and family as well as for following celebrities, popular people, companies and brands. Also, you can find many categorized media streams either on search section or with hashtags. Tremendous number of photos and videos are available on these sections under categories such as sports, fashion, animals, cities, wellness, finance, cars, luxury, cooking, comedy, movies & tv series, body building, magazine, news, music and so on. Even if people are arguing about whether it is a good app for the life of people or not, people like to use it and most people spend at least 1 hour a day on it.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="flex items-center justify-center p-2 bg-white w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/instagram-photo-downloader/instagram-photo-downloader.jpg"
                                        alt="Instagram Photo Downloader"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How to download Instagram photos
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    For any reason, you may want to download photos from Instagram. It may be either for achieving or for any personal reason. Sometimes, it may be not as easy as you think to get them, especially if the number of photos is more than one. For making it easier, you can use Instagram Photo Downloader. By this way, you can load images without any hassle with just one click. Even if the content is video, still you can grab the thumbnail of the video. If you perform this periodically, you will gain significant amount of time, so it is better to bookmark the page and access it easily. Instagram stories are not included as they are not public, and you have to be logged in to view them.
                                </p>
                                <p>
                                    When you upload a photo to Instagram, it automatically converts it to fit the format and reduce its size accordingly for performance reasons. There are restrictions before as the content must have 1:1 aspect ratio and 640x640px maximum size. But these limitations are not valid anymore. Mostly, they are 1080x1080px, but it may vary according to orientation. There are many filters and effects on the mobile app, so you can edit them before you share them on the network with your colleagues, friends, and followers. This feature of the app makes it unique among other social media applications and makes it the biggest one in the world with millions of users. In 2018, total number of users exceeded 1 billion. Therefore, there is a great demand for this free-to-use online tool. It is just designed to make it easier for people to get media items from the platform which is publicly available. Since it is open to everybody, you can get them even without a tool. It is just an instrument for saving your time. It is impossible to get the ones which are private, so user rights are respected.
                                </p>
                                <p>
                                    If you are an artist, designer or a person with an occupation related to visual arts, you can inspire from this platform and want to get the art to your local device like laptop or desktop to study on it. It is possible to extract them directly from the website by inspecting the source code if you know how to deal with HTML codes, but even if you have knowledge about coding, it takes time to inspect all the code and find the related URLs. So, it is better the use this tools for gaining time and minimize the effort. Once you use it, you will understand the difference between using the website and how much time you gain by using it. Otherwise, you have to perform all the steps manually each time you have a need to get the art.
                                </p>
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 mt-4 font-space-grotesk">
                                Usage of Instagram Image Downloader
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Images from private posts are not available for downloading. The post must be available for public display to extract it. All images gathered from the site belong to their owners. Do not use them as your own. Commercial use is strictly prohibited. As you use this page, it is assumed that you accept the terms of use and privacy policy. User is responsible for the results of misuse of the tool.
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Instagram Photo Downloader?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can download Instagram photos by following these easy steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">First, copy the URL of the Instagram post to your clipboard. If you use the web application, you can get it directly from the address bar. If you use the mobile application, click 3 dots icon on the top right of the post and click "Copy Link" from the menu shown to get the URL.</li>
                                <li className="pl-2 marker:text-gray-800">Fill the post URL in the input field and click "Get Photos" button. Please keep in mind that it will only work if the post is publicly available. There will be an icon in the top right corner of each image to indicate whether it is a native one or a thumbnail from a video. You can distinguish the content type from these two icons.</li>
                                <li className="pl-2 marker:text-gray-800">It will fetch the images and shows you as a list. You can download any of the images by clicking on the it.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstagramPhotoDownloader