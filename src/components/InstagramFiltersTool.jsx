import { useState, useRef, useEffect } from 'react';
import { FolderOpen, Link, Upload, RotateCcw, Download, Settings2, X, AlertCircle, CheckCircle2 } from 'lucide-react';

const InstagramFiltersTool = () => {
    const [mode, setMode] = useState('uploadFile');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Normal');
    const [toast, setToast] = useState({ show: false, message: '', type: 'error' });

    const fileInputRef = useRef(null);
    const imageRef = useRef(null);

    // Toast logic:
    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast({ ...toast, show: false }), 4000);
            return () => clearTimeout(timer);
        }
    }, [toast, toast.show]);

    const showToast = (message, type = 'error') => {
        setToast({ show: true, message, type });
    };

    const placeholderImg = "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=400&auto=format&fit=crop&q=60";

    const filters = [
        { name: 'Normal', class: '' },
        { name: 'Clarendon', class: 'contrast(120%) brightness(110%) saturate(125%) hue-rotate(-10deg)' },
        { name: 'Gingham', class: 'sepia(20%) contrast(90%) brightness(110%)' },
        { name: 'Moon', class: 'grayscale(100%) contrast(110%) brightness(110%)' },
        { name: 'Lark', class: 'contrast(110%) brightness(110%) saturate(130%)' },
        { name: 'Reyes', class: 'sepia(30%) brightness(110%) contrast(85%)' },
        { name: 'Juno', class: 'contrast(115%) brightness(110%) saturate(140%) hue-rotate(-20deg)' },
        { name: 'Slumber', class: 'brightness(105%) contrast(90%) saturate(60%)' },
        { name: 'Crema', class: 'sepia(10%) contrast(95%) brightness(105%) saturate(85%)' },
        { name: 'Ludwig', class: 'brightness(105%) contrast(105%) saturate(110%)' },
        { name: 'Aden', class: 'hue-rotate(-20deg) contrast(90%) brightness(115%) saturate(85%)' },
        { name: 'Perpetua', class: 'contrast(110%) brightness(110%) saturate(110%) hue-rotate(-30deg)' },
    ];

    const handleFileUpload = (file) => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
                setSelectedFilter('Normal');
                showToast("Image uploaded successfully!", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUrlSubmit = () => {
        if (!imageUrl) return;

        // Proxy bypass for CORS
        const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(imageUrl)}`;

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = proxiedUrl;

        img.onload = () => {
            setUploadedImage(proxiedUrl);
            setSelectedFilter('Normal');
            showToast("Image loaded from URL!", "success");
        };

        img.onerror = () => {
            showToast("Security Error: This website blocks direct linking. Try downloading the image first.", "error");
        };
    };

    const handleDownload = () => {
        if (!uploadedImage) return;

        const canvas = document.createElement('canvas');
        const img = imageRef.current;
        if (!img.complete || img.naturalWidth === 0) {
            showToast("Image is still loading. Please wait.", "error");
            return;
        }

        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');

        const currentFilter = filters.find(f => f.name === selectedFilter).class;
        ctx.filter = currentFilter === '' ? 'none' : currentFilter;

        try {
            ctx.drawImage(img, 0, 0);
            const link = document.createElement('a');
            link.download = `insta-filter-${selectedFilter.toLowerCase()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast("Image downloaded successfully!", "success");
        } catch {
            showToast("CORS Restriction: Cannot download this URL image. Please upload a file instead.", "error");
        }
    };

    const handleReset = () => {
        setSelectedFilter('Normal');
        setUploadedImage(null);
        setImageUrl('');
        showToast("Settings reset.", "success");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 font-manrope relative overflow-x-hidden">

            {/* Custom Animated Toast */}
            {toast.show && (
                <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border transition-all duration-300 transform translate-x-0 animate-in slide-in-from-right-full ${toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
                    {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span className="text-sm font-bold">{toast.message}</span>
                    <button onClick={() => setToast({ ...toast, show: false })} className="ml-2 hover:opacity-70">
                        <X size={16} />
                    </button>
                </div>
            )}

            <div className="max-w-5xl mx-auto space-y-6">

                {/* Row 1: Tabs */}
                <div className="flex justify-center">
                    <div className="bg-slate-200 p-1.5 rounded-xl flex w-full max-w-sm">
                        <button onClick={() => setMode('uploadFile')} className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'uploadFile' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}>
                            <FolderOpen size={16} /> Upload File
                        </button>
                        <button onClick={() => setMode('uploadFromUrl')} className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'uploadFromUrl' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}>
                            <Link size={16} /> Upload from URL
                        </button>
                    </div>
                </div>

                {/* Row 2: Input Area */}
                <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
                    {mode === 'uploadFile' ? (
                        <div
                            onDrop={(e) => { e.preventDefault(); handleFileUpload(e.dataTransfer.files[0]); }}
                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                            onDragLeave={() => setIsDragging(false)}
                            onClick={() => fileInputRef.current?.click()}
                            className={`m-4 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-all ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
                        >
                            <Upload className="mx-auto mb-4 text-slate-400" size={32} />
                            <p className="text-slate-600">Drag your image here, or <span className="text-indigo-600 font-bold">browse</span></p>
                            <input ref={fileInputRef} type="file" accept="image/*" onChange={(e) => handleFileUpload(e.target.files[0])} className="hidden" />
                        </div>
                    ) : (
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="Paste Image URL here..."
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="bg-white flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition-all"
                                />
                                <button onClick={handleUrlSubmit} className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md active:scale-95">Load Image</button>
                            </div>
                            <p className="mt-2 text-[10px] text-slate-400 ml-1 italic">Note: Make sure the URL is public and direct.</p>
                        </div>
                    )}
                </div>

                {/* Row 3: Preview Box */}
                <div className="bg-white rounded-lg border border-gray-300 p-4 min-h-100 flex items-center justify-center overflow-hidden relative cursor-not-allowed">
                    {uploadedImage ? (
                        <img
                            ref={imageRef}
                            src={uploadedImage}
                            alt="Main Preview"
                            crossOrigin="anonymous"
                            className="max-w-full max-h-137.5 rounded-lg transition-all duration-500"
                            style={{ filter: filters.find(f => f.name === selectedFilter).class }}
                        />
                    ) : (
                        <div className="text-center space-y-4">
                            <Settings2 className="mx-auto text-slate-200 animate-pulse" size={64} />
                            <p className="text-slate-400 font-medium">Upload an image before starting to apply filters</p>
                        </div>
                    )}
                </div>

                {/* Row 4: Filters Palette */}
                <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <div className="flex gap-2 min-w-max px-2">
                        {filters.map((filter) => (
                            <div
                                key={filter.name}
                                onClick={() => setSelectedFilter(filter.name)}
                                className="flex flex-col items-center gap-2 cursor-pointer group"
                            >
                                <span className={`text-[11px] font-bold uppercase tracking-tight transition-all ${selectedFilter === filter.name ? 'text-indigo-600 scale-110' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                    {filter.name}
                                </span>
                                <div className={`w-19 h-19 rounded-lg overflow-hidden border-2 transition-all ${selectedFilter === filter.name ? 'border-indigo-600 ring-4 ring-indigo-50' : 'border-gray-200 group-hover:border-gray-300'}`}>
                                    <img
                                        src={uploadedImage || placeholderImg}
                                        alt={filter.name}
                                        crossOrigin="anonymous"
                                        className="w-full h-full object-cover"
                                        style={{ filter: filter.class }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 5: Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 pb-10">
                    <button onClick={handleReset} className="flex-1 sm:flex-none items-center justify-center gap-2 px-14 py-3 rounded-full border-2 border-gray-200 bg-white font-bold text-slate-600 hover:bg-gray-50 transition-all flex active:scale-95">
                        <RotateCcw size={18} /> Reset
                    </button>
                    <button
                        onClick={handleDownload}
                        disabled={!uploadedImage}
                        className="flex-1 sm:flex-none items-center justify-center gap-2 px-12 py-3 rounded-full bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Download size={18} /> Download
                    </button>
                </div>

            </div>
        </div>
    );
};

export default InstagramFiltersTool;