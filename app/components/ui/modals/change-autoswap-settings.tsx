import { useState } from "react";
import { EditIcon } from "lucide-react";
import GrantPermission from "./grant-permission-modal";
import { useSubscription } from "../../../hooks/useSubscription";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";

export default function ChangeAutoswapSettings({
  open,
  onOpenChange,
}: {
  onOpenChange: () => void;
  open: boolean;
}) {
  const [newSwapAmount, setNewSwapAmount] = useState("");

  const { isPermissionModalOpen, setIsPermissionModalOpen, handleSubscribe } =
    useSubscription(newSwapAmount);

  return (
    <>
      <GrantPermission
        onOpenChange={() => setIsPermissionModalOpen((prev) => !prev)}
        open={isPermissionModalOpen}
        handleSubmit={handleSubscribe}
      />

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="bg-[#02060D] text-center border border-[#242E38] rounded-lg p-7"
          sizes="large"
        >
          <DialogHeader className="">
            <DialogTitle className="text-base md:text-lg text-left font-semibold text-[#F3F5FF]">
              Change Autoswap Settings
            </DialogTitle>
          </DialogHeader>
          <section className="mt-5">
            <div className="flex flex-col gap-y-6 text-left">
              <div>
                <p className="mb-2 text-[#CBCFD2] text-[13px]">
                  Current threshold amount:
                </p>
                <div className="bg-[#0B0F16] py-3 flex gap-x-2 justify-center items-center text-base font-bold text-[#7E8489] rounded-xl">
                  <img
                    src="/coin-logos/strk-logo.svg"
                    className="w-5 h-5"
                    alt=""
                  />
                  3000 STRK
                </div>
              </div>

              <div>
                <p className="mb-2 text-[#CBCFD2] text-[13px]">
                  Input the new threshold you want to autoswap
                </p>
                <div className="relative bg-[#0D1016] px-4 py-3 flex items-center justify-between w-full rounded-[8px] text-[#7E8489]">
                  <input
                    type="number"
                    name="amount"
                    className="bg-transparent w-full text-sm p-1 placeholder:text-grey-900 text-white border-none focus:outline-none"
                    placeholder="e.g.: 294839 STRK"
                    value={newSwapAmount}
                    onChange={(e) => setNewSwapAmount(e.target.value)}
                    required
                  />
                  <EditIcon size={14} />
                </div>
              </div>
            </div>
            <button
              type="submit"
              id="submit"
              className="disabled:bg-[#0D1016] bg-[#1D8CF4] border-[#1E2021] border-[1px] text-xs md:text-sm text-[#F3F5FF] py-3 w-full rounded-lg font-semibold mt-10 disabled:cursor-not-allowed transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
              disabled={!newSwapAmount || !Number(newSwapAmount)}
              onClick={(e) => {
                e.preventDefault();
                if (newSwapAmount && Number(newSwapAmount)) {
                  setIsPermissionModalOpen(true);
                }
              }}
            >
              Apply
            </button>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
}
