import bionicReadingConverter from "../../images/DetailPageImages/bionicReadingConverter.svg";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import { useState, useRef } from 'react';
import { Upload, RotateCcw, Download, Maximize2, ChevronDown, Info, ExternalLink, X } from 'lucide-react';
import CommentsSection from "../../components/CommentsSection";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import SimilarTools from "../../components/SimilarTools";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";

const BionicReadingConverter = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [fixation, setFixation] = useState(50);
    const [contrast, setContrast] = useState('none');
    const [showExportMenu, setShowExportMenu] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const fileInputRef = useRef(null);
    const outputRef = useRef(null);

    const fixationOptions = [
        { label: 'Very Low', value: 40 },
        { label: 'Low', value: 45 },
        { label: 'Medium', value: 50 },
        { label: 'High', value: 55 },
        { label: 'Very High', value: 60 }
    ];

    const contrastOptions = ['None', 'Medium', 'High'];

    const applyBionicReading = (text, fixationPercent) => {
        if (!text) return '';

        return text.split(' ').map((word, idx) => {
            if (word.length === 0) return word;
            const boldLength = Math.ceil(word.length * (fixationPercent / 100));
            const boldPart = word.slice(0, boldLength);
            const normalPart = word.slice(boldLength);

            return (
                <span key={idx} className="inline">
                    <strong className="font-bold">{boldPart}</strong>
                    {normalPart}
                    {' '}
                </span>
            );
        });
    };

    const getBionicText = (text, fixationPercent) => {
        if (!text) return '';

        return text.split(' ').map((word) => {
            if (word.length === 0) return word;
            const boldLength = Math.ceil(word.length * (fixationPercent / 100));
            const boldPart = word.slice(0, boldLength);
            const normalPart = word.slice(boldLength);
            return `**${boldPart}**${normalPart}`;
        }).join(' ');
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert('File size should be less than 5MB');
            return;
        }

        if (file.type === 'text/plain') {
            const text = await file.text();
            setInputText(text);
            setOutputText(text);
        } else {
            alert('For demo, only .txt files are supported. PDF/EPUB require backend processing.');
        }
    };

    const handleReset = () => {
        setInputText('');
        setOutputText('');
        setFixation(50);
        setContrast('none');
    };

    const handleConvert = () => {
        setOutputText(inputText);
    };

    const getContrastClass = () => {
        switch (contrast.toLowerCase()) {
            case 'medium': return 'bg-gray-50';
            case 'high': return 'bg-gray-100';
            default: return 'bg-white';
        }
    };

    const exportToPDF = () => {
        setShowExportMenu(false);

        const bionicText = getBionicText(outputText, fixation);
        const content = `Bionic Reading Export\n\n${bionicText}`;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'bionic-reading.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const exportToEPUB = () => {
        setShowExportMenu(false);

        const bionicText = getBionicText(outputText, fixation);
        const content = `<?xml version="1.0" encoding="UTF-8"?>
            <!DOCTYPE html>
            <html xmlns="http://www.w3.org/1999/xhtml">
            <head><title>Bionic Reading</title></head>
            <body><p>${bionicText}</p></body>
            </html>`;
        const blob = new Blob([content], { type: 'application/epub+zip' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'bionic-reading.epub';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const exportToImage = () => {
        setShowExportMenu(false);
        alert('Image export requires html2canvas library. Please use "Copy HTML" instead.');
    };

    const copyImageToClipboard = () => {
        setShowExportMenu(false);
        alert('Image clipboard copy requires html2canvas library. Please use "Copy HTML" instead.');
    };

    const copyHTML = () => {
        setShowExportMenu(false);
        if (outputRef.current) {
            const html = outputRef.current.innerHTML;
            navigator.clipboard.writeText(html).then(() => {
                alert('HTML copied to clipboard!');
            }).catch(() => {
                alert('Failed to copy HTML. Please try again.');
            });
        }
    };

    const copyMarkdown = () => {
        setShowExportMenu(false);
        const markdown = getBionicText(outputText, fixation);
        navigator.clipboard.writeText(markdown).then(() => {
            alert('Markdown copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy Markdown. Please try again.');
        });
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };
    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Bionic Reading Converter" icon={bionicReadingConverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">
                <div className="min-h-screen bg-gray-50">
                    <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                        <div className="max-w-5xl mx-auto">
                            {/* Header */}
                            <div className="mb-4 sm:mb-6">
                                <a href="#" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm sm:text-base">
                                    <Info className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                    <span className="text-xs sm:text-sm">Help: What is <span className="font-semibold">Bionic Reading?</span></span>
                                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                </a>
                            </div>

                            {/* Upload Area */}
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 lg:p-12 mb-4 sm:mb-6 text-center cursor-pointer hover:border-indigo-400 transition-colors bg-white"
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".pdf,.epub,.txt"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                                <Upload className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-gray-400" />
                                <p className="text-gray-500 text-xs sm:text-sm lg:text-base">Import text from PDF or EPUB (Max 5MB)</p>
                            </div>

                            {/* Controls */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                                {/* Fixation Dropdown */}
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">Fixation (% of Highlighted)</label>
                                    <div className="relative">
                                        <select
                                            value={fixation}
                                            onChange={(e) => setFixation(Number(e.target.value))}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                        >
                                            {fixationOptions.map(opt => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label} - {opt.value}%
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Contrast Dropdown */}
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">Contrast</label>
                                    <div className="relative">
                                        <select
                                            value={contrast}
                                            onChange={(e) => setContrast(e.target.value)}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                        >
                                            {contrastOptions.map(opt => (
                                                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Areas */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                {/* Input Text Area */}
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">Text</label>
                                    <textarea
                                        value={inputText}
                                        onChange={(e) => setInputText(e.target.value)}
                                        className="w-full h-64 sm:h-80 lg:h-96 p-3 sm:p-4 bg-white border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                                        placeholder="Enter your text here..."
                                    />
                                </div>

                                {/* Output Bionic Reading */}
                                <div>
                                    <label className="block text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2">Bionic Reading Mode</label>
                                    <div
                                        ref={outputRef}
                                        className={`w-full h-64 sm:h-80 lg:h-96 p-3 sm:p-4 border border-gray-300 rounded-lg overflow-y-auto ${getContrastClass()}`}
                                    >
                                        <div className="text-gray-800 leading-relaxed text-sm sm:text-base">
                                            {applyBionicReading(outputText, fixation)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                                {/* Reset Button */}
                                <button
                                    onClick={handleReset}
                                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base order-2 sm:order-1"
                                >
                                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Reset
                                </button>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 order-1 sm:order-2">
                                    {/* Convert Button */}
                                    <button
                                        onClick={handleConvert}
                                        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium shadow-lg text-sm sm:text-base"
                                    >
                                        Convert
                                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        {/* Export Button with Dropdown */}
                                        <div className="relative flex-1 sm:flex-initial">
                                            <button
                                                onClick={() => setShowExportMenu(!showExportMenu)}
                                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors font-medium text-sm sm:text-base"
                                            >
                                                Export
                                                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>

                                            {showExportMenu && (
                                                <>
                                                    {/* Overlay for mobile */}
                                                    <div
                                                        className="fixed inset-0 bg-black bg-opacity-25 z-40 sm:hidden"
                                                        onClick={() => setShowExportMenu(false)}
                                                    />

                                                    {/* Dropdown Menu */}
                                                    <div className="fixed sm:absolute left-4 right-4 bottom-4 sm:left-auto sm:right-0 sm:bottom-auto sm:top-full mt-0 sm:mt-2 w-auto sm:w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
                                                        <div className="sm:hidden flex items-center justify-between p-4 border-b">
                                                            <span className="font-semibold text-gray-900">Export Options</span>
                                                            <button onClick={() => setShowExportMenu(false)}>
                                                                <X className="w-5 h-5 text-gray-500" />
                                                            </button>
                                                        </div>
                                                        <button onClick={exportToPDF} className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2 text-sm sm:text-base">
                                                            <Download className="w-4 h-4" />
                                                            Download PDF
                                                        </button>
                                                        <button onClick={exportToEPUB} className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2 text-sm sm:text-base">
                                                            <Download className="w-4 h-4" />
                                                            Download EPUB
                                                        </button>
                                                        <button onClick={exportToImage} className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2 text-sm sm:text-base">
                                                            <Download className="w-4 h-4" />
                                                            Download Image
                                                        </button>
                                                        <button onClick={copyImageToClipboard} className="w-full px-4 py-3 text-left hover:bg-gray-50 text-sm sm:text-base">
                                                            Copy Image to Clipboard
                                                        </button>
                                                        <button onClick={copyHTML} className="w-full px-4 py-3 text-left hover:bg-gray-50 text-sm sm:text-base">
                                                            Copy HTML
                                                        </button>
                                                        <button onClick={copyMarkdown} className="w-full px-4 py-3 text-left hover:bg-gray-50 rounded-b-lg text-sm sm:text-base">
                                                            Copy Markdown
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {/* Full Screen Button */}
                                        <button
                                            onClick={toggleFullScreen}
                                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors font-medium text-sm sm:text-base"
                                        >
                                            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="hidden sm:inline">Full Screen</span>
                                            <span className="sm:hidden">Full</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Screen Modal */}
                    {isFullScreen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
                            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                                {/* Close Button */}
                                <button
                                    onClick={toggleFullScreen}
                                    className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-700" />
                                </button>

                                {/* Content */}
                                <div className={`p-8 sm:p-12 overflow-y-auto max-h-[90vh] ${getContrastClass()}`}>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Bionic Reading Mode</h2>
                                    <div className="text-gray-800 leading-relaxed text-base sm:text-lg">
                                        {applyBionicReading(outputText, fixation)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="bionic-reading-converter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Bionic Reading Converter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base">
                                <p>
                                    Bionic Reading Converter is a <span className="font-semibold border-b-2 border-[#b9b8ff]">free online tool for converting your texts into Bionic Reading mode</span> for assisting you on fast reading / speed reading. If you want to convert PDF ebooks or EPUBs to Bionic Reading format, you can import the PDF or EPUB file, the tool will extract the text from PDF or EPUB and automatically convert it. You can export the result as PDF, EPUB, image, HTML or Markdown (.md). With these features, this tool works as <span className="font-semibold border-b-2 border-[#b9b8ff]">PDF to Bionic Reading converter</span> and <span className="font-semibold border-b-2 border-[#b9b8ff]">EPUB to Bionic Reading converter</span>. Bionic Reading is a methodology found by Renato Casutt for helping people to read faster by highlighting initial letters of the words.
                                </p>
                                <p>
                                    In Bionic Reading, the initial letters of the words are highlighted, and the user can read the text faster by just concentrate on the highlighted letters and the remaining part is autocompleted by the brain of the reader. Since your brain is faster than your eyes, total time to read the text is reduced. By using this method, you can increase your efficiency on speed reading and increase your understanding by focusing better than the traditional reading. This method became so popular that people are wondering if it is possible to speed up the reading process by using this method. You can use this tool for basic purposes to see whether it is effective or not.
                                </p>
                                <p>
                                    EPUB (short for electronic publication) is a widely used digital book format designed to be highly versatile and accessible on a variety of devices. Developed by the International Digital Publishing Forum (IDPF), EPUB files are designed to be reflowable, meaning the text and images can adjust to fit the size of the screen or font settings. This makes EPUB ideal for reading on devices of all sizes, from smartphones to e-readers to desktop computers. EPUB also supports interactive features such as hyperlinks, annotations, and multimedia content. With its broad compatibility and user-friendly design, EPUB has become a popular choice for publishers, authors, and readers alike. This tools allows you to both import and export EPUB files while you are converting your texts into Bionic Reading format.
                                </p>
                                <p>
                                    If you have an article to read and limited time to complete it, you can copy the content of this article and paste it into this tool. Then, you will see that you read faster with this system. Main idea of the system is to make it bolder the first few letters of each word to assist your brain. It triggers a signal in your brain, and it will complete the remaining letters of the word for you.
                                </p>
                                <p>
                                    The image below shows the standard text versus the Bionic Reading mode to illustrate the difference between to reading modes side by side.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/bionic-reading-converter/bionic-reading.jpg"
                                        alt="Bionic Reading"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Bionic Reading Before vs. After
                                </p>
                            </div>


                            {/* Section 3: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Bionic Reading Converter?</h3>
                            <p className="text-gray-700 mb-4 text-lg md:text-base">You can convert your texts into Bionic Reading mode by using the following steps:</p>
                            <ol className="space-y-4 text-md md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Enter the text you want to convert to Bionic Reading mode into input field.</li>
                                <li className="pl-2">If you want to convert a PDF file, EPUB or ebook, you can upload it by dragging your file in the import field or select your PDF or EPUB from file explorer. The tool will convert your PDF or EPUB into raw text first and then convert it to Bionic Reading mode.</li>
                                <li className="pl-2">Select the fixation amount if needed. Higher the fixation, higher the percentage of highlighted letters.</li>
                                <li className="pl-2">If you want higher contrast between the highlighted letters and the remaining letters, you can check "High Contrast" option.</li>
                                <li className="pl-2">Use the "Convert" button to start conversion.</li>
                                <li className="pl-2">Converted version will be shown after you click the button in the output field. You can read the text there to see if it is effective or not.</li>
                                <li className="pl-2">You can click "Full Screen" to see the converted text in full screen mode.</li>
                                <li className="pl-2">You can export the results in different formats by clicking Export button. You can download the converted text as multi-page PDF or image to either share or print it. You can copy the image into your clipboard for pasting different platforms to share with your friends like Twitter, Instagram, Whatsapp and so on. If you want to use it in your website, you can copy the HTML code and paste it into your website. Also, you can copy the Markdown code and paste it into your Markdown editor, GitHub or Discord.</li>
                                <li className="pl-2">If the text you want to convert is too long, the best option is to export it as PDF or EPUB. The tool automatically divides it into multiple pages and it will converted in book format by working as <span className="font-semibold border-b-2 border-[#b9b8ff]">Bionic Reading to PDF converter</span> and <span className="font-semibold border-b-2 border-[#b9b8ff]">Bionic Reading to EPUB converter</span>. So, you can save it and read it later either on your device or print it.</li>
                            </ol>

                            {/* Section 4: Credits */}
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Credits</h4>
                                <p className="text-sm text-gray-600">
                                    This tool is used the method <span className="text-blue-600 cursor-pointer hover:underline">Bionic Reading</span> developed by <span className="text-blue-600 cursor-pointer hover:underline"> Renato Casutt.</span>.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BionicReadingConverter