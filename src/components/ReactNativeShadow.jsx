import { useState } from 'react';
import { Copy, Smartphone, Apple } from 'lucide-react';

const ReactNativeShadow = () => {
    const [color, setColor] = useState('#000000');
    const [depth, setDepth] = useState(4);
    const [copied, setCopied] = useState(false);

    const hexToRGBA = (hex, opacity) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const shadowStyles = {
        shadowColor: color,
        shadowOffset: { width: 0, height: Math.round(depth / 2) },
        shadowOpacity: parseFloat((0.1 + (depth / 50)).toFixed(2)),
        shadowRadius: parseFloat((depth * 0.8).toFixed(2)),
        elevation: depth,
    };

    const codeString = `shadowColor: "${shadowStyles.shadowColor}",
shadowOffset: {
  width: ${shadowStyles.shadowOffset.width},
  height: ${shadowStyles.shadowOffset.height},
},
shadowOpacity: ${shadowStyles.shadowOpacity},
shadowRadius: ${shadowStyles.shadowRadius},
elevation: ${shadowStyles.elevation}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-2 md:p-12 font-manrope">
            <div className="max-w-5xl mx-auto">

                {/* TOP SECTION: Controls */}
                <div className="flex flex-col md:flex-row gap-6 pb-8">
                    <div className="w-full md:w-1/4">
                        <label className="text-xs font-medium text-slate-600 mb-2 block">Shadow Color</label>
                        <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg bg-white">
                            <input
                                type="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="w-8 h-8 cursor-pointer bg-transparent border border-gray-100"
                            />
                            <span className="text-sm uppercase font-semibold">{color}</span>
                        </div>
                    </div>

                    <div className="w-full md:w-3/4">
                        <div className="flex gap-2 justify-start">
                            <label className="text-xs font-medium text-slate-600 pb-6">Shadow Depth:</label>
                            <span className="text-sm font-bold text-indigo-600">{depth}</span>
                        </div>
                        <input
                            type="range" min="1" max="24" value={depth}
                            onChange={(e) => setDepth(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>
                </div>

                {/* BOTTOM SECTION: Previews */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex justify-around items-start gap-4">
                        {/* iOS */}
                        <div className="flex flex-col items-center flex-1">
                            <div className="flex items-center gap-1 text-[12px] font-bold text-slate-400 uppercase mb-3">
                                <Apple size={16} /> iOS
                            </div>
                            <div className="w-full h-72 bg-white rounded-t-[2.5rem] border-x-4 border-t-4 border-slate-200 relative overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-200 rounded-b-lg" />
                                <div className="flex justify-center mt-12">
                                    <div
                                        className="mt-10 bg-white rounded-xl transition-all duration-300 w-25 h-25 md:w-35 md:h-35"
                                        style={{
                                            boxShadow: `0px ${shadowStyles.shadowOffset.height}px ${shadowStyles.shadowRadius}px ${hexToRGBA(color, shadowStyles.shadowOpacity)}`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Android */}
                        <div className="flex flex-col items-center flex-1">
                            <div className="flex items-center gap-1 text-[12px] font-bold text-slate-400 uppercase mb-3">
                                <Smartphone size={16} /> Android
                            </div>
                            <div className="w-full h-72 bg-white rounded-t-3xl border-x-4 border-t-4 border-slate-200 relative overflow-hidden">
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-300 rounded-full" />
                                <div className="flex justify-center mt-12">
                                    <div
                                        className="mt-10 bg-white rounded-md transition-all duration-300 w-25 h-25 md:w-35 md:h-35"
                                        style={{
                                            boxShadow: `0px ${shadowStyles.shadowOffset.height * 1.5}px ${shadowStyles.shadowRadius * 1.2}px ${hexToRGBA(color, shadowStyles.shadowOpacity * 0.7)}`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Box */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-2xl p-4 pl-8 shadow-xl border border-gray-200 min-h-55">
                            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-widest block mb-4">React Native Shadow Style</label>
                            <pre className="text-indigo-500 font-mono text-sm leading-relaxed overflow-x-auto">
                                {codeString}
                            </pre>
                        </div>

                        <button
                            onClick={handleCopy}
                            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white transition-all active:scale-[0.98] ${copied ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700 shadow shadow-indigo-100'}`}
                        >
                            <Copy size={18} />
                            {copied ? 'Copied to Clipboard!' : 'Copy Code'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactNativeShadow;