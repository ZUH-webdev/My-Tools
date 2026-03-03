import { useState } from 'react';

const CustomizationModal = ({ isOpen, onClose, loader, settings, setSettings }) => {
    const [activeTab, setActiveTab] = useState('customize'); 

    if (!isOpen) return null;

    const handleChange = (field, value) => {
        setSettings(prev => ({ ...prev, [field]: value }));
    };

    // Size numeric conversion for calculations
    const sizeMap = { small: 30, medium: 50, large: 80 };
    const currentSize = sizeMap[settings.size] || 50;

    // Generate Dynamic Code for "Get Code" tab
    const generatedCss = loader?.getCss 
        ? loader.getCss(settings.primaryColor, settings.secondaryColor, currentSize, settings.speed)
        : "";

    const handleCopy = () => {
        const fullCode = `/* CSS */\n${generatedCss}\n\n\n${loader?.html}`;
        navigator.clipboard.writeText(fullCode);
        alert('Code Copied to Clipboard!');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-0 md:p-4 font-manrope">
            <div className="bg-white rounded-none md:rounded-2xl shadow-2xl w-full h-full md:h-auto md:max-w-3xl flex flex-col md:max-h-[90vh] relative overflow-hidden">

                {/* --- TABS HEADER --- */}
                <div className="flex justify-center items-center p-4 border-b border-slate-100 relative shrink-0">
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab('customize')}
                            className={`flex items-center gap-2 px-4 md:px-9 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${activeTab === 'customize' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <span>✎</span> Customize
                        </button>
                        <button
                            onClick={() => setActiveTab('code')}
                            className={`flex items-center gap-2 px-4 md:px-9 py-2 md:py-3 rounded-lg text-xs md:text-sm font-semibold transition-all ${activeTab === 'code' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            <span>{`</>`}</span> Get the code
                        </button>
                    </div>
                    <button onClick={onClose} className="absolute right-4 md:right-6 text-slate-400 hover:text-red-500 text-xl font-bold">✕</button>
                </div>

                {/* Body Content */}
                <div className="flex flex-col md:flex-row flex-1 overflow-y-auto md:overflow-hidden">

                    {/* --- LEFT: PREVIEW AREA --- */}
                    <div className="flex-1 flex flex-col items-center justify-center bg-white p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-50 min-h-75 md:min-h-0">
                        <div className="relative flex items-center justify-center min-h-32 md:min-h-50">

                            {/* Dynamic CSS Injection */}
                            <style>{generatedCss}</style>

                            {/* Real Loader Rendering */}
                            {loader ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: loader.html }}
                                    className="transition-all"
                                />
                            ) : (
                                <div className="w-12 h-12 border-4 border-slate-200 border-t-indigo-500 rounded-full animate-spin"></div>
                            )}

                        </div>

                        <div className="mt-8 md:mt-12 text-center">
                            <p className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">Loader Preview</p>
                            <h3 className="text-slate-700 font-bold text-base md:text-lg">{loader?.name || "Loading..."}</h3>
                        </div>
                    </div>

                    {/* --- RIGHT: CONTROLS --- */}
                    <div className="w-full md:w-80 bg-slate-50/50 p-6 overflow-y-auto">
                        {activeTab === 'customize' ? (
                            <div className="space-y-6">
                                {/* Primary Color */}
                                <div>
                                    <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">Primary Color</label>
                                    <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded">
                                        <input
                                            type="color"
                                            value={settings.primaryColor}
                                            onChange={(e) => handleChange('primaryColor', e.target.value)}
                                            className="w-7 h-7 rounded cursor-pointer border-none bg-transparent"
                                        />
                                        <span className="text-slate-600 font-mono text-sm uppercase">{settings.primaryColor}</span>
                                    </div>
                                </div>

                                {/* Secondary Color */}
                                <div>
                                    <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">Secondary Color</label>
                                    <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded">
                                        <input
                                            type="color"
                                            value={settings.secondaryColor}
                                            onChange={(e) => handleChange('secondaryColor', e.target.value)}
                                            className="w-7 h-7 rounded cursor-pointer border-none bg-transparent"
                                        />
                                        <span className="text-slate-600 font-mono text-sm uppercase">{settings.secondaryColor}</span>
                                    </div>
                                </div>

                                {/* Size Select */}
                                <div>
                                    <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">Size</label>
                                    <select
                                        value={settings.size}
                                        onChange={(e) => handleChange('size', e.target.value)}
                                        className="w-full p-2 bg-white border border-slate-200 rounded outline-none text-slate-600 font-medium cursor-pointer"
                                    >
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>

                                {/* Speed Select */}
                                <div>
                                    <label className="text-[11px] font-bold text-slate-400 uppercase mb-2 block">Speed</label>
                                    <select
                                        value={settings.speed}
                                        onChange={(e) => handleChange('speed', e.target.value)}
                                        className="w-full p-2 bg-white border border-slate-200 rounded outline-none text-slate-600 font-medium cursor-pointer"
                                    >
                                        <option value="2s">Slow</option>
                                        <option value="1s">Average</option>
                                        <option value="0.5s">Fast</option>
                                    </select>
                                </div>
                            </div>
                        ) : (
                            /* --- CODE VIEW --- */
                            <div className="flex flex-col h-full">
                                <p className="text-slate-400 text-xs mb-3 font-semibold uppercase tracking-wider">Source Code</p>
                                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex-1 overflow-auto max-h-75">
                                    <pre className="text-indigo-300 font-mono text-[10px] md:text-xs whitespace-pre-wrap">
                                        {`/* CSS */\n${generatedCss}\n\n/* HTML */\n${loader?.html}`}
                                    </pre>
                                </div>
                                <button
                                    onClick={handleCopy}
                                    className="mt-6 w-full py-3 bg-indigo-600 text-white font-sans font-bold rounded-xl active:scale-95 transition-transform"
                                >
                                    Copy Everything
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizationModal;