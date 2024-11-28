import React, { useEffect } from "react";
import ReactPortal from "./react-portal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export function Modal({ children, isOpen, handleClose }: ModalProps) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return (): void => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ReactPortal containerId="react-portal-modal-container">
    <div className="w-full">
      <div
        className={`fixed w-full top-0 left-0 h-screen z-40 bg-neutral-800 opacity-50`}
        onClick={handleClose}
      />
  
      <div
        onClick={handleClose}
        className={`fixed w-full inset-0 flex items-center justify-center z-50
          pt-20 md:p-0 overflow-x-hidden transition-all duration-300 ease-in-out`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="border  border-[#170F2E] rounded-3xl bg-[#08001F] sm:max-w-sm md:max-w-lg w-full"
        >
          {children}
        </div>
      </div>
    </div>
  </ReactPortal>
  
  );
}
