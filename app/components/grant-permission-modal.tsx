import React from "react";
import GenericModal from "./generic-modal";

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
        className="w-full max-w-[800px] px-4 md:px-[60px] md:py-[70px]  py-12 border bg-[#02060D] border-none text-center rounded-xl relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <GenericModal handleClose={() => {handleClose()}} >
          Give Autoswappr Permission
        </GenericModal>
        <p className="text-base leading-[22px] text-[#DCDFE1] py-[60px] px-[55px] my-6">
          By clicking the &apos;Continue&apos; button, you are giving Autoswappr
          access to spend your tokens as soon as they get into your wallet, so
          they can automatically be swapped to your preferred stable base token.
          Do you wish to continue?
        </p>
        <div className="grid grid-cols-2 gap-x-6 items-center justify-center text-base leading-[22px] text-[#F9F9F9]">
          <button
            className="py-5 bg-[#0D1016] rounded-[8px] border-[1px] border-[#1E2021]"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#0F96E3] py-5 rounded-[8px] border-[1px] border-[#1E2021]"
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
