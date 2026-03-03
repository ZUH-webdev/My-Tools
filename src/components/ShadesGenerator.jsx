import { useState, useCallback, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';

const ShadesGenerator = () => {
    const [baseColor, setBaseColor] = useState("#d61313");
    const [stepSize, setStepSize] = useState(14);
    const [stepCount, setStepCount] = useState(3);
    const [selectedColor, setSelectedColor] = useState("#d61313");
    const [copiedIndex, setCopiedIndex] = useState(null);
    const [toast, setToast] = useState({ show: false, message: "" });

    const hexToRgb = useCallback((hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }, []);

    const componentToHex = (c) => {
        const hex = Math.max(0, Math.min(255, Math.round(c))).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const rgbToHex = useCallback((r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }, []);


    const shades = useMemo(() => {
    const rgb = hexToRgb(baseColor);
    let lighter = [];
    let darker = [];

    // Lighter shades calculation
    for (let i = 1; i <= stepCount; i++) {
        const factor = (i / stepCount) * (stepSize / 100);
        
        lighter.unshift(rgbToHex(
            rgb.r + (255 - rgb.r) * factor,
            rgb.g + (255 - rgb.g) * factor,
            rgb.b + (255 - rgb.b) * factor
        ));
    }

    // Darker shades calculation
    for (let i = 1; i <= stepCount; i++) {
        const factor = (i / stepCount) * (stepSize / 100);
        
        darker.push(rgbToHex(
            Math.max(0, rgb.r * (1 - factor)),
            Math.max(0, rgb.g * (1 - factor)),
            Math.max(0, rgb.b * (1 - factor))
        ));
    }

    return [...lighter, baseColor.toLowerCase(), ...darker];
}, [baseColor, stepCount, stepSize, hexToRgb, rgbToHex]);



    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    const copyAll = () => {
        navigator.clipboard.writeText(JSON.stringify(shades));
        setToast({ show: true, message: "All colors copied!" });
        setTimeout(() => setToast({ show: false, message: "" }), 3000);
    };

    const activeRgb = hexToRgb(selectedColor);

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-2 space-y-10 font-manrope mt-4 mb-4">

            {/* Row 1: Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="relative flex-1 group">
                    <div className="absolute left-4 z-10 pointer-events-none">
                        <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">Color</span>
                    </div>
                    <div className="flex items-center w-full border border-gray-300 rounded-lg bg-white h-15 px-4 transition-all focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-100">
                        <div className="relative flex items-center justify-center">
                            <input
                                type="color"
                                value={baseColor}
                                onChange={(e) => setBaseColor(e.target.value)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div
                                className="w-7 h-7 mt-4 rounded-full border border-white shadow-md transition-transform active:scale-90"
                                style={{ backgroundColor: baseColor }}
                            ></div>
                        </div>
                        <input
                            type="text"
                            value={baseColor.toUpperCase()}
                            onChange={(e) => setBaseColor(e.target.value)}
                            placeholder="#000000"
                            className="flex-1 bg-transparent text-lg font-bold text-slate-700 outline-none pl-4 pt-4 uppercase tracking-tight"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex text-[12px] font-bold text-slate-600">
                        <span>Darken/Lighten Step: <b className="text-indigo-600">{stepSize}%</b></span>
                    </div>
                    <input type="range" min="1" max="100" value={stepSize} onChange={(e) => setStepSize(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between text-[12px] font-bold text-slate-600">
                        <span>Step Count: <b className="text-indigo-600">{stepCount}±</b></span>
                    </div>
                    <input type="range" min="1" max="5" value={stepCount} onChange={(e) => setStepCount(parseInt(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                </div>
            </div>

            {/* Row 2: Responsive Grid Palette */}
            <div className="border border-gray-300 rounded-lg overflow-hidden grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-nowrap shadow">
                {shades.map((color, index) => (
                    <div
                        key={index}
                        className="flex-1 min-w-0 flex flex-col cursor-pointer group relative transition-all duration-300 h-28 md:h-auto md:min-h-45"
                        onClick={() => setSelectedColor(color)}
                    >
                        <div className={`w-full flex-1 transition-all ${selectedColor === color ? 'ring-4 ring-indigo-600 ring-inset' : ''}`} style={{ backgroundColor: color }}></div>

                        {/* Mobile & Desktop Info Bar */}
                        <div className="h-10 md:h-12 bg-white flex items-center justify-center border-t border-gray-100 relative overflow-hidden px-1">
                            <div className="flex items-center gap-1 md:group-hover:opacity-0 transition-opacity">
                                <span className="text-[8px] md:text-[11px] font-bold text-slate-500 uppercase">{color}</span>
                                {/* Mobile-only Copy Icon */}
                                <div className="md:hidden text-slate-400" onClick={(e) => { e.stopPropagation(); copyToClipboard(color, index); }}>
                                    {copiedIndex === index ? <Check size={10} className="text-green-500" /> : <Copy size={10} />}
                                </div>
                            </div>

                            {/* Desktop Hover Button */}
                            <button
                                onClick={(e) => { e.stopPropagation(); copyToClipboard(color, index); }}
                                className="hidden md:flex absolute inset-0 bg-indigo-600 text-white items-center justify-center gap-1 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
                            >
                                {copiedIndex === index ? <Check size={12} /> : <Copy size={12} />}
                                <span className="text-[10px] font-bold uppercase tracking-wider">Copy</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Row 3: Copy All Button */}
            <div className="flex justify-center pt-4">
                <button onClick={copyAll} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full flex items-center gap-3 font-bold transition-all active:scale-95 shadow text-sm md:text-base">
                    <Copy size={18} /> Copy All Colors
                </button>
            </div>

            {/* Row 4: Detail Preview Card */}
            <div className="flex justify-center pt-6 px-4">
                <div className="bg-white rounded-lg border border-gray-300 flex flex-row w-full max-w-sm md:max-w-lg overflow-hidden shadow h-32 md:h-48">

                    {/* Left Side Color Box */}
                    <div className="w-1/3 md:w-5/12 transition-colors duration-500 h-full" style={{ backgroundColor: selectedColor }}></div>

                    {/* Right Side Details */}
                    <div className="w-2/3 md:w-7/12 p-4 md:p-8 flex flex-col justify-center gap-4 md:gap-6">

                        {/* Hex Section */}
                        <div className="group/item relative">
                            <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Hex</p>
                            <div
                                className="flex items-center gap-2 cursor-pointer w-fit"
                                onClick={() => copyToClipboard(selectedColor.toUpperCase(), 'hex-detail')}
                            >
                                <p className="text-lg md:text-xl font-bold text-slate-800 uppercase tracking-tight">
                                    {selectedColor}
                                </p>

                                <div className="text-indigo-600 transition-all duration-200 md:opacity-0 md:group-hover/item:opacity-100">
                                    {copiedIndex === 'hex-detail' ? <Check size={14} /> : <Copy size={14} />}
                                </div>
                            </div>
                        </div>

                        {/* RGBA Section */}
                        <div className="group/item relative">
                            <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">RGBA</p>
                            <div
                                className="flex items-center gap-2 cursor-pointer w-fit"
                                onClick={() => copyToClipboard(`rgb(${activeRgb.r}, ${activeRgb.g}, ${activeRgb.b})`, 'rgba-detail')}
                            >
                                <p className="text-lg md:text-xl font-bold text-slate-800 leading-none">
                                    rgb({activeRgb.r}, {activeRgb.g}, {activeRgb.b})
                                </p>

                                <div className="text-indigo-600 transition-all duration-200 md:opacity-0 md:group-hover/item:opacity-100">
                                    {copiedIndex === 'rgba-detail' ? <Check size={14} /> : <Copy size={14} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {toast.show && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-3 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300 font-bold z-50">
                    {toast.message}
                </div>
            )}
        </div>
    );
};

export default ShadesGenerator;