"use client";
import { useState } from "react";
import { STRK_TOKEN, USDT_TOKEN } from "../utils/data";
import { EditIcon } from "@/svgs/EditIcon";
import { ArrowRight, X } from "lucide-react";
import GrantPermission from "./ui/modals/grant-permission-modal";
import { useSubscription } from "../hooks/useSubscription";

interface SelectTokenProps {
  onClose?: () => void;
  hasCloseButton?: boolean;
}

const SubscribeForm = ({
  onClose,
  hasCloseButton = false,
}: SelectTokenProps) => {
  const [swapAmount, setSwapAmount] = useState("");
  const { isPermissionModalOpen, setIsPermissionModalOpen, handleSubscribe } =
    useSubscription(swapAmount);

  return (
    <>
      <GrantPermission
        onOpenChange={() => setIsPermissionModalOpen((prev) => !prev)}
        open={isPermissionModalOpen}
        handleSubmit={handleSubscribe}
      />
      <div className="relative px-6 py-8 sm:px-8 xl:py-10 text-grey-300 mx-auto">
        {hasCloseButton && (
          <button
            type="button"
            className="cursor-pointer absolute right-7 top-7 z-[51] text-[#F3F5FF]"
            onClick={onClose}
          >
            <X />
          </button>
        )}
        <h1 className="text-2xl md:text-4xl md:leading-[100%] font-extrabold text-[#F3F5FF] max-w-[280px] mx-auto md:max-w-full text-center mb-2">
          Your Tokens, Your <span className="text-[#1D8CF4]">Rules</span>
        </h1>
        <p className="text-center text-[#DCDFE1] mb-6 lg:mb-10 text-sm">
          Set up auto-swaps for your STRK tokens with ease.
        </p>
        <form className="py-6 px-3  md:px-[80px] bg-[#02060D1F] backdrop-blur-md rounded-xl">
          <div className="flex flex-col items-start w-full gap-2">
            <label
              htmlFor="swapAmount"
              className="text-[#CBCFD2] text-[13px] md:text-sm"
            >
              Input the amount you want to autoswap anytime{" "}
              <span className="font-bold">STRK</span> is sent to your account
            </label>
            <div className="relative bg-[#0D1016] px-4 py-3 flex items-center justify-between w-full rounded-[8px]">
              <input
                type="number"
                name="amount"
                className="bg-transparent w-full text-base p-1 placeholder:text-grey-900 border-none focus:outline-none"
                placeholder="294839 STRK"
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
                required
              />
              <EditIcon />
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] text-[#DCDFE1]">
            Autoswappr will convert your <span className="font-bold">STRK</span>{" "}
            tokens to <span className="font-bold">USDT</span>.
          </p>
          <div className="flex md:flex-row flex-col mt-6 gap-y-4 gap-x-9 text-center items-center">
            <div>
              <h5 className="mb-3 text-left text-[#A8AFB4] text-[13px]">
                Swap From
              </h5>
              <TokenPreview
                name={STRK_TOKEN.coinName}
                symbol={STRK_TOKEN.coinSymbol}
                img={STRK_TOKEN.imgLink}
              />
            </div>
            <div className="rounded-full bg-[#0D1016] flex justify-center items-center text-[#242E38] p-1 rotate-90 md:rotate-0">
              <ArrowRight size={24} />
            </div>
            <div>
              <h5 className="mb-3 text-left text-[13px] text-[#A8AFB4]">
                Swap To
              </h5>
              <TokenPreview
                name={USDT_TOKEN.coinName}
                symbol={USDT_TOKEN.coinSymbol}
                img={USDT_TOKEN.imgLink}
              />
            </div>
          </div>

          <button
            type="button"
            id="submit"
            className="disabled:bg-[#0D1016] bg-[#1D8CF4] border-[#1E2021] border-[1px] text-xs md:text-sm text-[#F3F5FF] py-3 w-full rounded-lg font-semibold mt-12 disabled:cursor-not-allowed cursor-pointer transition-all duration-300 ease-in-out"
            disabled={!swapAmount || !Number(swapAmount)}
            onClick={(e) => {
              e.preventDefault();
              if (swapAmount && Number(swapAmount)) {
                setIsPermissionModalOpen(true);
              }
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default SubscribeForm;

const TokenPreview = ({
  name,
  symbol,
  img,
}: {
  name: string;
  symbol: string;
  img: string;
}) => (
  <div className="w-[200px] py-6 border-[#242E38] border rounded-xl">
    <img
      src={img}
      className="w-10 h-10 md:w-[45px] md:h-[45px] mb-2 mx-auto"
      alt={symbol}
    />
    <h3 className="text-sm md:text-base text-[#CBCFD2]">{name}</h3>
    <h4 className="uppercase font-semibold text-[#4C5053] text-xs md:text-sm">
      {symbol}
    </h4>
  </div>
);
