import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

/* Layout */
import Header from "./LandingPageComponents/Header/Header";
import Footer from "./LandingPageComponents/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ShareModal from "./components/Modal/ShareModal.jsx";

/* Context */
import ApiContextProvider from "./contexts/api-context-provider.jsx";

/* Redux */
import { setFavourites } from "./redux/slices/favouritesSlice.js";

// Global error handling
window.addEventListener('error', function(event) {
  console.error('Global error caught:', event.error);
  console.error('Error stack:', event.error.stack);
});





/* Home */
const Home = lazy(() => import("./CommonRoute/Home"));

/* Static Pages */
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PrivacyAndPolicy = lazy(() =>
  import("./pages/Privicyandpolicy/PrivicyandPolicy")
);
const TermsOfUse = lazy(() => import("./pages/Termsofuse/TermofUse"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ToolRequest = lazy(() => import("./pages/ToolRequest/ToolRequest"));
const Orders = lazy(() => import("./pages/Orders/Orders"));

/* Category Pages */
const TextToolsPage = lazy(() =>
  import("./NavPages/Categories/TextTools/TextTools")
);
const ImageToolPage = lazy(() =>
  import("./NavPages/Categories/ImageTools/ImageTool")
);
const CssToolPage = lazy(() =>
  import("./NavPages/Categories/CssTools/CssTool")
);
const CodingToolsPage = lazy(() =>
  import("./NavPages/Categories/CodingTools/CodingTools")
);
const ColorToolsPage = lazy(() =>
  import("./NavPages/Categories/ColorTools/ColorTools")
);
const SocialMediaToolPage = lazy(() =>
  import("./NavPages/Categories/SocialMediaTools/SocialMediaTool")
);
const MiscellaneousToolPage = lazy(() =>
  import("./NavPages/Categories/MiscellaneousTools/MiscellaneousTool")
);

/* Product Finder */
const Layout = lazy(() => import("./product-finder-pages/layout.jsx"));
const ProductFinderPage = lazy(() =>
  import("./product-finder-pages/product-finder")
);
const DetailsPage = lazy(() =>
  import("./product-finder-pages/detail.jsx")
);

/* Text Tools */
const CaseConverter = lazy(() => import("./pages/TextTools/CaseConverter.jsx"));
const LoremIpsumGenerator = lazy(() =>
  import("./pages/TextTools/LoremIpsumGenerator.jsx")
);
const LetterCounter = lazy(() =>
  import("./pages/TextTools/LetterCounter.jsx")
);
const TextToHandwritingConverter = lazy(() =>
  import("./pages/TextTools/TextToHandwritingConverter.jsx")
);
const BionicReadingConverter = lazy(() =>
  import("./pages/TextTools/BionicReadingConverter.jsx")
);
const MultipleWhitespaceRemover = lazy(() =>
  import("./pages/TextTools/MultipleWhitespaceRemover.jsx")
);
const GoogleFontsPairFinder = lazy(() =>
  import("./pages/TextTools/GoogleFontsPairFinder.jsx")
);

/* Image Tools */
const ImageCropper = lazy(() => import("./pages/ImageTools/ImageCropper.jsx"));
const ImageFilters = lazy(() => import("./pages/ImageTools/ImageFilters.jsx"));
const ImageResizer = lazy(() => import("./pages/ImageTools/ImageResizer.jsx"));
const ImageAverageColorFinder = lazy(() =>
  import("./pages/ImageTools/ImageAverageColorFinder.jsx")
);
const ImageColorExtractor = lazy(() =>
  import("./pages/ImageTools/ImageColorExtractor.jsx")
);
const ImageColorPicker = lazy(() =>
  import("./pages/ImageTools/ImageColorPicker.jsx")
);
const SvgBlobGenerator = lazy(() =>
  import("./pages/ImageTools/SvgBlobGenerator.jsx")
);
const SvgPatternGenerator = lazy(() =>
  import("./pages/ImageTools/SvgPatternGenerator.jsx")
);
const PhotoCensor = lazy(() =>
  import("./pages/ImageTools/PhotoCensor.jsx")
);
const SvgToPngConverter = lazy(() =>
  import("./pages/ImageTools/SvgToPngConverter.jsx")
);
const SvgStrokeToFillConverter = lazy(() =>
  import("./pages/ImageTools/SvgStrokeToFillConverter.jsx")
);
const ImageToBase64Converter = lazy(() =>
  import("./pages/ImageTools/ImageToBase64Converter.jsx")
);
const ImageCaptionGenerator = lazy(() =>
  import("./pages/ImageTools/ImageCaptionGenerator.jsx")
);
const ScannedPdfConverter = lazy(() =>
  import("./pages/ImageTools/ScannedPdfConverter.jsx")
);

/* CSS Tools */
const CSSLoaderGenerator = lazy(() =>
  import("./pages/CSSTools/CSSLoaderGenerator.jsx")
);
const CSSCheckboxGenerator = lazy(() =>
  import("./pages/CSSTools/CSSCheckboxGenerator.jsx")
);
const CSSSwitchGenerator = lazy(() =>
  import("./pages/CSSTools/CSSSwitchGenerator.jsx")
);
const CSSClipPathGenerator = lazy(() =>
  import("./pages/CSSTools/CSSClipPathGenerator.jsx")
);
const CSSBackgroundPatternGenerator = lazy(() =>
  import("./pages/CSSTools/CSSBackgroundPatternGenerator.jsx")
);
const CSSCubicBezierGenerator = lazy(() =>
  import("./pages/CSSTools/CSSCubicBezierGenerator.jsx")
);
const CSSGlassmorphismGenerator = lazy(() =>
  import("./pages/CSSTools/CSSGlassmorphismGenerator.jsx")
);
const CSSTextGlitchEffectGenerator = lazy(() =>
  import("./pages/CSSTools/CSSTextGlitchEffectGenerator.jsx")
);
const CSSGradientGenerator = lazy(() =>
  import("./pages/CSSTools/CSSGradientGenerator.jsx")
);
const CSSTriangleGenerator = lazy(() =>
  import("./pages/CSSTools/CSSTriangleGenerator.jsx")
);
const CSSBoxShadowGenerator = lazy(() =>
  import("./pages/CSSTools/CSSBoxShadowGenerator.jsx")
);
const CSSBorderRadiusGenerator = lazy(() =>
  import("./pages/CSSTools/CSSBorderRadiusGenerator.jsx")
);

/* Coding Tools */
const CodeToImageConverter = lazy(() =>
  import("./pages/CodingTools/CodeToImageConverter.jsx")
);
const URLSlugGenerator = lazy(() =>
  import("./pages/CodingTools/URLSlugGenerator.jsx")
);
const ReactNativeShadowGenerator = lazy(() =>
  import("./pages/CodingTools/ReactNativeShadowGenerator.jsx")
);
const Base64EncoderDecoder = lazy(() =>
  import("./pages/CodingTools/Base64EncoderDecoder.jsx")
);
const HTMLEncoderDecoder = lazy(() =>
  import("./pages/CodingTools/HTMLEncoderDecoder.jsx")
);
const URLEncoderDecoder = lazy(() =>
  import("./pages/CodingTools/URLEncoderDecoder.jsx")
);
const HTMLMinifier = lazy(() =>
  import("./pages/CodingTools/HTMLMinifier.jsx")
);
const CSSMinifier = lazy(() =>
  import("./pages/CodingTools/CSSMinifier.jsx")
);
const JavascriptMinifier = lazy(() =>
  import("./pages/CodingTools/JavascriptMinifier.jsx")
);
const HTMLFormatter = lazy(() =>
  import("./pages/CodingTools/HTMLFormatter.jsx")
);
const CSSFormatter = lazy(() =>
  import("./pages/CodingTools/CSSFormatter.jsx")
);
const JavascriptFormatter = lazy(() =>
  import("./pages/CodingTools/JavascriptFormatter.jsx")
);
const MD5EncryptDecrypt = lazy(() =>
  import("./pages/CodingTools/MD5EncryptDecrypt.jsx")
);
const SHA1EncryptDecrypt = lazy(() =>
  import("./pages/CodingTools/SHA1EncryptDecrypt.jsx")
);
const SHA224EncryptDecrypt = lazy(() =>
  import("./pages/CodingTools/SHA224EncryptDecrypt.jsx")
);
const SHA256EncryptDecrypt = lazy(() =>
  import("./pages/CodingTools/SHA256EncryptDecrypt.jsx")
);
const SHA384EncryptDecrypt = lazy(() =>
  import("./pages/CodingTools/SHA384EncryptDecrypt.jsx")
);
const SHA512EncryptDecrypt = lazy(() =>
  import("./pages/CodingTools/SHA512EncryptDecrypt.jsx")
);
const JWTEncoderDecoder = lazy(() =>
  import("./pages/CodingTools/JWTEncoderDecoder.jsx")
);
const JSONTreeViewer = lazy(() =>
  import("./pages/CodingTools/JSONTreeViewer.jsx")
);


/* Coding Tools */
const AIColorPaletteGenerator = lazy(() =>
  import("./pages/ColorTools/AIColorPaletteGenerator.jsx")
);
const HexToRgbaConverter = lazy(() =>
  import("./pages/ColorTools/HexToRgbaConverter.jsx")
);
const RgbaToHexConverter = lazy(() =>
  import("./pages/ColorTools/RgbaToHexConverter.jsx")
);
const ColorShadesGenerator = lazy(() =>
  import("./pages/ColorTools/ColorShadesGenerator.jsx")
);
const ColorMixer = lazy(() =>
  import("./pages/ColorTools/ColorMixer.jsx")
);


/* Social Media Tools */
const InstagramFilters = lazy(() =>
  import("./pages/SocialMediaTools/InstagramFilters.jsx")
);
const InstagramPostGenerator = lazy(() =>
  import("./pages/SocialMediaTools/InstagramPostGenerator.jsx")
);
const InstagramPhotoDownloader = lazy(() =>
  import("./pages/SocialMediaTools/InstagramPhotoDownloader.jsx")
);
const TweetGenerator = lazy(() =>
  import("./pages/SocialMediaTools/TweetGenerator.jsx")
);
const TweetToImageConverter = lazy(() =>
  import("./pages/SocialMediaTools/TweetToImageConverter.jsx")
);
const TwitterAdRevenueGenerator = lazy(() =>
  import("./pages/SocialMediaTools/TwitterAdRevenueGenerator.jsx")
);
const YoutubeThumbnailGrabber = lazy(() =>
  import("./pages/SocialMediaTools/YoutubeThumbnailGrabber.jsx")
);
const VimeoThumbnailGrabber = lazy(() =>
  import("./pages/SocialMediaTools/VimeoThumbnailGrabber.jsx")
);
const OpenGraphMetaGenerator = lazy(() =>
  import("./pages/SocialMediaTools/OpenGraphMetaGenerator.jsx")
);


/* Miscellaneous Tools */
const StrongRandomPasswordGenerator = lazy(() =>
  import("./pages/MiscellaneousTools/StrongRandomPasswordGenerator.jsx")
);
const QrCodeGenerator = lazy(() =>
  import("./pages/MiscellaneousTools/QrCodeGenerator.jsx")
);
const FakeIbanGenerator = lazy(() =>
  import("./pages/MiscellaneousTools/FakeIBANGenerator.jsx")
);
const BarCodeGenerator = lazy(() =>
  import("./pages/MiscellaneousTools/BarCodeGenerator.jsx")
);
const ListRandomizer = lazy(() =>
  import("./pages/MiscellaneousTools/ListRandomizer.jsx")
);

/* Product Finder Pages */
const GetSubmit = lazy(() =>
  import("./product-finder-pages/getSubmit.jsx")
);
const Submit = lazy(() =>
  import("./product-finder-pages/submit.jsx")
);
const Checkout = lazy(() =>
  import("./product-finder-pages/checkout.jsx")
);

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser, clearUser } from "./redux/slices/authSlice";
import ToolLayout from "./pages/ToolLayout.jsx";
import { LoadingSpinner } from "./components/LoadingSpinner.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
      };
        dispatch(setUser(userData));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsub();
  }, [dispatch]);
  const favourites = useSelector((state) => state.favourites.items);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites"));
    if (stored) dispatch(setFavourites(stored));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <ErrorBoundary>
      <ApiContextProvider>
        <BrowserRouter>
          <ShareModal />
          <ScrollToTop />
          <Header />

        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Home />} />

              {/* Categories */}
              <Route path="/categories/text-tools" element={<TextToolsPage />} />
              <Route path="/categories/image-tools" element={<ImageToolPage />} />
              <Route path="/categories/css-tools" element={<CssToolPage />} />
              <Route path="/categories/coding-tools" element={<CodingToolsPage />} />
              <Route path="/categories/color-tools" element={<ColorToolsPage />} />
              <Route
                path="/categories/social-media-tools"
                element={<SocialMediaToolPage />}
              />
              <Route
                path="/categories/miscellaneous-tools"
                element={<MiscellaneousToolPage />}
              />

              {/* Static */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privicyandpolicy" element={<PrivacyAndPolicy />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
              <Route path="/tool-request" element={<ToolRequest />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />

              {/* Text Tools */}
              <Route path="/tools" element={<ToolLayout />}>

                <Route path="text-tools/case-converter" element={<CaseConverter />} />
                <Route path="text-tools/lorem-ipsum-generator" element={<LoremIpsumGenerator />} />
                <Route path="text-tools/letter-counter" element={<LetterCounter />} />
                <Route
                  path="text-tools/text-to-handwriting-converter"
                  element={<TextToHandwritingConverter />}
                />
                <Route
                  path="text-tools/bionic-reading-converter"
                  element={<BionicReadingConverter />}
                />
                <Route
                  path="text-tools/multiple-whitespace-remover"
                  element={<MultipleWhitespaceRemover />}
                />
                <Route
                  path="text-tools/google-fonts-pair-finder"
                  element={<GoogleFontsPairFinder />}
                />

                {/* Image Tools */}
                <Route path="image-tools/image-cropper" element={<ImageCropper />} />
                <Route path="image-tools/image-filters" element={<ImageFilters />} />
                <Route path="image-tools/image-resizer" element={<ImageResizer />} />
                <Route
                  path="image-tools/image-average-color-finder"
                  element={<ImageAverageColorFinder />}
                />
                <Route
                  path="image-tools/image-color-extractor"
                  element={<ImageColorExtractor />}
                />
                <Route
                  path="image-tools/image-color-picker"
                  element={<ImageColorPicker />}
                />
                <Route path="image-tools/svg-blob-generator" element={<SvgBlobGenerator />} />
                <Route
                  path="image-tools/svg-pattern-generator"
                  element={<SvgPatternGenerator />}
                />
                <Route path="image-tools/photo-censor" element={<PhotoCensor />} />
                <Route
                  path="image-tools/svg-to-png-converter"
                  element={<SvgToPngConverter />}
                />
                <Route
                  path="image-tools/svg-stroke-to-fill-converter"
                  element={<SvgStrokeToFillConverter />}
                />
                <Route
                  path="image-tools/image-to-base64-converter"
                  element={<ImageToBase64Converter />}
                />
                <Route
                  path="image-tools/image-caption-generator"
                  element={<ImageCaptionGenerator />}
                />
                <Route
                  path="image-tools/scanned-pdf-converter"
                  element={<ScannedPdfConverter />}
                />

                {/* CSS Tools */}
                <Route
                  path="css-tools/css-loader-generator"
                  element={<CSSLoaderGenerator />}
                />
                <Route
                  path="css-tools/css-checkbox-generator"
                  element={<CSSCheckboxGenerator />}
                />
                <Route
                  path="css-tools/css-switch-generator"
                  element={<CSSSwitchGenerator />}
                />
                <Route
                  path="css-tools/css-clip-path-generator"
                  element={<CSSClipPathGenerator />}
                />
                <Route
                  path="css-tools/css-background-pattern-generator"
                  element={<CSSBackgroundPatternGenerator />}
                />
                <Route
                  path="css-tools/css-cubic-bezier-generator"
                  element={<CSSCubicBezierGenerator />}
                />
                <Route
                  path="css-tools/css-glassmorphism-generator"
                  element={<CSSGlassmorphismGenerator />}
                />
                <Route
                  path="css-tools/css-text-glitch-effect-generator"
                  element={<CSSTextGlitchEffectGenerator />}
                />
                <Route
                  path="css-tools/css-gradient-generator"
                  element={<CSSGradientGenerator />}
                />
                <Route
                  path="css-tools/css-triangle-generator"
                  element={<CSSTriangleGenerator />}
                />
                <Route
                  path="css-tools/css-box-shadow-generator"
                  element={<CSSBoxShadowGenerator />}
                />
                <Route
                  path="css-tools/css-border-radius-generator"
                  element={<CSSBorderRadiusGenerator />}
                />

                {/* Coding Tools */}
                <Route
                  path="coding-tools/code-to-image-converter"
                  element={<CodeToImageConverter />}
                />
                <Route
                  path="coding-tools/url-slug-generator"
                  element={<URLSlugGenerator />}
                />
                <Route
                  path="coding-tools/react-native-shadow-generator"
                  element={<ReactNativeShadowGenerator />}
                />
                <Route
                  path="coding-tools/base64-encoder-decoder"
                  element={<Base64EncoderDecoder />}
                />
                <Route
                  path="coding-tools/html-encoder-decoder"
                  element={<HTMLEncoderDecoder />}
                />
                <Route
                  path="coding-tools/url-encoder-decoder"
                  element={<URLEncoderDecoder />}
                />
                <Route
                  path="coding-tools/html-minifier"
                  element={<HTMLMinifier />}
                />
                <Route
                  path="coding-tools/css-minifier"
                  element={<CSSMinifier />}
                />
                <Route
                  path="coding-tools/javascript-minifier"
                  element={<JavascriptMinifier />}
                />
                <Route
                  path="coding-tools/html-formatter"
                  element={<HTMLFormatter />}
                />
                <Route
                  path="coding-tools/css-formatter"
                  element={<CSSFormatter />}
                />
                <Route
                  path="coding-tools/javascript-formatter"
                  element={<JavascriptFormatter />}
                />
                <Route
                  path="coding-tools/md5-encrypt-decrypt"
                  element={<MD5EncryptDecrypt />}
                />
                <Route
                  path="coding-tools/sha1-encrypt-decrypt"
                  element={<SHA1EncryptDecrypt />}
                />
                <Route
                  path="coding-tools/sha224-encrypt-decrypt"
                  element={<SHA224EncryptDecrypt />}
                />
                <Route
                  path="coding-tools/sha256-encrypt-decrypt"
                  element={<SHA256EncryptDecrypt />}
                />
                <Route
                  path="coding-tools/sha384-encrypt-decrypt"
                  element={<SHA384EncryptDecrypt />}
                />
                <Route
                  path="coding-tools/sha512-encrypt-decrypt"
                  element={<SHA512EncryptDecrypt />}
                />
                <Route
                  path="coding-tools/jwt-encoder-decoder"
                  element={<JWTEncoderDecoder />}
                />
                <Route
                  path="coding-tools/json-tree-viewer"
                  element={<JSONTreeViewer />}
                />

                {/* Color Tools */}
                <Route
                  path="color-tools/ai-color-palette-generator"
                  element={<AIColorPaletteGenerator />}
                />
                <Route
                  path="color-tools/hex-to-rgba-converter"
                  element={<HexToRgbaConverter />}
                />
                <Route
                  path="color-tools/rgba-to-hex-converter"
                  element={<RgbaToHexConverter />}
                />
                <Route
                  path="color-tools/color-shades-generator"
                  element={<ColorShadesGenerator />}
                />
                <Route
                  path="color-tools/color-mixer"
                  element={<ColorMixer />}
                />

                {/* Social Media Tools */}
                <Route
                  path="social-media-tools/instagram-filters"
                  element={<InstagramFilters />}
                />
                <Route
                  path="social-media-tools/instagram-post-generator"
                  element={<InstagramPostGenerator />}
                />
                <Route
                  path="social-media-tools/instagram-photo-downloader"
                  element={<InstagramPhotoDownloader />}
                />
                <Route
                  path="social-media-tools/tweet-generator"
                  element={<TweetGenerator />}
                />
                <Route
                  path="social-media-tools/tweet-to-image-converter"
                  element={<TweetToImageConverter />}
                />
                <Route
                  path="social-media-tools/twitter-ad-revenue-generator"
                  element={<TwitterAdRevenueGenerator />}
                />
                <Route
                  path="social-media-tools/youtube-thumbnail-grabber"
                  element={<YoutubeThumbnailGrabber />}
                />
                <Route
                  path="social-media-tools/vimeo-thumbnail-grabber"
                  element={<VimeoThumbnailGrabber />}
                />
                <Route
                  path="social-media-tools/open-graph-meta-generator"
                  element={<OpenGraphMetaGenerator />}
                />


                {/* Miscellaneous */}
                <Route
                  path="miscellaneous-tools/strong-random-password-generator"
                  element={<StrongRandomPasswordGenerator />}
                />
                <Route
                  path="miscellaneous-tools/qr-code-generator"
                  element={<QrCodeGenerator />}
                />
                <Route
                  path="miscellaneous-tools/fake-iban-generator"
                  element={<FakeIbanGenerator />}
                />
                <Route
                  path="miscellaneous-tools/barcode-generator"
                  element={<BarCodeGenerator />}
                />
                <Route
                  path="miscellaneous-tools/list-randomizer"
                  element={<ListRandomizer />}
                />

              </Route>
              {/* Product Finder */}
              <Route path="/product-finder/*" element={<Layout />}>
                <Route index element={<ProductFinderPage />} />
                <Route path=":slug" element={<DetailsPage />} />
                
              </Route>
              <Route>
                <Route path="/product-finder/getSubmit" element={<GetSubmit />} />
                <Route path="/product-finder/submit" element={<Submit />} />
                <Route path="/product-finder/checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </BrowserRouter>
    </ApiContextProvider>
    </ErrorBoundary>
  );
}
export default App;
