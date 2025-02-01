"use client";

import { useEffect, useRef } from "react";
import Table, { type ColumnDef } from "../components/table.beta";
import Image from "next/image";
import { history } from "@/constants/history";
import PageHeading from "../components/page-heading";

interface Transaction {
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

export default function History() {
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

  useEffect(() => {
    const handleResize = () => {
      if (tableRef.current && containerRef.current) {
        const tableWidth = tableRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        if (tableWidth > containerWidth) {
          tableRef.current.style.width = `${tableWidth}px`;
        } else {
          tableRef.current.style.width = "100%";
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-main-bg bg-center bg-cover bg-no-repeat sm:h-[120vh] h-[150vh] pt-[100px] md:pt-[150px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
        <PageHeading
          title="Autoswappr DEX History"
          subTitle="Here’s your history report of all transactions carried out by Autoswappr"
        />
        <div className="md:pr-[152px] mt-10">
          <Table data={history} columns={columns} />
        </div>
      </div>
    </>
  );
}
