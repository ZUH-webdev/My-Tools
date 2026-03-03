import { useState, useEffect, useRef } from "react";
import {
    RotateCcw,
    Play,
    Download,
    PlusCircle,
    Clipboard,
    Edit3,
    XCircle,
    Square,
    Circle,
    Check,
    X,
    AlertCircle,
    ChevronDown,
    PlusSquare,
    MinusSquare,
    MinusCircle,
} from "lucide-react";

const THEME_LIST = [
    "Default", "Monokai", "Ocean", "Midnight", "Dracula", "Forest",
    "Cyberpunk", "Solarized", "Twilight", "Nord", "Material", "Aura",
    "Synthwave", "Retro", "Slate", "RosePine", "PaleNight", "DeepBlue",
    "Emerald", "HighContrast",
];

const THEME_CONFIGS = {
    Default: { key: "text-gray-800", valStr: "text-orange-600", valNum: "text-blue-500", valBool: "text-purple-600", type: "text-gray-400", bg: "bg-white" },
    Monokai: { key: "text-[#f92672]", valStr: "text-[#e6db74]", valNum: "text-[#ae81ff]", valBool: "text-[#66d9ef]", type: "text-gray-500", bg: "bg-[#272822]" },
    Ocean: { key: "text-[#0077be]", valStr: "text-[#2e8b57]", valNum: "text-[#d2691e]", valBool: "text-[#008b8b]", type: "text-blue-300", bg: "bg-[#f0f8ff]" },
    Midnight: { key: "text-indigo-400", valStr: "text-emerald-400", valNum: "text-rose-400", valBool: "text-amber-400", type: "text-indigo-900", bg: "bg-gray-900" },
    Dracula: { key: "text-[#bd93f9]", valStr: "text-[#f1fa8c]", valNum: "text-[#8be9fd]", valBool: "text-[#50fa7b]", type: "text-[#6272a4]", bg: "bg-[#282a36]" },
    Forest: { key: "text-[#2d5a27]", valStr: "text-[#a0522d]", valNum: "text-[#4682b4]", valBool: "text-[#8b4513]", type: "text-green-200", bg: "bg-[#f5f5dc]" },
    Cyberpunk: { key: "text-[#ff00ff]", valStr: "text-[#00ffff]", valNum: "text-[#ffff00]", valBool: "text-[#00ff00]", type: "text-gray-600", bg: "bg-black" },
    Solarized: { key: "text-[#268bd2]", valStr: "text-[#859900]", valNum: "text-[#d33682]", valBool: "text-[#b58900]", type: "text-[#93a1a1]", bg: "bg-[#fdf6e3]" },
    Twilight: { key: "text-[#9b859d]", valStr: "text-[#8f9d6a]", valNum: "text-[#cf6a4c]", valBool: "text-[#7587a6]", type: "text-gray-600", bg: "bg-[#141414]" },
    Nord: { key: "text-[#88c0d0]", valStr: "text-[#a3be8c]", valNum: "text-[#b48ead]", valBool: "text-[#ebcb8b]", type: "text-[#4c566a]", bg: "bg-[#2e3440]" },
    Material: { key: "text-[#2196f3]", valStr: "text-[#4caf50]", valNum: "text-[#ff9800]", valBool: "text-[#e91e63]", type: "text-gray-400", bg: "bg-[#263238]" },
    Aura: { key: "text-[#a277ff]", valStr: "text-[#61ffca]", valNum: "text-[#ffca85]", valBool: "text-[#ede480]", type: "text-[#6d6d6d]", bg: "bg-[#15141b]" },
    Synthwave: { key: "text-[#f92aad]", valStr: "text-[#3fe4ef]", valNum: "text-[#ff8b39]", valBool: "text-[#fede5d]", type: "text-[#72f1b8]", bg: "bg-[#2b213a]" },
    Retro: { key: "text-[#32CD32]", valStr: "text-[#FFD700]", valNum: "text-[#FF4500]", valBool: "text-[#00CED1]", type: "text-gray-500", bg: "bg-[#333333]" },
    Slate: { key: "text-slate-300", valStr: "text-cyan-400", valNum: "text-pink-400", valBool: "text-indigo-400", type: "text-slate-500", bg: "bg-slate-800" },
    RosePine: { key: "text-[#ebbcba]", valStr: "text-[#f6c177]", valNum: "text-[#31748f]", valBool: "text-[#9ccfd8]", type: "text-[#6e6a86]", bg: "bg-[#191724]" },
    PaleNight: { key: "text-[#82aaff]", valStr: "text-[#c3e88d]", valNum: "text-[#f78c6c]", valBool: "text-[#c792ea]", type: "text-[#4e5579]", bg: "bg-[#292d3e]" },
    DeepBlue: { key: "text-[#e0e0e0]", valStr: "text-[#4fc3f7]", valNum: "text-[#fff176]", valBool: "text-[#81c784]", type: "text-[#37474f]", bg: "bg-[#001e3c]" },
    Emerald: { key: "text-[#10b981]", valStr: "text-[#059669]", valNum: "text-[#34d399]", valBool: "text-[#6ee7b7]", type: "text-emerald-900", bg: "bg-[#ecfdf5]" },
    HighContrast: { key: "text-white", valStr: "text-[#ffff00]", valNum: "text-[#00ffff]", valBool: "text-[#00ff00]", type: "text-[#cccccc]", bg: "bg-black" },
};

