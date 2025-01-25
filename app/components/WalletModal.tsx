"use client";

import { useState } from "react";
import { useConnect, Connector } from "@starknet-react/core";
import Image from "next/image";
import GenericModal from "./generic-modal";

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
      <div className="w-full md:w-[610px] bg-[#000103] rounded-3xl py-12 px-6 relative">
        <GenericModal handleClose={() => setIsOpen(false)}  > 
          Connect Wallet
        </GenericModal>

        <p className="text-[#D7D7D7] mt-6 mb-10 text-base text-center">
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
                className={`w-[full] sm:w-[264px] h-[57px] flex items-center p-5 justify-center rounded-[8px] border gap-5
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
          className={`w-[264px] sm:w-[264px] mt-[81px] block py-5 rounded-[8px]
              ${selectedConnector ? "bg-blue-600 hover:bg-blue-700" : "bg-[#0D1016]"}
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
