import React from "react";

export default function ConnectWallet() {
  return (
    <button className="py-3 w-[200px]  flex items-center justify-center gap-x-2 bg-[#100827] rounded-full text-sm leading-5">
     <div className="w-[24px] h-[24px]">
     <img className="w-full h-full " src="/user.png" alt="" />
     </div>
      <span className="text-primaryText text-[1em]">osatuyipikin.braavos.eth</span>
    </button>
  );
}
