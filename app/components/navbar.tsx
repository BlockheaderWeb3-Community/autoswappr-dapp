"use client"
import Link from "next/link";
import ConnectWallet from "./connect-wallet";
import { TetherLogo } from "@/assets/general";
import { Logo } from "@/assets/navbar";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000014CC] bg-opacity-80 backdrop-blur-lg py-4 px-6 md:px-20 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-primaryText text-base hover:text-[#49ABD2]">
            Home
          </Link>
          <Link href="#" className="text-primaryText text-base hover:text-[#49ABD2]">
            Activity
          </Link>
          <Link href="/dex" className="text-primaryText text-base hover:text-[#49ABD2]">
            Dex
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-x-4">
          <div className="flex items-center justify-center gap-x-2 bg-[#100827] rounded-full px-4 py-2">
            <TetherLogo />
            <span className="text-primaryText text-sm">USDT: $114,000</span>
          </div>
          <ConnectWallet />
        </div>

    
        <button
          className="flex md:hidden flex-col space-y-1 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block h-[0.9px] w-6 bg-white"></span>
          <span className="block h-[0.9px] w-6 bg-white"></span>
          <span className="block h-[0.9px] w-6 bg-white"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-10 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-primaryText text-base hover:text-[#49ABD2]">
              Home
            </Link>
            <Link href="#" className="text-primaryText text-base hover:text-[#49ABD2]">
              Activity
            </Link>
            <Link href="/dex" className="text-primaryText text-base hover:text-[#49ABD2]">
              Dex
            </Link>
          </div>

          <div className="mt-6 flex flex-col  space-y-4">
            <div className="flex items-center justify-center gap-x-2 bg-[#100827] rounded-full px-4 py-2">
              <TetherLogo />
              <span className="text-primaryText text-sm">USDT: $114,000</span>
            </div>
            <ConnectWallet />
          </div>
        </div>
      )}
    </nav>
  );
}
