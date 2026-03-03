import jsonTreeViewer from "../../images/DetailPageImages/jsonTreeViewer.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import JSONTreeTool from "../../components/JSONTreeTool";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";

const JSONTreeViewer = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="JSON Tree Viewer" icon={jsonTreeViewer} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

                <JSONTreeTool />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="json-tree-viewer" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online JSON Tree Viewer?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    JSON Tree Viewer is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool for converting raw JSON data into JSON tree view</span>. JSON (JavaScript Object Notation) is a tree-like data format where subbranches may be nested in parent branches. If you have a raw object or array data which you want to explore in JSON tree view, this tool will be the best fit for you. You can collapse or expand each branch as well as add, edit, or delete with inline editing tools.
                                </p>
                                <p>
                                    There are 37 different color themes for JSON tree view, some are light themes while some are dark. You can select any of them according to your needs.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-3xl w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/json-tree-view/json-tree-view.jpg"
                                        alt="JSON Tree Viewer"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    JSON Tree View Example for manifest.json file
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    There are many settings you can use in JSON tree view. Data count and types may be listed right before each data, and you can change expand/collapse limits easily by selecting from options. Also, you can set indent size and increase readability according to needs. If you need particular data from a custom branch, you can enable clipboard and get data of the required node.
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="pt-4 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online JSON Tree Viewer?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">For viewing your raw JSON object or array in JSON tree view, follow these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2 marker:text-gray-800">Paste your raw JSON data in the input field. It may or may not be formatted properly. The tool will handle formatting for you. Even if you use JSON without double quotes for keys, which is called "Relaxed JSON" or "Unquoted JSON", the tool will add them automatically out of the box.</li>
                                <li className="pl-2 marker:text-gray-800">Select your themes and change settings according to your needs. You can enable or disable CRUD operations anytime.</li>
                                <li className="pl-2 marker:text-gray-800">Start exploring your data in tree view. If you want to save your data as a .json file, there is a button at the end for this purpose.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default JSONTreeViewer