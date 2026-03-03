import { ExternalLink } from 'lucide-react';
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader';
import googleFontsPairFinder from "../../images/DetailPageImages/googleFontsPairFinder.svg";
import CommentsSection from '../../components/CommentsSection';
import BuyMeACoffee from '../../components/BuyMeACoffee';
import SimilarTools from '../../components/SimilarTools';
import BrowserExtensionBanner from '../../components/BrowserExtensionBanner';
import FontFinder from '../../components/FontFinder';

const GoogleFontsPairFinder = () => {

    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Google Fonts Pair Finder" icon={googleFontsPairFinder} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <FontFinder />
                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="google-fonts-pair-finder" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Google Fonts Pair Finder?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Google Fonts Pair Finder is a <span className="font-semibold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for finding font pairs from Google Fonts</span>. <a className="font-bold text-[#4a4dff] hover:text-[#3437fc] inline-flex items-center" href="https://fonts.google.com" title="Google Fonts" target="_blank" rel="noopener noreferrer nofollow">Google Fonts<span><ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> is one of the biggest free font libraries that serves more than a thousand fonts. Since the number of fonts is huge, sometimes it becomes a time-consuming process to find a good font pair to use on your designs and projects. Google Fonts Pair Finder is solving this problem by suggesting different font pairs randomly and giving you a change to preview this font pair for different content types like article, card, and profile.
                                </p>
                                <p>
                                    There are 5 font categories available which are Serif, Sans Serif, Display, Handwriting and Monospace. You can select categories which you want random suggestions by using the filter. Also, you can limit the number of top fonts that will be used to make you suggestions for font pairs. All filters are available both for heading and body font separately.
                                </p>
                                <p>
                                    If you are looking for <span className="font-bold border-b-2 text-gray-900 border-[#b9b8ff]">font suggestions for Google Fonts</span>, there are 3 shuffling options, one for heading font, one for body font and one for shuffling the pair at the same time. When you get random suggestions and decide to use one of them, you can get random suggestions for separately by shuffling only the other one and make it constant the one you decided.
                                </p>
                                <p>
                                    When you explore new fonts and searching for <span className="font-bold border-b-2 text-gray-900 border-[#b9b8ff]">font matches</span>, font weight will be set to 700 for heading and 400 for body if these are available. Otherwise, the closest weight will be set. Since each font has its own size characteristics, you can change font size and font weight from select menus to find a good size match.
                                </p>
                                <p>
                                    If you want to see more detailed information about a font family, click on "Details" and it will show available subsets, weights, if italic style is available and give information about the rank of the font on Google Fonts with respect to popularity. Also, a preview box is available to show you the preview of font for different sizes and weights.
                                </p>
                                <p>
                                    Here is a card preview for a random font pair suggestion.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/google-fonts-pair-finder/font-pair-suggestion-preview.jpg"
                                        alt="Google Fonts Pair Finder"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Font Pair Suggestion Preview for a Card (Poppins for heading + Nunito for body)
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Google Fonts Pair Finder?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can explore new fonts and find font pairs on Google Fonts by basically following these instructions:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Change heading and body font either manually from the font list or by using shuffle buttons.</li>
                                <li className="pl-2">You can set filters if you need only fonts from specific category or only top fonts.</li>
                                <li className='pl-2'>Font size and weight can be set manually if you need.</li>
                                <li className='pl-2'>After you finish font settings, you can preview the font pair result on different content types.</li>
                                <li className='pl-2'>If you make a final decision for a font pair, click on the "Get Font Pair" button and copy the codes to your clipboard either as a link or a CSS import and use in your projects right away.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleFontsPairFinder