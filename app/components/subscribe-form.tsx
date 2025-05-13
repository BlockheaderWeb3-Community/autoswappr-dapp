"use client";
import React, { useCallback, useEffect, useState } from "react";
import { TokenPair } from "../utils/types";
import { STRK_TOKEN, USDT_TOKEN } from "../utils/data";
import { createSubscription, useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useRouter } from "next/navigation";
import { EditIcon } from "@/svgs/EditIcon";
import { ArrowRight, X } from "lucide-react";
import { useAccount } from "@starknet-react/core";
import GrantPermission from "./ui/modals/grant-permission-modal";

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
      <GrantPermission
        onOpenChange={() => setIsPermissionModalOpen((prev) => !prev)}
        open={isPermissionModalOpen}
        handleSubmit={handleSubscribe}
      />
      <div className="relative px-2 py-8 sm:px-8 xl:py-10 text-grey-300 max-w-4xl mx-auto mb-[200px]">
        {hasCloseButton && (
          <button
            type="button"
            className="cursor-pointer absolute right-7 top-7 z-[51] text-[#F3F5FF]"
            onClick={onClose}
          >
            <X />
          </button>
        )}
        <h1 className="text-2xl md:text-[40px] md:leading-[100%] font-extrabold text-[#F3F5FF] max-w-[280px] md:max-w-full text-center mb-2">
          Your Tokens, Your <span className="text-[#1D8CF4]">Rules</span>
        </h1>
        <p className="text-center text-[#DCDFE1] mb-6 lg:mb-10 text-base">
          Set up auto-swaps for your STRK tokens with ease.
        </p>
        <form className="py-6 px-[80px] bg-[#02060D1F] backdrop-blur-md rounded-xl">
          <div className="flex flex-col items-start w-full gap-3">
            <label htmlFor="swapAmount" className="text-[#CBCFD2] text-sm">
              Input the amount you want to autoswap anytime{" "}
              <span className="font-bold">STRK</span> is sent to your account
            </label>
            <div className="relative bg-[#0D1016] px-4 py-3 flex items-center justify-between w-full rounded-[8px]">
              <input
                type="number"
                name="amount"
                className="bg-transparent w-full text-[14px] p-1 placeholder:text-grey-900 border-none focus:outline-none"
                placeholder="e.g.: 294839 STRK"
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
                required
              />
              <EditIcon />
            </div>
          </div>
          <p className="my-6 text-center text-sm text-[#DCDFE1]">
            Autoswappr will convert your <span className="font-bold">STRK</span>{" "}
            tokens to <span className="font-bold">USDT</span>.
          </p>
          <div className="flex gap-x-9 text-center items-center">
            <div>
              <h5 className="mb-3 text-left text-[#A8AFB4] text-[13px]">
                Swap From
              </h5>
              <div className="w-[270px] py-[42px] border-[#242E38] border rounded-xl">
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
            <div className="w-full h-full rounded-full bg-[#0D1016] flex justify-center items-center text-[#242E38] w-10 h-10">
              <ArrowRight size={24} />
            </div>
            <div>
              <h5 className="mb-3 text-left text-[13px] text-[#A8AFB4]">
                Swap To
              </h5>
              <div className="w-[270px] py-[42px] border-[#242E38] border rounded-xl">
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

          <button
            type="submit"
            id="submit"
            className="disabled:bg-[#0D1016] bg-[#1D8CF4] border-[#1E2021] border-[1px] text-base text-[#F3F5FF] py-4 w-full rounded-lg font-semibold mt-12 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
            disabled={!swapAmount || !Number(swapAmount)}
            onClick={(e) => {
              e.preventDefault();
              if (swapAmount && Number(swapAmount)) {
                setIsPermissionModalOpen(true);
              }
            }}
          >
            Done
          </button>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
