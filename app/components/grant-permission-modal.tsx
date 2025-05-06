import React from "react";
import GenericModal from "./generic-modal";

interface GrantPermissionModalProps {
  handleClose: () => void;
  handleSubmit: () => void;
}

export default function GrantPermissionModal({
  handleClose,
  handleSubmit,
}: GrantPermissionModalProps) {
  return (
    <GenericModal handleClose={handleClose} containerClass="md:w-[700px]">
      <h2 className="text-xl text-center font-semibold text-[#F3F5FF]">
        Give Autoswappr Permission
      </h2>
      <p className="text-[#BABFC3] text-base text-center py-[60px] px-[55px]">
        By clicking the &apos;Continue&apos; button, you are giving Autoswappr
        access to spend your tokens as soon as they get into your wallet, so
        they can automatically be swapped to your preferred stable base token.
        Do you wish to continue?
      </p>
      <div className="items-center grid grid-cols-[1fr_1fr] gap-x-6 text-[#F3F5FF] text-sm">
        <button
          className="py-3 rounded-lg border border-[#1E2021] bg-[#0D1016]"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button className="py-3 rounded-lg bg-[#1D8CF4]" onClick={handleSubmit}>
          Yes, Continue
        </button>
      </div>
    </GenericModal>
  );
}
