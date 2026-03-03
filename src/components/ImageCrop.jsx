import { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../utils/cropImage";
import { BrushCleaning, ChevronDown, Crop, Download, RotateCw, UploadIcon } from "lucide-react";

export default function ImageCrop() {
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [aspect, setAspect] = useState(null);
    const [croppedArea, setCroppedArea] = useState(null);
    const [result, setResult] = useState(null);

    const onCropComplete = (_, area) => setCroppedArea(area);

    const handleCrop = async () => {
        if (!croppedArea || !image) return;
        const cropped = await getCroppedImg(image, croppedArea);
        setResult(cropped);
    };

    return (
        <div className="max-w-5xl mx-auto pt-6 font-manrope">

            {/* TOP UPLOAD AREA */}
            <div className="border-2 border-dashed rounded-xl h-27.5 flex items-center justify-center text-gray-500">
                <label className="flex items-center gap-2 cursor-pointer">
                    <UploadIcon className="w-7 h-7" />
                    <span className="text-sm">
                        Drag your image here, or <span className="font-semibold">click to browse</span>
                    </span>
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                    />
                </label>
            </div>

            {/* MAIN CROPPER */}
            <div className="mt-6 border border-gray-300 rounded-xl bg-white h-95 relative overflow-hidden flex items-center justify-center">

                {!image && (
                    <div className="text-gray-400 flex flex-col items-center">
                        <Crop className="w-10 h-10" />
                        <p className="mt-2 text-lg">Upload an image before starting to crop</p>
                    </div>
                )}

                {image && (
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={aspect}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                    />
                )}
            </div>

            {/* BOTTOM CONTROLS */}
            <div className="mt-6 flex justify-between items-center">

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <select
                            className="w-full appearance-none border-2 border-gray-300 bg-white rounded-xl px-8 py-3 text-gray-500 font-medium focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400 cursor-pointer"
                            onChange={(e) =>
                                setAspect(e.target.value === "free" ? null : Number(e.target.value))
                            }
                        >
                            <option value="free">Free Selection</option>
                            <option value="1">1:1</option>
                            <option value="1.333">4:3</option>
                            <option value="1.777">16:9</option>
                            <option value="1.25">5:4</option>
                            <option value="1.5">3:2</option>
                            <option value="1.85">1.85:1</option>
                            <option value="2.35">2.35:1</option>
                        </select>

                        {/* Custom arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <ChevronDown className="w-5 h-5" />
                        </div>
                    </div>

                    <button
                        onClick={() => setZoom(z => z + 0.2)}
                        className="border px-6 py-3 rounded-full flex items-center gap-2 font-bold text-[#7072f8]"
                    >
                        <span><RotateCw className="w-3 h-3 stroke-3" /></span>
                        Rotate
                    </button>

                    <button
                        onClick={handleCrop}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium"
                    >
                        <span><Crop className="w-3 h-3 stroke-3" /></span>
                        Crop
                    </button>
                </div>

                <div className="flex gap-3">
                    <button
                        className="flex items-center gap-2 px-6 py-3 rounded-full border text-gray-500 font-semibold"
                        onClick={() => {
                            setImage(null);
                            setResult(null);
                        }}
                    >
                        <BrushCleaning className="w-3 h-3 stroke-3" />
                        Reset
                    </button>

                    <button
                        onClick={() => setZoom(z => z + 0.2)}
                        className="border px-6 py-3 rounded-full flex items-center gap-2 font-bold text-[#7072f8]"
                    >
                        <span><Download className="w-3 h-3 stroke-3" /></span>
                        <a
                            href={result}
                            download="cropped-image.jpg"
                        >
                            Download Image
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
