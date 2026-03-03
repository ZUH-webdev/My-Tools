import { useState, useEffect } from 'react';
import { Check, Copy, X, Maximize2, Shuffle, RotateCcw, ChevronDown } from 'lucide-react';
import { patternsData } from '../data/patterns/patternsData';

const PatternGenerator = () => {
  const [selectedPattern, setSelectedPattern] = useState(patternsData[0]);
  const [values, setValues] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const defaultVals = {};
    selectedPattern.inputs.forEach(i => {
      defaultVals[i.id] = i.default;
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues(defaultVals);
  }, [selectedPattern]);

  const handleInputChange = (id, val) => {
  // Check if it's a range input to convert to number
  const isRange = selectedPattern.inputs.find(i => i.id === id).type === 'range';
  const finalValue = isRange ? parseInt(val, 10) : val;
  
  setValues(prev => ({ ...prev, [id]: finalValue }));
};
  const shuffleColors = () => {
  const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  setValues(prev => {
    const newValues = { ...prev }; 
    selectedPattern.inputs.forEach(input => {
      if (input.type === 'color') {
        newValues[input.id] = randomHex();
      }
    });
    return newValues;
  });
};

  const getSafeStyle = (patternObj, currentValues) => {
    try {
      if (!patternObj || !patternObj.generate) return {};
      const cssString = patternObj.generate(currentValues);
      
      // String parsing to Object
      const styleObj = {};
      cssString.split(';').forEach(rule => {
        const [prop, val] = rule.split(':');
        if (prop && val) {
          const camelProp = prop.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
          styleObj[camelProp] = val.trim();
        }
      });
      return styleObj;
    } catch (err) {
      console.error("Style Generation Error:", err);
      return { backgroundColor: '#ddd' };
    }
  };

  const copyToClipboard = () => {
    const cssText = selectedPattern.generate(values);
    navigator.clipboard.writeText(cssText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetToDefault = () => {
  const defaultVals = {};
  selectedPattern.inputs.forEach(i => {
    defaultVals[i.id] = i.default;
  });
  setValues(defaultVals);
};

  const currentStyle = getSafeStyle(selectedPattern, values);

  return (
    <div className="min-h-screen bg-gray-50 md:p-10 font-manrope text-slate-800 flex items-center justify-center">
      
      {/* FULL SCREEN MODAL */}
      {isFullScreen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 bg-slate-900/40 backdrop-blur-xl">
          <div className="relative w-full h-full mt-12 rounded-xl overflow-hidden shadow border-4 border-white animate-in zoom-in-95 duration-300">
            <div className="absolute inset-0" style={currentStyle}></div>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="absolute top-6 right-6 p-4 bg-white/90 hover:bg-white rounded-full shadow transition-all hover:scale-110 active:scale-90"
            >
              <X className="w-6 h-6 text-slate-900" />
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl bg-white rounded-xl shadow overflow-hidden border border-white">
        <div className="flex flex-col lg:flex-row">
          
          {/* PREVIEW */}
          <div className="w-full lg:w-1/2 p-8 bg-slate-50/50 flex flex-col items-center justify-center border-r border-slate-100">
            <div 
              className="w-full aspect-square rounded-xl shadow border-12 border-white transition-all duration-300 overflow-hidden"
              style={currentStyle}
            ></div>
            <button 
              onClick={() => setIsFullScreen(true)}
              className="mt-8 flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold shadow hover:shadow-md border border-slate-200 transition-all active:scale-95"
            >
              <Maximize2 size={18} className="text-indigo-500" /> Full Screen Preview
            </button>
          </div>

          {/* CONTROLS */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] ml-1">Pattern Design</label>
              <div className="relative group">
                <select 
                  className="w-full p-4 pl-14 bg-slate-50 border border-slate-100 rounded-xl appearance-none focus:border-indigo-500 focus:bg-white outline-none font-bold text-slate-700 cursor-pointer"
                  value={selectedPattern.id}
                  onChange={(e) => setSelectedPattern(patternsData.find(p => p.id === e.target.value))}
                >
                  {patternsData.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>

                <div className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg border border-slate-200 shadow overflow-hidden"
                     style={{
                        ...getSafeStyle(selectedPattern, Object.fromEntries(selectedPattern.inputs.map(i => [i.id, i.default]))), 
                        backgroundSize: '400%'
                     }}>
                </div>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-blue-500 transition-colors" size={20} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedPattern.inputs.map((input) => (
                <div key={input.id} className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1">{input.label}</label>
                  {input.type === 'color' ? (
                    <div className="flex items-center gap-4 p-2 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-all">
                      <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-xl border border-slate-200 shadow">
                        <input 
                          type="color" 
                          value={values[input.id] || "#000000"}
                          onChange={(e) => handleInputChange(input.id, e.target.value)}
                          className="absolute -inset-4 w-[200%] h-[200%] cursor-pointer border-none"
                        />
                      </div>
                      <span className="text-sm font-mono font-bold text-slate-500 uppercase">{values[input.id]}</span>
                    </div>
                  ) : (
                    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                      <input 
                        type="range" 
                        min={input.min} 
                        max={input.max} 
                        value={values[input.id] || input.default}
                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                        className="w-full accent-indigo-600 h-1.5 rounded-full cursor-pointer"
                      />
                      <div className="flex justify-between mt-1 text-[8px] font-bold text-slate-400">
                        <span className="text-indigo-500 bg-blue-50 px-2 rounded-md">{values[input.id]}px</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button 
              onClick={shuffleColors}
              className="w-full py-5 flex items-center justify-center gap-3 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 hover:text-white transition-all active:scale-[0.98] shadow-sm"
            >
              <Shuffle size={18} /> SHUFFLE COLORS
            </button>
          </div>
        </div>

        {/* CODE PANEL */}
        <div className="p-8 md:p-10 bg-slate-900 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-2/3 space-y-3">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[3px]">Generated CSS Code</h4>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-white/5 max-h-50 overflow-y-auto">
                <code className="text-blue-300 text-[13px] font-mono leading-relaxed block break-all italic">
                  {selectedPattern.generate(values)}
                </code>
              </div>
            </div>
            
            <div className="flex gap-4 w-full md:w-1/3">
              <button 
                onClick={() => resetToDefault()}
                className="p-5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-white/5"
              >
                <RotateCcw size={22} />
              </button>
              <button 
                onClick={copyToClipboard}
                className={`flex-1 py-5 flex items-center justify-center gap-3 rounded-xl font-black text-sm transition-all duration-300 shadow-xl ${
                  copied 
                  ? 'bg-emerald-500 text-white shadow-emerald-900/20 scale-105' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-900/40'
                }`}
              >
                {copied ? <Check size={20} className="animate-bounce" /> : <Copy size={20} />}
                {copied ? 'COPIED!' : 'COPY CSS'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternGenerator;