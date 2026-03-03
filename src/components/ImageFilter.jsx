import { useState, useRef } from 'react';
import {
    Upload,
    Download,
    RotateCcw,
    Sliders,
    Check,
    FlipHorizontal,
    FlipVertical,
    Eye,
    Sun,
    Moon,
    Droplet,
    Palette,
    Image as ImageIcon
} from 'lucide-react';

// Filter definitions matching the specific tool requirements
const FILTERS = [
    {
        id: 'lighten',
        label: 'Lighten',
        icon: Sun,
        min: 0, max: 100, step: 1, defaultValue: 20, unit: '%'
    },
    {
        id: 'darken',
        label: 'Darken',
        icon: Moon,
        min: 0, max: 80, step: 1, defaultValue: 40, unit: '%'
    },
    {
        id: 'brighten',
        label: 'Brighten',
        icon: Sun,
        min: 100, max: 200, step: 1, defaultValue: 120, unit: '%'
    },
    {
        id: 'saturate',
        label: 'Saturate',
        icon: Droplet,
        min: 100, max: 300, step: 1, defaultValue: 150, unit: '%'
    },
    {
        id: 'de-saturate',
        label: 'De-saturate',
        icon: Droplet,
        min: 0, max: 100, step: 1, defaultValue: 0, unit: '%'
    },
    {
        id: 'grayscale',
        label: 'Grayscale',
        icon: Palette,
        min: 0, max: 100, step: 1, defaultValue: 100, unit: '%'
    },
    {
        id: 'hue',
        label: 'Hue',
        icon: Palette,
        min: 0, max: 360, step: 1, defaultValue: 90, unit: '°'
    },
    {
        id: 'invert',
        label: 'Invert',
        icon: RotateCcw,
        min: 0, max: 100, step: 1, defaultValue: 100, unit: '%'
    },
    {
        id: 'blur',
        label: 'Blur',
        icon: Eye,
        min: 0, max: 20, step: 1, defaultValue: 5, unit: 'px'
    },
    {
        id: 'fisheye',
        label: 'Fisheye',
        icon: Eye,
        min: 0, max: 50, step: 1, defaultValue: 15, unit: ''
    },
    {
        id: 'flip_h',
        label: 'Flip Horizontal',
        icon: FlipHorizontal,
        type: 'action'
    },
    {
        id: 'flip_v',
        label: 'Flip Vertical',
        icon: FlipVertical,
        type: 'action'
    },
];

