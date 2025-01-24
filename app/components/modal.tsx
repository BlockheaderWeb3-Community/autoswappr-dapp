import { useEffect } from "react";

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
    <div
      className="absolute inset-0 flex justify-center bg-black bg-opacity-60 backdrop-blur-sm z-[200]"
      onClick={handleClose}
    >
      {children}
    </div>
  );
}
