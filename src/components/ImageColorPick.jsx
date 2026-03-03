import { useState, useRef, useEffect } from 'react';

const ImageColorPick = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [fileName, setFileName] = useState("");
    const [copiedField, setCopiedField] = useState(null);
    const canvasRef = useRef(null);
    const magnifierRef = useRef(null);
    const fileInputRef = useRef(null);

    // Round Eyedropper Style Cursor
    const roundCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='none' stroke='black' stroke-width='2'/><circle cx='16' cy='16' r='1' fill='black'/></svg>") 16 16, crosshair`;

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const nameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
            setFileName(nameWithoutExtension || file.name);

            const reader = new FileReader();
            reader.onload = (event) => {
                setImageSrc(event.target.result);
                setSelectedColor(null);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (imageSrc) {
            const img = new Image();
            img.onload = () => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
            img.src = imageSrc;
        }
    }, [imageSrc]);

    const getCoordinates = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
            clientX: e.clientX,
            clientY: e.clientY
        };
    };

    const pickColor = (e) => {
        if (!imageSrc) return;
        const { x, y } = getCoordinates(e);
        const ctx = canvasRef.current.getContext('2d');
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const [r, g, b] = pixel;
        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
        setSelectedColor({
            hex,
            rgb: `rgb(${r}, ${g}, ${b})`,
            hsl: rgbToHsl(r, g, b)
        });
    };

    const handleMouseMove = (e) => {
        if (!imageSrc) return;
        const { x, y, clientX, clientY } = getCoordinates(e);
        const mag = magnifierRef.current;
        const magCtx = mag.getContext('2d');

        mag.style.display = 'block';
        mag.style.left = `${clientX + 20}px`;
        mag.style.top = `${clientY + 20}px`;

        magCtx.imageSmoothingEnabled = false;
        magCtx.clearRect(0, 0, 120, 120);
        magCtx.drawImage(canvasRef.current, x - 5, y - 5, 10, 10, 0, 0, 120, 120);

        // Crosshair inside magnifier
        magCtx.strokeStyle = 'white';
        magCtx.lineWidth = 1;
        magCtx.strokeRect(58, 58, 4, 4);
    };

    const rgbToHsl = (r, g, b) => {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
            else if (max === g) h = (b - r) / d + 2;
            else h = (r - g) / d + 4;
            h /= 6;
        }
        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };

    const copyToClipboard = async (text, label) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(label);
            setTimeout(() => setCopiedField(null), 1500);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-manrope">
            <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow border border-gray-100">

                {/* Upload Section */}
                <div className="p-6 border-b border-gray-50">
                    <div
                        onClick={() => fileInputRef.current.click()}
                        className="w-full border-2 border-dashed border-gray-200 rounded-xl py-12 text-center cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/30 transition-all"
                    >
                        <p className="text-gray-400">
                            Drag image here, or click to <span className="text-indigo-600 font-bold">browse</span>
                        </p>
                        <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
                    </div>
                </div>

                {/* Workspace Display */}
                <div className="bg-[#f0f1f3] p-8 flex flex-col items-center justify-center min-h-100 cursor-not-allowed">
                    {imageSrc ? (
                        <div className="relative shadow-2xl rounded-sm overflow-hidden flex flex-col">
                            <canvas
                                ref={canvasRef}
                                onClick={pickColor}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => magnifierRef.current.style.display = 'none'}
                                className="max-w-full max-h-125 bg-white block"
                                style={{ cursor: roundCursor }}
                            />
                            <div className="bg-white py-2 text-center border-t border-gray-100">
                                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">
                                    {fileName}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-400 italic">Please upload an image to start picking colors</p>
                    )}

                    <canvas
                        ref={magnifierRef}
                        width="120" height="120"
                        className="fixed pointer-events-none rounded-full border-4 border-white shadow-xl z-50 hidden"
                    />
                </div>

                {/* Result Card */}
                {selectedColor && (
                    <div className="p-12 flex justify-center">
                        <div className="flex flex-col md:flex-row w-full max-w-md bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-50">
                            <div
                                className="w-full md:w-36 h-36 md:h-auto transition-all"
                                style={{ backgroundColor: selectedColor.hex }}
                            />
                            <div className="flex-1 p-6 space-y-5">
                                <ColorField label="HEX" value={selectedColor.hex} isCopied={copiedField === 'HEX'} onCopy={() => copyToClipboard(selectedColor.hex, 'HEX')} />
                                <ColorField label="RGBA" value={selectedColor.rgb} isCopied={copiedField === 'RGBA'} onCopy={() => copyToClipboard(selectedColor.rgb, 'RGBA')} />
                                <ColorField label="HSLA" value={selectedColor.hsl} isCopied={copiedField === 'HSLA'} onCopy={() => copyToClipboard(selectedColor.hsl, 'HSLA')} isLast />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ColorField = ({ label, value, onCopy, isCopied, isLast }) => (
    <div className={`flex flex-col ${!isLast ? 'border-b border-gray-50 pb-3' : ''}`}>
        <span className="text-[10px] font-black text-gray-300 tracking-widest mb-1">{label}</span>
        <div className="flex justify-between items-center group h-6">
            <span className={`font-semibold ${label === 'HSLA' ? 'text-indigo-500' : 'text-gray-700'}`}>{value}</span>
            <button
                onClick={onCopy}
                className={`p-1.5 rounded-full transition-all ${isCopied ? 'text-green-500 bg-green-50' : 'text-gray-300 hover:text-indigo-600 hover:bg-gray-50'}`}
            >
                {isCopied ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                )}
            </button>
        </div>
    </div>
);

export default ImageColorPick;