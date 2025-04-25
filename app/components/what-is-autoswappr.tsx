import React from "react";

export default function WhatIsAutoSwapper() {
  return (
    <div className="px-[74px] py-10 text-center">
      <h2 className="text-[32px] font-semibold text-[#F3F5FF] mb-6 ">
        WTH is autoswappr?
      </h2>
      <div className="flex gap-x-5 justify-center items-stretch text-base leading-6 text-[#DCDFE1]">
        <div className="max-w-[380px] flex items-center">
          <p>
            Autoswappr automatically converts any STRK tokens you receive into
            USDT — a stable token that holds its value. This means you won’t
            have to worry about missing the right time to convert, especially if
            you're not notified right away when STRK hits your wallet.
          </p>
        </div>
        <div className="w-[6px] rounded-lg bg-[#1E2021]"></div>
        <div className="max-w-[380px] flex items-center">
          <p>
            It runs in the background, so you don’t have to do anything
            manually. Your transactions are secured with advanced technology
            that protects your funds and personal data from fraud or hacking.
          </p>
        </div>
      </div>
    </div>
  );
}
