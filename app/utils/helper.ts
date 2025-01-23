import { cairo } from "starknet";
import {
  useAccount,
  useContract,
  useSendTransaction,
  useReadContract,
} from "@starknet-react/core";

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
