import { CheckIcon } from "@/svgs/CheckIcon";
import { Coin } from "../utils/types";
import { UncheckedIcon } from "@/svgs/UncheckedIcon";

const CoinCard = ({
  coin,
  isSelected,
  onSelect,
}: {
  coin: Coin;
  isSelected: boolean;
  onSelect: (coin: Coin) => void;
}) => (
  <div
    onClick={(e) => {
      e.preventDefault();
      onSelect(coin);
    }}
    className={`sm:w-[224px] w-[150px] h-[60px] md:h-[60px] rounded-full border-[#170F2E] py-1 px-2 grid grid-cols-[24px_auto_30px] items-center sm:grid-cols-[35px_auto_30px] cursor-pointer ${
      isSelected ? "bg-[#0F96E3]/10" : ""
    }`}
  >
    <div className="items-center justify-center flex">
      <img src={coin.imgLink} alt={coin.coinName} className="sm:w-8 sm:h-8" />
    </div>
    <div className="flex pl-2 flex-col items-start">
      <p className="text-[12px] sm:text-[16px] font-normal sm:font-semibold">
        {coin.coinName}
      </p>
      <p className="capitalize text-[10px] sm:text-[13px] text-[#433B5A]">
        {coin.coinSymbol}
      </p>
    </div>
    <div className="items-center justify-center flex">
      {isSelected ? <CheckIcon /> : <UncheckedIcon />}
    </div>
  </div>
);

export default CoinCard;
