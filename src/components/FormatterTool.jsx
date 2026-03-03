import { useState } from 'react';
import { RotateCcw, ChevronRight, ChevronsRight, Download, Copy, Loader2, Check, AlertCircle, ChevronDown } from 'lucide-react';
import beautify from 'js-beautify';

const FormatterTool = ({ type, placeholder }) => {
    const [rawCode, setRawCode] = useState('');
    const [formattedCode, setFormattedCode] = useState('');
    const [indentSize, setIndentSize] = useState('2');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const validateCode = (code) => {
        const trimmed = code.trim();
        if (!trimmed) return null;

        if (type === 'html') {
            const isHtml = new RegExp('<[a-z/][\\s\\S]*>', 'i');
            if (!isHtml.test(trimmed)) return "Invalid HTML: No valid tags detected.";
        }
        else if (type === 'css') {
            const jsKeywords = ['function', 'const ', 'let ', 'var ', 'console.log', '=>'];
            if (jsKeywords.some(keyword => trimmed.includes(keyword))) {
                return "Format Error: This looks like JavaScript, not CSS.";
            }
            if (!trimmed.includes('{') || !trimmed.includes(':')) return "Invalid CSS: Missing selectors or properties.";
        }
        else if (type === 'js') {
            const htmlTagPattern = new RegExp('<[a-z/][\\s\\S]*>', 'i');
            if (htmlTagPattern.test(trimmed)) return "Format Error: HTML tags detected in JS Formatter.";
            const hasCssTraits = trimmed.includes('{') && trimmed.includes(':') && trimmed.includes(';');
            const hasJsTraits = ['function', 'const', 'let', 'var', 'if', 'for', 'return', 'console', '=>', 'import'].some(k => trimmed.includes(k));
            if (hasCssTraits && !hasJsTraits) {
                return "Format Error: This looks like CSS. Please use the CSS Formatter.";
            }
        }
        return null;
    };

    const handleFormat = () => {
        if (!rawCode.trim()) return;

        const validationError = validateCode(rawCode);
        if (validationError) {
            setError(validationError);
            setFormattedCode('');
            return;
        }

        setLoading(true);
        setError(null);

        const options = {
            indent_size: parseInt(indentSize),
            indent_char: " ",
            indent_inner_html: true,
            preserve_newlines: true,
            max_preserve_newlines: 2,
            brace_style: "collapse",
        };

        setTimeout(() => {
            try {
                let result = "";
                if (type === 'html') result = beautify.html(rawCode, options);
                else if (type === 'css') result = beautify.css(rawCode, options);
                else if (type === 'js') result = beautify.js(rawCode, options);
                setFormattedCode(result);
            } catch {
                setError("Formatting failed. Please check syntax.");
            } finally {
                setLoading(false);
            }
        }, 600);
    };

    const handleReset = () => {
        setRawCode('');
        setIndentSize(2);
        setFormattedCode('');
        setError(null);
        setCopied(false);
    };

    const handleCopy = () => {
        if (!formattedCode) return;
        navigator.clipboard.writeText(formattedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        if (!formattedCode) return;
        const fileNames = { html: 'index.html', css: 'style.css', js: 'script.js' };
        const fileName = fileNames[type] || 'code.txt';
        const blob = new Blob([formattedCode], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
    };

    // --- Logic for Button States ---
    const isFormatDisabled = !rawCode.trim() || loading;
    const isActionDisabled = !formattedCode || !!error || loading;

    return (
        <div className="min-h-screen bg-gray-50 p-2 md:p-10 font-manrope text-slate-800">
            <div className="max-w-5xl mx-auto space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_50px_1fr] gap-1 items-stretch">
                    <div className="flex flex-col gap-3">
                        <div className="bg-white border border-gray-200 rounded-lg px-4 py-1 w-full">
                            <div className="flex flex-col gap-3">
                                <div className="relative">
                                    <label className="block text-[10px] font-semibold text-gray-500 tracking-widest mb-1">Indent Size</label>

                                    {/* Trigger Button */}
                                    <div
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full bg-white py-1 flex justify-between items-center cursor-pointer  hover:border-indigo-300 transition-all"
                                    >
                                        <span className="text-md font-semibold text-gray-700">{indentSize} spaces</span>
                                        <ChevronDown className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                                    </div>

                                    {/* Custom Styled Dropdown List */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-[118%] left-0 w-full bg-white border border-gray-100 rounded-lg shadow z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <div
                                                    key={num}
                                                    onClick={() => {
                                                        setIndentSize(num.toString());
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${indentSize === num.toString()
                                                        ? 'bg-indigo-50 text-indigo-600'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-500'
                                                        }`}
                                                >
                                                    {num} spaces
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Click Outside to Close */}
                                    {isDropdownOpen && (
                                        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="h-85 flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <div className="bg-white px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Raw {type.toUpperCase()} Code</div>
                            <textarea
                                className={`flex-1 p-4 outline-none resize-none font-mono text-sm leading-relaxed ${error ? 'bg-red-50/20' : ''}`}
                                placeholder={placeholder}
                                value={rawCode}
                                onChange={(e) => {
                                    setRawCode(e.target.value);
                                    if (error) setError(null);
                                    if (formattedCode) setFormattedCode('');
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center pt-2">
                        <ChevronsRight className="hidden lg:block text-gray-300" size={32} />
                        <ChevronsRight className="lg:hidden rotate-90 text-gray-300" size={32} />
                    </div>

                    <div className="h-102 relative flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="bg-white px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Formatted {type.toUpperCase()} Code</div>
                        <textarea
                            readOnly
                            className="flex-1 p-4 outline-none resize-none font-mono text-sm text-indigo-600 bg-indigo-50/10"
                            value={formattedCode}
                            placeholder={error ? "Error in format..." : "Result will appear here..."}
                        />
                        {error && (
                            <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6 text-center z-20 animate-in fade-in zoom-in duration-200">
                                <AlertCircle className="text-red-500 mb-3" size={48} />
                                <h3 className="text-lg font-bold text-slate-800">Invalid Format</h3>
                                <p className="text-red-600 mt-1 text-sm">{error}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-4">
                    <div className="flex justify-center md:justify-start order-2 md:order-1">
                        <button onClick={handleReset} className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-600 hover:text-gray-700 bg-white transition-all font-semibold active:scale-95 w-full md:w-auto justify-center">
                            <RotateCcw size={18} /> Reset
                        </button>
                    </div>

                    <div className="flex justify-center order-1 md:order-2">
                        <button
                            onClick={handleFormat}
                            disabled={isFormatDisabled}
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed justify-center w-full md:w-auto"
                        >
                            {loading ? <Loader2 className="animate-spin" size={24} /> : (
                                <>
                                    <span className="font-bold text-md tracking-wide">Format</span>
                                    <ChevronRight size={20} />
                                </>
                            )}
                        </button>
                    </div>

                    <div className="flex justify-center md:justify-end gap-3 order-3">
                        <button
                            onClick={handleDownload}
                            disabled={isActionDisabled}
                            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50 transition-all font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed flex-1 md:flex-none"
                        >
                            <Download size={16} /> Download
                        </button>
                        <button
                            onClick={handleCopy}
                            disabled={isActionDisabled}
                            className={`flex items-center justify-center gap-2 px-10 py-3 rounded-full border transition-all font-bold text-sm flex-1 md:flex-none disabled:opacity-30 disabled:cursor-not-allowed ${copied ? 'border-green-500 text-green-600 bg-green-50' : 'border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50'}`}
                        >
                            {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormatterTool;