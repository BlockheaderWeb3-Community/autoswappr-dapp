"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import eth from "../../public/coin-logos/eth-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import { createPortal } from "react-dom";
import GenericModal from "../components/generic-modal";
import SelectTokens from "../components/select-tokens";
import LockBodyScroll from "../components/lock-body-scroll";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import Table, { ColumnDef } from "../components/table.beta";

interface TokenPair {
  id: number;
  from: { name: string; symbol: string; logo: StaticImageData };
  to: { name: string; symbol: string; logo: StaticImageData };
  amount: number;
  edit?: any;
  delete?: any
}

const columns: ColumnDef<TokenPair>[] = [
  {
    header: "From",
    accessorKey: "from",
    cell: (info, index) => (
      <div className="flex items-center gap-3">
        <p className="text-[#4C5053] text-xs text-[16px] font-semibold">{index as number + 1}.</p>
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={info.from.logo || "/placeholder.svg"}
            alt={info.from.name}
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white capitalize">{info.from.name}</span>
          <span className="text-xs text-gray-500">{info.amount} {info.from.symbol}</span>
        </div>
      </div>
    ),
  },
  {
    header: "To",
    accessorKey: "to",
    cell: (info) => (
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={info.to.logo || "/placeholder.svg"}
            alt={info.to.name}
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">{info.to.name}</span>
          <span className="text-xs text-gray-500">{info.to.symbol}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Amount",
    accessorKey: "to",
    cell: (info) => (
      <div className="flex flex-col">
        <span className="text-sm text-white">
          {info.amount} {info.from.symbol}
        </span>
      </div>
    ),
  },
  {
    header: "",
    accessorKey: "edit",
    cell: (info) => (
      <button onClick={() => console.log(info.id)} className="text-center text-[#A8AFB4] text-sm font-semibold underline uppercase">EDIT</button>
    ),
  },
  {
    header: "",
    accessorKey: "delete",
    cell: (info) => (
      <button onClick={() => console.log(info.id)} className="text-center text-[#A8AFB4] text-sm font-semibold underline uppercase">DELETE</button>
    ),
  },

];

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
      amount: 50
    },
    {
      id: 2,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50
    },
    {
      id: 3,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
    },
    {
      id: 4,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
    },
    {
      id: 5,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
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
      <section className="relative bg-cover bg-main-bg bg-center bg-no-repeat pt-[100px] md:pt-[147px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
        <div className="w-full max-w-[936px] flex flex-col gap-8 mb-12 mx-auto">
          <div>
          <h1 className="text-xl md:text-2xl w-full md:leading-[27px] font-semibold md:mb-2">
            Autoswappr Overview
          </h1>
          <p className="w-full text-[#a199b8] text-base font-normal">These are a list of all the tokens you have setup to be auto-swapped to a stable token.
            <br />To add more tokens to the list, click on the ‘Add More Tokens’ Button.</p>

          </div>
          <Table columns={columns} data={tokenPairs} />
        </div>
      </section>
    </div>
  );
}
