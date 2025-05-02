"use client";
import TransactionTable, {
  type ColumnDef,
} from "../components/transaction-table.beta";
import Image from "next/image";
import { useEffect, useRef } from "react";
import explorer from "../../public/explorer.svg";
import strk from "../../public/coin-logos/strk-logo.svg";
import usdt from "../../public/coin-logos/usdt-logo.svg";
interface DexHistoryProps {
  length?: number;
}

interface Transaction {
  from_to?: null;
  from: {
    fullname: string;
    shortname: string;
    image: string;
  };
  to: {
    fullname: string;
    shortname: string;
    image: string;
  };
  amount: {
    from: number;
    to: number;
  };
  date: {
    day: string;
    time: string;
  };
}

export default function DexHistory({ length = 0 }: DexHistoryProps) {
  const tableRef = useRef<HTMLTableElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const columns: ColumnDef<Transaction>[] = [
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
              src={info.from.image || "/placeholder.svg"}
              alt={info.from.shortname}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm text-left font-medium text-white capitalize">
              {info.from.fullname}
            </span>
            <span className="text-xs text-left text-gray-500 uppercase">
              {info.from.shortname}
            </span>
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
              src={info.to.image || "/placeholder.svg"}
              alt={info.to.shortname}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm text-left font-medium text-white">
              {info.to.fullname}
            </span>
            <span className="text-xs text-left text-gray-500">
              {info.to.shortname}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "Amount",
      accessorKey: "to",
      cell: (info) => (
        <div className="flex flex-col text-left">
          <span className="text-sm text-white">
            {info.amount.from} {info.from.shortname}
          </span>
          <span className="text-xs text-gray-500">
            {info.amount.to} {info.to.shortname}
          </span>
        </div>
      ),
    },
    {
      header: "Timestamp",
      accessorKey: "date",
      cell: (info) => (
        <div className="flex flex-col text-left">
          <span className="text-sm text-white">{info.date.day}</span>
          <span className="text-xs text-gray-500">{info.date.time}</span>
        </div>
      ),
    },
  ];

  const mobile_columns: ColumnDef<Transaction>[] = [
    {
      header: "From . To",
      accessorKey: "from_to",
      cell: (info, index) => (
        <div className="flex items-center gap-0 relative">
          <p className="text-[#4C5053] pr-3 text-xs text-[16px] font-semibold">
            {(index as number) + 1}.
          </p>
          <div className="h-6 w-6 z-0 overflow-hidden rounded-full">
            <Image
              src={info.from.image || "/placeholder.svg"}
              alt={info.from.shortname}
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="left-0 -right-3 z-1 h-6 w-6 overflow-hidden rounded-full">
            <Image
              src={info.to.image || "/placeholder.svg"}
              alt={info.to.shortname}
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      header: "Amount",
      accessorKey: "to",
      cell: (info) => (
        <div className="flex flex-col text-left">
          <span className="text-xs text-white">
            {info.amount.from} {info.from.shortname}
          </span>
          <span className="text-[12px] text-gray-500">
            {info.amount.to} {info.to.shortname}
          </span>
        </div>
      ),
    },
    {
      header: "Timestamp",
      accessorKey: "date",
      cell: (info) => (
        <div className="flex flex-col text-left">
          <span className="text-xs text-white">{info.date.day}</span>
          <span className="text-[12px] text-gray-500">{info.date.time}</span>
        </div>
      ),
    },
  ];

  const transactions: Transaction[] = [
    {
      from: {
        fullname: "Starknet",
        shortname: "STRK",
        image: strk,
      },
      to: {
        fullname: "Tether",
        shortname: "USDT",
        image: usdt,
      },
      amount: {
        from: 3000,
        to: 809,
      },
      date: {
        day: "10.09.2024",
        time: "GMT 21:08 PM",
      },
    },
    {
      from: {
        fullname: "Starknet",
        shortname: "STRK",
        image: strk,
      },
      to: {
        fullname: "Tether",
        shortname: "USDT",
        image: usdt,
      },
      amount: {
        from: 3000,
        to: 809,
      },
      date: {
        day: "10.09.2024",
        time: "GMT 21:08 PM",
      },
    },
    {
      from: {
        fullname: "Starknet",
        shortname: "STRK",
        image: strk,
      },
      to: {
        fullname: "Tether",
        shortname: "USDT",
        image: usdt,
      },
      amount: {
        from: 3000,
        to: 809,
      },
      date: {
        day: "10.09.2024",
        time: "GMT 21:08 PM",
      },
    },
    {
      from: {
        fullname: "Starknet",
        shortname: "STRK",
        image: strk,
      },
      to: {
        fullname: "Tether",
        shortname: "USDT",
        image: usdt,
      },
      amount: {
        from: 3000,
        to: 809,
      },
      date: {
        day: "10.09.2024",
        time: "GMT 21:08 PM",
      },
    },
    {
      from: {
        fullname: "Starknet",
        shortname: "STRK",
        image: strk,
      },
      to: {
        fullname: "Tether",
        shortname: "USDT",
        image: usdt,
      },
      amount: {
        from: 3000,
        to: 809,
      },
      date: {
        day: "10.09.2024",
        time: "GMT 21:08 PM",
      },
    },
  ];
  return (
    <>
      <div className="py-12 px-4 sm:px-8 md:px-12 w-full sm:w-[90%] md:w-[80%] xl:w-[75%] mx-auto flex items-center justify-center h-auto">
        <div className="w-full flex flex-col space-y-8 items-start justify-start">
          <div className="w-full flex flex-row items-center justify-between space-x-2">
            <div className="flex flex-none text-zinc-300 font-normal text-sm sm:text-md">
              Transaction History
            </div>
            <div className="w-full flex flex-row items-center justify-end space-x-2">
              <Image
                src={explorer}
                alt="explorer icon"
                width={20}
                height={20}
                className="h-[20px] w-[20px] object-cover"
              />
              <div className="text-zinc-700 font-normal text-xs sm:text-sm flex-none">
                View in explorer
              </div>
            </div>
          </div>
          {length ? (
            <div className="w-full">
              <div className="hidden md:block w-full">
                <TransactionTable data={transactions} columns={columns} />
              </div>
              <div className="block md:hidden w-full">
                <TransactionTable
                  data={transactions}
                  columns={mobile_columns}
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center space-y-3 mx-auto py-32 px-4 rounded-xl border border-zinc-800">
              <h1 className="text-xl sm:text-2xl font-semibold text-zinc-400">
                No Transaction History Yet
              </h1>
              <p className="w-full text-center max-w-[240px] text-xs sm:text-sm font-normal text-white">
                Once you receive STRK tokens and your subscription is converted,
                your history will show up here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
