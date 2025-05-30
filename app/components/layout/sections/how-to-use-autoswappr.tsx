import { ArrowDownLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function HowToUseAutoSwappr() {
  const [activeStep] = useState(1);
  return (
    <div className="py-10 md:py-[60px] px-6 md:px-[75px]">
      <h2 className="text-xl md:text-[32px] font-semibold text-[#F3F5FF] mb-3 md:mb-4 text-center md:text-left">
        How to use AutoSwappr
      </h2>
      <div className="flex gap-x-3 text-center">
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF] flex-1 md:flex-none">
          Step 1
        </div>
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF] flex-1 md:flex-none">
          Step 2
        </div>
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF] flex-1 md:flex-none">
          All set
        </div>
      </div>

      <div
        className="text-[#F3F5FF] mt-[68px] md:grid-rows-1 grid-rows-3"
        style={{
          display: "grid",
          gridTemplateColumns:
            activeStep === 1
              ? "2fr 1fr 1fr"
              : activeStep === 2
                ? "1fr 2fr 1fr"
                : activeStep === 3
                  ? "1fr 1fr 2fr"
                  : "1fr 1fr 1fr", // optional fallback
        }}
      >
        <div className="p-6">
          <img src="/connect-wallet-illus.png" alt="" />
          <div className="mt-[60px] flex gap-x-[14px]">
            <div className="flex-1 rounded-[0_900px_900px_0] border-[#061837] border-[1px] border-l-0 py-[18px] px-4">
              <h3 className="mb-4 text-xl font-semibold">Step 1</h3>
              <p className="text-sm">
                Connect your wallet to Autoswappr.
                <br /> Select the wallet you want to use in Autoswappr.
              </p>
            </div>
            <div className="p-[9px] rounded-full bg-[#0D1016] h-fit">
              <ArrowDownLeft size={20} />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div>
            <img src="/swap-form-illus.svg" alt="" />
          </div>
          <div className="mt-[60px]">
            <h3 className="mb-4 text-xl font-semibold">Step 2</h3>
            <p className="text-sm">
              Fill out a short form. Input the amount you want Autoswappr to...
            </p>
          </div>
        </div>
        <div className="p-6">
          <div>
            <img src="/all-set-illus.svg" alt="" />
          </div>
          <div className="mt-[60px]">
            <h3 className="mb-4 text-xl font-semibold">All set</h3>
            <p className="text-sm">
              And just like that, you’re all set. YOu can kick back rest
              assured...
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-[68px]">
        <button
          type="button"
          className="py-4 bg-[#1D8CF4] rounded-lg w-[230px] flex items-center gap-x-3 justify-center text-white text-base"
        >
          Get Started <ChevronRight />
        </button>
      </div>
    </div>
  );
}
