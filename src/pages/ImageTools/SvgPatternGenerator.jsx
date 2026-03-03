import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader'
import svgPatternGenerator from "../../images/DetailPageImages/svgPatternGenerator.svg";
import CommentsSection from '../../components/CommentsSection';
import BuyMeACoffee from '../../components/BuyMeACoffee';
import SimilarTools from '../../components/SimilarTools';
import BrowserExtensionBanner from '../../components/BrowserExtensionBanner';
import SvgPattern from '../../components/SvgPattern';

const SvgPatternGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="SVG Pattern Generator" icon={svgPatternGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <SvgPattern />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="svg-pattern-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online SVG Pattern Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    SVG Pattern Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating SVG background patterns</span> and exporting it as SVG code, SVG file or PNG file. There are many settings for helping you to construct the desired background. Also, a wide range of SVG shapes is listing for forming the background pattern.
                                </p>
                                <p>
                                    Every aspect of the unit shapes is editable. You can manipulate the size, space between units, rotation, obliqueness, and opacity of the pattern. This will allow you to create infinite number of background patterns when you think it about with pattern types and color options. The limit is your creativity. <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">SVG background pattern generator</span> will help you to achieve the best result for you.
                                </p>
                                <p>
                                    These SVG background patterns can be used for any purpose. They can be injected into web codes of a site directly or as a .svg file. In addition to SVG export option, these patterns may be exported as image. So, they can be used for any purpose. Background templates can be used as a size reference if you want to make designs for social media assets like Facebook cover photo or Twitter cover photo. There are templates for Facebook, Instagram, Twitter, LinkedIn & YouTube. If you want to use your own custom size, you can set it by selecting "Custom" option from the list.
                                </p>
                                <p>You can export your patterns as repetitive backgrounds. This can be helpful for optimization and page load performance on websites. But don't forget, rotation and skew angle parameters will be ignored for this option, that means you have to set it on your own in your project if needed.</p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/svg-pattern-generator/svg-background-pattern.jpg"
                                        alt="SVG Patten Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    SVG Pattern Background created with Chain Icon
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online SVG Pattern Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">SVG background patterns can be created by following the guide:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Select your pattern type. Each svg icon has its own shape and characteristic. There is a wide list which may fit your desired shape.</li>
                                <li className="pl-2">Select pattern color and background color from color picker. If you don't have fixed colors and need some inspiration, you can create random colors by "Shuffle Colors" button.</li>
                                <li className='pl-2'>Set pattern parameters which includes pattern size and spacing, canvas rotation, skew angle, and pattern opacity.</li>
                                <li className="pl-2">After construction desired background pattern, you can export it via 3 methods. You can either copy SVG code to your clipboard or download as SVG or PNG file.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvgPatternGenerator