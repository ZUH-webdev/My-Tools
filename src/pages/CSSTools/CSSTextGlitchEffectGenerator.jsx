import cssTextGlitchEffectGenerator from "../../images/DetailPageImages/cssTextGlitchEffectGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import TextGlitchEffectGenerator from "../../components/TextGlitchEffectGenerator";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const CSSTextGlitchEffectGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Text Glitch Effect Generator" icon={cssTextGlitchEffectGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <TextGlitchEffectGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-text-glitch-effect-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Text Glitch Effect Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Text Glitch Effect Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating pure CSS text glitch effect</span>. Glitched text is a great way to add some visual interest to your website. They can be used to highlight important text or to add some attractiveness to a boring paragraph of text. CSS glitch animations works mainly by distorting the text by manipulating the color, position, or shape of the text.
                                </p>
                                <p>
                                    CSS text glitch effects can be used in hero sections of the websites or blogs to grab the attention of the visitors. Font size of the texts must be more than ~60px to get a good glitch effect. Otherwise, it may be hard to distinguish the glitched text from the original text.
                                </p>
                                <p>
                                    By using this tool, you can get different types of glitch effects such as color, noise, or transformation glitch. You can also customize the effect by changing the background color, text color, glitch color, font size, etc. In general, the effect looks better in dark backgrounds with white text color, but there is no limitation, so you can set all the properties according to your needs. There is no need to use JavaScript or any other library to make the effect work. It is generated using pure CSS animations. Here, you can see how the effect looks like.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-text-glitch-effect-generator/css-text-glitch-effect.png"
                                        alt="CSS Text Glitch Effect Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    CSS Text Glitch Effect
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Mostly, glitch effects are created by cloning the text multiple times and animate the clones by using transform or clip-path properties in such a way that the original one looks distorted. As the text is animated, it draws the attention of the visitors of the page. If there is a specific word or phrase you want to emphasize, you can use these CSS styles to highlight it.
                                </p>
                                <p>
                                    If you are working on a creative project or working as a creative front-end developer, these types of CSS effects are handy and easy to implement to make your project stand out. As there is no need to use any JavaScript code or library, it takes only a few minutes to implement it in your own project.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Text Glitch Effect Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate CSS code for text glitch effect by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Choose the type of glitch effect from the dropdown list.</li>
                                <li className="pl-2">Enter the text for which you want to generate effect.</li>
                                <li className='pl-2'>Change the font size of the text if needed.</li>
                                <li className="pl-2">Each effect has its own set of options. You can change the background color, text color, glitch color, etc. as per your requirement. The output of the glitch effect will be updated in real time in the preview section.</li>
                                <li className="pl-2">Once you are done with the settings, you can copy the HTML & CSS code and use it on your own website or blog by pasting the HTML and CSS code.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSTextGlitchEffectGenerator