"use client";
import React, { useState } from "react";
import { useAccount } from "@starknet-react/core";
import WalletBar from "./wallet-bar";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../utils/data";
import { ConnectWallet } from "./ui/modals/connect-wallet-modal";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { address } = useAccount();

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm pl-6 md:pl-0 pr-6 md:pr-[80px] z-50 py-[14px] flex items-center justify-between">
      <ConnectWallet
        open={isConnecting}
        onOpenChange={() => setIsConnecting((prev) => !prev)}
      />
      {isMenuOpen &&
        createPortal(
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMenuOpen(false)}
            toggleConnectModal={() => setIsConnecting((prev) => !prev)}
          />,
          document.body
        )}

      <div
        className={`md:bg-[#0D1016] md:rounded-[0_16px_16px_0] px-0 md:px-[80px] flex items-center lg:min-w-[800px] ${!address && "md:py-[15px]"}`}
      >
        <Link href={"/"} className="cursor-pointer">
          <img
            src="/auto-swappr-logo.svg"
            className="md:w-[85px] md:h-[48px] h-10 w-[64px]"
            alt=""
          />
        </Link>

        {address && (
          <ul className="hidden md:flex items-center gap-4 w-[700px] justify-center py-7">
            {navLinks.map((link, i) => (
              <li key={link.title} className="flex gap-4 items-center">
                <Link
                  href={link.href}
                  className={`text-sm md:text-base  hover:text-[#F3F5FF] transition-all ease-in-out duration-300 ${pathname === link.href ? "text-[#F3F5FF]" : "text-[#7E8489]"}`}
                >
                  {link.title}
                </Link>
                {i + 1 !== navLinks.length && (
                  <span className="w-[3px] h-3 rounded-lg bg-[#2C3035]" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Connect Wallet Button */}
      <div className="hidden md:flex items-center">
        <WalletBar toggleModal={() => setIsConnecting(true)} />
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
