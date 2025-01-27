"use client";
import { useAccount } from "@starknet-react/core";
import Address from "./address";

function WalletBar({ toggleModal }: { toggleModal: () => void }) {
  const { address } = useAccount();

  return (
    <div className="flex items-center justify-center">
      {address ? (
        <Address />
      ) : (
        <button
          onClick={toggleModal}
          className="p-3 md:py-[12px] md:px-7 bg-[#0D10163D] border border-[#135DA3] rounded-lg text-sm leading-6 text-[#F3F5FF] font-semibold "
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletBar;
