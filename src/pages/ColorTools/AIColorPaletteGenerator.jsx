import aiColorPaletteGenerator from "../../images/DetailPageImages/aiColorPaletteGenerator.svg"
import AIColorGenerator from "../../components/AIColorGenerator"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import CommentsSection from "../../components/CommentsSection"
import SimilarTools from "../../components/SimilarTools"
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"

const AIColorPaletteGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="AI Color Palette Generator" icon={aiColorPaletteGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <AIColorGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="ai-color-palette-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online AI Color Palette Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    AI Color Palette Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating color palettes with the help of AI</span> (Artificial Intelligence). It is revolutionizing the way designers choose and implement color schemes by leveraging advanced artificial intelligence to generate dynamic, customized color palettes. Designed both for designers and developers, this tool simplifies the design and coding process by providing intuitive and precise color recommendations based on user-inputted prompts.
                                </p>
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 mt-4 font-space-grotesk">
                                AI Colors: How does it work?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    The interface is straightforward: users begin by entering a descriptive prompt that outlines the desired concept in addition to select a theme: light or dark. This could range from "serene and cool beach vibes" to "bold and energetic startup branding." Once the prompt is submitted, AI algorithms analyze the input against current design trends and color theory, delivering a palette that includes four primary components:
                                </p>
                                <ol className="p-4 space-y-6 list-decimal list-inside text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900 marker:text-gray-800 border-b-2 border-[#b9b8ff]">Primary Color:</span> The dominant, most versatile color in the palette.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900 marker:text-gray-800 border-b-2 border-[#b9b8ff]">Accent Color:</span> A contrasting hue designed to make key elements pop.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900 marker:text-gray-800 border-b-2 border-[#b9b8ff]">Background Color:</span> A subtle shade that complements the primary and accent colors for balanced visual impact.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900 marker:text-gray-800 border-b-2 border-[#b9b8ff]">Text Color:</span> Carefully chosen for readability and aesthetic harmony with the background color.
                                    </li>
                                </ol>
                                <p>
                                    Alongside these main colors, the tool generates 2 more shades of each, offering designers a full spectrum to enhance their creative projects.
                                </p>
                                <p>
                                    This tool not only assists in color selection but also streamlines workflow with practical export options:
                                </p>
                                <ol className="p-4 space-y-6 list-decimal list-inside text-gray-700 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900 marker:text-gray-800 border-b-2 border-[#b9b8ff]">CSS Variables: </span> For web designers, this tool offers the ability to export the palette as CSS variables, making it easy to incorporate the colors directly into website designs and ensuring consistency across all web elements.
                                    </li>
                                    <li>
                                        <span className="font-bold text-gray-900 marker:text-gray-800 border-b-2 border-[#b9b8ff]">Free Text: </span> A basic list of the color codes in hexadecimal format, which can be copied and pasted into design software for further customization.
                                    </li>
                                </ol>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/ai-color-palette-generator/ai-color-palette-generator.jpg"
                                        alt="AI Color Palette Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Color Palette Generated by AI
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online AI Color Palette Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For generating a custom color spectrum, follow these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Enter the prompt in the text field. This could be a word, phrase, or sentence that encapsulates the desired color scheme.</li>
                                <li className="pl-2 marker:text-gray-800">Select the theme: light or dark.</li>
                                <li className="pl-2 marker:text-gray-800">Click on the "Generate" button to receive the color palette.</li>
                                <li className="pl-2 marker:text-gray-800">Preview the generated colors on a basic design by clicking "Preview on Design" button and adjust the prompt or theme as needed.</li>
                                <li className="pl-2 marker:text-gray-800">To export the colors, choose between CSS variables or free text.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AIColorPaletteGenerator