"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../dialog";
import { useState } from "react";
import { useConnect, type Connector } from "@starknet-react/core";
import Image from "next/image";
import { walletDetails } from "@/app/utils/data";

interface ConnectWalletModalProps {
  open: boolean;
  onOpenChange: () => void;
}

export function ConnectWallet({ open, onOpenChange }: ConnectWalletModalProps) {
  const { connect, connectors } = useConnect();
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(
    null
  );

  const handleConnect = () => {
    if (!selectedConnector) return;

    connect({ connector: selectedConnector });
    onOpenChange();
  };

  const getWalletDetails = (connector: Connector) =>
    walletDetails[connector.id as keyof typeof walletDetails] || {
      name: connector.id,
      subtext: "WEBSITE",
      icon: "/assets/wallets/argent.svg",
    };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setSelectedConnector(null);
        onOpenChange();
      }}
    >
      <DialogContent className="bg-[#02060D] text-center border border-[#242E38] rounded-lg p-7">
        <DialogHeader className="">
          <DialogTitle className="text-xl text-center font-semibold text-[#F3F5FF]">
            Connect Wallet
          </DialogTitle>
          <DialogDescription className="text-[#BABFC3] mt-2 mb-6 text-sm text-center max-w-[75%] mx-auto">
            Choose a wallet you want to connect to Auto-swapper
          </DialogDescription>
        </DialogHeader>
        <section className="gap-y-4 flex flex-col items-center">
          {connectors.map((connector) => {
            const details = getWalletDetails(connector);
            const isSelected = selectedConnector?.id === connector.id;

            return (
              <button
                type="button"
                key={connector.id}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isSelected) {
                    setSelectedConnector(null);
                  } else {
                    setSelectedConnector(connector);
                  }
                }}
                className={`w-full sm:w-[264px] flex items-center py-2 px-12 rounded-[8px] border gap-4
                ${isSelected ? "border-[#1D8CF4]" : "border-[#1E2021]"}
                hover:border-[#1D8CF4] transition-colors`}
              >
                <Image
                  src={details.icon}
                  alt={details.name}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-[#F3F5FF] text-base leading-[22px]">
                    {details.name}
                  </span>
                  <span className="text-xs font-semibold text-[#4C5053]">
                    {details.subtext}
                  </span>
                </div>
              </button>
            );
          })}

          <button
            type="button"
            className={`w-[264px] py-3 rounded-lg transition-colors border
            ${selectedConnector ? "bg-[#1D8CF4] border-[#1D8CF4]" : "bg-[#0D1016] border-[#1E2021]"}
            text-[#F3F5FF] text-sm font-semibold disabled:cursor-not-allowed`}
            onClick={handleConnect}
            disabled={!selectedConnector}
          >
            Continue
          </button>
        </section>
      </DialogContent>
    </Dialog>
  );
}
