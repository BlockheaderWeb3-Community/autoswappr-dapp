/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { PenLine, X } from "lucide-react";
import { CheckIcon } from "@/svgs/CheckIcon";
import { Coin } from "../utils/types";

const BaseTokenBlock = ({
  setBaseToken,
  baseToken,
}: {
  setBaseToken: (token: string) => void;
  baseToken: string;
}) => {
  const handleBaseTokenChange = (value: string) => {
    if (value === baseToken) {
      setBaseToken("");
      return;
    }
    setBaseToken(value);
  };
  return (
    <div className="w-full flex flex-col space-y-4 ">
      <div className="w-full flex flex-row items-center justify-start space-x-2">
        <img
          src="/time-half-pass.svg"
          alt="time half pass"
          className="w-auto h-auto"
        />
        <span className="text-[13px] text-[#F9F9F9] text-[400]">
          Base Token
        </span>
      </div>

      <div className="w-full flex gap-8 sm:gap-16">
        {[
          {
            logo: "/usdt.svg",
            label: "USDT",
            value: "USDT",
            id: "usdt",
          },
          {
            logo: "/usdc.svg",
            label: "USDC",
            value: "USDC",
            id: "usdc",
          },
        ].map(({ logo, label, value, id }) => (
          <div
            key={id}
            className={`w-full flex items-center justify-center mx-auto`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <input
              type="radio"
              id={id}
              name="base-token-group"
              value={value}
              className={`hidden`}
              onClick={() => {
                handleBaseTokenChange(value);
              }}
            />
            <label
              htmlFor={id}
              className={`w-full relative flex flex-row space-x-2 items-center justify-start cursor-pointer select-none`}
            >
              <img
                src={logo}
                alt={label}
                className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full"
              />
              <div className="w-full flex flex-col space-y-0 items-start justify-start">
                <span className="block w-full text-[#F9F9F9] text-[14px] sm:text-[16px] font-[400]">
                  {label}
                </span>
                <span className="block w-full text-[#433B5A] text-[12px] sm:text-[14px] font-[600]">
                  {label.toUpperCase()}
                </span>
              </div>
              {baseToken == value ? <CheckIcon /> : ""}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const SelectPercentage = ({
  handleClose,
  handleSelectCoin,
  coin,
}: {
  handleClose: () => void;
  handleSelectCoin: (coin: any, amount: number, base: string) => void;
  coin: Coin;
}) => {
  const [baseToken, setBaseToken] = useState("");
  const [amount, setAmount] = useState("");
  const numberRegex = /^[0-9]*[.,]?[0-9]*$/;

  const handleSubmit = () => {
    handleSelectCoin(coin, parseFloat(amount), baseToken);
    handleClose();
  };

  return (
    <div
      className="flex flex-col items-center text-[#F9F9F9] justify-center px-4 absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[200]"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-[800px] px-4 sm:px-8 py-12 border-[2px] border-[#170F2E] bg-[#08001F] flex flex-col items-center justify-center space-y-4 rounded-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col items-center justify-center relative w-full sm:max-w-[90%]">
          <div className="text-center w-fit flex-none font-[600] text-[20px] sm:text-[24px] px-4">
            Select token(s) to auto-swap from
          </div>
          <button
            className="absolute right-0 w-4 h-full flex-none flex items-center justify-center mx-auto"
            onClick={handleClose}
          >
            <X className="cursor-pointer" />
          </button>
        </div>
        <div className="w-full py-6 px-4 max-w-[620px] text-[14px] sm:text-[16px] leading-[22px] text-[#A199B8] text-center">
          You can select the percentage you want auto-swapped to your preferred
          base token or input the percentage yourself.
        </div>
        <div className="w-full sm:max-w-[90%] flex flex-col items-start justify-start space-y-6">
          <div className="w-full relative h-fit">
            <input
              type="text"
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                e.stopPropagation();
                const value = e.target.value;
                if (numberRegex.test(value)) {
                  setAmount(value);
                  return;
                }
              }}
              className={`placeholder:text-[#433B5A] bg-[#100827] text-[#F9F9F9] rounded-full outline-none focus:outline-none w-full p-4 ${!amount ? "cursor-not-allowed" : "cursor-text"}`}
              placeholder="Input how much you want to auto-swap"
            />
            <div className="w-fit h-full flex-none pr-4 absolute top-4 right-2">
              <PenLine />
            </div>
          </div>

          <BaseTokenBlock setBaseToken={setBaseToken} baseToken={baseToken} />

          <div className="w-full my-4 mx-auto bg-[#170F2E] h-[1px]"></div>

          <div className="w-full mx-auto flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("submitting");
                handleSubmit();
              }}
              disabled={!baseToken.length && !amount.length}
              className="bg-[#100827] rounded-full text-[16px] font-[600] text-[#F9F9F9] text-center py-4 w-full max-w-[416px]"
              type="button"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPercentage;
