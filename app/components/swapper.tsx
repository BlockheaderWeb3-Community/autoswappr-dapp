"use client";
import React, { useState, useEffect } from "react";
import { useAccount } from "@starknet-react/core";
import { RefreshCcw } from "lucide-react";
import { Token, tokenPrices } from "@/constants/tokens";
import { CustomSelect } from "./custom-select";
import { ApproximateIcon, GasFeeIcon } from "@/assets/dex";

const Swapper = () => {
  const [fromToken, setFromToken] = useState<Token>("STRK");
  const [toToken, setToToken] = useState<Token>("USDT");
  const [amount, setAmount] = useState("");
  const [equivalent, setEquivalent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rate, setRate] = useState(0);
  const { address } = useAccount();

  useEffect(() => {
    const updateRate = () => {
      const fromPrice = tokenPrices[fromToken];
      const toPrice = tokenPrices[toToken];
      const newRate = toPrice / fromPrice;
      setRate(newRate);
    };

    updateRate();
  }, [fromToken, toToken]);

  useEffect(() => {
    if (amount && rate) {
      const numericAmount = parseFloat(amount);
      if (!isNaN(numericAmount)) {
        setEquivalent((numericAmount * rate).toFixed(6));
      } else {
        setEquivalent("0");
      }
    } else {
      setEquivalent("0");
    }
  }, [amount, rate]);

  const numberRegex = /^[0-9]*[.,]?[0-9]*$/;

  const handleSwap = async () => {
    if (!address) return;

    setIsLoading(true);
    setError("");

    // Simulate a delay for the swap process
    setTimeout(() => {
      try {
        const swappedAmount = parseFloat(amount) * rate;
        console.log(
          `Swapped ${amount} ${fromToken} for ${swappedAmount.toFixed(
            6
          )} ${toToken}`
        );
        setAmount("");
        setEquivalent("0");
        setError("");
      } catch (error) {
        console.error("Swap failed:", error);
        setError("Swap failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  const handleTokenSwap = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (numberRegex.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="flex w-full cursor-pointer flex-col items-center text-[#F7F7F7] rounded-[48px] p-[18px] md:w-[800px] m:h-[600px] md:p-[2rem] bg-[#08001F] border-[1px] border-[#170F2E]">
      <form className="m-0 w-full md:w-[480px]">
        <div className="relative flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col">
            <div className="rounded-[24px] px-[10px] py-[10px] md:px-[24px] md:py-[20px] border border-[#170F2E] bg-[#08001F] ">
              <h3 className="mb-2 text-[9.97px] md:text-[16px] text-left text-[#F7F7F7] text-base">
                From
              </h3>
              <div className="flex justify-between">
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    value={amount}
                    placeholder="0"
                    onChange={handleAmountChange}
                    className="w-[45%] bg-transparent text-[18.59px] font-[700] outline-none md:w-[75%] md:text-[32px]"
                  />
                  <p className="ml-[2px] max-w-[45%] overflow-hidden text-ellipsis whitespace-nowrap text-[9.97px] font-[600] md:text-[16px]">
                    = ${(parseFloat(amount || "0") * rate).toFixed(3)}
                  </p>
                </div>
                <CustomSelect
                  selectedToken={fromToken}
                  onTokenSelect={setFromToken}
                  from
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleTokenSwap}
            className="absolute top-[44%] h-[46px] w-[46px] rounded-full p-2  flex justify-center items-center border-[1px] border-[#1E1E1E] bg-[#170F2E]"
          >
            <RefreshCcw size={24} />
          </button>

          <div className="flex w-full flex-col">
            <div className="rounded-[24px] px-[10px] py-[10px] md:px-[24px] md:py-[20px] border border-[#170F2E] bg-[#100827]">
              <h3 className="mb-2 text-[9.97px] md:text-[16px] text-left text-[#F7F7F7] text-base">
                To
              </h3>
              <div className="flex justify-between">
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    value={parseFloat(equivalent).toFixed(3)}
                    placeholder="0"
                    readOnly
                    className="w-[45%] bg-transparent text-[18.59px] font-[700] outline-none md:w-[75%] md:text-[32px]"
                  />
                  <p className="ml-[2px] max-w-[45%] overflow-hidden text-ellipsis whitespace-nowrap text-[9.97px] font-[600] text-[#7A7A7A] md:text-[16px]">
                    = ${Number(equivalent).toFixed(3)}
                  </p>
                </div>
                <CustomSelect
                  selectedToken={toToken}
                  onTokenSelect={setToToken}
                  from={false}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-cente py-10 text-sm leading-5 text-[#A4A4A4]">
          <div className="flex items-center gap-x-1">
            <ApproximateIcon /> <span className="text-base"> History</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Gas fee:</span>{" "}
            <div className="flex items-center gap-x-1">
              <GasFeeIcon /> <span>$0.00</span>
            </div>
          </div>
        </div>

        {error && (
          <p className="mb-2 text-[9.97px] text-red-500 md:text-[16px]">
            {error}
          </p>
        )}

        <button
          onClick={handleSwap}
          disabled={isLoading || !address}
          type="submit"
          className={`w-full rounded-full py-[20px] font-[600] md:text-[16px] bg-[#100827] text-[#F4F4F4] ${
            isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        >
          {isLoading ? "Processing..." : address ? "Swap" : "Connect Wallet"}
        </button>
      </form>
    </div>
  );
};

export default Swapper;
