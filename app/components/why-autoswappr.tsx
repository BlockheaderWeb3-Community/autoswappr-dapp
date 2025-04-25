import React from "react";

function WhyAutoSwappr() {
  return (
    <div className="py-[60px] px-[75px]">
      <h2 className="text-[32px] font-semibold text-[#F3F5FF] mb-4">
        Why AutoSwappr?
      </h2>
      <div className="flex gap-x-3">
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF]">
          Security
        </div>
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF]">
          Transparency
        </div>
        <div className="py-2 px-4 border border-[#1E2021] rounded-lg text-sm text-[#F3F5FF]">
          Efficiency
        </div>
      </div>

      <div className="grid grid-cols-[1fr] lg:grid-cols-[1fr_auto_1fr_auto_1fr] mt-[68px] items-end gap-x-[52px]">
        <div className="py-6">
          <img src="/dot-pattern.png" className="mb-[60px]" alt="" />
          <div className="max-w-[360px] py-4">
            <h5 className="mb-4 text-[#F3F5FF] text-xl">Security</h5>
            <p className="text-sm text-[#DCDFE1] h-[60px]">
              Connect your wallet to Autoswappr. Select the wallet you want to
              use in Autoswappr.
            </p>
          </div>
        </div>
        <div className="w-[2px] h-[235px] bg-[#1E2021] rounded-lg lg:flex hidden" />
        <div className="py-6">
          <img src="/dot-pattern.png" className="mb-[60px]" alt="" />
          <div className="max-w-[360px] py-4">
            <h5 className="mb-4 text-[#F3F5FF] text-xl">Transparency</h5>
            <p className="text-sm text-[#DCDFE1] h-[60px]">
              Fill out the short form by inputing the amount of STRK tokens you
              want to automatically swap to USDT
            </p>
          </div>
        </div>
        <div className="w-[2px] h-[235px] bg-[#1E2021] rounded-lg lg:flex hidden" />
        <div className="py-6">
          <img src="/dot-pattern.png" className="mb-[60px]" alt="" />
          <div className="max-w-[360px] py-4">
            <h5 className="mb-4 text-[#F3F5FF] text-xl">Efficiency</h5>
            <p className="text-sm text-[#DCDFE1] h-[60px]">
              Connect your wallet to Autoswappr. Select the wallet you want to
              use in Autoswappr.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAutoSwappr;
