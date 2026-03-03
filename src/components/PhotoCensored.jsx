import { useState, useRef, useEffect, useCallback } from 'react';
import { Upload, RotateCcw, Download, Eye, Trash2 } from 'lucide-react';

const PhotoCensored = () => {
    const [image, setImage] = useState(null);
    const [censorType, setCensorType] = useState('pixelate');
    const [pixelSize, setPixelSize] = useState(10);
    const [selection, setSelection] = useState(null);
    const [isSelecting, setIsSelecting] = useState(false);
    const [startPoint, setStartPoint] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);

    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    setImage(img);
                    setProcessedImage(null);
                    setSelection(null);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setImage(null);
        setProcessedImage(null);
        setSelection(null);
    };

    const drawImage = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !image) return;

        const ctx = canvas.getContext('2d');
        const maxWidth = 800;
        const maxHeight = 600;

        let width = image.width;
        let height = image.height;

        if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
        }
        if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(processedImage || image, 0, 0, width, height);

        if (selection && !processedImage) {
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.strokeRect(selection.x, selection.y, selection.width, selection.height);
            ctx.setLineDash([]);
        }
    }, [image, processedImage, selection]);

    useEffect(() => {
        if (image) {
            drawImage();
        }
    }, [image, drawImage]);

    const handleMouseDown = (e) => {
        if (!image || processedImage) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setIsSelecting(true);
        setStartPoint({ x, y });
        setSelection({ x, y, width: 0, height: 0 });
    };

    const handleMouseMove = (e) => {
        if (!isSelecting || !startPoint) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const width = x - startPoint.x;
        const height = y - startPoint.y;

        setSelection({
            x: width > 0 ? startPoint.x : x,
            y: height > 0 ? startPoint.y : y,
            width: Math.abs(width),
            height: Math.abs(height)
        });
    };

    const handleMouseUp = () => {
        setIsSelecting(false);
    };

    const handleTouchStart = (e) => {
        if (!image || processedImage) return;
        e.preventDefault();

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        setIsSelecting(true);
        setStartPoint({ x, y });
        setSelection({ x, y, width: 0, height: 0 });
    };

    const handleTouchMove = (e) => {
        if (!isSelecting || !startPoint) return;
        e.preventDefault();

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        const width = x - startPoint.x;
        const height = y - startPoint.y;

        setSelection({
            x: width > 0 ? startPoint.x : x,
            y: height > 0 ? startPoint.y : y,
            width: Math.abs(width),
            height: Math.abs(height)
        });
    };

    const handleTouchEnd = () => {
        setIsSelecting(false);
    };

    const applyCensor = () => {
        if (!selection || !image) return;

        const canvas = canvasRef.current;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        tempCtx.drawImage(image, 0, 0, canvas.width, canvas.height);

        const imageData = tempCtx.getImageData(
            selection.x,
            selection.y,
            selection.width,
            selection.height
        );

        if (censorType === 'pixelate') {
            pixelateImageData(imageData, pixelSize);
        } else if (censorType === 'blur') {
            blurImageData(imageData, pixelSize);
        } else if (censorType === 'blackbar') {
            blackBarImageData(imageData);
        }

        tempCtx.putImageData(imageData, selection.x, selection.y);

        const processedImg = new Image();
        processedImg.onload = () => {
            setProcessedImage(processedImg);
            setSelection(null);
        };
        processedImg.src = tempCanvas.toDataURL();
    };

    const pixelateImageData = (imageData, size) => {
        const { data, width, height } = imageData;

        for (let y = 0; y < height; y += size) {
            for (let x = 0; x < width; x += size) {
                let r = 0, g = 0, b = 0, a = 0, count = 0;

                for (let py = 0; py < size && y + py < height; py++) {
                    for (let px = 0; px < size && x + px < width; px++) {
                        const i = ((y + py) * width + (x + px)) * 4;
                        r += data[i];
                        g += data[i + 1];
                        b += data[i + 2];
                        a += data[i + 3];
                        count++;
                    }
                }

                r = Math.floor(r / count);
                g = Math.floor(g / count);
                b = Math.floor(b / count);
                a = Math.floor(a / count);

                for (let py = 0; py < size && y + py < height; py++) {
                    for (let px = 0; px < size && x + px < width; px++) {
                        const i = ((y + py) * width + (x + px)) * 4;
                        data[i] = r;
                        data[i + 1] = g;
                        data[i + 2] = b;
                        data[i + 3] = a;
                    }
                }
            }
        }
    };

    const blurImageData = (imageData, strength) => {
        const { data, width, height } = imageData;
        const original = new Uint8ClampedArray(data);
        const radius = Math.max(1, Math.floor(strength / 2));

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let r = 0, g = 0, b = 0, a = 0, count = 0;

                for (let ky = -radius; ky <= radius; ky++) {
                    for (let kx = -radius; kx <= radius; kx++) {
                        const px = x + kx;
                        const py = y + ky;

                        if (px >= 0 && px < width && py >= 0 && py < height) {
                            const i = (py * width + px) * 4;
                            r += original[i];
                            g += original[i + 1];
                            b += original[i + 2];
                            a += original[i + 3];
                            count++;
                        }
                    }
                }

                const i = (y * width + x) * 4;
                data[i] = r / count;
                data[i + 1] = g / count;
                data[i + 2] = b / count;
                data[i + 3] = a / count;
            }
        }
    };

    const blackBarImageData = (imageData) => {
        const { data } = imageData;
        for (let i = 0; i < data.length; i += 4) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 255;
        }
    };

    const handleReset = () => {
        setProcessedImage(null);
        setSelection(null);
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'censored-image.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div className="min-h-screen bg-linear-to-br md:p-8 font-manrope">
            <div className="max-w-5xl mx-auto">
                {!image ? (
                    <div className="bg-white rounded-2xl shadow p-8 md:p-12 mb-8">
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-4 border-dashed border-slate-300 rounded-xl p-12 md:p-20 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all"
                        >
                            <Upload className="w-16 h-16 mx-auto text-slate-400 mb-4" />
                            <p className="text-lg text-slate-600">
                                Drag your image here, or click to <span className="text-blue-600 font-semibold">browse</span>
                            </p>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                        <div className="relative flex justify-center mb-6">
                            <button
                                onClick={handleDeleteImage}
                                className="absolute top-2 right-2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-md"
                                title="Delete Image"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                            <canvas
                                ref={canvasRef}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                className="max-w-full h-auto border-2 border-slate-200 rounded-lg cursor-crosshair touch-none"
                                style={{ maxHeight: '600px' }}
                            />
                        </div>
                        <p className="text-center text-slate-600 text-sm mb-4">
                            {processedImage ? 'Image censored successfully!' : 'Click and drag to select area to censor'}
                        </p>
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Censor Type
                            </label>
                            <select
                                value={censorType}
                                onChange={(e) => setCensorType(e.target.value)}
                                disabled={!!processedImage}
                                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none disabled:bg-slate-100 disabled:cursor-not-allowed"
                            >
                                <option value="pixelate">Pixelate</option>
                                <option value="blur">Blur</option>
                                <option value="blackbar">Black Bar</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Pixel Size: {pixelSize}px
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="50"
                                value={pixelSize}
                                onChange={(e) => setPixelSize(parseInt(e.target.value))}
                                disabled={!!processedImage || censorType === 'blackbar'}
                                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={applyCensor}
                            disabled={!selection || processedImage}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                        >
                            <Eye className="w-5 h-5" />
                            Censor
                        </button>

                        <button
                            onClick={handleReset}
                            disabled={!processedImage}
                            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-full disabled:bg-slate-100 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Reset
                        </button>

                        <button
                            onClick={handleDownload}
                            disabled={!processedImage}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-gray-400 transition-colors flex items-center justify-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCensored;
