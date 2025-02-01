import React from "react";
import Swapper from "../components/swapper";
import { Metadata } from "next";
import GiveFeedback from "../components/give-feedback";
import PageHeading from "../components/page-heading";

export const metadata: Metadata = {
  title: "DEX",
  description: "Please select a token to swap.",
};

export default function page() {
  return (
    <div className="flex flex-col text-center px-[100px] sm:px-[120px] md:px-[187px] sm:h-[100vh] h-[150vh] min-h-[95vh] pt-[100px] md:pt-[150px]">
      <PageHeading
        title="Autoswappr DEX"
        subTitle="Please select a token to swap from to and how much you want to swap."
        isCenter={true}
      />
      <Swapper />
      <GiveFeedback />
    </div>
  );
}
