"use client";
import { useAccount } from "@starknet-react/core";
import Address from "./address";

function WalletBar({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const { address } = useAccount();

  return (
    <div className="flex items-center justify-center">
      {address ? (
        <Address />
      ) : (
        <button
          onClick={toggleModal}
          className="p-3 md:p-[16px] w-[204px] md:w-[230px] bg-[#02060D1F] border border-[#135DA3] rounded-lg text-sm md:text-base leading-5 text-[#F3F5FF] font-semibold "
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletBar;
