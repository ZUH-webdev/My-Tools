import { useState } from 'react';
import { RotateCcw, ChevronRight, ChevronsRight, Download, Copy, Loader2, Check, AlertCircle } from 'lucide-react';

const MinifierTool = ({ type, placeholder }) => {
  const [rawCode, setRawCode] = useState('');
  const [minifiedCode, setMinifiedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedPercent, setSavedPercent] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const [copied, setCopied] = useState(false);

  // --- Strict Format Validation Logic ---
  const validateCode = (code) => {
    const trimmed = code.trim();
    if (!trimmed) return null;

    if (type === 'html') {
      const isHtml = new RegExp('<[a-z/][\\s\\S]*>', 'i');
      if (!isHtml.test(trimmed)) return "Invalid HTML: No valid tags detected.";
    } 
    else if (type === 'css') {
      const jsKeywords = ['function', 'const ', 'let ', 'var ', 'console.log', '=>'];
      if (jsKeywords.some(keyword => trimmed.includes(keyword))) {
        return "Format Error: This looks like JavaScript, not CSS.";
      }
      if (!trimmed.includes('{') || !trimmed.includes(':')) return "Invalid CSS: Missing selectors or properties.";
    } 
    else if (type === 'js') {
      const htmlTagPattern = new RegExp('<[a-z/][\\s\\S]*>', 'i');
      if (htmlTagPattern.test(trimmed)) return "Format Error: HTML tags detected in JS Minifier.";
      
      const hasCssTraits = trimmed.includes('{') && trimmed.includes(':') && trimmed.includes(';');
      const hasJsTraits = ['function', 'const', 'let', 'var', 'if', 'for', 'return', 'console', '=>', 'import'].some(k => trimmed.includes(k));
      
      if (hasCssTraits && !hasJsTraits) {
         return "Format Error: This looks like CSS. Please use the CSS Minifier.";
      }
    }
    return null;
  };

  const handleMinify = () => {
    if (!rawCode || rawCode.trim() === "") return;
    
    const validationError = validateCode(rawCode);
    if (validationError) {
      setError(validationError);
      setMinifiedCode('');
      setShowFooter(false);
      return;
    }

    setLoading(true);
    setError(null);
    setShowFooter(false);

    // Regex Definitions
    const allSpaces = new RegExp('\\s+', 'g');
    const htmlComments = new RegExp('', 'g');
    const htmlTagGaps = new RegExp('>\\s+<', 'g');
    const cssComments = new RegExp('\\/\\*[\\s\\S]*?\\*\\/', 'g');
    const cssStructure = new RegExp('\\s*([\\{\\}:;,])\\s*', 'g');
    const jsComments = new RegExp('\\/\\*[\\s\\S]*?\\*\\/|([^\\\\:]|^)\\/\\/.*$', 'gm');
    const jsStructure = new RegExp('\\s*([\\=\\+\\-\\*/%&|^!<>?:;,.\\(\\)\\[\\]\\{\\}])\\s*', 'g');

    setTimeout(() => {
      try {
        let result = rawCode;
        if (type === 'html') {
          result = result.replace(htmlComments, '').replace(allSpaces, ' ').replace(htmlTagGaps, '><');
        } else if (type === 'css') {
          result = result.replace(cssComments, '').replace(allSpaces, ' ').replace(cssStructure, '$1');
        } else if (type === 'js') {
          result = result.replace(jsComments, '$1').replace(allSpaces, ' ').replace(jsStructure, '$1');
        }
        
        const finalResult = result.trim();
        setMinifiedCode(finalResult);
        const savings = ((rawCode.length - finalResult.length) / rawCode.length * 100).toFixed(1);
        setSavedPercent(parseFloat(savings) > 0 ? savings : 0);
        setShowFooter(true);
      } catch {
        setError("Minification failed. Please check syntax.");
      } finally {
        setLoading(false);
      }
    }, 600);
  };

  const handleReset = () => {
    setRawCode('');
    setMinifiedCode('');
    setSavedPercent(0);
    setShowFooter(false);
    setError(null);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!minifiedCode) return;
    navigator.clipboard.writeText(minifiedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!minifiedCode) return;
    
    // --- File Naming Logic ---
    let fileName = "";
    if (type === 'html') {
      fileName = "index.min.html";
    } else if (type === 'css') {
      fileName = "style.min.css";
    } else if (type === 'js') {
      fileName = "script.min.js";
    }

    // Creating Blob with correct MIME type
    const mimeType = type === 'html' ? 'text/html' : (type === 'css' ? 'text/css' : 'application/javascript');
    const blob = new Blob([minifiedCode], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', fileName);
    document.body.appendChild(a); 
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  
  const isActionDisabled = !minifiedCode || error || loading;

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-10 font-manrope text-slate-800">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* ROW 1: EQUAL BOXES */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_50px_1fr] gap-1 items-stretch">
          
          <div className="h-100 flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-white px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Raw {type.toUpperCase()} Code
            </div>
            <textarea
              className={`flex-1 p-4 outline-none resize-none font-mono text-sm leading-relaxed ${error ? 'bg-red-50/20' : ''}`}
              placeholder={placeholder}
              value={rawCode}
              onChange={(e) => {
                setRawCode(e.target.value);
                if(error) setError(null);
                if(minifiedCode) setMinifiedCode('');
              }}
            />
          </div>

          <div className="flex justify-center items-center">
            <ChevronsRight className="hidden lg:block text-gray-300" size={32} />
            <ChevronsRight className="lg:hidden rotate-90 text-gray-300" size={32} />
          </div>

          <div className="h-100 relative flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-white px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Minified {type.toUpperCase()} Code
            </div>
            <textarea
              readOnly
              className="flex-1 p-4 outline-none resize-none font-mono text-sm text-indigo-600 bg-indigo-50/10"
              value={minifiedCode}
              placeholder={error ? "Error in format..." : "Result will appear here..."}
            />

            {error && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6 text-center z-20 animate-in fade-in zoom-in duration-200">
                <AlertCircle className="text-red-500 mb-3" size={48} />
                <h3 className="text-lg font-bold text-slate-800">Invalid Format</h3>
                <p className="text-red-600 mt-1 text-sm">{error}</p>
              </div>
            )}

            <div className={`absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out transform ${showFooter && !error ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <div className="bg-[#eafaf1] border-t border-green-200 py-3 text-center shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                <span className="text-green-700 font-bold text-xl">{savedPercent}%</span>
                <span className="text-green-600 ml-2 italic text-sm font-medium">saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-4">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <button onClick={handleReset} className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-600 hover:text-gray-700 bg-white transition-all font-semibold active:scale-95 w-full md:w-auto justify-center">
              <RotateCcw size={18} /> Reset
            </button>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <button 
              onClick={handleMinify} 
              disabled={loading || !rawCode} 
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95 disabled:opacity-50 justify-center w-full md:w-auto"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : (
                <>
                  <span className="font-bold text-lg uppercase tracking-wide">Minify</span>
                  <ChevronRight size={20} />
                </>
              )}
            </button>
          </div>

          <div className="flex justify-center md:justify-end gap-3 order-3">
            <button 
              onClick={handleDownload} 
              disabled={isActionDisabled} 
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50 transition-all font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed flex-1 md:flex-none"
            >
              <Download size={16} /> Download
            </button>
            <button 
              onClick={handleCopy} 
              disabled={isActionDisabled} 
              className={`flex items-center justify-center gap-2 px-10 py-3 rounded-full border transition-all font-bold text-sm flex-1 md:flex-none disabled:opacity-30 disabled:cursor-not-allowed ${copied ? 'border-green-500 text-green-600 bg-green-50' : 'border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50'}`}
            >
              {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinifierTool;