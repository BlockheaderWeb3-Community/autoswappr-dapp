"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Modal } from "./modal";
import { SwapFrom, SwapTo } from "./swap-modals";
import { Token, tokenImages } from "@/constants/tokens";
import { useState } from "react";

export const CustomSelect: React.FC<{
  selectedToken: Token;
  onTokenSelect: (token: Token) => void;
  from: boolean;
}> = ({ selectedToken, onTokenSelect, from }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-transparent text-[#F7F7F7] border-[1px] border-[#1E2021] px-[6px] py-[4px] sm:px-[8px] rounded-[900px] font-[600] text-[14px] sm:text-[16px] w-[90px] sm:w-[115px] cursor-pointer flex space-x-1 justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-x-1 text-xs sm:text-sm">
          <img
            src={tokenImages[selectedToken]}
            className="w-5 h-5 sm:w-6 sm:h-6"
            alt={selectedToken}
          />
          {selectedToken}
        </span>
        <span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </div>

      {isOpen && (
        <>
          <Modal isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)}>
            {from ? (
              <SwapFrom
                handleClose={() => setIsOpen(!isOpen)}
                onTokenSelect={onTokenSelect}
                from
              />
            ) : (
              <SwapTo
                handleClose={() => setIsOpen(!isOpen)}
                onTokenSelect={onTokenSelect}
                from={false}
              />
            )}
          </Modal>
        </>
      )}
    </>
  );
};
