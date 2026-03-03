import { useState, useRef, useEffect, useCallback } from 'react';
import { Upload, Copy, RotateCcw, Shuffle, Check, ChevronDown } from 'lucide-react';

const ClipPathGenerator = () => {
  const [shape, setShape] = useState('triangle');
  const [width, setWidth] = useState(922);
  const [height, setHeight] = useState(400);
  const [showOutside, setShowOutside] = useState(false);
  const [customBg, setCustomBg] = useState(true);
  const [hideGuides, setHideGuides] = useState(false);
  const [bgUrl, setBgUrl] = useState('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200');
  const [clipPath, setClipPath] = useState('polygon(50% 0%, 100% 100%, 0% 100%)');
  const [points, setPoints] = useState([
    { x: 50, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 }
  ]);
  const [dragging, setDragging] = useState(null);
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const shapes = {
    triangle: [
      { x: 50, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ],
    trapezoid: [
      { x: 20, y: 0 },
      { x: 80, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ],
    parallelogram: [
      { x: 25, y: 0 },
      { x: 100, y: 0 },
      { x: 75, y: 100 },
      { x: 0, y: 100 }
    ],
    rhombus: [
      { x: 50, y: 0 },
      { x: 100, y: 50 },
      { x: 50, y: 100 },
      { x: 0, y: 50 }
    ],
    pentagon: [
      { x: 50, y: 0 },
      { x: 100, y: 38 },
      { x: 82, y: 100 },
      { x: 18, y: 100 },
      { x: 0, y: 38 }
    ],
    hexagon: [
      { x: 25, y: 0 },
      { x: 75, y: 0 },
      { x: 100, y: 50 },
      { x: 75, y: 100 },
      { x: 25, y: 100 },
      { x: 0, y: 50 }
    ],
    heptagon: [
      { x: 50, y: 0 },
      { x: 90, y: 20 },
      { x: 100, y: 60 },
      { x: 75, y: 100 },
      { x: 25, y: 100 },
      { x: 0, y: 60 },
      { x: 10, y: 20 }
    ],
    octagon: [
      { x: 30, y: 0 },
      { x: 70, y: 0 },
      { x: 100, y: 30 },
      { x: 100, y: 70 },
      { x: 70, y: 100 },
      { x: 30, y: 100 },
      { x: 0, y: 70 },
      { x: 0, y: 30 }
    ],
    bevel: [
      { x: 20, y: 0 },
      { x: 80, y: 0 },
      { x: 100, y: 20 },
      { x: 100, y: 80 },
      { x: 80, y: 100 },
      { x: 20, y: 100 },
      { x: 0, y: 80 },
      { x: 0, y: 20 }
    ],
    rabbet: [
      { x: 0, y: 15 },
      { x: 15, y: 15 },
      { x: 15, y: 0 },
      { x: 85, y: 0 },
      { x: 85, y: 15 },
      { x: 100, y: 15 },
      { x: 100, y: 85 },
      { x: 85, y: 85 },
      { x: 85, y: 100 },
      { x: 15, y: 100 },
      { x: 15, y: 85 },
      { x: 0, y: 85 }
    ],
    arrow: [
      { x: 40, y: 0 },
      { x: 40, y: 20 },
      { x: 100, y: 50 },
      { x: 40, y: 80 },
      { x: 40, y: 100 },
      { x: 0, y: 50 }
    ],
    star: [
      { x: 50, y: 0 },
      { x: 61, y: 35 },
      { x: 98, y: 35 },
      { x: 68, y: 57 },
      { x: 79, y: 91 },
      { x: 50, y: 70 },
      { x: 21, y: 91 },
      { x: 32, y: 57 },
      { x: 2, y: 35 },
      { x: 39, y: 35 }
    ],
    cross: [
      { x: 10, y: 0 },
      { x: 90, y: 0 },
      { x: 90, y: 10 },
      { x: 100, y: 10 },
      { x: 100, y: 90 },
      { x: 90, y: 90 },
      { x: 90, y: 100 },
      { x: 10, y: 100 },
      { x: 10, y: 90 },
      { x: 0, y: 90 },
      { x: 0, y: 10 },
      { x: 10, y: 10 }
    ],
    message: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 75 },
      { x: 75, y: 75 },
      { x: 75, y: 100 },
      { x: 50, y: 75 },
      { x: 0, y: 75 }
    ],
    close: [
      { x: 20, y: 0 },
      { x: 0, y: 20 },
      { x: 30, y: 50 },
      { x: 0, y: 80 },
      { x: 20, y: 100 },
      { x: 50, y: 70 },
      { x: 80, y: 100 },
      { x: 100, y: 80 },
      { x: 70, y: 50 },
      { x: 100, y: 20 },
      { x: 80, y: 0 },
      { x: 50, y: 30 }
    ],
    frame: [
      { x: 0, y: 0 },
      { x: 0, y: 100 },
      { x: 25, y: 100 },
      { x: 25, y: 25 },
      { x: 75, y: 25 },
      { x: 75, y: 75 },
      { x: 25, y: 75 },
      { x: 25, y: 100 },
      { x: 100, y: 100 },
      { x: 100, y: 0 }
    ]
  };

  const unsplashImages = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200'
  ];

  const updateClipPath = (pts) => {
    const pathString = pts.map(p => `${p.x}% ${p.y}%`).join(', ');
    setClipPath(`polygon(${pathString})`);
  };
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateClipPath(points);
  }, [points]);

  const handleShapeChange = (newShape) => {
    setShape(newShape);
    setPoints(shapes[newShape]);
  };

  const handleMouseDown = (index, e) => {
    e.preventDefault();
    setDragging(index);
  };

  const handleMouseMove = useCallback((e) => {
    if (dragging === null || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newPoints = [...points];
    newPoints[dragging] = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    };
    setPoints(newPoints);
  },[dragging, points]);

  const handleMouseUp = () => {
    setDragging(null);
  };

  const handleTouchStart = (index, e) => {
    e.preventDefault();
    setDragging(index);
  };

  const handleTouchMove = useCallback((e) => {
    if (dragging === null || !containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;

    const newPoints = [...points];
    newPoints[dragging] = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    };
    setPoints(newPoints);
  },[dragging, points]);

  const handleTouchEnd = () => {
    setDragging(null);
  };

  useEffect(() => {
    if (dragging !== null) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [dragging, handleMouseMove, handleTouchMove, points]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`clip-path: ${clipPath};`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleReset = () => {
    setPoints(shapes[shape]);
  };

  const handleShuffle = () => {
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
    setBgUrl(randomImage);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBgUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br bg-gray-50 p-4 md:p-8 font-manrope">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow p-6 md:p-8 space-y-6">

          {/* Shape Selector and Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shape Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">Clip Path Shape</label>
              <div className="relative">
                <select
                  value={shape}
                  onChange={(e) => handleShapeChange(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white cursor-pointer"
                >
                  {Object.keys(shapes).map((s) => (
                    <option key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </option>
                  ))}
                </select>
                <ChevronDown 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" 
                  size={20} 
                />
              </div>
            </div>

            {/* Width Slider */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 pb-2.5">
                Width: <span className="text-blue-600">{width}px</span>
              </label>
              <input
                type="range"
                min="100"
                max="922"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider mt-4"
              />
            </div>

            {/* Height Slider */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 pb-2.5">
                Height: <span className="text-blue-600">{height}px</span>
              </label>
              <input
                type="range"
                min="100"
                max="400"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider mt-4"
              />
            </div>
          </div>

          {/* Preview Container */}
          <div className="space-y-4">
            <div
              className="relative mx-auto flex items-center justify-center overflow-hidden"
              style={{ 
                width: '100%', 
                maxWidth: `${width}px`,
                paddingBottom: `${(height / width) * 100}%`
              }}
            >
              {/* Background layer with blur when showOutside is enabled */}
              {showOutside && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: customBg ? `url(${bgUrl})` : 'none',
                    backgroundColor: customBg ? 'transparent' : '#667eea',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur brightness(1.2)',
                    opacity: 0.6
                  }}
                />
              )}
              
              {/* Main clipped content */}
              <div
                ref={containerRef}
                className="absolute inset-0 cursor-move select-none"
                style={{
                  backgroundImage: customBg ? `url(${bgUrl})` : 'none',
                  backgroundColor: customBg ? 'transparent' : '#667eea',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: clipPath
                }}
              >
                {!hideGuides && points.map((point, index) => (
                  <div
                    key={index}
                    onMouseDown={(e) => handleMouseDown(index, e)}
                    onTouchStart={(e) => handleTouchStart(index, e)}
                    className="absolute w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform z-10"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 px-5 py-3 font-bold bg-white text-indigo-600 rounded-full border border-indigo-600 transition-colors"
              >
                <Shuffle size={18} />
                Shuffle Image
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-bold"
              >
                <Upload size={18} />
                Upload Image
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-6 justify-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customBg}
                  onChange={(e) => setCustomBg(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-600"
                />
                <span className="text-gray-700 font-medium">Custom Background</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOutside}
                  onChange={(e) => setShowOutside(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-600"
                />
                <span className="text-gray-700 font-medium">Show Outside</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hideGuides}
                  onChange={(e) => setHideGuides(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-600"
                />
                <span className="text-gray-700 font-medium">Hide Guides</span>
              </label>
            </div>
          </div>

          {/* Background URL Input */}
          {customBg && (
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Background URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={bgUrl}
                  onChange={(e) => setBgUrl(e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                />
                <button
                  onClick={() => setBgUrl(bgUrl)}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Set
                </button>
              </div>
            </div>
          )}

          {/* CSS Code Display */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">CSS Code</label>
            <div className="relative">
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                clip-path: {clipPath};
              </pre>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors font-semibold"
            >
              <RotateCcw size={18} />
              Reset
            </button>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all font-semibold ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #3b82f6;
          cursor: pointer;
          border-radius: 50%;
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #3b82f6;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ClipPathGenerator;