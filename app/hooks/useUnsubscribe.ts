import { useEffect } from "react";
import { deleteSubscription, useContractWriteUtility } from "../utils/helper";
import {
  strk_token_contract_address,
  swappr_contract_address,
} from "../utils/addresses";
import { ERC20_ABI } from "../abis/erc20-abi";
import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/navigation";

export default function useUnsubscribe() {
  const { address } = useAccount();
  const router = useRouter();
  const { waitData, writeAsync } = useContractWriteUtility(
    "approve",
    [swappr_contract_address, 0],
    ERC20_ABI,
    strk_token_contract_address,
  );

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

  const handleUnsubscribe = async () => {
    try {
      await writeAsync();
    } catch (err) {
      console.error("Unsubscription error:", err);
    }
  };
  return {
    handleUnsubscribe,
    waitData,
  };
}
