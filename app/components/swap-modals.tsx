"use client";

import { RightBorder, TimePassed } from "@/assets/swap-modals";
import { Token, tokenAddresses, tokenImages } from "@/constants/tokens";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  from: boolean;
  handleClose: () => void;
  onTokenSelect: (token: Token) => void;
}

const ModalHeader = ({
  handleClose,
  from,
}: {
  handleClose: () => void;
  from: boolean;
}) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex gap-[.5rem] items-center">
      <p className="text-[#433B5A] text-xs">Select a token</p>
      <RightBorder />
      <p className="text-base text-[#F9F9F9]">Swap {from ? "From" : "To"}</p>
    </div>
    <X onClick={handleClose} className="cursor-pointer" />
  </div>
);

const SearchToken = ({
  searchTokens,
}: {
  searchTokens: (e: Token) => void;
}) => (
  <div
    className={`flex w-full h-12 bg-[#100827] py-3 px-4 justify-between items-center
    rounded-[900px] focus-within:outline-1`}
  >
    <label htmlFor="search-from" className="sr-only"></label>
    <input
      type="search"
      id="search-from"
      placeholder="Search tokens..."
      onChange={(e) => searchTokens(e.target.value as Token)}
      className="grow-[2] border-none focus:outline-none bg-[#100827] text-base"
    />
    <Search />
  </div>
);

const RecentToken = ({
  onTokenSelect,
  handleClose,
}: {
  onTokenSelect: (token: Token) => void;
  handleClose: () => void;
}) => {
  return (
    <div className="w-full pb-7 border-b border-b-[#170F2E]">
      <div className="flex gap-1 items-center justify-start text-sm mb-4">
        <TimePassed />
        <span>Recent searches</span>
      </div>
      <div className="mt-4 w-full grid grid-cols-2 items-center gap-y-5 justify-between">
        <TokenCard
          token={"STRK"}
          label="Starknet"
          onTokenSelect={onTokenSelect}
          handleClose={handleClose}
        />
        <TokenCard
          token={"ETH"}
          label="Ethereum"
          onTokenSelect={onTokenSelect}
          handleClose={handleClose}
        />
        <TokenCard
          token={"BTC"}
          label="Bitcoin"
          onTokenSelect={onTokenSelect}
          handleClose={handleClose}
        />
        <TokenCard
          token={"USDT"}
          label="Tether"
          onTokenSelect={onTokenSelect}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

const Tokens = ({
  handleClose,
  onTokenSelect,
  tokens,
}: {
  handleClose: () => void;
  onTokenSelect: (token: Token) => void;
  tokens: Token[];
}) => {
  return (
    <div className="w-full">
      <p className="mb-4">Tokens</p>
      <div className="flex flex-col items-center justify-start gap-5 w-full">
        {tokens.map((token) => (
          <TokenCard
            key={token}
            label={token}
            token={token}
            onTokenSelect={onTokenSelect}
            handleClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
};

const TokenCard = ({
  token,
  label,
  onTokenSelect,
  handleClose,
}: {
  token: Token;
  label: string;
  onTokenSelect?: (token: Token) => void;
  handleClose: () => void;
}) => {
  const handleSelect = (token: string) => {
    onTokenSelect!(token as Token);
    return handleClose();
  };

  return (
    <button
      onClick={() => handleSelect(token)}
      className="flex gap-2 cursor-pointer py-1 hover:border hover:border-[#170F2E] transition-all ease-out duration-300 px-3 rounded-full  w-full text-base items-center outline-none"
    >
      <img src={tokenImages[token]} alt="" className="w-8 h-8" />
      <div className="text-start">
        <p>{label}</p>
        <p className="text-xs text-[#424242]">{token}</p>
      </div>
    </button>
  );
};

// Swap To Modal

export function SwapTo({ handleClose, onTokenSelect }: ModalProps) {
  const [tokens, setTokens] = useState<Token[]>(
    Object.keys(tokenAddresses) as Array<Token>
  );

  const searchTokens = (search: Token) => {
    const tokens = Object.keys(tokenAddresses) as Array<Token>;
    setTokens(tokens.filter((token) => token.toLowerCase().includes(search)));
  };

  return (
    <div
      className={`p-6 lg:p-12 flex flex-col gap-6 lg:gap-7 h-max-[40rem]
      w-[24rem] lg:w-[32rem] items-start no-scrollbar overflow-y-auto mt-24`}
    >
      <ModalHeader handleClose={handleClose} from={false} />
      <SearchToken searchTokens={searchTokens} />
      <RecentToken onTokenSelect={onTokenSelect} handleClose={handleClose} />
      <Tokens
        onTokenSelect={onTokenSelect}
        handleClose={handleClose}
        tokens={tokens}
      />
    </div>
  );
}

/**
    Swap From Modal
*/
export function SwapFrom({ handleClose, onTokenSelect }: ModalProps) {
  const [tokens, setTokens] = useState<Token[]>(
    Object.keys(tokenAddresses) as Array<Token>
  );

  const searchTokens = (search: Token) => {
    const tokens = Object.keys(tokenAddresses) as Array<Token>;
    setTokens(tokens.filter((token) => token.toLowerCase().includes(search)));
  };

  return (
    <div
      className={`py-6 lg:px-6 lg:py-12 flex flex-col gap-6 rounded-3xl lg:gap-7 bg-[#08001F] text-[#F9F9F9] h-fit
      w-[24rem] lg:w-[480px] items-start no-scrollbar overflow-y-auto mt-24`}
    >
      <ModalHeader handleClose={handleClose} from />
      <SearchToken searchTokens={searchTokens} />
      <RecentToken onTokenSelect={onTokenSelect} handleClose={handleClose} />
      <Tokens
        onTokenSelect={onTokenSelect}
        handleClose={handleClose}
        tokens={tokens}
      />
    </div>
  );
}
