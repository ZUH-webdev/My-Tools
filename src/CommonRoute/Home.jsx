import { lazy, Suspense } from "react";

/* Lazy imports */
const HeroSection = lazy(() =>
  import("../LandingPageComponents/HeroSection/HeroSection")
);
const FeaturedToolSection = lazy(() =>
  import("../LandingPageComponents/FeaturedToolSection/FeaturedTools")
);
const ToolCategoriesSection = lazy(() =>
  import("../LandingPageComponents/ToolCategoriesSection/ToolCategories")
);
const TextToolsSection = lazy(() =>
  import("../LandingPageComponents/TextToolSection/TextTools")
);
const ImageToolSection = lazy(() =>
  import("../LandingPageComponents/ImageToolSection/ImageTools")
);
const CssToolSection = lazy(() =>
  import("../LandingPageComponents/CssToolSection/CssTools")
);
const CodingToolSection = lazy(() =>
  import("../LandingPageComponents/CodingToolSection/CodingTools")
);
const ColorToolSection = lazy(() =>
  import("../LandingPageComponents/ColorToolSection/ColorTool")
);
const SocialMediaToolSection = lazy(() =>
  import("../LandingPageComponents/SocialMediaToolSection/SocialMediaTools")
);
const MiscellaneousToolSection = lazy(() =>
  import("../LandingPageComponents/MiscellaneousToolSection/MiscellaneousTools")
);
const PreFooter = lazy(() =>
  import("../LandingPageComponents/PreFooter/PreFooter")
);
const FooterHeroSection = lazy(() =>
  import("../LandingPageComponents/FooterHeroSection/FooterHero")
);

export default function Home() {
  return (
    <main className="w-full bg-gray-50">
      {/* Hero: highest priority */}
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>

      {/* Remaining sections */}
      <Suspense fallback={<div className="h-32" />}>
        <FeaturedToolSection />
        <ToolCategoriesSection />
        <TextToolsSection />
        <ImageToolSection />
        <CssToolSection />
        <CodingToolSection />
        <ColorToolSection />
        <SocialMediaToolSection />
        <MiscellaneousToolSection />
        <PreFooter />
        <FooterHeroSection />
      </Suspense>
    </main>
  );
}
