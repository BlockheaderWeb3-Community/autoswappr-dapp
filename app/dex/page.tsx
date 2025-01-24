import React from "react";
import Swapper from "../components/swapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEX",
  description: "Please select a token to swap.",
};

export default function page() {
  return (
    <div className="w-full relative flex flex-col items-center text-center sm:h-[120vh] md:pt-[250px] pt-[150px] h-[150vh]">
      <h1 className="text-center text-[16px] md:text-[22px] font-semibold text-white mb-2">
        Autoswappr DEX
      </h1>
      <p className="text-center px-8 text-[14px] md:text-[16px] text-gray-200">
        Please select a token to swap from to and how much you want to swap.
      </p>
      <div className="pt-12" />
      <Swapper />
    </div>
    // <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-[120vh] md:pt-[250px] pt-[150px] h-[150vh] flex justify-center">
    //   <div className="flex flex-col items-center text-center   p-12 border border-[#170F2E] w-fit h-fit rounded-3xl">
    //     <h1 className="max-w-[700px] text-[20px] md:text-2xl font-semibold text-[#F9F9F9] mb-3">
    //       Autoswappr DEX
    //     </h1>
    //     <p className="text-center text-base leading-[22px] text-[#A199B8]">
    //       Please select a token to swap from to and how much you want to swap.
    //     </p>
    //     <div className="mt-[43px]">
    //       <Swapper />
    //     </div>
    //   </div>
    // </div>
  );
}
