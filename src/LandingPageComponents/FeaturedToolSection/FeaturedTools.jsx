import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import all available images from DetailPageImages
import imageResizer from "../../images/DetailPageImages/imageResizer.svg";
import imageCropper from "../../images/DetailPageImages/imageCropper.svg";
import imageFilters from "../../images/DetailPageImages/imageFilters.svg";
import imageAverageColorFinder from "../../images/DetailPageImages/imageAverageColorFinder.svg";
import imageColorExtractor from "../../images/DetailPageImages/imageColorExtractor.svg";
import imageColorPicker from "../../images/DetailPageImages/imageColorPicker.svg";
import svgBlobGenerator from "../../images/DetailPageImages/svgBlobGenerator.svg";
import svgPatternGenerator from "../../images/DetailPageImages/svgPatternGenerator.svg";
import photoCensor from "../../images/DetailPageImages/photoCensor.svg";
import svgToPngConverter from "../../images/DetailPageImages/svgToPngConverter.svg";
import svgStrokeToFillConverter from "../../images/DetailPageImages/svgStrokeToFillConverter.svg";
import imageToBase64Converter from "../../images/DetailPageImages/imageToBase64Converter.svg";
import imageCaptionGenerator from "../../images/DetailPageImages/imageCaptionGenerator.svg";
import scannedPdfConverter from "../../images/DetailPageImages/scannedPdfConverter.svg";
import caseconverter from "../../images/DetailPageImages/caseconverter.svg";
import loremIpsumGenerator from "../../images/DetailPageImages/loremIpsumGenerator.svg";
import letterCounter from "../../images/DetailPageImages/letterCounter.svg";
import textToHandwritingConverter from "../../images/DetailPageImages/textToHandwritingConverter.svg";
import bionicReadingConverter from "../../images/DetailPageImages/bionicReadingConverter.svg";
import multipleWhitespaceRemover from "../../images/DetailPageImages/multipleWhitespaceRemover.svg";
import googleFontsPairFinder from "../../images/DetailPageImages/googleFontsPairFinder.svg";
import cssLoaderGenerator from "../../images/DetailPageImages/cssLoaderGenerator.svg";
import cssCheckboxGenerator from "../../images/DetailPageImages/cssCheckboxGenerator.svg";
import cssSwitchGenerator from "../../images/DetailPageImages/cssSwitchGenerator.svg";
import cssClipPathGenerator from "../../images/DetailPageImages/cssClipPathGenerator.svg";
import cssBackgroundPatternGenerator from "../../images/DetailPageImages/cssBackgroundPatternGenerator.svg";
import cssCubicBezierGenerator from "../../images/DetailPageImages/cssCubicBezierGenerator.svg";
import cssGlassmorphismGenerator from "../../images/DetailPageImages/cssGlassmorphismGenerator.svg";
import cssTextGlitchEffectGenerator from "../../images/DetailPageImages/cssTextGlitchEffectGenerator.svg";
import cssGradientGenerator from "../../images/DetailPageImages/cssGradientGenerator.svg";
import cssTriangleGenerator from "../../images/DetailPageImages/cssTriangleGenerator.svg";
import cssBoxShadowGenerator from "../../images/DetailPageImages/cssBoxShadowGenerator.svg";
import cssBorderRadiusGenerator from "../../images/DetailPageImages/cssBorderRadiusGenerator.svg";
import codeToImageConverter from "../../images/DetailPageImages/codeToImageConverter.svg";
import urlSlugGenerator from "../../images/DetailPageImages/urlSlugGenerator.svg";
import reactNativeShadowGenerator from "../../images/DetailPageImages/reactNativeShadowGenerator.svg";
import base64EncoderDecoder from "../../images/DetailPageImages/base64EncoderDecoder.svg";
import htmlEncoderDecoder from "../../images/DetailPageImages/htmlEncoderDecoder.svg";
import urlEncoderDecoder from "../../images/DetailPageImages/urlEncoderDecoder.svg";
import aiColorPaletteGenerator from "../../images/DetailPageImages/aiColorPaletteGenerator.svg";
import barcodeGenerator from "../../images/DetailPageImages/barcodeGenerator.svg";
import colorMixer from "../../images/DetailPageImages/colorMixer.svg";
import colorShadesGenerator from "../../images/DetailPageImages/colorShadesGenerator.svg";
import cssFormatter from "../../images/DetailPageImages/cssFormatter.svg";
import fakeIbanGenerator from "../../images/DetailPageImages/fakeIbanGenerator.svg";
import hexToRgbaConverter from "../../images/DetailPageImages/hexToRgbaConverter.svg";
import htmlFormatter from "../../images/DetailPageImages/htmlFormatter.svg";
import htmlMinifier from "../../images/DetailPageImages/htmlMinifier.svg";
import instagramFilters from "../../images/DetailPageImages/instagramFilters.svg";
import instagramPhotoDownloader from "../../images/DetailPageImages/instagramPhotoDownloader.svg";
import instagramPostGenerator from "../../images/DetailPageImages/instagramPostGenerator.svg";
import javascriptFormatter from "../../images/DetailPageImages/javascriptFormatter.svg";
import javascriptMinifier from "../../images/DetailPageImages/javascriptMinifier.svg";
import jsonTreeViewer from "../../images/DetailPageImages/jsonTreeViewer.svg";
import jwtEncoderDecoder from "../../images/DetailPageImages/jwtEncoderDecoder.svg";
import listRandomizer from "../../images/DetailPageImages/listRandomizer.svg";
import md5EncryptDecrypt from "../../images/DetailPageImages/md5EncryptDecrypt.svg";
import openGraphMetaGenerator from "../../images/DetailPageImages/openGraphMetaGenerator.svg";
import qrCodeGenerator from "../../images/DetailPageImages/qrCodeGenerator.svg";
import rgbaToHexConverter from "../../images/DetailPageImages/rgbaToHexConverter.svg";
import sha1EncryptDecrypt from "../../images/DetailPageImages/sha1EncryptDecrypt.svg";
import sha224EncryptDecrypt from "../../images/DetailPageImages/sha224EncryptDecrypt.svg";
import sha256EncryptDecrypt from "../../images/DetailPageImages/sha256EncryptDecrypt.svg";
import sha384EncryptDecrypt from "../../images/DetailPageImages/sha384EncryptDecrypt.svg";
import sha512EncryptDecrypt from "../../images/DetailPageImages/sha512EncryptDecrypt.svg";
import strongRandomPasswordGenerator from "../../images/DetailPageImages/strongRandomPasswordGenerator.svg";
import tweetGenerator from "../../images/DetailPageImages/tweetGenerator.svg";
import tweetToImageConverter from "../../images/DetailPageImages/tweetToImageConverter.svg";
import twitterAdRevenueGenerator from "../../images/DetailPageImages/twitterAdRevenueGenerator.svg";
import vimeoThumbnailGrabber from "../../images/DetailPageImages/vimeoThumbnailGrabber.svg";
import youtubeThumbnailGrabber from "../../images/DetailPageImages/youtubeThumbnailGrabber.svg";

