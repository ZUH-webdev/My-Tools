import { useState, useEffect } from 'react';
import { Download, Copy, Check, AlertCircle } from 'lucide-react';

const ThumbnailGrabber = ({ tool, label, icon }) => {
    const [url, setUrl] = useState('');
    const [thumbnails, setThumbnails] = useState([]);
    const [error, setError] = useState('');
    const [copiedIndex, setCopiedIndex] = useState(null);

    // --- Custom Toast State ---
    const [toast, setToast] = useState({ show: false, message: '', type: 'error' });

    const showToast = (message, type = 'error') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'error' }), 3000);
    };

    // YouTube ID Extraction
    const getYoutubeId = (url) => {
        if (!url) return false;
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    };

    // Vimeo ID Extraction (Supports: Standard, Channels, Groups)
    const getVimeoId = (url) => {
        if (!url) return false;
        // Handle standard, channels and groups URLs
        const regExp = /(vimeo\.com\/|video\/|channels\/.*\/|groups\/.*\/videos\/)(\d+)(?=\b|\/)/;
        const match = url.match(regExp);
        return (match && match[2]) ? match[2] : false;
    };

    useEffect(() => {
        if (!url) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setThumbnails([]);
            setError('');
            return;
        }

        if (tool === 'youtube') {
            const id = getYoutubeId(url);
            if (id) {
                setError('');
                setThumbnails([
                    { label: 'Maximum Resolution', size: '1280x720', url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg` },
                    { label: 'Standard Definition', size: '640x480', url: `https://img.youtube.com/vi/${id}/sddefault.jpg` },
                    { label: 'High Quality', size: '480x360', url: `https://img.youtube.com/vi/${id}/hqdefault.jpg` },
                    { label: 'Medium Quality', size: '320x180', url: `https://img.youtube.com/vi/${id}/mqdefault.jpg` },
                    { label: 'List Thumbnail', size: '480x360', url: `https://img.youtube.com/vi/${id}/0.jpg` },
                    { label: 'Mini Thumbnail (Scene 1)', size: '120x90', url: `https://img.youtube.com/vi/${id}/1.jpg` },
                    { label: 'Mini Thumbnail (Scene 2)', size: '120x90', url: `https://img.youtube.com/vi/${id}/2.jpg` },
                    { label: 'Mini Thumbnail (Scene 3)', size: '120x90', url: `https://img.youtube.com/vi/${id}/3.jpg` }
                ]);
            } else {
                setThumbnails([]);
                setError('Please enter a valid YouTube URL');
                if (url.length > 25) showToast('Invalid YouTube URL Format', 'error');
            }
        }

        else if (tool === 'vimeo') {
            const id = getVimeoId(url);
            if (id) {
                setError('');
                // Fetching Vimeo Metadata for HD Thumbnails
                fetch(`https://vimeo.com/api/v2/video/${id}.json`)
                    .then(res => res.json())
                    .then(data => {
                        const baseImg = data[0].thumbnail_large.split('_')[0]; // Base URL to inject custom sizes
                        setThumbnails([
                            { label: 'X-Large (HD)', size: '1920x1080', url: `${baseImg}_1920x1080.jpg` },
                            { label: 'Large', size: '1280x720', url: `${baseImg}_1280x720.jpg` },
                            { label: 'Medium', size: '640x360', url: `${baseImg}_640x360.jpg` },
                            { label: 'Small', size: '320x180', url: `${baseImg}_320x180.jpg` },
                            { label: 'X-Small', size: '240x135', url: `${baseImg}_240x135.jpg` }
                        ]);
                    })
                    .catch(() => {
                        setError('Vimeo Video not found');
                        showToast('Error fetching Vimeo data', 'error');
                    });
            } else {
                setThumbnails([]);
                setError('Please enter a valid Vimeo URL');
                if (url.length > 20) showToast('Invalid Vimeo URL Format', 'error');
            }
        }
    }, [url, tool]);

    const handleCopy = (imgUrl, index) => {
        navigator.clipboard.writeText(imgUrl);
        setCopiedIndex(index);
        showToast('Link copied to clipboard', 'success');
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const handleDownload = async (imgUrl, label) => {
        try {
            const response = await fetch(imgUrl);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${label.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('Download started', 'success');
        } catch {
            window.open(imgUrl, '_blank');
            showToast('Opening image...', 'success');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-2 font-manrope text-slate-900 relative">

            {/* Custom Toast Notification */}
            {toast.show && (
                <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-full shadow-xl border animate-bounce ${toast.type === 'success' ? 'bg-white border-green-200 text-green-600' : 'bg-white border-red-200 text-red-600'
                    }`}>
                    {toast.type === 'success' ? <Check size={18} /> : <AlertCircle size={18} />}
                    <span className="text-sm font-bold">{toast.message}</span>
                </div>
            )}

            <div className="max-w-5xl mx-auto">

                {/* Input Field */}
                <div className="relative mb-4">
                    <div className="absolute top-1.5 left-2.5 px-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider z-10">
                        {label}
                    </div>
                    <input
                        type="text"
                        placeholder={`e.g. ${tool === 'youtube' ? 'https://www.youtube.com/watch?v=XqZsoesa55w' : 'https://vimeo.com/123456789'}`}
                        className={`w-full px-6 py-5 text-lg bg-white border rounded-lg outline-none focus:border-indigo-500 transition-all text-slate-600 font-medium ${error ? 'border-red-400' : 'border-gray-200'
                            }`}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-[10px] font-bold mt-1 ml-2 uppercase tracking-tight">{error}</p>}
                </div>

                {/* Main Content Area */}
                {thumbnails.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-lg py-32 flex flex-col items-center justify-center text-slate-400">
                        <div className="flex items-center justify-center mb-6">
                            {icon}
                        </div>
                        <p className="text-lg text-center font-bold">Enter a valid {label} to see the thumbnails</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                        {thumbnails.map((thumb, i) => (
                            <div key={i} className="group bg-white rounded-lg border border-slate-100 overflow-hidden hover:shadow-lg transition-all">
                                <div className="relative aspect-video bg-slate-100">
                                    <img
                                        src={thumb.url}
                                        alt={thumb.label}
                                        className="w-full h-full object-cover"
                                        onError={(e) => e.target.closest('.group').style.display = 'none'}
                                    />
                                    <div className="absolute top-4 right-4 bg-indigo-700 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-md">
                                        {thumb.size}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                                        {thumb.label}
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => handleCopy(thumb.url, i)}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 bg-white hover:text-slate-700 text-slate-600 rounded-full text-xs font-bold transition-all"
                                        >
                                            {copiedIndex === i ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                            {copiedIndex === i ? 'COPIED URL' : 'COPY URL'}
                                        </button>
                                        <button
                                            onClick={() => handleDownload(thumb.url, thumb.label)}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold transition-all"
                                        >
                                            <Download size={16} /> DOWNLOAD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThumbnailGrabber;