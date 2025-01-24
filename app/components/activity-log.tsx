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
      <section className="relative sm:h-[120vh] h-[150vh] bg-cover bg-main-bg md:bg-inherit bg-center bg-no-repeat mt-8 py-[160px] text-[#F9F9F9] mx-auto overflow-hidden">
        <h1 className="text-[20px] md:text-4xl text-center font-semibold text-[#F9F9F9] mb-[40px]">
          Autoswappr Activity log
        </h1>
        {/* desktop */}
        <div className="h-[900px] overflow-scroll">
          <table className="relative hidden px-4 sm:flex sm:flex-col w-[96%] md:w-[88%] lg:w-[64%] max-w-[800px] h-full mx-auto items-center justify-start">
            <thead className="w-full border-[#170F2E] border-b">
              <tr className="flex items-center justify-between space-x-4 capitalize font-normal text-xs md:text-sm w-full pb-3">
                <th className="flex items-center justify-start flex-none w-[35%]">
                  from
                </th>
                <th className="flex items-start justify-start flex-none w-[15%]">
                  to
                </th>
                <th className="flex items-center justify-center flex-none w-[15%]">
                  percentage
                </th>
                <th className="flex items-center justify-end flex-none w-[27.5%]">
                  Date/Time
                </th>
              </tr>
            </thead>
            <tbody className="w-full overflow-y-scroll overflow-x-hidden scrollbar-hide max-h-[540px] md:max-h-[520px] xl:max-h-[560px]">
              {activityLog.map((data, index) => {
                return (
                  <tr
                    className="flex items-center justify-between space-x-4 capitalize font-medium w-full py-3"
                    key={index}
                  >
                    <td className="flex items-center justify-start flex-none w-[35%] space-x-4">
                      <h1 className="text-[#433B5A]">{index + 1}.</h1>
                      <div className="flex gap-8 items-center">
                        <div className="flex flex-none w-auto relative">
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
                          <h2 className="text-sm md:text-base">
                            {data.from.coinFrom}
                          </h2>
                          <h3 className="text-[#433B5A] text-xs md:text-sm">
                            {data.from.coinTo}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className="flex items-start justify-start flex-none flex-col w-[15%] uppercase text-main-white">
                      <h2 className="text-sm md:text-base">
                        {data.to.coinFromAmount} {data.to.coinFrom}
                      </h2>
                      <h3 className="text-[#433B5A] text-xs md:text-sm">
                        {data.to.coinToAmount} {data.to.coinTo}
                      </h3>
                    </td>
                    <td className="flex items-center justify-center flex-none w-[15%]">
                      <span className="text-xs md:text-sm w-auto h-auto bg-[#100827] rounded-full px-6 py-3">
                        {data.percentage}%
                      </span>
                    </td>
                    <td className="flex items-end justify-end flex-none flex-col w-[27.5%] uppercase text-main-white pr-2">
                      <h2 className="text-base">{data.date.day}</h2>
                      <h3 className="text-[#433B5A] text-sm">
                        {data.date.time}
                      </h3>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* mobile */}
        <table className="sm:hidden leading-[18px] w-full mx-auto">
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
        </table>
      </section>
    </>
  );
};
export default ActivityLog;