// Create image mapping object
const imageMap = {
  // Image Tools
  "imageresizer.svg": imageResizer,
  "imagecropper.svg": imageCropper,
  "imagefilters.svg": imageFilters,
  "imageaveragefinder.svg": imageAverageColorFinder,
  "imagecolorextractor.svg": imageColorExtractor,
  "imagecolorpicker.svg": imageColorPicker,
  "svgblobgenerator.svg": svgBlobGenerator,
  "svgpatterngenerator.svg": svgPatternGenerator,
  "photocensor.svg": photoCensor,
  "svgtopngconverter.svg": svgToPngConverter,
  "svgstroketofillconverter.svg": svgStrokeToFillConverter,
  "imagetobase64converter.svg": imageToBase64Converter,
  "imagecaptiongenerator.svg": imageCaptionGenerator,
  "scannedpdfconverter.svg": scannedPdfConverter,

  // Text Tools
  "caseconverter.svg": caseconverter,
  "loremgenerator.svg": loremIpsumGenerator,
  "lettercounter.svg": letterCounter,
  "texttohandwriting.svg": textToHandwritingConverter,
  "bionicconverter.svg": bionicReadingConverter,
  "whitespaceemover.svg": multipleWhitespaceRemover,
  "googlefonts.svg": googleFontsPairFinder,

  // CSS Tools
  "cssloadergenerator.svg": cssLoaderGenerator,
  "csscheckboxgenerator.svg": cssCheckboxGenerator,
  "cssswitchgenerator.svg": cssSwitchGenerator,
  "cssclippathgenerator.svg": cssClipPathGenerator,
  "cssbackgroundpatterngenerator.svg": cssBackgroundPatternGenerator,
  "csscubicbeziergenerator.svg": cssCubicBezierGenerator,
  "cssglassmorphismgenerator.svg": cssGlassmorphismGenerator,
  "csstextglitcheffectgenerator.svg": cssTextGlitchEffectGenerator,
  "cssgradientgenerator.svg": cssGradientGenerator,
  "csstrianglegenerator.svg": cssTriangleGenerator,
  "cssboxshadowgenerator.svg": cssBoxShadowGenerator,
  "cssborderradiusgenerator.svg": cssBorderRadiusGenerator,
  "cssformatter.svg": cssFormatter,
  "cssminifier.svg": cssFormatter,

  // Coding Tools
  "codetoimageconverter.svg": codeToImageConverter,
  "urlsluggenerator.svg": urlSlugGenerator,
  "reactnativeshadowgenerator.svg": reactNativeShadowGenerator,
  "base64encoderdecoder.svg": base64EncoderDecoder,
  "htmlencoderdecoder.svg": htmlEncoderDecoder,
  "urlencoderdecoder.svg": urlEncoderDecoder,
  "htmlminifier.svg": htmlMinifier,
  "htmlformatter.svg": htmlFormatter,
  "javascriptformatter.svg": javascriptFormatter,
  "javascriptminifier.svg": javascriptMinifier,
  "md5encryptdecrypt.svg": md5EncryptDecrypt,
  "sha1encryptdecrypt.svg": sha1EncryptDecrypt,
  "sha224encryptdecrypt.svg": sha224EncryptDecrypt,
  "sha256encryptdecrypt.svg": sha256EncryptDecrypt,
  "sha384encryptdecrypt.svg": sha384EncryptDecrypt,
  "sha512encryptdecrypt.svg": sha512EncryptDecrypt,
  "jwtencoderdecoder.svg": jwtEncoderDecoder,
  "jsontreeviewer.svg": jsonTreeViewer,

  // Color Tools
  "aicolorpalettegenerator.svg": aiColorPaletteGenerator,
  "hextorgbaconverter.svg": hexToRgbaConverter,
  "rgbatohexconverter.svg": rgbaToHexConverter,
  "colorshadesgenerator.svg": colorShadesGenerator,
  "colormixer.svg": colorMixer,

  // Social Media Tools
  "instagramfilters.svg": instagramFilters,
  "instagrampostgenerator.svg": instagramPostGenerator,
  "instagramphotodownloader.svg": instagramPhotoDownloader,
  "tweetgenerator.svg": tweetGenerator,
  "tweettoimageconverter.svg": tweetToImageConverter,
  "twitteradrevenue.svg": twitterAdRevenueGenerator,
  "youtubethumbnail.svg": youtubeThumbnailGrabber,
  "vimeothumbnail.svg": vimeoThumbnailGrabber,
  "opengraphmeta.svg": openGraphMetaGenerator,

  // Miscellaneous Tools
  "strongrandompasswordgenerator.svg": strongRandomPasswordGenerator,
  "listrandomizer.svg": listRandomizer,
  "qrcodegenerator.svg": qrCodeGenerator,
  "barcodegenerator.svg": barcodeGenerator,
  "fakeibangenerator.svg": fakeIbanGenerator,
};

