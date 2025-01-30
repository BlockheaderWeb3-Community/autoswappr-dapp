"use client"
import Image from "next/image";
import btc from "../../public/coin-logos/btc-logo.svg";
import eth from "../../public/coin-logos/eth-logo.svg";
import strk from "../../public/coin-logos/strk-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import usdt from "../../public/coin-logos/usdt-logo.svg";
import Table, { ColumnDef } from "./table.beta";

interface ActivityLog {
  from: {
    img: string
    name: string
    symbol: string
    amount: number
  }
  to: {
    img: string
    name: string
    symbol: string
    amount: number
  }
  percentage: number
  date: {
    day: string
    time: string
  }
}

const columns: ColumnDef<ActivityLog>[] = [
  {
    header: "From",
    accessorKey: "from",
    cell: (info, index) => (
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-500">{index as number + 1}.</span>
        <div className="relative flex items-center">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image width={32}
              height={32} src={info.from.img || "/placeholder.svg"} alt={info.from.name} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-6 h-10 w-10 overflow-hidden rounded-full">
            <Image width={32}
              height={32} src={info.to.img || "/placeholder.svg"} alt={info.to.name} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="ml-4 pl-2 flex flex-col">
          <span className="text-lg font-medium text-white">{info.from.name}</span>
          <span className="text-sm text-indigo-400">{info.to.symbol}</span>
        </div>
      </div>
    ),
  },
  {
    header: "To",
    accessorKey: "to",
    cell: (info) => (
      <div className="flex flex-col">
        <span className="text-sm text-white">
          {info.from.amount} {info.from.symbol}
        </span>
        <span className="text-xs text-gray-500">
          {info.to.amount} {info.to.symbol}
        </span>
      </div>
    ),
  },
  {
    header: "Percentage",
    accessorKey: "percentage",
    cell: (info) => (
      <div className="w-24 h-12 bg-[#100827] rounded-full justify-center items-center gap-0.5 inline-flex">
        <div className="text-[#f9f9f9] text-sm font-semibold uppercase">{info.percentage}%</div>
      </div>
    ),
  },
  {
    header: "Date/Time",
    accessorKey: "date",
    cell: (info) => (
      <div className="flex flex-col">
        <span className="text-sm text-white">{info.date.day}</span>
        <span className="text-xs text-gray-500">{info.date.time}</span>
      </div>
    ),
  }
];

const dummyActivites: ActivityLog[] = [
  {
    from: {
      img: strk,
      name: "STARKNET",
      symbol: "STRK",
      amount: 0.0002,
    },
    to: {
      img: usdc,
      name: "USDC",
      symbol: "USDC",
      amount: 1220,
    },
    percentage: 25,
    date: {
      day: "10.09.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      img: eth,
      name: "Ethereum",
      symbol: "ETH",
      amount: 0.0002,
    },
    to: {
      img: usdt,
      name: "USDT",
      symbol: "USDT",
      amount: 900,
    },
    percentage: 75,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      img: btc,
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.0002,
    },
    to: {
      img: usdt,
      name: "USDT",
      symbol: "USDT",
      amount: 900,
    },
    percentage: 75,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
];

const ActivityLog = () => {
  return (
    <>
      <section className="relative bg-cover bg-main-bg bg-center bg-no-repeat pt-[100px] md:pt-[147px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
        <div className="w-full max-w-[936px] flex flex-col gap-6 mb-12 mx-auto">
          <div>
          <h1 className="capitalize text-white text-xl md:text-2xl py-0 my-0 text-main-white font-semibold">
            Autoswappr Activity Log
          </h1>
          <p className="w-full text-[#a199b8] text-base font-normal">These are a list of all AutoSwap activities.</p>
          </div>
          <Table data={dummyActivites} columns={columns} />
        </div>
      </section>
    </>
  );
};
export default ActivityLog;
