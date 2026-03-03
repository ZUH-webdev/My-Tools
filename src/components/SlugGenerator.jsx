import { useState, useEffect, useCallback, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';

export default function SlugGenerator() {
    const [input, setInput] = useState('');
    const [slug, setSlug] = useState('');
    const [separator, setSeparator] = useState('dash');
    const [lowercase, setLowercase] = useState(true);
    const [removeSpecial, setRemoveSpecial] = useState(true);
    const [removeStopWords, setRemoveStopWords] = useState(false);
    const [removeNumbers, setRemoveNumbers] = useState(false);
    const [copied, setCopied] = useState(false);

    const stopWords = useMemo(() => [
        'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
        'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below',
        'between', 'both', 'but', 'by', 'could', 'did', 'do', 'does', 'doing', 'down',
        'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have',
        'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 'himself', 'his',
        'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself', 'me', 'more',
        'most', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only',
        'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own',
        'same', 'she', 'should', 'so', 'some', 'such', 'than', 'that', 'the', 'their',
        'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this',
        'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we',
        'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why',
        'with', 'would', 'you', 'your', 'yours', 'yourself', 'yourselves'
    ], []);

    const generateSlug = useCallback((text) => {
        if (!text) return '';

        let result = text;

        if (lowercase) {
            result = result.toLowerCase();
        }
        
        if (removeSpecial) {
            result = result.replace(/[^a-zA-Z0-9\s-_]/g, '');
        }
        
        if (removeNumbers) {
            result = result.replace(/[0-9]/g, '');
        }

        let words = result.trim().split(/\s+/);

        if (removeStopWords) {
            words = words.filter(word => !stopWords.includes(word.toLowerCase()));
        }

        const sep = separator === 'dash' ? '-' : '_';
        // Filter empty strings to avoid double separators
        result = words.filter(Boolean).join(sep);

        // Final cleanup for any leftover double separators
        result = result.replace(new RegExp(`\\${sep}+`, 'g'), sep);

        return result;
    }, [lowercase, removeSpecial, removeNumbers, removeStopWords, separator, stopWords]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSlug(generateSlug(input));
    }, [input, separator, lowercase, removeSpecial, removeStopWords, removeNumbers, generateSlug]);

    const handleCopy = async () => {
        if (slug) {
            await navigator.clipboard.writeText(slug);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="bg-gray-50 py-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                <div className="p-2 mb-8">
                    {/* Input Field */}
                    <div className="mb-6">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Article Title, Blog Post Title etc."
                            className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition"
                        />
                    </div>

                    {/* Separator Options */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <label className="text-lg font-bold text-gray-800">
                            Separator:
                        </label>
                        <div className="flex flex-wrap gap-6">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="separator"
                                    value="dash"
                                    checked={separator === 'dash'}
                                    onChange={(e) => setSeparator(e.target.value)}
                                    className="w-4 h-4 accent-indigo-600"
                                />
                                <span className="ml-2 text-gray-700">Dash (-)</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="separator"
                                    value="underscore"
                                    checked={separator === 'underscore'}
                                    onChange={(e) => setSeparator(e.target.value)}
                                    className="w-4 h-4 accent-indigo-600"
                                />
                                <span className="ml-2 text-gray-700">Underscore (_)</span>
                            </label>
                        </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3 mb-6">
                        {[
                            { label: 'Lowercase', state: lowercase, setter: setLowercase },
                            { label: 'Remove Special Characters', state: removeSpecial, setter: setRemoveSpecial },
                            { label: 'Remove Stop Words (English Only)', state: removeStopWords, setter: setRemoveStopWords },
                            { label: 'Remove Numbers', state: removeNumbers, setter: setRemoveNumbers }
                        ].map((item, idx) => (
                            <label key={idx} className="flex items-center cursor-pointer w-fit">
                                <input
                                    type="checkbox"
                                    checked={item.state}
                                    onChange={(e) => item.setter(e.target.checked)}
                                    className="w-4 h-4 border-gray-300 rounded accent-indigo-600"
                                />
                                <span className="ml-3 text-gray-700">{item.label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Output Field */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Generated Slug
                        </label>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                value={slug}
                                readOnly
                                placeholder="Slug will be shown here..."
                                className="flex-1 p-4 bg-white border border-gray-200 rounded-lg text-gray-700 outline-none"
                            />
                            <button
                                onClick={handleCopy}
                                disabled={!slug}
                                className="px-8 py-4 bg-indigo-600 text-white rounded-lg sm:rounded-full hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-bold"
                            >
                                {copied ? (
                                    <>
                                        <Check size={20} />
                                        <span>Copied</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={20} />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}