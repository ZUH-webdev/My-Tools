import { useState } from 'react';
import { Check, Copy, RotateCcw } from 'lucide-react';

const getDirectionIcon = (dir) => {
  const iconStyle = "w-full h-full flex items-center justify-center";
  
  switch(dir) {
    case 'top-left':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-20 border-t-gray-300 border-r-20 border-r-transparent"></div></div>;
    case 'top':
      return <div className={iconStyle}><div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-b-20 border-b-gray-300"></div></div>;
    case 'top-right':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-20 border-t-gray-300 border-l-20 border-l-transparent"></div></div>;
    case 'left':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-12 border-t-transparent border-b-12 border-b-transparent border-r-20 border-r-gray-300"></div></div>;
    case 'right':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-12 border-t-transparent border-b-12 border-b-transparent border-l-20 border-l-gray-300"></div></div>;
    case 'bottom-left':
      return <div className={iconStyle}><div className="w-0 h-0 border-b-20 border-b-gray-300 border-r-20 border-r-transparent"></div></div>;
    case 'bottom':
      return <div className={iconStyle}><div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-300"></div></div>;
    case 'bottom-right':
      return <div className={iconStyle}><div className="w-0 h-0 border-b-20 border-b-gray-300 border-l-20 border-l-transparent"></div></div>;
    default:
      return null;
  }
};

const getSelectedDirectionIcon = (dir) => {
  const iconStyle = "w-full h-full flex items-center justify-center";
  
  switch(dir) {
    case 'top-left':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-20 border-t-white border-r-20 border-r-transparent"></div></div>;
    case 'top':
      return <div className={iconStyle}><div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-b-20 border-b-white"></div></div>;
    case 'top-right':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-20 border-t-white border-l-20 border-l-transparent"></div></div>;
    case 'left':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-12 border-t-transparent border-b-12 border-b-transparent border-r-20 border-r-white"></div></div>;
    case 'right':
      return <div className={iconStyle}><div className="w-0 h-0 border-t-12 border-t-transparent border-b-12 border-b-transparent border-l-20 border-l-white"></div></div>;
    case 'bottom-left':
      return <div className={iconStyle}><div className="w-0 h-0 border-b-20 border-b-white border-r-20 border-r-transparent"></div></div>;
    case 'bottom':
      return <div className={iconStyle}><div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-white"></div></div>;
    case 'bottom-right':
      return <div className={iconStyle}><div className="w-0 h-0 border-b-20 border-b-white border-l-20 border-l-transparent"></div></div>;
    default:
      return null;
  }
};

