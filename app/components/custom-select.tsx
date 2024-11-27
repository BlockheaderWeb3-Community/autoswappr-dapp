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
    <div className="relative h-[10.45px] w-[40%] md-w[20%] md:h-[40px] md:w-[150px]">
      <div
        className="bg-transparent text-[#F7F7F7] border-[1px] border-[#08001F] font-semibold flex h-full w-full cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-[6px] text-[10px] md:gap-2 md:rounded-full md:text-[16px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-x-1 text-sm">
          <img
            src={tokenImages[selectedToken]}
            className="w-7 h-7"
            alt={selectedToken}
          />
          {selectedToken}
        </span>
        <span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
    </div>
  );
};
