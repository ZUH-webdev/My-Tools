import { useState, useEffect, useRef } from 'react';
import { Shuffle, Download, Copy, Check, ChevronDown } from 'lucide-react';

const BlobGenerator = () => {
    // --- States ---
    const [color, setColor] = useState('#474bff');
    const [growth, setGrowth] = useState(5);
    const [edgeCount, setEdgeCount] = useState(8);
    const [useImage, setUseImage] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [path, setPath] = useState('');
    const [copied, setCopied] = useState(false);
    const [isExportOpen, setIsExportOpen] = useState(false);

    const dropdownRef = useRef(null);

    // --- Logic: Pure function to calculate path string ---
    const calculatePath = (currentGrowth, currentEdges) => {
        const size = 400;
        const center = size / 2;
        const variability = (10 - currentGrowth) * 20;
        const radius = 100;
        const points = [];
        const angleStep = (Math.PI * 2) / currentEdges;

        for (let i = 0; i < currentEdges; i++) {
            const theta = i * angleStep;
            const delta = Math.random() * variability;
            const r = radius + delta;
            points.push({
                x: center + r * Math.cos(theta),
                y: center + r * Math.sin(theta)
            });
        }

        // Connect points with Quadratic Curves
        let d = `M ${(points[0].x + points[points.length - 1].x) / 2} ${(points[0].y + points[points.length - 1].y) / 2}`;
        for (let i = 0; i < points.length; i++) {
            const pCurrent = points[i];
            const pNext = points[(i + 1) % points.length];
            const midX = (pCurrent.x + pNext.x) / 2;
            const midY = (pCurrent.y + pNext.y) / 2;
            d += ` Q ${pCurrent.x} ${pCurrent.y}, ${midX} ${midY}`;
        }
        return d + ' Z';
    };

    // --- Effect: Run only once on Mount or when specific sliders change ---
    useEffect(() => {
        const newPath = calculatePath(growth, edgeCount);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPath(newPath);
    }, [growth, edgeCount]);

    // --- Handlers ---
    const handleShuffle = () => {
        setPath(calculatePath(growth, edgeCount));
    };

    const handleCopy = async () => {
        const svgElement = document.getElementById('blob-svg');
        if (svgElement) {
            await navigator.clipboard.writeText(svgElement.outerHTML);
            setCopied(true);
            setIsExportOpen(false);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        const svgElement = document.getElementById('blob-svg');
        if (svgElement) {
            const svgData = svgElement.outerHTML;
            const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "blob.svg";
            link.click();
            URL.revokeObjectURL(url);
            setIsExportOpen(false);
        }
    };

    // Close dropdown on outside click
    useEffect(() => {
        const closeMenu = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsExportOpen(false);
            }
        };
        document.addEventListener("mousedown", closeMenu);
        return () => document.removeEventListener("mousedown", closeMenu);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center font-manrope">
            {/* <Sidebar /> */}
            <div className="bg-gray-50 rounded-2xl shadow p-6 md:p-10 flex flex-col md:flex-row gap-10 max-w-5xl w-full border border-gray-100">

                {/* SVG Preview Section */}
                <div className="flex-1 bg-white border border-gray-50 rounded-3xl flex items-center justify-center min-h-87.5 shadow-inner relative overflow-hidden">
                    <svg id="blob-svg" viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            {useImage && imageUrl && (
                                <pattern id="pattern" patternUnits="userSpaceOnUse" width="400" height="400">
                                    <image href={imageUrl} x="0" y="0" width="400" height="400" preserveAspectRatio="xMidYMid slice" />
                                </pattern>
                            )}
                        </defs>
                        <path d={path} fill={useImage && imageUrl ? "url(#pattern)" : color} className="transition-all duration-500 ease-in-out" />
                    </svg>
                </div>

                {/* Controls Section */}
                <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Blob Fill Color</p>
                        <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-200">
                            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 border-none cursor-pointer bg-transparent rounded-xl" />
                            <span className="font-semibold text-gray-700 uppercase tracking-tighter">{color}</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-bold text-gray-500">
                                <span>Growth: {growth}</span>
                            </div>
                            <input type="range" min="1" max="9" value={growth} onChange={(e) => setGrowth(parseInt(e.target.value))} className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-bold text-gray-500">
                                <span>Edge Count: {edgeCount}</span>
                            </div>
                            <input type="range" min="3" max="20" value={edgeCount} onChange={(e) => setEdgeCount(parseInt(e.target.value))} className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-50 space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" checked={useImage} onChange={(e) => setUseImage(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <span className="text-gray-600 font-bold text-sm uppercase">Use Image Background</span>
                        </label>
                        {useImage && (
                            <input type="text" placeholder="Paste Image URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm" />
                        )}
                    </div>

                    <div className="flex gap-4 pt-4 relative">
                        <button onClick={handleShuffle} className="flex-[1.5] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold 
                        py-3 px-6 rounded-full shadow-xl shadow-blue-100 active:scale-95 transition-all">
                            <Shuffle size={20} /> Shuffle
                        </button>

                        <div className="flex-2 relative" ref={dropdownRef}>
                            <button onClick={() => setIsExportOpen(!isExportOpen)} className="w-full h-full border-2 border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
                                Export <ChevronDown size={20} className={`transition-transform ${isExportOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isExportOpen && (
                                <div className="absolute bottom-full mb-4 left-0 w-full min-w-50 bg-white border border-gray-100 rounded-3xl shadow-2xl z-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2">
                                    <button onClick={handleCopy} className="w-full flex items-center gap-3 p-5 hover:bg-blue-50 text-gray-700 font-bold text-sm transition-colors border-b border-gray-50">
                                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-blue-500" />}
                                        {copied ? 'Copied!' : 'Copy SVG Code'}
                                    </button>
                                    <button onClick={handleDownload} className="w-full flex items-center gap-3 p-5 hover:bg-blue-50 text-gray-700 font-bold text-sm transition-colors">
                                        <Download size={18} className="text-blue-500" /> Download .SVG
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlobGenerator;