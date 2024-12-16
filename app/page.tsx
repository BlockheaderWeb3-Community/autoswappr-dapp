"use client";
import React from "react";
// import Swapper from "./components/swapper";
import eth from "../public/coin-logos/eth-logo.png";
import strk from "../public/coin-logos/strk-logo.png";
import btc from "../public/coin-logos/btc-logo.png";
import sol from "../public/coin-logos/sol-logo.png";
import toggle_off from "../public/toggle.svg";
import toggle_on from "../public/toggle-on.svg";
import usdc from "../public/coin-logos/usdc-logo.png";
import usdt from "../public/coin-logos/usdt-logo.png";
import m_Img from "../public/M-logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-10">
      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col items-center justify-center text-center md:pt-[5px] h-screen px-4">
        <div className="w-full h-[138px] bg-main-bg bg-cover absolute top-0"></div>
        <div className="flex flex-col items-center justify-center m-auto gap-y-10">
          <Image className="md:hidden" src={m_Img} alt="Token badge" />
          <div className="flex flex-col items-center z-10 m-auto">
            <h1 className="text-2xl md:text-[46px] font-semibold text-[#F7F7F7] max-w-[90%] md:max-w-[700px]">
              Your Tokens, Your Rules
            </h1>
            <p className="my-4 md:my-6 px-4">
              Set up auto-swaps for multiple tokens and percentages with ease.
            </p>
            <button className="flex flex-row gap-3 items-center justify-center py-3 w-[200px] border-2 border-[#2AB2FF] rounded-full text-sm leading-5">
              Get started
              <span>
                <Image src="far.svg" alt="arrow icon" width="5" height="5" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-[138px] bg-main-bg bg-cover absolute bottom-0 transform rotate-180"></div>
      </div>

      {/* Select Base Tokens Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-[90%] md:w-[80%] my-10 md:my-20 mx-auto border-2 border-[#382E56] text-center md:text-left p-4 md:px-[24px] md:py-[26px] rounded-3xl">
        <div className="w-full md:w-auto">
          <span className="flex flex-row items-center gap-1">
            <Image src="Select.svg" alt="" width="25" height="25" />
            Select
          </span>
          <h1 className="text-xl md:text-[28px] my-3">
            Select your preferred base tokens to proceed with Auto-Swapper
          </h1>
          <p className="text-sm">
            Base tokens serve as the foundation for swaps and other interactions
            within the platform
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-row justify-center gap-4 md:gap-10 p-4 md:px-[24px] md:py-[26px] border-[.5px] border-[#382E56] rounded-2xl">
          <div className="flex flex-col justify-between items-center">
            <Image
              src="mining_tether_logo.png.svg"
              alt="tether"
              width="12"
              height="12"
              className="w-12 md:w-auto"
            />
            <p className="text-sm md:text-base">Tether</p>
            <span className="text-[10px] text-gray-600">USDT</span>
            <Image
              src="checkmark-circle-02.svg"
              alt="check"
              width="15"
              height="15"
            />
          </div>
          <div className="flex flex-col justify-between items-center">
            <Image
              src="usdc-logo.svg"
              alt="usdc"
              width="12"
              height="12"
              className="w-12 md:w-auto"
            />
            <p className="text-sm md:text-base">USD Coin</p>
            <span className="text-[10px] text-gray-600">USDC</span>
            <Image
              src="checkmark-circle-0.svg"
              alt="check"
              width="15"
              height="15"
            />
          </div>
        </div>
      </section>

      {/* Token Selection Section */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12 w-[90%] md:w-[80%] mx-auto p-4 md:py-[26px] text-center md:text-left rounded-3xl border-2 border-[#382E56] md:border-none md:mb-0 mb-10">
        <div className="w-full md:w-auto">
          <span className="flex flex-row items-center gap-1">
            <Image src="token.svg" alt="token" width="25" height="25" />
            Token
          </span>
          <h1 className="text-xl md:text-[28px] my-3">
            Select the tokens you wish to convert into base tokens
          </h1>
          <p className="text-sm">
            The tokens selected would be swapped automatically based on the
            specified percentage. Ensure your selection aligns with your desired
            outcome.
          </p>
        </div>

        <div className="w-full border-[.5px] border-[#382E56] rounded-3xl p-4 md:px-4 md:py-8">
          <div className="flex flex-row items-center w-full p-3 rounded-full bg-[#100827]">
            <input
              className="w-full rounded-full bg-transparent outline-none"
              type="text"
              placeholder="Search tokens..."
            />
            <Image
              src="search-01.svg"
              alt="search icon"
              width="25"
              height="25"
            />
          </div>
          <div>
            <p className="my-5">Select tokens</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {/* Token buttons */}
              {[
                { img: strk, name: "Starknet", symbol: "STRK" },
                { img: eth, name: "Ethereum", symbol: "ETH" },
                { img: usdt, name: "USDT", symbol: "USDT" },
                { img: btc, name: "Bitcoin", symbol: "BTC" },
                { img: sol, name: "Solana", symbol: "SOL" },
                { img: usdc, name: "USDC", symbol: "USDC" },
              ].map((token, index) => (
                <button
                  key={index}
                  className="w-full h-[40px] flex flex-row gap-2 md:gap-10 items-center justify-between p-2 border-2 border-[#382E56] rounded-full text-sm"
                >
                  <span className="w-full flex flex-row gap-1 items-center">
                    <Image
                      className="w-[21px] h-[21px]"
                      src={token.img}
                      alt="token logo"
                      width="21"
                      height="21"
                    />
                    <span className="text-[12px] flex flex-col items-start py-5">
                      {token.name}
                      <span className="text-[10px] text-gray-600 -mt-1">
                        {token.symbol}
                      </span>
                    </span>
                  </span>
                  <Image
                    src="checkmark-circle-02.svg"
                    alt="check"
                    width="15"
                    height="15"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Auto-swap Tokens Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-[90%] md:w-[80%] mx-auto mb-10 p-4 text-center md:text-left md:py-[26px] rounded-3xl border-2 border-[#382E56] md:border-none">
        <div className="w-full md:w-auto">
          <span className="flex flex-row items-center gap-1">
            <Image src="list.svg" alt="list icon" width="25" height="25" />
            List
          </span>
          <h1 className="text-xl md:text-[28px] my-3">
            Explore the list of currently active auto-swap tokens
          </h1>
          <p className="text-sm">
            These tokens are automatically exchanged based on predefined
            parameters, ensuring seamless transactions. Review the list to
            identify tokens selected and preferences for a more efficient
            experience.
          </p>
        </div>

        <div className="w-full md:w-[70%] border-[.5px] border-[#382E56] rounded-3xl p-3 md:px-4 md:py-8">
          <div className="flex flex-row items-center w-full p-3 rounded-full bg-[#100827]">
            <input
              className="w-full rounded-full bg-transparent outline-none px-1"
              type="text"
              placeholder="Search tokens..."
            />
            <Image
              src="search-01.svg"
              alt="serach icon"
              width="20"
              height="20"
            />
          </div>

          <div className="mt-6">
            <div className="w-full grid grid-cols-2 justify-between items-center my-4 md:my-10">
              <div className="grid grid-cols-2 gap-2 items-center">
                <h3 className="text-sm md:text-base text-center">From</h3>
                <h3 className="text-sm md:text-base text-center">To</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center">
                <h3 className="text-sm md:text-base text-center">%</h3>
                <h3 className="text-sm md:text-base text-center">Auto-Swap</h3>
              </div>
            </div>

            {/* Token Swap Rows */}
            {[
              { from: btc, to: usdt },
              { from: strk, to: sol },
              { from: btc, to: usdc },
              { from: eth, to: usdt },
            ].map((pair, index) => (
              <div
                key={index}
                className="mb-5 w-full grid grid-cols-2 justify-between items-center"
              >
                <div className="grid grid-cols-2 gap-2 justify-items-center">
                  <Image
                    src={pair.from}
                    alt="coin from"
                    width="6"
                    height="6"
                    className="w-6 h-6"
                  />
                  <Image
                    src={pair.to}
                    alt="coin to"
                    width="6"
                    height="6"
                    className="w-6 h-6"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 justify-items-center">
                  <div className="flex flex-row items-center gap-1">
                    <Image
                      src="percent1.svg"
                      alt="arrow"
                      width={55}
                      height={55}
                    />
                  </div>
                  <Image
                    src={index < 2 ? toggle_off : toggle_on}
                    alt="toggle"
                    width={55}
                    height={55}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
