import WalletBar from "./WalletBar";
"use client";
import React, { useState } from "react";
import ConnectWallet from "./connect-wallet";
import Image from "next/image";
import Logo from "@/public/autoswappr.png";
import { X } from "lucide-react";
import menu from "@/public/menu-11.svg";
import Link from "next/link";
import { TetherLogo } from "@/assets/general";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Activity", href: "#" },
    { title: "Dex", href: "/dex" },
  ];

export default function Navbar() {
  return (
    <nav className="flex justify-between absolute top-0 left-0 w-full bg-[#0F0F0F] bg-opacity-80 backdrop-blur-lg py-7 px-[80px]">
      <div>Swappr</div>
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-2">
          <h3 className="text-[#7C7C7C] text-sm">Current timezone</h3>
          <h4 className="flex items-center gap-x-2 text-base text-[#F9F9F9]">
            3:00 PM UTC <img src="/globe-icon.svg" alt="" />
          </h4>
        </div>
        <WalletBar />
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
