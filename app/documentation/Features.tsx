import Image from "next/image";
import getHero from "../../public/featureTop.png"
import getMid from "../../public/featureEnd.png"

export default function Features(){
    return <div className="w-full relative bg-[#08001F]">   
    <Image src={getHero} alt="" className="w-full py-5" />

   
    <div className="grid gap-5 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-white text-sm leading-6">Swapping Tokens Automatically</h3>
        <ol className="list-disc font-[400] text-[14px] text-[#DCDFE1] pl-4">
            <li> How It Works: When a token is received in your connected wallet, Autoswappr automatically exchanges it for your selected stable token also known as base token (e.g., USDT or USDC) using the best available rate.</li>
            <li>Customisation: Users can define thresholds for automatic swaps or choose to swap all tokens.</li>
            <li>Supported Blockchains: Ethereum, Binance Smart Chain, and Polygon.</li>
            <li>Real-Time Tracking: Monitor your swaps in the dashboard, including transaction details, rates applied, and token balances.</li>
        </ol>
    </div>
    <Image src={getMid} alt="" className="w-full py-5" />
    <div className="grid gap-2 font-normal leading-6 text-sm">
        <h3 className="font-semibold text-sm leading-6 text-[#DCDFE1]">DEX Page</h3>
        <ol className="list-disc font-[400] text-[14px] text-[#DCDFE1] pl-4">
            <li> Simple Interface: The DEX page allows you to swap tokens manually. Enter the token pair, confirm the rate, and complete your swap in seconds.
            </li>
            <li>Competitive Fees: Enjoy some of the lowest transaction fees in the market.</li>
            <li>Popular Token Pairs: ETH/USDC, BTC/USDT, MATIC/DAI, and more.</li>
            <li>Security: All transactions are executed via audited smart contracts.</li>
        </ol>
    </div>

    </div>
}
