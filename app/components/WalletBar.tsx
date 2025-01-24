"use client";

import { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { WalletModal } from "./WalletModal";
import Address from "./address";
import { createPortal } from "react-dom";
import LockBodyScroll from "./lock-body-scroll";
// import { useRouter } from "next/navigation";

const WalletBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const router = useRouter();
  const { address } = useAccount();

  // useEffect(() => {
  //   if (address) {
  //     router.push("/select-base-token");
  //   }
  // }, [address]);

  const toggleModal = (state: boolean) => {
    setIsModalOpen(state);
  };

  return (
    <>
      <LockBodyScroll lock={isModalOpen} />

      {isModalOpen &&
        createPortal(
          <WalletModal isOpen={isModalOpen} setIsOpen={toggleModal} />,
          document.body
        )}

      <div className="flex items-center justify-center">
        {address ? (
          <Address />
        ) : (
          <button
            onClick={() => toggleModal(true)}
            className="p-3 md:p-[14px] w-[160px] md:w-[230px] bg-[#0F96E3] rounded-full text-sm md:text-base leading-5 text-white font-semibold hover:bg-[#0D86C5] transition-colors"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </>
  );
};

export default WalletBar;
