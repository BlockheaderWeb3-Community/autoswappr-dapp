import { strk_token_contract_address } from "./addresses";
import { Coin } from "./types";

export const supportedTokens: Coin[] = [
  {
    key: "starknet",
    imgLink: "/StarknetIcon.svg",
    coinName: "Starknet",
    coinSymbol: "STRK",
    contractAddress: strk_token_contract_address,
    decimals: 18,
  },
  {
    key: "ethereum",
    imgLink: "/EthereumLogo.svg",
    coinName: "Ethereum",
    coinSymbol: "ETH",
    contractAddress:
      "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    decimals: 18,
  },
  {
    key: "donkey",
    imgLink: "/StarknetIcon.svg",
    coinName: "Donkey",
    coinSymbol: "DONKEY",
    contractAddress: "0x0",
    decimals: 18,
  },
  {
    key: "slinky",
    imgLink: "/StarknetIcon.svg",
    coinName: "Slinky",
    coinSymbol: "SLINK",
    contractAddress:
      "0x013ff4e86fa3e7286cc5c64b62f4099cf41e7918d727d22a5109ecfd00274d19",
    decimals: 18,
  },
  {
    key: "starknet-brother",
    imgLink: "/StarknetIcon.svg",
    coinName: "Starknet Brother",
    coinSymbol: "BROTHER",
    contractAddress: "0x0",
    decimals: 18,
  },
];
