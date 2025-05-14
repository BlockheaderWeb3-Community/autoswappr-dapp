"use client";
import { useAccount } from "@starknet-react/core";
import Address from "./address";

interface WalletBarProps {
  toggleModal: () => void;
}

export default function WalletBar({ toggleModal }: WalletBarProps) {
  const { address } = useAccount();

  return (
    <div className="flex items-center justify-center">
      {address ? (
        <Address />
      ) : (
        <button
          onClick={toggleModal}
          className="p-3 md:py-3 md:px-7 bg-[#0D10163D] border border-[#135DA3] rounded-lg text-xs md:text-sm md:leading-6 text-[#F3F5FF] font-semibold uppercase"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
