import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { Settings, RefreshCw, User, FileText, Layout, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

const FontFinder = () => {
    
    const [headingFont, setHeadingFont] = useState('Bacasime Antique');
    const [bodyFont, setBodyFont] = useState('Noto Sans Meroitic');
    const [hSize, setHSize] = useState(27);
    const [bSize, setBSize] = useState(16);
    const [view, setView] = useState('Profile');

    const FONT_LIST = ['Bacasime Antique', 'Noto Sans Meroitic', 'Roboto', 'Playfair Display', 'Montserrat', 'Lora', 'Oswald'];

    useEffect(() => {
        WebFont.load({
            google: { families: [headingFont, bodyFont] }
        });
    }, [headingFont, bodyFont]);

    const handleShuffle = () => {
        const randomH = FONT_LIST[Math.floor(Math.random() * FONT_LIST.length)];
        const randomB = FONT_LIST[Math.floor(Math.random() * FONT_LIST.length)];
        setHeadingFont(randomH);
        setBodyFont(randomB);
    };

    return (
        <div className="w-full bg-[#F8F9FB] min-h-screen p-4 md:p-10 font-sans">
            <div className="max-w-5xl mx-auto bg-white rounded-4xl shadow-xl border border-gray-100">

                {/* --- Top Controls Section --- */}
                <div className="p-6 md:p-10 border-b border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Heading Font Column */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                <span>Heading Font</span>
                                <div className="flex gap-4 lowercase font-medium text-gray-500">
                                    <button className="flex items-center gap-1 hover:text-indigo-600"><Settings size={12} /> Font Details</button>
                                    <button className="hover:text-indigo-600">Filter</button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <select value={headingFont} onChange={(e) => setHeadingFont(e.target.value)} className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none cursor-pointer focus:border-indigo-500">
                                        {FONT_LIST.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-4 text-gray-400" size={16} />
                                </div>
                                <input type="number" value={hSize} onChange={(e) => setHSize(e.target.value)} className="w-16 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold" />
                                <input type="number" defaultValue={400} className="w-16 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold" />
                            </div>
                        </div>

                        {/* Body Font Column */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                <span>Body Font</span>
                                <div className="flex gap-4 lowercase font-medium text-gray-500">
                                    <button className="flex items-center gap-1 hover:text-indigo-600"><Settings size={12} /> Font Details</button>
                                    <button className="hover:text-indigo-600">Filter</button>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <select value={bodyFont} onChange={(e) => setBodyFont(e.target.value)} className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none cursor-pointer focus:border-indigo-500">
                                        {FONT_LIST.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-4 text-gray-400" size={16} />
                                </div>
                                <input type="number" value={bSize} onChange={(e) => setBSize(e.target.value)} className="w-16 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold" />
                                <input type="number" defaultValue={400} className="w-16 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold" />
                            </div>
                        </div>
                    </div>

                    {/* --- Mode Switcher & Buttons --- */}
                    <div className="flex flex-wrap justify-between items-end mt-12 gap-6">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">Preview Content Type</p>
                            <div className="inline-flex bg-gray-100 p-1 rounded-full border border-gray-200">
                                {['Profile', 'Article', 'Card'].map((item) => (
                                    <button key={item} onClick={() => setView(item)} className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${view === item ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={handleShuffle} className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-indigo-600 uppercase tracking-tight">
                                Shuffle <RefreshCw size={14} />
                            </button>
                            <div className="flex gap-2">
                                <button className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700"><User size={18} /></button>
                                <button className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700"><FileText size={18} /></button>
                                <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100">
                                    <Layout size={18} /> Both
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Dynamic Preview Content --- */}
                <div className="p-8 md:p-16 transition-all duration-300 min-h-125">
                    {view === 'Profile' && (
                        <div className="fade-in">
                            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mb-12">
                                <img src="https://i.pravatar.cc/150?u=jane" alt="User" className="w-44 h-44 rounded-full shadow-2xl border-4 border-white" />
                                <div className="text-center md:text-left pt-4">
                                    <h1 style={{ fontFamily: headingFont, fontSize: `${hSize}px` }} className="mb-1 leading-tight text-gray-800">Jane Doe</h1>
                                    <p style={{ fontFamily: bodyFont, fontSize: `${bSize}px` }} className="text-gray-500 mb-6 italic">UI/UX Lead at Cool Company</p>
                                    <div style={{ fontFamily: bodyFont }} className="text-[13px] text-gray-400 space-y-2 font-medium">
                                        <p className="flex items-center gap-2 justify-center md:justify-start"><Mail size={14} /> jane.doe@coolcompany.com</p>
                                        <p className="flex items-center gap-2 justify-center md:justify-start"><Phone size={14} /> +1 123 456 78 90</p>
                                        <p className="flex items-center gap-2 justify-center md:justify-start"><MapPin size={14} /> New York, USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div>
                                    <h2 style={{ fontFamily: headingFont, fontSize: `${hSize * 0.8}px` }} className="mb-4 text-gray-800">Biography</h2>
                                    <p style={{ fontFamily: bodyFont, fontSize: `${bSize}px` }} className="text-gray-600 leading-relaxed max-w-4xl">
                                        I'm Jane Doe, UI/UX lead of Cool Company based in New York. I'm a fictional character yet I have tons of things to talk about to extend the biography then you can preview how it looks.
                                    </p>
                                </div>
                                <div>
                                    <h2 style={{ fontFamily: headingFont, fontSize: `${hSize * 0.8}px` }} className="mb-4 text-gray-800">Hobbies</h2>
                                    <p style={{ fontFamily: bodyFont, fontSize: `${bSize}px` }} className="text-gray-600 leading-relaxed max-w-4xl">
                                        I like to use 10015 Tools on my spare time. My favorite tool is Google Fonts Pair Finder which give suggestions about font pairs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {view === 'Article' && (
                        <div className="max-w-3xl mx-auto space-y-6 fade-in">
                            <h1 style={{ fontFamily: headingFont, fontSize: `${hSize * 1.4}px` }} className="leading-tight">The Art of Choosing Typography</h1>
                            <p style={{ fontFamily: bodyFont, fontSize: `${bSize}px` }} className="text-gray-700 leading-loose">
                                Typography is more than just selecting a font. It's about readability and communicating a message through visual structure.
                                A good pair of fonts creates hierarchy and makes the content digestible for the user.
                            </p>
                        </div>
                    )}

                    {view === 'Card' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-6 border border-gray-100 rounded-3xl shadow-sm bg-gray-50">
                                    <h3 style={{ fontFamily: headingFont, fontSize: `${hSize * 0.7}px` }} className="mb-3">Feature {i}</h3>
                                    <p style={{ fontFamily: bodyFont, fontSize: `${bSize * 0.9}px` }} className="text-gray-500">Selected pairing applied to card layout.</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* --- Bottom Final Action --- */}
                <div className="p-10 flex justify-center bg-gray-50 border-t border-gray-100">
                    <button className="bg-indigo-600 text-white px-10 py-4 rounded-full font-black text-sm tracking-widest shadow-2xl hover:bg-indigo-700 transition-all active:scale-95 uppercase">
                        &lt;/&gt; Get Font Pair
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FontFinder;