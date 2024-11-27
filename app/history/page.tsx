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
            coinTo:"USDT"
        },
        to:{
            coinTo:"USDT",
            coinToAmount:30,
            coinFrom:"BTC",
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
            coinTo:"USDT"
        },
        to:{
            coinTo:"USDT",
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
            coinTo:"USDT"
        },
        to:{
            coinTo:"USDT",
            coinToAmount:30,
            coinFrom:"STRK",
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
            coinFrom:"ETH",
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
            coinTo:"USDT"
        },
        to:{
            coinTo:"USDT",
            coinToAmount:300,
            coinFrom:"SOL",
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
            coinTo:"USDT"
        },
        to:{
            coinTo:"USDT",
            coinToAmount:300,
            coinFrom:"SOL",
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
]
// bg-cover bg-center bg-no-repeat h-screen 
export default function DexHistory(){
    return(
        <>
           <div className="hidden md:block w-full h-[150px] bg-main-bg bg-cover" />
           <section className="bg-cover bg-main-bg md:bg-inherit bg-center bg-no-repeat mt-10 pt-28 md:mt-0 md:pt-0 pb-10 mx-auto leading-[19.7px]">
            <h1 className="text-center capitalize pb-0 md:pb-8 text-2xl text-main-white font-semibold">history log</h1>
            <div className="hidden sm:block w-[95%] md:w-[80%] lg:w-[60%] max-w-[800px] overflow-auto max-h-[400px] mx-auto">
            <div className="flex justify-between capitalize font-normal text-sm w-full border-b-[#170F2E] border-b pb-3 place-content-end">
                <h3>from</h3>
                <h3>to</h3>
                <h3>percentage</h3>
                <h3>autoSwapper</h3>
            </div>
            {history.map((data,index)=>{
                return (<div className="grid grid-cols-4 place-content-between capitalize font-medium w-full py-5" key={index}>
                    <div className="flex items-center gap-[12px]">
                        <h1 className="text-dark-blue">{index+1}</h1>
                       <div className="flex gap-10 items-center">
                       <div className="flex relative">
                            <Image src={data.from.fromImage} alt="coin from" className="w-6 h-6" />
                            <Image src={data.from.toImage} alt="coin to"  className="absolute left-5"/>
                        </div>
                        <div className="capitalize text-main-white">
                            <h2 className="text-base">{data.from.coinFrom}</h2>
                            <h3 className="text-dark-blue text-sm">{data.from.coinTo}</h3>
                        </div>
                       </div>
                    </div>
                    <div className="uppercase text-main-white place-self-centerfix">
                        <h2 className="text-base">{data.to.coinFromAmount} {data.to.coinFrom}</h2>
                        <h3 className="text-dark-blue text-sm">{data.to.coinToAmount} {data.to.coinTo}</h3>
                    </div>
                    <div className="bg-[#100827] rounded-2xl w-fit h-fit place-self-center  px-4 py-1">{data.percentage}%</div>
                    <div className="uppercase text-main-white place-self-end">
                        <h2 className="text-base">{data.date.day}</h2>
                        <h3 className="text-dark-blue text-sm">{data.date.time}</h3>
                    </div>
                </div>)
            })}
            </div>
            <div className="sm:hidden leading-[19.07px] max-h-[400px] overflow-auto w-full px-10">
                <div className="capitalize text-main-white flex justify-between border-b border-[#433B5A] pb-3">
                    <h2>token</h2>
                    <h2>amount</h2>
                </div>
                <div className="capitalize text-main-white flex flex-col justify-between">
                {history.map((data, index)=>{
                    return(<div className="py-5 flex justify-between w-full" key={index}>

                        <div className="flex items-center gap-[12px]">
                            <h1 className="text-dark-blue">{index+1}</h1>
                            <div className="flex gap-10 items-center">
                            <div className="flex relative">
                            <Image src={data.from.fromImage} alt="coin from" className="w-6 h-6" />
                            <Image src={data.from.toImage} alt="coin to"  className="absolute left-5"/>
                            </div>
                            <div className="capitalize text-main-white">
                            <h2 className="text-sm">{data.from.coinFrom}</h2>
                            <h3 className="text-dark-blue text-xs">{data.from.coinTo}</h3>
                            </div>
                       </div>
                    </div>
                    <div className="uppercase text-main-white text-start">
                            <h2 className="font-normal text-sm">{data.to.coinFromAmount} {data.to.coinFrom}</h2>
                            <h3 className="text-dark-blue font-semibold text-xs">{data.to.coinToAmount} {data.to.coinTo}</h3>
                        </div>
                    </div>
                )})}
                </div>
            </div>
        </section>
        <div className="hidden md:block w-full h-[50px] bg-main-bg bg-cover bottom-0 transform rotate-180" />
        </>

)}