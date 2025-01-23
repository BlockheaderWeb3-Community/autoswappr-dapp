import React from "react";
import Swapper from "../components/swapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEX",
  description: "Please select a token to swap.",
};

export default function page() {
  return (
    <div className="w-full h-full relative flex flex-col items-center text-center pt-[50px] md:pt-[80px]">
      <h1 className="text-center text-[16px] md:text-[22px] font-semibold text-white mb-2">
        Autoswappr DEX
      </h1>
      <p className="text-center px-8 text-[14px] md:text-[16px] text-gray-200">
        Please select a token to swap from to and how much you want to swap.
      </p>
      <div className="pt-12" />
      <Swapper />
    </div>
  );
}
