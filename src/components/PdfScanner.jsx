import { useState, useRef } from 'react';
import { Upload, RotateCw, Sun, Droplets, FileText, Download, ChevronDown } from 'lucide-react';

export default function PdfScanner() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [scale, setScale] = useState(117);
  const [blur, setBlur] = useState(0);
  const [noise, setNoise] = useState(0);
  const [blackAndWhite, setBlackAndWhite] = useState(false);
  const [paperBorder, setPaperBorder] = useState(false);
  const [highResolution, setHighResolution] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (file) => {
    if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const getScannedStyle = () => {
    return {
      filter: `
        brightness(${brightness})
        contrast(${contrast})
        blur(${blur}px)
        ${blackAndWhite ? 'grayscale(1)' : 'grayscale(0)'}
      `,
      transform: `rotate(${rotation}deg) scale(${scale / 100})`,
      opacity: noise > 0 ? 0.95 : 1,
    };
  };

  const downloadAsPDF = async () => {
    if (!uploadedImage) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = 'anonymous';
    
    img.onload = async () => {
      // Set canvas size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Fill white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Apply transformations
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale / 100, scale / 100);
      
      // Apply filters
      ctx.filter = `
        brightness(${brightness})
        contrast(${contrast})
        blur(${blur}px)
        ${blackAndWhite ? 'grayscale(1)' : 'grayscale(0)'}
      `;
      
      ctx.drawImage(img, -img.width / 2, -img.height / 2, img.width, img.height);
      ctx.restore();
      
      // Get image data URL
      const imgDataUrl = canvas.toDataURL('image/jpeg', 0.95);
      
      // Create jsPDF instance - import from CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      script.onload = () => {
        const { jsPDF } = window.jspdf;
        
        // Calculate PDF dimensions (A4 size)
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        // Create PDF
        const pdf = new jsPDF({
          orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
          unit: 'mm',
          format: [pdfWidth, pdfHeight]
        });
        
        // Add image to PDF
        pdf.addImage(imgDataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        
        // Save PDF
        pdf.save('scanned-document.pdf');
      };
      
      document.head.appendChild(script);
    };
    
    img.src = uploadedImage;
    setShowDropdown(false);
  };

  const downloadAsImage = async () => {
    if (!uploadedImage) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Set canvas size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Apply transformations
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale / 100, scale / 100);
      
      // Apply filters
      ctx.filter = `
        brightness(${brightness})
        contrast(${contrast})
        blur(${blur}px)
        ${blackAndWhite ? 'grayscale(1)' : 'grayscale(0)'}
      `;
      
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'scanned-document.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');
    };
    
    img.src = uploadedImage;
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Upload Area */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600 mb-1">
              Drag your file here, or click to{' '}
              <span className="text-blue-600 font-medium">browse</span>
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            * PDF, DOCX and Image Files (JPEG, PNG, WEBP, GIF) are supported.
          </p>
        </div>

        {/* Scanner Settings */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gray-700 rounded-sm relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-0.5 bg-gray-700"></div>
                </div>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Scanner Settings</h2>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Rotation */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <RotateCw className="w-4 h-4" />
                  Rotation: {rotation}°
                </label>
              </div>
              <input
                type="range"
                min="-10"
                max="10"
                step="0.1"
                value={rotation}
                onChange={(e) => setRotation(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Brightness */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Brightness: {brightness.toFixed(2)}
                </label>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                step="0.01"
                value={brightness}
                onChange={(e) => setBrightness(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Contrast */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Contrast: {contrast.toFixed(2)}
                </label>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                step="0.01"
                value={contrast}
                onChange={(e) => setContrast(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Scale */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Scale: {scale}
                </label>
              </div>
              <input
                type="range"
                min="50"
                max="150"
                step="1"
                value={scale}
                onChange={(e) => setScale(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Blur */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <Droplets className="w-4 h-4" />
                  Blur: {blur.toFixed(2)}px
                </label>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                step="0.01"
                value={blur}
                onChange={(e) => setBlur(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Noise */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-600 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Noise: {noise.toFixed(2)}
                </label>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={noise}
                onChange={(e) => setNoise(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={blackAndWhite}
                onChange={(e) => setBlackAndWhite(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Black & White</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={paperBorder}
                onChange={(e) => setPaperBorder(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Paper Border</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={highResolution}
                onChange={(e) => setHighResolution(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">High Resolution</span>
            </label>
          </div>
        </div>

        {/* Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Original Document */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-gray-700" />
              <h3 className="text-base font-semibold text-gray-900">Original Document</h3>
            </div>
            <div className="bg-linear-to-br bg-gray-100 rounded-xl aspect-square flex items-center justify-center p-8 overflow-hidden">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Original"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <p>Upload a document to see preview</p>
                </div>
              )}
            </div>
          </div>

          {/* Scanned Output */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-gray-700 rounded-sm"></div>
              </div>
              <h3 className="text-base font-semibold text-gray-900">Scanned Output</h3>
            </div>
            <div className="bg-linear-to-br from-gray-100 to-gray-300 rounded-xl aspect-square flex items-center justify-center p-8 overflow-hidden perspective-1000">
              <div
                className="bg-linear-to-br flex items-center justify-center p-8 overflow-hidden">
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Scanned"
                    className="max-w-full max-h-full object-contain"
                    style={getScannedStyle()}
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                  >
                    <p>Upload a document to see a preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              disabled={!uploadedImage}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg disabled:cursor-not-allowed"
            >
              Download
              <ChevronDown className="w-5 h-5" />
            </button>
            
            {showDropdown && uploadedImage && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10 min-w-60">
                <button
                  onClick={downloadAsPDF}
                  className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 font-medium flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Download as PDF
                </button>
                <button
                  onClick={downloadAsImage}
                  className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700 font-medium flex items-center gap-2 border-t border-gray-100"
                >
                  <Download className="w-4 h-4" />
                  Download as Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}