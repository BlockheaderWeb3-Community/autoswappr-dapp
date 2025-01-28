"use client"

import { history } from "@/constants/history";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Table from "../components/table";

export default function History() {
  const tableRef = useRef<HTMLTableElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <div className="hidden md:block w-[100vw] h-fit bg-black" />
      <section className="bg-cover bg-black mt-10 pt-20 px-4 pb-10 leading-[19.7px] min-h-screen flex flex-col">
        <div className="w-full max-w-[936px] flex flex-col gap-0 mb-12 mx-auto">
          <h1 className="capitalize text-white text-xl md:text-2xl py-0 my-0 text-main-white font-semibold">Autoswappr DEX History</h1>
          <p className="text-base md:text-xl font-thin text-white py-0 my-0 ">Here’s your history report of all transactions carried out by Autoswappr</p>
        </div>
        <Table />
      </section>
    </>
  );
}