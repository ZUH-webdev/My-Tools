import { useState, useRef, useEffect } from 'react';
import {
    ChevronDown, Copy, Upload, Check, ImageIcon, Wifi, Battery
} from 'lucide-react';
import { FaSquareXTwitter } from "react-icons/fa6";

// --- Reusable Field Component ---
const FormField = ({ label, children }) => (
    <div className="relative w-full p-3 bg-white border border-gray-200 rounded-lg flex flex-col justify-center focus-within:ring-2 ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight leading-none mb-2">
            {label}
        </label>
        <div className="w-full flex items-center">
            {children}
        </div>
    </div>
);

const CustomDropdown = ({ label, value, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropRef = useRef(null);

    useEffect(() => {
        const close = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setIsOpen(false); };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div className="relative w-full" ref={dropRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <FormField label={label}>
                    <div className="w-full flex justify-between items-center text-sm font-bold text-gray-700">
                        <span className="truncate">{value.name || value}</span>
                        <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </FormField>
            </div>
            {isOpen && (
                <div className="absolute top-[110%] left-0 w-full bg-white border border-gray-200 rounded-lg z-100 py-2 max-h-64 overflow-y-auto">
                    {options.map((opt, i) => (
                        <div key={i} onClick={() => { onSelect(opt); setIsOpen(false); }}
                            className="px-4 py-3 hover:bg-indigo-600 hover:text-white cursor-pointer text-sm font-semibold flex justify-between items-center text-gray-600">
                            {opt.name || opt}
                            {(opt.name || opt) === (value.name || value) && <Check size={14} className="text-indigo-400" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const AdRevenueGenerator = () => {
    const wallpapersList = [
        { name: 'Deep Space', url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000' },
        { name: 'Minimal Grey', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000' },
        { name: 'Sunset Vibes', url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000' },
        { name: 'Cyberpunk', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000' },
        { name: 'Forest Mist', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000' },
        { name: 'Ocean Dark', url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1000' },
        { name: 'Neon City', url: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1000' },
        { name: 'Mountain Peak', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000' }
    ];

    const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapersList[0]);
    const [carrier, setCarrier] = useState('AT&T');
    const [revenue, setRevenue] = useState('100.0');
    const [exportOpen, setExportOpen] = useState(false);

    const screenshotRef = useRef(null);
    const exportBtnRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (exportBtnRef.current && !exportBtnRef.current.contains(event.target)) {
                setExportOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleExport = async (mode) => {
        const { toPng, toBlob } = await import('html-to-image');
        try {
            if (mode === 'download') {
                const dataUrl = await toPng(screenshotRef.current, { cacheBust: true, pixelRatio: 2 });
                const link = document.createElement('a');
                link.download = `revenue-${revenue}.png`;
                link.href = dataUrl;
                link.click();
            } else {
                const blob = await toBlob(screenshotRef.current);
                await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
                alert("Copied to clipboard!");
            }
        } catch (err) { console.error('Export failed', err); }
        setExportOpen(false);
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setSelectedWallpaper({ name: 'Custom Upload', url: url });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-manrope text-gray-900">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">

                    {/* Mockup Column */}
                    <div className="lg:sticky lg:top-10 flex flex-col items-center">
                        {/* Mobile Frame */}
                        <div className="relative w-80 h-150 bg-black rounded-[2.8rem] border-8 border-gray-900 shadow-2xl overflow-hidden">

                            {/* Inner Screen Area */}
                            <div ref={screenshotRef} className="relative w-full h-full overflow-hidden">
                                <img src={selectedWallpaper.url} className="absolute inset-0 w-full h-full object-cover" alt="bg" />

                                <div className="absolute top-0 w-full p-4 flex justify-between items-center text-white z-10">
                                    <span className="text-[11px] font-bold">{carrier}</span>
                                    <div className="flex items-center gap-1.5 opacity-90 font-bold">
                                        <span className="text-[10px]">5G</span>
                                        <Wifi size={14} />
                                        <Battery size={14} />
                                    </div>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0">
                                            <FaSquareXTwitter className="text-white text-2xl" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <h4 className="font-bold text-[13px] text-gray-900 truncate">You got paid!</h4>
                                                <span className="text-[9px] text-gray-400 font-medium">9m ago</span>
                                            </div>
                                            <p className="text-[12px] text-gray-600 leading-tight font-medium">
                                                ${revenue} has been deposited into your account.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls Column */}
                    <div className="space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-sm font-bold font-space-grotesk text-gray-900 uppercase tracking-widest">Wallpaper</h2>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex-1 w-full">
                                    <CustomDropdown
                                        label="Ready-To-Use Wallpaper"
                                        value={selectedWallpaper}
                                        options={wallpapersList}
                                        onSelect={(val) => setSelectedWallpaper(val)}
                                    />
                                </div>
                                <span className="text-xs font-bold text-gray-300 italic">OR</span>
                                <div className="flex-1 w-full">
                                    <label className="cursor-pointer">
                                        <FormField label="Custom Wallpaper">
                                            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase">
                                                <Upload size={14} /> Click to upload
                                            </div>
                                        </FormField>
                                        <input type="file" className="hidden" onChange={handleUpload} />
                                    </label>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-sm font-bold font-space-grotesk text-gray-900 uppercase tracking-widest">Details</h2>
                            <div className="space-y-4">
                                <FormField label="Carrier Name">
                                    <input className="w-full bg-transparent outline-none text-sm font-bold text-gray-700" value={carrier} onChange={(e) => setCarrier(e.target.value)} />
                                </FormField>
                                <FormField label="Revenue Amount ($)">
                                    <input className="w-full bg-transparent outline-none text-md font-bold text-gray-700 font-manrope" value={revenue} onChange={(e) => setRevenue(e.target.value)} />
                                </FormField>
                            </div>
                        </section>

                        {/* Export Section */}
                        <div className="relative pt-6 flex justify-center">
                            <div className="relative inline-block w-full max-w-xs" ref={exportBtnRef}>
                                <button
                                    onClick={() => setExportOpen(!exportOpen)}
                                    className="w-full py-4 bg-indigo-600 text-white rounded-full font-black text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all active:scale-95"
                                >
                                    EXPORT SCREENSHOT <ChevronDown size={18} className={`transition-transform ${exportOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {exportOpen && (
                                    <div className="absolute top-[115%] left-0 w-full bg-white rounded-lg border border-gray-200 z-120 py-2 overflow-hidden animate-in fade-in zoom-in-95">
                                        <button onClick={() => handleExport('download')} className="w-full flex items-center gap-3 px-6 py-4 text-sm font-bold text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-50">
                                            <ImageIcon size={18} /> Download Image
                                        </button>
                                        <button onClick={() => handleExport('copy')} className="w-full flex items-center gap-3 px-6 py-4 text-sm font-bold text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                                            <Copy size={18} /> Copy to Clipboard
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="text-center text-[11px] text-gray-400 font-medium leading-relaxed">
                            By using Twitter Ad Revenue Generator by 10015.io, you agree to our <span className="text-indigo-600 font-bold underline cursor-pointer">Usage Policy</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdRevenueGenerator;