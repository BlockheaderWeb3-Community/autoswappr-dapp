"use client";

import { X } from "lucide-react";
import { useDisconnect } from "@starknet-react/core";

interface DisconnectWalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function DisconnectModal({
  setIsOpen,
}: DisconnectWalletModalProps) {
  const { disconnect } = useDisconnect();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDisconnect = () => {
    disconnect();
    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center"
      onClick={handleClose}
    >
      <div className="w-full md:w-[800px] bg-[#000103] text-center border border-[#170F2E] rounded-3xl py-12 px-6 relative">
        <div className="flex justify-between items-center">
          <p></p>
          <h3 className="text-[24px] lg:text-2xl font-semibold text-[#F3F5FF]">
            Disconnect wallet
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-[30px] px-[16px] lg:py-[81px] lg:px-[55px] my-6">
          <p className="text-[#DCDFE1] text-sm lg:text-lg  leading-[21px]">
            You are disconnecting your wallet from Autoswappr. Are you sure you
            want to continue with this process?
          </p>
        </div>

        {/* Modal Actions */}
        <div className="items-center grid grid-cols-[1fr_1fr] gap-x-4">
          <button
            className="py-3 text-sm lg:text-lg lg:py-4 rounded-[8px] hover:bg-blue-700 border-2 border-[#1E2021] text-white transition-colors"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="py-3 text-sm lg:text-lg lg:py-4 rounded-[8px] bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            onClick={handleDisconnect}
          >
            Yes, Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}
