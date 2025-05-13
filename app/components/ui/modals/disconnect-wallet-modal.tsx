"use client";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import useUnsubscribe from "@/app/hooks/useUnsubscribe";
import { shortenAddress } from "@/app/utils/helper";

interface DisconnectWalletModalProps {
  open: boolean;
  onOpenChange: () => void;
}

export default function DisconnectModal({
  open,
  onOpenChange,
}: DisconnectWalletModalProps) {
  const { disconnectAsync } = useDisconnect();
  const { address } = useAccount();
  const router = useRouter();
  const { handleUnsubscribe } = useUnsubscribe();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#02060D] text-center border border-[#242E38] rounded-lg p-7">
        <DialogHeader className="">
          <DialogTitle className="text-xl text-left font-semibold text-[#F3F5FF]">
            Wallet
          </DialogTitle>
        </DialogHeader>

        <section>
          <div className="flex justify-between items-center  text-sm text-[#CBCFD2] mt-[64px] mb-3">
            <p>Connected with Argent X / Braavos</p>
            <button
              type="button"
              className="underline"
              onClick={handleUnsubscribe}
            >
              Unsubscribe
            </button>
          </div>
          <div className="bg-[#0D1016A3] p-3 flex items-center gap-x-2 rounded-xl text-left">
            <img src="/user.svg" className="w-10 h-10" alt="" />
            <div>
              <h3 className="text-base text-[#F3F5FF] font-bold">
                osatuyipikin.braavos.eth
              </h3>
              <h4 className="text-[#DCDFE1] text-sm leading-6">
                {address && shortenAddress(address)}
              </h4>
            </div>
          </div>
          <p className="flex gap-x-1 items-center text-[#BABFC3] text-sm mt-6">
            <ExternalLink size={14} />
            View transaction history in explorer
          </p>

          <button
            type="submit"
            id="submit"
            className="bg-[#0D1016] hover:bg-[#1D8CF4] border-[#1E2021] border-[1px] text-sm text-[#F3F5FF] py-3 w-full rounded-lg font-semibold mt-12 transition-all duration-300 ease-in-out"
            onClick={async (e) => {
              e.preventDefault();
              await disconnectAsync();
              router.push("/");
            }}
          >
            Disconnect Wallet
          </button>
        </section>
      </DialogContent>
    </Dialog>
  );
}
