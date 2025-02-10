"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LockBodyScroll from "./lock-body-scroll";
import GrantPermissionModal from "./grant-permission-modal";
import { TokenPair } from "../utils/types";
import { STRK_TOKEN, USDT_TOKEN } from "../utils/data";
import { createSubscription, useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useRouter } from "next/navigation";
import { EditIcon } from "@/svgs/EditIcon";
import { ArrowRight, X } from "lucide-react";
import { useAccount } from "@starknet-react/core";

interface SelectTokenProps {
  tokenPair?: TokenPair | undefined;
  onClose?: () => void;
  hasCloseButton?: boolean;
}

const SubscribeForm = ({
  onClose,
  hasCloseButton = false,
}: SelectTokenProps) => {
  const { address } = useAccount();
  const router = useRouter();
  const [swapAmount, setSwapAmount] = useState("");
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);

  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [
      swappr_contract_address,
      swapAmount
        ? BigInt(swapAmount) * BigInt(10 ** STRK_TOKEN.decimals)
        : BigInt(0),
    ],
    ERC20_ABI,
    STRK_TOKEN.contractAddress
  );

  useEffect(() => {
    if (!waitData || !address) return;

    const subscribe = async () => {
      try {
        await createSubscription({
          wallet_address: address,
          to_token: USDT_TOKEN.contractAddress,
          from_token: STRK_TOKEN.contractAddress,
          swap_amount: Number(swapAmount),
        });
        setIsPermissionModalOpen(false);
        router.push("/overview");
      } catch (error) {
        console.error("Subscription error:", error);
      }
    };

    subscribe();
  }, [waitData, address, router, swapAmount]);

  const handleSubscribe = useCallback(async () => {
    try {
      await writeAsync();
    } catch (error) {
      console.error("Error approving swap:", error);
    }
  }, [writeAsync]);

  return (
    <>
      <LockBodyScroll lock={isPermissionModalOpen} />
      {isPermissionModalOpen &&
        createPortal(
          <GrantPermissionModal
            handleClose={() => setIsPermissionModalOpen(false)}
            handleSubmit={handleSubscribe}
          />,
          document.body
        )}
      <div className="relative px-2 py-8 sm:px-8 xl:py-10 text-grey-300 max-w-4xl mx-auto mb-[200px]">
        {hasCloseButton && (
          <button
            className="cursor-pointer absolute right-7 top-7 z-[51] text-[#F3F5FF]"
            onClick={onClose}
          >
            <X />
          </button>
        )}
        <h1 className="text-center text-xl mb-2 lg:mb-4 font-semibold">
          Autoswappr Subscription Form
        </h1>
        <p className="text-center text-[#7E8489] mb-4 lg:mb-10 text-base leading-[22px]">
          Please fill out this form carefully.
        </p>
        <form className="py-6 px-[80px] bg-[#02060D1F] backdrop-blur-md">
          <div className="flex gap-x-9 text-center items-center">
            <div>
              <h5 className="mb-3 text-left">Swap From:</h5>
              <div className="w-[240px] py-[42px] border-[#242E38] border rounded-xl">
                <img
                  src={STRK_TOKEN.imgLink}
                  className="w-[60px] h-[60px] mb-2 mx-auto"
                  alt=""
                />
                <h3 className="text-xl text-[#CBCFD2]">
                  {STRK_TOKEN.coinName}
                </h3>
                <h4 className="uppercase font-semibold text-[#4C5053] text-base leading-[22px]">
                  {STRK_TOKEN.coinSymbol}
                </h4>
              </div>
            </div>
            <div className="border rounded-full p-[10px] border-[#242E38] w-[60px] h-[60px] text-[#242E38]">
              <div className="w-full h-full rounded-full bg-[#0D1016] flex justify-center items-center">
                <ArrowRight size={24} />
              </div>
            </div>
            <div>
              <h5 className="mb-3 text-left">Swap To:</h5>
              <div className="w-[240px] py-[42px] border-[#242E38] border rounded-xl">
                <img
                  src={USDT_TOKEN.imgLink}
                  className="w-[60px] h-[60px] mb-2 mx-auto"
                  alt=""
                />
                <h3 className="text-xl text-[#CBCFD2]">
                  {USDT_TOKEN.coinName}
                </h3>
                <h4 className="uppercase font-semibold text-[#4C5053] text-base leading-[22px]">
                  {USDT_TOKEN.coinSymbol}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-3 mt-6">
            <label htmlFor="swapAmount" className="text-[#CBCFD2] text-sm">
              Input the amount you want to autoswap
            </label>
            <div className="relative bg-[#0D1016] px-4 py-3 flex items-center justify-between w-full rounded-[8px]">
              <input
                type="number"
                name="amount"
                className="bg-transparent w-full text-[14px] p-1 placeholder:text-grey-900 border-none focus:outline-none"
                placeholder="Input how much you want to autoswap"
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
                required
              />
              <EditIcon />
            </div>
          </div>
          <button
            type="submit"
            id="submit"
            className="bg-[#080B11] text-base text-[#F3F5FF] py-4 w-full rounded-lg font-semibold mt-12 disabled:cursor-not-allowed"
            disabled={!swapAmount || !Number(swapAmount)}
            onClick={(e) => {
              e.preventDefault();
              if (swapAmount && Number(swapAmount)) {
                setIsPermissionModalOpen(true);
              }
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
