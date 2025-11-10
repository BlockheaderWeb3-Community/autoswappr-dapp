"use client";

import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { LoaderCircle, Settings } from "lucide-react";
import { useAccount } from "@starknet-react/core";
import SubscribeForm from "../components/subscribe-form";
import LockBodyScroll from "../components/lock-body-scroll";
import { Modal } from "../components/modal";
import TranscationHistory from "./transcation-history";
import ChangeAutoswapSettings from "../components/ui/modals/change-autoswap-settings";
import STRKtoUSDTDisplay from "../components/strk-to-usd";
import { useContractFetch } from "../utils/helper";
import { STRK_TOKEN_ABI } from "../abis/strk-abi";
import {
  strk_token_contract_address,
  swappr_contract_address,
} from "../utils/addresses";

export default function Overview() {
  const [isFetchingSubs] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { address } = useAccount();

  const allowanceArgs = useMemo(() => {
    const ZERO_ADDRESS =
      "0x0000000000000000000000000000000000000000000000000000000000000000";
    const ownerAddress =
      (address as `0x${string}` | undefined) ?? (ZERO_ADDRESS as `0x${string}`);
    return [ownerAddress, swappr_contract_address] as const;
  }, [address]);

  const {
    data: allowanceData,
    isLoading: isLoadingAllowance,
    error: allowanceError,
    refetch: refetchAllowance,
  } = useContractFetch(
    STRK_TOKEN_ABI,
    "allowance",
    strk_token_contract_address as `0x${string}`,
    allowanceArgs as unknown as any[]
  );

  // Convert allowance from wei to STRK (18 decimals)
  const allowanceAmount = useMemo(() => {
    if (!allowanceData) return 0;
    try {
      const normalizeToBigInt = (value: unknown): bigint => {
        if (typeof value === "bigint") return value;
        if (typeof value === "number") return BigInt(value);
        if (typeof value === "string") return BigInt(value);
        if (value && typeof value === "object") {
          if ("low" in value && "high" in value) {
            const low = normalizeToBigInt(
              (value as { low: unknown; high: unknown }).low,
            );
            const high = normalizeToBigInt(
              (value as { low: unknown; high: unknown }).high,
            );
            const shift = BigInt(2) ** BigInt(128);
            return high * shift + low;
          }
          if ("toString" in value && typeof value.toString === "function") {
            return BigInt(value.toString());
          }
        }
        return BigInt(0);
      };

      const amount = normalizeToBigInt(allowanceData);
      return Number(amount) / Math.pow(10, 18);
    } catch (error) {
      console.error("Error converting allowance:", error);
      return 0;
    }
  }, [allowanceData]);
 
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
            currentAllowance={allowanceAmount}
            isLoadingAllowance={isLoadingAllowance}
            allowanceError={
              allowanceError instanceof Error ? allowanceError : null
            }
            onAllowanceRefresh={() => {
              void refetchAllowance();
            }}
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
                <div className="flex items-start gap-x-2">
                  <img
                    src="/coin-logos/strk-logo.svg"
                    className="h-8 w-8"
                    alt=""
                  />
                  <div className="text-[#F3F5FF]">
                    {isLoadingAllowance ? (
                      <div className="flex items-center gap-2">
                        <LoaderCircle size={20} className="animate-spin" />
                        <span className="text-sm text-[#DCDFE1]">Loading...</span>
                      </div>
                    ) : allowanceError ? (
                      <div className="text-sm text-red-400">
                        Error loading allowance
                      </div>
                    ) : (
                      <>
                        <h3 className="text-3xl font-bold">
                          {allowanceAmount.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 0,
                          })}{" "}
                          <span className="text-xs">STRK</span>
                        </h3>

                        <h5 className="flex gap-x-1 items-center text-sm">
                          <STRKtoUSDTDisplay amount={allowanceAmount} />
                        </h5>
                      </>
                    )}
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
