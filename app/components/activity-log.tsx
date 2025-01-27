import btc from "../../public/coin-logos/btc-logo.svg";
import eth from "../../public/coin-logos/eth-logo.svg";
import strk from "../../public/coin-logos/strk-logo.svg";
import usdc from "../../public/coin-logos/usdc-logo.svg";
import usdt from "../../public/coin-logos/usdt-logo.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const dummyActivites = [
  {
    from: {
      img: strk,
      name: "STARKNET",
      symbol: "STRK",
      amount: 0.0002,
    },
    to: {
      img: usdc,
      name: "USDC",
      symbol: "USDC",
      amount: 1220,
    },
    percentage: 25,
    date: {
      day: "10.09.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      img: eth,
      name: "Ethereum",
      symbol: "ETH",
      amount: 0.0002,
    },
    to: {
      img: usdt,
      name: "USDT",
      symbol: "USDT",
      amount: 900,
    },
    percentage: 75,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      img: btc,
      name: "Bitcoin",
      symbol: "BTC",
      amount: 0.0002,
    },
    to: {
      img: usdt,
      name: "USDT",
      symbol: "USDT",
      amount: 900,
    },
    percentage: 75,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
];

const ActivityLog = () => {
  return (
    <>
      <section className="relative bg-cover bg-main-bg bg-center bg-no-repeat pt-[100px] md:pt-[147px] text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh]">
        <h1 className="text-base md:text-[20px] md:leading-[27px] font-semibold md:mb-2">
          Autoswappr Activity log
        </h1>
        <p className="text-sm md:text-base leading-[22px]">
          These are a list of all your AutoSwap activities.
        </p>
        {/* desktop */}
        <div className="overflow-scroll my-10 lg:my-20">
          <div className="border border-[#2C3035] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[50px_50px_1fr_1fr] sm:grid-cols-4 gap-x-4 text-sm py-4 px-5 border-b border-b-[#2C3035]">
              <div>From</div>
              <div>To</div>
              <div>Amount</div>
              <div>Timestamp</div>
            </div>
            <div className="flex flex-col gap-y-4 py-4 px-5 max-h-[900px] overflow-scroll">
              {dummyActivites.map((activity, i) => (
                <div
                  className="grid grid-cols-[50px_50px_1fr_1fr] sm:grid-cols-4 py-3 gap-x-4"
                  key={i}
                >
                  <div className="flex items-center gap-x-3 text-[#4C5053]">
                    <span className="text-xs font-semibold">{i + 1}.</span>
                    <Image
                      src={activity.from.img}
                      alt="coin-from"
                      className="w-5 h-5 md:w-8 md:h-8 flex-none"
                    />
                    <div className="sm:flex flex-col hidden">
                      <span className="text-sm md:text-base md:leading-[22px] text-[#F3F5FF]">
                        {activity.from.name}
                      </span>
                      <span className="text-xs md:text-sm">
                        {activity.from.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 text-[#4C5053]">
                    <Image
                      src={activity.to.img}
                      alt="coin-from"
                      className="w-5 h-5 md:w-8 md:h-8 flex-none"
                    />
                    <div className="sm:flex flex-col hidden">
                      <span className="text-sm md:text-base md:leading-[22px] text-[#F3F5FF]">
                        {activity.to.name}
                      </span>
                      <span className="text-xs md:text-sm">
                        {activity.to.symbol}
                      </span>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col sm:items-center text-left gap-x-3 text-[#F3F5FF] text-[10px] sm:text-xs md:text-base">
                    <span>
                      {activity.from.amount} {activity.from.symbol}
                    </span>
                    <span className="text-sm">
                      <ArrowRight size={10} />
                    </span>
                    <span>
                      {activity.to.amount} {activity.to.symbol}
                    </span>
                  </div>
                  <div className="flex flex-col text-[#F3F5FF] text-xs md:text-base">
                    <span>{activity.date.day}</span>
                    <span className="text-[#4C5053] text-[10px] md:text-sm">
                      {activity.date.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* mobile */}
        {/* <table className="sm:hidden leading-[18px] w-full mx-auto">
          <tbody className="capitalize text-main-white w-full flex flex-col flex-none justify-between h-full max-h-[550px] overflow-scroll scrollbar-hide px-2">
            <tr className="w-full capitalize text-main-white flex flex-none justify-between text-start border-b border-[#433B5A] pb-3 space-x-4">
              <th className="flex-none flex items-center justify-start w-[50%]">
                token
              </th>
              <th className="flex-none flex items-center justify-start w-[40%]">
                amount
              </th>
              <th className="flex-none flex items-center justify-end w-auto">
                date/time
              </th>
            </tr>
            {activityLog.map((data, index) => {
              return (
                <tr
                  className="py-2 flex flex-none justify-between w-full space-x-4"
                  key={index}
                >
                  <td className="w-[50%] flex flex-row flex-none items-center gap-2">
                    <h1 className="text-[#433B5A]">{index + 1}. </h1>
                    <div className="flex gap-8 items-center">
                      <div className="flex flex-none relative">
                        <Image
                          src={data.from.fromImage}
                          alt="coin from"
                          className="w-6 h-6 flex-none"
                        />
                        <Image
                          src={data.from.toImage}
                          alt="coin to"
                          className="absolute left-5 flex-none"
                        />
                      </div>
                      <div className="capitalize text-main-white">
                        <h2 className="text-sm">{data.from.coinFrom}</h2>
                        <h3 className="text-[#433B5A] text-xs">
                          {data.from.coinTo}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td className="w-[40%] uppercase text-main-white text-start flex flex-col flex-none">
                    <h2 className="font-normal text-sm text-start">
                      {data.to.coinFromAmount} {data.to.coinFrom}
                    </h2>
                    <h3 className="text-[#433B5A] font-semibold text-xs text-start">
                      {data.to.coinToAmount} {data.to.coinTo}
                    </h3>
                  </td>
                  <td className="w-fit uppercase text-main-white place-self-end flex flex-col flex-none">
                    <h2 className="text-base">{data.date.day}</h2>
                    <h3 className="text-[#433B5A] text-sm">{data.date.time}</h3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </section>
    </>
  );
};
export default ActivityLog;
