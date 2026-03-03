import { useState } from 'react';

const LoaderCard = ({ title, onCustomize, html, css }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleGetCode = (e) => {
        e.stopPropagation(); 
        const fullCode = `/* CSS */\n${css}\n\n\n${html}`;
        
        navigator.clipboard.writeText(fullCode).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); 
        });
    };

    return (
        <div
            className="flex flex-col items-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-52 bg-white border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden ">
                
                <style>{css}</style>

                <div 
                    dangerouslySetInnerHTML={{ __html: html }} 
                    className={`${isHovered ? 'opacity-10' : 'opacity-100'} transition-opacity duration-300`}
                />

                {/* Hover Buttons */}
                {isHovered && (
                    <div className="flex flex-col gap-3 z-10 bg-white/80 w-full h-full absolute inset-0 items-center justify-center transition-all duration-300 animate-in fade-in">
                        <div className="flex flex-col gap-3">
                            <button 
                                onClick={onCustomize}
                                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition active:scale-95"
                            >
                                <span>✎</span> Customize
                            </button>
                            <button 
                                onClick={handleGetCode}
                                className={`flex items-center gap-2 px-6 py-2 ${isCopied ? 'bg-green-600' : 'bg-indigo-600'} text-white rounded-full text-sm font-semibold hover:bg-opacity-90 transition active:scale-95`}
                            >
                                {isCopied ? (
                                    <><span>✓</span> Copied!</>
                                ) : (
                                    <><span>{`</>`}</span> Get the code</>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <span className="text-slate-500 text-sm font-light">{title}</span>
        </div>
    );
};

export default LoaderCard;