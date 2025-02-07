"use client";
import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { TimeIcon } from "@/svgs/TimeIcon";
import LockBodyScroll from "./lock-body-scroll";
import GrantPermissionModal from "./grant-permission-modal";
import { Coin, TokenPair } from "../utils/types";
import { quoteTokens, supportedTokens } from "../utils/data";
import CoinCard from "./coin-card";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useRouter } from "next/navigation";
import { DividerShort } from "@/svgs/DividerShort";
import { EditIcon } from "@/svgs/EditIcon";
import { X } from "lucide-react";

interface SelectTokenProps {
  tokenPair?: TokenPair | undefined;
  onClose?: () => void;
  hasCloseButton?: boolean;
}

const SubscribeForm = ({
  tokenPair,
  onClose,
  hasCloseButton = false,
}: SelectTokenProps) => {
  const [swapAmount, setSwapAmount] = useState(
    tokenPair ? String(tokenPair.amount) : ""
  );
  const [baseToken, setBaseToken] = useState<Coin | undefined>(
    tokenPair
      ? supportedTokens.find((token) => token.coinName === tokenPair.from.name)
      : undefined
  );
  const [quoteToken, setQuoteToken] = useState<Coin | undefined>(
    tokenPair
      ? quoteTokens.find((token) => token.coinName === tokenPair.to.name)
      : undefined
  );
  const [isPermissionModalOpen, setIsPermissionModalOpen] =
    useState<boolean>(false);

  const contractAddress =
    baseToken?.contractAddress || "0x0000000000000000000000000000000000000000";

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
    return supportedTokens;
  }, []);

  const quoteCoins = useMemo(() => {
    return quoteTokens;
  }, []);

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

  const handleFormSubmit = () => {
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
      <div className="relative px-2 py-8 sm:px-8 xl:py-10 text-grey-300 max-w-4xl mx-auto">
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
        <form
          className="shadow-lg relative bg-[#000103] rounded-xl w-full lg:w-full border-[#1E2021] border p-5 flex justify-center flex-col items-center gap-y-5 md:gap-y-12"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleFormSubmit();
          }}
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
                <p className="">
                  These are tokens you want to automatically swap from.{" "}
                </p>
                <p>
                  They are mostly unstable tokens and their values easily
                  fluctuate in the market.
                </p>
              </div>
            </div>
            {filteredCoins.length === 0 ? (
              <p className="text-center text-[#A199B8] mt-4">
                No tokens found.
              </p>
            ) : (
              <div className="grid mt-4 lg:mt-8 grid-cols-2 w-full gap-x-1 sm:gap-x-3 gap-y-2">
                {filteredCoins.map((coin) => (
                  <CoinCard
                    key={coin.key}
                    coin={coin}
                    isSelected={baseToken?.coinName === coin.coinName}
                    onSelect={(selected) => {
                      if (!tokenPair) {
                        if (baseToken?.coinName === selected.coinName) {
                          setBaseToken(undefined);
                        } else {
                          setBaseToken(selected);
                        }
                      }
                    }}
                    disabled={!!tokenPair}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col items-start w-full gap-3">
            <label htmlFor="swapAmount" className="">
              Input the amount you want to autoswap
            </label>
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
                <p>
                  {" "}
                  These tokens are stable tokens and they maintain a constant
                  value in the market.
                </p>
              </div>
            </div>
            {quoteCoins.length === 0 ? (
              <p className="text-center text-[#A199B8] mt-4">
                No Quote tokens found.
              </p>
            ) : (
              <div className="grid mt-4 lg:mt-8 grid-cols-2 w-full gap-x-1 lg:gap-x-3 gap-y-2">
                {quoteCoins.map((coin) => (
                  <CoinCard
                    key={coin.key}
                    coin={coin}
                    isSelected={quoteToken?.coinName === coin.coinName}
                    onSelect={(selected) => {
                      if (!tokenPair) {
                        if (quoteToken?.coinName === selected.coinName) {
                          setQuoteToken(undefined);
                        } else {
                          setQuoteToken(selected);
                        }
                      }
                    }}
                    disabled={!!tokenPair}
                  />
                ))}
              </div>
            )}
          </div>
          <p className="text-center text-sm leading-[19px] text-[#7E8489]">
            If you have more tokens to add or autoswap, you can do that in the
            dashboard page that will load after this setup. Thank you for
            choosing Autoswappr.
          </p>
          <button
            className="w-full text-white bg-accent disabled:bg-[#0D1016] transition-all cursor-pointer h-[60px] disabled:cursor-not-allowed rounded-[8px]"
            disabled={
              !baseToken || !quoteToken || !swapAmount || !Number(swapAmount)
            }
            onClick={() => setIsPermissionModalOpen(true)}
          >
            Done
          </button>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;
