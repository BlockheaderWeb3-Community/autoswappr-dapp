import { EllipsisVertical, ExternalLink } from "lucide-react";
import React from "react";
import Table, { ColumnDef } from "../components/table.beta";
import Image, { StaticImageData } from "next/image";
import { TokenPair } from "../utils/types";
import usdt from "../../public/coin-logos/usdc-logo.svg";
import strk from "../../public/coin-logos/strk-logo.svg";

export default function TranscationHistory() {
  const tokenPairs = [
    {
      id: 1,
      from: { name: "Starknet", symbol: "STRK", logo: strk },
      to: { name: "Tether", symbol: "USDT", logo: usdt },
      timestamp: "10.09.2024 GMT 21:08 PM",
      amount: 30,
      enabled: false,
      edit: false,
      delete: false,
    },
  ];
  const columns: ColumnDef<TokenPair>[] = [
    {
      header: "From",
      accessorKey: "from",
      cell: ({ from }, index) => (
        <div className="flex items-center gap-3">
          <p className="text-xs font-semibold text-[#4C5053]">
            {(index as number) + 1}.
          </p>
          <TokenCell logo={from.logo} name={from.name} symbol={from.symbol} />
        </div>
      ),
    },
    {
      header: "To",
      accessorKey: "to",
      cell: ({ to }) => (
        <TokenCell logo={to.logo} name={to.name} symbol={to.symbol} />
      ),
    },
    {
      header: "Amount",
      accessorKey: "amount",
      cell: (info) => (
        <span className="text-sm text-white">
          {info.amount} {info.from.symbol}
        </span>
      ),
    },
    {
      header: "Timestamp",
      accessorKey: "timestamp",
      cell: (info) => (
        <span className="text-sm text-white">
          {info.timestamp.slice(0, 10)} <br /> {info.timestamp.slice(11)}
        </span>
      ),
    },
    {
      header: "",
      accessorKey: "delete",
      cell: () => (
        <button
          className="text-sm font-semibold text-[#A8AFB4] uppercase underline"
          //   onClick={handleUnsubscribe}
        >
          <EllipsisVertical />
        </button>
      ),
    },
  ];
  const transcationCount = 1;
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-base text-[#BABFC3]">Transaction History</h4>
        <button className="text-[#4C5053] text-sm flex gap-x-2 items-center">
          <ExternalLink size={14} />
          View in explorer
        </button>
      </div>

      {!transcationCount ? (
        <NoHistory />
      ) : (
        <Table columns={columns} data={tokenPairs} />
      )}
    </div>
  );
}

function NoHistory() {
  return (
    <div className="border-[#2C3035] border-[1px] bg-[#02060D1F] backdrop-blur-sm py-[150px] text-center rounded-2xl">
      <h3 className="text-[#7E8489] text-xl font-semibold">
        No Transaction History Yet
      </h3>
      <p className="text-[#F3F5FF] text-sm mt-4 max-w-[430px] mx-auto">
        Once you receive STRK tokens and your subscription is converted, your
        history will show up here.
      </p>
    </div>
  );
}

function TokenCell({
  logo,
  name,
  symbol,
}: {
  logo: StaticImageData;
  name: string;
  symbol: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={logo}
        alt={name}
        width={32}
        height={32}
        className="h-8 w-8 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs text-gray-500">{symbol}</span>
      </div>
    </div>
  );
}
