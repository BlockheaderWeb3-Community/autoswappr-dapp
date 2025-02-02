"use client";
import Image from "next/image";
import btc from "../../public/coin-logos/btc-logo.svg";
import eth from "../../public/coin-logos/eth-logo.svg";
import strk from "../../public/coin-logos/strk-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import usdt from "../../public/coin-logos/usdt-logo.svg";
import sol from "../../public/coin-logos/sol-logo.svg";
import graph from "../../public/coin-logos/graph-logo.svg";
import Table, { ColumnDef } from "./table.beta";
import PageHeading from "./page-heading";

interface ActivityLog {
  from: {
    fromImage: string;
    toImage: string;
    coinFrom: string;
    coinTo: string;
  };
  to: {
    coinTo: string;
    coinToAmount: number;
    coinFrom: string;
    coinFromAmount: number;
  };
  percentage: number;
  date: {
    day: string;
    time: string;
  };
}

const columns: ColumnDef<ActivityLog>[] = [
  {
    header: "From",
    accessorKey: "from",
    cell: (info, index) => (
      <div className="flex items-center gap-3">
        <p className="text-[#4C5053] text-xs text-[16px] font-semibold">
          {(index as number) + 1}.
        </p>
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={info.from.fromImage || "/placeholder.svg"}
            alt={info.from.coinFrom}
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white capitalize">
            {info.from.coinFrom}
          </span>
          <span className="text-xs text-gray-500">{info.to.coinFrom}</span>
        </div>
      </div>
    ),
  },
  {
    header: "To",
    accessorKey: "to",
    cell: (info) => (
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={info.from.toImage || "/placeholder.svg"}
            alt={info.from.coinTo}
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">
            {info.from.coinTo}
          </span>
          <span className="text-xs text-gray-500">{info.to.coinTo}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Amount",
    accessorKey: "to",
    cell: (info) => (
      <div className="flex flex-col">
        <span className="text-sm text-white">
          {info.to.coinFromAmount} {info.to.coinFrom}
        </span>
        <span className="text-xs text-gray-500">
          {info.to.coinToAmount} {info.to.coinTo}
        </span>
      </div>
    ),
  },
  {
    header: "Timestamp",
    accessorKey: "date",
    cell: (info) => (
      <div className="flex flex-col">
        <span className="text-sm text-white">{info.date.day}</span>
        <span className="text-xs text-gray-500">{info.date.time}</span>
      </div>
    ),
  },
];

const dummyActivites: ActivityLog[] = [
  {
    from: {
      fromImage: btc,
      toImage: usdc,
      coinFrom: "bitcoin",
      coinTo: "USDC",
    },
    to: {
      coinTo: "USDC",
      coinToAmount: 1220,
      coinFrom: "BTC",
      coinFromAmount: 0.34421,
    },
    percentage: 29,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: btc,
      toImage: usdt,
      coinFrom: "bitcoin",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 30,
      coinFrom: "BTC",
      coinFromAmount: 900,
    },
    percentage: 79,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: graph,
      toImage: usdt,
      coinFrom: "the graph",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 30,
      coinFrom: "GRT",
      coinFromAmount: 200,
    },
    percentage: 90,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: strk,
      toImage: usdc,
      coinFrom: "starknet",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 30,
      coinFrom: "STRK",
      coinFromAmount: 900,
    },
    percentage: 100,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: eth,
      toImage: usdc,
      coinFrom: "ethereum",
      coinTo: "USDC",
    },
    to: {
      coinTo: "USDC",
      coinToAmount: 2500,
      coinFrom: "ETH",
      coinFromAmount: 0.7,
    },
    percentage: 29,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: sol,
      toImage: usdt,
      coinFrom: "solana",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 300,
      coinFrom: "SOL",
      coinFromAmount: 10,
    },
    percentage: 79,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: sol,
      toImage: usdt,
      coinFrom: "solana",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 300,
      coinFrom: "SOL",
      coinFromAmount: 10,
    },
    percentage: 79,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: btc,
      toImage: usdc,
      coinFrom: "bitcoin",
      coinTo: "USDC",
    },
    to: {
      coinTo: "USDC",
      coinToAmount: 1220,
      coinFrom: "BTC",
      coinFromAmount: 0.34421,
    },
    percentage: 29,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
];

export default function ActivityLog() {
  return (
    <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-[120vh] h-[150vh] pt-[100px] md:pt-[150px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
      <PageHeading
        title="Autoswappr Activity Log"
        subTitle="These are a list of all AutoSwap activities."
      />
      <div className="md:pr-[152px] mt-10">
        <Table data={dummyActivites} columns={columns} />
      </div>
    </div>
  );
}
