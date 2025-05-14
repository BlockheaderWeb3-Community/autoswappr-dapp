import React from "react";

export default function WhatIsAutoSwapper() {
  return (
    <div className="px-6 md:px-[74px] py-10 text-center">
      <h2 className="text-xl md:text-[32px] font-semibold text-[#F3F5FF] mb-3 md:mb-6 ">
        WTH is autoswappr?
      </h2>
      <div className="flex md:flex-row flex-col gap-y-5 gap-x-5 justify-center items-stretch text-xs md:text-base leading-5 md:leading-6 text-[#DCDFE1]">
        <div className="w-full md:max-w-[380px] flex items-center">
          <p>
            Autoswappr automatically converts any STRK tokens you receive into
            USDT — a stable token that holds its value. This means you
            won&apos;t have to worry about missing the right time to convert,
            especially if you&apos;re not notified right away when STRK hits
            your wallet.
          </p>
        </div>
        <div className="w-full md:w-[2px] rounded-lg h-[3px] bg-[#1E2021]" />
        <div className="w-full md:max-w-[380px] flex items-center">
          <p>
            It runs in the background, so you don&apos;t have to do anything
            manually. Your transactions are secured with advanced technology
            that protects your funds and personal data from fraud or hacking.
          </p>
        </div>
      </div>
    </div>
  );
}
