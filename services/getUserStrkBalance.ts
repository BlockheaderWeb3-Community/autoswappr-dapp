import { Account, Contract, RpcProvider } from "starknet";
import { STRK_TOKEN_ABI } from "@/app/abis/strk-abi";
import { strk_token_contract_address } from "@/app/utils/addresses";

export async function getUserStrkBalance(address: any, account: any) {
  const contract = new Contract({
    abi: STRK_TOKEN_ABI,
    address: strk_token_contract_address,
    providerOrAccount: account,
  });
  try {
    const balance = await contract.balanceOf(address);
    return Number(balance) / Math.pow(10, 18);
  } catch (error: any) {
    console.error("Error fetching user STRK balance:", error);
    throw new Error(error.message || "Failed to fetch STRK balance");
  }
}
