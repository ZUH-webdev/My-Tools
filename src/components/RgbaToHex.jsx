import { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import { convertRgbaToAll } from '../utils/convertRgbaToHex'; 

const RgbaToHex = () => {
    const [rgbaInput, setRgbaInput] = useState("");
    const [result, setResult] = useState({ hex: "", rgba: "—", hsla: "—" });
    const [copiedField, setCopiedField] = useState("");
    const [error, setError] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "error" });

    // 1. Helper function
    const showToast = (msg, type = "error") => {
        setToast({ show: true, message: msg, type: type });
        setTimeout(() => setToast({ show: false, message: "", type: "error" }), 3500);
    };

    const handleConvert = () => {
        const data = convertRgbaToAll(rgbaInput);

        if (data.error) {
            setError(true);
            showToast(data.message, "error");
            setResult({ hex: "—", rgba: "", hsla: "—" });
        } else {
            setError(false);
            setResult(data);
            showToast("Converted successfully!", "success");
        }
    };

    const copyToClipboard = (text, field) => {
        if (!text || text === "—") return;
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(""), 2000);
    };

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-2 space-y-10 font-manrope mt-6">
            {/* Row 1: Input Boxes */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-6">

                {/* RGBA Input Box */}
                <div className="flex-1 relative group">
                    <div className="absolute top-1 left-4">
                        <span className="text-[12px] font-bold text-slate-600 tracking-widest">RGBA</span>
                    </div>
                    <input
                        type="text"
                        value={rgbaInput}
                        onChange={(e) => {
                            setRgbaInput(e.target.value);
                            if (error) setError(false);
                        }}
                        className={`w-full pt-6 pb-3 px-4 py-4 rounded-lg border bg-white focus:ring-1 focus:ring-indigo-400 outline-none text-lg font-semibold transition-all ${error
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-300 focus:border-indigo-500'
                            }`}
                        placeholder="rgba(0, 0, 0, 1)"
                    />
                </div>

                {/* Convert Button */}
                <div className="flex justify-center items-center">
                    <button
                        onClick={handleConvert}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-lg flex items-center gap-2 font-semibold transition-all active:scale-95 whitespace-nowrap"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Convert
                    </button>
                </div>

                {/* Hex Output Box */}
                <div className="flex-1 relative group">
                    <div className="absolute top-1 left-4">
                        <span className="text-[12px] font-bold text-slate-600 tracking-widest">Hex</span>
                    </div>
                    <input
                        type="text"
                        readOnly
                        value={result.hex}
                        className="w-full pt-6 pb-3 px-4 py-4 rounded-lg border border-gray-300 bg-white text-lg font-semibold text-slate-600 outline-none"
                        placeholder="#000000"
                    />
                </div>
            </div>

            {/* Row 2: Secondary Button */}
            <div className="flex justify-center md:justify-end">
                <button
                    onClick={() => copyToClipboard(result.hex, 'main-hex')}
                    className={`group flex items-center gap-2 px-8 py-3 rounded-full border transition-all active:scale-95 font-bold ${copiedField === 'main-hex'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'
                        }`}
                >
                    {copiedField === 'main-hex' ? (
                        <Check className="w-4 h-4 stroke-[3px]" />
                    ) : (
                        <Copy className="w-4 h-4 stroke-[3px]" />
                    )}
                    <span>
                        {copiedField === 'main-hex' ? 'Copied!' : 'Copy HEX Color'}
                    </span>
                </button>
            </div>

            {/* Row 3: Result Preview Card */}
            <div className="flex justify-center pt-6">
                <div className="bg-white rounded-lg border border-gray-200 flex flex-col md:flex-row w-full max-w-lg overflow-hidden min-h-40">
                    <div
                        className="w-full md:w-1/3 min-h-20 md:min-h-full transition-all duration-500 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200"
                        style={{ backgroundColor: result.hex || '#f1f2fb' }}
                    >
                        {!result.hex || result.hex === "—" ? (
                            <span className="text-6xl font-bold text-slate-300">?</span>
                        ) : null}
                        <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity"></div>
                    </div>

                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center space-y-5">
                        <div className="flex flex-col">
                            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Hex</p>
                            <div onClick={() => copyToClipboard(result.hex, 'hex')} className="flex items-center justify-between cursor-pointer group/item">
                                <p className="text-base font-semibold text-slate-700 transition-colors group-hover/item:text-indigo-600">{result.hex || "—"}</p>
                                <div className="opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity text-slate-400">
                                    {copiedField === 'hex' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-indigo-600" />}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">RGBA</p>
                            <div onClick={() => copyToClipboard(result.rgba, 'rgba')} className="flex items-center justify-between cursor-pointer group/item">
                                <p className="text-base font-semibold text-slate-700 transition-colors group-hover/item:text-indigo-600">{result.rgba || "—"}</p>
                                <div className="opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity text-slate-400">
                                    {copiedField === 'rgba' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-indigo-600" />}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">HSLA</p>
                            <div onClick={() => copyToClipboard(result.hsla, 'hsla')} className="flex items-center justify-between cursor-pointer group/item">
                                <p className="text-base font-semibold text-slate-700 transition-colors group-hover/item:text-indigo-600">{result.hsla || "—"}</p>
                                <div className="opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity text-slate-400">
                                    {copiedField === 'hsla' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-indigo-600" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast */}
            {toast.show && (
                <div className="fixed top-5 right-5 z-100 animate-in slide-in-from-right duration-300">
                    <div className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border-l-4 min-w-62.5 bg-white ${toast.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
                        <div className={`p-1.5 rounded-full ${toast.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {toast.type === 'success' ? <Check className="w-4 h-4" /> : <span className="font-bold text-lg leading-none">!</span>}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-slate-800">{toast.type === 'success' ? 'Success' : 'Error'}</p>
                            <p className="text-xs text-slate-500">{toast.message}</p>
                        </div>
                        <button onClick={() => setToast({ ...toast, show: false })} className="text-slate-300 hover:text-slate-500 transition-colors">
                            <span className="text-xl">×</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RgbaToHex;