"use client";
import React, { useState } from "react";
import m_Img from "../public/M-logo.svg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import LockBodyScroll from "./components/lock-body-scroll";
import { createPortal } from "react-dom";
import { WalletModal } from "./components/WalletModal";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();
  const router = useRouter();

  return (
    <main>
      <LockBodyScroll lock={isModalOpen} />

      {isModalOpen &&
        createPortal(
          <WalletModal handleClose={() => setIsModalOpen(false)} />,
          document.body
        )}
      {/* Hero Section */}
      <div className="relative flex flex-col pt-[150px] md:pt-0 items-center md:justify-center text-center h-[844px] md:h-[700px] px-6 bg-main-bg bg-cover bg-no-repeat">
        <Image className="md:hidden mb-[77px]" src={m_Img} alt="Token badge" />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-[48px] md:leading-[65px] font-semibold text-[#F9F9F9] max-w-[280px] md:max-w-full">
            Your Tokens, Your Rules
          </h1>
          <p className="mt-2 mb-6 md:mb-8 text-sm md:text-base md:leading-[22px] text-[#A199B8] max-w-[280px] md:max-w-full">
            Set up auto-swaps for multiple tokens and percentages with ease.
          </p>
          <button
            className="flex gap-[5px] items-center justify-center py-3 md:py-5 w-full md:w-[280px] border border-[#0F96E3] rounded-full md:text-base md:leading-[22px] text-[#F9F9F9] text-sm leading-5"
            onClick={() => {
              if (!address) {
                setIsModalOpen(true);
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

      <div className="px-4 md:px-[188px] pt-12 pb-[104px] flex flex-col gap-y-[80px]">
        {/* Select Base Tokens Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 w-full border border-[#382E56] text-center md:text-left p-4 md:px-[24px] md:py-[26px] rounded-[32px]">
          <div className="max-w-[492px]">
            <div className="flex items-center gap-1 text-xl leading-[27px]">
              <img src="/Select.svg" alt="" className="w-6 h-6" />
              Select
            </div>
            <h1 className="text-xl md:text-[28px] leading-[38px] text-[#F9F9F9] my-3">
              Select your preferred base tokens to proceed with Auto-Swapper
            </h1>
            <p className="text-sm md:text-base leading-[22px] text-[#A199B8]">
              Base tokens serve as the foundation for swaps and other
              interactions within the platform
            </p>
          </div>
          <img src="/select-base-token-banner.svg" alt="" />
        </section>

        {/* Token Selection Section */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 text-center md:text-left rounded-3xl border border-[#382E56] md:border-none">
          <div className="max-w-[492px]">
            <div className="flex items-center gap-1 text-xl leading-[27px]">
              <img src="/token.svg" alt="token" className="w-6 h-6" />
              Token
            </div>
            <h1 className="text-xl md:text-[28px] leading-[38px] my-3 text-[#F9F9F9]">
              Select the tokens you wish to convert into base tokens
            </h1>
            <p className="text-sm md:text-base md:leading-[22px] text-[#A199B8]">
              The tokens selected would be swapped automatically based on the
              specified percentage. Ensure your selection aligns with your
              desired outcome.
            </p>
          </div>

          <img src="/select-token-banner.svg" alt="" className="w-[55%]" />
        </section>

        {/* Active Auto-swap Tokens Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-[113px] p-4 text-center md:text-left md:py-[26px] rounded-3xl border-2 border-[#382E56] md:border-none">
          <div className="max-w-[492px]">
            <div className="flex items-center gap-1 text-xl leading-[27px]">
              <img src="/list.svg" alt="list icon" className="w-6 h-6" />
              List
            </div>
            <h1 className="text-xl md:text-[28px] leading-[38px] my-3 text-[#F9F9F9]">
              Explore the list of currently active auto-swap tokens
            </h1>
            <p className="text-sm md:text-base md:leading-[22px] text-[#A199B8]">
              These tokens are automatically exchanged based on predefined
              parameters, ensuring seamless transactions. Review the list to
              identify tokens selected and preferences for a more efficient
              experience.
            </p>
          </div>

          <img src="/token-list-banner.svg" alt="" className="w-[470px]" />
        </section>
      </div>
    </main>
  );
}
