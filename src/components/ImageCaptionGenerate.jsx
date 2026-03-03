import { useState } from "react";
import { imageCaptionApi } from "../api/imageCaptionApi";

const ImageCaptionGenerate = () => {
  const [captions, setCaptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // 🔁 Reusable Copy Field
  const CopyField = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    };

    
    return (
      <div className="flex items-center justify-between w-full px-5 py-2.5 border border-gray-300 rounded-xl bg-white font-manrope">
        <p className="text-gray-700 text-sm">{text}</p>
        <button
          onClick={handleCopy}
          className="px-4 py-1.5 text-sm rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    );
  };

  // 🔁 Handle file upload
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      generateCaptions();
    }
  };

  // 🔁 Fake API call simulation
  const generateCaptions = () => {
    setLoading(true);
    setCaptions([]);
    
    setTimeout(() => {
      const allCaptions = imageCaptionApi();
      const randomCaptions = [];
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * allCaptions.length);
        randomCaptions.push(allCaptions[randomIndex]);
      }
      setCaptions(randomCaptions);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-manrope">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow border border-gray-100">

        {/* Upload Section */}
        <div className="p-6 border-b border-gray-50">
          <label className="w-full flex flex-col items-center border-2 border-dashed border-gray-200 rounded-xl py-12 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
              <p className="text-gray-400 text-center">
                Drag image here, or click to <span className="text-indigo-600 font-bold">browse</span>
              </p>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Workspace Display */}
        <div className="bg-[#f0f1f3] p-8 flex flex-col items-center justify-center min-h-100">
          {loading ? (
            <p className="text-gray-500 italic">Generating captions...</p>
          ) : selectedFile ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-96 object-contain rounded"
            />
          ) : (
            <p className="text-gray-400 italic">Upload an image to see the caption</p>
          )}
        </div>

        {/* Captions Section */}
        <div className="p-6 space-y-4">
          {captions.length > 0
            ? captions.map((c, i) => <CopyField key={i} text={c} />)
            : Array.from({ length: 4 }).map((_, i) => (
                <CopyField key={i} text="Basic Image Caption" />
              ))}
        </div>

      </div>
    </div>
  );
};

export default ImageCaptionGenerate;
