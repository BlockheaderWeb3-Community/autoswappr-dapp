import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ConnectWallet } from "../../ui/modals/connect-wallet-modal";

function LandingHeroSection() {
  const { address } = useAccount();
  const [isConnecting, setIsConnecting] = useState(false);
  const router = useRouter();
  return (
    <>
      {isConnecting && (
        <ConnectWallet
          open={isConnecting}
          onOpenChange={() => setIsConnecting((prev) => !prev)}
        />
      )}
      <div className="relative h-[700px] md:h-[100vh]  w-full overflow-hidden flex flex-col justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-[15] flex flex-col items-center md:justify-center text-center md:px-6">
          <div className="flex flex-col items-center bg-[#02060D1F] rounded-xl p-12 backdrop-blur">
            <h1 className="text-3xl md:text-6xl md:leading-[100%] font-extrabold text-[#F3F5FF]">
              Your Tokens Your <span className="text-[#1D8CF4]">Rules</span>
            </h1>
            <p className="mt-2 mb-6 md:mb-12 text-sm md:text-lg md:leading-[22px] text-[#DCDFE1] max-w-[280px] md:max-w-full">
              Set up auto-swaps for multiple tokens and percentages with ease.
            </p>
            <button
              type="button"
              className="flex gap-1 items-center justify-center py-3 md:py-3 w-[70%] md:w-[230px] border border-[#4C5053] rounded-lg md:text-base font-semibold md:leading-[22px] text-[#F3F5FF] text-sm leading-5 bg-[#1D8CF4]"
              onClick={() => {
                if (!address) {
                  setIsConnecting(true);
                  return;
                }
                router.push("/overview");
              }}
            >
              Get started
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingHeroSection;
