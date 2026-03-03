import scannedPdfConverter from "../../images/DetailPageImages/scannedPdfConverter.svg";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import PdfScanner from "../../components/PdfScanner";
import SimilarTools from "../../components/SimilarTools";
import ToolsDetailPageHeader from '../../components/ToolsDetailPageHeader';

const ScannedPdfConverter = () => {
  return (
    <div className="overflow-x-hidden">
            <ToolsDetailPageHeader title="Scanned PDF Converter" icon={scannedPdfConverter} />

            <div className="w-full bg-gray-50 min-h-screen pt-4 pb-10 px-3 sm:px-4">

               <PdfScanner />

                {/* Components */}
                <div className="flex flex-col space-y-0">
                    <CommentsSection toolId="scanned-pdf-converter" />
                    <BuyMeACoffee />
                    <SimilarTools />
                    <BrowserExtensionBanner />
                    <div className="max-w-5xl mx-auto py-4 px-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100 font-manrope">

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                What is Online Scanned PDF Converter?
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    Scanned PDF Converter is a <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">free online tool that transforms your digital assets (PDF, DOCX or images like JPEG & PNG) to look like they've been physically scanned</span>. This digital solution is ideal for situations where you need a document to have the authentic appearance of being manually scanned.
                                </p>
                                <p>
                                    With customizable settings for rotation, brightness, blur, noise, and border effects, you can achieve a realistic scanned appearance without needing access to physical scanner hardware. The intuitive interface provides a real-time preview so you can see exactly how your document will look before downloading the final result.needs.
                                </p>
                                <p>
                                    Many institutions and processes still require the appearance of scanned documents for authenticity purposes. Our conversion tool bridges this gap by providing a digital alternative that doesn't compromise document quality.
                                </p>
                            </div>

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk pt-6">
                                Key Features of Our Scanned PDF Converter
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <ul className="p-4 space-y-6 list-disc text-gray-800 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Realistic Scanning Effects:</span> Customizable parameters for authentic results
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Multi-Page Support:</span> Process multiple-page documents with consistent effects
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Fast Processing:</span> Quick conversion even for large documents
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Zero Watermarks:</span>  Clean output without any tool branding
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Accessibility:</span> Works on desktop and mobile devices
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Free to Use:</span> No hidden fees or premium restrictions
                                    </li>
                                </ul>
                            </div>

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                Common Use Cases
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p className="text-gray-950 mb-4 text-lg font-semibold md:text-base">Our document scanner tool is valuable in many scenarios where digitally created PDFs need to appear as if they were physically scanned:</p>
                                <ul className="p-4 space-y-6 list-disc text-gray-800 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Document Submissions:</span> When digital signatures aren't accepted but scanned signatures are
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Legacy Systems:</span> For organizations that still require the appearance of physical documentation
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Educational Purposes:</span> For submitting assignments that require handwritten work
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Historical Document Recreation:</span> Creating authentic-looking historical documents
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Visual Demonstrations:</span> For tutorials and educational materials about document processing
                                    </li>
                                </ul>
                            </div>

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk">
                                Privacy and Security
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <p>
                                    This tool processes all files locally within your browser, ensuring that your data remains private and secure. The only exception is Microsoft Word (.docx) documents, which are converted to PDF format prior to processing to preserve their layout and formatting. However, these DOCX files are not stored on any server; the conversion process occurs entirely on your device. For maximum privacy, especially when handling sensitive or confidential DOCX files, we recommend converting them to PDF using your preferred method before uploading.
                                </p>
                                </div>

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 font-space-grotesk pt-6">
                                Technical Specifications
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-md md:text-base font-semibold">
                                <ul className="p-4 space-y-6 list-disc text-gray-800 mb-8 font-manrope text-sm md:text-base">
                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Compatible Formats:</span> PDF documents (all versions), MS Word (.docx), Images (JPEG, PNG, WEBP, GIF)
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Maximum File Size:</span> Limitless (Browser dependent) for PDFs and images, 5MB for MS Word (.docx) files
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Processing Speed:</span> Typically 1-5 seconds per page depending on complexity
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Output Format:</span>  Standard PDF with preserved text recognition, or PNG images
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Mobile Compatibility:</span> Works on modern mobile browsers with sufficient memory
                                    </li>

                                    <li>
                                        <span className="font-bold text-gray-900 border-b-2 border-[#b9b8ff]">Random Rotation:</span> When processing multiple pages, each page can have a random rotation variance of ± 0.5 degrees to simulate real-world scanning conditions.
                                    </li>
                                </ul>
                            </div>

                            {/* Section 2: Image Placeholder */}
                            <div className="my-10 flex flex-col items-center">
                                <div className="border border-gray-200 p-2 bg-white shadow-sm max-w-md w-full">
                                    <img
                                        src="https://10015.io/assets/tools/pages/scanned-pdf-converter/scanned-pdf-converter.jpg"
                                        alt="Scanned Pdf Converter"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-4 text-center italic">
                                    Scanned PDF Converter Before and After
                                </p>
                            </div>

                            {/* Section 1: Header & Intro */}
                            <h2 className="text-xl md:text-2xl font-bold text-gray-950 mb-6 font-space-grotesk">
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4 text-gray-800 leading-relaxed text-md md:text-base font-semibold">
                                <h3 className="text-gray-900 mb-4 text-lg font-bold md:text-base">Is there a difference between a scanned PDF and a regular PDF?</h3>

                                <p>Yes, regular PDFs are typically created digitally and contain text layers that are selectable and searchable. Scanned PDFs are images of physical documents and often lack this text layer unless OCR (Optical Character Recognition) has been applied. Our tool maintains the visual appearance of scanned documents while preserving the digital advantages of your original PDF.</p>

                                <h3 className="text-gray-900 mb-4 text-lg font-bold md:text-base">Will this affect the text searchability of my document?</h3>

                                <p>The conversion process applies visual effects to make your document look scanned, but it doesn't remove the underlying text layer. However, heavy blur effects might impact OCR software's ability to recognize text if the document is processed again later.</p>

                                <h3 className="text-gray-900 mb-4 text-lg font-bold md:text-base">Can I convert multiple document at once?</h3>

                                <p>Currently, our tool processes one document at a time to ensure optimal performance and quality. For batch processing needs, you can convert each document individually.</p>

                                <h3 className="text-gray-900 mb-4 text-lg font-bold md:text-base">How do I get the best results when making a PDF look scanned?</h3>

                                <p>For the most authentic scanned look, we recommend using subtle settings: a slight rotation (1-3°), moderate brightness (1.1-1.3), minimal blur (0.2-0.4), and enabling the border option. These settings mimic the imperfections of physical scanning without overdoing the effect.</p>

                                </div>

                            {/* Section 3: How to Use */}
                            <h3 className="pt-6 text-xl font-bold text-gray-900 mb-6 font-space-grotesk">How to use Online Scanned PDF Converter?</h3>
                            <p className="text-gray-700 mb-4 text-lg font-semibold md:text-base">You can convert your documents to look scanned by following these steps:</p>
                            <ol className="space-y-4 text-md font-semibold md:text-base text-gray-700 list-decimal list-inside mb-10">
                                <li className="pl-2">Upload the document you want to convert by using the drop area, or by browsing from your local device.</li>
                                <li className="pl-2">Adjust the settings to your preference:</li>
                                <li className='pl-2'><span className="text-gray-900">Rotation:</span> Add a slight rotation to simulate how papers can be misaligned during scanning (-10° to 10°).</li>
                                <li className="pl-2"><span className="text-gray-900">Brightness:</span> Adjust how light or dark the scanned document appears (0 to 2).</li>
                                <li className="pl-2"><span className="text-gray-900">Blur:</span> Add a subtle blur to simulate scanning resolution imperfections (0 to 1).</li>
                                <li className="pl-2"><span className="text-gray-900">Border:</span> Toggle on/off to add a subtle border effect around the document.</li>
                                <li className="pl-2">Review the real-time preview to see how your document will look.</li>
                                <li className="pl-2">Click the "Download" button to save your scanned-looking PDF.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ScannedPdfConverter