// Helper function to get image from map or use a default
const getImageIcon = (imageName) => {
  if (!imageName) return null;
  const normalizedName = imageName.toLowerCase();
  return imageMap[normalizedName] || null;
};

const FeaturedTools = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch tools from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Map tools with their icons and category
        const toolsWithIcons = data.map((tool) => ({
          title: tool.title,
          icon: getImageIcon(tool.image),
          imageName: tool.image,
          category: tool.category,
          slug: tool.slug,
        }));
        setTools(toolsWithIcons);
      })
      .catch((error) => {
        console.error("Error loading tools:", error);
      });
  }, []);

  const handleCardClick = (tool) => {
    navigate(`/tools/${tool.category}/${tool.slug}`);
  };

  const loopItems = tools;

  return (
    <section id="featured-tools" className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-50 overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 font-['Space_Grotesk',sans-serif]">
        Featured Tools
      </h2>

      {/* Slider */}
      {[ "animate-slideLeft", "animate-slideRight" ].map((animation, i) => (
        <div
          key={i}
          className="relative h-28 sm:h-32 md:h-36 lg:h-40 overflow-hidden mb-6 sm:mb-8
          before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-16 md:before:w-24
          before:bg-linear-to-r before:from-gray-50 before:to-transparent
          after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-16 md:after:w-24
          after:bg-linear-to-l after:from-gray-50 after:to-transparent"
        >
          <div className={`absolute h-full flex ${animation}`}>
            {loopItems.map((t, index) => (
              <div
                key={`${animation}-${t.title}-${index}`}
                onClick={() => handleCardClick(t)}
                className="shrink-0  w-48 sm:w-56 md:w-64 lg:w-72 h-16 sm:h-20 md:h-24 lg:h-28 mx-1.5 sm:mx-2 md:mx-3 bg-white rounded-md shadow-md p-3 sm:p-4 md:p-5 flex items-center justify-start gap-2 sm:gap-3 border border-gray-100 hover:shadow-lg hover:cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                {t.icon ? (
                  <img 
                    src={t.icon} 
                    alt={t.title}
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                  />
                ) : (
                  <span className="shrink-0 text-3xl sm:text-4xl md:text-4xl">
                    🛠️
                  </span>
                )}
                <p className=" gap-2 pl-2 text-sm sm:text-base md:text-lg font-medium text-gray-800 truncate">
                  {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedTools;
