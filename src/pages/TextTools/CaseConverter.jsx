import { useState } from 'react'
import caseconverter from "../../images/DetailPageImages/caseconverter.svg"
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader'
import { RotateCcw, Copy, Check, ChevronDown } from 'lucide-react';
import CommentsSection from '../../components/CommentsSection';
import BuyMeACoffee from '../../components/BuyMeACoffee';
import BrowserExtensionBanner from '../../components/BrowserExtensionBanner';

const CaseConverter = () => {
    const [text, setText] = useState('');
    const [copied, setCopied] = useState(false);
    const [selectedLocale, setSelectedLocale] = useState('en-US');

    const locales = [
        { code: 'en-US', label: 'English (United States)' },
        { code: 'en-GB', label: 'English (United Kingdom)' },
        { code: 'es-ES', label: 'Spanish (Spain)' },
        { code: 'fr-FR', label: 'French (France)' },
        { code: 'de-DE', label: 'German (Germany)' },
        { code: 'tr-TR', label: 'Turkish (Türkiye)' },
    ];

    const transforms = {
        sentence: (str) => str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()),
        upper: (str) => str.toUpperCase(),
        lower: (str) => str.toLowerCase(),
        title: (str) => str.replace(/\b\w/g, (c) => c.toUpperCase()),
        mixed: (str) => str.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join(''),
        inverse: (str) => str.split('').map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''),
    };

    const handleTransform = (type) => setText(transforms[type](text));

    const handleCopy = async () => {
        if (!text) return;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Case Converter" icon={caseconverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-2 md:pt-4 pb-10 font-manrope px-3 sm:px-4">

                <div className="max-w-5xl mx-auto pt-4 mb-6">

                    <div className="mb-4 md:mb-6 group">
                        <div className="w-full px-4 py-2 md:px-6 md:py-2 bg-white rounded-lg border border-gray-300 transition-all">
                            <label className="block text-[10px] md:text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                                Language / Locale
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedLocale}
                                    onChange={(e) => setSelectedLocale(e.target.value)}
                                    className="w-full appearance-none bg-transparent text-gray-700 text-sm md:text-base focus:outline-none cursor-pointer pr-10"
                                >
                                    {locales.map((loc) => (
                                        <option key={loc.code} value={loc.code}>{loc.label}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                    <ChevronDown size={16} className="text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-8">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter your text..."
                            className="w-full h-64 sm:h-80 md:h-100 p-4 sm:p-6 md:p-8 text-lg md:text-xl text-gray-600 bg-white rounded-lg border border-gray-200 focus:outline-indigo-500 transition-all resize-none placeholder-gray-300"
                        />
                    </div>

                    <div className="flex flex-col xl:flex-row items-center justify-between gap-6">

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full xl:w-auto">
                            {Object.keys(transforms).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => handleTransform(key)}
                                    className="px-3 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white border border-[#474aff] text-[#474aff] font-bold hover:bg-[#3437fc] hover:text-white transition-all whitespace-nowrap text-[12px] sm:text-sm active:scale-95"
                                >
                                    {key === 'mixed' ? 'MiXeD CaSe' : key === 'inverse' ? 'iNvErSe cAsE' :
                                        key === 'upper' ? 'UPPER CASE' : key === 'lower' ? 'lower case' :
                                            key === 'sentence' ? 'Sentence case' : 'Title Case'}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-row items-center gap-2 sm:gap-3 w-full xl:w-auto">
                            <button
                                onClick={() => setText('')}
                                className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-4 py-2.5 sm:px-8 sm:py-3 rounded-full bg-white border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-50 transition-colors text-[12px] sm:text-sm active:scale-95"
                            >
                                <RotateCcw size={16} strokeWidth={3} />
                                <span className="sm:inline">Reset</span>
                            </button>
                            <button
                                onClick={handleCopy}
                                className={`flex-[1.5] flex items-center justify-center gap-1 sm:gap-2 px-6 py-2.5 sm:px-12 sm:py-3 rounded-full font-bold text-[12px] sm:text-sm transition-all active:scale-95 ${copied ? 'bg-green-500 text-white shadow-lg' : 'bg-[#919cff] text-white hover:bg-[#3437fc] shadow-md hover:shadow-lg'}`}
                            >
                                {copied ? <Check size={16} strokeWidth={3} /> : <Copy size={16} strokeWidth={3} />}
                                {copied ? 'Copied!' : 'Copy Text'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Components Wrapper */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="case-converter" />
                    <BuyMeACoffee />
                    <BrowserExtensionBanner />

                    {/* ToolDescription */}
                    <div className="max-w-5xl mx-auto py-2 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">

                            <h1 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">What is Online Case Converter?</h1>

                            <div className="space-y-4 text-gray-800 leading-relaxed mb-8 font-manrope text-sm md:text-base">
                                <p>
                                    Case Converter is a{" "}
                                    <span className="relative inline-block">
                                        <span className="relative z-10 font-medium">"free online tool for converting text to different cases"</span>
                                        <span className="absolute left-0 bottom-0 w-full h-1 bg-[#b9b8ff] rounded-full z-0"></span>
                                    </span>. If you have a wrongly formatted text you want to convert it to a specific case, online case converter will assist you to perform it immediately. Its language-sensitive case conversion feature allows you to convert text to different cases for different languages. It is a useful tool for writers, editors, and content creators to format their text in a proper way.
                                </p>

                                <p>
                                    If you have a text other than English and it contains language-specific characters that needs to be treated differently than English, you can convert your text into different locales. Online Case Converter supports multiple languages such as English, German, French, Spanish, Italian, Dutch, Portuguese, Russian, Turkish, Arabic, Chinese, Japanese, Korean, and more.
                                </p>

                                <p>
                                    There are uppercase and lowercase letters in alphabets. You can use either one of them in your text or a mixture. These patterns define different cases. Here is an image showing uppercase and lowercase letters in English alphabet. You can convert cases for different alphabets with Online Case Converter.
                                </p>
                            </div>
                            <div className="my-8 bg-black rounded-lg p-6 md:p-8 text-center font-manrope overflow-hidden">
                                <div className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-wider mb-2 break-all">
                                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                </div>
                                <div className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-wider break-all">
                                    abcdefghijklmnopqrstuvwxyz
                                </div>
                            </div>
                            <p className="text-center text-gray-800 text-sm mb-8 font-manrope">Uppercase and Lowercase Letters</p>

                            <p className="text-gray-800 mb-4 font-manrope font-semibold">Here is a list of available cases with their detailed explanations and examples.</p>

                            <ul className="space-y-6 text-gray-800 mb-8 font-manrope text-sm md:text-base">
                                <li>
                                    <span className="font-bold">Sentence Case:</span> First letter of all sentences will be uppercase while remaining will be lowercase. Sentences will be identified with punctuations which ends a sentence such as dot, question mark or exclamation mark.
                                    <div className="text-gray-500 italic mt-1">Example: "This is the first sentence. This is the second one."</div>
                                </li>

                                <li>
                                    <span className="font-bold">Title Case:</span> First letters of each word are uppercase while remaining will be lowercase.
                                    <div className="text-gray-500 italic mt-1">Example: "This Is An Example For Title Case"</div>
                                </li>

                                <li>
                                    <span className="font-bold">Uppercase:</span> All letters in the text will be uppercase.
                                    <div className="text-gray-500 italic mt-1">Example: "ALL LETTERS ARE IN UPPERCASE."</div>
                                </li>

                                <li>
                                    <span className="font-bold">Lowercase:</span> All letters in the text will be lowercase.
                                    <div className="text-gray-500 italic mt-1">Example: "all letters are in lowercase."</div>
                                </li>

                                <li>
                                    <span className="font-bold">Mixed Case:</span> It is a sequence of one letter uppercase, one letter lowercase for each word.
                                    <div className="text-gray-500 italic mt-1">Example: "OnE LeTtEr UpPeRcAsE, OnE LeRtEr LoWeRcAsE In EaCh WoRd."</div>
                                </li>

                                <li>
                                    <span className="font-bold">Inverse Case:</span> It is a sequence of one letter lowercase, one letter uppercase for each word.
                                    <div className="text-gray-500 italic mt-1">Example: "oNe lEtTeR lOwErCaSe, oNe lEtTeR uPpErCaSe iN eAcH wOrD."</div>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Case Converter?</h2>

                            <p className="text-gray-800 mb-6 font-manrope">You can convert you text into any case by following these steps.</p>

                            <ol className="space-y-4 text-gray-800 mb-8 list-decimal list-inside font-manrope text-sm md:text-base">
                                <li>First, paste your text in the text area you want to convert.</li>
                                <li>Select the case from the list you want to convert. It converts the text immediately after you select the case. If you modify your text and want to apply the same format again, just use the "Apply" button.</li>
                                <li>You can use "Copy" button to copy the converted text into your clipboard. In addition, you can download the output as a .txt file by using the "Download" button.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseConverter