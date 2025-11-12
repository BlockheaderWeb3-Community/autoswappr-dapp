"use client";
import { useState, useEffect } from "react";
import { useAccount } from "@starknet-react/core";
import { shortenAddress } from "../utils/helper";
import DisconnectModal from "./ui/modals/disconnect-wallet-modal";
import { getUserStrkBalance } from "@/services/getUserStrkBalance";

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, account } = useAccount();
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const fetchBalance = async () => {
      if (!address || !account) {
        setBalance(0);
        return;
      }

      const balanceValue = await getUserStrkBalance(address, account);
      setBalance(Number(balanceValue.toFixed(2)));
    };
    fetchBalance();
  }, [address, account]);

  return (
    <div className="flex items-center gap-2 sm:gap-4 text-[#F3F5FF] leading-6 text-sm font-semibold">
      <DisconnectModal
        open={isModalOpen}
        onOpenChange={() => setIsModalOpen((prev) => !prev)}
      />
      <div className="flex bg-[#0D1016] md:bg-opacity-[64%] items-center gap-2 px-[14px] py-4 rounded-lg min-w-[164px] justify-center text-sm">
        <img
          src="/coin-logos/strk-logo.svg"
          alt="USDT icon"
          className="w-5 h-5"
        />
        <span>STRK: {balance}</span>
      </div>

      <div className="flex bg-[#0D1016] md:bg-opacity-[64%] items-center gap-2 px-[14px] py-4 rounded-lg text-sm cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <img src="/user.svg" alt="" className="w-5 h-5" />
        <span>{address ? shortenAddress(address) : ""}</span>
      </div>
    </div>
  );
}
