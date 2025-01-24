"use client";
import React, { useState } from "react";

function ToggleButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`relative flex  cursor-pointer items-center rounded-[33px] p-1 transition-colors duration-300 h-12 w-24 ${enabled ? "bg-[#0F96E3]" : " bg-[#100827]"}`}
    >
      <span className={`absolute left-6 text-[10px] font-medium md:text-base ${enabled ? "text-white" : "hidden"}`}>
        ON
      </span>
      <span className={`absolute right-5 text-[10px] font-medium md:text-base ${!enabled ? "text-white" : "hidden"}`}>
        OFF
      </span>
      <div
        className={` transform rounded-full bg-white shadow-md transition-transform duration-300 h-8 w-8 ${enabled ? "translate-x-14" : "translate-x-0"}`}
      />
    </div>
  );
}

export default ToggleButton;
