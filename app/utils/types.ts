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
  amount: number;
  enabled: boolean;
}
