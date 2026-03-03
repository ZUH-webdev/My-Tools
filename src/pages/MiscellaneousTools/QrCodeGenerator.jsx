import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import SimilarTools from "../../components/SimilarTools";

export default function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const qrRef = useRef(null);

  const downloadQr = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png";
    a.click();
  };

  const reset = () => {
    setValue("");
  };

  return (<>
    <div className='min-h-screen bg-gray-50 py-10 px-4 mt-10'>
     <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span className="text-indigo-600">▦</span>
        QR Code Generator
      </h2>

      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="URL or text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={reset}
          className="border rounded-lg px-5 py-3 text-sm text-gray-600 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center gap-6">
        <div
          ref={qrRef}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <QRCodeCanvas
            value={value || " "}
            size={220}
            bgColor="#ffffff"
            fgColor="#9ca3af"
            level="H"
            includeMargin
          />
        </div>

        <button
          onClick={downloadQr}
          disabled={!value}
          className={`px-6 py-3 rounded-lg text-white transition
            ${
              value
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-300 cursor-not-allowed"
            }
          `}
        >
          Download QR Code
        </button>
      </div>
    </div>
      {/* ===== Extra Sections (Below, Centered) ===== */}
    <div className="flex flex-col space-y-0 ">
      <CommentsSection toolId="qr-code-generator" />
      <BuyMeACoffee />
      <SimilarTools />
      <BrowserExtensionBanner />
      <div/>
      </div>

      <div className="max-w-5xl mx-auto p-8 bg-white tracking-wider" >
        <h3 className="font-space-grotesk font-bold text-2xl">What is Online QR Code Generator?</h3>
        <p className="font-manrope pt-6">QR Code Generator is a <strong>free online tool for generating QR codes</strong>. QR Code stands for "Quick Response Code". QR Code is a 2-Dimentional barcode first used in 1994 originated from Japanese automotive industry. Its popularity within other barcode types is its high capacity for storing data. You can store any text-type data in QR Codes, but it is generally used for storing links recently. <br />
<br />
Although there are many usage areas of QR Codes, it is mostly used for giving links to websites and mobile applications on Google Play and Apple Store. Other than that, you can use them to create vCard's (Contact Cards on Mobile), sending e-mails, making, or getting payment etc. <br />
<br />
QR Codes can be scanned by smartphones either natively or by using 3rd party apps. You can search mobile markets if you need a QR Code Scanner. <br />
<br />
QR Codes are formed from a white background and black squares. Longer the text, higher the number of squares. The squares become smaller and smaller if the text become longer. Here is a sample QR Code.</p>
<br />
<img src="..\..\qr-code-sample.png" alt="Qr code sample" />
<h3 className="font-space-grotesk text-2xl font-bold">How to use Online QR Code Generator?</h3>
        <div className="font-manrope pt-6">
          <p>Using Online QR Code Generator is very simple. You just need to follow these steps:</p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li>Enter the desired text or URL you want to store in QR Code in text field.</li>
            <li>QR Code will be generated right after the text field changes.</li>
            <li>You can use "Reset" button to clear the text field for creating a new QR code.</li>
          </ol>
          </div>
      </div>
    </div></>
   
  );
}
