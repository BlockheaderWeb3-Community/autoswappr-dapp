import { X } from "lucide-react";
import React from "react";

function GenericModal({
  children,
  className,
  handleClose,
}: {
  children: React.ReactNode;
  className?: string;
  handleClose: () => void;
}) {
  return (
    <div
      className={`absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[200] ${className}`}
      onClick={handleClose}
    >
      <div className="w-fit h-fit relative">
        <button
          className="absolute top-6 right-6 z-[205] text-[#f9f9f9]"
          onClick={handleClose}
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}

export default GenericModal;
