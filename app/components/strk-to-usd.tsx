/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { EqualApproximately } from "lucide-react";

interface STRKtoUSDTDisplayProps {
  amount: number;
}

const COINGECKO_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=starknet&vs_currencies=usd";

export default function STRKtoUSDTDisplay({ amount }: STRKtoUSDTDisplayProps) {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(COINGECKO_API);
      console.log(res);
      if (!res.ok) throw new Error("Failed to fetch price");
      const data = await res.json();
      const price = data?.starknet?.usd;
      if (typeof price !== "number") throw new Error("Invalid price data");
      setRate(price);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRate();
    const interval = setInterval(fetchRate, 30000);
    return () => clearInterval(interval);
  }, []);

  let content;
  if (loading) {
    content = <span>...</span>;
  } else if (error) {
    content = <span className="text-red-400">Error</span>;
  } else if (rate !== null) {
    const usdt = (amount * rate).toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    content = (
      <div className="flex items-center gap-x-1 text-xs">
        <EqualApproximately size={12} />
        {usdt} USD
      </div>
    );
  }

  return <span>{content}</span>;
} 