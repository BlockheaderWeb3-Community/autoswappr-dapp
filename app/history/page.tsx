import btc from "../../public/coin-logos/btc-logo.png"
import eth from "../../public/coin-logos/eth-logo.png"
import sol from "../../public/coin-logos/sol-logo.png"
import strk from "../../public/coin-logos/strk-logo.png"
import usdc from "../../public/coin-logos/usdc-logo.png"
import usdt from "../../public/coin-logos/usdt-logo.png"
import Image from "next/image";

const history =[
    {
        from:{
            fromImage:btc,
            toImage:usdc,
            coinFrom:"bitcoin",
            coinTo:"USDC"
        },
        to:{
            coinTo:"USDC",
            coinToAmount:1220,
            coinFrom:"BTC",
            coinFromAmount:0.34421,
        },
        percentage:29,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
    {
        from:{
            fromImage:btc,
            toImage:usdt,
            coinFrom:"bitcoin",
            coinTo:"USDCT"
        },
        to:{
            coinTo:"USDCT",
            coinToAmount:30,
            coinFrom:"bitcoin",
            coinFromAmount:900,
        },
        percentage:79,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
    {
        from:{
            fromImage:btc,
            toImage:usdt,
            coinFrom:"the graph",
            coinTo:"USDCT"
        },
        to:{
            coinTo:"USDCT",
            coinToAmount:30,
            coinFrom:"GRT",
            coinFromAmount:200,
        },
        percentage:90,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
    {
        from:{
            fromImage:strk,
            toImage:usdc,
            coinFrom:"starknet",
            coinTo:"USDC"
        },
        to:{
            coinTo:"USDC",
            coinToAmount:30,
            coinFrom:"starknet",
            coinFromAmount:900,
        },
        percentage:100,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
    {
        from:{
            fromImage:eth,
            toImage:usdc,
            coinFrom:"ethereum",
            coinTo:"USDC"
        },
        to:{
            coinTo:"USDC",
            coinToAmount:2500,
            coinFrom:"ethereum",
            coinFromAmount:0.7,
        },
        percentage:29,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
    {
        from:{
            fromImage:sol,
            toImage:usdt,
            coinFrom:"solana",
            coinTo:"USDCT"
        },
        to:{
            coinTo:"USDCT",
            coinToAmount:300,
            coinFrom:"solana",
            coinFromAmount:10,
        },
        percentage:79,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
    {
        from:{
            fromImage:sol,
            toImage:usdt,
            coinFrom:"solana",
            coinTo:"USDCT"
        },
        to:{
            coinTo:"USDCT",
            coinToAmount:300,
            coinFrom:"solana",
            coinFromAmount:10,
        },
        percentage:79,
        date:{
            day:"21.12.2024",
            time:"GMT 21:08 PM",
        }
    },
]
export default function DexHistory(){
    return <>
        <section className="w-[95%] md:w-[70%] lg:w-[60%] flex justify-center items-center mx-auto mt-3 pt-10 flex-col gap-y-8 h-full">
            <h1 className="uppercase text-main-white font-semibold">history log</h1>
            <div className="grid grid-cols-4 place-content-start capitalize font-medium w-full border-b-[#170F2E] border-b pb-3">
                <h3>from</h3>
                <h3>to</h3>
                <h3>percentage</h3>
                <h3>autoSwapper</h3>
            </div>
            {history.map((data,index)=>{
                return (<div className="grid grid-cols-4 place-content-start capitalize font-medium w-full" key={index}>
                    <div className="flex items-center gap-10">
                        <div className="flex relative">
                            <Image src={data.from.fromImage} alt="coin from" className="w-6 h-6" />
                            <Image src={data.from.toImage} alt="coin to"  className="absolute left-5"/>
                        </div>
                        <div className="capitalize text-main-white">
                            <h2>{data.from.coinFrom}</h2>
                            <h3 className="text-dark-blue">{data.from.coinTo}</h3>
                        </div>
                    </div>
                    <div className="uppercase text-main-white">
                        <h2>{data.to.coinFromAmount} {data.to.coinFrom}</h2>
                        <h3 className="text-dark-blue">{data.to.coinToAmount} {data.to.coinTo}</h3>
                    </div>
                    <div className="bg-[#100827] rounded-2xl w-fit h-fit place-items-center px-4 py-1">{data.percentage}%</div>
                    <div className="uppercase text-main-white">
                        <h2>{data.date.day}</h2>
                        <h3 className="text-dark-blue">{data.date.time}</h3>
                    </div>
                </div>)
            })}
        </section>
    </>
}