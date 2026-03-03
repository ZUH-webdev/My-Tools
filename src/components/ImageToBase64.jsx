import { Check, Copy, X } from "lucide-react";
import { useState, useRef } from "react";

export default function ImageToBase64() {
    const [image, setImage] = useState(null);
    const [base64, setBase64] = useState("");
    const [copied, setCopied] = useState(false);
    const [mime, setMime] = useState("");
    const [format, setFormat] = useState("data");
    const fileInputRef = useRef(null);

    const handleFile = (file) => {
        if (!file) return;

        setMime(file.type);
        const reader = new FileReader();
        reader.onload = () => {
            setBase64(reader.result.split(",")[1]);
        };
        reader.readAsDataURL(file);
        setImage(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    };

    const getOutput = () => {
        switch (format) {
            case "raw":
                return base64;

            case "data":
                return `data:${mime};base64,${base64}`;

            case "html-img":
                return `<img src="data:${mime};base64,${base64}" alt="Image" />`;

            case "css-bg":
                return `background-image: url("data:${mime};base64,${base64}");`;

            case "link":
                return `<a href="data:${mime};base64,${base64}" target="_blank">Open Image</a>`;

            case "download":
                return `<a download="image" href="data:${mime};base64,${base64}">Download Image</a>`;

            case "favicon":
                return `<link rel="icon" type="${mime}" href="data:${mime};base64,${base64}">`;

            default:
                return "";
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(getOutput());
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };


    return (
        <div className="max-w-5xl mx-auto font-manrope">

            {/* Upload Area */}
            <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer bg-white hover:border-blue-500 transition"
            >
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files[0])}
                />
                <p className="text-gray-600">
                    Drag your image here or <span className="text-blue-600 font-semibold">click to browse</span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8 mb-6">
                {/* Image Preview Area */}
                <div className="relative border border-gray-300 rounded-lg p-4 flex items-center justify-center bg-white min-h-65">
                    {image ? (
                        <>
                            {/* Delete Button */}
                            <button
                                onClick={() => {
                                    setImage(null);
                                    setBase64("");
                                }}
                                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-md transition"
                                title="Remove Image"
                            >
                                <X />
                            </button>

                            <img
                                src={image}
                                alt="Preview"
                                className="max-h-64 object-contain"
                            />
                        </>
                    ) : (
                        <p className="text-gray-400 text-sm text-center">
                            Upload Image to Preview
                        </p>
                    )}
                </div>



                {/* Output Section */}
                <div className="border bg-white border-gray-300 rounded-lg p-4 flex flex-col gap-4">
                    <select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        className="w-full border bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="raw">Raw Base64</option>
                        <option value="data">Data URI</option>
                        <option value="html-img">HTML Image</option>
                        <option value="css-bg">CSS Background Image</option>
                        <option value="link">Hyperlink</option>
                        <option value="download">Downloadable Hyperlink</option>
                        <option value="favicon">HTML Favicon</option>
                    </select>

                    <textarea
                        readOnly
                        value={getOutput()}
                        className="w-full h-48 border bg-white border-gray-300 rounded-md p-3 text-sm resize-none"
                    />

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleCopy}
                            className={`flex items-center justify-center gap-1.5 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${copied
                                ? "bg-green-600 text-white"
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4" />
                                    Copy Base64
                                </>
                            )}
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}
