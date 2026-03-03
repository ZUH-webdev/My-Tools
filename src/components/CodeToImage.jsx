import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Upload, Download, Copy, Maximize, X } from 'lucide-react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImEqualizer } from "react-icons/im";

const CodeToImage = () => {
    // Dynamic loading states
    const [Highlighter, setHighlighter] = useState(null);
    const [themes, setThemes] = useState(null);

    const [code, setCode] = useState("// Paste your code here...\nfunction helloWorld() {\n  console.log('Hello from Usama!');\n}");
    const [padding, setPadding] = useState(40);
    const [fontSize, setFontSize] = useState(16);
    const [showSettings, setShowSettings] = useState(false);
    const [isWatermarkEnabled, setIsWatermarkEnabled] = useState(false);
    const [watermark, setWatermark] = useState('Usama');
    const [watermarkType, setWatermarkType] = useState('Text Only');
    const [watermarkPos, setWatermarkPos] = useState('bottom-left');
    const [watermarkColor, setWatermarkColor] = useState('#ffffff');
    const [avatar, setAvatar] = useState(null);
    const [aspect, setAspect] = useState('Wide');
    const [exportOpen, setExportOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [language, setLanguage] = useState('javascript');
    const [themeKey, setThemeKey] = useState('dracula');
    const [fileName, setFileName] = useState('untitled-code');

    const [fontFamily, setFontFamily] = useState('JetBrains Mono');
    const [tabSize, setTabSize] = useState(4);
    const [shadow, setShadow] = useState('rgba(0, 0, 0, 0.3) 0px 20px 50px');
    const [quality, setQuality] = useState(2);
    const [showLineNumbers, setShowLineNumbers] = useState(true);

    const [bgType, setBgType] = useState('Gradient');
    const [bgValue, setBgValue] = useState('linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)');
    const [uploadedImg, setUploadedImg] = useState(null);

    const canvasRef = useRef(null);
    const settingsRef = useRef(null);

    // Dynamic Imports Logic
    useEffect(() => {
        const loadHighlighter = async () => {
            const { Prism } = await import('react-syntax-highlighter');
            const prismStyles = await import('react-syntax-highlighter/dist/esm/styles/prism');
            setHighlighter(() => Prism);
            setThemes(prismStyles);
        };
        loadHighlighter();
    }, []);

    const languages = [
        { name: 'JavaScript', val: 'javascript', icon: 'JS' }, { name: 'Python', val: 'python', icon: 'PY' },
        { name: 'Java', val: 'java', icon: 'JV' }, { name: 'HTML', val: 'html', icon: 'HT' },
        { name: 'CSS', val: 'css', icon: 'CS' }, { name: 'TypeScript', val: 'typescript', icon: 'TS' },
        { name: 'C++', val: 'cpp', icon: 'C+' }, { name: 'C#', val: 'csharp', icon: 'C#' },
        { name: 'PHP', val: 'php', icon: 'PH' }, { name: 'Kotlin', val: 'kotlin', icon: 'KO' },
        { name: 'Swift', val: 'swift', icon: 'SW' }, { name: 'Go', val: 'go', icon: 'GO' },
        { name: 'Rust', val: 'rust', icon: 'RS' }, { name: 'Ruby', val: 'ruby', icon: 'RB' },
        { name: 'SQL', val: 'sql', icon: 'SQ' }, { name: 'Dart', val: 'dart', icon: 'DT' },
        { name: 'R', val: 'r', icon: 'R' }, { name: 'MATLAB', val: 'matlab', icon: 'MA' },
        { name: 'Scala', val: 'scala', icon: 'SC' }, { name: 'Bash', val: 'bash', icon: 'SH' },
        { name: 'JSON', val: 'json', icon: 'JS' }, { name: 'YAML', val: 'yaml', icon: 'YA' },
        { name: 'Markdown', val: 'markdown', icon: 'MD' }, { name: 'C', val: 'c', icon: 'C' },
        { name: 'Solidity', val: 'solidity', icon: 'SO' }, { name: 'GraphQL', val: 'graphql', icon: 'GQ' },
        { name: 'Haskell', val: 'haskell', icon: 'HS' }, { name: 'Lua', val: 'lua', icon: 'LU' },
        { name: 'Perl', val: 'perl', icon: 'PL' }, { name: 'Docker', val: 'dockerfile', icon: 'DK' },
        { name: 'Objective-C', val: 'objectivec', icon: 'OC' }, { name: 'Elixir', val: 'elixir', icon: 'EX' },
        { name: 'Erlang', val: 'erlang', icon: 'ER' }, { name: 'F#', val: 'fsharp', icon: 'F#' },
        { name: 'Groovy', val: 'groovy', icon: 'GR' }, { name: 'Julia', val: 'julia', icon: 'JL' },
        { name: 'PowerShell', val: 'powershell', icon: 'PS' }, { name: 'Vim-L', val: 'vim', icon: 'VI' },
        { name: 'Sass', val: 'sass', icon: 'SA' }, { name: 'Less', val: 'less', icon: 'LE' },
        { name: 'Stylus', val: 'stylus', icon: 'ST' }, { name: 'Scheme', val: 'scheme', icon: 'SC' },
        { name: 'Arduino', val: 'arduino', icon: 'AR' }, { name: 'COBOL', val: 'cobol', icon: 'CO' },
        { name: 'FORTRAN', val: 'fortran', icon: 'FO' }, { name: 'Lisp', val: 'lisp', icon: 'LI' },
        { name: 'Pascal', val: 'pascal', icon: 'PA' }, { name: 'Smalltalk', val: 'smalltalk', icon: 'ST' }
    ];

    const availableThemes = themes ? Object.keys(themes).map(key => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        val: key
    })) : [{ name: 'Loading...', val: 'dracula' }];

    useEffect(() => {
        const fontName = fontFamily.replace(/\s+/g, '+');
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css2?family=${fontName}&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            if (document.head.contains(link)) document.head.removeChild(link);
        };
    }, [fontFamily]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setShowSettings(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fonts = [
        "JetBrains Mono", "Fira Code", "Source Code Pro", "Courier New", "Ubuntu Mono",
        "Roboto Mono", "Cascadia Code", "IBM Plex Mono", "Anonymous Pro", "Space Mono",
        "Inconsolata", "PT Mono", "Oxygen Mono", "Nova Mono", "Share Tech Mono",
        "Cutive Mono", "Fantasque Sans Mono", "Victor Mono", "Iosevka", "Hack", "Monoid"
    ];

    const shadows = [
        { name: 'None', value: 'none' },
        { name: 'Soft', value: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' },
        { name: 'Medium', value: 'rgba(0, 0, 0, 0.2) 0px 10px 30px' },
        { name: 'Hard', value: 'rgba(0, 0, 0, 0.3) 0px 20px 50px' },
        { name: 'Glow Purple', value: 'rgba(124, 58, 237, 0.3) 0px 15px 35px' },
        { name: 'Glow Blue', value: 'rgba(59, 130, 246, 0.3) 0px 15px 35px' }
    ];

    const gradients = [
        { name: 'Ocean Breeze', value: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' },
        { name: 'Purple Bliss', value: 'linear-gradient(to right, #667eea, #764ba2)' },
        { name: 'Morpheus Den', value: 'linear-gradient(to right, #30cfd0, #330867)' },
        { name: 'Can you feel', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { name: 'Celestial', value: 'linear-gradient(135deg, #c33764 0%, #1d2671 100%)' },
        { name: 'Aubergine', value: 'linear-gradient(135deg, #aa076b 0%, #61045f 100%)' },
        { name: 'Mango', value: 'linear-gradient(to right, #ffe259, #ffa751)' },
        { name: 'Virgin America', value: 'linear-gradient(to right, #7b4397, #dc2430)' },
        { name: 'Endless River', value: 'linear-gradient(to right, #43e97b, #38f9d7)' },
        { name: 'Can you feel v2', value: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' },
        { name: 'Love Couple', value: 'linear-gradient(135deg, #ff9a8b 0%, #fad0c4 100%)' },
        { name: 'Kashmir', value: 'linear-gradient(135deg, #614385 0%, #516395 100%)' },
        { name: 'Frost', value: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
        { name: 'Sunset', value: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
        { name: 'Neon', value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { name: 'Royal', value: 'linear-gradient(to right, #141e30, #243b55)' },
        { name: 'Peach', value: 'linear-gradient(to right, #ffecd2, #fcb69f)' },
        { name: 'Lush', value: 'linear-gradient(to right, #56ab2f, #a8e063)' },
        { name: 'Fire', value: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)' },
        { name: 'Cosmic', value: 'linear-gradient(135deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)' },
    ];

    const solidColors = [
        { name: 'Slate', value: '#64748b' }, { name: 'Indigo', value: '#4f46e5' },
        { name: 'Purple', value: '#7c3aed' }, { name: 'Pink', value: '#ec4899' },
        { name: 'Rose', value: '#f43f5e' }, { name: 'Red', value: '#ef4444' },
        { name: 'Orange', value: '#f97316' }, { name: 'Amber', value: '#f59e0b' },
        { name: 'Yellow', value: '#eab308' }, { name: 'Lime', value: '#84cc16' },
        { name: 'Green', value: '#22c55e' }, { name: 'Emerald', value: '#10b981' },
        { name: 'Teal', value: '#14b8a6' }, { name: 'Cyan', value: '#06b6d4' },
        { name: 'Sky', value: '#0ea5e9' }, { name: 'Blue', value: '#3b82f6' },
        { name: 'Violet', value: '#8b5cf6' }, { name: 'Fuchsia', value: '#d946ef' },
        { name: 'Gray', value: '#6b7280' }, { name: 'Stone', value: '#78716c' },
    ];

    const readyImages = [
        { name: 'Marble White', url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800' },
        { name: 'Abstract Purple', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800' },
        { name: 'Gradient Mesh', url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800' },
        { name: 'Dark Nebula', url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800' },
        { name: 'Pink Marble', url: 'https://images.unsplash.com/photo-1557682250-33bd709cbe3b?w=800' },
        { name: 'Aurora', url: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800' },
        { name: 'Cosmic Dust', url: 'https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?w=800' },
        { name: 'Liquid Flow', url: 'https://images.unsplash.com/photo-1557682257-2f9c97a8d469?w=800' },
        { name: 'Pastel Dream', url: 'https://images.unsplash.com/photo-1557683311-973673baf926?w=800' },
        { name: 'Blue Fog', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' },
    ];

    const handleExport = async (type) => {
        if (!canvasRef.current) return;
        try {
            const { toPng, toBlob } = await import('html-to-image');
            const options = { quality: 1, pixelRatio: quality };

            if (type === 'download') {
                const dataUrl = await toPng(canvasRef.current, options);
                const link = document.createElement('a');
                link.download = `${fileName}.png`;
                link.href = dataUrl;
                link.click();
            } else {
                const blob = await toBlob(canvasRef.current, options);
                await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
                alert("Image copied to clipboard!");
            }
        } catch (err) { console.error("Export failed", err); }
        setExportOpen(false);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedImg(url);
            setBgValue(url);
        }
    };

    const handleAvatarUpload = (e) => {
        const file = e.target.files[0];
        if (file) setAvatar(URL.createObjectURL(file));
    };

    const getBackgroundStyle = () => {
        if (bgType === 'None') return { background: 'transparent' };
        if (bgType === 'Solid') return { backgroundColor: bgValue };
        if (bgType === 'Gradient') return { background: bgValue };
        if (bgType === 'Upload' && uploadedImg) return { backgroundImage: `url(${uploadedImg})`, backgroundSize: 'cover', backgroundPosition: 'center' };
        if (bgType === 'ReadyImage') return { backgroundImage: `url(${bgValue})`, backgroundSize: 'cover', backgroundPosition: 'center' };
        return {};
    };

    const getPosClass = () => {
        const positions = { 'top-left': 'top-4 left-4', 'top-right': 'top-4 right-4', 'bottom-left': 'bottom-4 left-4', 'bottom-right': 'bottom-4 right-4' };
        return positions[watermarkPos] || positions['bottom-left'];
    };

    const lineNumbers = code.split('\n').map((_, i) => i + 1).join('\n');

    return (
        <div className="min-h-screen bg-gray-50 p-2 md:p-10 font-manrope text-[#334155]">
            {isFullscreen && (
                <div className="fixed inset-0 z-100 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-20 transition-all">
                    <button onClick={() => setIsFullscreen(false)} className="absolute top-15 right-5 md:top-15 md:right-10 text-white hover:bg-white/10 p-2 rounded-full transition-colors"><X size={32} /></button>
                    <div className="max-w-5xl w-full shadow-xl animate-in zoom-in-95 duration-300 overflow-auto">
                        <div style={{ padding: `${padding}px`, ...getBackgroundStyle() }} className={`mx-auto transition-all duration-300 flex items-center justify-center relative rounded-lg overflow-hidden ${aspect === 'Wide' ? 'w-full' : aspect === 'Compact' ? 'w-full md:w-3/4' : 'aspect-square max-w-lg'}`}>
                            <div style={{ boxShadow: shadow }} className="bg-[#282a36] rounded-xl w-full flex flex-col relative overflow-hidden">
                                <div className="flex gap-1.5 p-4 bg-black/10">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" /><div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /><div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="flex">
                                    {showLineNumbers && (
                                        <pre style={{ fontSize: `${fontSize}px`, fontFamily: `'${fontFamily}', monospace`, lineHeight: '1.6' }} className="p-4 md:p-6 pr-2 text-right text-slate-500 select-none border-r border-white/5">{lineNumbers}</pre>
                                    )}
                                    <pre style={{ fontSize: `${fontSize}px`, fontFamily: `'${fontFamily}', monospace`, tabSize: tabSize, lineHeight: '1.6' }} className="w-full h-full p-4 md:p-6 text-slate-300 whitespace-pre-wrap">{code}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`max-w-5xl mx-auto space-y-6 transition-all duration-500 ${isFullscreen ? 'blur-xl grayscale' : ''}`}>
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
                    <div className="flex-1 space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Highlight Language</label>
                        <div className="relative h-12">
                            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full h-full bg-white border border-slate-200 rounded-lg px-4 flex items-center font-medium outline-none appearance-none cursor-pointer">
                                {languages.map(l => (<option key={l.val} value={l.val}>[{l.icon}] {l.name}</option>))}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Theme</label>
                        <div className="relative h-12">
                            <select value={themeKey} onChange={(e) => setThemeKey(e.target.value)} className="w-full h-full bg-white border border-slate-200 rounded-lg px-4 flex items-center font-medium outline-none appearance-none cursor-pointer">
                                {availableThemes.map(t => (<option key={t.val} value={t.val}>🎨 {t.name}</option>))}
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">File Name</label>
                        <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="Untitled" className="w-full h-12 bg-white border border-slate-200 rounded-lg px-4 outline-none focus:ring-2 ring-indigo-100" />
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); setShowSettings(!showSettings); }} className="h-12 px-6 border border-[#7148FC] text-[#7148FC] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors relative">
                        <ImEqualizer /> Settings
                    </button>
                </div>

                <div className="relative min-h-75 md:min-h-125 flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-sm p-4 md:p-12 overflow-hidden">
                    <div className="w-full overflow-x-auto py-4 flex justify-center items-center custom-scrollbar">
                        <div ref={canvasRef} style={{ padding: `${padding}px`, ...getBackgroundStyle() }} className={`transition-all duration-300 flex items-center justify-center relative shrink-0 ${aspect === 'Wide' ? 'w-full min-w-150 md:min-w-0' : aspect === 'Compact' ? 'w-[80%] min-w-125 md:min-w-0' : 'aspect-square w-125'}`}>
                            {isWatermarkEnabled && bgType !== 'None' && (
                                <div className={`absolute ${getPosClass()} flex items-center gap-2 transition-all z-10`} style={{ color: watermarkColor }}>
                                    {watermarkType === 'Avatar + Text' && avatar && <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full object-cover border border-white/20" />}
                                    {watermarkType === 'Twitter Handle' && <FaSquareXTwitter size={14} fill="currentColor" />}
                                    <span className="text-xs font-bold opacity-80 tracking-tight">{watermarkType === 'Twitter Handle' && !watermark.startsWith('@') ? `@${watermark}` : watermark}</span>
                                </div>
                            )}
                            <div style={{ boxShadow: shadow }} className="bg-[#282a36] rounded-xl w-full flex flex-col relative overflow-hidden transition-all duration-300 border border-white/5">
                                <div className="flex gap-1.5 p-4 bg-black/10">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" /><div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /><div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="relative">
                                    <textarea value={code} onChange={(e) => setCode(e.target.value)} spellCheck="false" className="absolute inset-0 w-full h-full p-6 bg-transparent text-transparent caret-white outline-none resize-none z-10 leading-[1.6] overflow-hidden whitespace-pre" style={{ fontSize: `${fontSize}px`, fontFamily: `'${fontFamily}', monospace`, paddingLeft: showLineNumbers ? '55px' : '24px' }} />
                                    
                                    {Highlighter && themes ? (
                                        <Highlighter
                                            language={language}
                                            style={themes[themeKey]}
                                            showLineNumbers={showLineNumbers}
                                            lineNumberStyle={{
                                                minWidth: '3em',
                                                paddingRight: '1em',
                                                color: '#6272a4',
                                                textAlign: 'right',
                                                opacity: 0.5,
                                                fontFamily: `'${fontFamily}', monospace`
                                            }}
                                            customStyle={{
                                                margin: 0,
                                                padding: '24px',
                                                fontSize: `${fontSize}px`,
                                                lineHeight: '1.6',
                                                background: 'transparent'
                                            }}
                                            codeTagProps={{
                                                style: {
                                                    fontFamily: `'${fontFamily}', monospace`,
                                                    fontSize: `${fontSize}px`
                                                }
                                            }}
                                        >
                                            {code}
                                        </Highlighter>
                                    ) : (
                                        <pre style={{ padding: '24px', fontSize: `${fontSize}px`, fontFamily: `'${fontFamily}', monospace`, color: '#fff' }}>{code}</pre>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {showSettings && (
                        <div ref={settingsRef} className="absolute top-2 right-2 bottom-2 w-70 md:w-85 bg-white shadow-2xl rounded-2xl border border-slate-100 z-120 flex flex-col animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-5 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Font Family</label>
                                    <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                        {fonts.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Font Size</label>
                                        <select value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                            {[12, 14, 16, 18, 20, 24].map(s => <option key={s} value={s}>{s}px</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Tab Size</label>
                                        <select value={tabSize} onChange={(e) => setTabSize(Number(e.target.value))} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                            {[2, 4, 8].map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Quality</label>
                                        <select value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                            {[1, 2, 3, 4].map(q => <option key={q} value={q}>{q}x</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Shadow</label>
                                        <select value={shadow} onChange={(e) => setShadow(e.target.value)} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                            {shadows.map(s => <option key={s.name} value={s.value}>{s.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Padding</label>
                                        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{padding}px</span>
                                    </div>
                                    <input type="range" min="20" max="140" value={padding} onChange={(e) => setPadding(Number(e.target.value))} className="w-full accent-indigo-600 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                                </div>
                                <label className="flex items-center justify-between p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                                    <span className="text-sm font-bold text-slate-600">Line Numbers</span>
                                    <input type="checkbox" checked={showLineNumbers} onChange={(e) => setShowLineNumbers(e.target.checked)} className="w-4 h-4 accent-indigo-600" />
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-center py-4 border-b border-slate-200">
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-600 cursor-pointer">
                        <input type="checkbox" checked={isWatermarkEnabled} onChange={(e) => setIsWatermarkEnabled(e.target.checked)} className="w-5 h-5 accent-indigo-600" /> Add Your Watermark
                    </label>
                    <div className="flex justify-center gap-4 md:gap-8">
                        {['Wide', 'Compact', 'Square'].map((item) => (
                            <label key={item} className="flex items-center gap-2 text-sm font-bold text-slate-500 cursor-pointer hover:text-indigo-600 transition-colors">
                                <input type="radio" name="aspect" checked={aspect === item} onChange={() => setAspect(item)} className="w-4 h-4 accent-indigo-600" /> {item}
                            </label>
                        ))}
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button onClick={() => setIsFullscreen(true)} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"><Maximize size={16} /> Fullscreen Preview</button>
                    </div>
                </div>

                {isWatermarkEnabled && (
                    <div className="bg-[#F1F4F9] p-4 md:p-6 rounded-lg animate-in slide-in-from-top-4 duration-300">
                        <h3 className="text-xs font-space-grotesk font-black text-slate-500 uppercase tracking-widest mb-4">Watermark Settings</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Position</label>
                                <select value={watermarkPos} onChange={(e) => setWatermarkPos(e.target.value)} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                    <option value="top-left">Top Left</option><option value="top-right">Top Right</option><option value="bottom-left">Bottom Left</option><option value="bottom-right">Bottom Right</option></select>
                            </div>
                            <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Type</label>
                                <select value={watermarkType} onChange={(e) => setWatermarkType(e.target.value)} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                    <option value="Text Only">Text Only</option><option value="Avatar + Text">Avatar + Text</option><option value="Twitter Handle">Twitter Handle</option>
                                </select>
                            </div>
                            <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Avatar</label>
                                <div className="relative"><input type="file" onChange={handleAvatarUpload} disabled={watermarkType !== 'Avatar + Text'} className="hidden" id="avatar-up" /><label htmlFor="avatar-up" className={`h-12 w-full bg-white border border-slate-200 rounded-lg flex items-center justify-center gap-2 text-sm cursor-pointer ${watermarkType !== 'Avatar + Text' ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-slate-500 hover:bg-slate-50'}`}><Upload size={14} /> {avatar ? 'Changed' : 'Upload'}</label></div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">{watermarkType === 'Twitter Handle' ? 'Twitter User' : 'Name/URL'}</label>
                                <input type="text" value={watermark} onChange={(e) => setWatermark(e.target.value)} className="h-12 w-full bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">Color</label>
                                <div className="h-12 bg-white border border-slate-200 rounded-lg px-2 flex items-center gap-2 text-sm font-mono">
                                    <input type="color" value={watermarkColor} onChange={(e) => setWatermarkColor(e.target.value)} className="w-9 h-9 border-none bg-transparent cursor-pointer" /><span className="uppercase text-md font-bold font-manrope">{watermarkColor}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pt-4">
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Background Type</label>
                            <select value={bgType} onChange={(e) => { const newType = e.target.value; setBgType(newType); if (newType === 'Gradient') setBgValue(gradients[0]?.value || ''); if (newType === 'Solid') setBgValue(solidColors[0]?.value || ''); if (newType === 'ReadyImage') setBgValue(readyImages[0]?.url || ''); if (newType === 'Upload' || newType === 'None') setBgValue(''); }} className="h-12 w-full md:w-64 bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                <option value="Gradient">Gradient</option><option value="Solid">Solid Colors</option><option value="ReadyImage">Images (Ready-to-use)</option><option value="Upload">Image (Upload)</option><option value="None">No background</option>
                            </select>
                        </div>
                        {bgType !== 'None' && (
                            <div className="flex flex-col gap-1 flex-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase">{bgType === 'Upload' ? 'Select Image' : 'Pick Style'}</label>
                                {bgType === 'Upload' ? (
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="h-12 w-full md:w-64 bg-white border border-slate-200 rounded-lg px-2 text-xs text-slate-500 cursor-pointer flex items-center file:mt-3 file:ml-3 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-indigo-50 file:text-indigo-700" />
                                ) : (
                                    <select value={bgValue} onChange={(e) => setBgValue(e.target.value)} className="h-12 w-full md:w-64 bg-white border border-slate-200 rounded-lg px-4 outline-none font-medium text-sm">
                                        {bgType === 'Gradient' && gradients.map((item, i) => <option key={i} value={item.value}>{item.name}</option>)}
                                        {bgType === 'Solid' && solidColors.map((item, i) => <option key={i} value={item.value}>{item.name}</option>)}
                                        {bgType === 'ReadyImage' && readyImages.map((item, i) => <option key={i} value={item.url}>{item.name}</option>)}
                                    </select>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="relative w-full md:w-auto">
                        <button onClick={() => setExportOpen(!exportOpen)} className="h-14 w-full md:w-auto bg-[#4D44F0] text-white px-10 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-[#3F37D1] transition-all">Export Image <ChevronDown size={20} className={exportOpen ? 'rotate-180 transition-transform' : 'transition-transform'} /></button>
                        {exportOpen && (
                            <div className="absolute bottom-16 right-0 w-full md:w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 py-2">
                                <button onClick={() => handleExport('download')} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 border-b border-slate-50"><Download size={18} className="text-indigo-600" /> Download Code Image</button>
                                <button onClick={() => handleExport('copy')} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"><Copy size={18} className="text-indigo-600" /> Copy Image to Clipboard</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeToImage;