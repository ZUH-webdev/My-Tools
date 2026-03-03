import { useState, useMemo } from 'react';
import { RefreshCw, Copy, Maximize2, RotateCcw, ChevronDown } from 'lucide-react';

const PRESETS = {
    "Warm Feelings": { colors: ["#ff9a9e", "#fad0c4"], type: "linear" },
    "Shiny Purple": { colors: ["#a18cd1", "#fbc2eb"], type: "linear" },
    "Candy Cake": { colors: ["#5ee7df", "#b490d2"], type: "linear" },
    "Spring": { colors: ["#00f2fe", "#4facfe"], type: "linear" },
    "Metallic": { colors: ["#061700", "#52c234"], type: "linear" },
    "Neon Green": { colors: ["#2af598", "#009efd"], type: "linear" },
    "Night Sky": { colors: ["#1e3c72", "#2a5298"], type: "linear" },
    "Mango Juice": { colors: ["#ff8a00", "#da1b60"], type: "linear" },
    "Sky is the Limit": { colors: ["#11998e", "#38ef7d"], type: "linear" },
    "Almost Dark": { colors: ["#02aab0", "#00cdac"], type: "linear" },
    "Pinky": { colors: ["#dd5e89", "#f7bb97"], type: "linear" },
    "Red Love": { colors: ["#ff512f", "#dd2476"], type: "linear" },
    "Amour": { colors: ["#f77062", "#fe5196"], type: "linear" },
    "Skin": { colors: ["#fdfcfb", "#e2d1c3"], type: "linear" },
    "Sweet": { colors: ["#a8edea", "#fed6e3"], type: "linear" },
    "Neon Purple": { colors: ["#6a11cb", "#2575fc"], type: "linear" },
    "Barbie Girl": { colors: ["#ff9a9e", "#fecfef"], type: "linear" },
};

