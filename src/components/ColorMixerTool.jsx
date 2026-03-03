import { useState, useRef, useEffect } from 'react';
import { Copy, Check, RotateCcw, ChevronDown } from 'lucide-react';

const ColorMixerTool = () => {
    const [color1, setColor1] = useState(null);
    const [color2, setColor2] = useState(null);
    const [steps, setSteps] = useState(1);
    const [mixedPalette, setMixedPalette] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [copiedId, setCopiedId] = useState(null);
    const dropdownRef = useRef(null);

    // 1. Outside Click Logic
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Helpers
    const hexToRgb = (hex) => {
        if (!hex) return { r: 0, g: 0, b: 0 };
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };

    const rgbToHex = (r, g, b) => {
        const toHex = (c) => Math.round(c).toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const rgbToHsl = (r, g, b) => {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
                default: h = 0;
            }
            h /= 6;
        }
        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };

    const handleMix = () => {
        if (!color1 || !color2) return;
        const c1 = hexToRgb(color1);
        const c2 = hexToRgb(color2);
        const results = [];

        results.push({ label: "Start Color", hex: color1.toLowerCase(), rgb: `rgb(${c1.r}, ${c1.g}, ${c1.b})`, hsl: rgbToHsl(c1.r, c1.g, c1.b) });

        for (let i = 1; i <= steps; i++) {
            const ratio = i / (steps + 1);
            const r = Math.round(c1.r + (c2.r - c1.r) * ratio);
            const g = Math.round(c1.g + (c2.g - c1.g) * ratio);
            const b = Math.round(c1.b + (c2.b - c1.b) * ratio);
            const hex = rgbToHex(r, g, b);
            results.push({ label: `Step ${i}`, hex: hex, rgb: `rgb(${r}, ${g}, ${b})`, hsl: rgbToHsl(r, g, b) });
        }

        results.push({ label: "End Color", hex: color2.toLowerCase(), rgb: `rgb(${c2.r}, ${c2.g}, ${c2.b})`, hsl: rgbToHsl(c2.r, c2.g, c2.b) });
        setMixedPalette(results);
    };

    const handleReset = () => {
        setColor1(null);
        setColor2(null);
        setSteps(1);
        setMixedPalette([]);
    };

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1500);
    };

    // Card UI Function
    const resultCard = (item, idx) => (
        <div key={idx} className="flex flex-col space-y-2 max-w-lg mx-auto w-full">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                {item ? item.label : "Preview"}
            </span>
            <div className="bg-white rounded-lg border border-gray-300 flex flex-row w-full overflow-hidden shadow-sm h-32 md:h-40 relative group/card">
                <div
                    className={`w-1/3 md:w-5/12 h-full flex items-center justify-center transition-colors duration-500 ${!item ? 'bg-slate-300' : ''}`}
                    style={{ backgroundColor: item?.hex }}
                >
                    {!item && <span className="text-5xl font-bold text-slate-500">?</span>}
                </div>

                <div className="w-2/3 md:w-9/12 p-4 md:px-8 flex flex-col justify-center gap-2 bg-white">
                    {['Hex', 'RGBA', 'HSLA'].map((type) => {
                        const val = item ? (type === 'Hex' ? item.hex : type === 'RGBA' ? item.rgb : item.hsl) : '—';
                        const id = `${idx}-${type}`;
                        return (
                            <div key={type} className="flex items-center group/item">
                                <div className="space-y-0.5">
                                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{type}</p>
                                    <p className={`font-bold uppercase ${type === 'Hex' ? 'text-sm md:text-lg text-slate-800' : 'text-[10px] md:text-xs text-slate-500'}`}>
                                        {val}
                                    </p>
                                </div>
                                {item && (
                                    <button
                                        onClick={() => copyToClipboard(val, id)}
                                        className="p-1.5 pt-4 text-indigo-600 transition-all active:scale-90 md:opacity-0 md:group-hover/item:opacity-100"
                                    >
                                        {copiedId === id ? <Check size={13} /> : <Copy size={13} />}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div className="mb-6 max-w-5xl mx-auto p-4 md:p-2 space-y-8 font-manrope">
            {/* Row 1: Integrated Pickers */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                    { label: "Start Color", val: color1, setter: setColor1 },
                    { label: "End Color", val: color2, setter: setColor2 }
                ].map((picker, i) => (
                    <div key={i} className="md:col-span-2 relative">
                        <div className="absolute left-4 top-2 z-10 uppercase text-[10px] font-bold text-slate-500 tracking-widest">{picker.label}</div>
                        <div className="flex items-center w-full border border-gray-300 rounded-lg bg-white h-15 px-4 pt-4">
                            {/* Visual Picker Circle */}
                            <label className="relative w-7 h-7 rounded-full border border-gray-300 shrink-0 cursor-pointer overflow-hidden">
                                <input
                                    type="color"
                                    className="absolute inset-0 opacity-0 cursor-pointer scale-150"
                                    value={picker.val || "#ffffff"}
                                    onChange={(e) => picker.setter(e.target.value)}
                                />
                                <div
                                    className="w-full h-full flex items-center justify-center transition-all"
                                    style={{ backgroundColor: picker.val || '#f8fafc' }}
                                >
                                    {!picker.val && <span className="text-slate-400 font-bold text-xs">?</span>}
                                </div>
                            </label>
                            <input
                                type="text"
                                placeholder="Pick Color"
                                value={picker.val ? picker.val.toUpperCase() : ""}
                                onChange={(e) => picker.setter(e.target.value)}
                                className="flex-1 bg-transparent text-lg font-bold text-slate-700 outline-none pl-4 uppercase placeholder:text-slate-300"
                            />
                        </div>
                    </div>
                ))}

                {/* Steps Dropdown with Ref */}
                <div className="md:col-span-1 relative" ref={dropdownRef}>
                    <div className="absolute left-4 top-2 z-10 uppercase text-[10px] font-bold text-slate-500 tracking-widest">Steps</div>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full border border-gray-300 rounded-lg bg-white h-15 px-4 pt-4 flex items-center justify-between text-lg font-bold text-slate-700 hover:border-indigo-400 transition-colors"
                    >
                        {steps} <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-xl z-50 max-h-48 overflow-y-auto p-1 animate-in fade-in zoom-in-95">
                            {[...Array(10)].map((_, i) => (
                                <div key={i + 1} onClick={() => { setSteps(i + 1); setIsDropdownOpen(false); }} className="flex items-center justify-between px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-lg cursor-pointer font-bold text-slate-600">
                                    {i + 1} {steps === i + 1 && <Check size={14} className="text-indigo-600" />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Row 2: Actions */}
            <div className="flex justify-center gap-4">
                <button onClick={handleReset} className="px-10 py-3 rounded-full border border-gray-300 font-bold text-slate-600 hover:text-slate-700 flex items-center gap-2 bg-white transition-all"><RotateCcw size={16} /> Reset</button>
                <button onClick={handleMix} disabled={!color1 || !color2} className="px-10 py-3 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50">Mix Colors</button>
            </div>

            {/* Row 3: Result Cards Area */}
            <div className="space-y-6">
                {mixedPalette.length > 0 ? (
                    mixedPalette.map((item, idx) => resultCard(item, idx))
                ) : (
                    <div className="opacity-70">{resultCard(null, "empty")}</div>
                )}
            </div>

            {/* Row 4: Copy All */}
            <div className="flex justify-center pt-4">
                <button
                    disabled={mixedPalette.length === 0}
                    onClick={() => copyToClipboard(mixedPalette.map(p => p.hex).join(', '), 'all')}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all active:scale-95 
                   hover:bg-indigo-700 hover:shadow-indigo-200 
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:bg-indigo-600"
                >
                    {copiedId === 'all' ? <Check size={18} /> : <Copy size={18} />}
                    Copy All Colors
                </button>
            </div>
        </div>
    );
};

export default ColorMixerTool;