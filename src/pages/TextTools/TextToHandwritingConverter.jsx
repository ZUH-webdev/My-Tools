import { useState, useRef, useEffect } from 'react';
import { RotateCcw, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Download, ChevronDown } from 'lucide-react';
import textToHandwritingConverter from "../../images/DetailPageImages/textToHandwritingConverter.svg";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import CommentsSection from '../../components/CommentsSection';
import BuyMeACoffee from '../../components/BuyMeACoffee';
import SimilarTools from '../../components/SimilarTools';
import BrowserExtensionBanner from '../../components/BrowserExtensionBanner';

const TextToHandwritingConverter = () => {
    const [activeTab, setActiveTab] = useState('text-area');
    const [text, setText] = useState('');
    const [fontFamily, setFontFamily] = useState('Gloria Hallelujah');
    const [fontSize, setFontSize] = useState('16px');
    const [inkColor, setInkColor] = useState('#000000');
    const [paperType, setPaperType] = useState('white');
    const [resolution, setResolution] = useState('2');
    const [showExportMenu, setShowExportMenu] = useState(false);

    const previewRef = useRef(null);
    const editorRef = useRef(null);

    const handleReset = () => {
        setText('');
        setFontFamily('Gloria Hallelujah');
        setFontSize('16px');
        setInkColor('#000000');
        setPaperType('white');
        setResolution('2');
        if (editorRef.current) {
            editorRef.current.innerHTML = '';
        }
    };

    const handleEditorInput = (e) => {
        setText(e.currentTarget.innerHTML || '');
    };

    useEffect(() => {
        if (activeTab === 'text-editor' && editorRef.current && editorRef.current.innerHTML !== text) {
            editorRef.current.innerHTML = text;
        }
    }, [activeTab, text]);

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        if (editorRef.current) {
            setText(editorRef.current.innerHTML);
        }
    };

    const handleDownload = async (format) => {
        setShowExportMenu(false);

        try {
            const scale = parseInt(resolution);

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const width = 800;
            const height = 1100;
            canvas.width = width * scale;
            canvas.height = height * scale;

            ctx.scale(scale, scale);

            // Background
            const backgrounds = {
                white: '#ffffff',
                lined: '#ffffff',
                vintage: '#f3e5ab',
                graph: '#ffffff',
                yellow: '#fef9c3',
                cream: '#fffef0',
                pink: '#ffe4e6',
                blue: '#eff6ff',
                grid: '#ffffff',
                dots: '#ffffff'
            };

            ctx.fillStyle = backgrounds[paperType] || '#ffffff';
            ctx.fillRect(0, 0, width, height);

            // Draw lines/patterns
            if (paperType === 'lined') {
                ctx.strokeStyle = '#e5e7eb';
                ctx.lineWidth = 1;
                for (let i = 80; i < height; i += 32) {
                    ctx.beginPath();
                    ctx.moveTo(60, i);
                    ctx.lineTo(width - 60, i);
                    ctx.stroke();
                }
            } else if (paperType === 'graph') {
                ctx.strokeStyle = '#f0f0f0';
                ctx.lineWidth = 1;
                for (let i = 0; i < width; i += 25) {
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, height);
                    ctx.stroke();
                }
                for (let i = 0; i < height; i += 25) {
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(width, i);
                    ctx.stroke();
                }
            } else if (paperType === 'grid') {
                ctx.strokeStyle = '#e0e0e0';
                ctx.lineWidth = 1;
                for (let i = 0; i < width; i += 30) {
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, height);
                    ctx.stroke();
                }
                for (let i = 0; i < height; i += 30) {
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(width, i);
                    ctx.stroke();
                }
            } else if (paperType === 'dots') {
                ctx.fillStyle = '#d1d5db';
                for (let x = 30; x < width; x += 30) {
                    for (let y = 30; y < height; y += 30) {
                        ctx.beginPath();
                        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            // Draw text
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = activeTab === 'text-editor' ? text : text;
            const plainText = tempDiv.textContent || tempDiv.innerText || '';

            ctx.fillStyle = inkColor;
            ctx.font = `${parseInt(fontSize)}px '${fontFamily}', cursive`;

            const lines = plainText.split('\n');
            const lineHeight = parseInt(fontSize) * 1.8;
            let y = 100;

            lines.forEach(line => {
                if (y < height - 100) {
                    ctx.fillText(line, 80, y);
                    y += lineHeight;
                }
            });

            if (format === 'png') {
                const link = document.createElement('a');
                link.download = 'handwriting.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            } else if (format === 'pdf') {
                // Create PDF using canvas
                const imgData = canvas.toDataURL('image/png');

                // Simple PDF creation without external library
                const printWindow = window.open('', '_blank');
                printWindow.document.write(`
          <html>
            <head>
              <title>Handwriting PDF</title>
              <style>
                body { margin: 0; padding: 0; }
                img { width: 100%; height: auto; }
              </style>
            </head>
            <body>
              <img src="${imgData}" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
                printWindow.document.close();
            }
        } catch (error) {
            console.error('Export error:', error);
            alert('Export failed. Please try again.');
        }
    };

    const fontFamilies = [
        'Gloria Hallelujah', 'Dancing Script', 'Pacifico', 'Caveat', 'Indie Flower',
        'Satisfy', 'Courgette', 'Kalam', 'Shadows Into Light', 'Permanent Marker',
        'Amatic SC', 'Handlee', 'Patrick Hand', 'Marck Script', 'Bad Script',
        'Calligraffitti', 'Rock Salt', 'Sacramento', 'Yellowtail', 'Homemade Apple',
        'Pangolin', 'Reenie Beanie', 'Architects Daughter', 'Covered By Your Grace',
        'Cookie', 'Alex Brush', 'Great Vibes', 'Allura', 'Tangerine', 'Pinyon Script'
    ];

    const inkColors = [
        { value: '#000000', name: 'Dark Black' },
        { value: '#1a1a1a', name: 'Soft Black' },
        { value: '#000080', name: 'Navy Blue' },
        { value: '#0000CD', name: 'Medium Blue' },
        { value: '#4169E1', name: 'Royal Blue' },
        { value: '#1E90FF', name: 'Dodger Blue' },
        { value: '#8B0000', name: 'Dark Red' },
        { value: '#DC143C', name: 'Crimson' },
        { value: '#FF0000', name: 'Red' },
        { value: '#006400', name: 'Dark Green' },
        { value: '#228B22', name: 'Forest Green' },
        { value: '#32CD32', name: 'Lime Green' },
        { value: '#4B0082', name: 'Indigo' },
        { value: '#800080', name: 'Purple' },
        { value: '#9370DB', name: 'Medium Purple' },
        { value: '#2F4F4F', name: 'Dark Slate' },
        { value: '#696969', name: 'Dim Gray' },
        { value: '#A52A2A', name: 'Brown' },
        { value: '#8B4513', name: 'Saddle Brown' },
        { value: '#D2691E', name: 'Chocolate' }
    ];

    const paperTypes = [
        { value: 'white', name: 'White Paper 1' },
        { value: 'lined', name: 'Lined Paper' },
        { value: 'vintage', name: 'Vintage Paper' },
        { value: 'graph', name: 'Graph Paper' },
        { value: 'yellow', name: 'Yellow Legal Pad' },
        { value: 'cream', name: 'Cream Paper' },
        { value: 'pink', name: 'Pink Paper' },
        { value: 'blue', name: 'Light Blue Paper' },
        { value: 'grid', name: 'Grid Paper' },
        { value: 'dots', name: 'Dotted Paper' }
    ];

    const getBackgroundStyle = () => {
        const backgrounds = {
            white: { backgroundColor: '#ffffff', backgroundImage: 'none' },
            lined: {
                backgroundColor: '#ffffff',
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
                backgroundSize: '100% 32px'
            },
            vintage: { backgroundColor: '#f3e5ab', backgroundImage: 'none' },
            graph: {
                backgroundColor: '#ffffff',
                backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
                backgroundSize: '25px 25px'
            },
            yellow: { backgroundColor: '#fef9c3', backgroundImage: 'none' },
            cream: { backgroundColor: '#fffef0', backgroundImage: 'none' },
            pink: { backgroundColor: '#ffe4e6', backgroundImage: 'none' },
            blue: { backgroundColor: '#eff6ff', backgroundImage: 'none' },
            grid: {
                backgroundColor: '#ffffff',
                backgroundImage: 'linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            },
            dots: {
                backgroundColor: '#ffffff',
                backgroundImage: 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
                backgroundSize: '30px 30px'
            }
        };
        return backgrounds[paperType] || backgrounds.white;
    };

    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Text to Handwriting Converter" icon={textToHandwritingConverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">
                {/* Main Content */}
                <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">

                    {/* Top Navigation */}
                    <div className="flex items-center mb-4 sm:mb-6">
                        {/* Left spacer */}
                        <div className="flex-1" />

                        {/* Center Tabs */}
                        <div className="flex bg-white rounded-xl shadow-sm border border-gray-200 p-1">
                            <button
                                onClick={() => setActiveTab('text-area')}
                                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === 'text-area'
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Text Area
                            </button>

                            <button
                                onClick={() => setActiveTab('text-editor')}
                                className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === 'text-editor'
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                Text Editor
                            </button>
                        </div>

                        {/* Right Reset Button */}
                        <div className="flex-1 flex justify-end">
                            <button
                                onClick={handleReset}
                                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Reset All
                            </button>
                        </div>
                    </div>


                    {/* Input Section */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6 relative overflow-hidden">
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                            <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-white bg-indigo-600 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md">
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                                MULTIPAGE SUPPORTED
                            </span>
                        </div>
                        <div className="p-4 sm:p-6 pt-12 sm:pt-14">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-400 mb-2 sm:mb-3 block uppercase tracking-wide">Text</label>

                            {/* Rich Text Editor Toolbar */}
                            {activeTab === 'text-editor' && (
                                <div className="mb-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200 flex flex-wrap gap-1 sm:gap-2">
                                    <button onClick={() => execCommand('bold')} className="p-2 hover:bg-white rounded transition-colors" title="Bold">
                                        <Bold className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => execCommand('italic')} className="p-2 hover:bg-white rounded transition-colors" title="Italic">
                                        <Italic className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => execCommand('underline')} className="p-2 hover:bg-white rounded transition-colors" title="Underline">
                                        <Underline className="w-4 h-4" />
                                    </button>
                                    <div className="w-px bg-gray-300 mx-1"></div>
                                    <button onClick={() => execCommand('justifyLeft')} className="p-2 hover:bg-white rounded transition-colors" title="Align Left">
                                        <AlignLeft className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => execCommand('justifyCenter')} className="p-2 hover:bg-white rounded transition-colors" title="Align Center">
                                        <AlignCenter className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => execCommand('justifyRight')} className="p-2 hover:bg-white rounded transition-colors" title="Align Right">
                                        <AlignRight className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => execCommand('justifyFull')} className="p-2 hover:bg-white rounded transition-colors" title="Justify">
                                        <AlignJustify className="w-4 h-4" />
                                    </button>
                                    <div className="w-px bg-gray-300 mx-1"></div>
                                    <button onClick={() => execCommand('insertUnorderedList')} className="p-2 hover:bg-white rounded transition-colors" title="Bullet List">
                                        <List className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => execCommand('insertOrderedList')} className="p-2 hover:bg-white rounded transition-colors" title="Numbered List">
                                        <ListOrdered className="w-4 h-4" />
                                    </button>
                                    <div className="w-px bg-gray-300 mx-1"></div>
                                    <select
                                        onChange={(e) => execCommand('fontSize', e.target.value)}
                                        className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-white transition-colors"
                                    >
                                        <option value="3">Normal</option>
                                        <option value="1">Small</option>
                                        <option value="4">Medium</option>
                                        <option value="5">Large</option>
                                        <option value="6">X-Large</option>
                                        <option value="7">XX-Large</option>
                                    </select>
                                    <input
                                        type="color"
                                        onChange={(e) => execCommand('foreColor', e.target.value)}
                                        className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                                        title="Text Color"
                                    />
                                </div>
                            )}

                            {activeTab === 'text-area' ? (
                                <textarea
                                    className="w-full h-40 sm:h-48 p-3 sm:p-4 outline-none text-gray-700 text-sm sm:text-base resize-none border border-gray-200 rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                                    placeholder="Type your text here..."
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            ) : (
                                <div
                                    ref={editorRef}
                                    contentEditable
                                    suppressContentEditableWarning
                                    onInput={handleEditorInput}
                                    className="w-full h-40 sm:h-48 p-3 sm:p-4 outline-none text-gray-700 text-sm sm:text-base overflow-y-auto border border-gray-200 rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                                    style={{ minHeight: '160px' }}
                                    dangerouslySetInnerHTML={{ __html: text }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Customization Options */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {/* Font Family */}
                        <div>
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 mb-1.5 sm:mb-2 block">Font Family</label>
                            <select
                                value={fontFamily}
                                onChange={(e) => setFontFamily(e.target.value)}
                                className="w-full bg-white border border-gray-300 p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium outline-none cursor-pointer hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
                            >
                                {fontFamilies.map(f => (
                                    <option key={f} value={f}>{f}</option>
                                ))}
                            </select>
                        </div>

                        {/* Font Size */}
                        <div>
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 mb-1.5 sm:mb-2 block">Font Size</label>
                            <select
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                                className="w-full bg-white border border-gray-300 p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium outline-none cursor-pointer hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
                            >
                                {Array.from({ length: 25 }, (_, i) => `${16 + i}px`).map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        {/* Ink Color */}
                        <div>
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 mb-1.5 sm:mb-2 block">Ink Color</label>
                            <select
                                value={inkColor}
                                onChange={(e) => setInkColor(e.target.value)}
                                className="w-full bg-white border border-gray-300 p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium outline-none cursor-pointer hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
                            >
                                {inkColors.map(c => (
                                    <option key={c.value} value={c.value}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Paper Type */}
                        <div>
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 mb-1.5 sm:mb-2 block">Paper Type</label>
                            <select
                                value={paperType}
                                onChange={(e) => setPaperType(e.target.value)}
                                className="w-full bg-white border border-gray-300 p-2 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium outline-none cursor-pointer hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
                            >
                                {paperTypes.map(p => (
                                    <option key={p.value} value={p.value}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Preview Area */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-8 mb-6 sm:mb-8 overflow-hidden">
                        <div
                            ref={previewRef}
                            className="w-full min-h-100 sm:min-h-150 rounded-lg sm:rounded-xl shadow-xl p-8 sm:p-12 lg:p-16 overflow-auto"
                            style={{
                                ...getBackgroundStyle(),
                                fontFamily: `'${fontFamily}', cursive`,
                                fontSize: fontSize,
                                color: inkColor,
                                lineHeight: '1.8',
                                whiteSpace: 'pre-wrap',
                                wordWrap: 'break-word'
                            }}
                            dangerouslySetInnerHTML={{ __html: activeTab === 'text-editor' ? text : text.replace(/\n/g, '<br>') }}
                        />
                    </div>

                    {/* Export Section */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pb-8 sm:pb-12">
                        <div className="w-full sm:w-64">
                            <label className="text-[10px] sm:text-xs font-bold text-gray-500 mb-1.5 sm:mb-2 block">Text Resolution</label>
                            <select
                                value={resolution}
                                onChange={(e) => setResolution(e.target.value)}
                                className="w-full bg-white border border-gray-300 p-2.5 sm:p-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-sm outline-none hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                            >
                                <option value="1">Standard Quality (1x)</option>
                                <option value="2">High Quality (2x)</option>
                                <option value="3">Ultra Quality (3x)</option>
                                <option value="4">Maximum Quality (4x)</option>
                            </select>
                        </div>

                        <div className="relative pt-0 sm:pt-6">
                            <div className="flex rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
                                <button
                                    onClick={() => handleDownload('png')}
                                    className="flex-1 bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                                >
                                    Export Handwriting
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setShowExportMenu(!showExportMenu)}
                                    className="bg-indigo-700 text-white px-3 sm:px-4 py-3 sm:py-3.5 hover:bg-indigo-800 transition-all border-l border-indigo-500"
                                >
                                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>

                            {showExportMenu && (
                                <div className="absolute bottom-full left-0 right-0 sm:left-auto sm:right-0 mb-3 w-full sm:w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                                    <button
                                        onClick={() => handleDownload('png')}
                                        className="w-full text-left p-3 sm:p-4 hover:bg-indigo-50 text-xs sm:text-sm font-semibold flex items-center gap-2 sm:gap-3 transition-colors"
                                    >
                                        <Download className="w-4 h-4 text-indigo-600" />
                                        Download Image
                                    </button>
                                    <button
                                        onClick={() => handleDownload('pdf')}
                                        className="w-full text-left p-3 sm:p-4 hover:bg-indigo-50 text-xs sm:text-sm font-semibold border-t flex items-center gap-2 sm:gap-3 transition-colors"
                                    >
                                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                        Download PDF
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0">
                        <CommentsSection toolId="text-to-handwriting-converter" />
                        <BuyMeACoffee />
                        <SimilarTools />
                        <BrowserExtensionBanner />
                        <div className="min-h-screen py-8">
                            {/* White Container with rounded-2xl */}
                            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8 md:p-12">

                                {/* Main Heading */}
                                <h1 className="text-xl md:text-xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                    What is Online Text to Handwriting Converter?
                                </h1>

                                {/* Description Content */}
                                <div className="space-y-4 text-gray-700 text-base leading-relaxed font-manrope">
                                    <p>
                                        Text to Handwriting Converter is a <span className="font-semibold border-b-2 border-[#b9b8ff]">free online tool for converting texts into handwriting and downloading them as images or PDF</span> for different handwriting font types, ink colors and papers. Looking for a way to make your text look more unique? With just a few clicks, you can turn your typed text into beautiful handwritten script. Whether you're looking to add a personal touch to your homework or spice up your next school project, our text to handwriting converter is the perfect tool for you! It looks like real handwriting on a real paper. If you need handwriting images or documents when looks real, you can use this tool.
                                    </p>

                                    <p>
                                        Handwriting is a timeless form of expression that adds a unique, personal touch to any message. Whether you're creating a handwritten letter or adding a handwritten note to a digital document, the process of converting text to handwriting can be a fun and creative way to stand out.
                                    </p>

                                    <p>
                                        We'll cover some best practices for creating authentic-looking handwriting. Whether you're a designer looking to add a handwritten element to your next project or a writer wanting to create a handwritten letter, this tool has something for everyone.
                                    </p>

                                    <p>
                                        You can choose any font, ink color and paper type from the list and get the handwritten output in JPG and PDF formats are suitable for creating handwritten texts while at that different characteristics. You can see which font supports which alphabets near the font option. Currently, Latin, Devanagari, Arabic and Cyrillic alphabets are supported. There are 5 ink types (black, blue, and red where all has its light and dark versions).
                                    </p>

                                    <p>
                                        In terms of output quality, you'll get high resolution images and PDFs as it is configured to give high resolution, sharp and detailed outputs. That means the output will look like you wrote the text with a pen by your hand.
                                    </p>

                                    <p>
                                        A lot a list of offered for paper type. Some are classical paper types like white paper, horizontal and squared lined papers or straw paper while others have background images as paper frames. They are categorized as gift, birthday, love letter and Christmas papers. You can use this tool as <a href="#" className="text-blue-600 hover:underline">gift letter generator</a> or <a href="#" className="text-blue-600 hover:underline">Christmas letter generator</a> according to your needs. These letters are in printable format for A4 size paper and can be printed out and used to surprise your friends. You can preview it online before downloading to see if you get the desired result.
                                    </p>

                                    {/* Image Section */}
                                    <div className="my-8">
                                        <img
                                            src="https://10015.io/assets/tools/pages/text-to-handwriting-converter/text-to-handwriting-conversion.jpg"
                                            alt="Text to Handwriting Image Conversion"
                                            className="mx-auto max-w-md h-auto rounded-lg shadow-md"
                                        />
                                        <p className="text-center text-sm text-gray-600 mt-3 italic">
                                            Text to Handwriting Image Conversion
                                        </p>
                                    </div>

                                    <p>
                                        Online Text to Handwriting Converter can be used for different purposes: to write a love letter to your girlfriend, boyfriend, or partner, for birthday celebration, gifting, and Christmas celebration, to do your college writing assignments or your homework which requires handwritten documents, write literature text or take notes, make shopping list etc.
                                    </p>

                                    <p>
                                        If you have a long text and want to convert multiple pages into handwriting and download it as a single PDF file, that is also supported. Multi-page support is an advanced feature which is very difficult to implement, but you will gain lots of extra time with this feature as it will increase your productivity. Otherwise, you will need to convert each page one by one.
                                    </p>

                                    <p>
                                        You can also convert Word to handwriting or PDF to handwriting. Just copy all text from Microsoft Word document with .doc or .docx extension or your PDF files and paste in the input field. Since the tool supports multipage conversion, it will automatically split your text into pages and generate a single PDF by merging them.
                                    </p>

                                    {/* Stylize Section */}
                                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-space-grotesk">
                                        Stylize Your Handwriting with Text Editor
                                    </h2>

                                    <p>
                                        You can use the text editor to edit your text before converting it into handwriting. You can use the text editor to change font size, font color, font style, font weight and text align properties. You can also add lists and images into your writings. Please keep in mind that the text editor is not a full featured text editor. It is just a simple text editor which is enough for most of the cases.
                                    </p>

                                    {/* Upload Custom Paper */}
                                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-space-grotesk">
                                        Upload Custom Paper
                                    </h2>

                                    <p>
                                        You can upload your own papers in the following image formats: JPG, PNG, SVG or AVF. You can use this feature by selecting "Upload Custom Paper" from "Paper Type" menu. It gives you the flexibility to use this tool for your own purposes easier than ever.
                                    </p>

                                    {/* Language Support */}
                                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-space-grotesk">
                                        Language Support
                                    </h2>

                                    <p>
                                        1001S.io text to handwriting tool supports all languages that uses Latin, Devanagari, Arabic and Cyrillic alphabets. You can use this tool to convert your text into handwriting in any language that uses these alphabets such as English, German, Spanish, Italian, French, Portuguese, Arabic, Persian, Urdu, Hindi, Bengali, Russian, Serbian, Bulgarian, Ukrainian, Korean, Japanese, Chinese, Thai, Hebrew, Vietnamese etc. You can see the supported alphabets for each font family near the font option.
                                    </p>

                                    {/* Auto-save */}
                                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-space-grotesk">
                                        Auto-save your work
                                    </h2>

                                    <p>
                                        When you work on your text that will be converted into handwriting, 1001S.io automatically saves your text in your browser behind the scenes in every 10 seconds periodically. So, you can close the tab and come back later to continue your work. It will also prevent you from losing your work if you accidentally close the tab or your page.
                                    </p>

                                    {/* How to Use */}
                                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-space-grotesk">
                                        How to use Online Text to Handwriting Converter?
                                    </h2>

                                    <p>
                                        You can convert your texts into handwriting by following these steps:
                                    </p>

                                    <ol className="space-y-3 mt-4 ml-6 list-decimal">
                                        <li>
                                            Type your text you want to convert in the text field. Your typed text will be converted directly while you are typing and at the shown on preview field.
                                        </li>

                                        <li>
                                            You can use "Text Editor" option if you want to further stylize your text. If you want headings, bold or italic texts, different font sizes, images and lists, this is the place to do it.
                                        </li>

                                        <li>
                                            Choose font family, ink color and paper type from the list. For font family selection, please pay attention to the supported alphabets. Some fonts support only Latin alphabets while others support Latin, Devanagari, Arabic and Cyrillic alphabets.
                                        </li>

                                        <li>
                                            Download handwritten text as an image or PDF.
                                        </li>

                                        <li>
                                            If the text is long and its content is more than one page, it will be automatically split into multiple pages and you will be allowed to download each page separately as image/PDF or download all pages merged in a single PDF file.
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Dancing+Script&family=Pacifico&family=Caveat&family=Indie+Flower&family=Satisfy&family=Courgette&family=Kalam&family=Shadows+Into+Light&family=Permanent+Marker&family=Amatic+SC&family=Handlee&family=Patrick+Hand&family=Marck+Script&family=Bad+Script&family=Calligraffitti&family=Rock+Salt&family=Sacramento&family=Yellowtail&family=Homemade+Apple&family=Pangolin&family=Reenie+Beanie&family=Architects+Daughter&family=Covered+By+Your+Grace&family=Cookie&family=Alex+Brush&family=Great+Vibes&family=Allura&family=Tangerine&family=Pinyon+Script&display=swap');
        
        [contenteditable] {
          -webkit-user-select: text;
          user-select: text;
        }
        
        [contenteditable]:empty:before {
          content: 'Start typing here...';
          color: #9ca3af;
        }
      `}</style>

export default TextToHandwritingConverter