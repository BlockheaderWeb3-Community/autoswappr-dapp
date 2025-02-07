import {
  strk_token_contract_address,
  usdt_token_contract_address,
} from "./addresses";
import { Coin } from "./types";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "AutoSwap", href: "/overview" },
  { title: "Activity", href: "/activity" },
  { title: "Dex", href: "/dex" },
];

export const supportedTokens: Coin[] = [
  {
    key: "starknet",
    imgLink: "/coin-logos/strk-logo.svg",
    coinName: "Starknet",
    coinSymbol: "STRK",
    contractAddress: strk_token_contract_address,
    decimals: 18,
  },
  {
    key: "ethereum",
    imgLink: "/coin-logos/eth-logo.svg",
    coinName: "Ethereum",
    coinSymbol: "ETH",
    contractAddress:
      "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    decimals: 18,
  },
  {
    key: "donkey",
    imgLink: "/coin-logos/strk-logo.svg",
    coinName: "Donkey",
    coinSymbol: "DONKEY",
    contractAddress: "0x0",
    decimals: 18,
  },
  {
    key: "slinky",
    imgLink: "/coin-logos/strk-logo.svg",
    coinName: "Slinky",
    coinSymbol: "SLINK",
    contractAddress:
      "0x013ff4e86fa3e7286cc5c64b62f4099cf41e7918d727d22a5109ecfd00274d19",
    decimals: 18,
  },
  {
    key: "starknet-brother",
    imgLink: "/coin-logos/strk-logo.svg",
    coinName: "Starknet Brother",
    coinSymbol: "BROTHER",
    contractAddress: "0x0",
    decimals: 18,
  },
];

export const quoteTokens: Coin[] = [
  {
    key: "usdt",
    imgLink: "/coin-logos/usdt-logo.svg",
    coinName: "USDT",
    coinSymbol: "USDT",
    contractAddress: "0x0",
    decimals: 18,
  },
  {
    key: "usdc",
    imgLink: "/coin-logos/usdc-logo.svg",
    coinName: "USDC",
    coinSymbol: "USDC",
    contractAddress: "0x0",
    decimals: 18,
  },
];

export const STRK_TOKEN: Coin = {
  key: "starknet",
  imgLink: "/coin-logos/strk-logo.svg",
  coinName: "Starknet",
  coinSymbol: "STRK",
  contractAddress: strk_token_contract_address,
  decimals: 18,
};

export const USDT_TOKEN: Coin = {
  key: "usdt",
  imgLink: "/coin-logos/usdt-logo.svg",
  coinName: "Tether",
  coinSymbol: "USDT",
  contractAddress: usdt_token_contract_address,
  decimals: 18,
};
