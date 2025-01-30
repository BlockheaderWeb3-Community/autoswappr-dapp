"use client"

import { useState, type ReactNode } from "react"

export interface ColumnDef<T> {
    header: string
    accessorKey: keyof T
    cell: (info: T, index?: number) => ReactNode
}

interface Props<T> {
    data: T[]
    columns: ColumnDef<T>[]
    onRowClick?: (row: T) => void
}

export default function Table<T>({ data, columns, onRowClick }: Props<T>) {
    const [selectedRow, setSelectedRow] = useState<number | null>(null)

    const handleRowClick = (index: number, row: T) => {
        setSelectedRow(index)
        onRowClick?.(row)
    }

    return (
        <div className="w-full overflow-x-auto border border-solid border-[#2C3035] rounded-2xl bg-black scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full">
            <table className="w-full min-w-[600px] border-collapse">
                <thead>
                    <tr className="border-b border-gray-800">
                        {columns.map((column, index) => (
                            <th key={index} className="p-4 text-left text-sm font-normal text-white">
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`cursor-pointer transition-colors hover:bg-gray-900 ${selectedRow === rowIndex ? "bg-gray-900" : ""
                                }`}
                            onClick={() => handleRowClick(rowIndex, row)}
                        > 
                            {columns.map((column, columnIndex) => (
                                <td key={columnIndex} className="p-4">
                                    {column.cell(row, rowIndex)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

