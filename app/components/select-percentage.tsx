"use client";
import React, { useState, useEffect } from "react";
import { useAccount } from "@starknet-react/core";

/**
    Select percentage
*/
type PercentageValue = 25 | 50 | 75 | 100;
const SelectPercentage = () => {
  const [baseToken, setBaseToken] = useState("");
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { address } = useAccount();

  const numberRegex = /^[0-9]*[.,]?[0-9]*$/;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (numberRegex.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="py-16 h-auto bg-[#08001F] flex flex-col items-center justify-center mx-auto w-full px-4">
      <div className="w-full max-w-[800px] px-4 sm:px-8 py-12 border-[2px] border-[#170F2E] flex flex-col items-center justify-center space-y-4 rounded-xl">
        <div className="flex flex-col items-center justify-center relative w-full sm:max-w-[90%]">
          <div className="text-center w-fit flex-none font-[600] text-[20px] sm:text-[24px] px-4">
            Select token(s) to auto-swap from
          </div>
          <div className="absolute right-0 w-4 h-full flex-none flex items-center justify-center mx-auto">
            <img src="/x.png" alt="x" className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full py-6 px-4 max-w-[620px] text-[14px] sm:text-[16px] leading-[22px] text-[#A199B8] text-center">
          You can select the percentage you want auto-swapped to your preferred
          base token or input the percentage yourself.
        </div>
        <div className="w-full sm:max-w-[90%] flex flex-col items-start justify-start space-y-6">
          <div className="w-full rounded-full flex flex-row items-center justify-between space-x-2 bg-[#100827]">
            <input
              type="text"
              className="placeholder:text-[#433B5A] text-[#F9F9F9] bg-transparent outline-none focus:outline-none w-full p-4"
              placeholder="Input how much you want to auto-swap"
            />
            <div className="w-fit h-full flex-none pr-4">
              <img src="/pencil-edit.png" className="w-full h-auto" />
            </div>
          </div>

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
                    name="radio-group"
                    value={value}
                    className={`hidden peer`}
                    onClick={() => setPercent(value as PercentageValue)}
                  />
                  <label
                    htmlFor={id}
                    className={`bg-[#100827] text-[#F9F9F9] text-[14px] font-[600] text-center w-full py-4 rounded-full border ${percent == value ? "border-blue-500" : "border-transparent"} peer-checked:border-blue-500`}
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="w-full flex flex-row items-center justify-start space-x-2">
            <img
              src="/time-half-pass.png"
              alt="time half pass"
              className="w-auto h-auto"
            />
            <span className="text-[13px] text-[#F9F9F9] text-[400]">
              Base Token
            </span>
          </div>

          <div className="w-full flex gap-8 sm:gap-16">
            {[
              { logo: "/usdt-logo.png", label: "Usdt", value: "usdt", id: "usdt" },
              { logo: "/usdc-logo.png", label: "Usdc", value: "usdc", id: "usdc" },
            ].map(({ logo, label, value, id }) => (
              <div
                key={id}
                className={`w-full flex items-center justify-center mx-auto`}
              >
                <input
                  type="radio"
                  id={id}
                  name="radio-group"
                  value={value}
                  className={`hidden`}
                  onClick={() => setBaseToken(id)}
                />
                <label
                  htmlFor={id}
                  className={`w-full relative flex flex-row space-x-2 items-center justify-start`}
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
                      src="/blue-checkmark-circle.png"
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

          <div className="w-full flex flex-none items-center justify-center my-4 mx-auto bg-[#170F2E] h-[1px]"></div>

          <div className="w-full mx-auto flex items-center justify-center">
            <button
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
