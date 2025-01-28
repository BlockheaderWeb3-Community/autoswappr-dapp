"use client";
import React, { useState } from "react";
import Image from "next/image";
import usdt from "../../public/coin-logos/usdt-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import checked from "../../public/checked.svg";
import unchecked from "../../public/unchecked.svg";

interface SelectBaseTokenProps {
  onSelect?: (token: "USDT" | "USDC") => void;
}

export function SelectBaseToken({ onSelect }: SelectBaseTokenProps) {
  const [active, setActive] = useState<"USDT" | "USDC">("USDT");

  const tokens = [
    { id: "USDT", name: "Tether", image: usdt },
    { id: "USDC", name: "USD Coin", image: usdc },
  ];

  const handleTokenSelect = () => {
    onSelect?.(active);
  };

  return (
    <div className="flex relative justify-center items-center h-screen px-4 bg-main-bg bg-cover bg-center bg-no-repeat">
      <div className="relative flex flex-col items-center w-full max-w-[50rem] p-6 md:p-12 rounded-3xl border border-[#170F2E] text-center bg-opacity-90">
        <h1 className="text-base sm:text-2xl font-semibold text-[#F9F9F9] mb-4">
        Select a base token to auto-swap to
        </h1>
        <p className="text-sm sm:text-base text-[#A199B8] mt-3 mb-7 max-w-[570px]">
          You can change the base token in the settings and toggle on/off
          auto-swapper for any token you&apos;ve selected.
        </p>

        <div className="flex justify-center gap-10 sm:gap-12 w-full mb-8">
          {tokens.map(({ id, name, image }) => (
            <div
              key={id}
              onClick={() => setActive(id as "USDT" | "USDC")}
              className={`flex flex-col items-center cursor-pointer group ${
                active === id ? "scale-105" : ""
              } transition-transform duration-200`}
            >
              <Image
                src={image}
                alt={id}
                className="w-12 h-12 md:w-[140px] md:h-[140px] mb-3"
              />
              <p className="text-base sm:text-xl font-medium text-white mb-1">
                {name}
              </p>
              <p className="text-sm text-[#A199B8] mb-3">{id}</p>
              <Image
                src={active === id ? checked : unchecked}
                alt={`${id} selection`}
                className="w-4 h-4 md:w-6 md:h-6"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleTokenSelect}
          className="w-full py-3 sm:py-5 bg-[#100827] rounded-full text-white font-medium hover:bg-[#1a0f35] transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
