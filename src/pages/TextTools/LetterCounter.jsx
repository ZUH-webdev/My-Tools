import { useState, useEffect } from 'react';
import letterCounter from "../../images/DetailPageImages/letterCounter.svg";
import ToolsDetailPageHeader from "../../components/ToolsDetailPageHeader";
import { ChevronDown } from 'lucide-react';
import CommentsSection from '../../components/CommentsSection';
import BuyMeACoffee from '../../components/BuyMeACoffee';
import SimilarTools from '../../components/SimilarTools';
import BrowserExtensionBanner from '../../components/BrowserExtensionBanner';

const LetterCounter = () => {
    const [text, setText] = useState('');
    const [counts, setCounts] = useState({ sentence: 0, word: 0, letter: 0 });
    const [filter, setFilter] = useState('All');

    // Data with standardized categories for perfect filtering
    const socialLimits = [
        { name: 'Meta Title', minMax: 'Max', limit: 55, type: 'Letter', category: 'meta' },
        { name: 'Meta Description', minMax: 'Max', limit: 160, type: 'Letter', category: 'meta' },
        { name: 'Google Ideal Post Content', minMax: 'Min', limit: 300, type: 'Word', category: 'google' },
        { name: 'Instagram Captions/Comments', minMax: 'Max', limit: 2200, type: 'Letter', category: 'insta' },
        { name: 'Twitter Post', minMax: 'Max', limit: 280, type: 'Letter', category: 'twitter' },
        { name: 'Twitter Username', minMax: 'Max', limit: 20, type: 'Letter', category: 'twitter' },
        { name: 'Facebook Wall Post (Truncation)', minMax: 'Max', limit: 477, type: 'Letter', category: 'meta' },
        { name: 'Facebook Comment', minMax: 'Max', limit: 8000, type: 'Letter', category: 'meta' },
        { name: 'YouTube Video Title', minMax: 'Max', limit: 70, type: 'Letter', category: 'youtube' },
        { name: 'YouTube Video Description', minMax: 'Max', limit: 5000, type: 'Letter', category: 'youtube' },
        { name: 'Snapchat Caption', minMax: 'Max', limit: 250, type: 'Letter', category: 'snapchat' },
        { name: 'Pinterest Pin Description', minMax: 'Max', limit: 500, type: 'Letter', category: 'pinterest' },
    ];

    useEffect(() => {
        const letters = text.length;
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(Boolean).length;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCounts({ sentence: sentences, word: words, letter: letters });
    }, [text]);

    const filteredLimits = filter === 'All'
        ? socialLimits
        : socialLimits.filter(item => item.category === filter);
    return (
        <div className="bg-gray-50 min-h-screen font-manrope overflow-x-hidden">
            <ToolsDetailPageHeader title="Letter Counter" icon={letterCounter} />

            <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
                {/* Textarea Area */}
                <div className="mb-6">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your text..."
                        className="w-full h-64 md:h-80 p-5 md:p-8 text-lg text-gray-600 bg-white rounded-xl border border-gray-200 focus:outline-[#474aff] transition-all resize-none shadow-sm placeholder-gray-300"
                    />
                </div>

                {/* Counter Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                        { label: 'sentence', value: counts.sentence },
                        { label: 'word', value: counts.word },
                        { label: 'letter', value: counts.letter }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm text-center">
                            <div className="text-4xl md:text-5xl font-bold text-[#2d334a] mb-1">{item.value}</div>
                            <div className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-lg font-bold text-gray-800">Web and Social Media Limits</h3>

                        {/* Dropdown with matching keys */}
                        <div className="relative w-full md:w-72 group">
                            <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] text-gray-400 font-bold uppercase z-10">
                                Limit Category
                            </label>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none cursor-pointer focus:border-[#474aff] transition-all"
                            >
                                <option value="All">All</option>
                                <option value="meta">Meta (Facebook)</option>
                                <option value="google">Google / SEO</option>
                                <option value="insta">Instagram</option>
                                <option value="twitter">Twitter (X)</option>
                                <option value="youtube">YouTube</option>
                                <option value="snapchat">Snapchat</option>
                                <option value="pinterest">Pinterest</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 text-gray-300 pointer-events-none group-hover:text-gray-500" size={18} />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-175">
                            <thead>
                                <tr className="bg-gray-50 text-gray-400 text-[10px] uppercase font-bold border-b border-gray-100">
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Min/Max</th>
                                    <th className="px-6 py-4">Limit</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4 text-center">Current Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {filteredLimits.length > 0 ? (
                                    filteredLimits.map((item, index) => {
                                        const currentVal = item.type === 'Letter' ? counts.letter : counts.word;
                                        const isExceeded = item.minMax === 'Max' ? currentVal > item.limit : false;
                                        const isEmpty = currentVal === 0;

                                        return (
                                            <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50 transition-all">
                                                <td className="px-6 py-4 font-semibold text-gray-800">{item.name}</td>
                                                <td className="px-6 py-4 text-gray-500">{item.minMax}</td>
                                                <td className="px-6 py-4 font-bold text-gray-700">{item.limit}</td>
                                                <td className="px-6 py-4 text-gray-500">{item.type}</td>
                                                <td className="px-6 py-4">
                                                    <div className={`flex items-center justify-center gap-2 font-bold text-[10px] tracking-wide px-3 py-1 rounded-full ${isEmpty ? 'text-gray-400 bg-gray-100/50' : isExceeded ? 'text-red-500 bg-red-50' : 'text-indigo-600 bg-indigo-50'}`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${isEmpty ? 'bg-gray-300' : isExceeded ? 'bg-red-500' : 'bg-indigo-600'}`}></span>
                                                        {isEmpty ? 'EMPTY' : isExceeded ? 'EXCEEDED' : 'GOOD'}
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-10 text-center text-gray-400 italic">No limits found for this category.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="letter-counter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="min-h-screen py-8">
                        {/* Main Card Container */}
                        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-16">

                            {/* Section 1: What is Online Letter Counter? */}
                            <section className="mb-12">
                                <h2 className="text-[24px] font-bold text-[#343a40] mb-6 font-space-grotesk">
                                    What is Online Letter Counter?
                                </h2>

                                <div className="space-y-5 text-[16px] text-[#495057] leading-[1.7]">
                                    <p>
                                        Letter Counter is a <span className='font-semibold border-b-2 border-[#b9b8ff]'>free online tool for counting letters, words, and sentences in a text</span> even while you are typing. If you are writing a text which has letter or word limits, you can check your text easily with Letter Counter for your lower and upper limits.
                                    </p>

                                    <p>
                                        In web and social media, there are lots of character and word limits to optimize the content. All social media sites like Facebook, Twitter, Instagram, YouTube, Snapchat, Pinterest etc. use title, post, comment, username limits to prevent spam and optimize their data in their databases. So, you must obey these limits before creating any type of text/content in these sites. Using letter counter and word counter for this purpose is a good practice for preventing time loss.
                                    </p>

                                    <p>
                                        For example, you have a website, and you will post new content on your site. You must set your meta title and description for SEO purposes to determine how it looks on Google, Bing, Yandex, Yahoo or other search engines. Ideal title for your page is 55 characters. If you use titles longer than this, it may be cut in some point. Same thing is valid for page description. You must limit it with 160 characters. Using a letter calculator will save your time and effort before posting this content. Here is an example of how a search result looks like in Google and how it limits letter count.
                                    </p>
                                </div>

                                {/* Image Placeholder Section */}
                                <div className="mt-10 mb-2 flex flex-col items-center">
                                    <img
                                        src="https://10015.io/assets/tools/pages/letter-counter/letter-count-limits-on-google.png"
                                        alt="Letter Count Limits on Google Search Result"
                                        className="max-w-full h-auto border border-gray-100 rounded-sm shadow-sm"
                                    />
                                    <p className="text-[14px] text-gray-400 mt-4 italic">
                                        Letter Count Limits on Google Search Result
                                    </p>
                                </div>
                            </section>

                            {/* Section 2: How to use */}
                            <section>
                                <h2 className="text-[24px] font-bold text-[#343a40] mb-6 font-space-grotesk">
                                    How to use Online Letter Counter?
                                </h2>

                                <p className="text-[16px] text-[#495057] mb-6">
                                    You can create count letters, words, and sentences in your text by following these steps.
                                </p>

                                <ol className="space-y-4 text-[16px] text-[#495057]">
                                    <li className="flex gap-2">
                                        <span className="font-bold">1.</span>
                                        <span>Enter your text in text area.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold">2.</span>
                                        <span>It will automatically calculate letter, word and sentence count in your text.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold">3.</span>
                                        <span>Also, you can check if your text pass or fails for limits on social media and web standards.</span>
                                    </li>
                                </ol>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetterCounter