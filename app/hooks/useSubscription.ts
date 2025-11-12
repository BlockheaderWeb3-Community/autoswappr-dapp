// hooks/useSubscription.ts
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "@starknet-react/core";
import { STRK_TOKEN, USDT_TOKEN } from "../utils/data";
import { swappr_contract_address } from "../utils/addresses";
import { STRK_TOKEN_ABI } from "../abis/strk-abi";
import { createSubscription, useContractWriteUtility } from "../utils/helper";

interface UseSubscriptionOptions {
  onSuccess?: () => void;
}

export function useSubscription(
  swapAmount: string,
  options?: UseSubscriptionOptions
) {
  const { address } = useAccount();
  const router = useRouter();
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const onSuccess = options?.onSuccess;

  const { writeAsync, waitData } = useContractWriteUtility(
    "approve",
    [
      swappr_contract_address,
      swapAmount
        ? BigInt(swapAmount) * BigInt(10 ** STRK_TOKEN.decimals)
        : BigInt(0),
    ],
    STRK_TOKEN_ABI,
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
          swap_amount: Number(swapAmount),
        });
        setIsPermissionModalOpen(false);
        if (onSuccess) {
          onSuccess();
        } else {
          router.push("/overview");
        }
      } catch (error) {
        console.error("Subscription error:", error);
      }
    };

    subscribe();
  }, [waitData, address, router, swapAmount, onSuccess]);

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
