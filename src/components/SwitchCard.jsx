import { useState } from 'react';

const SwitchCard = ({ design, primaryColor, onCustomize, onGetCode }) => {

    const [isChecked, setIsChecked] = useState(false);

    const uniqueId = `cb-${design.id}`;

    const dynamicCSS = design.getCss(primaryColor).replaceAll(`.${design.id}`, `#${uniqueId}`);

    const finalHtml = design.html
        .replaceAll('id="cb', `id="${uniqueId}`)
        .replaceAll('for="cb', `for="${uniqueId}`);

    return (
        <div className="flex flex-col items-center gap-3 group">
            {/* Dynamic Style */}
            <style>{`
                #container-${uniqueId} ${dynamicCSS}
            `}</style>

            {/* Main Card Container */}
            <div
                id={`container-${uniqueId}`}
                className={`relative w-full h-48 bg-white border rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden
                ${isChecked ? 'border-indigo-500 ring-1 ring-indigo-500 shadow-sm' : 'border-gray-200 hover:border-indigo-300'}`}
            >
                {/* DYNAMIC CHECKBOX DESIGN */}
                <div className="flex items-center gap-3 select-none scale-[1]">
                    <div
                        dangerouslySetInnerHTML={{ __html: finalHtml }}
                        className="flex items-center justify-center"
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                </div>

                {/* Action Buttons Section */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-indigo-50/90 flex items-center justify-center gap-2 lg:translate-y-full lg:group-hover:translate-y-0 translate-y-0 transition-transform duration-300 ease-in-out border-t border-indigo-100">

                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => onCustomize(design)}
                            className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition active:scale-95"
                        >
                            ✎ Customize
                        </button>
                        <button
                            onClick={() => onGetCode(design)}
                            className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition active:scale-95"
                        >
                            {'<>'} Get Code
                        </button>
                    </div>
                </div>
            </div>

            <p className="text-gray-500 text-sm font-medium transition-colors group-hover:text-indigo-600 uppercase tracking-tighter">
                {design.name}
            </p>
        </div>
    );
};

export default SwitchCard;