import { useState } from 'react';
import { RefreshCw, Copy, Check, ChevronsRight, ChevronsDown } from 'lucide-react';

export const EncodeDecodeTools = ({ encodeFn, decodeFn, inputLabel, outputLabel }) => {
    const [mode, setMode] = useState('encode');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    const handleAction = () => {
        setError('');
        if (!input.trim()) { setOutput(''); return; }

        try {
            const result = mode === 'encode' ? encodeFn(input) : decodeFn(input);
            setOutput(result);
        } catch {
            setOutput('');
            setError('Invalid format for conversion.');
        }
    };

    const resetFields = () => {
        setInput(''); setOutput(''); setError('');
    };

    const copyToClipboard = () => {
        if (output) {
            navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto font-manrope mt-10 mb-12">
            {/* Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-slate-200 p-1.5 rounded-xl flex w-full max-w-md">
                    <button onClick={() => { setMode('encode'); resetFields(); }}
                        className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-all ${mode === 'encode' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>
                        Encoder
                    </button>
                    <button onClick={() => { setMode('decode'); resetFields(); }}
                        className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-all ${mode === 'decode' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>
                        Decoder
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-center mb-6">
                {/* Input Section */}
                <div className="relative border border-slate-200 rounded-2xl bg-white overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                    <div className="sticky top-0 left-0 right-0 bg-white px-6 py-3 z-10">
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                            {mode === 'encode' ? inputLabel : outputLabel}
                        </span>
                    </div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full h-74 p-6 pt-4 outline-none resize-none bg-white block"
                        placeholder="Enter here..."
                    />
                </div>

                <div className="flex justify-center">
                    <ChevronsRight className="text-slate-400 hidden md:block" size={32} />
                    <ChevronsDown className="text-slate-400 block md:hidden" size={32} />
                </div>

                {/* Output Section */}
                <div className="relative border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all">
                    {/* Header Label - Fixed at top */}
                    <div className="sticky top-0 left-0 right-0 bg-white px-6 py-3 z-10">
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                            {mode === 'encode' ? outputLabel : inputLabel}
                        </span>
                    </div>
                    <textarea
                        value={output}
                        readOnly
                        className="w-full h-74 p-6 pt-4 bg-white outline-none resize-none block"
                        placeholder="Output..."
                    />
                    {error && <p className="absolute bottom-4 left-4 text-red-500 text-xs z-20">{error}</p>}
                </div>
            </div>

            {/* Buttons Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-6">
                <div className="flex justify-center order-1 md:order-2">
                    <button onClick={handleAction} className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold shadow flex items-center justify-center gap-2 transition-transform active:scale-95">
                        {mode === 'encode' ? 'Encode' : 'Decode'} <span className="text-xl">›</span>
                    </button>
                </div>
                <div className="flex flex-1 justify-start order-2 md:order-1">
                    <button onClick={resetFields} className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 border border-slate-300 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-all">
                        <RefreshCw size={18} /> Reset
                    </button>
                </div>
                <div className="flex flex-1 justify-end order-3">
                    <button onClick={copyToClipboard} className={`w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 border rounded-full font-bold transition-all ${copied ? 'bg-green-500 border-green-500 text-white' : 'bg-white text-indigo-600 border-indigo-500'}`}>
                        {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
};