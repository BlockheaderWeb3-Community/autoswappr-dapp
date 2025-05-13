"use client";
import WhatIsAutoSwapper from "./components/layout/sections/what-is-autoswappr";
import LandingHeroSection from "./components/layout/sections/landing-hero-section";
import WhyAutoSwappr from "./components/layout/sections/why-autoswappr";
import HowToUseAutoSwappr from "./components/layout/sections/how-to-use-autoswappr";
export default function Home() {
  return (
    <main>
      <LandingHeroSection />
      <WhatIsAutoSwapper />
      <WhyAutoSwappr />
      <HowToUseAutoSwappr />
    </main>
  );
}
