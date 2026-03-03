import { ExternalLink } from "lucide-react";
import cssLoaderGenerator from "../../images/DetailPageImages/cssLoaderGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader'
import LoaderGenerator from "../../components/LoaderGenerator";



const CSSLoaderGenerator = () => {
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="CSS Loader Generator" icon={cssLoaderGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <LoaderGenerator />
                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="css-loader-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online CSS Loader Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    CSS Loader Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating CSS loaders</span>. This tool is one of the best CSS loader animation generators in the web that consists hundreds of loaders and spinners. It also works as <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS spinner generator</span> and <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS loading animation generator</span>. CSS loaders are used to indicate users that a page, section, or element is not ready yet and there is a process in progress behind like data fetching or any other operation that takes some time. For better UX (user experience), it is advised to show CSS loading animations to users in such cases to prevent confusion whether a page or component works properly or not.
                                </p>
                                <p>
                                    There are hundreds of CSS loaders from various categories such as CSS spinners, CSS progress loaders, dot, bar, shape, and colorful loaders, blobs, pulses, flipping and hypnotic loaders and many more. There are more than 250 CSS loading animations in total. All of them are customizable and no JavaScript is needed for making them work, in other words they are created with pure CSS. Sometimes, JS code may be used to animate, but it is better to use <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS-only loaders</span> for better performance. You can customize the color, size, and speed of them just by selecting the option from a list. There is no need to know how to edit CSS code for customizing them at all.
                                </p>
                                <p>
                                    Here you can see different types in the image below. Any shape from simple (like dot, bar, triangle, square, circle, line and so on) to complex (like wave, hearth, battery, watch and so on) can be used as a CSS loader if you are advanced enough to code it. Even their shapes and themes are different from each other, their purpose is the same.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/css-loader-generator/loaders-and-spinners.jpg"
                                        alt="CSS Loader Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Different Types of Loaders and Spinners
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold mb-8">
                                <p>
                                    Here are some shapes that you can find in the tool.
                                </p>
                                <ul className="p-4 space-y-6 list-disc text-gray-800 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Geometric shapes:</span> square, circle, triangle, dot, line, bar, arc, donut, arrow and so on.
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Signs and symbols:</span> hypnotic circle, signal sign, pie chart, bubbles, pills etc.
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Real life objects:</span> hearth, battery, watch, wave, hourglass, stopwatch, pendulum, star, coins etc.
                                    </li>
                                </ul>
                                <p>
                                    For people who are using design systems like Material UI and like the animation of this UI library, you can create your own <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">CSS-only Material UI loader</span> by using the one named "Material UI Spinner" that is listed under spinners category.
                                </p>
                                <p>
                                    You can use these loaders for different purposes. For example, if you send an AJAX request or REST API request to an endpoint for fetching a list of items, you can use a CSS loader to show a loading animation to the user while the request is being processed. You can also use to show a loading animation while a user is submitting a form, or you make an async validation for this form. You can directly use them inside the page or even inside a component like button. To sum up, when a user will spend his time one page for waiting something and you want to indicate that something is being processed, you can use them to make this time more enjoyable.
                                </p>
                                <p>
                                    While creating all these animations, different types of transitions are used such as translating, rotating, scaling, fading in and fading out by changing opacity, changing background color, flipping, cloning etc. These transitions are very useful for making the animations more interesting and more engaging and improve user experience while they are spending their time on the page or web application.
                                </p>
                                <p>
                                    As a note, some of them may not work properly in some old browsers because of incompatibility with CSS properties, because up-to-date CSS properties are used in the background colors, gradients, masks, clip paths and similar properties. But they will work on modern browsers for sure. All spinning and loading animations works as it should be in the latest version of Google Chrome and Chromium browsers. If you are concerned about browser compatibility, cross check the animations in Safari, Mozilla Firefox and Opera browsers as well. For checking compatibility, you can use caniuse.com or similar services. Also, there may be pixel rendering issues in some browsers because of scaling and resizing.
                                </p>
                            </div>

                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online CSS Loader Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For creating CSS loaders, you can use the following steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Select the desired category from the list. If you are not sure which one to choose, you can explore them one by one.</li>
                                <li className="pl-2">If you like the shape and the animation of any loader / spinner, just hover the card. There are 2 buttons you may select. One is for customizing and one is for getting the code. If you are okay with the shape, size, color, and speed of the it, you can just click the "Get CSS Code" button. If you want to customize them, you can click the "Customize" button.</li>
                                <li className='pl-2'>In customize section, you can set colors, size, and speed. After finishing the customization, you can click the "Get CSS Code" tab to get the code. In the code, HTML element and CSS styles are together just like a single HTML file. If you use separate CSS stylesheet, you can cut the CSS code between style tags and transfer that part to your stylesheet.</li>
                            </ol>

                            {/* Section 4: Credits */}
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-2xl text-gray-900 mb-2 font-space-grotesk">Credits</h4>
                                <ul className="list-disc pl-8">
                                    <li className="text-md font-semibold text-gray-700">
                                        <a href="https://github.com/Afif13/CSS-Collection" title="css collection" target="_blank" rel="noopener noreferrer nofollow"><span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> CSS Collection <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a>
                                        created by <a href="https://www.temani-afif.com/" title="temani afif" target="_blank" rel="noopener noreferrer nofollow"><span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> Temani Afif <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span> </a>
                                        is used as reference for many loaders. This tool makes them dynamic and customizable in terms of color, size, and animation speed.
                                    </li>
                                    <li className="text-md font-semibold text-gray-700">
                                        Some animations from open source CSS loading animation curation
                                        <a href="https://github.com/jh3y/whirl" title="whirl" target="_blank" rel="noopener noreferrer nofollow"><span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> Whirl <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> created by <a href="https://jhey.dev/" title="jhey dev" target="_blank" rel="noopener noreferrer nofollow"><span className="text-blue-600 cursor-pointer hover:underline inline-flex items-center"> Jhey Tompkins <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> is used.
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

export default CSSLoaderGenerator