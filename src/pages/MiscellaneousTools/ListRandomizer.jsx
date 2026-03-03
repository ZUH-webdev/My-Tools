import { useState } from "react";
import CommentsSection from "../../components/CommentsSection";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import SimilarTools from "../../components/SimilarTools";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";

const ListRandomizer = () => {
  const [inputText, setInputText] = useState("");
  const [randomizedList, setRandomizedList] = useState([]);
  const [listFormat, setListFormat] = useState("one-per-line");
  const [numberOfSelections, setNumberOfSelections] = useState("all");
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [uniqueCount, setUniqueCount] = useState(0);
  const [duplicateCount, setDuplicateCount] = useState(0);

  const parseList = (text) => {
    if (!text.trim()) return [];

    let items = [];
    if (listFormat === "one-per-line") {
      items = text
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item);
    } else if (listFormat === "comma-separated") {
      items = text
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item);
    } else if (listFormat === "space-separated") {
      items = text
        .split(" ")
        .map((item) => item.trim())
        .filter((item) => item);
    }

    return items;
  };

  const updateCounts = (text) => {
    const items = parseList(text);
    const total = items.length;
    const unique = new Set(items).size;
    const duplicates = total - unique;

    setTotalCount(total);
    setUniqueCount(unique);
    setDuplicateCount(duplicates);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    updateCounts(text);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleRandomize = () => {
    let items = parseList(inputText);

    if (items.length < 2) {
      alert("At least 2 unique elements needed for randomization of the list.");
      return;
    }

    if (removeDuplicates) {
      items = [...new Set(items)];
    }

    let shuffled = shuffleArray(items);

    if (numberOfSelections !== "all") {
      const count = parseInt(numberOfSelections);
      shuffled = shuffled.slice(0, Math.min(count, shuffled.length));
    }

    setRandomizedList(shuffled);
  };

  const handleReset = () => {
    setInputText("");
    setRandomizedList([]);
    setListFormat("one-per-line");
    setNumberOfSelections("all");
    setRemoveDuplicates(true);
    setTotalCount(0);
    setUniqueCount(0);
    setDuplicateCount(0);
  };

  const formatOutput = (list) => {
    if (listFormat === "one-per-line") {
      return list.join("\n");
    } else if (listFormat === "comma-separated") {
      return list.join(", ");
    } else if (listFormat === "space-separated") {
      return list.join(" ");
    }
    return list.join("\n");
  };

  return (
    <>
      <div className="min-h-screen  bg-gray-50 py-10 px-4 mt-10">
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <div className=" text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 font-space-grotesk">
                List Randomizer
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 ">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Your List
              </label>
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter your list items here..."
                className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Total Count</p>
                <p className="text-3xl font-bold text-gray-800">{totalCount}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Unique Count</p>
                <p className="text-3xl font-bold text-gray-800">
                  {uniqueCount}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Duplicate Count</p>
                <p className="text-3xl font-bold text-gray-800">
                  {duplicateCount}
                </p>
              </div>
            </div>

            {/* Options Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* List Format */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  List Format
                </label>
                <select
                  value={listFormat}
                  onChange={(e) => {
                    setListFormat(e.target.value);
                    updateCounts(inputText);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                >
                  <option value="one-per-line">One per line</option>
                  <option value="comma-separated">Comma separated</option>
                  <option value="space-separated">Space separated</option>
                </select>
              </div>

              {/* Number of Selections */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Selections
                </label>
                <select
                  value={numberOfSelections}
                  onChange={(e) => setNumberOfSelections(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                >
                  <option value="all">Select All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>

            {/* Remove Duplicates Checkbox */}
            <div className="mb-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={removeDuplicates}
                  onChange={(e) => setRemoveDuplicates(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Remove Duplicates
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reset
              </button>
              <button
                onClick={handleRandomize}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
                Randomize
              </button>
            </div>

            {/* Info Message */}
            <div className="flex items-start gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-blue-800">
                At least 2 unique elements needed for randomization of the list.
              </p>
            </div>

            {/* Output Section */}
            {randomizedList.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Randomized Result
                  </label>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        formatOutput(randomizedList),
                      );
                      alert("Copied to clipboard!");
                    }}
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                  <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                    {formatOutput(randomizedList)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 flex flex-col space-y-0 ">
        <CommentsSection toolId="list-randomizer" />
        <BuyMeACoffee />
        <SimilarTools />
        <BrowserExtensionBanner />
        <div />
        <div className="max-w-5xl mx-auto p-8 bg-white tracking-wider">
          <h3 className="font-space-grotesk font-bold text-2xl">
            What is List Randomizer ?
          </h3>
          <p className="font-manrope pt-6">
            List Randomizer is a{" "}
            <strong>
              free online tool for randomizing lists and making lotteries or
              drawing campaigns{" "}
            </strong>
            by making desired number of selection randomly from a given list. If
            you want to make a lottery between your friends or draw a campaign
            or randomize the order of elements in a given list, List Randomizer
            will do it for you just in seconds.
          </p>{" "}
          <br />
          <p>
            You can generate randomly ordered lists by using a predefined list
            which may be formatted differently. This tools support lists which
            has one element per line or elements separated with comma,
            semicolon, or space. For each format, you will see stats for total
            number of elements detected, number of unique and duplicate
            elements. You can get rid of duplicate data by checking "Remove
            Duplicates" checkbox.
          </p>
          <br />
          <img src="..\..\qr-code-sample.png" alt="Qr code sample" />
          <div className="font-manrope pt-6">
            <p>
              As you see in the image, if you are 5 people and you want to select 3 people within this group randomly, it is easy to select lucky (or unlucky) ones immediately. You don't need to select people who draw the short straw as online List Randomizer is way faster and chances are exactly equal.
            </p>
            {" "}
            <br />
            <h3 className="font-space-grotesk text-2xl font-bold">
              How to use Online List Randomizer?
            </h3>
            <div className="font-manrope pt-6">
              <p>For making lotteries, campaign drawings or just to make list shuffling, here are the basic steps you need to follow.</p>
              <ol className="list-decimal list-inside mt-4 space-y-2">
                <li>
                  Enter you list to the text area. It must be formatted as one list element per line, separated by commas, semicolons or spaces.
                </li>
                <br />
                <li>
                  After entering your data as a list, you must choose the format of your data from the list. It is important to choose the right one since it is used for splitting your list into list elements. All counts will be shown under the list for you to preview if everything is okay
                </li>
                <br />
                <li>
                  Use the checkbox "Remove Duplicates" to set whether you want to remove or keep them.
                </li>
                <br />
                <li>
                  If you want to select limited number of elements from the list, you can set it from the list labeled as "Number of Selections". When the results are shown, selected ones will be shown with green color while others will be shown with red.

                </li>
                <br />
                <li>
                  When you are ready, you can click the button "Randomize" for making your random selection. After the selection, you can copy the results as a list to your clipboard.
                  .{" "}
                </li>

              </ol>
            </div>
          </div>
        </div>
      </div>
      </>
    );
    };
      export default ListRandomizer;
