import { useState, useEffect } from 'react';

const SwitchCustomizeModal = ({ isOpen, onClose, design, activeTab, setActiveTab, initialColor }) => {
  const [primaryColor, setPrimaryColor] = useState("#474bff");
  const [size, setSize] = useState("small"); 
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (design) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPrimaryColor(initialColor || "#474bff");
      setSize("small"); 
    }
  }, [design, initialColor, isOpen]);

  if (!isOpen || !design) return null;


  const dynamicCSS = typeof design.getCss === 'function' ? design.getCss(primaryColor, size) : '';
  const dynamicHTML = design.html || '';

  const handleCopyCode = () => {
    const fullCode = `\n${dynamicHTML}\n\n<style>\n${dynamicCSS}\n</style>`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 font-manrope">
      {/* Dynamic Style Injection for the Preview */}
      <style>{dynamicCSS}</style>

      <div className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-all z-20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Tab Header */}
        <div className="flex justify-center pt-10 pb-6 border-b border-slate-50">
          <div className="flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/50">
            <button onClick={() => setActiveTab('customize')} className={`px-10 py-3 rounded-xl text-sm font-extrabold transition-all ${activeTab === 'customize' ? 'text-white bg-indigo-600 shadow-sm' : 'text-slate-500'}`}>✎ Customize</button>
            <button onClick={() => setActiveTab('code')} className={`px-10 py-3 rounded-xl text-sm font-extrabold transition-all ${activeTab === 'code' ? 'text-white bg-indigo-600 shadow-sm' : 'text-slate-500'}`}>{'<>'} Get the code</button>
          </div>
        </div>

        <div className="px-10 pb-10 flex flex-col md:flex-row gap-8 items-stretch min-h-80">
          
          {/* Left Side: Dynamic Preview */}
          <div className="w-full md:w-[45%] flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-3xl p-8 mt-8">
            <div className="flex flex-col items-center gap-6">
                <div 
                  className={`flex items-center justify-center ${
                    size === 'small' ? 'scale-[2.0]' :
                    size === 'medium' ? 'scale-[2.5]' :
                    'scale-[3.0]'
                  } transition-transform duration-300`} 
                  dangerouslySetInnerHTML={{ __html: dynamicHTML }} 
                />
                <span className="text-slate-400 font-bold tracking-widest text-[10px] uppercase mt-8">
                  Live Preview • {size.toUpperCase()}
                </span>
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="w-full md:w-[55%] flex flex-col pt-8">
            {activeTab === 'customize' ? (
              <div className="space-y-6">
                {/* Primary Color */}
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-wide block ml-1">Change Primary Color</label>
                <div className="bg-white border border-slate-200 rounded-lg p-1 shadow hover:border-indigo-200 transition-all">
                  <div className="flex items-center gap-6">
                    <input 
                      type="color" 
                      value={primaryColor} 
                      onChange={(e) => setPrimaryColor(e.target.value)} 
                      className="w-12 h-12 rounded-lg cursor-pointer border-4 border-slate-50 shadow-inner" 
                    />
                    <div>
                      <span className="text-slate-900 font-mono text-xl font-black uppercase tracking-tight block">{primaryColor}</span>
                      <span className="text-slate-400 text-[10px] font-bold tracking-widest mt-1">HEX CODE</span>
                    </div>
                  </div>
                </div>

                {/* SIZE SECTION */}
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest block ml-1">Change Size</label>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-indigo-200 transition-all">
                  <div className="flex items-center justify-between">
                    {['small', 'medium', 'large'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                          size === s 
                            ? 'bg-indigo-600 text-white shadow-sm' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 font-medium mb-1">Preview Scale</div>
                      <div className="flex gap-2">
                        <div className={`w-8 h-3 rounded-full ${size === 'small' ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                        <div className={`w-12 h-3 rounded-full ${size === 'medium' ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                        <div className={`w-16 h-3 rounded-full ${size === 'large' ? 'bg-indigo-600' : 'bg-slate-300'}`}></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-900 font-bold text-lg">{size.toUpperCase()}</div>
                      <div className="text-slate-400 text-[10px] font-bold tracking-widest">SIZE</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full animate-in slide-in-from-bottom-4">
                <div className="flex justify-between items-center mb-4 px-1">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Pure CSS & HTML</label>
                  <button 
                    onClick={handleCopyCode}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all border ${copied ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400 hover:text-indigo-600'}`}
                  >
                    {copied ? '✓ COPIED' : 'COPY SNIPPET'}
                  </button>
                </div>

                <div className="relative flex-1 bg-[#0d1117] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col font-mono">
                  <div className="p-5 overflow-auto text-[11px] leading-relaxed custom-scrollbar max-h-60">
                    <pre className="text-pink-400 mb-2">{`<!-- ${design.name} -->`}</pre>
                    <pre className="text-slate-300 mb-4 whitespace-pre-wrap">{dynamicHTML}</pre>
                    <pre className="text-indigo-400 mb-2">{`/* CSS - ${size.toUpperCase()} Size */`}</pre>
                    <pre className="text-slate-400 whitespace-pre-wrap">{dynamicCSS}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchCustomizeModal;