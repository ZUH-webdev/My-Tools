import { ExternalLink } from "lucide-react";
import openGraphMetaGenerator from "../../images/DetailPageImages/openGraphMetaGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import OpenGraphMeta from "../../components/OpenGraphMeta";

const OpenGraphMetaGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Open Meta Graph Generator" icon={openGraphMetaGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <OpenGraphMeta />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="open-graph-meta-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">
                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Open Graph Meta Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Open Graph Meta Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating Open Graph metadata</span> for websites. Open Graph Protocol (OPG) is a set of HTML meta tags for determining how a webpage will be previewed when sharing on external sites. Facebook and many other social media sites use these tags for shaping their previews for links.
                                </p>
                                <p>
                                    There are many different properties in Open Graph protocol. Some tags are required while some are optional. You should set title, type, URL and image for OG Meta since these 4 parameters are required. You can get detailed info from Open Graph Protocol official site<a href="https://ogp.me/" title="ogp.me" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> ogp.me <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>
                                </p>
                                <p>
                                    When you share a page from your website on Facebook or other social media sites, they show a preview for your link. It is a preview for this link. It is a basic card with a link showing information about the link. You can preview and debug your Open Graph metadata by using <a href="https://developers.facebook.com/tools/debug" title="Facebook Sharing Debugger" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> Facebook Sharing Debugger <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>. Here is a link preview showing how tags is used in shaping the preview.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="flex items-center justify-center p-2 bg-white w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/open-graph-meta-generator/open-graph-link-preview.png"
                                        alt="Open Meta Graph Generator"
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Link Preview of Open Graph Metadata
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Open Graph Meta Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate Open Graph metadata for your web page by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">There are 2 input areas. One is required metadata and other is optional. Required metadata fields (title, type, URL and image) must be filled for a valid Open Graph tag list. You may also add optional metadata if your page is compatible with this tag.</li>
                                <li className="pl-2 marker:text-gray-800">Click the button "Generate" after entering the information about your webpage.</li>
                                <li className="pl-2 marker:text-gray-800">Open Graph meta tags will be shown on output field. Simply copy this code and paste in between the "head" tags in your webpage.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenGraphMetaGenerator