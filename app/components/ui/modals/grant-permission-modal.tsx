import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";

interface GrantPermissionProps {
  open: boolean;
  onOpenChange: () => void;
  handleSubmit: () => void;
}

export default function GrantPermission({
  open,
  onOpenChange,
  handleSubmit,
}: GrantPermissionProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-[#02060D] text-center border border-[#242E38] rounded-lg p-7"
        animation="sideAnimate"
        sizes="large"
      >
        <DialogHeader className="">
          <DialogTitle className="text-base md:text-lg text-center font-semibold text-[#F3F5FF]">
            Give Autoswappr Permission
          </DialogTitle>
        </DialogHeader>
        <section>
          <p className="text-[#BABFC3] text-xs leading-5 md:text-sm  md:leading-6 text-center py-4 md:py-9">
            By clicking the &apos;Continue&apos; button, you are giving
            Autoswappr access to spend your tokens as soon as they get into your
            wallet, so they can automatically be swapped to your preferred
            stable base token. Do you wish to continue?
          </p>
          <div className="items-center grid grid-cols-[1fr_1fr] gap-x-6 text-[#F3F5FF] text-xs md:text-sm">
            <button
              type="button"
              className="py-3 rounded-lg border border-[#1E2021] bg-[#0D1016]"
              onClick={onOpenChange}
            >
              Cancel
            </button>
            <button
              type="button"
              className="py-3 rounded-lg bg-[#1D8CF4]"
              onClick={handleSubmit}
            >
              Yes, Continue
            </button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
