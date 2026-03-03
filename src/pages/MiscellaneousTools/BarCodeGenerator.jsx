import { useState, useRef } from "react";
import Barcode from "react-barcode";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import SimilarTools from "../../components/SimilarTools";

const BarcodeGenerator = () => {
  const [value, setValue] = useState("");
  const [format, setFormat] = useState("CODE128");
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [displayValue, setDisplayValue] = useState(true);
  const [generated, setGenerated] = useState(false);
  const barcodeRef = useRef(null);

  const formats = [
    "CODE128",
    "CODE39",
    "EAN13",
    "EAN8",
    "UPC",
    "ITF14",
    "MSI",
    "pharmacode",
  ];

  const generateBarcode = () => {
    if (!value.trim()) {
      alert("Please enter a barcode value");
      return;
    }
    setGenerated(true);
  };

  const resetBarcode = () => {
    setValue("");
    setFormat("CODE128");
    setWidth(2);
    setHeight(100);
    setDisplayValue(true);
    setGenerated(false);
  };

  const downloadBarcode = () => {
    if (!generated || !barcodeRef.current) {
      alert("Please generate a barcode first");
      return;
    }

    const svg = barcodeRef.current.querySelector("svg");
    if (svg) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const data = new XMLSerializer().serializeToString(svg);
      const img = new Image();
      const svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);

        const link = document.createElement("a");
        link.download = `barcode-${value}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      };

      img.src = url;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 mt-10">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                Barcode Generator
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className=" flex flex-wrap items-center justify-between gap-6 mb-8">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium  text-gray-700 mb-2">
                Barcode Value
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter barcode value"
                className="w-full px-4  py-3 border border-gray-300 rounded-lg focus:ring-2 bg-white focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Format */}
              <div>
                <label className="block text-sm font-medium  text-gray-700 mb-2">
                  Barcode Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                >
                  {formats.map((fmt) => (
                    <option key={fmt} value={fmt}>
                      {fmt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Display Value Checkbox */}
              <div className="flex items-end">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={displayValue}
                    onChange={(e) => setDisplayValue(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Display Value
                  </span>
                </label>
              </div>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Width Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Barcode Line Width:{" "}
                  <span className="text-indigo-600">{width}px</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Height Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Barcode Line Height:{" "}
                  <span className="text-indigo-600">{height}px</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={resetBarcode}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
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
                onClick={generateBarcode}
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center gap-2"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Generate
              </button>
            </div>

            {/* Barcode Display */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-50 border-2 border-dashed border-gray-300">
              {generated && value ? (
                <div ref={barcodeRef}>
                  <Barcode
                    value={value}
                    format={format}
                    width={width}
                    height={height}
                    displayValue={displayValue}
                    fontSize={16}
                    margin={10}
                  />
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  Your barcode will appear here
                </p>
              )}
            </div>

            {/* Download Button */}
            {generated && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={downloadBarcode}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center gap-2"
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Barcode
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ===== Extra Sections (Below, Centered) ===== */}
        <div className="flex flex-col space-y-0 ">
          <CommentsSection toolId="barcode-generator" />
          <BuyMeACoffee />
          <SimilarTools />
          <BrowserExtensionBanner />
          <div />
        </div>
        <div className="max-w-5xl mx-auto p-8 bg-white tracking-wider">
          <h3 className="font-space-grotesk font-bold text-2xl">
            What is Online Barcode Generator?
          </h3>
          <p className="font-manrope pt-6">
            Barcode Generator is a{" "}
            <strong>free online tool for generating barcodes </strong> in
            different forms and formats. Barcodes are images used to represent
            data in machine-readable format. There are used in many different
            areas to easily track "something" such as market products, cargo
            packages, patients in hospitals, books, pharmaceuticals etc. Optical
            readers -more specifically barcode readers- are used to scan this
            data from images or stickers. Main method for identifying the data
            is calculate the varying spacing and width of parallel lines. These
            types of barcodes are also named as linear barcodes..
          </p>{" "}
          <br />
          <br />
          <img src="..\..\qr-code-sample.png" alt="Qr code sample" />
          <div className="font-manrope pt-6">
            <p>
              There are many different barcode formats. Most widely used formats
              are EAN-8, EAN-13, and UPC. They are used on many retail products.
              <b>
                {" "}
                You can generate barcodes in Code 128, EAN / UPC, Code 39,
                ITF-14, MSI, Pharmacode and Codabar formats
              </b>{" "}
              by using Barcode Generator. Here are short definitions of these
              barcode formats.
            </p>
            <br />
            <ul className=" list-disc mt-4 space-y-2">
              <li>
                <b>Code 128:</b> It is a linear barcode both used for
                symbolizing numeric-only or alphanumeric barcodes. 128 stands
                for the 128 characters defined in ASCII standards. You can use
                both numbers and letters in this format. It's commonly used in
                packaging and shipping for product transportation. For detailed
                information about Code 128 barcode format, check Code 128 wiki.
              </li>
              <li>
                <b>EAN / UPC:</b> EAN and UPS stands for European Article Number
                (or International Article Number) and Universal Product Code,
                respectively. They are used to identify retail products
                worldwide. UPC is a 12-digit number while EAN differs in length
                for different EAN formats like EAN-13, EAN-8 etc. But both
                formats are numeric-only. For detailed information about EAN and
                UPS barcode formats, check EAN Wiki and UPS Wiki.
              </li>
              <li>
                <b> Code 39:</b> It is a variable length barcode format which
                you are allowed to enter 43 different characters including
                letters (A-Z), numbers and some special characters. For detailed
                information about Code 39 barcode format, check Code 39 Wiki..
              </li>
              <li>
                <b> MSI:</b> It is a barcode symbology created by MSI Data
                Corporation which is also known as Modified Plessey. It is
                numeric-only and has an optional "check digit" calculation such
                as Mode 10, Mod 11, Mod 1010 and Mod 1110. Most common one is
                Mod 10. For detailed information about MSI barcode format, check
                MSI Wiki.
              </li>
              <li>
                <b>Codabar:</b> It is a barcode format mostly used in libraries.
                For detailed information about Codabar barcode format, check
                Codabar Wiki.
              </li>
              <li>
                <b>Pharmacode:</b> Pharmaceutical Binary Code or Pharmacode is
                used in pharmaceutical industry. It is a numeric-only format
                which can be between the range 3 to 131070. For detailed
                information about Pharmacode barcode format, check Pharmacode
                Wiki.
              </li>
            </ul>
          </div>
          <h3 className="font-space-grotesk text-2xl font-bold">
            How to use Online QR Code Generator?
          </h3>
          <div className="font-manrope pt-6">
            <p>You can create your barcode by following these steps. :</p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>
                First, enter the barcode value. Be careful some characters are
                not allowed in specific barcode formats. You will get a message
                after submitting your request if this happens.
              </li>
              <li>
                Select a barcode format according to your needs. Available
                options are: Code 128, EAN-13, UPC, EAN-8, EAN-5, EAN-2, Code
                39, ITF-14, MSI, MSI (Mode 10), MSI (Mode 11), MSI (Mode 1010),
                MSI (Mode 1110), Pharmacode and Codabar{" "}
              </li>
              <li>
                Set your barcode height if needed. Default height is 100px.
              </li>
              <li>
                You can show or hide value of the barcode by using the "Display
                Value" checkbox if needed.
              </li>
              <li>
                You can use the button "Generate" is you enter all required
                fields to create your barcode as an image for free. You will get
                a warning if the value you entered is invalid for the selected
                barcode format.{" "}
              </li>
              <li>
                You can download your barcode as an image by using "Download
                Barcode" button.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default BarcodeGenerator;
