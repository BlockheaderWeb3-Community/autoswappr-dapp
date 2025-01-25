"use client";
import { useState, useEffect } from "react";
import { useAccount } from "@starknet-react/core";
import { RefreshCcw } from "lucide-react";
import { Token, tokenPrices } from "@/constants/tokens";
import { CustomSelect } from "./custom-select";

const Swapper = () => {
  const [fromToken, setFromToken] = useState<Token>("STRK");
  const [toToken, setToToken] = useState<Token>("USDT");
  const [amount, setAmount] = useState("");
  const [equivalent, setEquivalent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rate, setRate] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
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

  const STABLE_TOKENS: Token[] = ["USDT", "USDC"];

  const handleTokenSwap = () => {
    // ensures at least one of the tokens is a stable coin
    const isValidSwap =
      STABLE_TOKENS.includes(fromToken) || STABLE_TOKENS.includes(toToken);

    if (isValidSwap) {
      const temp = fromToken;
      setFromToken(toToken);
      setToToken(temp);
    } else {
      setError("At least one token must be a stable coin (USDT, USDC, DAI)");
    }
  };
  // const handleTokenSwap = () => {
  //   const temp = fromToken;
  //   setFromToken(toToken);
  //   setToToken(temp);
  // };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (numberRegex.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="flex w-full h-full md:h-[600px] lg:h-[600px] relative">
      <div className="px-8 w-full sm:w-[480px] flex flex-col items-center justify-start pt-8 mx-auto">
        <div className="flex w-full sm:w-[480px] flex-col items-center space-y-3">
          <div className="w-full sm:w-[480px] flex flex-row items-center justify-between rounded-[8px] px-[16px] md:px-[24px] py-[16px] border-[1px] border-[#1E2021] bg-[#02060D]">
            <div className="w-[60%] flex flex-col items-start">
              <span className="pb-2 text-[14px] font-[400] text-left text-[#4C5053]">
                From
              </span>
              <input
                type="text"
                value={amount}
                placeholder="0"
                onChange={handleAmountChange}
                className="w-auto bg-transparent text-[24px] sm:text-[36px] text-white placeholder:text-white font-[600] outline-none border-none"
              />
            </div>

            {/* <div className="flex justify-between">
                <p className="ml-[2px] max-w-[45%] overflow-hidden text-ellipsis whitespace-nowrap text-[9.97px] font-[600] md:text-[16px]">
                  = ${(parseFloat(amount || "0") * rate).toFixed(3)}
                </p>
              </div> */}
            <div className="bg-[#02060D] rounded-full">
              <CustomSelect
                selectedToken={fromToken}
                onTokenSelect={setFromToken}
                from
              />
            </div>
          </div>

          <div className="absolute top-[25%] md:top-[18%] h-[60px] w-[60px] bg-[#02060D] rounded-full p-[8px] flex justify-center items-center border-[1px] border-[#1E2021] mx-auto group">
            <button
              type="button"
              onClick={handleTokenSwap}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className={`bg-[#1E2021] p-[8px] h-[40px] w-[40px] rounded-full
                ${
                  STABLE_TOKENS.includes(fromToken) ||
                  STABLE_TOKENS.includes(toToken)
                    ? "cursor-pointer"
                    : "cursor-not-allowed opacity-50"
                }`}
              disabled={
                !(
                  STABLE_TOKENS.includes(fromToken) ||
                  STABLE_TOKENS.includes(toToken)
                )
              }
            >
              <RefreshCcw
                size={24}
                color={
                  STABLE_TOKENS.includes(fromToken) ||
                  STABLE_TOKENS.includes(toToken)
                    ? "#4C5053"
                    : "#4C5053"
                }
              />
            </button>
            <div
              className={`absolute z-10 bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-[#02060D] text-[#4C5053] text-xs rounded-lg p-2 w-[200px] text-center shadow-lg 
                ${showTooltip ? "block" : "hidden"}`}
            >
              To swap tokens ensure at least one token is a stablecoin (USDT,
              USDC)
            </div>
          </div>

          <div className="w-full sm:w-[480px] flex flex-row items-center justify-between rounded-[8px] px-[16px] md:px-[24px] py-[16px] border-[1px] border-[#1E2021] bg-[#0D1016]">
            <div className="w-[60%] flex flex-col items-start">
              <span className="pb-2 text-[14px] font-[400] text-left text-[#4C5053]">
                To
              </span>
              <input
                type="text"
                value={
                  parseFloat(equivalent) == 0
                    ? 0
                    : parseFloat(equivalent).toFixed(3)
                }
                placeholder="0"
                readOnly
                className="w-auto bg-transparent text-[24px] sm:text-[36px] text-white/90 placeholder:text-white/90 font-[600] outline-none border-none"
              />
            </div>

            {/*<p className="ml-[2px] max-w-[45%] overflow-hidden text-ellipsis whitespace-nowrap text-[9.97px] font-[600] text-[#7A7A7A] md:text-[16px]">
                    = ${Number(equivalent).toFixed(3)}
                  </p>*/}
            <div className="bg-[#0D1016] rounded-full">
              <CustomSelect
                selectedToken={toToken}
                onTokenSelect={setToToken}
                from={false}
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[480px] flex justify-between items-center py-10 text-[14px] font-[400] leading-5 text-gray-500">
          <div className="flex items-center gap-x-1">
            <img src="/history.svg" alt="history" className="w-5 h-5" />{" "}
            <span className="text-base"> History</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Gas fee:</span>{" "}
            <div className="flex items-center gap-x-0">
              <img src="/approximate.svg" alt="gas fee" className="w-4 h-4" /> <span>$0.00</span>
            </div>
          </div>
        </div>

        {error && (
          <p className="mb-2 text-[10px] text-red-500 md:text-[12px]">
            {error}
          </p>
        )}

        <button
          onClick={handleSwap}
          disabled={isLoading || !address}
          type="submit"
          className={`w-full sm:w-[480px] rounded-[8px] py-[16px] font-[600] md:text-[16px] bg-[#1D8CF4] text-[#FFF] ${
            isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        >
          {isLoading ? "Processing..." : address ? "Swap" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Swapper;
