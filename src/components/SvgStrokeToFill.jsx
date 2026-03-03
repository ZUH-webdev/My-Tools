import { useState, useRef } from 'react';
import { Upload, Copy, Download, Check, X } from 'lucide-react';

export default function SvgStrokeToFill() {
  const [convertedSvg, setConvertedSvg] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const uploadAreaRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'image/svg+xml') {
      processFile(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/svg+xml') {
      processFile(file);
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const processFile = (file) => {
    setFileName(file.name);
    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setTimeout(() => {
        convertStrokeToFill(content);
        setIsProcessing(false);
      }, 500);
    };
    reader.readAsText(file);
  };

  const convertStrokeToFill = (svgString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const svg = doc.querySelector('svg');

    if (!svg) return;

    // Remove fill="none" from svg element
    if (svg.getAttribute('fill') === 'none') {
      svg.removeAttribute('fill');
    }

    // Process all elements with stroke
    const strokedElements = svg.querySelectorAll('[stroke]');
    
    strokedElements.forEach(el => {
      const stroke = el.getAttribute('stroke');
      
      if (stroke && stroke !== 'none') {
        // Set fill to stroke color
        el.setAttribute('fill', stroke);
        
        // Remove all stroke-related attributes
        el.removeAttribute('stroke');
        el.removeAttribute('stroke-width');
        el.removeAttribute('stroke-linecap');
        el.removeAttribute('stroke-linejoin');
        el.removeAttribute('stroke-dasharray');
        el.removeAttribute('stroke-dashoffset');
        el.removeAttribute('stroke-miterlimit');
        el.removeAttribute('stroke-opacity');
      }
    });

    // Add fill-rule="evenodd" to paths if not present
    const paths = svg.querySelectorAll('path');
    paths.forEach(path => {
      if (!path.getAttribute('fill-rule')) {
        path.setAttribute('fill-rule', 'evenodd');
      }
    });

    const serializer = new XMLSerializer();
    let converted = serializer.serializeToString(svg);
    
    // Clean up the output - remove extra spaces and format nicely
    converted = converted
      .replace(/\s+/g, ' ')
      .replace(/> </g, '><')
      .trim();

    setConvertedSvg(converted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([convertedSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName.replace('.svg', '-converted.svg') || 'converted.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setConvertedSvg('');
    setFileName('');
    setCopied(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-linear-to-br p-3 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          {/* Upload Section */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div
              ref={uploadAreaRef}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleUploadAreaClick}
              className={`relative border-3 border-dashed rounded-xl p-8 sm:p-10 text-center transition-all duration-300 cursor-pointer ${
                isDragging
                  ? 'border-blue-500 bg-blue-50 scale-[1.01]'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              <div className={`transition-all duration-300 ${isDragging ? 'scale-105' : ''}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mb-4">
                  <Upload className="w-7 h-7 text-gray-500" />
                </div>
                <h2 className="text-lg sm:text-xl text-gray-800 mb-2 font-semibold">
                  Drag your SVG here, or click to{' '}
                  <span className="text-blue-600 font-bold underline decoration-2 underline-offset-4">
                    browse
                  </span>
                </h2>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".svg,image/svg+xml"
                  onChange={handleFileSelect}
                  className="hidden"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>

          {/* Processing Indicator */}
          {isProcessing && (
            <div className="px-6 pb-6 text-center">
              <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full">
                <div className="animate-spin rounded-full h-5 w-5 border-3 border-blue-200 border-t-blue-600"></div>
                <span className="text-blue-700 font-medium">Converting...</span>
              </div>
            </div>
          )}

          {/* Results Section */}
          {convertedSvg && !isProcessing && (
            <>
              {/* File Info Bar */}
              <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-3 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Converted File</p>
                    <p className="font-semibold text-sm text-gray-800 truncate">
                      {fileName.replace('.svg', '-converted.svg')}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors shrink-0"
                  title="Upload new file"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Preview and Code Section */}
              <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 space-y-4">
                {/* Preview */}
                <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
                  <div className="bg-linear-to-r from-gray-800 to-gray-900 px-4 py-3">
                    <h3 className="text-base font-semibold text-white">Preview</h3>
                  </div>
                  <div className="p-4 sm:p-6 flex items-center justify-center min-h-15 bg-linear-to-br from-gray-50 to-gray-100">
                    <div
                      className="w-full max-w-50 sm:max-w-62.5 flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: convertedSvg }}
                    />
                  </div>
                </div>

                {/* Code Display */}
                <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-700">
                  <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">Converted SVG</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 overflow-x-auto max-h-70">
                    <pre className="text-xs sm:text-sm text-green-400 font-mono whitespace-pre-wrap break-all leading-relaxed">
                      {convertedSvg}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold shadow-sm hover:shadow group"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Copy SVG
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg group"
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download SVG
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}