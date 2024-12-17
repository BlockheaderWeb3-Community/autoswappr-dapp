import Image from "next/image";
import getHero from "../../public/getting-started-hero.png";
import getMid from "../../public/getting-started-mid.png";
import getBottom from "../../public/getting-started-bottom.png";
import { Metadata } from "next";

export const metadata: Metadata ={
  title:"Learn About Autoswappr",
  description:"Discover how Autoswappr works. Learn how to swap your tokens without intermediaries. Get started with our comprehensive guide."
  }
 
export default function GetStarted() {
  return (
    <div className="w-full relative bg-[#08001F]">
      <Image src={getHero} alt="" className="w-full py-5" />
      <div className="grid gap-5 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">Creating an Account</h3>
        <ol className="list-decimal text-[#D2CED8CC] pl-4">
          <li>Visit autoswapper.io</li>
          <li>Click the &apos; Connect Wallet &apos &apos; button in the top-right corner</li>
          <li>Select a wallet to connect to Autoswapper</li>
          <li>Grant Autoswapper permision and you are good to go!</li>
        </ol>
      </div>
      <Image src={getMid} alt="" className="w-full py-5 object-cover" />
      <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">
          Connecting Your Wallet
        </h3>
        <p className="text-[#D2CED8CC]">
          Autoswappr supports the following wallets:
        </p>
        <ol className="list-decimal text-[#D2CED8CC] pl-4">
          <li>Argent</li>
          <li>Braavos</li>
        </ol>
      </div>

      <Image src={getBottom} alt="" className="w-full py-5" />
      <div className="grid gap-5 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6">
          To connect your wallet
        </h3>
        <ol className="list-decimal text-[#D2CED8CC] pl-4">
          <li>Click the Connect Wallet button on the homepage.</li>
          <li>Choose your wallet provider from the list.</li>
          <li>Confirm the connection through your wallet app.</li>
          <li>
            Once connected, your wallet address will appear at the top of the
            page, indicating a successful connection.
          </li>
        </ol>
      </div>
    </div>
  );
}
