/* eslint-disable @typescript-eslint/no-explicit-any */
import {
<<<<<<< HEAD
  useAccount,
  useContract,
  useSendTransaction,
  useReadContract,
=======
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
>>>>>>> 63448a6afb6f573fbd5a6f03c62332d8708733a3
} from "@starknet-react/core";
import { useMemo } from "react";

<<<<<<< HEAD
const ApproveTokens = (
  contractAddress: `0x${string}`,
  spender: `0x${string}`,
  amount: bigint,
) => {
  const { account, address } = useAccount();

  // Contract Initialization
  const { contract } = useContract({
    abi: [
      {
        type: "function",
        name: "approve",
        inputs: [
          {
            name: "spender",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
    ],
    address: contractAddress,
    provider: account,
  });

  const { isError, error, send, data, isPending } = useSendTransaction({
    calls:
      contract && address
        ? [contract.populate("approve", [spender, cairo.uint256(amount)])]
        : undefined,
  });

  try {
    if (!amount || !spender || !contractAddress) {
      return;
    }

    send();

    return { data, isPending, isError, error };
  } catch (error) {
    console.error("Error calling approve:", error);
    throw error;
  }
};

// func to get approved amount
const GetApprovedAmount = (
  contractAddress: `0x${string}`,
  spender: `0x${string}`,
) => {
  const { address } = useAccount();

  const { data, error } = useReadContract({
    abi: [
      {
        type: "function",
        name: "allowance",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "spender",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
    ],
    functionName: "allowance",
    address: contractAddress,
    args: [address, spender],
  });

  return { data, error };
};

export { GetApprovedAmount, ApproveTokens };
=======
export function useContractFetch(
  abi: any,
  functionName: string,
  address: `0x${string}`,
  args: any[] = []
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
  contract_address: `0x${string}`
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
>>>>>>> 63448a6afb6f573fbd5a6f03c62332d8708733a3
