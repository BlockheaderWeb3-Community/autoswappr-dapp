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
            onClick={() => setIsModalOpen(true)}
            className={`text-[13px] md:text-[15px] font-[400] py-1.5 px-3.5 rounded-[7px] transition bg-[#010307] text-[#A199B8] border border-[rgba(255,255,255,0.2)] hover:bg-[#323537]`}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </>
  );
};

export default WalletBar;
