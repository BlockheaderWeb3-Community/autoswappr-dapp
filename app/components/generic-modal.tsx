import { X } from "lucide-react";
import React from "react";
import LockBodyScroll from "./lock-body-scroll";

interface GenericModalProps {
  children: React.ReactNode;
  handleClose: () => void;
  containerClass?: string;
}

function GenericModal({
  children,
  handleClose,
  containerClass,
}: GenericModalProps) {
  return (
    <>
      <LockBodyScroll lock={true} />
      <div
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm flex items-center justify-center px-4"
        onClick={handleClose}
      >
        <div
          className={`w-full md:w-[610px] bg-[#000103] text-center border border-[#1E2021] rounded-lg p-12 relative ${containerClass}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cursor-pointer absolute right-7 top-7 z-[51] text-[#F3F5FF]"
            onClick={handleClose}
          >
            <X />
          </button>
          {children}
        </div>
      </div>
    </>
  );
}

export default GenericModal;
