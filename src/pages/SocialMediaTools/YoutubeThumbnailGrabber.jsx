import { ExternalLink } from "lucide-react";
import youtubeThumbnailGrabber from "../../images/DetailPageImages/youtubeThumbnailGrabber.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import ThumbnailGrabber from "../../components/ThumbnailGrabber";
import { FaYoutube } from "react-icons/fa";

const YoutubeThumbnailGrabber = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Youtube Thumbnail Grabber" icon={youtubeThumbnailGrabber} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ThumbnailGrabber 
                tool="youtube"
                label="YouTube URL"
                icon={<FaYoutube size={60} className="text-red-500" />}
                />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="youtube-thumbnail-grabber" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-2 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online YouTube Thumbnail Grabber?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    YouTube Thumbnail Grabber is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for grabbing thumbnail images of YouTube videos</span> for different resolutions. It works as <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">YouTube thumbnail downloader</span>. <a href="https://youtube.com/" title="youtube.com" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> YouTube <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> is the most popular video site in the world. Thousands of videos are uploading on YouTube each day and "Thumbnail" is a representative image used to show users what a YouTube video is about. When you navigate through YouTube, you will see thumbnail images of videos everywhere.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="flex items-center justify-center p-2 bg-white w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/youtube-thumbnail-grabber/youtube-thumbnails.jpg"
                                        alt="Youtube Thumbnail Grabber"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    How YouTube Thumbnail Images Looks Like
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    When you upload a video on YouTube, you can choose your custom thumbnail image, or it will create it from a scene in the video. After you set the thumbnail image, YouTube automatically creates thumbnail images in different resolutions. Here is a list that shows generated images.
                                </p>
                                <ul className="p-4 space-y-6 list-disc text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900">Maximum Resolution:</span> 1280x720px - Best quality thumbnail
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Standard Definition:</span> 640x480px
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">High Quality:</span>  480x360px
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Medium Quality:</span> 320x180px
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">List Thumbnail:</span>  480x360px
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900">Mini Thumbnails: </span> 120x90px - Scenes within video
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Online YouTube Thumbnail Grabber supports different YouTube URL formats. It may be standard, shortened or embed URL, or a URL with parameters, it will still work. Here is a list shows some of the valid YouTube URL's.
                                </p>
                                <ul className="p-4 space-y-6 list-disc text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        https://www.youtube.com/watch?v=[youtube_id]
                                    </li>
                                    <li>
                                        http://www.youtube.com/watch?v=[youtube_id]&feature=feedrec_grec_index
                                    </li>
                                    <li>
                                        https://www.youtube.com/watch?feature=player_embedded&v=[youtube_id]
                                    </li>
                                    <li>
                                        https://www.youtube.com/watch?v=[youtube_id]&list=[youtube_list_id]
                                    </li>
                                    <li>
                                        https://youtu.be/[youtube_id]
                                    </li>
                                    <li>
                                        https://youtu.be/[youtube_id]?t=10
                                    </li>
                                    <li>
                                        https://www.youtube.com/embed/[youtube_id]
                                    </li>
                                </ul>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online YouTube Thumbnail Grabber?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can extract YouTube thumbnails by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter the URL of the YouTube video you want to get the thumbnails.</li>
                                <li className="pl-2 marker:text-gray-800">It automatically grabs the thumbnails right away if the URL belongs to a valid YouTube video. If not, you will see a warning.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YoutubeThumbnailGrabber