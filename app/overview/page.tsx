"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { LoaderCircle, Settings } from "lucide-react";
// import type { TokenPair } from "../utils/types";

import SubscribeForm from "../components/subscribe-form";
import LockBodyScroll from "../components/lock-body-scroll";
import { Modal } from "../components/modal";

// import usdt from "../../public/coin-logos/usdc-logo.svg";
// import strk from "../../public/coin-logos/strk-logo.svg";
import TranscationHistory from "./transcation-history";
import ChangeAutoswapSettings from "../components/ui/modals/change-autoswap-settings";
import STRKtoUSDTDisplay from "../components/strk-to-usd";

export default function Overview() {
  // State Management
  const [isFetchingSubs] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [tokenPairs, setTokenPairs] = useState<TokenPair[]>([]);
  // const [selectedTokenPair] = useState<TokenPair | undefined>(undefined);
  // Fetch subscriptions
  // useEffect(() => {
  //   if (!address) return;
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
  // }, [address, router]);

  return (
    <div className="sm:min-h-[100vh] pt-[100px] md:pt-[200px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh] relative">
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
            open={settingsIsOpen}
            onOpenChange={() => setSettingsIsOpen((prev) => !prev)}
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
                    // tokenPair={selectedTokenPair}
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
              <h2 className="mb-1 text-[#F3F5FF] text-base md:text-xl font-semibold text-center md:text-left">
                Current Subscription
              </h2>
              <p className="text-[#BABFC3] text-xs md:text-sm mb-4 text-center md:text-left">
                Your Autoswap threshold is set to convert:
              </p>

              <div className="bg-[#0D1016] rounded-xl w-full md:w-fit py-5 px-4 flex gap-x-8 justify-between">
                <div className="flex gap-x-2">
                  <img
                    src="/coin-logos/strk-logo.svg"
                    className="mt-3 h-8 w-8"
                    alt=""
                  />
                  <div className="text-[#F3F5FF]">
                    <h3 className="text-3xl leading-[54px] font-bold">
                      3000 <span className="text-xs">STRK</span>
                    </h3>

                    <h5 className="flex gap-x-1 items-center text-sm">
                      <STRKtoUSDTDisplay amount={3000} />
                    </h5>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-x-2 text-xs md:text-[13px] text-[#DCDFE1] rounded-full bg-[#1D1E28] py-2 px-3 h-fit cursor-pointer"
                  onClick={() => setSettingsIsOpen(true)}
                >
                  <Settings size={14} />
                  Change Settings
                </button>
              </div>
            </div>
            <TranscationHistory />
          </div>
          {/* <GiveFeedback /> */}
        </>
      )}
    </div>
  );
}
