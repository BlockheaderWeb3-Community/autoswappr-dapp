import btc from "../../public/coin-logos-svg/btc-logo.svg";
import eth from "../../public/coin-logos-svg/eth-logo.svg";
import sol from "../../public/coin-logos-svg/sol-logo.svg";
import graph from "../../public/coin-logos-svg/graph-logo.svg";
import strk from "../../public/coin-logos-svg/strk-logo.svg";
import usdc from "../../public/coin-logos-svg/usdc-logo.svg";
import usdt from "../../public/coin-logos-svg/usdt-logo.svg";
import Image from "next/image";

const activityLog = [
  {
    from: {
      fromImage: btc,
      toImage: usdc,
      coinFrom: "bitcoin",
      coinTo: "USDC",
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
    },
  },
  {
    from: {
      fromImage: btc,
      toImage: usdt,
      coinFrom: "bitcoin",
      coinTo: "USDT",
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
    },
  },
  {
    from: {
      fromImage: graph,
      toImage: usdt,
      coinFrom: "the graph",
      coinTo: "USDT",
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
    },
  },
  {
    from: {
      fromImage: strk,
      toImage: usdc,
      coinFrom: "starknet",
      coinTo: "USDC",
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
    },
  },
  {
    from: {
      fromImage: eth,
      toImage: usdc,
      coinFrom: "ethereum",
      coinTo: "USDC",
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
    },
  },
  {
    from: {
      fromImage: sol,
      toImage: usdt,
      coinFrom: "solana",
      coinTo: "USDT",
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
    },
  },
  {
    from: {
      fromImage: btc,
      toImage: usdc,
      coinFrom: "Bitcoin",
      coinTo: "USDT",
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
    },
  },
];

const ActivityLog = () => {
  return (
    <>
      <section className="bg-cover bg-main-bg md:bg-inherit bg-center bg-no-repeat mt-10 pt-28 md:mt-0 md:pt-[150px] pb-10 mx-auto leading-[19.7px] h-[100vh]">
        <h1 className="text-center capitalize pb-0 md:pb-8 text-lg md:text-2xl text-main-white font-semibold mb-4">
          Autoswappr Activity log
        </h1>
        {/* desktop */}
        <div className="hidden sm:block w-[95%] md:w-[80%] lg:w-[60%] max-w-[800px] overflow-auto md:max-h-[600px] mx-auto">
          <div className="flex justify-between capitalize font-normal text-sm w-full border-b-[#170F2E] border-b pb-3 place-content-end">
            <h3>from</h3>
            <h3>to</h3>
            <h3>percentage</h3>
            <h3>autoSwapper</h3>
          </div>
          {activityLog.map((data, index) => {
            return (
              <div
                className="grid grid-cols-4 place-content-between capitalize font-medium w-full py-5"
                key={index}
              >
                <div className="flex items-center gap-[12px]">
                  <h1 className="text-dark-blue">{index + 1}</h1>
                  <div className="flex gap-10 items-center">
                    <div className="flex relative">
                      <Image
                        src={data.from.fromImage}
                        alt="coin from"
                        className="w-6 h-6"
                      />
                      <Image
                        src={data.from.toImage}
                        alt="coin to"
                        className="absolute left-5"
                      />
                    </div>
                    <div className="capitalize text-main-white">
                      <h2 className="text-base">{data.from.coinFrom}</h2>
                      <h3 className="text-dark-blue text-sm">
                        {data.from.coinTo}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="uppercase text-main-white place-self-center text-left">
                  <h2 className="text-base">
                    {data.to.coinFromAmount} {data.to.coinFrom}
                  </h2>
                  <h3 className="text-dark-blue text-sm">
                    {data.to.coinToAmount} {data.to.coinTo}
                  </h3>
                </div>
                <div className="bg-[#100827] rounded-2xl w-fit h-fit place-self-center  px-4 py-1">
                  {data.percentage}%
                </div>
                <div className="uppercase text-main-white place-self-end">
                  <h2 className="text-base">{data.date.day}</h2>
                  <h3 className="text-dark-blue text-sm">{data.date.time}</h3>
                </div>
              </div>
            );
          })}
        </div>
        {/* mobile */}
        <div className="sm:hidden leading-[19.07px] max-h-[400px] overflow-auto w-full px-10">
          <div className="capitalize text-main-white flex justify-between border-b border-[#433B5A] pb-3">
            <h2>token</h2>
            <h2>amount</h2>
          </div>
          <div className="capitalize text-main-white flex flex-col justify-between">
            {activityLog.map((data, index) => {
              return (
                <div className="py-5 flex justify-between w-full" key={index}>
                  <div className="flex items-center gap-[12px]">
                    <h1 className="text-dark-blue">{index + 1}</h1>
                    <div className="flex gap-10 items-center">
                      <div className="flex relative">
                        <Image
                          src={data.from.fromImage}
                          alt="coin from"
                          className="w-6 h-6"
                        />
                        <Image
                          src={data.from.toImage}
                          alt="coin to"
                          className="absolute left-5"
                        />
                      </div>
                      <div className="capitalize text-main-white">
                        <h2 className="text-sm">{data.from.coinFrom}</h2>
                        <h3 className="text-dark-blue text-xs">
                          {data.from.coinTo}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="uppercase text-main-white text-start">
                    <h2 className="font-normal text-sm text-start">
                      {data.to.coinFromAmount} {data.to.coinFrom}
                    </h2>
                    <h3 className="text-dark-blue font-semibold text-xs text-start">
                      {data.to.coinToAmount} {data.to.coinTo}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default ActivityLog;