const CustomSelect = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative flex flex-col border border-gray-300 rounded-lg px-4 py-2 bg-white" ref={dropdownRef}>
            <label className="text-[10px] text-gray-400 font-bold select-none">{label}</label>
            <div onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-sm cursor-pointer py-1 font-medium text-gray-700 active:opacity-70">
                <span className="truncate">{value}</span>
                <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </div>
            {isOpen && (
                <div className="absolute top-[110%] left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-100 max-h-64 overflow-y-auto p-1.5 animate-in fade-in zoom-in-95 duration-150">
                    {options.map((opt) => (
                        <div key={opt} onClick={() => { onChange(opt); setIsOpen(false); }} className={`px-3 py-2 text-sm rounded-md cursor-pointer transition-all flex items-center justify-between mb-0.5 last:mb-0 ${value === opt ? "bg-indigo-50 text-indigo-700 font-bold" : "text-gray-600 hover:bg-gray-100 hover:pl-4"}`}>
                            {opt}
                            {value === opt && <Check size={14} className="text-indigo-600" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const JSONTreeTool = () => {
    const [rawJson, setRawJson] = useState("");
    const [parsedData, setParsedData] = useState(null);
    const [error, setError] = useState(null);
    const [copiedPath, setCopiedPath] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ path: "", type: "", value: "", keyName: "" });

    const [config, setConfig] = useState({
        theme: "Default", iconStyle: "Triangle", indentWidth: 12, collapseBranches: "Don't Collapse",
        collapseStrings: "Don't Collapse", groupArrays: 100, displaySize: true, displayTypes: true,
        enableClipboard: true, enableAdd: true, enableEdit: true, enableDelete: true,
    });

    const handleParse = () => {
        try {
            const d = JSON.parse(rawJson);
            setParsedData(d);
            setError(null);
        } catch {
            setError("Invalid JSON Structure!");
            setTimeout(() => setError(null), 3000);
        }
    };

    const parseValue = (val) => {
        if (val === "true") return true;
        if (val === "false") return false;
        if (!isNaN(val) && val.trim() !== "") return Number(val);
        try { return JSON.parse(val); } catch { return val; }
    };

    const handleSave = () => {
        const newData = JSON.parse(JSON.stringify(parsedData));
        const keys = modalConfig.path.replace(/^root\.?/, "").split(".").filter(k => k !== "");
        let current = newData;

        if (keys.length === 0) {
            if (modalConfig.type === "add") newData[modalConfig.keyName] = parseValue(modalConfig.value);
        } else {
            for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
            const lastKey = keys[keys.length - 1];
            if (modalConfig.type === "edit") current[lastKey] = parseValue(modalConfig.value);
            else if (modalConfig.type === "add") {
                if (Array.isArray(current[lastKey])) current[lastKey].push(parseValue(modalConfig.value));
                else current[lastKey][modalConfig.keyName] = parseValue(modalConfig.value);
            }
        }
        setParsedData(newData);
        setShowModal(false);
    };

    const downloadJSON = () => {
        const blob = new Blob([JSON.stringify(parsedData, null, 2)], { type: "application/json" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "data.json";
        a.click();
    };

    const deleteNode = (path) => {
        const newData = JSON.parse(JSON.stringify(parsedData));
        const keys = path.replace(/^root\.?/, "").split(".").filter(k => k !== "");
        if (keys.length === 0) { setParsedData(null); return; }
        let current = newData;
        for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
        const lastKey = keys[keys.length - 1];
        if (Array.isArray(current)) current.splice(lastKey, 1);
        else delete current[lastKey];
        setParsedData(newData);
    };

    const TreeNode = ({ data, label, isLast = true, depth = 0, path = "" }) => {
        const theme = THEME_CONFIGS[config.theme] || THEME_CONFIGS.Default;
        const isObject = typeof data === "object" && data !== null;
        const isArray = Array.isArray(data);

        const currentPath = path ? (label !== null ? `${path}.${label}` : path) : (label || "");

        const [collapsed, setCollapsed] = useState(
            config.collapseBranches === "Collapse ALL" ||
            (config.collapseBranches === "Collapse after 1 branch" && depth >= 1) ||
            (config.collapseBranches === "Collapse after 2 branches" && depth >= 2)
        );

        const formatStringValue = (val) => {
            if (config.collapseStrings === "Don't Collapse") return `"${val}"`;
            const limit = parseInt(config.collapseStrings);
            return val.length > limit ? `"${val.substring(0, limit)}..."` : `"${val}"`;
        };

        const renderToggleIcon = () => {
            const iconProps = {
                size: 14, className: "cursor-pointer transition-all duration-200",
                onClick: () => setCollapsed(!collapsed),
            };
            if (config.iconStyle === "Square") return collapsed ? <PlusSquare {...iconProps} /> : <MinusSquare {...iconProps} />;
            if (config.iconStyle === "Circle") return collapsed ? <PlusCircle {...iconProps} /> : <MinusCircle {...iconProps} />;
            return (
                <ChevronDown {...iconProps} className={`${iconProps.className} ${collapsed ? "-rotate-90" : ""}`} fill={collapsed ? "currentColor" : "none"} />
            );
        };

        const renderData = () => {
            const entries = Object.entries(data);
            if (isArray && config.groupArrays !== "Don't Group" && entries.length > parseInt(config.groupArrays)) {
                const groupSize = parseInt(config.groupArrays);
                const groups = [];
                for (let i = 0; i < entries.length; i += groupSize) groups.push(entries.slice(i, i + groupSize));
                return groups.map((group, idx) => (
                    <div key={idx} className="ml-4 my-1">
                        <span className="text-gray-400 text-[10px] italic font-bold">[{idx * groupSize} ... {Math.min((idx + 1) * groupSize - 1, entries.length - 1)}]</span>
                        {group.map(([key, value], index) => (
                            <TreeNode key={key} label={null} data={value} isLast={index === group.length - 1} depth={depth + 1} path={`${currentPath}.${key}`} />
                        ))}
                    </div>
                ));
            }
            return entries.map(([key, value], index, arr) => (
                <TreeNode key={key} label={isArray ? null : key} data={value} isLast={index === arr.length - 1} depth={depth + 1} path={currentPath} />
            ));
        };

        return (
            <div className="ml-6 font-mono text-[13px] leading-relaxed">
                <div className="flex items-center group whitespace-nowrap">
                    {isObject && <span className="mr-1 text-gray-400">{renderToggleIcon()}</span>}
                    {label !== null && <span className={`${theme.key} mr-1`}>"{label}":</span>}
                    {!isObject ? (
                        <span className="flex items-center">
                            <span className={typeof data === "string" ? theme.valStr : typeof data === "number" ? theme.valNum : theme.valBool}>
                                {typeof data === "string" ? formatStringValue(data) : String(data)}
                            </span>
                            {config.displayTypes && <span className={`ml-2 text-[10px] italic ${theme.type}`}>{typeof data}</span>}
                        </span>
                    ) : (
                        <span className="text-gray-500">{isArray ? "[" : "{"}</span>
                    )}
                    {isObject && config.displaySize && (
                        <span className="ml-2 text-[10px] text-gray-400">({isArray ? data.length : Object.keys(data).length})</span>
                    )}
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 ml-4 transition-opacity px-2 bg-gray-100 rounded">
                        {config.enableClipboard && (copiedPath === currentPath ? <Check size={12} className="text-green-500" /> : <Clipboard size={12} className="text-blue-400 cursor-pointer" onClick={() => { navigator.clipboard.writeText(JSON.stringify(data)); setCopiedPath(currentPath); setTimeout(() => setCopiedPath(null), 1500); }} />)}
                        {config.enableEdit && <Edit3 size={12} className="text-yellow-600 cursor-pointer" onClick={() => { setModalConfig({ path: currentPath, type: "edit", value: isObject ? JSON.stringify(data) : data, keyName: label }); setShowModal(true); }} />}
                        {config.enableDelete && <XCircle size={12} className="text-red-500 cursor-pointer" onClick={() => deleteNode(currentPath)} />}
                        {config.enableAdd && isObject && <PlusCircle size={12} className="text-green-500 cursor-pointer" onClick={() => { setModalConfig({ path: currentPath, type: "add", value: "", keyName: "newKey" }); setShowModal(true); }} />}
                    </div>
                </div>
                {isObject && !collapsed && (
                    <div className="border-l border-gray-200" style={{ marginLeft: `6px`, paddingLeft: `${config.indentWidth}px` }}>{renderData()}</div>
                )}
                {isObject && <div className="text-gray-500">{collapsed ? `... ${isArray ? "]" : "}"}` : isArray ? "]" : "}"}{!isLast && ","}</div>}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-2 md:p-8 text-gray-700 font-manrope relative">
            {error && <div className="fixed top-5 left-1/2 -translate-x-1/2 z-110 flex items-center bg-red-600 text-white px-4 py-2 rounded-full shadow-lg text-sm"><AlertCircle size={16} className="mr-2" /> {error}</div>}
            {showModal && (
                <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-lg shadow w-full max-w-sm">
                        <div className="flex justify-between mb-4 pb-2"><h3 className="font-bold text-xs uppercase">Edit node</h3><X className="cursor-pointer" size={16} onClick={() => setShowModal(false)} /></div>
                        {modalConfig.type === "add" && !Array.isArray(modalConfig.path) && (
                            <input className="w-full border border-gray-300 p-3 mb-3 text-sm rounded outline-none focus:border-indigo-500" placeholder="Key Name" value={modalConfig.keyName} onChange={(e) => setModalConfig({ ...modalConfig, keyName: e.target.value })} />
                        )}
                        <textarea className="w-full border border-gray-300 p-2 text-sm rounded h-24 outline-none font-mono focus:border-indigo-500" placeholder="Value (String, Number, or JSON)" value={modalConfig.value} onChange={(e) => setModalConfig({ ...modalConfig, value: e.target.value })} />
                        <div className="flex justify-end gap-2 mt-4"><button className="px-4 py-2 text-xs border border-gray-300 bg-white rounded-full hover:text-gray-700" onClick={() => setShowModal(false)}>Cancel</button><button className="px-6 py-2 text-xs bg-indigo-600 text-white rounded-full hover:bg-indigo-700" onClick={handleSave}>Save</button></div>
                    </div>
                </div>
            )}
            <div className="max-w-5xl mx-auto space-y-6">
                <div className="relative border border-slate-200 rounded-lg bg-white focus-within:ring-2 focus-within:ring-indigo-500 transition-all overflow-hidden">
                    <div className="sticky top-0 bg-white px-4 py-1.5 z-10 border-bottom border-slate-100"><span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Enter Raw JSON Data</span></div>
                    <textarea value={rawJson} onChange={(e) => setRawJson(e.target.value)} className="w-full h-64 p-4 bg-white font-mono text-sm outline-none focus:ring-0 border-none resize-none" placeholder="Paste JSON here..." />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={() => { setRawJson(""); setParsedData(null); }} className="flex items-center justify-center px-10 py-3 border border-gray-300 rounded-full bg-white text-sm font-bold w-full sm:w-auto hover:bg-gray-50 active:scale-95 transition-all"><RotateCcw className="w-4 h-4 mr-2" /> Reset</button>
                    <button onClick={handleParse} className="flex items-center justify-center px-10 py-3 bg-indigo-600 text-white rounded-full text-sm font-bold w-full sm:w-auto hover:bg-indigo-700 shadow-sm active:scale-95 transition-all"><Play className="w-4 h-4 mr-2 fill-current" /> Build Tree</button>
                </div>
                <div className={`w-full h-96 flex flex-col border border-gray-300 rounded-lg overflow-hidden ${THEME_CONFIGS[config.theme]?.bg || "bg-white"}`}>
                    <div className="shrink-0 border-b border-gray-100 bg-white px-4 py-1.5 z-10"><span className="text-slate-400 text-xs font-semibold uppercase tracking-tight">JSON Tree View</span></div>
                    <div className="flex-1 overflow-auto p-2 custom-scrollbar focus:outline-none focus-within:ring-2 focus-within:ring-indigo-500 ring-inset">
                        {parsedData ? (
                            <div className="min-w-max">
                                <TreeNode data={parsedData} label="root" />
                            </div>
                        ) : (
                            <div className="p-2 text-gray-400 font-mono text-sm italic">Waiting for JSON input...</div>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <CustomSelect label="Theme" options={THEME_LIST} value={config.theme} onChange={(v) => setConfig({ ...config, theme: v })} />
                    <CustomSelect label="Icon Style" options={["Triangle", "Square", "Circle"]} value={config.iconStyle} onChange={(v) => setConfig({ ...config, iconStyle: v })} />
                    <CustomSelect label="Indent" options={[0, 1, 2, 3, 4, 5]} value={config.indentWidth / 6} onChange={(v) => setConfig({ ...config, indentWidth: v * 6 })} />
                    <CustomSelect label="Collapse" options={["Don't Collapse", "Collapse ALL", "Collapse after 1 branch", "Collapse after 2 branches"]} value={config.collapseBranches} onChange={(v) => setConfig({ ...config, collapseBranches: v })} />
                    <CustomSelect label="Strings" options={["Don't Collapse", "5", "10", "15", "20"]} value={config.collapseStrings} onChange={(v) => setConfig({ ...config, collapseStrings: v })} />
                    <CustomSelect label="Group Arrays" options={["Don't Group", "10", "25", "50", "100", "250", "500", "1000"]} value={config.groupArrays} onChange={(v) => setConfig({ ...config, groupArrays: v })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Object.keys(config).filter((k) => k.startsWith("display") || k.startsWith("enable")).map((key) => (
                        <label key={key} className="flex items-center space-x-2 cursor-pointer group">
                            <input type="checkbox" checked={config[key]} onChange={() => setConfig({ ...config, [key]: !config[key] })} className="accent-indigo-600 w-4 h-4" />
                            <span className="text-sm font-semibold text-gray-500 capitalize group-hover:text-gray-700 transition-colors">{key.replace(/([A-Z])/g, " $1")}</span>
                        </label>
                    ))}
                </div>
                <div className="flex justify-center pt-2">
                    <button onClick={() => { downloadJSON(); }} className="flex items-center px-10 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-bold hover:text-indigo-700 transition-all active:scale-95"><Download className="w-5 h-5 mr-2" /> Download JSON</button>
                </div>
            </div>
        </div>
    );
};

export default JSONTreeTool;