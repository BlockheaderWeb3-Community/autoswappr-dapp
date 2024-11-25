"use client";
import React, { useState } from "react";
import { PenLine, X } from "lucide-react";

const EnterAmountBlock = ({
  setAmount,
  setPercent,
  amount,
  disabled,
}: {
  setAmount: (amount: string) => void;
  setPercent: (amount: number) => void;
  amount: string;
  disabled: boolean;
}) => {
  const numberRegex = /^[0-9]*[.,]?[0-9]*$/;
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (numberRegex.test(value)) {
      setAmount(value);
      setPercent(0);
      return;
    }
  };
  return (
    <div className="w-full rounded-full flex flex-row items-center justify-between space-x-2 bg-[#100827]">
      <input
        type="text"
        disabled={disabled}
        value={disabled ? "" : amount}
        onChange={handleAmountChange}
        className={`placeholder:text-[#433B5A] text-[#F9F9F9] bg-transparent outline-none focus:outline-none w-full p-4 ${disabled ? "cursor-not-allowed" : "cursor-text"}`}
        placeholder="Input how much you want to auto-swap"
      />
      <div className="w-fit h-full flex-none pr-4">
        <PenLine />
      </div>
    </div>
  );
};

const SelectPercentageBlock = ({
  setPercent,
  setAmount,
  percent,
  disabled,
}: {
  setPercent: (percent: number) => void;
  setAmount: (amount: string) => void;
  percent: number;
  disabled: boolean;
}) => {
  const handlePercentChange = (value: number) => {
    if (value === percent) {
      setPercent(0);
      return;
    }
    setPercent(value);
    setAmount("");
  };
  return (
    <fieldset className="w-full flex flex-col space-y-1">
      <legend className="font-[400] text-[14px] text-[#F9F9F9]">
        Select the percentage you want to auto-swap
      </legend>
      <div className="w-full flex gap-3 pt-4">
        {[
          { label: "25%", value: 25, id: "twenty-five" },
          { label: "50%", value: 50, id: "fifty" },
          { label: "75%", value: 75, id: "seventy-five" },
          { label: "100%", value: 100, id: "hundred" },
        ].map(({ label, value, id }) => (
          <div
            key={id}
            className={`w-full flex items-center justify-center mx-auto`}
          >
            <input
              type="radio"
              id={id}
              name="percent-group"
              value={value}
              className={`hidden peer/percent`}
              onClick={() => handlePercentChange(value)}
            />
            <label
              htmlFor={id}
              className={`bg-[#100827] text-[#F9F9F9] text-[14px] font-[600] text-center w-full hover:cursor-pointer py-4 rounded-full select-none border border-transparent 
                ${disabled ? "cursor-not-allowed" : "cursor-pointer"} 
                ${value == percent ? "peer-checked/percent:border-blue-500" : "peer-checked/percent:border-transparent"}`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

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
    <div className="w-full flex flex-col space-y-4">
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
            logo: "/usdt-logo.svg",
            label: "Usdt",
            value: "usdt",
            id: "usdt",
          },
          {
            logo: "/usdc-logo.svg",
            label: "Usdc",
            value: "usdc",
            id: "usdc",
          },
        ].map(({ logo, label, value, id }) => (
          <div
            key={id}
            className={`w-full flex items-center justify-center mx-auto`}
          >
            <input
              type="radio"
              id={id}
              name="base-token-group"
              value={value}
              className={`hidden`}
              onClick={() => handleBaseTokenChange(value)}
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
              {baseToken == value ? (
                <img
                  src="/blue-checkmark-circle.svg"
                  alt="check"
                  className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] absolute right-0"
                />
              ) : (
                ""
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
const SelectPercentage = () => {
  const [baseToken, setBaseToken] = useState("");
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setBaseToken("");
      setAmount("");
      setPercent(0);
    }, 3000);
  };

  return (
    <div className="py-16 h-auto flex flex-col items-center justify-center mx-auto w-full px-4">
      <div className="w-full max-w-[800px] px-4 sm:px-8 py-12 border-[2px] border-[#170F2E] flex flex-col items-center justify-center space-y-4 rounded-xl">
        <div className="flex flex-col items-center justify-center relative w-full sm:max-w-[90%]">
          <div className="text-center w-fit flex-none font-[600] text-[20px] sm:text-[24px] px-4">
            Select token(s) to auto-swap from
          </div>
          <div className="absolute right-0 w-4 h-full flex-none flex items-center justify-center mx-auto">
            <X className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full py-6 px-4 max-w-[620px] text-[14px] sm:text-[16px] leading-[22px] text-[#A199B8] text-center">
          You can select the percentage you want auto-swapped to your preferred
          base token or input the percentage yourself.
        </div>
        <div className="w-full sm:max-w-[90%] flex flex-col items-start justify-start space-y-6">
          <EnterAmountBlock
            setAmount={setAmount}
            setPercent={setPercent}
            amount={amount}
            disabled={percent != 0}
          />

          <SelectPercentageBlock
            setPercent={setPercent}
            setAmount={setAmount}
            percent={percent}
            disabled={amount != ""}
          />

          <BaseTokenBlock setBaseToken={setBaseToken} baseToken={baseToken} />

          <div className="w-full flex flex-none items-center justify-center my-4 mx-auto bg-[#170F2E] h-[1px]"></div>

          <div className="w-full mx-auto flex items-center justify-center">
            <button
              onClick={handleSubmit}
              disabled={baseToken == "" && (percent == 0 || amount == "")}
              className={`bg-[#100827] rounded-full text-[16px] font-[600] text-[#F9F9F9] text-center py-4 w-full max-w-[416px]
              ${
                isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              type="button"
            >
              {isLoading ? "Processing..." : "Done"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPercentage;
