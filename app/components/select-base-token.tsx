"use client";
import React, { useState } from "react";
import Image from "next/image";
import cancel from "../../public/cancel.svg";
import usdt from "../../public/usdt.svg";
import usdc from "../../public/usdc.svg";
import checked from "../../public/checked.svg";
import unchecked from "../../public/unchecked.svg";

export function SelectBaseToken() {
  const [active, setActive] = useState<"USDT" | "USDC">("USDT");

  return (
    <div className="flex relative justify-center items-center pt-[10] h-[110vh] w-full px-4">
      <div className="w-full h-[138px] bg-main-bg bg-cover absolute top-0"></div>
      <div className="flex relative justify-center items-center rounded-3xl border border-[#170F2E] text-center w-full max-w-[50rem] flex-col p-6 md:p-8 mx-4">
        <button className="absolute right-[20px] top-[20px] hidden md:block">
          <Image
            className="cursor-pointer w-6 h-6"
            src={cancel}
            alt="cancel image"
            width={24}
            height={24}
          />
        </button>
        <h1 className="text-base sm:text-[24px] flex-wrap font-medium text-white mb-5">
          Select a base token to auto-swap to
        </h1>

        <p className="text-sm sm:text-base text-[#A199B8] mb-8 max-w-md text-center">
          You can change the base token in the settings and you can toggle
          on/off auto-swapper for any token you&apos;ve selected.
        </p>

        <div className="flex flex-row justify-center items-center gap-10 sm:gap-12 md:gap-20 w-full mt-4 mb-8">
          <div
            onClick={() => setActive("USDT")}
            className="flex flex-col items-center cursor-pointer group"
          >
            <Image
              src={usdt}
              alt="USDT"
              className="md:w-[100px] md:h-[100px] w-[50px] h-[50px] mb-3"
            />
            <p className="text-base sm:text-xl font-medium text-white mb-1">
              Tether
            </p>
            <p className="text-sm text-[#A199B8] mb-3">USDT</p>
            <div className="transition-transform duration-200 group-hover:scale-110">
              <Image
                src={active === "USDT" ? checked : unchecked}
                alt="selection indicator"
                className="md:w-6 md:h-6 w-4 h-4"
              />
            </div>
          </div>

          <div
            onClick={() => setActive("USDC")}
            className="flex flex-col items-center cursor-pointer group"
          >
            <Image
              src={usdc}
              alt="USDC"
              className="md:w-[100px] md:h-[100px] w-[50px] h-[50px] mb-3"
            />
            <p className="text-base sm:text-xl font-medium text-white mb-1">
              USD Coin
            </p>
            <p className="text-sm text-[#A199B8] mb-3">USDC</p>
            <div className="transition-transform duration-200 group-hover:scale-110">
              <Image
                src={active === "USDC" ? checked : unchecked}
                alt="selection indicator"
                className="md:w-6 md:h-6 w-4 h-4"
              />
            </div>
          </div>
        </div>

        <button className="w-full py-3 sm:py-5 my-5 bg-[#100827] rounded-full text-white font-medium hover:bg-[#1a0f35] transition-colors duration-200">
          Next
        </button>
      </div>
      <div className="w-full h-[138px] bg-main-bg bg-cover absolute bottom-0 transform rotate-180"></div>
    </div>
  );
}
