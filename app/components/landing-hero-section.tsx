import { useAccount } from "@starknet-react/core";
import Image from "next/image";
import m_Img from "../../public/M-logo.svg";
import { useRouter } from "next/navigation";
import React from "react";
import { ChevronRight } from "lucide-react";

function LandingHeroSection({
  openConnectModal,
}: {
  openConnectModal: (value: boolean) => void;
}) {
  const { address } = useAccount();
  const router = useRouter();
  return (
    <div className="relative h-[844px] md:h-[100vh]  w-full overflow-hidden flex flex-col justify-center">
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
      <div className="relative z-[15] flex flex-col items-center md:justify-center text-center px-6">
        <Image className="md:hidden mb-[77px]" src={m_Img} alt="Token badge" />
        <div className="flex flex-col items-center bg-[#02060D1F] rounded-xl p-12 backdrop-blur">
          <h1 className="text-2xl md:text-[64px] md:leading-[100%] font-extrabold text-[#F3F5FF] max-w-[280px] md:max-w-full">
            Your Tokens, Your <span className="text-[#1D8CF4]">Rules</span>
          </h1>
          <p className="mt-2 mb-6 md:mb-12 text-sm md:text-xl md:leading-[22px] text-[#DCDFE1] max-w-[280px] md:max-w-full">
            Set up auto-swaps for multiple tokens and percentages with ease.
          </p>
          <button
            className="flex gap-[5px] items-center justify-center py-3 md:py-5 w-full md:w-[280px] border border-[#4C5053] rounded-lg md:text-base font-semibold md:leading-[22px] text-[#F3F5FF] text-sm leading-5 bg-[#1D8CF4]"
            onClick={() => {
              if (!address) {
                openConnectModal(true);
                return;
              }
              router.push("/select-base-token");
            }}
          >
            Get started
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroSection;
