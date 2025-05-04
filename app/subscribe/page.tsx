import React from "react";
import SubscribeForm from "../components/subscribe-form";
import { Metadata } from "next";
import GiveFeedback from "../components/give-feedback";

export const metadata: Metadata = {
  title: "Token Selection",
  description: "Please select a token to swap.",
};

const page = () => {
  return (
    <div className="sm:h-auto md:pt-[10rem] pt-[4.5rem] items-center justify-center flex relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/app-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <SubscribeForm />
      <GiveFeedback />
    </div>
  );
};

export default page;
