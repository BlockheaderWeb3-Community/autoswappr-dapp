// @typescript-eslint/no-explicit-any
import { StaticImageData } from "next/image";

export type Coin = {
  key: string;
  imgLink: string;
  coinName: string;
  coinSymbol: string;
  contractAddress: `0x${string}`;
  decimals: number;
};

export interface TokenPair {
  id: number;
  from: { name: string; symbol: string; logo: StaticImageData };
  to: { name: string; symbol: string; logo: StaticImageData };
  timestamp: string;
  amount: number;
  enabled?: boolean;
  edit?: boolean;
  delete?: boolean;
}
