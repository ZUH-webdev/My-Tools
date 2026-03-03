import { useState } from 'react';
import { LayoutGrid, Download, Instagram, AlertCircle, Loader2 } from 'lucide-react';
import { getInstagramPhotos } from '../api/instaDownloaderApi';

const InstaPhotoDownloader = () => {
    const [postUrl, setPostUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [toast, setToast] = useState({ show: false, message: '' });

    const showToast = (msg) => {
        setToast({ show: true, message: msg });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const handleGetPhotos = async () => {
        if (!postUrl.trim() || !postUrl.includes('instagram.com')) {
            showToast("Please enter a valid Instagram URL!");
            return;
        }

        setIsLoading(true);
        setPhotos([]);

        try {
            const data = await getInstagramPhotos(postUrl);

            if (data && data.length > 0) {
                setPhotos(data);
            } else {
                showToast("No public media found. Ensure the post is public.");
            }
        } catch {
            showToast("API Error: Quota exceeded or link restricted.");
        } finally {
            setIsLoading(false);
        }
    };

    const downloadImage = async (imgUrl, id) => {
        try {
            const response = await fetch(imgUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `insta-photo-${id}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch {
            window.open(imgUrl, '_blank');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-manrope p-4 md:p-8">
            {toast.show && (
                <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-2 animate-bounce">
                    <AlertCircle size={18} className="text-red-400" />
                    <span className="text-sm font-semibold">{toast.message}</span>
                </div>
            )}

            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 w-full space-y-1">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                            <div className="relative flex-1 w-full">
                                <label className="absolute top-2.5 left-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider z-10 pointer-events-none">
                                    Instagram Post URL
                                </label>
                                <input
                                    type="text"
                                    value={postUrl}
                                    onChange={(e) => setPostUrl(e.target.value)}
                                    placeholder="e.g. https://www.instagram.com/p/CZpBXgogFSO/"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-5 pt-6 pb-2.5 outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-600 placeholder:text-slate-300"
                                />
                            </div>

                            <button
                                onClick={handleGetPhotos}
                                disabled={isLoading}
                                className="w-full md:w-auto h-14.5 bg-indigo-600 hover:bg-indigo-700 text-white px-10 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 whitespace-nowrap shadow-lg shadow-indigo-100"
                            >
                                {isLoading ? <Loader2 className="animate-spin" /> : <LayoutGrid size={20} />}
                                Get Photos
                            </button>
                        </div>
                        <p className="text-[11px] text-slate-400 italic ml-2">
                            *The post must be public for photos to be downloaded.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.length > 0 ? (
                        photos.map((photo) => (
                            <div key={photo.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 group animate-in fade-in slide-in-from-bottom-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-square bg-slate-50 relative flex items-center justify-center p-1">
                                    <img
                                        src={photo.url}
                                        className="w-full h-full object-contain"
                                        alt="Insta content"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                                        <Instagram size={80} />
                                    </div>
                                </div>
                                <button
                                    onClick={() => downloadImage(photo.url, photo.id)}
                                    className="w-full py-4 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-indigo-600 flex items-center justify-center gap-2 font-bold text-sm transition-colors border-t border-indigo-50"
                                >
                                    <Download size={16} />
                                    Download High Quality
                                </button>
                            </div>
                        ))
                    ) : (
                        [1, 2, 3].map((i) => (
                            <div key={i} className="bg-[#F0F2FF]/50 rounded-lg overflow-hidden border border-gray-200">
                                <div className="aspect-square flex items-center justify-center">
                                    <Instagram size={80} className="text-indigo-100/60" />
                                </div>
                                <div className="w-full py-4 bg-[#E0E7FF]/40 flex items-center justify-center gap-2 text-indigo-200 font-bold text-sm">
                                    <Download size={16} />
                                    Download
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstaPhotoDownloader;