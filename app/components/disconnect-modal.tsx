"use client";
import { useDisconnect } from "@starknet-react/core";
import GenericModal from "./generic-modal";

interface DisconnectWalletModalProps {
  handleClose: () => void;
}

export default function DisconnectModal({
  handleClose,
}: DisconnectWalletModalProps) {
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    handleClose();
  };

  return (
    <GenericModal handleClose={handleClose}>
      <h2 className="text-2xl text-center font-semibold text-[#F3F5FF]">
        Disconnect Wallet
      </h2>
      <div className="py-[30px] lg:py-[60px]">
        <p className="text-[#DCDFE1] text-sm lg:text-base  lg:leading-[22px]">
          You are disconnecting your wallet from Autoswappr. Are you sure you
          want to continue with this process?
        </p>
      </div>
      <div className="items-center grid grid-cols-[1fr_1fr] gap-x-2 text-[#F3F5FF] text-sm lg:text-base leading-[22px]">
        <button
          className="py-3 lg:py-4 rounded-lg border border-[#1E2021] bg-[#0D1016]"
          onClick={handleClose}
        >
          Cancel
        </button>
        <button
          className="py-3 lg:py-4 rounded-lg bg-[#1D8CF4]"
          onClick={handleDisconnect}
        >
          Yes, Disconnect
        </button>
      </div>
    </GenericModal>
  );
}
