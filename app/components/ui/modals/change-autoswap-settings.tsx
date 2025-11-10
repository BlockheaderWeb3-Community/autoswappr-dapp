import { useEffect, useMemo, useState } from "react";
import { EditIcon } from "lucide-react";
import GrantPermission from "./grant-permission-modal";
import { useSubscription } from "../../../hooks/useSubscription";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";

interface ChangeAutoswapSettingsProps {
  open: boolean;
  onOpenChange: () => void;
  currentAllowance: number;
  isLoadingAllowance: boolean;
  allowanceError?: Error | null;
  onAllowanceRefresh: () => void;
}

export default function ChangeAutoswapSettings({
  open,
  onOpenChange,
  currentAllowance,
  isLoadingAllowance,
  allowanceError,
  onAllowanceRefresh,
}: ChangeAutoswapSettingsProps) {
  const [newSwapAmount, setNewSwapAmount] = useState("");
  const [isGrantPermissionLoading, setIsGrantPermissionLoading] =
    useState(false);

  const {
    isPermissionModalOpen,
    setIsPermissionModalOpen,
    handleSubscribe,
  } = useSubscription(newSwapAmount, {
    onSuccess: () => {
      onAllowanceRefresh();
      onOpenChange();
      setNewSwapAmount("");
    },
  });

  useEffect(() => {
    if (!open) return;
    if (currentAllowance && currentAllowance > 0) {
      setNewSwapAmount(Math.floor(currentAllowance).toString());
    } else {
      setNewSwapAmount("");
    }
  }, [open, currentAllowance]);

  const isApplyDisabled = useMemo(() => {
    if (!newSwapAmount) return true;
    const parsedValue = Number(newSwapAmount);
    return Number.isNaN(parsedValue) || parsedValue <= 0;
  }, [newSwapAmount]);

  return (
    <>
      <GrantPermission
        onOpenChange={() => setIsPermissionModalOpen((prev) => !prev)}
        open={isPermissionModalOpen}
        handleSubmit={async () => {
          setIsGrantPermissionLoading(true);
          try {
            await handleSubscribe();
          } finally {
            setIsGrantPermissionLoading(false);
          }
        }}
        isSubmitting={isGrantPermissionLoading}
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
                <div className="bg-[#0B0F16] py-3 flex gap-x-2 justify-center items-center text-base font-bold text-[#7E8489] rounded-xl min-h-[48px]">
                  <img
                    src="/coin-logos/strk-logo.svg"
                    className="w-5 h-5"
                    alt=""
                  />
                  {isLoadingAllowance ? (
                    <span className="text-sm text-[#CBCFD2]">
                      Fetching allowance...
                    </span>
                  ) : allowanceError ? (
                    <span className="text-sm text-red-400">
                      Unable to load allowance
                    </span>
                  ) : (
                    <span>
                      {currentAllowance.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 0,
                      })}{" "}
                      STRK
                    </span>
                  )}
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
                    onChange={(e) => {
                      const rawValue = e.target.value;
                      const sanitizedValue = rawValue.replace(/[^\d]/g, "");
                      setNewSwapAmount(sanitizedValue);
                    }}
                    required
                  />
                  <EditIcon size={14} />
                </div>
              </div>
            </div>
            <button
              type="submit"
              id="submit"
              className="disabled:bg-[#0D1016] bg-[#1D8CF4] border-[#1E2021] border-[1px] text-xs md:text-sm text-[#F3F5FF] py-3 w-full rounded-lg font-semibold mt-10 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
              disabled={isApplyDisabled}
              onClick={(e) => {
                e.preventDefault();
                if (!isApplyDisabled) {
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