const GradientGenerator = () => {
    const [config, setConfig] = useState({
        startColor: "#474bff",
        midColor: "",
        endColor: "#bc48ff",
        useMid: false,
        type: "linear",
        angle: 0,
        reversed: false
    });

    const [showFullPreview, setShowFullPreview] = useState(false);
    const [copied, setCopied] = useState(false);

    // Computed gradient string
    const gradientString = useMemo(() => {
        const { startColor, midColor, endColor, useMid, type, angle, reversed } = config;
        let colors = useMid && midColor ? [startColor, midColor, endColor] : [startColor, endColor];
        if (reversed) colors = [...colors].reverse();

        const colorStops = colors.map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`).join(", ");

        return type === "linear"
            ? `linear-gradient(${angle}deg, ${colorStops})`
            : `radial-gradient(circle, ${colorStops})`;
    }, [config]);

    const handleShuffle = () => {
        const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        setConfig(prev => ({
            ...prev,
            startColor: randomHex(),
            midColor: prev.useMid ? randomHex() : "",
            endColor: randomHex()
        }));
    };

    const copyToClipboard = () => {
        const textToCopy = `background: ${config.startColor};\nbackground: -webkit-${gradientString};\nbackground: ${gradientString};`;

        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 md:p-10 font-manrope text-gray-700">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow border border-gray-100 overflow-hidden p-6 md:p-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Side: Preview */}
                    <div className="flex flex-col items-center gap-6">
                        <div
                            className="w-full aspect-square rounded-2xl shadow-inner transition-all duration-500"
                            style={{ background: gradientString }}
                        />
                        <button
                            onClick={() => setShowFullPreview(true)}
                            className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full hover:border-indigo-400 transition-colors font-medium"
                        >
                            <Maximize2 size={18} /> Full Screen Preview
                        </button>
                    </div>

                    {/* Right Side: Controls */}
                    <div className="space-y-6">
                        {/* Preset Dropdown */}
                        <div className="relative group">
                            <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs text-gray-400">Preset Gradients</label>
                            <select
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                                onChange={(e) => {
                                    const preset = PRESETS[e.target.value];
                                    if (preset) setConfig(prev => ({ ...prev, startColor: preset.colors[0], endColor: preset.colors[1], useMid: false }));
                                }}
                            >
                                <option>Custom Gradient</option>
                                {Object.keys(PRESETS).map(name => <option key={name} value={name}>{name}</option>)}
                            </select>
                            <ChevronDown className="absolute right-4 top-5 text-gray-400 pointer-events-none" size={18} />
                        </div>

                        {/* Color Inputs */}
                        <div className="grid gap-4">
                            {[
                                { label: 'Start Color', key: 'startColor' },
                                { label: 'Mid Color', key: 'midColor', optional: true },
                                { label: 'End Color', key: 'endColor' }
                            ].map((input) => (
                                <div key={input.key} className={`relative ${(input.optional && !config.useMid) ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                                    <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs text-gray-400">{input.label}</label>
                                    <div className="flex items-center border border-gray-200 rounded-xl p-3 gap-3">
                                        <input
                                            type="color"
                                            value={config[input.key] || '#ffffff'}
                                            onChange={(e) => setConfig({ ...config, [input.key]: e.target.value })}
                                            className="w-8 h-8 rounded cursor-pointer overflow-hidden border-none"
                                        />
                                        <input
                                            type="text"
                                            value={config[input.key] || (input.optional ? 'Not picked' : '')}
                                            onChange={(e) => setConfig({ ...config, [input.key]: e.target.value })}
                                            className="flex-1 focus:outline-none uppercase font-mono"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Shuffle Button */}
                        <button
                            onClick={handleShuffle}
                            className="w-full py-4 bg-indigo-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 shadow shadow-indigo-200 transition-all active:scale-95"
                        >
                            <RefreshCw size={20} /> Shuffle Colors
                        </button>

                        {/* Toggles and Radios */}
                        <div className="grid grid-cols-2 gap-4 items-center">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked={config.useMid} onChange={(e) => setConfig({ ...config, useMid: e.target.checked })} className="w-5 h-5 accent-indigo-600" />
                                <span className="text-sm font-medium">Use Mid Color</span>
                            </label>

                            <div className="flex items-center gap-4 justify-end">
                                {['linear', 'radial'].map(type => (
                                    <label key={type} className="flex items-center gap-2 cursor-pointer capitalize">
                                        <input
                                            type="radio"
                                            name="type"
                                            checked={config.type === type}
                                            onChange={() => setConfig({ ...config, type })}
                                            className="w-5 h-5 accent-indigo-600"
                                        />
                                        <span className="text-sm font-medium">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Angle Slider */}
                        <div className={`space-y-2 ${config.type === 'radial' ? 'opacity-30 pointer-events-none' : ''}`}>
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Angle: {config.angle}°</span>
                            </div>
                            <input
                                type="range" min="0" max="360" value={config.angle}
                                onChange={(e) => setConfig({ ...config, angle: e.target.value })}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>

                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={config.reversed} onChange={(e) => setConfig({ ...config, reversed: e.target.checked })} className="w-5 h-5 accent-indigo-600" />
                            <span className="text-sm font-medium">Reverse</span>
                        </label>
                    </div>
                </div>

                {/* CSS Code Output */}
                <div className="mt-12 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                    <p className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">CSS Output</p>
                    <div className="font-mono text-sm space-y-2 text-gray-600">
                        <p><span className="text-indigo-500">background:</span> {config.startColor};</p>
                        <p><span className="text-indigo-500">background:</span> -webkit-{gradientString};</p>
                        <p><span className="text-indigo-500">background:</span> {gradientString};</p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={() => setConfig({ startColor: "#474bff", midColor: "", endColor: "#bc48ff", useMid: false, type: "linear", angle: 0, reversed: false })}
                            className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 font-semibold"
                        >
                            <RotateCcw size={18} /> Reset
                        </button>
                        <button
                            onClick={copyToClipboard}
                            className={`flex-2 py-3 text-white rounded-xl flex items-center justify-center gap-2 transition-all font-semibold shadow-lg ${copied ? 'bg-green-500 shadow-green-100' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100'}`}
                        >
                            {copied ? (
                                <>
                                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied to Clipboard!
                                </>
                            ) : (
                                <>
                                    <Copy size={18} /> Copy CSS
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Full Screen Modal */}
            {showFullPreview && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300"
                    style={{ background: gradientString }}
                >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" />
                    <button
                        onClick={() => setShowFullPreview(false)}
                        className="bg-white/90 backdrop-blur px-8 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform"
                    >
                        Close Preview
                    </button>
                </div>
            )}
        </div>
    );
};

export default GradientGenerator;