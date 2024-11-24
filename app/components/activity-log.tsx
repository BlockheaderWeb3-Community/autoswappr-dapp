import Navbar from "../components/navbar";
import btc from "../../public/coin-logos/btc-logo.png"
import eth from "../../public/coin-logos/eth-logo.png"
import sol from "../../public/coin-logos/sol-logo.png"
import strk from "../../public/coin-logos/strk-logo.png"
import usdc from "../../public/coin-logos/usdc-logo.png"
import usdt from "../../public/coin-logos/usdt-logo.png"
import Image from "next/image";

const activityLog = [
    {
        from: {
            fromImage: btc,
            toImage: usdc,
            coinFrom: "bitcoin",
            coinTo: "USDC"
        },
        to: {
            coinTo: "USDC",
            coinToAmount: 1220,
            coinFrom: "BTC",
            coinFromAmount: 0.0002,
        },
        percentage: 25,
        date: {
            day: "10.09.2024",
            time: "GMT 21:08 PM",
        }
    },
    {
        from: {
            fromImage: btc,
            toImage: usdt,
            coinFrom: "bitcoin",
            coinTo: "USDT"
        },
        to: {
            coinTo: "USDT",
            coinToAmount: 30,
            coinFrom: "strk",
            coinFromAmount: 900,
        },
        percentage: 75,
        date: {
            day: "21.12.2024",
            time: "GMT 21:08 PM",
        }
    },
    {
        from: {
            fromImage: btc,
            toImage: usdt,
            coinFrom: "the graph",
            coinTo: "USDT"
        },
        to: {
            coinTo: "USDT",
            coinToAmount: 30,
            coinFrom: "GRT",
            coinFromAmount: 200,
        },
        percentage: 50,
        date: {
            day: "21.12.2024",
            time: "GMT 21:08 PM",
        }
    },
    {
        from: {
            fromImage: strk,
            toImage: usdc,
            coinFrom: "starknet",
            coinTo: "USDC"
        },
        to: {
            coinTo: "USDC",
            coinToAmount: 30,
            coinFrom: "strk",
            coinFromAmount: 900,
        },
        percentage: 100,
        date: {
            day: "21.12.2024",
            time: "GMT 21:08 PM",
        }
    },
    {
        from: {
            fromImage: eth,
            toImage: usdc,
            coinFrom: "ethereum",
            coinTo: "USDC"
        },
        to: {
            coinTo: "USDC",
            coinToAmount: 2500,
            coinFrom: "eth",
            coinFromAmount: 0.7,
        },
        percentage: 25,
        date: {
            day: "21.12.2024",
            time: "GMT 21:08 PM",
        }
    },
    {
        from: {
            fromImage: sol,
            toImage: usdt,
            coinFrom: "solana",
            coinTo: "USDT"
        },
        to: {
            coinTo: "USDT",
            coinToAmount: 3000,
            coinFrom: "sol",
            coinFromAmount: 10,
        },
        percentage: 25,
        date: {
            day: "21.12.2024",
            time: "GMT 21:08 PM",
        }
    },
    {
        from: {
            fromImage: btc,
            toImage: usdc,
            coinFrom: "Bitcoin",
            coinTo: "USDT"
        },
        to: {
            coinTo: "USDT",
            coinToAmount: 10,
            coinFrom: "strk",
            coinFromAmount: 900,
        },
        percentage: 25,
        date: {
            day: "21.12.2024",
            time: "GMT 21:08 PM",
        }
    },
]

const ActivityLog = () => {
    return <>
        <section className="w-[95%] md:w-[70%] lg:w-[60%] flex justify-center items-center mx-auto mt-3 pt-10 flex-col gap-y-8 h-full">
            <h1 className="capitalize text-main-white font-semibold text-2xl md:text-3xl text-center md:text-left">Autoswappr Activity Log</h1>
            
            {/* Table Headers - Hide on mobile */}
            <div className="hidden md:grid grid-cols-4 place-content-start text-left capitalize font-medium w-full border-b-[#170F2E] border-b pb-3">
                <h3 className="text-left">from</h3>
                <h3 className="text-left">to</h3>
                <h3 className="text-left">percentage</h3>
                <h3 className="text-left">Date/Time</h3>
            </div>

            {activityLog.map((data, index) => {
                return (
                    <div key={index} className="flex flex-col md:grid md:grid-cols-4 place-content-start text-left capitalize font-medium w-full bg-[#170F2E] md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0">
                        {/* From Section */}
                        <div className="flex items-center gap-3 md:gap-10 mb-3 md:mb-0">
                            <div className="flex relative">
                                <Image src={data.from.fromImage} alt="coin from" className="w-5 h-5 md:w-6 md:h-6" />
                                <Image src={data.from.toImage} alt="coin to" className="absolute left-3 md:left-5 w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="capitalize text-main-white">
                                <h2 className="text-sm md:text-base">{data.from.coinFrom}</h2>
                                <h3 className="text-dark-blue text-xs md:text-base">{data.from.coinTo}</h3>
                            </div>
                        </div>

                        {/* Mobile Layout - Top Row */}
                        <div className="flex justify-between items-start md:hidden mb-4">
                            <div className="bg-[#100827] rounded-xl px-3 py-1 text-xs">
                                {data.percentage}%
                            </div>
                        </div>

                        {/* Desktop Amount Section */}
                        <div className="hidden md:block uppercase text-main-white text-left">
                            <h2>{data.to.coinFromAmount} {data.to.coinFrom}</h2>
                            <h3 className="text-dark-blue">{data.to.coinToAmount} {data.to.coinTo}</h3>
                        </div>

                        {/* Desktop Percentage Section */}
                        <div className="hidden md:block bg-[#100827] rounded-2xl w-fit h-fit place-items-center px-4 py-1">
                            {data.percentage}%
                        </div>

                        {/* Desktop Date Section */}
                        <div className="hidden md:block uppercase text-main-white text-left">
                            <h2>{data.date.day}</h2>
                            <h3 className="text-dark-blue">{data.date.time}</h3>
                        </div>

                        {/* Mobile Layout - Bottom Row */}
                        <div className="md:hidden flex justify-between items-end pt-2 border-t border-[#2A2440]">
                            <div className="uppercase text-main-white">
                                <h2 className="text-sm font-medium">{data.to.coinFromAmount} {data.to.coinFrom}</h2>
                                <h3 className="text-dark-blue text-xs">{data.to.coinToAmount} {data.to.coinTo}</h3>
                            </div>
                            <div className="text-right">
                                <h2 className="text-main-white text-sm font-medium">{data.date.day}</h2>
                                <h3 className="text-dark-blue text-xs">{data.date.time}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    </>
}
export default ActivityLog;