"use client";

import { useAccount } from "@starknet-react/core";
import { MoreVertical } from "lucide-react";
import DisconnectModal from "./disconnect-modal";
import { useState } from "react";
import { createPortal } from "react-dom";

const Address: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[#F3F5FF] leading-6 text-sm font-semibold">
      {isModalOpen &&
        createPortal(
          <DisconnectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />,
          document.body
        )}
      <div className="flex bg-[#0D1016A3] items-center gap-2 px-[14px] py-3 rounded-lg">
        <img
          src="/coin-logos/usdt-logo.svg"
          alt="USDT icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <span>USDT: $114,000</span>
      </div>

      <div className="flex bg-[#0D1016A3] items-center gap-2 px-[14px] py-3 rounded-lg">
        <img src="/user.svg" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
        <span>{address ? shortenAddress(address) : ""}</span>
        <button onClick={() => setIsModalOpen(true)} className="p-1">
          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Address;
