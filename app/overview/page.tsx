"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import arrow from "../../public/arrow.svg";
import eth from "../../public/coin-logos/eth-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import { createPortal } from "react-dom";
import GenericModal from "../components/generic-modal";
import SelectTokens from "../components/select-tokens";
import LockBodyScroll from "../components/lock-body-scroll";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { supportedTokens } from "../utils/data";
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
          <GenericModal
            className="flex justify-center items-center"
            handleClose={() => {
              setIsEditing(false);
              setIsAddingToken(false);
            }}
          >
            <SelectTokens />
          </GenericModal>,
          document.body
        )}
      <div className="flex flex-col items-center text-center md:pt-[182px] pt-[150px] px-5 md:px-0">
        <h1 className="max-w-[700px] text-[20px] md:text-2xl font-semibold text-[#F9F9F9] mb-[10px]">
          Autoswappr Overview
        </h1>
        <p className="text-center text-[16px] leading-[22px] mb-8 text-[#A199B8] max-w-[700px]">
          These are a list of all the tokens you have setup to be auto-swapped
          to a stable token. To add more tokens to the list, click on the
          &apos;Add More Tokens&apos; Button below.
        </p>

        <div className="w-full min-w-[350px] overflow-x-auto max-w-[900px] mt-10">
          <table className="w-full border-collapse">
            <thead className="">
              <tr className="border-b border-[#1E1B24]  text-white">
                <th colSpan={2} className="py-3 px-4 font-[200] text-left">
                  From
                </th>
                <th className="py-3 px-4 font-[200]"></th>
                <th className="py-3 px-4 font-[200] text-left">To</th>
                <th className="py-3 px-4 font-[200] text-left ">
                  <div className="ml-12 md:ml-0">Amount</div>
                </th>
                <th className="py-3 px-4 font-[200] text-left"></th>
              </tr>
            </thead>
            <tbody>
              {tokenPairs.map((pair, index) => (
                <tr
                  key={pair.id}
                  className=" hover:bg-[#100827]/20 transition-colors"
                >
                  <td className="py-4 px-4 text-[#A199B8]">{index + 1}.</td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={pair.from.logo}
                        alt={pair.from.name}
                        width={32}
                        height={32}
                        className="rounded-full  w-6 h-6 md:w-8 md:h-8"
                      />
                      <div>
                        <div className="text-white text-sm md:text-base">
                          {pair.from.name}
                        </div>
                        <div className="text-[#A199B8] text-left text-xs  md:text-sm">
                          {pair.from.symbol}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className=" py-4 px-4">
                    <Image
                      src={arrow}
                      alt="arrow"
                      width={24}
                      height={24}
                      className="-rotate-90"
                    />
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={pair.to.logo}
                        alt={pair.to.name}
                        width={32}
                        height={32}
                        className="rounded-full w-6 h-6 md:w-8 md:h-8"
                      />
                      <div>
                        <div className="text-white text-sm md:text-base">
                          {pair.to.name}
                        </div>
                        <div className="text-[#A199B8] text-left text-xs  md:text-sm">
                          {pair.to.symbol}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4  px-4 text-[#F9F9F9] text-left">
                    <div className="relative ml-12 md:ml-0 w-24">
                      <h3 className="text-base leading-[22px]">100</h3>
                      <h4 className="font-semibold text-sm text-[#433B5A]">
                        STRK
                      </h4>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-[#FDFDFD] flex justify-start gap-x-4 underline">
                    <button
                      onClick={() => {
                        setTokenSelected({
                          coinName: pair.from.name,
                          contractAddress: supportedTokens.filter(
                            (cur) => cur.coinName === pair.from.name
                          )[0].contractAddress,
                        });
                        setIsEditing(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setTokenSelected({
                          coinName: pair.from.name,
                          contractAddress: supportedTokens.filter(
                            (cur) => cur.coinName === pair.from.name
                          )[0].contractAddress,
                        });
                        handleUnsubscribe();
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="bg-transparent  text-white py-4 px-16 border border-[#0F96E3] rounded-[900px] text-sm mt-10  transition-colors duration-300 flex items-center gap-2"
          onClick={() => setIsAddingToken(true)}
        >
          <img
            src="/plusIcon.svg"
            alt="plus"
            className="bg-[#100827] rounded-full p- w-6 h-6"
          />
          Add Tokens
        </button>
      </div>
    </div>
  );
}
