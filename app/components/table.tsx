"use client"

import { useState } from "react"
import Image from "next/image"
import { history } from "@/constants/history"

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

export default function Table() {
    const [selectedRow, setSelectedRow] = useState<number | null>(null)

    return (
        <div className="w-full max-w-[936px] overflow-x-auto border border-solid border-[#2C3035] mx-auto rounded-2xl bg-black scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full">
            <table className="w-full min-w-[600px] rounded-2xl border-collapse">
                <thead>
                    <tr className="border-b border-gray-800">
                        <th className="p-4 text-left text-sm font-normal text-white">From</th>
                        <th className="p-4 text-left text-sm font-normal text-white">To</th>
                        <th className="p-4 text-left text-sm font-normal text-white">Amount</th>
                        <th className="p-4 text-left text-sm font-normal text-white">Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((transaction, index) => (
                        <tr
                            key={index}
                            className={`cursor-pointer transition-colors hover:bg-gray-900 ${selectedRow === index ? "bg-gray-900" : ""
                                }`}
                            onClick={() => setSelectedRow(index)}
                        >
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <p className="text-[#4C5053] text-[16px] font-semibold">{index + 1}.</p>
                                    <div className="h-8 w-8 overflow-hidden rounded-full">
                                        <Image
                                            src={transaction.from.fromImage || "/placeholder.svg"}
                                            alt={transaction.from.coinFrom}
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-white capitalize">{transaction.from.coinFrom}</span>
                                        <span className="text-xs text-gray-500">{transaction.to.coinFrom}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 overflow-hidden rounded-full">
                                        <Image
                                            src={transaction.from.toImage || "/placeholder.svg"}
                                            alt={transaction.from.coinTo}
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-white">{transaction.from.coinTo}</span>
                                        <span className="text-xs text-gray-500">{transaction.to.coinTo}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex flex-col">
                                    <span className="text-sm text-white">
                                        {transaction.to.coinFromAmount} {transaction.to.coinFrom}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {transaction.to.coinToAmount} {transaction.to.coinTo}
                                    </span>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex flex-col">
                                    <span className="text-sm text-white">{transaction.date.day}</span>
                                    <span className="text-xs text-gray-500">{transaction.date.time}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

