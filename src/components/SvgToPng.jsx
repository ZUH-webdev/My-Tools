import { Check, ChevronRightIcon, FileDown, FileText, RotateCcw, Trash2, UploadCloud } from 'lucide-react';
import { useState, useRef } from 'react';

const SvgToPng = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState('');
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [scale, setScale] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const [svgContent, setSvgContent] = useState(null);
    const [appliedScale, setAppliedScale] = useState(1);
    const [isApplied, setIsApplied] = useState(false);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            handleFileUpload(file);
        }
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleFileUpload = (file) => {
        // Update filename
        const newName = file.name.replace('.svg', '.png') || file.name + '.png';
        setFileName(newName);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            setSvgContent(content);

            // Create preview URL
            const blob = new Blob([content], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            setImagePreview(url);

            // Extract SVG dimensions
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(content, 'image/svg+xml');
            const svgElement = svgDoc.querySelector('svg');

            if (svgElement) {
                let width = parseInt(svgElement.getAttribute('width'));
                let height = parseInt(svgElement.getAttribute('height'));


                if (isNaN(width) || isNaN(height)) {
                    const viewBox = svgElement.getAttribute('viewBox');
                    if (viewBox) {
                        const parts = viewBox.split(' ');
                        if (parts.length >= 4) {
                            width = parseInt(parts[2]);
                            height = parseInt(parts[3]);
                        }
                    }
                }
                if (isNaN(width) || isNaN(height)) {
                    width = 512;
                    height = 512;
                }

                setImageSize({ width, height });
                setScale(1);
                setAppliedScale(1);
                setIsApplied(true);
            }
        };

        reader.readAsText(file);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleScaleChange = (e) => {
        const value = parseFloat(e.target.value);
        if (value >= 0.5 && value <= 5) {
            setScale(value);
            setIsApplied(value === appliedScale);
        }
    };

    const handleApply = () => {
        if (scale !== appliedScale) {
            setAppliedScale(scale);
            setIsApplied(true);
            alert(`Scale applied: ${scale}x\nNew size: ${Math.round(imageSize.width * scale)} x ${Math.round(imageSize.height * scale)} pixels`);
        }
    };

    const handleReset = () => {
        setScale(1);
        setAppliedScale(1);
        setIsApplied(true);
    };

    const handleDelete = () => {
        setFileName('');
        setImagePreview(null);
        setSvgContent(null);
        setImageSize({ width: 0, height: 0 });
        setScale(1);
        setAppliedScale(1);
        setIsApplied(false);
    };

    const handleDownload = () => {
        if (!fileName || !svgContent) {
            alert('Please upload an SVG file first');
            return;
        }

        try {
            // Create canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas dimensions based on applied scale
            const scaledWidth = Math.round(imageSize.width * appliedScale);
            const scaledHeight = Math.round(imageSize.height * appliedScale);
            canvas.width = scaledWidth;
            canvas.height = scaledHeight;

            // Create image element
            const img = new Image();

            // Create blob from SVG content
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);

            img.onload = () => {
                // Clear and draw
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

                // Create download
                const downloadUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = fileName;
                link.href = downloadUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                alert(`Downloaded: ${fileName}\nSize: ${scaledWidth} x ${scaledHeight} pixels`);
            };

            img.onerror = () => {
                alert('Error loading SVG. Please try with a different file.');
                URL.revokeObjectURL(url);
            };

            img.src = url;

        } catch (error) {
            console.error('Download error:', error);
            alert('Error generating PNG. Please try again.');
        }
    };

    // Calculate preview dimensions
    const getPreviewDimensions = () => {
        if (!imageSize.width || !imageSize.height) return { width: 200, height: 200 };

        const maxWidth = 400;
        const maxHeight = 300;

        let width = imageSize.width * appliedScale;
        let height = imageSize.height * appliedScale;

        // Maintain aspect ratio
        if (width > maxWidth) {
            height = (maxWidth / width) * height;
            width = maxWidth;
        }

        if (height > maxHeight) {
            width = (maxHeight / height) * width;
            height = maxHeight;
        }

        return { width: Math.round(width), height: Math.round(height) };
    };

    const previewDims = getPreviewDimensions();

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow p-8">

                {/* Drag and drop area */}
                <div
                    className={`border-3 border-dashed rounded-xl p-10 mb-8 text-center transition-all duration-200 cursor-pointer ${isDragging
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleBrowseClick}
                >
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gray-100">
                            <UploadCloud className='w-8 h-8' />
                        </div>

                        <p className="text-xl font-medium text-gray-700 mb-2">
                            Drag your SVG here, or click to browse
                        </p>

                        {/* SVG -> PNG visual */}
                        <div className="flex items-center justify-center space-x-6 my-6">
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-lg mb-2">
                                    <span className="font-bold text-purple-700 text-lg">SVG</span>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <ChevronRightIcon className='w-6 h-6' />
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-lg mb-2">
                                    <span className="font-bold text-green-700 text-lg">PNG</span>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleBrowseClick();
                            }}
                        >
                            Browse Files
                        </button>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".svg,image/svg+xml"
                        onChange={handleFileInput}
                    />
                </div>

                {/* Image Preview with Delete */}
                {imagePreview && (
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-medium text-gray-800">Preview:</h3>
                            <button
                                onClick={handleDelete}
                                className="flex items-center text-red-600 hover:text-red-800"
                            >
                                <Trash2 className='w-4 h-4 gap-1' />
                                Remove
                            </button>
                        </div>
                        <div className="flex justify-center items-center bg-gray-50 rounded-lg border border-gray-300 p-4">
                            <img
                                src={imagePreview}
                                alt="SVG Preview"
                                style={{
                                    width: `${previewDims.width}px`,
                                    height: `${previewDims.height}px`,
                                    maxWidth: '100%',
                                    objectFit: 'contain'
                                }}
                                className="rounded"
                                onError={(e) => {
                                    console.error('Image load error');
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* File info */}
                <div className="bg-gray-50 rounded-xl p-5 mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
                                <FileText className='w-8 h-8' />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 text-lg">
                                    {fileName || 'No file uploaded'}
                                </h3>
                                <div className="text-gray-600">
                                    <p>Original Size: {imageSize.width > 0 ? `${imageSize.width} x ${imageSize.height}` : '--'}</p>
                                    <p className={`font-medium ${isApplied ? 'text-green-600' : 'text-blue-600'}`}>
                                        {isApplied ? '✓ Applied Scale: ' : 'Scale to apply: '}
                                        {scale}x → {Math.round(imageSize.width * scale)} x {Math.round(imageSize.height * scale)} px
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scale controls */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-800">Scale: {scale.toFixed(1)}x</h3>
                        <span className="text-sm text-gray-500">0.5x to 5x</span>
                    </div>

                    <div className="mb-6">
                        <input
                            type="range"
                            min="0.5"
                            max="5"
                            step="0.1"
                            value={scale}
                            onChange={handleScaleChange}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>0.5x</span>
                            <span>1x</span>
                            <span>2x</span>
                            <span>3x</span>
                            <span>4x</span>
                            <span>5x</span>
                        </div>
                    </div>

                    {/* Action buttons  */}
                    <div className="flex space-x-4">
                        <button
                            className={`flex-1 py-3.5 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center ${isApplied
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-blue-600 hover:bg-blue-700'
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                            onClick={handleApply}
                            disabled={!fileName || isApplied}
                        >
                            {isApplied ? (
                                <>
                                    <Check className='w-6 h-6' />
                                    Applied
                                </>
                            ) : (
                                'Apply'
                            )}
                        </button>

                        <button
                            className="flex-1 py-3.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                            onClick={handleReset}
                            disabled={!fileName}
                        >
                            <RotateCcw className='w-4 h-4' />
                            Reset
                        </button>

                        <button
                            className="flex-1 py-3.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1sm:gap-2px-2 sm:px-4"
                            onClick={handleDownload}
                            disabled={!fileName}
                        >
                            <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">Download</span>
                        </button>
                    </div>
                </div>

                {/* Status info */}
                <div className={`p-4 rounded-lg border ${isApplied ? 'bg-green-50 border-green-100' : 'bg-blue-50 border-blue-100'}`}>
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 mr-2 ${isApplied ? 'text-green-600' : 'text-blue-600'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            {isApplied ? (
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            )}
                        </svg>
                        <span className={`font-medium ${isApplied ? 'text-green-800' : 'text-blue-800'}`}>
                            {fileName
                                ? (isApplied
                                    ? `Scale ${appliedScale}x applied. Ready to download!`
                                    : `Adjust scale and click "Apply" to confirm`
                                )
                                : 'Upload an SVG file to begin'}
                        </span>
                    </div>
                    {fileName && (
                        <p className={`text-sm mt-1 ml-7 ${isApplied ? 'text-green-700' : 'text-blue-700'}`}>
                            {isApplied
                                ? `PNG will be ${Math.round(imageSize.width * appliedScale)} x ${Math.round(imageSize.height * appliedScale)} pixels`
                                : `Current selection: ${scale}x scale (${Math.round(imageSize.width * scale)} x ${Math.round(imageSize.height * scale)} pixels)`
                            }
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SvgToPng;