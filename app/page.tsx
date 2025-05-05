"use client";
import React, { useState } from "react";
import LockBodyScroll from "./components/lock-body-scroll";
import { createPortal } from "react-dom";
import ConnectWalletModal from "./components/connect-wallet-modal";
import WhatIsAutoSwapper from "./components/what-is-autoswappr";
import LandingHeroSection from "./components/landing-hero-section";
import WhyAutoSwappr from "./components/why-autoswappr";
import HowToUseAutoSwappr from "./components/how-to-use-autoswappr";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <LockBodyScroll lock={isModalOpen} />
      {isModalOpen &&
        createPortal(
          <ConnectWalletModal handleClose={() => setIsModalOpen(false)} />,
          document.body
        )}
      <LandingHeroSection openConnectModal={setIsModalOpen} />
      <WhatIsAutoSwapper />
      <WhyAutoSwappr />
      <HowToUseAutoSwappr />
    </main>
  );
}
