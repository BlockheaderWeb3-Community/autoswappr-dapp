import React from "react";
import Selecttokens from "../components/select-tokens";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Token Selection",
  description: "Please select a token to swap.",
};

const page = () => {
  return (
    <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-auto md:mt-[6rem] mt-[4.5rem] items-center justify-center flex">
      <Selecttokens />
    </div>
  );
};

export default page;
