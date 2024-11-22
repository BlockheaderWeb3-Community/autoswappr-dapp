"use client"

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
    <div className="flex justify-center items-center my-2">
      <div className="flex relative justify-center items-center rounded text-center w-[50rem] flex-col bg-[#08001F] p-6">
       
        <div className="flex justify-center text-2xl items-center my-8">
          <h1>Select a base token to auto-swap to</h1>
          <Image
            className="ml-20 cursor-pointer absolute right-6 text-base"
            src={cancel}
            alt="cancel image"
            width={24}
            height={24}
          />
        </div>

        <div>
          <p className="text-base my-6 text-[#A199B8]">
            You can change the base token in the settings and you can toggle on/off auto-swapper for any token you’ve selected.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-20 text-center">

          <div
            onClick={() => setActive("USDT")}
            className="flex justify-center cursor-pointer items-center flex-col"
          >
            <Image
              className="w-[140px]"
              src={usdt}
              alt="usdt image"
              width={140}
              height={140}
            />
            <p className="text-2xl my-2">
              Tether <br />
              <span className="text-sm text-[#A199B8]">USDT</span>
            </p>
            {active === "USDT" ? (
              <Image src={checked} alt="checked icon" width={24} height={24} />
            ) : (
              <Image src={unchecked} alt="unchecked icon" width={24} height={24} />
            )}
          </div>

          <div
            onClick={() => setActive("USDC")}
            className="flex justify-center cursor-pointer items-center flex-col"
          >
            <Image
              className="w-[140px]"
              src={usdc}
              alt="usdc image"
              width={140}
              height={140}
            />
            <p className="text-2xl my-2">
              USD COIN <br />
              <span className="text-sm text-[#A199B8]">USDC</span>
            </p>
            {active === "USDC" ? (
              <Image src={checked} alt="checked icon" width={24} height={24} />
            ) : (
              <Image src={unchecked} alt="unchecked icon" width={24} height={24} />
            )}
          </div>
        </div>

        <button className="w-full py-[19px] my-[30px] bg-[#100827] rounded">
          Next
        </button>
      </div>
    </div>
  );
}
