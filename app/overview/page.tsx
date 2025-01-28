"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import eth from "../../public/coin-logos/eth-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import { createPortal } from "react-dom";
import SelectTokens from "../components/select-tokens";
import LockBodyScroll from "../components/lock-body-scroll";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { supportedTokens } from "../utils/data";
import { Pencil, Plus, Trash } from "lucide-react";
import { Modal } from "../components/modal";
interface TokenPair {
  id: number;
  from: { name: string; symbol: string; logo: StaticImageData };
  to: { name: string; symbol: string; logo: StaticImageData };
  amount: number;
  enabled: boolean;
}
export default function Overview() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [tokenSelected, setTokenSelected] = useState<
    | {
        coinName: string;
        contractAddress: `0x${string}`;
      }
    | undefined
  >(undefined);
  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [swappr_contract_address, 0],
    ERC20_ABI,
    tokenSelected?.contractAddress || "0x0"
  );

  // TODO: fetch this from the backend
  const [tokenPairs] = useState<TokenPair[]>([
    {
      id: 1,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: true,
    },
    {
      id: 2,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: true,
    },
    {
      id: 3,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: true,
    },
    {
      id: 4,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: false,
    },
    {
      id: 5,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: true,
    },
  ]);

  async function handleUnsubscribe() {
    try {
      await writeAsync();
      if (waitData) {
        // TODO save information in the backend
        // router.push("/overview");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-[120vh] h-[150vh]">
      <LockBodyScroll lock={isEditing || isAddingToken} />
      {(isEditing || isAddingToken) &&
        createPortal(
          <Modal
            isOpen={isEditing || isAddingToken}
            handleClose={() => {
              setIsEditing(false);
              setIsAddingToken(false);
            }}
            className="backdrop-blur-xl overflow-y-scroll !z-10"
          >
            <div className=" md:mt-[6rem] mt-[4.5rem]">
              <SelectTokens />
            </div>
          </Modal>,
          document.body
        )}
      <section className="relative bg-cover bg-main-bg bg-center bg-no-repeat pt-[100px] md:pt-[147px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
        <div className="flex justify-between md:flex-row flex-col gap-y-3 items-start">
          <div>
            <h1 className="text-base md:text-[20px] md:leading-[27px] font-semibold md:mb-2">
              Autoswappr Overview
            </h1>
            <p className="text-sm md:text-base leading-[22px] max-w-[638px]">
              These are a list of all the tokens you have setup to be
              auto-swapped to a stable token. To add more tokens to the list,
              click on the ‘Add More Tokens’ Button.
            </p>
          </div>
          <button
            className="bg-transparent  text-white py-2 md:py-3 px-4 w-[200px] md:w-[311px] border border-[#2C3035] rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2"
            onClick={() => setIsAddingToken(true)}
          >
            <span className="bg-[#1E2021] rounded-full p-[6px]">
              <Plus size={20} />
            </span>
            Add Tokens
          </button>
        </div>
        <div className="overflow-scroll my-10 lg:my-20">
          <div className="border border-[#2C3035] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[35px_35px_40px_1fr_1fr] sm:grid-cols-5 gap-x-4 text-xs md:text-sm py-4 px-5 border-b border-b-[#2C3035]">
              <div>From</div>
              <div>To</div>
              <div>Amount</div>
              <div>Timestamp</div>
              <div></div>
            </div>
            <div className="flex flex-col gap-y-4 py-4 px-3 md:px-5 max-h-[900px] overflow-scroll">
              {tokenPairs.map((token, i) => (
                <div
                  className="grid grid-cols-[35px_35px_40px_1fr_1fr] sm:grid-cols-5 py-2 md:py-3 gap-x-4"
                  key={i}
                >
                  <div className="flex items-center gap-x-3 text-[#4C5053]">
                    <span className="text-xs font-semibold">{i + 1}.</span>
                    <Image
                      src={token.from.logo}
                      alt="coin-from"
                      className="w-5 h-5 md:w-8 md:h-8 flex-none"
                    />
                    <div className="sm:flex flex-col hidden">
                      <span className="text-sm md:text-base md:leading-[22px] text-[#F3F5FF]">
                        {token.from.name}
                      </span>
                      <span className="text-xs md:text-sm">
                        {token.from.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 text-[#4C5053]">
                    <Image
                      src={token.to.logo}
                      alt="coin-from"
                      className="w-5 h-5 md:w-8 md:h-8 flex-none"
                    />
                    <div className="sm:flex flex-col hidden">
                      <span className="text-sm md:text-base md:leading-[22px] text-[#F3F5FF]">
                        {token.to.name}
                      </span>
                      <span className="text-xs md:text-sm">
                        {token.to.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col sm:items-center text-left gap-x-3 text-[#F3F5FF] text-[10px] sm:text-xs md:text-base">
                    <span>{token.amount}</span>
                  </div>
                  <div className="flex flex-col text-[#F3F5FF] text-[10px] md:text-base">
                    <span>10.09.2024</span>
                    <span className="text-[#4C5053] text-[10px] md:text-sm">
                      GMT 21:08 PM
                    </span>
                  </div>
                  <div className="text-[#FDFDFD] flex justify-start gap-x-2 md:gap-x-4 underline">
                    <button
                      onClick={() => {
                        setTokenSelected({
                          coinName: token.from.name,
                          contractAddress: supportedTokens.filter(
                            (cur) => cur.coinName === token.from.name
                          )[0].contractAddress,
                        });
                        setIsEditing(true);
                      }}
                    >
                      <span className="hidden md:flex">Edit</span>
                      <span className="md:hidden flex">
                        <Pencil size={12} />
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setTokenSelected({
                          coinName: token.from.name,
                          contractAddress: supportedTokens.filter(
                            (cur) => cur.coinName === token.from.name
                          )[0].contractAddress,
                        });
                        handleUnsubscribe();
                      }}
                    >
                      <span className="hidden md:flex">Delete</span>
                      <span className="md:hidden flex">
                        <Trash size={12} />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
