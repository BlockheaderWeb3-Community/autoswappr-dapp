import React from "react";
import SubscribeForm from "../components/subscribe-form";
import type { Metadata } from "next";
// import GiveFeedback from "../components/give-feedback";

export const metadata: Metadata = {
  title: "Token Selection",
  description: "Please select a token to swap.",
};

const page = () => {
  return (
    <div className="md:pt-[120px] pt-[4.5rem] items-center justify-center flex relative sm:min-h-[100vh]">
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
      {/* <GiveFeedback /> */}
    </div>
  );
};

export default page;
