import { useState, useRef } from 'react';
import { Upload, Lock, Unlock, Download, Image as ImageIcon, X, ChevronDown, Settings, FileImage, Percent } from 'lucide-react';

export default function ImageResizzer() {
    const [file, setFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
    const [resizeDimensions, setResizeDimensions] = useState({ width: '', height: '' });
    const [lockAspectRatio, setLockAspectRatio] = useState(true);
    const [resizedImage, setResizedImage] = useState(null);
    const [outputFormat, setOutputFormat] = useState('jpeg');
    const [activeTab, setActiveTab] = useState('dimensions');
    const [percentage, setPercentage] = useState(100);

    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        processFile(selectedFile);
    };

    const processFile = (selectedFile) => {
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    setOriginalDimensions({ width: img.width, height: img.height });
                    setResizeDimensions({ width: img.width, height: img.height });
                    setPercentage(100);
                    setFile(selectedFile);
                    setImageSrc(event.target.result);
                    setResizedImage(null);

                    if (selectedFile.type.includes('png')) setOutputFormat('png');
                    else setOutputFormat('jpeg');
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        processFile(e.dataTransfer.files?.[0]);
    };

    // Switch Tabs and Sync Values
    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        if (tab === 'percentage') {
            // Calculate current percentage based on width
            if (originalDimensions.width > 0 && resizeDimensions.width) {
                setPercentage(Math.round((resizeDimensions.width / originalDimensions.width) * 100));
            }
        } else {
            // Dimensions tab is already synced via state
        }
    };

    const handleDimensionChange = (type, value) => {
        const val = value === '' ? '' : parseInt(value);

        let newWidth = resizeDimensions.width;
        let newHeight = resizeDimensions.height;

        if (type === 'width') {
            newWidth = val;
            if (lockAspectRatio && newWidth !== '' && originalDimensions.width > 0) {
                newHeight = Math.round(newWidth * (originalDimensions.height / originalDimensions.width));
            }
        } else {
            newHeight = val;
            if (lockAspectRatio && newHeight !== '' && originalDimensions.height > 0) {
                newWidth = Math.round(newHeight * (originalDimensions.width / originalDimensions.height));
            }
        }

        setResizeDimensions({ width: newWidth, height: newHeight });

        // Update percentage state for consistency if we switch back
        if (newWidth && originalDimensions.width > 0) {
            setPercentage(Math.round((newWidth / originalDimensions.width) * 100));
        }
    };

    const handlePercentageChange = (value) => {
        const val = value === '' ? '' : parseInt(value);
        setPercentage(val);

        if (val !== '' && originalDimensions.width > 0) {
            const newWidth = Math.round(originalDimensions.width * (val / 100));
            const newHeight = Math.round(originalDimensions.height * (val / 100));
            setResizeDimensions({ width: newWidth, height: newHeight });
        }
    };

    const handleResize = () => {
        if (!imageSrc || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            canvas.width = resizeDimensions.width;
            canvas.height = resizeDimensions.height;
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, 0, 0, resizeDimensions.width, resizeDimensions.height);

            const mimeType = outputFormat === 'png' ? 'image/png' : 'image/jpeg';
            const dataUrl = canvas.toDataURL(mimeType, 0.9);
            setResizedImage(dataUrl);
        };
        img.src = imageSrc;
    };

    const handleDownload = () => {
        if (!resizedImage) return;
        const link = document.createElement('a');
        link.download = `resized-${resizeDimensions.width}x${resizeDimensions.height}.${outputFormat}`;
        link.href = resizedImage;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const reset = () => {
        setFile(null);
        setImageSrc(null);
        setResizedImage(null);
        setOriginalDimensions({ width: 0, height: 0 });
        setResizeDimensions({ width: '', height: '' });
        setPercentage(100);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-manrope text-slate-800">

            <main className="max-w-5xl mx-auto pb-4">

                {/* Main Tool Container */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-screen flex flex-col md:flex-row">

                    {!file ? (
                        /* Upload View */
                        <div className="w-full flex flex-col items-center justify-center p-12 text-center">
                            <div
                                className="w-full max-w-2xl border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/50 p-16 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-blue-400 transition-all group"
                                onClick={() => fileInputRef.current.click()}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Upload size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Select Image File</h3>
                                <p className="text-slate-500 mb-8">Drag & Drop or Click to Choose</p>
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                    Browse Files
                                </button>
                                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                            </div>
                            <div className="mt-8 flex gap-4 text-sm text-gray-400 font-medium uppercase tracking-wider">
                                <span>JPG</span>
                                <span>PNG</span>
                                <span>WEBP</span>
                            </div>
                        </div>
                    ) : (
                        /* Workspace View */
                        <>
                            {/* Left: Preview Area */}
                            <div className="flex-1 bg-[#F9FAFB] border-r border-gray-200 relative flex flex-col">
                                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                        <FileImage size={16} className="text-blue-500" />
                                        <span>{file.name}</span>
                                    </div>
                                    <button onClick={reset} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
                                    <div className="relative shadow-md border border-gray-200 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
                                        {/* Checkered background */}
                                        <div className="absolute inset-0 z-0 opacity-20"
                                            style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}>
                                        </div>
                                        <img
                                            src={resizedImage || imageSrc}
                                            alt="Preview"
                                            className="relative z-10 max-w-full max-h-125 object-contain block transition-all duration-300"
                                            style={{ minWidth: '100px' }}
                                        />
                                    </div>
                                </div>

                                <div className="p-3 bg-white border-t border-gray-200 flex justify-center gap-6 text-xs font-medium text-slate-500">
                                    <div>Original: <span className="text-slate-800">{originalDimensions.width} x {originalDimensions.height}</span></div>
                                    {resizeDimensions.width && (
                                        <div className="flex items-center gap-2">
                                            Resized:
                                            <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
                                                {resizeDimensions.width} x {resizeDimensions.height}
                                            </span>
                                            {/* Show percentage change if scaling */}
                                            <span className="text-gray-400">
                                                ({percentage}%)
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right: Settings Sidebar */}
                            <div className="w-full md:w-87.5 bg-white flex flex-col h-full z-20 shadow-[-1px_0_10px_rgba(0,0,0,0.02)]">
                                <div className="p-6 flex-1 overflow-y-auto">

                                    {/* Section: Resize By */}
                                    <div className="mb-8">
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Resize By</label>
                                        <div className="flex bg-gray-100 p-1 rounded-lg">
                                            <button
                                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'dimensions' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                                onClick={() => handleTabSwitch('dimensions')}
                                            >
                                                Dimensions
                                            </button>
                                            <button
                                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'percentage' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                                onClick={() => handleTabSwitch('percentage')}
                                            >
                                                Percentage
                                            </button>
                                        </div>
                                    </div>

                                    {/* Dynamic Section: Dimensions OR Percentage */}
                                    {activeTab === 'dimensions' ? (
                                        <div className="mb-8 relative">
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Dimensions</label>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1">
                                                    <div className="relative">
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all pl-3"
                                                            placeholder="Width"
                                                            value={resizeDimensions.width}
                                                            onChange={(e) => handleDimensionChange('width', e.target.value)}
                                                        />
                                                        <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-medium pointer-events-none">PX</span>
                                                    </div>
                                                </div>

                                                {/* Lock Icon Button */}
                                                <button
                                                    onClick={() => setLockAspectRatio(!lockAspectRatio)}
                                                    className={`p-1.5 rounded-md transition-colors ${lockAspectRatio ? 'text-blue-500 bg-blue-50' : 'text-gray-300 hover:bg-gray-100'}`}
                                                    title="Toggle Aspect Ratio"
                                                >
                                                    {lockAspectRatio ? <Lock size={16} /> : <Unlock size={16} />}
                                                </button>

                                                <div className="flex-1">
                                                    <div className="relative">
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all pl-3"
                                                            placeholder="Height"
                                                            value={resizeDimensions.height}
                                                            onChange={(e) => handleDimensionChange('height', e.target.value)}
                                                        />
                                                        <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-medium pointer-events-none">PX</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-2 text-[11px] text-gray-400 flex items-center gap-1.5">
                                                <input
                                                    type="checkbox"
                                                    checked={lockAspectRatio}
                                                    onChange={() => setLockAspectRatio(!lockAspectRatio)}
                                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                                                />
                                                <span>Lock Aspect Ratio</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mb-8 relative">
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Percentage</label>
                                            <div className="flex items-center gap-4">
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="200"
                                                    value={percentage}
                                                    onChange={(e) => handlePercentageChange(e.target.value)}
                                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                                />
                                                <div className="relative w-24 shrink-0">
                                                    <input
                                                        type="number"
                                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all pl-3"
                                                        value={percentage}
                                                        onChange={(e) => handlePercentageChange(e.target.value)}
                                                    />
                                                    <Percent size={14} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="mt-2 text-xs text-gray-500">
                                                Target Size: <span className="font-semibold text-slate-800">{resizeDimensions.width} x {resizeDimensions.height} px</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Section: Settings */}
                                    <div className="mb-8">
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Output Format</label>
                                        <div className="relative">
                                            <select
                                                value={outputFormat}
                                                onChange={(e) => setOutputFormat(e.target.value)}
                                                className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                            >
                                                <option value="jpeg">JPG</option>
                                                <option value="png">PNG</option>
                                                <option value="webp">WEBP</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Actions */}
                                <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                    {!resizedImage ? (
                                        <button
                                            onClick={handleResize}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md shadow-blue-200 transition-all flex items-center justify-center gap-2"
                                        >
                                            <Settings size={18} /> Resize Image
                                        </button>
                                    ) : (
                                        <div className="flex flex-col gap-3">
                                            <button
                                                onClick={handleDownload}
                                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md shadow-emerald-200 transition-all flex items-center justify-center gap-2"
                                            >
                                                <Download size={18} /> Download
                                            </button>
                                            <button
                                                onClick={() => setResizedImage(null)}
                                                className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-slate-600 font-medium py-2.5 rounded-lg transition-all text-sm"
                                            >
                                                Back to Settings
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </>
                    )}
                </div>

                {/* Helper Canvas */}
                <canvas ref={canvasRef} className="hidden"></canvas>
            </main>
        </div>
    );
}