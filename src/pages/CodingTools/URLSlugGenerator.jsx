import urlSlugGenerator from "../../images/DetailPageImages/urlSlugGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import SlugGenerator from "../../components/SlugGenerator";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const URLSlugGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="URL Slug Generator" icon={urlSlugGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <SlugGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="url-slug-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online URL Slug Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    URL Slug Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating URL slugs</span> from blog titles, article titles, product names, etc. or any types of strings. For <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">slugify texts or strings</span>, you can use this tool. Slugs are part of URLs, and their main function is to provide an unique address under a given domain, subdomain or subdirectory. URL (stands for Uniform Resource Locator) is a web address that is used to identify a web page. When a user enters an URL in a browser, the browser sends a request to the server to retrieve the web page. Slug is a component of this address, and it helps us to distinguish between different pages on the same domain or folder.
                                </p>
                                <p>
                                    You can see all components of a URL below in detail.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/url-slug-generator/url-protocol-domain-path-directory-slug.jpg"
                                        alt="URL Slug Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Components of an URL including protocol, domain, path, directory, slug
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Slugs are not only important for addressing web pages, but they are also used in SEO (Search Engine Optimization) to improve the search engine ranking. It is important to have a SEO-friendly slug for every page on your website. Before then, people are not aware of having a SEO-friendly slug, so they may use unique identifiers, dates or random numbers to address the page. New trend is to slugify the pages by using a title of the page. It also gives information about the page if the URL is used as a link.
                                </p>
                                <p>
                                    For achieving SEO-friendly URL slugs, the advised way is to use a combination of the following components:
                                </p>
                                <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-5">
                                    <li className="pl-2 marker:text-gray-800">Use lower case letters and numbers only.</li>
                                    <li className="pl-2 marker:text-gray-800">Use dash as a separator</li>
                                    <li className='pl-2 marker:text-gray-800'>Remove special characters</li>
                                </ol>
                                <p>
                                    There is also a concept called "<span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">stop words</span>". Stop words are the most common words in English or any other language which are not the main words but the ones that used like a connector between words. For example, the word "the" is a stop word in English. Some examples for stop words are: "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as", "at" ... and so on. Some people prefer the remove stop words in slugs since they are not the key elements of the slug and shorter slugs are better in terms of usage. But some are preferred to keep them in slugs. You can set it according to your preference.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online URL Slug Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For generating slug from a string, please follow these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter the text in the input field which you want to slugify.</li>
                                <li className="pl-2 marker:text-gray-800">Default settings is the most common settings. It may work for most users. But if you want to personalize it, you can enable or disable options for using underscore as separator instead of dash, use lower-case and upper-case letters, keep special characters and remove stop words and/or numbers.</li>
                                <li className='pl-2 marker:text-gray-800'>When you enter the title or text, it will slugify it automatically and show the result in the output field. There is no need to click anywhere for triggering the slugification. You can copy the slug to your clipboard by using the copy button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default URLSlugGenerator