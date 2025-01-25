import { X } from "lucide-react";
import React from "react";

function GenericModal({
  children,
  className,
  handleClose,
  removeCloseButton,
}: {
  children: React.ReactNode;
  className?: string;
  handleClose: () => void;
  removeCloseButton?: boolean;
}) {
  return (
    <div
      className={`inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[200] ${className}`}
      onClick={handleClose}
    >
      <div className="w-full h-fit relative flex justify-between items-center">
        <p></p>
        <h3 className="text-2xl leading-[32px] text-center font-semibold text-[#f9f9f9]">
          {children}
        </h3>
        
        {!removeCloseButton && (
          <button
            className="text-gray-400 hover:text-white transition-colors top-8 right-8"
            onClick={handleClose}
          >
            <X className="w-6 h-6 text-[#F3F5FF]" />
          </button>
        )}
      </div>
        
    </div>
  );
}

export default GenericModal;