const TriangleGenerator = () => {
  const [direction, setDirection] = useState('left');
  const [color, setColor] = useState('#000000');
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [customEnabled, setCustomEnabled] = useState(false);
  const [customTop, setCustomTop] = useState(50);
  const [customBottom, setCustomBottom] = useState(50);
  const [customLeft, setCustomLeft] = useState(50);
  const [customRight, setCustomRight] = useState(50);
  const [copied, setCopied] = useState(false);

  const isVertical = ['top', 'bottom'].includes(direction);
  const isHorizontal = ['left', 'right'].includes(direction);

  const generateCSS = () => {
    let borderWidth = '';
    let borderColor = '';

    if (customEnabled) {
      if (isVertical) {
        if (direction === 'top') {
          borderWidth = `0 ${customRight}px ${height}px ${customLeft}px`;
          borderColor = `transparent transparent ${color} transparent`;
        } else {
          borderWidth = `${height}px ${customRight}px 0 ${customLeft}px`;
          borderColor = `${color} transparent transparent transparent`;
        }
      } else if (isHorizontal) {
        if (direction === 'left') {
          borderWidth = `${customTop}px ${width}px ${customBottom}px 0`;
          borderColor = `transparent ${color} transparent transparent`;
        } else {
          borderWidth = `${customTop}px 0 ${customBottom}px ${width}px`;
          borderColor = `transparent transparent transparent ${color}`;
        }
      }
    } else {
      switch (direction) {
        case 'top':
          borderWidth = `0 ${width / 2}px ${height}px ${width / 2}px`;
          borderColor = `transparent transparent ${color} transparent`;
          break;
        case 'bottom':
          borderWidth = `${height}px ${width / 2}px 0 ${width / 2}px`;
          borderColor = `${color} transparent transparent transparent`;
          break;
        case 'left':
          borderWidth = `${height / 2}px ${width}px ${height / 2}px 0`;
          borderColor = `transparent ${color} transparent transparent`;
          break;
        case 'right':
          borderWidth = `${height / 2}px 0 ${height / 2}px ${width}px`;
          borderColor = `transparent transparent transparent ${color}`;
          break;
        case 'top-left':
          borderWidth = `${height}px ${width}px 0 0`;
          borderColor = `${color} transparent transparent transparent`;
          break;
        case 'top-right':
          borderWidth = `0 ${width}px ${height}px 0`;
          borderColor = `transparent ${color} transparent transparent`;
          break;
        case 'bottom-left':
          borderWidth = `${height}px 0 0 ${width}px`;
          borderColor = `transparent transparent transparent ${color}`;
          break;
        case 'bottom-right':
          borderWidth = `0 0 ${height}px ${width}px`;
          borderColor = `transparent transparent ${color} transparent`;
          break;
      }
    }

    return `width: 0;\nheight: 0;\nborder-style: solid;\nborder-width: ${borderWidth};\nborder-color: ${borderColor};`;
  };

  const getTriangleStyle = () => {
    const css = generateCSS();
    const styles = {};
    css.split('\n').forEach(line => {
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) {
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styles[camelKey] = value.replace(';', '');
      }
    });
    return styles;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCSS());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setDirection('left');
    setColor('#000000');
    setWidth(100);
    setHeight(100);
    setCustomEnabled(false);
    setCustomTop(50);
    setCustomBottom(50);
    setCustomLeft(50);
    setCustomRight(50);
  };

  const renderDirectionButton = (dir) => (
    <button
      key={dir}
      onClick={() => {
        setDirection(dir);
        setCustomEnabled(false);
      }}
      className={`aspect-square rounded-lg transition-all ${
        direction === dir
          ? 'bg-[#3d4a5c] ring-2 ring-indigo-500'
          : 'bg-[#2c3544] hover:bg-[#3d4a5c]'
      }`}
    >
      {direction === dir ? getSelectedDirectionIcon(dir) : getDirectionIcon(dir)}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-2 font-manrope">
      <div className="max-w-5xl mx-auto">
        {/* Main 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Column 1: Preview */}
          <div className="bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Preview</h3>
            <div className="w-full aspect-square bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0),linear-gradient(45deg,#f0f0f0_25%,transparent_25%,transparent_75%,#f0f0f0_75%,#f0f0f0)] bg-size-[20px_20px] bg-position-[0_0,10px_10px] rounded-lg border border-gray-200 flex items-center justify-center">
              <div style={getTriangleStyle()}></div>
            </div>
          </div>

          {/* Column 2: Direction Selector */}
          <div className="bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Direction: {direction === 'top-left' ? 'Top Left' : 
                         direction === 'top' ? 'Top' :
                         direction === 'top-right' ? 'Top Right' :
                         direction === 'left' ? 'Left' :
                         direction === 'right' ? 'Right' :
                         direction === 'bottom-left' ? 'Bottom Left' :
                         direction === 'bottom' ? 'Bottom' :
                         'Bottom Right'}
            </h3>
            
            {/* Custom Grid Layout */}
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
              {/* Row 1 */}
              {renderDirectionButton('top-left')}
              {renderDirectionButton('top')}
              {renderDirectionButton('top-right')}
              
              {/* Row 2 */}
              {renderDirectionButton('left')}
              <div></div> {/* Empty center */}
              {renderDirectionButton('right')}
              
              {/* Row 3 */}
              {renderDirectionButton('bottom-left')}
              {renderDirectionButton('bottom')}
              {renderDirectionButton('bottom-right')}
            </div>
          </div>

          {/* Column 3: Controls */}
          <div className="bg-gray-50">
            <h3 className="text-sm font-medium text-gray-500 mb-4 ">Controls</h3>
            
            {/* Triangle Color */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Triangle Color
              </label>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-10 h-10 rounded-md cursor-pointer border-0"
                  />
                  <div 
                    className="absolute inset-0 rounded-md pointer-events-none border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                </div>
                <input
                  type="text"
                  value={color.toUpperCase()}
                  onChange={(e) => setColor(e.target.value)}
                  className="flex-1 px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                />
              </div>
            </div>

            {/* Width */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Width (px)
              </label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
              />
            </div>

            {/* Custom for Top/Bottom - between Width and Height */}
            {isVertical && (
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    checked={customEnabled}
                    onChange={(e) => setCustomEnabled(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-500">Custom</span>
                </label>
                
                {customEnabled && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Left (px)
                      </label>
                      <input
                        type="number"
                        value={customLeft}
                        onChange={(e) => setCustomLeft(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Right (px)
                      </label>
                      <input
                        type="number"
                        value={customRight}
                        onChange={(e) => setCustomRight(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Height */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Height (px)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
              />
            </div>

            {/* Custom for Left/Right - below Height */}
            {isHorizontal && (
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    checked={customEnabled}
                    onChange={(e) => setCustomEnabled(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-indigo-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-500">Custom</span>
                </label>
                
                {customEnabled && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Top (px)
                      </label>
                      <input
                        type="number"
                        value={customTop}
                        onChange={(e) => setCustomTop(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-2">
                        Bottom (px)
                      </label>
                      <input
                        type="number"
                        value={customBottom}
                        onChange={(e) => setCustomBottom(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CSS Code Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-white px-4 py-2">
            <span className="text-sm font-medium text-gray-700">CSS</span>
          </div>
          <div className="p-4">
            <pre className="bg-white rounded-md text-sm font-mono text-gray-800 overflow-x-auto ">
              {generateCSS()}
            </pre>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-8 py-4 bg-white text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-bold"
          >
            <RotateCcw size={18} />
            Reset
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-sm font-bold"
          >
            {copied ? <Check size={18}/> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TriangleGenerator;