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
    <GenericModal handleClose={handleClose} containerClass="md:w-[800px]">
      <h2 className="text-2xl text-center font-semibold text-[#F3F5FF]">
        Give Autoswappr Permission
      </h2>
      <p className="text-[#BABFC3] my-6 text-base text-center py-[60px] px-[55px]">
        By clicking the &apos;Continue&apos; button, you are giving Autoswappr
        access to spend your tokens as soon as they get into your wallet, so
        they can automatically be swapped to your preferred stable base token.
        Do you wish to continue?
      </p>
      <div className="items-center grid grid-cols-[1fr_1fr] gap-x-6 text-[#F3F5FF] text-sm lg:text-base leading-[22px]">
        <button
          className="py-3 lg:py-4 rounded-lg border border-[#1E2021] bg-[#0D1016]"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="py-3 lg:py-4 rounded-lg bg-[#1D8CF4]"
          onClick={handleSubmit}
        >
          Yes, Continue
        </button>
      </div>
    </GenericModal>
  );
}

export default GrantPermissionModal;
