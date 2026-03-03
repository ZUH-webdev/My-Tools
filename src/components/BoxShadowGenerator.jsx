import { useState } from 'react';
import { Copy, RotateCcw, CheckCircle2 } from 'lucide-react';

const BoxShadowGenerator = () => {
  const initialSettings = {
    shape: 'box',
    hOffset: -1,
    vOffset: 0.5,
    blur: 10,
    spread: 3,
    bgColor: '#ffffff',
    boxColor: '#474bff',
    shadowColor: '#dddddd',
    isInset: true,
  };

  const [settings, setSettings] = useState(initialSettings);
  const [copied, setCopied] = useState(false);

  const handleReset = () => setSettings(initialSettings);

  const generateCSS = () => {
    const { hOffset, vOffset, blur, spread, shadowColor, isInset } = settings;
    const shadowStr = `${isInset ? 'inset ' : ''}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${shadowColor}`;
    return shadowStr;
  };

  const fullCSS = `box-shadow: ${generateCSS()}; \n-webkit-box-shadow: ${generateCSS()}; \n-moz-box-shadow: ${generateCSS()};`;


  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-12 font-manrope text-slate-800">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-xl shadow border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

            {/* Column 1: Preview Area */}
            <div className="p-8 bg-slate-50/50 flex flex-col items-center">
              <div className="flex bg-white p-1 rounded-xl shadow border border-slate-200 mb-10 w-full justify-between">
                {['box', 'circle', 'header'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSettings({ ...settings, shape: mode })}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${settings.shape === mode ? 'bg-indigo-600 text-white shadow shadow-indigo-200' : 'text-slate-500 hover:bg-slate-50'
                      }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>

              <div
                className="w-full h-80 flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 relative overflow-hidden"
                style={{ backgroundColor: settings.bgColor }}
              >
                <div
                  className={`transition-all duration-300 ease-out ${settings.shape === 'circle' ? 'rounded-full w-40 h-40' :
                    settings.shape === 'header' ? 'w-full h-20 absolute top-0 left-0' : 'w-40 h-40 rounded-2xl'
                    }`}
                  style={{
                    backgroundColor: settings.boxColor,
                    boxShadow: generateCSS()
                  }}
                />
                {settings.shape === 'header' && <span className="text-slate-400 text-sm mt-20">Header Preview</span>}
              </div>
            </div>

            {/* Column 2: Controls (Sliders) */}
            <div className="p-8 space-y-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Geometry</h3>
              <Slider label="Horizontal Offset" value={settings.hOffset} suffix="px" min={-50} max={50} onChange={(v) => setSettings({ ...settings, hOffset: v })} />
              <Slider label="Vertical Offset" value={settings.vOffset} suffix="px" min={-50} max={50} onChange={(v) => setSettings({ ...settings, vOffset: v })} />
              <Slider label="Blur Radius" value={settings.blur} suffix="px" min={0} max={100} onChange={(v) => setSettings({ ...settings, blur: v })} />
              <Slider label="Spread Distance" value={settings.spread} suffix="px" min={-50} max={50} onChange={(v) => setSettings({ ...settings, spread: v })} />
            </div>

            {/* Column 3: Customization (Colors & Inset) */}
            <div className="p-8 space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Appearance</h3>
              <ColorPicker label="Background" value={settings.bgColor} onChange={(v) => setSettings({ ...settings, bgColor: v })} />
              <ColorPicker label="Box Color" value={settings.boxColor} onChange={(v) => setSettings({ ...settings, boxColor: v })} />
              <ColorPicker label="Shadow Color" value={settings.shadowColor} onChange={(v) => setSettings({ ...settings, shadowColor: v })} />

              <div
                onClick={() => setSettings({ ...settings, isInset: !settings.isInset })}
                className={`mt-4 p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${settings.isInset ? 'border-indigo-600 bg-blue-50/50' : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
              >
                <span className={`font-bold ${settings.isInset ? 'text-indigo-700' : 'text-slate-600'}`}>Inset Shadow</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${settings.isInset ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}`}>
                  {settings.isInset && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </div>
            </div>
          </div>

          {/* Code Export Section */}
          <div className="p-8 bg-slate-900 text-slate-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">CSS Output</span>
              <div className="flex gap-3">
                <button onClick={handleReset} className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400" title="Reset">
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                >
                  {copied ? <><CheckCircle2 className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy CSS</>}
                </button>
              </div>
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <code>{fullCSS}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components for cleaner architecture
const Slider = ({ label, value, min, max, suffix, onChange }) => (
  <div className="group">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-semibold text-slate-600">{label}</span>
      <span className="text-sm font-mono bg-slate-100 px-2 py-0.5 rounded text-indigo-600">{value}{suffix}</span>
    </div>
    <input
      type="range" min={min} max={max} step="0.5" value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 group-hover:accent-indigo-700"
    />
  </div>
);

const ColorPicker = ({ label, value, onChange }) => (
  <div className="group">
    <span className="text-xs font-bold text-slate-600 uppercase mb-2 block">{label}</span>
    <div className="relative flex items-center">
      <input
        type="color" value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute w-10 h-10 opacity-0 cursor-pointer z-10"
      />
      <div className="w-full p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm group-hover:border-slate-300 transition-colors">
        <div className="w-6 h-6 rounded-md shadow-inner border border-slate-100" style={{ backgroundColor: value }} />
        <span className="font-mono text-sm uppercase text-slate-600">{value}</span>
      </div>
    </div>
  </div>
);

export default BoxShadowGenerator;