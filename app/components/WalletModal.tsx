"use client";

import { useState } from "react";
import { useConnect, Connector } from "@starknet-react/core";
import { X } from "lucide-react";
import Image from "next/image";

const walletDetails = {
  argentX: {
    name: "Argent",
    subtext: "WEBSITE",
    icon: "/assets/wallets/argent.svg",
  },
  webwallet: {
    name: "Argent",
    subtext: "MOBILE",
    icon: "/assets/wallets/argent.svg",
  },
  braavos: {
    name: "Braavos",
    subtext: "WEBSITE",
    icon: "/assets/wallets/braavos.svg",
  },
};

interface WalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function WalletModal({ isOpen, setIsOpen }: WalletModalProps) {
  const { connect, connectors } = useConnect();
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(
    null
  );

  const handleConnect = async () => {
    if (selectedConnector) {
      connect({ connector: selectedConnector });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="w-full md:w-[800px] bg-[#08001F] border border-[#170F2E] rounded-3xl py-12 px-6 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white transition-colors absolute top-8 right-8"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h3 className="text-2xl text-center font-semibold text-[#f9f9f9]">
          Connect Wallet
        </h3>

        <p className="text-[#D7D7D7] mt-3 mb-10 text-base text-center">
          Choose a wallet you want to connect to Auto-swapper
        </p>

        {/* Wallet Options */}
        <div className="space-y-4 flex flex-col items-center">
          {connectors.map((connector) => {
            const details = walletDetails[
              connector.id as keyof typeof walletDetails
            ] || {
              name: connector.id,
              subtext: "WEBSITE",
              icon: "/assets/wallets/argent.svg",
            };

            const isSelected = selectedConnector?.id === connector.id;

            return (
              <button
                key={connector.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedConnector(connector);
                }}
                className={`w-full sm:w-[416px] flex items-center p-5 pl-[124px] rounded-full border gap-2
                    ${isSelected ? "border-blue-500" : "border-[#2C3356]"}
                    hover:border-blue-500 transition-colors`}
              >
                <Image
                  src={details.icon}
                  alt={details.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[#F9F9F9] text-base leading-[22px] font-medium">
                    {details.name}
                  </span>
                  <span className="text-sm leading-5 font-semibold text-[#433B5A]">
                    {details.subtext}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        <button
          className={`w-full sm:w-[416px] mt-[81px] block py-5 rounded-full
              ${selectedConnector ? "bg-blue-600 hover:bg-blue-700" : "bg-[#100827]"}
              text-[#F9F9F9] text-base font-semibold mx-auto transition-colors`}
          onClick={handleConnect}
          disabled={!selectedConnector}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