export default function ImageFilter() {
    const [originalImage, setOriginalImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    // Controls state
    const [selectedFilterId, setSelectedFilterId] = useState(FILTERS[0].id);
    const [sliderValue, setSliderValue] = useState(FILTERS[0].defaultValue);
    const [isProcessing, setIsProcessing] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // References
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const activeFilter = FILTERS.find(f => f.id === selectedFilterId);

    // --- Handlers ---

    const handleFileUpload = (file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imgObj = new Image();
                imgObj.onload = () => {
                    setOriginalImage(e.target.result);
                    setCurrentImage(e.target.result);
                    // Reset controls
                    setSelectedFilterId(FILTERS[0].id);
                    setSliderValue(FILTERS[0].defaultValue);
                };
                imgObj.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };

    const handleFilterChange = (id) => {
        const newFilter = FILTERS.find(f => f.id === id);
        setSelectedFilterId(id);
        if (newFilter.type !== 'action') {
            setSliderValue(newFilter.defaultValue);
        }
    };

    const handleReset = () => {
        setCurrentImage(originalImage);
        setSelectedFilterId(FILTERS[0].id);
        setSliderValue(FILTERS[0].defaultValue);
    };

    const handleDownload = () => {
        if (!currentImage) return;
        const link = document.createElement('a');
        link.download = 'filtered-image.png';
        link.href = currentImage;
        link.click();
    };

    // --- Image Processing Logic ---

    const applyFilter = async () => {
        if (!currentImage || !canvasRef.current) return;
        setIsProcessing(true);

        setTimeout(() => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);
                processImageContext(ctx, canvas.width, canvas.height);

                setCurrentImage(canvas.toDataURL('image/png'));
                setIsProcessing(false);
            };

            img.src = currentImage;
        }, 50);
    };

    const processImageContext = (ctx, width, height) => {
        const val = sliderValue;
        ctx.save();

        switch (selectedFilterId) {
            case 'brighten':
                ctx.filter = `brightness(${val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'darken':
                ctx.filter = `brightness(${100 - val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'lighten':
                ctx.filter = `brightness(${100 + val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'saturate':
                ctx.filter = `saturate(${val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'de-saturate':
                ctx.filter = `saturate(${100 - val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'grayscale':
                ctx.filter = `grayscale(${val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'hue':
                ctx.filter = `hue-rotate(${val}deg)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'invert':
                ctx.filter = `invert(${val}%)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'blur':
                ctx.filter = `blur(${val}px)`;
                ctx.drawImage(ctx.canvas, 0, 0);
                break;
            case 'flip_h':
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                ctx.drawImage(ctx.canvas, 0, 0, width, height, 0, 0, width, height);
                break;
            case 'flip_v':
                ctx.translate(0, height);
                ctx.scale(1, -1);
                ctx.drawImage(ctx.canvas, 0, 0, width, height, 0, 0, width, height);
                break;
            case 'fisheye':
                applyFisheye(ctx, width, height, val);
                break;
            default:
                break;
        }
        ctx.restore();
    };

    const applyFisheye = (ctx, w, h, intensity) => {
        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;
        const result = ctx.createImageData(w, h);
        const resData = result.data;
        const strength = (intensity / 100);
        const cx = w / 2;
        const cy = h / 2;

        for (let y = 0; y < h; y++) {
            const ny = (y - cy) / h;
            for (let x = 0; x < w; x++) {
                const nx = (x - cx) / w;
                const r = Math.sqrt(nx * nx + ny * ny);

                if (0 <= r && r <= 0.5) {
                    const nr = r + (strength * (r * r * r));
                    const theta = Math.atan2(ny, nx);
                    const nx2 = nr * Math.cos(theta);
                    const ny2 = nr * Math.sin(theta);
                    const u = (nx2 * w) + cx;
                    const v = (ny2 * h) + cy;
                    const srcX = Math.floor(u);
                    const srcY = Math.floor(v);

                    if (srcX >= 0 && srcX < w && srcY >= 0 && srcY < h) {
                        const destIndex = (y * w + x) * 4;
                        const srcIndex = (srcY * w + srcX) * 4;
                        resData[destIndex] = data[srcIndex];
                        resData[destIndex + 1] = data[srcIndex + 1];
                        resData[destIndex + 2] = data[srcIndex + 2];
                        resData[destIndex + 3] = data[srcIndex + 3];
                    }
                }
            }
        }
        ctx.putImageData(result, 0, 0);
    };

    const getPreviewStyle = () => {
        if (!activeFilter || activeFilter.type === 'action') return {};
        if (activeFilter.id === 'fisheye') return {};

        let filterString = '';
        const val = sliderValue;

        switch (activeFilter.id) {
            case 'brighten': filterString = `brightness(${val}%)`; break;
            case 'darken': filterString = `brightness(${100 - val}%)`; break;
            case 'lighten': filterString = `brightness(${100 + val}%)`; break;
            case 'saturate': filterString = `saturate(${val}%)`; break;
            case 'de-saturate': filterString = `saturate(${100 - val}%)`; break;
            case 'grayscale': filterString = `grayscale(${val}%)`; break;
            case 'hue': filterString = `hue-rotate(${val}deg)`; break;
            case 'invert': filterString = `invert(${val}%)`; break;
            case 'blur': filterString = `blur(${val}px)`; break;
            default: return {};
        }
        return { filter: filterString };
    };

    return (
        <div className="min-h-screen bg-gray-50 text-[#1e293b] font-manrope selection:bg-blue-100">

            <main className="max-w-5xl mx-auto p-4">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Left Column: Image / Canvas */}
                    <div className="flex-1 min-w-0">
                        <div
                            className={`bg-white rounded-xl shadow-sm border-2 relative min-h-125 flex items-center justify-center overflow-hidden transition-all
                ${dragActive ? 'border-blue-500 bg-blue-50/50' : 'border-dashed border-gray-300'} 
                ${!currentImage ? 'cursor-pointer hover:border-blue-400 hover:bg-gray-50' : ''}
              `}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => !currentImage && fileInputRef.current?.click()}
                        >
                            {!currentImage ? (
                                <div className="text-center p-8 max-w-sm mx-auto">
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5">
                                        <Upload size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Drag & Drop Image Here
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6">
                                        Or browse to upload from your device
                                    </p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm active:scale-95">
                                        Browse File
                                    </button>
                                </div>
                            ) : (
                                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')] relative flex items-center justify-center p-4">
                                    <img
                                        src={currentImage}
                                        alt="Preview"
                                        className="max-w-full max-h-150 object-contain shadow-2xl"
                                        style={getPreviewStyle()}
                                    />

                                    {activeFilter?.id === 'fisheye' && (
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm pointer-events-none">
                                            Preview disabled for Fisheye. Click Apply to see effect.
                                        </div>
                                    )}

                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-2.5 rounded-lg shadow-sm border border-gray-200 backdrop-blur-sm transition-all hover:scale-105"
                                        title="Upload New Image"
                                    >
                                        <Upload size={20} />
                                    </button>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e.target.files[0])}
                            />
                        </div>
                    </div>

                    {/* Right Column: Tools Panel */}
                    <div className="w-full lg:w-90 shrink-0 flex flex-col gap-4">

                        {/* Filter Settings Card */}
                        <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-opacity ${!currentImage ? 'opacity-60 pointer-events-none' : 'opacity-100'}`}>
                            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center gap-2 text-gray-800 font-bold">
                                    <Sliders size={18} className="text-blue-600" />
                                    <h2>Filter Settings</h2>
                                </div>
                            </div>

                            <div className="p-5 space-y-6">
                                {/* 1. Filter Select */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Select Filter</label>
                                    <div className="relative">
                                        <select
                                            value={selectedFilterId}
                                            onChange={(e) => handleFilterChange(e.target.value)}
                                            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-3 pr-8 outline-none font-medium transition-all hover:border-gray-300 cursor-pointer"
                                        >
                                            {FILTERS.map(f => (
                                                <option key={f.id} value={f.id}>{f.label}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Slider (Conditional) */}
                                {activeFilter?.type !== 'action' && (
                                    <div className="space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                        <div className="flex justify-between items-center mb-1">
                                            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Value</label>
                                            <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                                {sliderValue}{activeFilter?.unit}
                                            </span>
                                        </div>
                                        <input
                                            type="range"
                                            min={activeFilter?.min}
                                            max={activeFilter?.max}
                                            step={activeFilter?.step}
                                            value={sliderValue}
                                            onChange={(e) => setSliderValue(Number(e.target.value))}
                                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700"
                                        />
                                        <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                                            <span>{activeFilter?.min}</span>
                                            <span>{activeFilter?.max}</span>
                                        </div>
                                    </div>
                                )}

                                {/* 3. Apply Button */}
                                <button
                                    onClick={applyFilter}
                                    disabled={isProcessing}
                                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3.5 px-4 rounded-lg transition-all shadow-md shadow-blue-600/20 active:translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isProcessing ? (
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Check size={18} />
                                            APPLY FILTER
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-gray-400">
                                    Click Apply to save the current effect before adding more.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className={`grid grid-cols-2 gap-3 transition-opacity ${!currentImage ? 'opacity-60 pointer-events-none' : 'opacity-100'}`}>
                            <button
                                onClick={handleReset}
                                className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600 py-3 px-4 rounded-xl transition-all text-sm font-bold shadow-sm"
                            >
                                <RotateCcw size={16} />
                                RESET
                            </button>
                            <button
                                onClick={handleDownload}
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition-all text-sm font-bold shadow-sm shadow-green-500/20"
                            >
                                <Download size={16} />
                                DOWNLOAD
                            </button>
                        </div>

                    </div>
                </div>
            </main>

            {/* Hidden Canvas */}
            <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}