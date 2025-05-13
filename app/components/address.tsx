"use client";
import { useAccount } from "@starknet-react/core";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { shortenAddress } from "../utils/helper";
import DisconnectModal from "./ui/modals/disconnect-wallet-modal";

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();

  return (
    <div className="flex items-center gap-2 sm:gap-4 text-[#F3F5FF] leading-6 text-sm font-semibold">
      {/* {isModalOpen &&
        createPortal(
          <DisconnectModal handleClose={() => setIsModalOpen(false)} />,
          document.body
        )} */}
      <DisconnectModal
        open={isModalOpen}
        onOpenChange={() => setIsModalOpen((prev) => !prev)}
      />
      <div className="flex bg-[#0D1016] md:bg-opacity-[64%] items-center gap-2 px-[14px] py-3 rounded-lg min-w-[164px] justify-center text-sm">
        <img
          src="/coin-logos/usdt-logo.svg"
          alt="USDT icon"
          className="w-5 h-5"
        />
        <span>USDT: $114.00</span>
      </div>

      <div className="flex bg-[#0D1016] md:bg-opacity-[64%] items-center gap-2 px-[14px] py-3 rounded-lg text-sm">
        <img src="/user.svg" alt="" className="w-5 h-5" />
        <span>{address ? shortenAddress(address) : ""}</span>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
