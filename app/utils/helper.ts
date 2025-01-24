/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useContract,
  useReadContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import { useMemo } from "react";

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
