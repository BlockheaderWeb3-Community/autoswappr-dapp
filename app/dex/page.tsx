import React from "react";
import Swapper from "../components/swapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEX",
  description: "Please select a token to swap.",
};

export default function page() {
  return (
    <div className="h-[110vh] md:h-[100vh]">
      <div className="flex flex-col items-center text-center md:pt-[150px] pt-[150px]  px-5 md:px-0">
        <h1 className="max-w-[700px] text-[20px] md:text-[28px] font-semibold text-[#F7F7F7] mb-2">
          Autoswappr DEX
        </h1>
        <p className="text-center text-[14px] text-[#A199B8]">
          Please select a token to swap from to and how much you want to swap.
        </p>
        <div className="pt-10" />
        <Swapper />
      </div>
    </div>
  );
}
