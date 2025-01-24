"use client";
import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { TimeIcon } from "@/svgs/TimeIcon";
import { SearchIcon } from "@/svgs/SearchIcon";
import SelectPercentage from "./select-percentage";
import LockBodyScroll from "./lock-body-scroll";
import GrantPermissionModal from "./grant-permission-modal";
import { Coin } from "../utils/types";
import { supportedTokens } from "../utils/data";
import CoinCard from "./coin-card";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useRouter } from "next/navigation";

const SelectTokens = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<
    { coin: Coin; amount: number; base: string } | undefined
  >(undefined);
  const contractAddress =
    selectedCoin?.coin.contractAddress ||
    "0x0000000000000000000000000000000000000000";
  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [
      swappr_contract_address,
      selectedCoin?.amount
        ? BigInt(selectedCoin.amount) * BigInt(10 ** selectedCoin.coin.decimals)
        : BigInt(0),
    ],
    ERC20_ABI,
    contractAddress
  );
  const [isSelectingCoin, setIsSelectingCoin] = useState(false);
  const [clickedCoin, setClickedCoin] = useState<Coin | undefined>(undefined);
  const [isPermissionModalOpen, setIsPermissionModalOpen] =
    useState<boolean>(false);

  const router = useRouter();

  const filteredCoins = useMemo(() => {
    if (searchTerm.trim() === "") return supportedTokens;
    return supportedTokens.filter((coin) =>
      `${coin.coinName} ${coin.coinSymbol}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  function handleSelectCoin(coin: Coin, amount: number, base: string) {
    setSelectedCoin({ coin, amount, base });
  }

  async function handleSubscribe() {
    try {
      if (!selectedCoin) return;
      await writeAsync();
      if (waitData) {
        // TODO save information in the backend
        router.push("/overview");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <LockBodyScroll
        lock={
          (isSelectingCoin && clickedCoin !== undefined) ||
          isPermissionModalOpen
        }
      />
      {isSelectingCoin &&
        clickedCoin &&
        createPortal(
          <SelectPercentage
            handleClose={() => {
              setIsSelectingCoin(false);
              setClickedCoin(undefined);
            }}
            handleSelectCoin={handleSelectCoin}
            coin={clickedCoin}
          />,
          document.body
        )}
      {isPermissionModalOpen &&
        createPortal(
          <GrantPermissionModal
            handleClose={() => setIsPermissionModalOpen(false)}
            handleSubmit={handleSubscribe}
          />,
          document.body
        )}
      <div
        className="shadow-lg bg-[#08001F] relative rounded-[32px] w-[350px] text-[#F9F9F9] border-[#170F2E] border-2 sm:w-fit p-12 flex justify-center flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-[600] text-center sm:text-left text-lg sm:text-[24px] mb-4">
          Select a token to auto-swap from
        </p>
        <p className="text-center font-normal text-[12px] sm:text-[16px] leading-[22px] max-w-[624px] text-[#A199B8] mb-7">
          You can select a token to auto-swap from here. You can select how many
          percent of that token should be auto-swapped whenever you get funded.
        </p>
        <form className="mx-auto flex items-center justify-center flex-col">
          <div className="relative bg-[#100827] px-4 py-2 flex items-center justify-between w-full rounded-full">
            <input
              type="search"
              className="bg-[#100827] text-[14px] p-1 text-white border-none focus:outline-none"
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <SearchIcon />
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex items-center md:text-sm text-xs gap-2">
              <TimeIcon />
              <p>Selected tokens</p>
            </div>
            {filteredCoins.length === 0 ? (
              <p className="text-center text-[#A199B8] mt-4">
                No tokens found.
              </p>
            ) : (
              <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {filteredCoins.map((coin) => (
                  <CoinCard
                    key={coin.key}
                    coin={coin}
                    isSelected={selectedCoin?.coin.coinName === coin.coinName}
                    onSelect={(selected) => {
                      if (selectedCoin?.coin.coinName === selected.coinName) {
                        setSelectedCoin(undefined);
                      } else {
                        setClickedCoin(selected);
                        setIsSelectingCoin(true);
                      }
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </form>
        <button
          className="w-full text-white bg-[#100827] cursor-pointer h-[60px] disabled:cursor-not-allowed disabled:bg-opacity-80 rounded-[32px] mt-10"
          disabled={!selectedCoin}
          onClick={() => setIsPermissionModalOpen(true)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SelectTokens;
