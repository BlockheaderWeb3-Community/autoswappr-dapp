"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import { EqualApproximately, LoaderCircle, Settings } from "lucide-react";
import { TokenPair } from "../utils/types";

import SubscribeForm from "../components/subscribe-form";
import LockBodyScroll from "../components/lock-body-scroll";
import { Modal } from "../components/modal";
import GiveFeedback from "../components/give-feedback";

// import usdt from "../../public/coin-logos/usdc-logo.svg";
// import strk from "../../public/coin-logos/strk-logo.svg";
import TranscationHistory from "./transcation-history";
import ChangeAutoswapSettings from "../components/change-autoswap-settings";

export default function Overview() {
  const { address } = useAccount();
  const router = useRouter();

  // State Management
  const [isFetchingSubs] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [tokenPairs, setTokenPairs] = useState<TokenPair[]>([]);
  const [selectedTokenPair] = useState<TokenPair | undefined>(undefined);
  // Fetch subscriptions
  useEffect(() => {
    if (!address) return;
    // TODO: Implement Fetch Data
    // const fetchData = async () => {
    //   setIsFetchingSubs(true);
    //   try {
    //     const subs = await fetchSubscriptions(address);
    //     if (!subs?.data?.length) {
    //       router.push("/subscribe");
    //       return;
    //     }
    //     setTokenPairs([
    //       {
    //         id: 1,
    //         from: { name: "Starknet", symbol: "STRK", logo: strk },
    //         to: { name: "Tether", symbol: "USDT", logo: usdt },
    //         amount: subs.data[0].swap_amount,
    //         timestamp: "10.09.2024 GMT 21:08 PM",
    //         enabled: false,
    //         edit: false,
    //         delete: false,
    //       },
    //     ]);
    //   } catch (err) {
    //     console.error("Error fetching subscriptions:", err);
    //   } finally {
    //     setIsFetchingSubs(false);
    //   }
    // };

    // fetchData();
  }, [address, router]);

  return (
    <div className="sm:h-[130vh] pt-[100px] md:pt-[10rem] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] pointer-events-none"
      >
        <source src="/app-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {settingsIsOpen &&
        createPortal(
          <ChangeAutoswapSettings
            handleClose={() => setSettingsIsOpen(false)}
          />,
          document.body
        )}
      {isFetchingSubs ? (
        <div className="flex justify-center items-center h-full spinner">
          <LoaderCircle size={100} />
        </div>
      ) : (
        <>
          <LockBodyScroll lock={isEditing || isAddingToken} />
          {isEditing || isAddingToken
            ? createPortal(
                <Modal
                  isOpen
                  handleClose={() => {
                    setIsEditing(false);
                    setIsAddingToken(false);
                  }}
                >
                  <SubscribeForm
                    tokenPair={selectedTokenPair}
                    onClose={() => {
                      setIsEditing(false);
                      setIsAddingToken(false);
                    }}
                    hasCloseButton
                  />
                </Modal>,
                document.body
              )
            : null}
          <div className="w-full flex flex-col gap-10">
            <div>
              <h2 className="mb-1 text-[#F3F5FF] text-xl font-semibold">
                Current Subscription
              </h2>
              <p className="text-[#BABFC3] text-sm mb-4">
                Your Autoswap threshold is set to convert:
              </p>

              <div className="bg-[#0D1016] rounded-xl w-fit py-5 px-4 flex gap-x-8">
                <div className="flex gap-x-2">
                  <img
                    src="/coin-logos/strk-logo.svg"
                    className="mt-3 h-8 w-8"
                    alt=""
                  />
                  <div className="text-[#F3F5FF]">
                    <h3 className="text-[40px] leading-[54px] font-bold">
                      3000 <span className="text-xs">STRK</span>
                    </h3>

                    <h5 className="flex gap-x-1 items-center text-sm">
                      <span className="text-[#7E8489]">
                        <EqualApproximately size={12} />
                      </span>
                      809 USDT
                    </h5>
                  </div>
                </div>
                <button
                  className="flex items-center gap-x-2 text-sm text-[#DCDFE1] rounded-full bg-[#1D1E28] py-2 px-3 h-fit cursor-pointer"
                  onClick={() => setSettingsIsOpen(true)}
                >
                  <Settings size={14} />
                  Change Settings
                </button>
              </div>
            </div>
            <TranscationHistory />
          </div>
          <GiveFeedback />
        </>
      )}
    </div>
  );
}
