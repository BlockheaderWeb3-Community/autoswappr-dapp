"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Open_Sans } from "next/font/google";

import React, { useState } from "react";
import btc from "../../public/BtcIcon.svg";
import eth from "../../public/EthereumLogo.svg";
import strk from "../../public/StarknetIcon.svg";
import alt from "../../public/Blank.svg";

import { UncheckedIcon } from "@/svgs/UncheckedIcon";
import { CheckIcon } from "@/svgs/CheckIcon";
import { TimeIcon } from "@/svgs/TimeIcon";
import { SearchIcon } from "@/svgs/SearchIcon";
import { CloseButton } from "@/svgs/CloseButton";

const openSans = Open_Sans({ subsets: ["latin"] });

type Coin = {
  key: string;
  imgLink: StaticImageData | string;
  coinName: string;
  coinSymbol: string;
};

const Selecttokens = () => {
  const coins: Coin[] = [
    { key: "bitcoin", imgLink: strk, coinName: "Bitcoin", coinSymbol: "BTC" },
    { key: "ethereum", imgLink: eth, coinName: "Ethereum", coinSymbol: "ETH" },
    { key: "dogecoin", imgLink: eth, coinName: "Dogecoin", coinSymbol: "DOGE" },
    { key: "litecoin", imgLink: btc, coinName: "Litecoin", coinSymbol: "LTC" },
    { key: "ripple", imgLink: alt, coinName: "Ripple", coinSymbol: "XRP" },
    { key: "cardano", imgLink: alt, coinName: "Cardano", coinSymbol: "ADA" },
    { key: "polkadot", imgLink: alt, coinName: "Polkadot", coinSymbol: "DOT" },
    { key: "solana", imgLink: alt, coinName: "Solana", coinSymbol: "SOL" },
    {
      key: "binanceCoin",
      imgLink: alt,
      coinName: "Binance Coin",
      coinSymbol: "BNB",
    },
    {
      key: "avalanche",
      imgLink: alt,
      coinName: "Avalanche",
      coinSymbol: "AVAX",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoins, setSelectedCoins] = useState<string[]>([]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.coinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.coinSymbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCoinSelection = (coinKey: string) => {
    setSelectedCoins((prev) =>
      prev.includes(coinKey)
        ? prev.filter((key) => key !== coinKey)
        : [...prev, coinKey]
    );
  };

  return (
    <div className=" w-full pt-[180px] overflow-x-hidden items-center justify-center flex">
      <div
        className={`shadow-lg relative rounded-3xl w-[350px] border-[#170F2E] border-2 sm:w-[800px] ${openSans.className} p-6 flex justify-center flex-col items-center`}
      >
        <button className="hidden md:block absolute top-4 right-4 z-10">
          <CloseButton />
        </button>
        <p className="font-[600]  text-center sm:text-left text-lg sm:text-[24px] mb-4">
          Select token(s) to auto-swap from
        </p>

        <p className="text-center font-normal text-[12px] sm:text-[16px]  leading-[22px]">
          You can select multiple tokens to auto-swap from here. You can select
          how many percent of that token should be auto-swapped whenever you get
          funded.
        </p>
        <br />

        <form className="mx-auto flex items-center justify-center flex-col">
          <div className="relative bg-[#100827] px-4 py-2 flex items-center justify-between w-full rounded-full">
            <input
              type="search"
              className=" bg-[#100827] text-[14px] p-1 text-white border-none focus:outline-none focus:border-none focus:no-underline  "
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <SearchIcon />
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex  items-center md:text-sm text-xs  gap-2">
              <TimeIcon />
              <p>Selected tokens</p>
            </div>
            <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 ">
              {filteredCoins.map((coin) => (
                <div
                  key={coin.key}
                  onClick={() => toggleCoinSelection(coin.key)}
                  className={`sm:w-[224px] w-[150px] h-[60px] md:h-[60px] rounded-full border-[#170F2E] py-1 px-2 grid grid-cols-[24px_auto_30px] items-center sm:grid-cols-[35px_auto_30px] cursor-pointer 
                    ${selectedCoins.includes(coin.key) ? "bg-[#0F96E3]/10" : ""}`}
                >
                  <div className="items-center justify-center flex">
                    <Image
                      src={coin.imgLink}
                      alt={coin.coinName}
                      width={24}
                      height={24}
                      className="sm:w-8 sm:h-8 "
                    />
                  </div>
                  <div className="flex pl-2 flex-col items-start">
                    <p className="text-[12px] sm:text-[16px] font-normal sm:font-semibold">
                      {coin.coinName}
                    </p>
                    <p className="capitalize text-[10px] sm:text-[13px] text-[#433B5A]">
                      {coin.coinSymbol}
                    </p>
                  </div>
                  <div className="items-center justify-center flex">
                    {selectedCoins.includes(coin.key) ? (
                      <CheckIcon />
                    ) : (
                      <UncheckedIcon />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
        <button
          className="w-full text-white bg-[#100827] h-[60px] rounded-[32px] mt-10"
          disabled={selectedCoins.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Selecttokens;
