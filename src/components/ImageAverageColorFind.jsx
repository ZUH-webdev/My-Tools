import { useState, useRef, useEffect } from 'react';
import { Upload, Copy, Check, Info, Settings, Image as ImageIcon, Trash2, ChevronRight, MousePointer2 } from 'lucide-react';

const ImageAverageColorFind = () => {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [algorithm, setAlgorithm] = useState('simple');
    const [result, setResult] = useState(null);
    const [copied, setCopied] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const canvasRef = useRef(null);

    const algorithms = [
        { id: 'simple', name: 'Simple', description: 'Processes all color units one by one and finds a simple average.' },
        { id: 'sqrt', name: 'Square Root', description: 'Takes the square root of accumulated colors for better accuracy.' },
        { id: 'dominant', name: 'Dominant', description: 'Finds the most used and dominant color in the image.' },
    ];

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            processFile(file);
        }
    };

    const processFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewUrl(e.target.result);
            const img = new Image();
            img.onload = () => {
                setImage(img);
                analyzeImage(img, algorithm);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    const analyzeImage = (img, algo) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Scale for processing speed
        const scale = Math.min(1, 300 / Math.max(img.width, img.height));
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let r = 0, g = 0, b = 0, a = 0;
        const totalPixels = imageData.length / 4;

        if (algo === 'simple') {
            for (let i = 0; i < imageData.length; i += 4) {
                r += imageData[i]; g += imageData[i + 1]; b += imageData[i + 2]; a += imageData[i + 3];
            }
            r = Math.round(r / totalPixels);
            g = Math.round(g / totalPixels);
            b = Math.round(b / totalPixels);
            a = Math.round(a / totalPixels);
        } else if (algo === 'sqrt') {
            for (let i = 0; i < imageData.length; i += 4) {
                r += imageData[i] ** 2; g += imageData[i + 1] ** 2; b += imageData[i + 2] ** 2; a += imageData[i + 3];
            }
            r = Math.round(Math.sqrt(r / totalPixels));
            g = Math.round(Math.sqrt(g / totalPixels));
            b = Math.round(Math.sqrt(b / totalPixels));
            a = Math.round(a / totalPixels);
        } else if (algo === 'dominant') {
            const counts = {};
            let max = 0;
            let dom = [0, 0, 0, 255];
            for (let i = 0; i < imageData.length; i += 4) {
                const key = `${Math.round(imageData[i] / 10) * 10},${Math.round(imageData[i + 1] / 10) * 10},${Math.round(imageData[i + 2] / 10) * 10}`;
                counts[key] = (counts[key] || 0) + 1;
                if (counts[key] > max) {
                    max = counts[key];
                    dom = [imageData[i], imageData[i + 1], imageData[i + 2], imageData[i + 3]];
                }
            }
            [r, g, b, a] = dom;
        }

        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
        const rgba = `rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(2)})`;
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        setResult({ hex, rgba, isDark: brightness < 128 });
    };

    useEffect(() => {
        if (image) analyzeImage(image, algorithm);
    }, [algorithm, image]);

    const copyToClipboard = (text, type) => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="bg-gray-50 font-manrope text-slate-800">

            {/* Main Content Area */}
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Main Workspace (Left) */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Upload Zone */}
                        <div
                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={(e) => {
                                e.preventDefault();
                                setIsDragging(false);
                                const file = e.dataTransfer.files[0];
                                if (file) processFile(file);
                            }}
                            className={`bg-white rounded-xl border-2 border-dashed transition-all relative overflow-hidden
                ${isDragging ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-200'}
                ${previewUrl ? 'p-2' : 'p-12 min-h-75 flex items-center justify-center'}`}
                        >
                            {!previewUrl ? (
                                <label className="flex flex-col items-center cursor-pointer text-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                        <Upload className="text-slate-400 w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-700">Click or Drag Image Here</h3>
                                    <p className="text-sm text-slate-400 mt-1">Supports PNG, JPG, WEBP</p>
                                    <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
                                </label>
                            ) : (
                                <div className="relative rounded-lg overflow-hidden bg-slate-50 group">
                                    <img src={previewUrl} alt="Preview" className="max-h-150 w-full object-contain mx-auto" />
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => { setImage(null); setPreviewUrl(null); setResult(null); }}
                                            className="bg-red-500 text-white p-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Results Display */}
                        {result && (
                            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Result Color Preview */}
                                    <div className="flex flex-col items-center gap-3">
                                        <div
                                            className="w-32 h-32 rounded-xl border border-slate-200 shadow-inner"
                                            style={{ backgroundColor: result.hex }}
                                        />
                                        <div className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${result.isDark ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
                                            {result.isDark ? 'Dark Color' : 'Light Color'}
                                        </div>
                                    </div>

                                    {/* Result Values */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">HEX Color</label>
                                            <div className="flex gap-2">
                                                <div className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg font-mono text-lg font-medium">
                                                    {result.hex}
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(result.hex, 'hex')}
                                                    className="px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                                                >
                                                    {copied === 'hex' ? <Check size={18} /> : <Copy size={18} />}
                                                    <span className="hidden md:inline">Copy</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">RGBA Color</label>
                                            <div className="flex gap-2">
                                                <div className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg font-mono text-lg font-medium">
                                                    {result.rgba}
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(result.rgba, 'rgba')}
                                                    className="px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                                                >
                                                    {copied === 'rgba' ? <Check size={18} /> : <Copy size={18} />}
                                                    <span className="hidden md:inline">Copy</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-1 font-bold text-slate-700">
                                <Settings size={18} className="text-slate-400" />
                                Algorithm Options
                            </div>
                            <div className="p-3 space-y-2">
                                {algorithms.map((algo) => (
                                    <button
                                        key={algo.id}
                                        onClick={() => setAlgorithm(algo.id)}
                                        className={`w-full flex items-start gap-3 p-2 rounded-lg border transition-all text-left group
                      ${algorithm === algo.id
                                                ? 'border-indigo-500 bg-indigo-50/50'
                                                : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                                    >
                                        <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
                      ${algorithm === algo.id ? 'border-indigo-500' : 'border-slate-300'}`}>
                                            {algorithm === algo.id && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
                                        </div>
                                        <div className="flex-1">
                                            <div className={`font-bold text-sm ${algorithm === algo.id ? 'text-indigo-700' : 'text-slate-700'}`}>
                                                {algo.name}
                                            </div>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                {algo.description}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden processing canvas */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Floating dynamic background effect */}
            {result && (
                <div
                    className="fixed inset-0 -z-10 opacity-[0.05] pointer-events-none transition-colors duration-1000"
                    style={{
                        backgroundImage: `radial-gradient(circle at top right, ${result.hex}, transparent)`
                    }}
                />
            )}
        </div>
    );
};

export default ImageAverageColorFind;