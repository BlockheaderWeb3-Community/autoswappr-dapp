/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import { useMemo } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function useContractFetch(
  abi: any,
  functionName: string,
  address: `0x${string}`,
  args: any[] = [],
) {
  const { data, isLoading, refetch, isFetching, error } = useReadContract({
    abi: abi,
    functionName: functionName,
    address: address,
    args: args,
  });

  return { data, isLoading, refetch, isFetching, error };
}

export function useContractWriteUtility(
  functionName: string,
  args: any[],
  abi: any,
  contract_address: `0x${string}`,
) {
  const { contract } = useContract({ abi, address: contract_address });

  const calls = useMemo(() => {
    if (
      !contract ||
      !args ||
      args.some((arg) => arg === undefined || arg === null)
    ) {
      return undefined;
    }

    return [contract.populate(functionName, args)];
  }, [contract, functionName, args]);

  const {
    sendAsync: writeAsync,
    data: writeData,
    isPending: writeIsPending,
    error,
  } = useSendTransaction({ calls });

  const { isLoading: waitIsLoading, data: waitData } = useTransactionReceipt({
    hash: writeData?.transaction_hash,
    watch: true,
  });

  return {
    writeAsync,
    writeData,
    writeIsPending,
    waitIsLoading,
    waitData,
    calls,
    error,
  };
}

export async function fetchSubscriptions(address: `0x${string}`) {
  console.log("fetching subs");
  const url = `https://autoswappr-backend.onrender.com/subscriptions?wallet_address=${address}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return null;
  }
}

export async function createSubscription(data: {
  wallet_address: `0x${string}`;
  to_token: `0x${string}`;
  from_token: `0x${string}`;
  swap_amount: number;
}) {
  console.log(JSON.stringify(data));
  try {
    const response = await fetch(
      "https://autoswappr-backend.onrender.com/subscriptions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Subscription created:", result);
  } catch (error) {
    console.error("Error creating subscription:", error);
  }
}

export async function deleteSubscription(data: {
  wallet_address: `0x${string}`;
  from_token: `0x${string}`;
}) {
  try {
    const response = await fetch(
      "https://autoswappr-backend.onrender.com/unsubscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Subscription created:", result);
  } catch (error) {
    console.error("Error deleting subscription:", error);
  }
}
