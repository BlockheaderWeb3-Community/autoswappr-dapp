import { CheckIcon } from "@/svgs/CheckIcon";
import { Coin } from "../utils/types";
import { UncheckedIcon } from "@/svgs/UncheckedIcon";

interface CoinCardProps {
  coin: Coin;
  isSelected: boolean;
  onSelect: (coin: Coin) => void;
  disabled?: boolean;
}

export default function CoinCard({
  coin,
  isSelected,
  onSelect,
  disabled = false,
}: CoinCardProps) {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (!disabled) {
          onSelect(coin);
        }
      }}
      className={`rounded-[8px] border-grey-1100 border py-1 px-2 grid grid-cols-[24px_auto_30px] items-center sm:grid-cols-[35px_auto_30px] ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div className="items-center justify-center flex">
        <img src={coin.imgLink} alt={coin.coinName} className="sm:w-8 sm:h-8" />
      </div>
      <div className="flex pl-2 flex-col items-start">
        <p className="text-[12px] m-0 text-grey-300 sm:text-[16px] font-normal">
          {coin.coinName}
        </p>
        <p className="capitalize text-[10px] sm:text-[13px] sm:font-semibold text-grey-900">
          {coin.coinSymbol}
        </p>
      </div>
      <div className="items-center justify-center flex">
        {isSelected ? <CheckIcon /> : <UncheckedIcon />}
      </div>
    </div>
  );
}
