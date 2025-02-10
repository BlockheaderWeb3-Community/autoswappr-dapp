"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

import {
  deleteSubscription,
  fetchSubscriptions,
  useContractWriteUtility,
} from "../utils/helper";
import {
  strk_token_contract_address,
  swappr_contract_address,
} from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { TokenPair } from "../utils/types";

import SubscribeForm from "../components/subscribe-form";
import LockBodyScroll from "../components/lock-body-scroll";
import Table, { ColumnDef } from "../components/table.beta";
import { Modal } from "../components/modal";
import PageHeading from "../components/page-heading";
import GiveFeedback from "../components/give-feedback";

import usdt from "../../public/coin-logos/usdc-logo.svg";
import strk from "../../public/coin-logos/strk-logo.svg";

export default function Overview() {
  const { address } = useAccount();
  const router = useRouter();

  // State Management
  const [isFetchingSubs, setIsFetchingSubs] = useState(true);
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tokenPairs, setTokenPairs] = useState<TokenPair[]>([]);
  const [selectedTokenPair] = useState<TokenPair | undefined>(undefined);
  // const [tokenSelected, setTokenSelected] = useState<
  //   { coinName: string; contractAddress: `0x${string}` } | undefined
  // >(undefined);

  // Contract write utility
  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [swappr_contract_address, 0],
    ERC20_ABI,
    strk_token_contract_address
  );

  // Fetch subscriptions
  useEffect(() => {
    if (!address) return;

    const fetchData = async () => {
      setIsFetchingSubs(true);
      try {
        const subs = await fetchSubscriptions(address);
        if (!subs?.data?.length) {
          router.push("/subscribe");
          return;
        }
        setTokenPairs([
          {
            id: 1,
            from: { name: "Starknet", symbol: "STRK", logo: strk },
            to: { name: "Tether", symbol: "USDT", logo: usdt },
            amount: subs.data[0].swap_amount,
            enabled: false,
            edit: false,
            delete: false,
          },
        ]);
      } catch (err) {
        console.error("Error fetching subscriptions:", err);
      } finally {
        setIsFetchingSubs(false);
      }
    };

    fetchData();
  }, [address, router]);

  // Handle Subscription Deletion
  useEffect(() => {
    if (!waitData || !address) return;

    const deleteSub = async () => {
      try {
        await deleteSubscription({
          wallet_address: address,
          from_token: strk_token_contract_address,
        });
        router.push("/subscribe");
      } catch (err) {
        console.error("Error deleting subscription:", err);
      }
    };

    deleteSub();
  }, [waitData, address, router]);

  // Handle Unsubscription
  const handleUnsubscribe = async () => {
    try {
      await writeAsync();
    } catch (err) {
      console.error("Unsubscription error:", err);
    }
  };

  // Table Columns Definition
  const columns: ColumnDef<TokenPair>[] = [
    {
      header: "From",
      accessorKey: "from",
      cell: (info, index) => (
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold text-[#4C5053]">
            {(index as number) + 1}.
          </p>
          <Image
            src={info.from.logo || "/placeholder.svg"}
            alt={info.from.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              {info.from.name}
            </span>
            <span className="text-xs text-gray-500">{info.from.symbol}</span>
          </div>
        </div>
      ),
    },
    {
      header: "To",
      accessorKey: "to",
      cell: (info) => (
        <div className="flex items-center gap-3">
          <Image
            src={info.to.logo || "/placeholder.svg"}
            alt={info.to.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
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
        <span className="text-sm text-white">
          {info.amount} {info.from.symbol}
        </span>
      ),
    },
    {
      header: "",
      accessorKey: "delete",
      cell: () => (
        <button
          className="text-sm font-semibold text-[#A8AFB4] uppercase underline"
          onClick={handleUnsubscribe}
        >
          UNSUBSCRIBE
        </button>
      ),
    },
  ];

  return (
    <div className="bg-main-bg bg-center bg-cover bg-no-repeat h-screen pt-[100px] md:pt-[150px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
      {isFetchingSubs ? (
        <div className="flex justify-center items-center h-full spinner">
          <LoaderCircle size={100} />
        </div>
      ) : (
        <>
          <LockBodyScroll lock={isEditing || isAddingToken} />
          {isEditing || isAddingToken
            ? createPortal(
                <Modal
                  isOpen
                  handleClose={() => {
                    setIsEditing(false);
                    setIsAddingToken(false);
                  }}
                >
                  <SubscribeForm
                    tokenPair={selectedTokenPair}
                    onClose={() => {
                      setIsEditing(false);
                      setIsAddingToken(false);
                    }}
                    hasCloseButton
                  />
                </Modal>,
                document.body
              )
            : null}
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row items-start justify-between w-full">
              <PageHeading
                title="Autoswappr Overview"
                subTitle="List of all the tokens subscribed for auto-swapping to a stable token."
              />
              {/* <button
                className="btn-primary flex items-center gap-2"
                onClick={() => setIsAddingToken(true)}
              >
                <Plus size={20} /> Add Tokens
              </button> */}
            </div>
            <Table columns={columns} data={tokenPairs} />
          </div>
          <GiveFeedback />
        </>
      )}
    </div>
  );
}
