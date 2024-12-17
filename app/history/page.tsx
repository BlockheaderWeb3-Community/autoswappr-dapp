"use client"

import { history } from "@/constants/history";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DexHistory() {
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
      <div className="hidden md:block w-full" />
      <section className="bg-cover bg-main-bg  md:bg-inherit bg-center bg-no-repeat mt-10 pt-20 md:mt-0 md:py-16 pb-10 leading-[19.7px] min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-center capitalize pb-8 text-2xl text-main-white font-semibold">history log</h1>

        {/* Desktop, Tablet, and Mobile */}
        <div 
          ref={containerRef} 
          className="w-full px-4 sm:w-[95%] md:w-[80%] lg:w-[60%] max-w-[800px] overflow-x-auto custom-scrollbar"
          style={{
            maxHeight: 'calc(100vh - 300px)',
            overflowY: 'auto'
          }}
        >
          <table ref={tableRef} className="w-full border-collapse min-w-[200px] sm:min-w-[640px]">
            <thead>
              <tr className="capitalize font-normal text-sm border-b border-[#170F2E] sticky top-0 bg-main-bg bg-no-repeat">
                <th className="text-left pb-3 pr-4 sm:pr-4">from</th>
                <th className="text-left pb-3 pr-2 sm:pr-4">to</th>
                <th className="text-left pb-3 pr-2 sm:pr-4">percentage</th>
                <th className="text-left pb-3">autoSwapper</th>
              </tr>
            </thead>
            <tbody>
              {history.map((data, index) => (
                <tr key={index} className="border-b border-[#170F2E] last:border-b-0 text-sm sm:text-base">
                  <td className="py-3 sm:py-5 pr-4">
                    <div className="flex items-center gap-[8px] sm:gap-[12px]">
                      <span className="text-dark-blue text-xs sm:text-sm">{index + 1}</span>
                      <div className="flex gap-1 sm:gap-2 items-center">
                        <div className="relative w-8 sm:w-10 h-5 sm:h-6">
                          <Image src={data.from.fromImage} alt="coin from" className="absolute left-0 w-5 h-5 sm:w-6 sm:h-6 z-10" />
                          <Image src={data.from.toImage} alt="coin to" className="absolute left-3 sm:left-4 w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="capitalize text-main-white">
                          <p className="text-sm sm:text-base">{data.from.coinFrom}</p>
                          <p className="text-dark-blue text-xs sm:text-sm">{data.from.coinTo}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 sm:py-5 pr-2 sm:pr-4">
                    <div className="uppercase text-main-white">
                      <p className="text-sm sm:text-base">{data.to.coinFromAmount} {data.to.coinFrom}</p>
                      <p className="text-dark-blue text-xs sm:text-sm">{data.to.coinToAmount} {data.to.coinTo}</p>
                    </div>
                  </td>
                  <td className="py-3 sm:py-5 pr-2 sm:pr-4">
                    <div className="bg-[#100827] rounded-2xl w-fit px-2 sm:px-4 py-1 text-xs sm:text-sm">{data.percentage}%</div>
                  </td>
                  <td className="py-3 sm:py-5">
                    <div className="uppercase text-main-white">
                      <p className="text-sm sm:text-base">{data.date.day}</p>
                      <p className="text-dark-blue text-xs sm:text-sm">{data.date.time}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}