// hooks/useSubscription.ts
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import { STRK_TOKEN, USDT_TOKEN } from "../utils/data";
import { swappr_contract_address } from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { createSubscription, useContractWriteUtility } from "../utils/helper";

export function useSubscription(swapAmount: string) {
  const { address } = useAccount();
  const router = useRouter();
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);

  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [
      swappr_contract_address,
      swapAmount
        ? BigInt(swapAmount) * BigInt(10 ** STRK_TOKEN.decimals)
        : BigInt(0),
    ],
    ERC20_ABI,
    STRK_TOKEN.contractAddress,
  );

  useEffect(() => {
    if (!waitData || !address) return;

    const subscribe = async () => {
      try {
        await createSubscription({
          wallet_address: address,
          to_token: USDT_TOKEN.contractAddress,
          from_token: STRK_TOKEN.contractAddress,
          swap_amount: Number(swapAmount),
        });
        setIsPermissionModalOpen(false);
        router.push("/overview");
      } catch (error) {
        console.error("Subscription error:", error);
      }
    };

    subscribe();
  }, [waitData, address, router, swapAmount]);

  const handleSubscribe = useCallback(async () => {
    try {
      await writeAsync();
    } catch (error) {
      console.error("Error approving swap:", error);
    }
  }, [writeAsync]);

  return {
    isPermissionModalOpen,
    setIsPermissionModalOpen,
    handleSubscribe,
  };
}
