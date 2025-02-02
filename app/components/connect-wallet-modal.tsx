"use client";

import { useState, useCallback } from "react";
import { useConnect, Connector } from "@starknet-react/core";
import Image from "next/image";
import GenericModal from "./generic-modal";

interface ConnectWalletModalProps {
  handleClose: () => void;
}

const walletDetails = {
  argentX: { name: "Argent", subtext: "WEBSITE", icon: "/argent.svg" },
  webwallet: { name: "Argent", subtext: "MOBILE", icon: "/argent.svg" },
  braavos: { name: "Braavos", subtext: "WEBSITE", icon: "/braavos.svg" },
};

export default function ConnectWalletModal({
  handleClose,
}: ConnectWalletModalProps) {
  const { connect, connectors } = useConnect();
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(
    null
  );

  const handleConnect = useCallback(() => {
    if (selectedConnector) {
      connect({ connector: selectedConnector });
      handleClose();
    }
  }, [selectedConnector, connect, handleClose]);

  const getWalletDetails = (connector: Connector) =>
    walletDetails[connector.id as keyof typeof walletDetails] || {
      name: connector.id,
      subtext: "WEBSITE",
      icon: "/assets/wallets/argent.svg",
    };

  return (
    <GenericModal handleClose={handleClose}>
      <h2 className="text-2xl text-center font-semibold text-[#F3F5FF]">
        Connect Wallet
      </h2>
      <p className="text-[#BABFC3] my-6 text-base text-center">
        Choose a wallet you want to connect to Auto-swapper
      </p>

      {/* Wallet Options */}
      <div className="gap-y-4 flex flex-col items-center">
        {connectors.map((connector) => {
          const details = getWalletDetails(connector);
          const isSelected = selectedConnector?.id === connector.id;

          return (
            <button
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
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[#F3F5FF] text-base leading-[22px]">
                  {details.name}
                </span>
                <span className="text-sm font-semibold text-[#4C5053]">
                  {details.subtext}
                </span>
              </div>
            </button>
          );
        })}

        {/* Continue Button */}
        <button
          className={`w-[264px] py-4 rounded-lg transition-colors border
            ${selectedConnector ? "bg-[#1D8CF4] border-[#1D8CF4]" : "bg-[#0D1016] border-[#1E2021]"}
            text-[#F3F5FF] text-base leading-[22px] font-semibold disabled:cursor-not-allowed`}
          onClick={handleConnect}
          disabled={!selectedConnector}
        >
          Continue
        </button>
      </div>
    </GenericModal>
  );
}
