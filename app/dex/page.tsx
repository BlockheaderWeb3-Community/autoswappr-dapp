
import React from "react";
import Swapper from "../components/swapper";
import DexHistory from "../components/dex-history";
import { Metadata } from "next";
import GiveFeedback from "../components/give-feedback";
import PageHeading from "../components/page-heading";

export const metadata: Metadata = {
  title: "DEX",
  description: "Please select a token to swap.",
};


export default function page() {
  return (
    <div className="flex flex-col text-center md:px-[8px] sm:h-[100vh] h-[150vh] min-h-[95vh] pt-[100px] md:pt-[150px] overflow-y-scroll scrollbar-hide">
    <div className="flex flex-col text-center px-[100px] sm:px-[120px] md:px-[187px] sm:h-[100vh] h-[150vh] min-h-[95vh] pt-[100px] md:pt-[150px] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] pointer-events-none"
      >
        <source src="/app-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <PageHeading
        title="Autoswappr DEX"
        subTitle="Please select a token to swap from to and how much you want to swap."
        isCenter={true}
      />
      <Swapper />
      <DexHistory length={10} />
      <GiveFeedback />
    </div>
  );
}
