import React, { useCallback, useEffect, useState } from "react";
import { EditIcon } from "lucide-react";
import { createSubscription, useContractWriteUtility } from "../utils/helper";
import { swappr_contract_address } from "../utils/addresses";
import { STRK_TOKEN, USDT_TOKEN } from "../utils/data";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/navigation";
import GrantPermission from "./ui/modals/grant-permission-modal";
import GenericModal from "./generic-modal";

export default function ChangeAutoswapSettings({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const { address } = useAccount();
  const router = useRouter();
  const [newSwapAmount, setNewSwapAmount] = useState("");
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);

  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [
      swappr_contract_address,
      newSwapAmount
        ? BigInt(newSwapAmount) * BigInt(10 ** STRK_TOKEN.decimals)
        : BigInt(0),
    ],
    ERC20_ABI,
    STRK_TOKEN.contractAddress
  );

  useEffect(() => {
    if (!waitData || !address) return;

    const subscribe = async () => {
      try {
        await createSubscription({
          wallet_address: address,
          to_token: USDT_TOKEN.contractAddress,
          from_token: STRK_TOKEN.contractAddress,
          swap_amount: Number(newSwapAmount),
        });
        setIsPermissionModalOpen(false);
        router.push("/overview");
      } catch (error) {
        console.error("Subscription error:", error);
      }
    };

    subscribe();
  }, [waitData, address, router, newSwapAmount]);

  const handleSubscribe = useCallback(async () => {
    try {
      await writeAsync();
    } catch (error) {
      console.error("Error approving swap:", error);
    }
  }, [writeAsync]);
  return (
    <>
      <GrantPermission
        onOpenChange={() => setIsPermissionModalOpen((prev) => !prev)}
        open={isPermissionModalOpen}
        handleSubmit={handleSubscribe}
      />

      <GenericModal handleClose={handleClose} containerClass="md:w-[552px]">
        <h2 className="text-lg text-left font-semibold text-[#F3F5FF] mb-[64px]">
          Change Autoswap Settings
        </h2>
        <div className="flex flex-col gap-y-6 text-left">
          <div>
            <p className="mb-3 text-[#CBCFD2] text-sm">
              Current threshold amount:
            </p>
            <div className="bg-[#0B0F16] py-[14px] flex gap-x-2 justify-center items-center text-xl font-semibold text-[#7E8489] rounded-xl">
              <img src="/coin-logos/strk-logo.svg" className="w-6 h-6" alt="" />
              3000 STRK
            </div>
          </div>

          <div>
            <p className="mb-3 text-[#CBCFD2] text-sm">
              Input the new threshold you want to autoswap
            </p>
            <div className="relative bg-[#0D1016] px-4 py-3 flex items-center justify-between w-full rounded-[8px] text-[#7E8489]">
              <input
                type="number"
                name="amount"
                className="bg-transparent w-full text-[14px] p-1 placeholder:text-grey-900 text-white border-none focus:outline-none"
                placeholder="e.g.: 294839 STRK"
                value={newSwapAmount}
                onChange={(e) => setNewSwapAmount(e.target.value)}
                required
              />
              <EditIcon size={14} />
            </div>
          </div>
        </div>
        <button
          type="submit"
          id="submit"
          className="disabled:bg-[#0D1016] bg-[#1D8CF4] border-[#1E2021] border-[1px] text-base text-[#F3F5FF] py-3 w-full rounded-lg font-semibold mt-12 disabled:cursor-not-allowed transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
          disabled={!newSwapAmount || !Number(newSwapAmount)}
          onClick={(e) => {
            e.preventDefault();
            if (newSwapAmount && Number(newSwapAmount)) {
              setIsPermissionModalOpen(true);
            }
          }}
        >
          Apply
        </button>
      </GenericModal>
    </>
  );
}
