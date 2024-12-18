import Image from "next/image";
import hero from "../../public/autosapHero.png";
import starIcon from "../../public/Star.icon.svg";

 
  
export default function Introduction() {
  return (
    <div className="w-full relative ">
      <Image src={starIcon} alt="" className="absolute right-0 top-14" />
      <Image src={starIcon} alt="" className="absolute left-0 top-14" />
      <Image src={hero} alt="" className="w-full py-5" />

      <div className="grid gap-5 font-normal leading-6 text-sm text-[#D2CED8CC]">
        <p>
          Autoswappr is an innovative blockchain platform designed to simplify
          token management. Whether you &apos;re a trader, a frequent blockchain user,
          or a novice in crypto, Autoswappr ensures that every token you receive
          is automatically converted into a stable token of your choice,
          protecting your funds from volatility.
        </p>
        <p>
          Our platform also features a DEX (Decentralized Exchange) page, which
          offers seamless token-to-token swapping at competitive rates, giving
          you complete control over your assets.
        </p>
        <p>
          With Autoswappr, you save time, reduce complexity, and gain confidence
          knowing your portfolio is always stable and manageable.
        </p>
      </div>
    </div>
  );
}
