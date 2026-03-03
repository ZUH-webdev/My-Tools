import { useState, useEffect, useRef, useCallback } from 'react';
import { Copy, RotateCcw, ChevronDown, Check } from 'lucide-react';

const BorderRadiusGenerator = () => {
    // 8 values representing the 8 handles (percentages)
    const [v, setV] = useState({
        tlx: 30, tly: 30, trx: 70, try: 30,
        brx: 70, bry: 70, blx: 30, bly: 70
    });

    const [previewType, setPreviewType] = useState('Image');
    const [dim, setDim] = useState({ w: 400, h: 400 });
    const [merge, setMerge] = useState(false);
    const [hide, setHide] = useState(false);
    const [active, setActive] = useState(null);
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const boxRef = useRef(null);

    // When Merge is toggled, reset to circle (50%) or default 8-point
    useEffect(() => {
        if (merge) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setV({ tlx: 50, tly: 50, trx: 50, try: 50, brx: 50, bry: 50, blx: 50, bly: 50 });
        } else {
            setV({ tlx: 30, tly: 30, trx: 70, try: 30, brx: 70, bry: 70, blx: 30, bly: 70 });
        }
    }, [merge]);

    const getCSS = () => {
        const { tlx, tly, trx, try: ty, brx, bry, blx, bly } = v;
        return `${Math.round(tlx)}% ${Math.round(100 - trx)}% ${Math.round(100 - brx)}% ${Math.round(blx)}% / ${Math.round(tly)}% ${Math.round(ty)}% ${Math.round(100 - bry)}% ${Math.round(100 - bly)}%`;
    };

    const handleMove = useCallback((e) => {
        if (!active || !boxRef.current) return;

        const rect = boxRef.current.getBoundingClientRect();
        const x = Math.round(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
        const y = Math.round(Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100)));

        setV(prev => {
            const n = { ...prev };
            if (merge) {
                // 4 Handles mapping centered on edges
                if (active === 'top') { n.tlx = x; n.trx = x; }
                if (active === 'right') { n.try = y; n.bry = y; }
                if (active === 'bottom') { n.blx = x; n.brx = x; }
                if (active === 'left') { n.tly = y; n.bly = y; }
            } else {
                // 8 Handles mapping - Fixed handle IDs
                if (active === 'tlx') n.tlx = x; if (active === 'tly') n.tly = y;
                if (active === 'trx') n.trx = x; if (active === 'try') n.try = y;
                if (active === 'brx') n.brx = x; if (active === 'bry') n.bry = y;
                if (active === 'blx') n.blx = x; if (active === 'bly') n.bly = y;
            }
            return n;
        });
    }, [active, merge]);

    useEffect(() => {
        const up = () => setActive(null);
        if (active) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', up);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', up);
        };
    }, [active, handleMove]);

    const handleReset = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setV({
            tlx: 30, tly: 30, trx: 70, try: 30,
            brx: 70, bry: 70, blx: 30, bly: 70
        });
        setMerge(false);
        setHide(false);
        setPreviewType('Image');
        setDim({ w: 400, h: 400 });
    };

    const copyToClipboard = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(`border-radius: ${getCSS()};`);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-2 md:p-12 flex flex-col items-center font-manrope">
            <div className="w-full max-w-5xl bg-white rounded-2xl md:rounded-lg shadow-sm p-5 md:p-12 border border-slate-100">

                <div className="relative w-full aspect-square md:aspect-video bg-slate-50 rounded-2xl flex items-center justify-center mb-8 md:mb-10 border border-slate-200 overflow-hidden shadow-inner">
                    <div
                        ref={boxRef}
                        style={{
                            width: `${dim.w}px`,
                            height: `${dim.h}px`,
                            transform: `scale(${typeof window !== 'undefined' && window.innerWidth < 640 ? 0.6 : 1})`
                        }}
                        className={`relative transition-all duration-300 flex items-center justify-center ${!hide ? 'border-2 border-dashed border-slate-300' : 'border-transparent'}`}
                    >
                        <div
                            style={{ borderRadius: getCSS() }}
                            className="w-full h-full shadow-2xl relative z-10 overflow-hidden"
                        >
                            {previewType === 'Image' && (
                                <img
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000"
                                    className="w-full h-full object-cover select-none pointer-events-none"
                                    alt="Scenic View"
                                />
                            )}
                            {previewType === 'Gradient' && <div className="w-full h-full bg-linear-to-br from-indigo-500 to-purple-600" />}
                            {previewType === 'Solid Color' && <div className="w-full h-full bg-slate-900" />}
                        </div>

                        {!hide && (
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <div className="relative w-full h-full pointer-events-auto">
                                    {merge ? (
                                        <>
                                            <Dot t={0} l={v.tlx} onD={() => setActive('top')} circle />
                                            <Dot t={v.try} l={100} onD={() => setActive('right')} circle />
                                            <Dot t={100} l={v.blx} onD={() => setActive('bottom')} circle />
                                            <Dot t={v.tly} l={0} onD={() => setActive('left')} circle />
                                        </>
                                    ) : (
                                        <>
                                            <Dot t={0} l={v.tlx} onD={() => setActive('tlx')} c="bg-blue-600" />
                                            <Dot t={v.tly} l={0} onD={() => setActive('tly')} c="bg-red-600" />
                                            <Dot t={0} l={v.trx} onD={() => setActive('trx')} c="bg-red-600" />
                                            <Dot t={v.try} l={100} onD={() => setActive('try')} c="bg-blue-600" />
                                            <Dot t={100} l={v.brx} onD={() => setActive('brx')} c="bg-blue-600" />
                                            <Dot t={v.bry} l={100} onD={() => setActive('bry')} c="bg-red-600" />
                                            <Dot t={100} l={v.blx} onD={() => setActive('blx')} c="bg-red-600" />
                                            <Dot t={v.bly} l={0} onD={() => setActive('bly')} c="bg-blue-600" />
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Controls Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-8">
                    <Select label="Preview Type" val={previewType} opts={['Image', 'Gradient', 'Solid Color']} set={setPreviewType} open={open} setOpen={setOpen} />
                    <Slider label={`Width: ${dim.w}px`} val={dim.w} set={(n) => setDim({ ...dim, w: n })} />
                    <Slider label={`Height: ${dim.h}px`} val={dim.h} set={(n) => setDim({ ...dim, h: n })} />
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-10 pb-10 border-b border-slate-100 items-start sm:items-center">
                    <Toggle label="Merge Edge Radiuses" check={merge} set={setMerge} />
                    <Toggle label="Hide Guides" check={hide} set={setHide} />
                </div>

                {/* Code Output Area */}
                <div className="bg-slate-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-xl relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></div>
                    <code className="text-xs sm:text-sm md:text-lg font-mono text-indigo-300 block mb-8 md:mb-10 select-all tracking-tight break-all">
                        <span className="text-pink-400 font-bold">border-radius:</span> {getCSS()};
                    </code>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 relative z-10">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 font-bold transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
                        >
                            <RotateCcw size={18} className="group-hover:-rotate-45 transition-transform duration-300" />
                            Reset
                        </button>

                        <button
                            type="button"
                            onClick={copyToClipboard}
                            className={`w-full sm:w-auto px-10 py-3.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 min-w-full sm:min-w-40 justify-center cursor-pointer active:scale-95 ${copied
                                ? 'bg-green-600 text-white'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check size={18} strokeWidth={3} className="animate-in zoom-in" />
                                    <span className="animate-in fade-in">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={18} />
                                    Copy Code
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
// Internal Components
const Dot = ({ t, l, onD, c, circle }) => (
    <div
        onMouseDown={onD}
        style={{ top: `${t}%`, left: `${l}%` }}
        className={`absolute w-5 h-5 border-2 border-white shadow-xl cursor-pointer -translate-x-1/2 -translate-y-1/2 z-50 hover:scale-150 transition-transform active:scale-95 ${circle ? 'bg-indigo-600 rounded-full' : (c + ' rounded-sm')}`}
    />
);

const Slider = ({ label, val, set }) => (
    <div className="space-y-3">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</label>
        <input type="range" min="100" max="600" value={val} onChange={(e) => set(parseInt(e.target.value))} className="w-full mt-6 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
    </div>
);

const Toggle = ({ label, check, set }) => (
    <label className="flex items-center gap-4 cursor-pointer select-none group">
        <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all ${check ? 'bg-indigo-600 border-indigo-600 shadow-lg shadow-indigo-100' : 'bg-white border-slate-300'}`}>
            {check && <Check size={16} className="text-white" strokeWidth={4} />}
        </div>
        <span className={`text-sm font-bold tracking-tight ${check ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
        <input type="checkbox" className="hidden" checked={check} onChange={(e) => set(e.target.checked)} />
    </label>
);

const Select = ({ label, val, opts, set, open, setOpen }) => (
    <div className="relative space-y-3">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</label>
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 ring-indigo-500 rounded-xl text-sm font-bold text-slate-700 shadow hover:border-indigo-300 transition-colors">
            {val} <ChevronDown size={18} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
            <div className="absolute bottom-full mb-3 left-0 w-full bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden z-100 animate-in fade-in zoom-in-95 duration-200">
                {opts.map(o => (
                    <div key={o} onClick={() => { set(o); setOpen(false); }} className="p-4 hover:bg-indigo-50 cursor-pointer text-sm font-bold text-slate-600 transition-colors border-b border-slate-50 last:border-0">{o}</div>
                ))}
            </div>
        )}
    </div>
);

export default BorderRadiusGenerator;