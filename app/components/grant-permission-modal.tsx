import { X } from "lucide-react";
import React from "react";

function GrantPermissionModal({
  handleClose,
  handleSubmit,
}: {
  handleClose: () => void;
  handleSubmit: () => void;
}) {
  return (
    <div
      className="flex flex-col items-center text-[#F9F9F9] justify-center px-4 absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[200]"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-[800px] px-4 md:px-[60px] md:py-[70px]  py-12 border border-[#170F2E] bg-[#08001F]  text-center rounded-xl relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="absolute top-6 right-6" onClick={handleClose}>
          <X className="cursor-pointer" />
        </button>

        <h2 className="font-semibold text-2xl leading-8 text-[#F9F9F9]">
          Give Autoswappr Permission
        </h2>
        <p className="text-base leading-[22px] text-[#A199B8] py-[60px] px-[55px] my-6">
          By clicking the &apos;Continue&apos; button, you are giving Autoswappr
          access to spend your tokens as soon as they get into your wallet, so
          they can automatically be swapped to your preferred stable base token.
          Do you wish to continue?
        </p>
        <div className="grid grid-cols-2 gap-x-6 items-center justify-center text-base leading-[22px] text-[#F9F9F9]">
          <button
            className="py-5 bg-[#100827] rounded-full"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="rounded-full bg-[#0F96E3] py-5"
            onClick={handleSubmit}
          >
            Yes, Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrantPermissionModal;
