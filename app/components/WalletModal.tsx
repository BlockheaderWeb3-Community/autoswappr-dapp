"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react"; // Added useState
import { useConnect, Connector } from "@starknet-react/core";
import { X } from "lucide-react";
import Image from "next/image";

interface WalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const walletIcons = {
  argentX: "/assets/wallets/argent.svg",
  webwallet: "/assets/wallets/argent.svg",
  braavos: "/assets/wallets/braavos.svg",
};

export function WalletModal({ isOpen, setIsOpen }: WalletModalProps) {
  const { connect, connectors } = useConnect();
  // Update state type to use Connector
  const [selectedConnector, setSelectedConnector] = useState<Connector | null>(null);

  const getWalletDetails = (connector: Connector) => {
    if (connector.id === "webwallet") {
      return {
        name: "Argent",
        subtext: "MOBILE",
        icon: walletIcons.webwallet,
      };
    }

    switch (connector.id) {
      case "argentX":
        return {
          name: "Argent",
          subtext: "WEBSITE",
          icon: walletIcons.argentX,
        };
      case "braavos":
        return {
          name: "Braavos",
          subtext: "WEBSITE",
          icon: walletIcons.braavos,
        };
      default:
        return {
          name: connector.id,
          subtext: "WEBSITE",
          icon: walletIcons.argentX,
        };
    }
  };

  // Handle the final connection when Continue is clicked
  const handleContinue = () => {
    if (selectedConnector) {
      connect({ connector: selectedConnector });
      setIsOpen(false);
      setSelectedConnector(null); // Reset selection after connecting
    }
  };

  // Handle closing the modal
  const handleClose = () => {
    setIsOpen(false);
    setSelectedConnector(null); // Reset selection when closing
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full text-center max-w-md md:max-w-[800px] transform rounded-3xl bg-[#08001F] border border-[#170F2E] p-8 shadow-xl transition-all">
                <div className="flex relative justify-center mt-6 text-center items-center mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium text-white"
                  >
                    Connect wallet
                  </Dialog.Title>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white absolute right-0 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-400 my-8">
                  Choose a wallet you want to connect to Auto-swapper
                </p>

                <div className="space-y-8 flex justify-center items-center flex-col mb-8">
                  {connectors.map((connector) => {
                    const walletDetails = getWalletDetails(connector);
                    const isSelected = selectedConnector?.id === connector.id;

                    return (
                      <button
                        key={connector.id}
                        onClick={() => setSelectedConnector(connector)}
                        className={`w-full sm:w-[416px] flex items-center justify-between p-4 rounded-full
                          border ${isSelected ? "border-blue-500" : "border-[#2C3356]"} 
                          hover:border-blue-500 transition-colors`}
                      >
                        <div className="flex justify-center mx-auto items-center gap-2">
                          <div className="relative w-8 h-8">
                            <Image
                              src={walletDetails.icon}
                              alt={walletDetails.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="text-white font-medium">
                              {walletDetails.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {walletDetails.subtext}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  className={`w-full sm:w-[416px] mb-8 mt-10 py-4 rounded-full 
                    ${
                      selectedConnector
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-[#100827] hover:bg-[#08001F]"
                    } 
                    text-white transition-colors`}
                  onClick={handleContinue}
                  disabled={!selectedConnector}
                >
                  Continue
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
