"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useConnect } from "@starknet-react/core";
import { X } from "lucide-react";
import Image from "next/image";

interface WalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const walletIcons = {
  argentX: "/assets/wallets/argent.svg",
  webwallet: "/assets/wallets/argent.svg", // For Argent Mobile
  braavos: "/assets/wallets/braavos.svg",
};

export function WalletModal({ isOpen, setIsOpen }: WalletModalProps) {
  const { connect, connectors } = useConnect();

  const getWalletDetails = (connector: any) => {
    // Handle Argent Mobile special case
    if (connector.id === "webwallet") {
      return {
        name: "Argent",
        subtext: "MOBILE",
        icon: walletIcons.webwallet,
      };
    }

    // Handle other wallets
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

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
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
              <Dialog.Panel className="w-full max-w-md transform rounded-3xl bg-[#0A041C] p-8 shadow-xl transition-all">
                <div className="flex justify-between items-center mb-8">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium text-white"
                  >
                    Connect wallet
                  </Dialog.Title>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-400 mb-8">
                  Choose a wallet you want to connect to Auto-swapper
                </p>

                <div className="space-y-4 mb-8">
                  {connectors.map((connector) => {
                    const walletDetails = getWalletDetails(connector);
                    return (
                      <button
                        key={connector.id}
                        onClick={() => {
                          connect({ connector });
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between p-4 rounded-full
                          border border-[#2C3356] hover:border-blue-500 transition-colors"
                      >
                        <div className="flex items-center gap-3">
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
                  className="w-full py-4 rounded-full bg-[#2C3356] text-white hover:bg-[#3C4366] transition-colors"
                  onClick={() => setIsOpen(false)}
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
