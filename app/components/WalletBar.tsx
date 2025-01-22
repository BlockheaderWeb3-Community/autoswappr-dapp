"use client";

// WalletBar.tsx
import { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { WalletModal } from "./WalletModal";
import Address from "./address";

const WalletBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();

  return (
    <>
      {!address ? (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className=" py-[16px] px-[24px] text-[14px] w-[204px] rounded-[8px] border-[1px] border-[#323537] leading-5 bg-[#02060D1F] hover:bg-[#02060D1F] text-white font-semibold transition-colors"
          >
            Connect Wallet
          </button>
          <WalletModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
      ) : (
        <Address />
      )}
    </>
  );
};

export default WalletBar;
