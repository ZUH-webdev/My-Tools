import { useState, useEffect, useRef } from 'react';
import { Sparkles, MonitorPlay, Download, ChevronDown, Check, Loader2, X, Copy } from 'lucide-react';
import { fetchAIColors } from '../api/colorGenerateApi';

const CustomSelect = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('Light');
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative flex-1" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 bg-white cursor-pointer flex justify-between items-center"
            >
                <div>
                    <label className="block text-xs font-medium text-slate-600">Theme</label>
                    <span className="text-sm font-semibold">{theme}</span>
                </div>
                <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg z-10 overflow-hidden p-1">
                    {['Light', 'Dark'].map((opt) => (
                        <div key={opt} onClick={() => { setTheme(opt); onChange(opt); setIsOpen(false); }} className={`px-3 py-2 text-sm rounded-md cursor-pointer transition-all flex items-center justify-between mb-0.5 last:mb-0 ${value === opt ? "bg-indigo-50 text-indigo-700 font-bold" : "text-gray-600 hover:bg-gray-100 hover:pl-4"}`}>
                            {opt}
                            {value === opt && <Check size={14} className="text-indigo-600" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const AIColorGenerator = () => {
    const [config, setConfig] = useState({ theme: "Light", prompt: "" });
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExportOpen, setIsExportOpen] = useState(false);
    const [colors, setColors] = useState(null);
    const [copiedText, setCopiedText] = useState("");
    const [toast, setToast] = useState({ show: false, message: "", type: "error" });

    const handleQuickCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 2000);
    };

    const showToast = (msg, type = "error") => {
        setToast({ show: true, message: msg, type: type });
        setTimeout(() => setToast({ show: false, message: "", type: "error" }), 3500);
    };

    const handleGenerate = async () => {
        if (!config.prompt || config.prompt.trim() === '') {
            showToast("Please enter a prompt first!", "warning");
            return;
        }

        setLoading(true);
        try {
            const data = await fetchAIColors(config.prompt, config.theme);
            setColors(data);
            showToast("Palette generated successfully!", "success");
        } catch (err) {
            showToast(err.message || "Generation failed!", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-manrope text-slate-700">
            <div className="max-w-5xl mx-auto space-y-10">

                {/* ROW 1: Input & Dropdown/Button */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-7 relative">
                        <div className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus-within:ring-2 ring-indigo-500 transition-all">
                            <label className="block text-xs font-medium text-slate-600 mb-1">Prompt</label>
                            <input
                                type="text"
                                value={config.prompt}
                                onChange={(e) => setConfig({ ...config, prompt: e.target.value })}
                                placeholder="Enter prompt to generate color palette..."
                                className="w-full outline-none text-slate-700 bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-5 flex gap-3">
                        <CustomSelect value={config.theme} onChange={(v) => setConfig({ ...config, theme: v })} />
                        <button
                            onClick={handleGenerate}
                            disabled={loading}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-full font-bold flex items-center gap-2 shadow shadow-indigo-200 transition-all active:scale-95 disabled:opacity-70"
                        >
                            {loading ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                            Generate
                        </button>
                    </div>
                </div>

                {/* ROW 2: Color Palette Boxes */}
                <div className="text-center space-y-4">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Color Palette</h3>
                    <div className="flex flex-wrap justify-center">
                        {(colors?.palette || Array(12).fill("#E2E8F0")).map((color, i) => (
                            <div
                                key={i}
                                style={{ backgroundColor: color }}
                                className="w-6 h-6 md:w-10 md:h-10 border border-gray-300 first:rounded-l-lg last:rounded-r-lg transition-colors duration-500"
                            />
                        ))}
                    </div>
                </div>

                {/* ROW 3 & 4: 2x2 Grid Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['Primary', 'Accent', 'Background', 'Text'].map((label) => {
                        const colorData = colors?.main[label.toLowerCase()];
                        return (
                            <div key={label} className="space-y-2">
                                <span className="text-sm font-semibold text-slate-500">{label}</span>
                                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden flex h-35">
                                    {/* Section 1: Color Preview / Loader */}
                                    <div
                                        style={{ backgroundColor: colorData?.hex || '#f1f5f9' }}
                                        className="w-1/3 flex items-center justify-center border-r border-gray-300 transition-colors duration-500"
                                    >
                                        {!colorData && (
                                            loading ? <Loader2 className="animate-spin text-indigo-400" size={32} /> : <span className="text-6xl text-slate-300 font-light">?</span>
                                        )}
                                    </div>
                                    {/* Section 2 & 3: HEX and RGBA Details */}
                                    <div className="w-2/3 p-6 flex flex-col justify-center space-y-4">
                                        {/* HEX Row */}
                                        <div className="group relative">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hex</p>
                                            <div
                                                onClick={() => handleQuickCopy(colorData?.hex)}
                                                className="flex items-center gap-2 cursor-pointer group/item"
                                            >
                                                <p className="text-lg font-mono font-bold text-slate-700 transition-colors group-hover/item:text-indigo-600">
                                                    {colorData?.hex || "—"}
                                                </p>
                                                <div className="opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity text-slate-400">
                                                    {copiedText === colorData?.hex ? (
                                                        <Check className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 hover:text-indigo-600" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* RGBA Row */}
                                        <div className="group relative">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">RGBA</p>
                                            <div
                                                onClick={() => handleQuickCopy(colorData?.rgba)}
                                                className="flex items-center gap-2 cursor-pointer group/item"
                                            >
                                                <p className="text-sm font-mono text-slate-500 transition-colors group-hover/item:text-indigo-600">
                                                    {colorData?.rgba || "—"}
                                                </p>
                                                <div className="opacity-100 md:opacity-0 md:group-hover/item:opacity-100 transition-opacity text-slate-400">
                                                    {copiedText === colorData?.rgba ? (
                                                        <Check className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 hover:text-indigo-600" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* LAST ROW: Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all w-full md:w-auto">
                        <MonitorPlay size={20} /> Preview on Design
                    </button>
                    <button
                        onClick={() => setIsExportOpen(true)}
                        className="text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-all w-full md:w-auto">
                        <Download size={20} /> Export Colors
                    </button>
                </div>
            </div>
            {/* Modal Component Call */}
            <PreviewModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                colors={colors}
            />
            <ExportModal
                isOpen={isExportOpen}
                onClose={() => setIsExportOpen(false)}
                colors={colors}
            />
            {/* Custom Toast Notification */}
            {toast.show && (
                <div className="fixed top-18 right-5 z-100 animate-in slide-in-from-right duration-300">
                    <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border-l-4 min-w-70 
            ${toast.type === 'success' ? 'bg-white border-green-500 text-green-800' :
                            toast.type === 'warning' ? 'bg-white border-yellow-500 text-yellow-800' :
                                'bg-white border-red-500 text-red-800'}`}>

                        {/* Icon based on type */}
                        <div className={`p-2 rounded-full ${toast.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                            {toast.type === 'success' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            )}
                        </div>

                        <div>
                            <p className="font-bold text-sm">
                                {toast.type === 'success' ? 'Success' : 'Attention'}
                            </p>
                            <p className="text-xs opacity-80">{toast.message}</p>
                        </div>

                        {/* Close Button */}
                        <button onClick={() => setToast({ ...toast, show: false })} className="ml-auto text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const PreviewModal = ({ isOpen, onClose, colors }) => {
    if (!isOpen || !colors) return null;

    const { primary, accent, background, text } = colors.main;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20">
            <div
                className="w-full max-w-lg overflow-hidden rounded-lg shadow transition-all animate-in zoom-in duration-300"
                style={{ backgroundColor: background.hex }}
            >
                <div className="p-8 md:p-12 text-center">
                    {/* Main Heading */}
                    <h2
                        className="mb-4 text-xl md:text-2xl font-semibold leading-relaxed"
                        style={{ color: text.hex }}
                    >
                        This is a dialog box colored with the AI-generated color palette.
                        <br />
                        <span className="text-sm md:text-base font-normal opacity-80">
                            Both of the buttons below will close the dialog.
                        </span>
                    </h2>

                    {/* Buttons Group */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Cancel Button (Accent Color) */}
                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
                            style={{ backgroundColor: accent.hex }}
                        >
                            Cancel
                        </button>

                        {/* Confirm Button (Primary Color) */}
                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
                            style={{ backgroundColor: primary.hex }}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExportModal = ({ isOpen, onClose, colors }) => {
    const [activeTab, setActiveTab] = useState('css');
    const [copied, setCopied] = useState(false);

    if (!isOpen || !colors) return null;

    const { primary, accent, background, text } = colors.main;

    // Format 1: CSS Variables Logic
    const generateCSSVariables = () => {
        return `:root {
  --primary-100: ${primary.hex};
  --primary-200: ${primary.hex}cc;
  --primary-300: ${primary.hex}99;
  --accent-100: ${accent.hex};
  --accent-200: ${accent.hex}cc;
  --accent-300: ${accent.hex}99;
  --background-100: ${background.hex};
  --background-200: ${background.hex}cc;
  --background-300: ${background.hex}99;
  --text-100: ${text.hex};
  --text-200: ${text.hex}cc;
  --text-300: ${text.hex}99;
}`;
    };

    // Format 2: Free Text Logic 
    const generateFreeText = () => {
        return `Primary-100: ${primary.hex};
Primary-200: ${primary.hex};
Primary-300: ${primary.hex};
Accent-100: ${accent.hex};
Accent-200: ${accent.hex};
Accent-300: ${accent.hex};
Background-100: ${background.hex};
Background-200: ${background.hex};
Background-300: ${background.hex};
Text-100: ${text.hex};
Text-200: ${text.hex};
Text-300: ${text.hex};`;
    };

    const handleCopy = () => {
        const textToCopy = activeTab === 'css' ? generateCSSVariables() : generateFreeText();
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20">
            <div className="bg-white w-full max-w-md rounded-lg shadow flex flex-col max-h-[75vh] overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header with Tabs  */}
                <div className="relative flex items-center justify-center p-3">
                    {/* Tabs Container */}
                    <div className="flex bg-gray-100 p-1 rounded-xl w-70">
                        <button
                            onClick={() => setActiveTab('css')}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all text-center ${activeTab === 'css' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'
                                }`}
                        >
                            CSS Variables
                        </button>
                        <button
                            onClick={() => setActiveTab('free')}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all text-center ${activeTab === 'free' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500'
                                }`}
                        >
                            Free Text
                        </button>
                    </div>

                    {/* Close Icon */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 p-2 hover:bg-gray-100 rounded-full text-indigo-400"
                    >
                        <X className='w-6 h-6 text-indigo-600 stroke-3' />
                    </button>
                </div>

                {/* Code Content Area */}
                <div className="p-4 bg-gray-50 flex-1 overflow-y-auto font-mono text-sm">
                    <div className="bg-white p-5 rounded-lg border border-gray-200 min-h-75 whitespace-pre-wrap">
                        {activeTab === 'css' ? (
                            <pre className="text-gray-800">
                                <span className="text-purple-700">:root</span> {'{\n'}
                                <div className="pl-4">
                                    {generateCSSVariables().split('\n').slice(1, -1).map((line, i) => (
                                        <div key={i} className="py-0.5">
                                            <span className="text-gray-600">{line.split(':')[0]}:</span>
                                            <span className="text-indigo-600">{line.split(':')[1]}</span>
                                        </div>
                                    ))}
                                </div>
                                {'}'}
                            </pre>
                        ) : (
                            <pre className="text-gray-800 leading-relaxed">
                                {generateFreeText().split('\n').map((line, i) => (
                                    <div key={i} className="py-0.5">
                                        <span className="text-gray-700">{line.split(':')[0]}:</span>
                                        <span className="text-indigo-600 ml-1">{line.split(':')[1]}</span>
                                    </div>
                                ))}
                            </pre>
                        )}
                    </div>
                </div>

                {/* Footer with Dynamic Button Text */}
                <div className="p-2  flex justify-center bg-white">
                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-all transform active:scale-95 shadow-lg ${copied ? 'bg-green-500' : 'bg-indigo-600 hover:bg-indigo-700'
                            }`}
                    >
                        <Copy className='w-4 h-4 stroke-3' />

                        {/* Dynamic Text Logic */}
                        {copied
                            ? 'Copied!'
                            : activeTab === 'css'
                                ? 'Copy CSS'
                                : 'Copy Colors'
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIColorGenerator;