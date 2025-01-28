"use client";
import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { TimeIcon } from "@/svgs/TimeIcon";
import LockBodyScroll from "./lock-body-scroll";
import GrantPermissionModal from "./grant-permission-modal";
import { Coin } from "../utils/types";
import { supportedTokens } from "../utils/data";
import CoinCard from "./coin-card";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useRouter } from "next/navigation";
import { DividerShort } from "@/svgs/DividerShort";
import { EditIcon } from "@/svgs/EditIcon";
import { X } from "lucide-react";

const SelectTokens = () => {
  const [swapAmount, setSwapAmount] = useState("");
  const [baseToken, setBaseToken] = useState<Coin | undefined>(undefined);
  const [quoteToken, setQuoteToken] = useState<Coin | undefined>(undefined);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState<boolean>(false);

  const contractAddress =
    baseToken?.contractAddress ||
    "0x0000000000000000000000000000000000000000";
  
  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [
      swappr_contract_address,
      swapAmount
        ? BigInt(swapAmount) * BigInt(10 ** (baseToken?.decimals ?? 18))
        : BigInt(0),
    ],
    ERC20_ABI,
    contractAddress
  );

  const router = useRouter();

  const filteredCoins = useMemo(() => {
    return supportedTokens
  }, [swapAmount]);

  // function handleSelectCoin(coin: Coin) {
  //     setBaseToken(coin);
  // }

  async function handleSubscribe() {
    try {
      if (!baseToken) return;
      await writeAsync();
      if (waitData) {
        // TODO save information in the backend
        router.push("/overview");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (baseToken && quoteToken && swapAmount && Number(swapAmount)) {
      setIsPermissionModalOpen(true);
    }
  };

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
      <div className="relative px-2 py-4 sm:px-8 xl:py-10 text-grey-300 max-w-4xl mx-auto">
        <div className="relative w-full">
          <h1 className="text-center text-[20px] mb-2 lg:mb-6">Autoswappr Subscription Form</h1>
          <p className="text-center text-grey-700 mb-4 lg:mb-8">Please fill out this form carefully.</p>
          <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
            <X className="w-5 h-5 absolute top-[0.5rem] right-[0.5rem] sm:right-1 sm:top-3 text-grey-300" />
          </div>
        </div>
        <div
          className="shadow-lg relative rounded-[12px] w-full lg:w-full border-grey-1100 border-2 px-4 py-5 lg:py-8 lg:px-6 flex justify-center flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <form 
            className="w-full flex gap-8 lg:gap-y-12 items-center justify-center flex-col"
            onSubmit={handleFormSubmit}
          >
            <div className="flex w-full flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
                <div className="flex items-center md:text-sm text-xs gap-2">
                  <TimeIcon />
                  <p>Select Base Tokens</p>
                </div>
                <span className="hidden sm:flex">
                  <DividerShort />
                </span>
                <div className="flex flex-col text-grey-700 text-xs">
                  <p className="">These are tokens you want to automatically swap from. </p>
                  <p>They are mostly unstable tokens and their values easily fluctuate in the market.</p>
                </div>
              </div>
              {filteredCoins.length === 0 ? (
                <p className="text-center text-[#A199B8] mt-4">
                  No tokens found.
                </p>
              ) : (
                <div className="grid mt-4 lg:mt-8 grid-cols-2 lg:grid-cols-2 w-full gap-x-1 sm:gap-x-3 gap-y-2">
                  {filteredCoins.map((coin) => (
                    <CoinCard
                      key={coin.key}
                      coin={coin}
                      isSelected={baseToken?.coinName === coin.coinName}
                      onSelect={(selected) => {
                        if (baseToken?.coinName === selected.coinName) {
                          setBaseToken(undefined);
                        } else {
                          setBaseToken(selected);
                        }
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col items-start w-full gap-3">
              <label htmlFor="swapAmount" className="">Input the amount you want to autoswap</label>
              <div className="relative bg-[#0D1016] px-4 py-3 flex items-center justify-between w-full rounded-[8px]">
                <input
                  type="number"
                  name="swapAmount"
                  className="bg-transparent w-full text-[14px] p-1 placeholder:text-grey-900 border-none focus:outline-none"
                  placeholder="Input how much you want to autoswap"
                  value={swapAmount}
                  onChange={(e) => setSwapAmount(e.target.value)}
                  required
                />
                <EditIcon />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full">
                <div className="flex items-center md:text-sm text-xs gap-2">
                  <TimeIcon />
                  <p>Select Quote Tokens</p>
                </div>
                <span className="hidden sm:flex">
                  <DividerShort />
                </span>
                <div className="flex flex-col text-grey-700 text-xs">
                  <p>These are the tokens you want to automatically swap to. </p>
                  <p>  These tokens are stable tokens and they maintain a constant value in the market.</p>
                </div>
              </div>
              {filteredCoins.length === 0 ? (
                <p className="text-center text-[#A199B8] mt-4">
                  No tokens found.
                </p>
              ) : (
                <div className="grid mt-4 grid-cols-2 w-full gap-x-1 gap-y-1 lg:gap-x-3 lg:gap-y-2">
                  {filteredCoins.map((coin) => (
                    <CoinCard
                      key={coin.key}
                      coin={coin}
                      isSelected={quoteToken?.coinName === coin.coinName}
                      onSelect={(selected) => {
                        if (quoteToken?.coinName === selected.coinName) {
                          setQuoteToken(undefined);
                        } else {
                          setQuoteToken(selected);
                        }
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </form>
          <p className="text-center text-[0.875rem] pt-6 lg:pt-10 text-grey-700">If you have more tokens to add or autoswap, you can do that in the dashboard page that will load after this setup. Thank you for choosing Autoswappr.</p>
          <button
            className="w-full text-white bg-accent disabled:bg-[#0D1016] transition-all cursor-pointer h-[60px] disabled:cursor-not-allowed rounded-[8px] mt-6 lg:mt-10"
            disabled={!baseToken || !quoteToken || !swapAmount || !Number(swapAmount)}
            onClick={() => setIsPermissionModalOpen(true)}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectTokens;
