import { ExternalLink } from "lucide-react"
import cssBackgroundPatternGenerator from "../../images/DetailPageImages/cssBackgroundPatternGenerator.svg"
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner"
import BuyMeACoffee from "../../components/BuyMeACoffee"
import CommentsSection from "../../components/CommentsSection"
import SimilarTools from "../../components/SimilarTools"
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader"
import PatternGenerator from "../../components/PatternGenerator"

const CSSBackgroundPatternGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Background Pattern Generator" icon={cssBackgroundPatternGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <PatternGenerator />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-background-pattern-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Background Pattern Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Background Pattern Generator is a <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">free online tool for creating CSS-only background patterns</span>. Developers mostly use images for background patterns, but if you need more performant ways to add patterns to your web page, CSS-only background patterns are the best way to achieve this since image files decreases loading performance of web pages.
                                </p>
                                <p>
                                    CSS background patterns can add depth, texture, and interest to your website's design. Whether you want to create a subtle, cohesive look or make a bold statement, there's a background pattern for every style.
                                </p>
                                <p>
                                    There are several types of CSS background patterns to choose from, including tiling patterns and seamless patterns. Tiling patterns repeat in a grid-like fashion to fill the entire background, while seamless patterns create the illusion of a continuous design that has no visible edges when tiled. Both types of patterns can range from simple, geometric shapes to more complex, organic designs.
                                </p>
                                <p>
                                    CSS gradients can also be used as background patterns, providing a smooth transition between two or more colors. They can be linear, radial, or conic and can be customized with a variety of options, including direction, angle, and stops.
                                </p>
                                <p>
                                    When using background patterns, it's important to consider how they will fit into your overall design scheme. Choose patterns that complement your branding, color scheme, and style, and avoid using too many patterns or overly complex patterns that can be overwhelming or distract from your content.
                                </p>
                                <p>
                                    With a little creativity and some basic CSS knowledge, you can add some visually striking elements to your website with CSS background patterns. Experiment with different patterns and see what works best for your design.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-background-pattern-generator/css-background-patterns.jpg"
                                        alt="CSS Background Pattern Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Different CSS Background Pattern Types Generated by the Tool
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold pb-4">
                                <p>
                                    One common use for CSS patterns is as a background for a website or section of a page. By applying a repeating pattern as a background, it is possible to add depth and interest to an otherwise plain design. Patterns can also be used to highlight certain sections of a page or to draw the eye to a particular element.
                                </p>
                                <p>
                                    In addition to using patterns as backgrounds, they can also be applied to other elements on a page, such as buttons, forms, and menus. This can help to give these elements a more polished and cohesive look, while also adding visual interest.
                                </p>
                                <p>
                                    CSS patterns can be used to add texture and depth to flat designs, or to add a touch of whimsy to more formal layouts. They can be used to create a cohesive look across a website, or to add contrast and interest to a particular section of a page.
                                </p>
                                <p>
                                    Overall, CSS patterns are a versatile design tool that can be used in a variety of situations to add visual interest and style to a website. Whether you are looking to add depth and texture to a flat design, or to add a touch of whimsy to a more formal layout, there is a CSS pattern that can help you achieve your desired look and feel.
                                </p>
                                <p>
                                    Different types of CSS background patterns are available in the tool. Both 2D and 3D CSS patterns are listed. 2D patterns are <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">checks, diamonds, grid, dot, cross dots, vertical lines, horizontal lines, diagonal lines, vertical stripes, horizontal stripes, diagonal stripes, crosses, pluses, equilateral triangles, right triangles, mixed triangles, pies, nested squares, snakes, bars, long bars, post it, mountains, hexagons, net, steps, tablecloth, hamper, knitting, wind rose, fences, polka dot, broken dots, connected nodes, connected squares, overlaying circles, hypnotic, honeycomb, carpet, hearts, stars, ninja blades, peppers, lemons, candy stripes, spaghetti, water drop, waves, and zigzag</span>. There are 64 patterns in total and some of them are 3D patterns which are <span className="font-bold text-gray-800 border-b-2 border-[#b9b8ff]">zigzag, adjacent cubes, discrete cubes, nested cubes, buildings, rooms, tubes, stairs and pyramids</span>. You can choose any of them according to your needs in your design, set the sizes and implement directly into your code by copying and pasting the CSS code into your stylesheet. You can use these patterns on your hero sections, separators, fonts, or used coupled with images to give layer effects.
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Background Pattern Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">CSS patterns can be created easily by following the guide below:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">First, select pattern type from the list. Each pattern has a mini preview in the list which gives you opinion about the pattern.</li>
                                <li className="pl-2">Select the desired colors that you want to use in your project. There are two of them, one is for the color of pattern shapes and other is for background.</li>
                                <li className='pl-2'>Set size of the pattern units in pixel. All patterns are formed by using repetitive backgrounds. You can set the unit width & height of these units.</li>
                                <li className='pl-2'>Some patterns have extra settings like dot size or line width. These values may be changed by using related settings.</li>
                                <li className="pl-2">After setting all parameters and get the desired background pattern on previews, copy the CSS code, and paste it in your codebase.</li>
                            </ol>
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-2xl text-gray-900 mb-2 font-space-grotesk">Credits</h4>
                                <ul className="list-disc pl-8">
                                    <li className="text-md font-semibold text-gray-700">
                                        This tool is inspired from the project <a href="https://github.com/bansal-io/pattern.css" title="pattern.css" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> pattern.css <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> developed by <a href="https://bansal.io/" title="jiten bansal" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> Jiten Bansal <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>.
                                    </li>
                                    <li className="text-md font-semibold text-gray-700">
                                        <a href="https://css-pattern.com/" title="css-pattern.com" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> css-pattern.com <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> developed by Temani Afif is used as a source for some patterns.
                                    </li>
                                    <li className="text-md font-semibold text-gray-700">
                                        "Discrete Cubes" pattern is inspired from <a href="https://codepen.io/thebabydino/pen/KKajmNX" title="discrete cubes" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> the pen on CodePen.io <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> created by <a href="https://x.com/anatudor" title="Ana Tudor" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> Ana Tudor <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CSSBackgroundPatternGenerator