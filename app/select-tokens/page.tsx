import React from "react";
import SelectTokens from "../components/select-tokens";
import { Metadata } from "next";
import GiveFeedback from "../components/give-feedback";

export const metadata: Metadata = {
  title: "Token Selection",
  description: "Please select a token to swap.",
};

const page = () => {
  return (
    <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-auto md:mt-[6rem] mt-[4.5rem] items-center justify-center flex relative">
      <SelectTokens />
      <GiveFeedback />
    </div>
  );
};

export default page;
