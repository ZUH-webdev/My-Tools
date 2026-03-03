import { useState } from 'react';
import { RefreshCw, Copy, Check, ChevronsRight, ChevronsDown, ChevronRight, ChevronDown } from 'lucide-react';
import CryptoJS from 'crypto-js';

export const EncryptDecryptTools = ({ algorithm }) => {
    const [mode, setMode] = useState('encrypt');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [copied, setCopied] = useState(false);
    
    // Settings States
    const [showSettings, setShowSettings] = useState(false);
    const [maxLength, setMaxLength] = useState(4);
    const [settings, setSettings] = useState({
        commonPass: true,
        lower: true,
        upper: false,
        num: true,
        spec: false,
        white: false
    });

    const handleSettingChange = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // --- Core Hashing Logic ---
    const getHash = (text) => {
        switch(algorithm) {
            case 'MD5': return CryptoJS.MD5(text).toString();
            case 'SHA1': return CryptoJS.SHA1(text).toString();
            case 'SHA224': return CryptoJS.SHA224(text).toString();
            case 'SHA256': return CryptoJS.SHA256(text).toString();
            case 'SHA384': return CryptoJS.SHA384(text).toString();
            case 'SHA512': return CryptoJS.SHA512(text).toString();
            default: return '';
        }
    };

    // --- Decryption (Brute Force) Logic ---
    const startDecryption = () => {
        setIsProcessing(true);
        setError('');
        
        setTimeout(() => {
            const targetHash = input.trim().toLowerCase();
            let chars = "";
            if (settings.lower) chars += "abcdefghijklmnopqrstuvwxyz";
            if (settings.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (settings.num) chars += "0123456789";
            if (settings.spec) chars += "!@#$%^&*()_+-=[]{}|;':\",./<>?";
            if (settings.white) chars += " ";

            if (!chars && !settings.commonPass) {
                setError("Please select at least one character set.");
                setIsProcessing(false);
                return;
            }

            let found = null;
            const backtrack = (current) => {
                if (found) return;
                if (current.length > 0) {
                    if (getHash(current) === targetHash) {
                        found = current;
                        return;
                    }
                }
                if (current.length >= maxLength) return;
                for (let i = 0; i < chars.length; i++) {
                    backtrack(current + chars[i]);
                    if (found) return;
                }
            };

            backtrack("");

            if (found) { setOutput(found); } 
            else { setError("Could not decrypt within given limits."); setOutput(""); }
            setIsProcessing(false);
        }, 100);
    };

    const handleAction = () => {
        if (!input.trim()) return;
        mode === 'encrypt' ? setOutput(getHash(input)) : startDecryption();
    };

    const resetFields = () => {
        setInput(''); setOutput(''); setError(''); setIsProcessing(false);
    };

    return (
        <div className="w-full max-w-5xl mx-auto font-manrope mt-10 mb-12 px-2">
            {/* Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-slate-200 p-1.5 rounded-xl flex w-full max-w-md">
                    <button onClick={() => { setMode('encrypt'); resetFields(); }}
                        className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-all ${mode === 'encrypt' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>
                        Encrypt
                    </button>
                    <button onClick={() => { setMode('decrypt'); resetFields(); }}
                        className={`flex-1 py-1.5 rounded-lg text-sm font-semibold transition-all ${mode === 'decrypt' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>
                        Decrypt
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-center mb-6">
                <div className="relative border border-slate-200 rounded-lg bg-white focus-within:ring-2 focus-within:ring-indigo-500 transition-all overflow-hidden">
                    <div className="sticky top-0 bg-white px-4 py-2 border-b border-slate-50 z-10">
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                            {mode === 'encrypt' ? 'Text' : `${algorithm} Hash`}
                        </span>
                    </div>
                    <textarea value={input} onChange={(e) => setInput(e.target.value)}
                        className="w-full h-74 p-6 outline-none resize-none bg-white block"
                        placeholder="Enter text here..." />
                </div>

                <div className="flex justify-center">
                    <ChevronsRight className="text-slate-400 hidden md:block" size={32} />
                    <ChevronsDown className="text-slate-400 block md:hidden" size={32} />
                </div>

                <div className="relative border border-slate-200 rounded-lg bg-white overflow-hidden transition-all">
                    <div className="sticky top-0 bg-white px-4 py-2 border-b border-slate-50 z-10">
                        <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                            {mode === 'encrypt' ? `${algorithm} Hash` : 'Text'}
                        </span>
                    </div>
                    <textarea value={output} readOnly
                        className="w-full h-74 p-6 bg-white outline-none resize-none block"
                        placeholder={isProcessing ? "Cracking..." : "Output..."} />
                    {error && <p className="absolute bottom-4 left-6 text-red-500 text-xs font-medium z-20">{error}</p>}
                </div>
            </div>

            {/* Buttons Row - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Setting Button */}
                <div className="flex justify-start order-2 md:order-1">
                    {mode === 'decrypt' && (
                        <button onClick={() => setShowSettings(!showSettings)}
                            className={`w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 border rounded-full font-bold transition-all ${showSettings ? 'bg-indigo-50 border-indigo-600 text-indigo-600' : 'border-slate-300 text-slate-600 hover:bg-slate-100'}`}>
                            Decryption Settings {showSettings ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
                        </button>
                    )}
                </div>

                {/* Main Action Button */}
                <div className="flex justify-center order-1 md:order-2">
                    <button onClick={handleAction} disabled={isProcessing}
                        className={`w-full md:w-auto px-8 py-3 rounded-full font-bold shadow flex items-center justify-center gap-2 transition-transform active:scale-95 ${isProcessing ? 'bg-slate-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
                        {isProcessing ? <RefreshCw className="animate-spin" size={20}/> : (mode === 'encrypt' ? 'Encrypt' : 'Decrypt')} <span className="text-xl">›</span>
                    </button>
                </div>

                {/* Reset & Copy Buttons */}
                <div className="flex justify-center md:justify-end order-3 gap-2 w-full">
                    <button onClick={resetFields} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 border border-slate-300 rounded-full text-slate-600 font-bold hover:bg-slate-100 transition-all">
                        <RefreshCw size={18} /> Reset
                    </button>
                    <button onClick={() => {if(output){navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000)}}} 
                        className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 border rounded-full font-bold transition-all ${copied ? 'bg-green-500 border-green-500 text-white' : 'bg-white text-indigo-600 border-indigo-500'}`}>
                        {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>

            {/* Decryption Settings Box - Original UI Design */}
            {mode === 'decrypt' && showSettings && (
                <div className="w-full bg-[#f8faff] border border-slate-200 rounded-2xl p-6 mt-6 animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <input type="checkbox" id="common-pass" checked={settings.commonPass} onChange={()=>handleSettingChange('commonPass')} className="w-5 h-5 accent-indigo-600 rounded cursor-pointer" />
                        <label htmlFor="common-pass" className="text-slate-500 font-medium cursor-pointer">Check most common 100K passwords</label>
                    </div>
                    
                    <p className="text-red-500 text-sm font-medium mb-4 italic">
                        Be careful, enabling following options may increase decryption time significantly!
                    </p>
                    
                    <p className="text-slate-500 text-sm mb-4">Include following character sets for creating combinations;</p>
                    
                    <div className="space-y-3 mb-6">
                        {[
                            { id: 'lower', label: 'Lowercase letters [a-z]' },
                            { id: 'upper', label: 'Uppercase letters [A-Z]' },
                            { id: 'num', label: 'Numbers [0-9]' },
                            { id: 'spec', label: 'Special characters (!@#$% etc.)' },
                            { id: 'white', label: 'Whitespace' }
                        ].map((item) => (
                            <div key={item.id} className="flex items-center gap-3">
                                <input type="checkbox" id={item.id} checked={settings[item.id]} onChange={()=>handleSettingChange(item.id)} className="w-5 h-5 accent-indigo-600 border-slate-300 rounded cursor-pointer" />
                                <label htmlFor={item.id} className="text-slate-600 cursor-pointer">{item.label}</label>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-slate-500 text-sm font-medium">Max length of text to be decrypted: </span>
                            <span className="font-bold text-slate-700">{maxLength}</span>
                            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-slate-400 text-[10px] text-slate-500 cursor-help">i</span>
                        </div>
                        <input type="range" min="1" max="10" value={maxLength} onChange={(e)=>setMaxLength(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
                    </div>
                </div>
            )}
        </div>
    );
};