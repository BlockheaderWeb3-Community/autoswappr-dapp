"use client"

import { useEffect, useRef } from "react";
import Table, { type ColumnDef } from "../components/table.beta";
import Image from "next/image";
import { history } from "@/constants/history";

interface Transaction {
  from: {
    fromImage: string
    toImage: string
    coinFrom: string
    coinTo: string
  }
  to: {
    coinTo: string
    coinToAmount: number
    coinFrom: string
    coinFromAmount: number
  }
  percentage: number
  date: {
    day: string
    time: string
  }
}

export default function History() {
  const tableRef = useRef<HTMLTableElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const columns: ColumnDef<Transaction>[] = [
    {
      header: "From",
      accessorKey: "from",
      cell: (info, index) => (
        <div className="flex items-center gap-3">
          <p className="text-[#4C5053] text-xs text-[16px] font-semibold">{index as number + 1}.</p>
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
            <span className="text-sm font-medium text-white capitalize">{info.from.coinFrom}</span>
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
            <span className="text-sm font-medium text-white">{info.from.coinTo}</span>
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
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (tableRef.current && containerRef.current) {
        const tableWidth = tableRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        if (tableWidth > containerWidth) {
          tableRef.current.style.width = `${tableWidth}px`;
        } else {
          tableRef.current.style.width = '100%';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRowClick = (row: Transaction) => {
    console.log("Clicked row:", row)
  }

  return (
    <>
      <div className="hidden md:block w-[100vw] h-fit bg-black" />
      <section className="bg-cover bg-black mt-10 pt-20 px-4 pb-10 leading-[19.7px] min-h-screen flex flex-col">
        <div className="w-full max-w-[936px] flex flex-col gap-0 mb-12 mx-auto">
          <h1 className="capitalize text-white text-xl md:text-2xl py-0 my-0 text-main-white font-semibold">Autoswappr DEX History</h1>
          <p className="text-base md:text-xl font-thin text-[#A8AFB4] py-0 my-0 ">Here’s your history report of all transactions carried out by Autoswappr</p>
        </div>
        <div className="w-full max-w-[936px] flex flex-col gap-0 mb-12 mx-auto">
        <Table data={history} columns={columns} onRowClick={handleRowClick} />
        </div>
      </section>
    </>
  );
}