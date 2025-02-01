"use client";
import React, { useState } from "react";
import Image from "next/image";
import eth from "../../public/coin-logos/eth-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import { createPortal } from "react-dom";
import SelectTokens from "../components/select-tokens";
import LockBodyScroll from "../components/lock-body-scroll";
import { useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import Table, { ColumnDef } from "../components/table.beta";
import { Plus } from "lucide-react";
import { supportedTokens } from "../utils/data";
import { Modal } from "../components/modal";
import { TokenPair } from "../utils/types";
import PageHeading from "../components/page-heading";
import GiveFeedback from "../components/give-feedback";

export default function Overview() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [selectedTokenPair, setSelectedTokenPair] = useState<
    TokenPair | undefined
  >(undefined);
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
      enabled: false,
      edit: false,
      delete: false,
    },
    {
      id: 2,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: false,
      edit: false,
      delete: false,
    },
    {
      id: 3,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: false,
      edit: false,
      delete: false,
    },
    {
      id: 4,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: false,
      edit: false,
      delete: false,
    },
    {
      id: 5,
      from: { name: "Ethereum", symbol: "ETH", logo: eth },
      to: { name: "USDC", symbol: "USDC", logo: usdc },
      amount: 50,
      enabled: false,
      edit: false,
      delete: false,
    },
  ]);

  async function handleUnsubscribe() {
    try {
      await writeAsync();
      if (waitData) {
      }
    } catch (err) {
      console.log(err);
    }
  }

  const columns: ColumnDef<TokenPair>[] = [
    {
      header: "From",
      accessorKey: "from",
      cell: (info, index) => (
        <div className="flex items-center gap-3">
          <p className="text-[#4C5053] text-xs text-[16px] font-semibold">
            {(index as number) + 1}.
          </p>
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
            <span className="text-sm font-medium text-white capitalize">
              {info.from.name}
            </span>
            <span className="text-xs text-gray-500">
              {info.amount} {info.from.symbol}
            </span>
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
            <span className="text-sm font-medium text-white">
              {info.to.name}
            </span>
            <span className="text-xs text-gray-500">{info.to.symbol}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Amount",
      accessorKey: "amount",
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
        <button
          onClick={() => {
            setTokenSelected({
              coinName: info.from.name,
              contractAddress: supportedTokens.filter(
                (cur) => cur.coinName === info.from.name
              )[0].contractAddress,
            });
            setSelectedTokenPair(info);
            setIsEditing(true);
          }}
          className="text-center text-[#A8AFB4] text-sm font-semibold underline uppercase"
        >
          EDIT
        </button>
      ),
    },
    {
      header: "",
      accessorKey: "delete",
      cell: (info) => (
        <button
          onClick={() => {
            setTokenSelected({
              coinName: info.from.name,
              contractAddress: supportedTokens.filter(
                (cur) => cur.coinName === info.from.name
              )[0].contractAddress,
            });
            handleUnsubscribe();
          }}
          className="text-center text-[#A8AFB4] text-sm font-semibold underline uppercase"
        >
          DELETE
        </button>
      ),
    },
  ];

  return (
    <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-[120vh] h-[150vh] pt-[100px] md:pt-[150px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
      <LockBodyScroll lock={isEditing || isAddingToken} />
      {(isEditing || isAddingToken) &&
        createPortal(
          <Modal
            isOpen={isEditing || isAddingToken}
            handleClose={() => {
              setIsEditing(false);
              setIsAddingToken(false);
              setSelectedTokenPair(undefined);
            }}
            className="backdrop-blur-xl overflow-y-scroll !z-10 py-[80px] "
          >
            <SelectTokens
              tokenPair={selectedTokenPair}
              onClose={() => {
                setIsEditing(false);
                setIsAddingToken(false);
                setSelectedTokenPair(undefined);
              }}
              hasCloseButton={true}
            />
          </Modal>,
          document.body
        )}
      <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start justify-between w-full">
          <PageHeading
            title="Autoswappr Overview"
            subTitle="These are a list of all the tokens you have setup to be
              auto-swapped to a stable token. To add more tokens to the list,
              click on the 'Add More Tokens' Button."
          />
          <button
            className="bg-[#010307] text-[#F3F5FF] py-2 md:py-3 px-4 w-[240px] border border-[#2C3035] rounded-lg text-sm leading-6 flex items-center justify-center gap-2"
            onClick={() => setIsAddingToken(true)}
          >
            <span className="bg-[#1E2021] rounded-full p-[6px]">
              <Plus size={20} />
            </span>
            Add Tokens
          </button>
        </div>
        <div className="md:pr-[152px]">
          <Table columns={columns} data={tokenPairs} />
        </div>
      </div>
      <GiveFeedback />
    </div>
  );
}
