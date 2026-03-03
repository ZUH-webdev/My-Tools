import { ExternalLink } from "lucide-react";
import reactNativeShadowGenerator from "../../images/DetailPageImages/reactNativeShadowGenerator.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import ReactNativeShadow from "../../components/ReactNativeShadow";

const ReactNativeShadowGenerator = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="React Native Shadow Generator" icon={reactNativeShadowGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <ReactNativeShadow />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="react-native-shadow-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online React Native Shadow Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    React Native Shadow Generator is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for generating shadow styles for React Native</span> which looks almost same on iOS and Android. <a href="https://reactnative.dev/" title="React Native Dev" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> React Native <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> is a cross-platform (hybrid) framework for building native mobile apps with React. In React Native, you write the code once with JavaScript and use the same code repository for building native iOS and Android apps.
                                </p>
                                <p>
                                    When you work with React on web development, it is relatively easy to implement shadows with CSS by using box-shadow property. But, it is a little more complicated on React Native since there are platform specific shadow styles and it is hard to obtain results that look exactly same on both platform. For generating box-shadow equivalent on React Native which will sync on both platforms in terms of visualization, it is a good practice to use <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">React Native box shadow generator</span>.
                                </p>
                                <p>
                                    You can see the shadows both on iOS and Android emulators below as a comparison. Styles are created with "Online React Native Shadow Generator" in the following example for the value 6 for depth. You can see that both shadows looks very similar to each other.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/react-native-shadow-generator/react-native-shadows-ios-vs-android.jpg"
                                        alt="React Native Shadow Generator"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    React Native Shadows on iOS and Android Emulators
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    While generating styles, there are some properties used for both platform like shadowColor, on the other side, there are platform specific ones like shadowOffset, shadowOpacity, shadowRadius for iOS and elevation for Android. Also, shadowColor is only available on Android for API 28 and above. Also, keep in mind that, if the background color of the box you want to apply shadow has an alpha value, it effects the result both in iOS and Android in a different way. If the opacity of the box is zero, the shadow is not visible on iOS, whereas its display will change on Android. So, for consistency, it is advised to apply it to boxes which have solid background colors.
                                </p>
                                <p>
                                    In Android, there are very few parameters to control shadow. So, it is preferred to mimic Android shadow by adjusting parameters related with iOS. In Android, the opacity of the background color decrease more and more when you increase the depth or elevation. So, it is recommended to keep opacity low for higher offset hight values of shadow in iOS. Also, horizontal offset is not available in Android. So, it is recommended to keep horizontal offset as 0 in iOS.
                                </p>
                                <p>
                                    For getting more info about how to control shadows in your mobile applications, you should make trials on React Native emulators and see how each property affects each other. Also should check the <a href="https://reactnative.dev/docs/shadow-props" title="Shadow Props" target="_blank" rel="noopener noreferrer nofollow"> <span className="text-indigo-600 cursor-pointer hover:underline inline-flex items-center"> Shadow Props <ExternalLink className="w-3 h-3 ml-1 stroke-3" /></span></a> page on React Native documents.
                                </p>
                                <p>
                                    Don't forget that you can use different shadows for each platform bu tuning platform-specif params like offset, opacity, radius, and elevation. Main aim of this tool is to create shadow styles which will be displayed similarly in both platform.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online React Native Shadow Generator?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can generate React Native shadow styles by following the guide below:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Select the color you prefer. It has to be a solid color which does not have alpha value since opacity will be adjusted automatically to sync each platform.</li>
                                <li className="pl-2 marker:text-gray-800">Set the depth. It is the reference value for Android elevation. This shadow will be mirrored on iOS by using params.</li>
                                <li className='pl-2 marker:text-gray-800'>When you get the desired results from previews, click "Copy Code" button to get the styles and paste it in the styles of the element you want to apply it.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ReactNativeShadowGenerator