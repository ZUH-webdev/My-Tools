import { useState, useEffect, useMemo } from 'react';
import { Copy, RotateCcw, Check } from 'lucide-react';
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader';
import CommentsSection from '../../components/CommentsSection';
import loremIpsumGenerator from "../../images/DetailPageImages/loremIpsumGenerator.svg";
import BuyMeACoffee from '../../components/BuyMeACoffee';
import BrowserExtensionBanner from '../../components/BrowserExtensionBanner';
import SimilarTools from '../../components/SimilarTools';

const LoremIpsumGenerator = () => {
    const [copied, setCopied] = useState(false);
    const [paragraphCount, setParagraphCount] = useState(1);
    const [wordsPerSentence, setWordsPerSentence] = useState(8);
    const [sentencesPerParagraph, setSentencesPerParagraph] = useState(8);
    const [generatedText, setGeneratedText] = useState('');

    const loremWords = useMemo(() => [
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
        'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
        'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
        'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
        'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
        'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
        'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
        'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'blandit', 'facilisi',
        'ante', 'viverra', 'dapibus', 'suspenisse', 'eleifend', 'vulputate', 'ridiculus',
        'taciti', 'conubia', 'nullam', 'nibh', 'accumsan', 'quisque', 'netus', 'arcu',
        'tristique', 'condimentum', 'sollicitudin', 'urna', 'iaculis', 'senectus',
        'platea', 'purus', 'diam', 'magnis', 'feugiat', 'habitant', 'proin', 'convallis',
        'potenti', 'orci', 'odio', 'tincidunt', 'faucibus', 'pretium', 'varius'
    ], []);

    useEffect(() => {
        const generateSentence = (wordCount) => {
            let sentence = [];
            for (let i = 0; i < wordCount; i++) {
                const randomWord = loremWords[Math.floor(Math.random() * loremWords.length)];
                sentence.push(randomWord);
            }
            sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);
            return sentence.join(' ') + '.';
        };

        const generateParagraph = (sentenceCount, wordsCount) => {
            let paragraph = [];
            for (let i = 0; i < sentenceCount; i++) {
                paragraph.push(generateSentence(wordsCount));
            }
            return paragraph.join(' ');
        };

        let text = [];
        for (let i = 0; i < paragraphCount; i++) {
            text.push(generateParagraph(sentencesPerParagraph, wordsPerSentence));
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setGeneratedText(text.join('\n\n'));
    }, [paragraphCount, wordsPerSentence, sentencesPerParagraph, loremWords]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(generatedText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    };

    const handleReset = () => {
        setParagraphCount(1);
        setWordsPerSentence(8);
        setSentencesPerParagraph(8);
    };

    return (
        <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Lorem Ipsum Generator" icon={loremIpsumGenerator} />

            <div className="w-full bg-gray-50 min-h-screen pt-8 pb-10 px-3 sm:px-4 font-manrope">

                <div className="max-w-5xl mx-auto mb-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600 text-xs sm:text-sm">Paragraph Count:</span>
                                <span className="font-semibold text-gray-800 text-sm">{paragraphCount}</span>
                            </div>
                            <input type="range" min="1" max="10" value={paragraphCount} onChange={(e) => setParagraphCount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" style={{ background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${((paragraphCount - 1) / 9) * 100}%, #E5E7EB ${((paragraphCount - 1) / 9) * 100}%, #E5E7EB 100%)` }} />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600 text-xs sm:text-sm">Avg. Words Per Sentence:</span>
                                <span className="font-semibold text-gray-800 text-sm">{wordsPerSentence}</span>
                            </div>
                            <input type="range" min="3" max="20" value={wordsPerSentence} onChange={(e) => setWordsPerSentence(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" style={{ background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${((wordsPerSentence - 3) / 17) * 100}%, #E5E7EB ${((wordsPerSentence - 3) / 17) * 100}%, #E5E7EB 100%)` }} />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-600 text-xs sm:text-sm">Avg. Sentences Per Par.:</span>
                                <span className="font-semibold text-gray-800 text-sm">{sentencesPerParagraph}</span>
                            </div>
                            <input type="range" min="3" max="15" value={sentencesPerParagraph} onChange={(e) => setSentencesPerParagraph(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" style={{ background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${((sentencesPerParagraph - 3) / 12) * 100}%, #E5E7EB ${((sentencesPerParagraph - 3) / 12) * 100}%, #E5E7EB 100%)` }} />
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 min-h-62.5 md:min-h-75 border border-gray-100">
                        <h3 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Generated Text</h3>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">{generatedText}</div>
                    </div>

                    <div className="flex flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={handleReset} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-8 py-3 bg-white border-2 border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition-colors font-bold text-sm">
                            <RotateCcw size={18} /> Reset
                        </button>
                        <button onClick={handleCopy} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 sm:px-12 py-3 rounded-full transition-all font-bold text-sm ${copied ? 'bg-green-500 text-white shadow-lg' : 'bg-[#919cff] text-white hover:bg-[#3437fc] shadow-md hover:shadow-lg active:scale-95'}`}>
                            {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} strokeWidth={3} />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="lorem-ipsum-generator" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Lorem Ipsum Generator?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                                <p>
                                    Lorem Ipsum Generator is a{" "}
                                    <span className="font-semibold border-b-2 border-[#b9b8ff]">
                                        free online tool for generating Lorem Ipsum text
                                    </span>. Lorem Ipsum is a term for meaningless placeholder texts used in design and publishing. History of this concept goes back to 1960s and it is started to be used in digital environments in 1980s. While people are designing web pages, mobile apps, posters, banners, or any type of visual material that has missing content, the placeholder text is used to fill the gap. Content management systems (CMS) such as WordPress or text applications like MS Word has its own solutions for such cases, but if there isn't a fast and easy-to-use solution for creating words, sentences, and paragraphs for you, this tools will help you to save your time.
                                </p>
                                <p>
                                    Origin of the text is based on Roman philosopher Cicero's book, "De finibus bonorum et malorum". Lorem Ipsum texts are derived from Latin texts from this book. Original text is manipulated and altered to make it meaningless and nonsensical.
                                </p>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/lorem-ipsum-generator/lorem-ipsum-text-cicero-de-finibus-bonorum-et-malorum.jpg"
                                        alt="Cicero De Finibus"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Original Lorem Ipsum text in Cicero's "De finibus bonorum et malorum" book
                                </p>
                            </div>

                            {/* Section 3: Detailed Content */}
                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base mb-8">
                                <p>
                                    If you have a design project or if you are developing a website or a mobile app, you may need placeholder texts to fill the text areas to feel the design better even if your content is not ready yet. By using dummy text, you can focus more on the design rather than the content. Random text generators are a good solution to solve this problem.
                                </p>
                                <p>
                                    Another important factor when creating dummy text is the number of words. Word count or even letter count matters if the area is not big enough to display all the words. There are 3 main settings that determines the total length of the generated words.
                                </p>
                            </div>

                            {/* Section 4: Parameters List */}
                            <p className="text-gray-800 font-semibold mb-4">There are 3 parameters you must set in Lorem Ipsum Generator:</p>
                            <ul className="space-y-2 text-sm md:text-base text-gray-700 mb-10">
                                <li className="flex gap-2">
                                    <span className="font-bold">• Paragraph Count:</span> Number of paragraphs that will be generated.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">• Average Words Per Sentence:</span> Number of words in each sentence. It may differ ±20%.
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">• Average Sentences Per Paragraph:</span> Number of sentences in each paragraph. It may differ ±20%.
                                </li>
                            </ul>

                            {/* Section 5: How to Use */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Lorem Ipsum Generator?</h3>
                            <p className="text-gray-700 mb-4 text-sm md:text-base">You can generate placeholder text by following these steps:</p>
                            <ol className="space-y-4 text-sm md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">There are 3 parameters for tuning, but main parameter is paragraph count. It changes the length of the text by changing the number of paragraphs that will be created.</li>
                                <li className="pl-2">For copying the generated dummy text, use the button "Copy".</li>
                            </ol>

                            {/* Section 6: Credits */}
                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Credits</h4>
                                <p className="text-sm text-gray-600">
                                    This tool is created by the help of the project <span className="text-blue-600 cursor-pointer hover:underline">react-lorem-ipsum</span> developed by <span className="text-blue-600 cursor-pointer hover:underline">Fatih Telis</span> (me).
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoremIpsumGenerator;