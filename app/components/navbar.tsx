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

  const handleConnectClick = () => {
    setIsConnecting(true);
    setIsMenuOpen(false);
  };

  const handleCloseConnect = () => {
    setIsConnecting(false);
  };

  return (
    <>
      <ConnectWallet open={isConnecting} onOpenChange={handleCloseConnect} />

      {isMenuOpen &&
        createPortal(
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMenuOpen(false)}
            toggleConnectModal={handleConnectClick}
          />,
          document.body
        )}

      <nav
        className="fixed top-0 left-0 right-0 z-50 
                   bg-transparent backdrop-blur-md 
                   px-4 sm:px-6 md:px-12 lg:px-20 
                   py-3 md:py-6"
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between relative">
          <div className="flex items-center flex-shrink-0">
            <div className="md:rounded-r-2xl md:pr-12 lg:pr-20">
              <Link
                href="/"
                className="flex-shrink-0 transition-opacity hover:opacity-80 
                           focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 
                           focus:ring-offset-[#02060D] rounded-lg"
                aria-label="AutoSwappr Home"
              >
                <img
                  src="/auto-swappr-logo.svg"
                  className="h-10 w-auto md:h-12 md:w-[85px] 
                             object-contain transition-transform hover:scale-105"
                  alt="AutoSwappr Logo"
                  width={85}
                  height={48}
                />
              </Link>
            </div>
          </div>

          {address && (
            <nav
              className="hidden md:flex bg-[#0D10163D] items-center absolute left-1/2 -translate-x-1/2 border border-gray-300/20 py-4 px-6 rounded-xl "
              aria-label="Main navigation"
            >
              <ul className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link, index) => (
                  <li key={link.href} className="flex items-center">
                    <Link
                      href={link.href}
                      className={`relative text-sm lg:text-base font-medium
                                 transition-all duration-300 ease-in-out
                                 px-2 py-1 rounded-md
                                 ${
                                   pathname === link.href
                                     ? "text-[#F3F5FF]"
                                     : "text-grey-700 hover:text-[#F3F5FF]"
                                 }
                                 hover:bg-grey-1100/30`}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.title}
                      {pathname === link.href && (
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                                   w-1 h-1 bg-accent rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {index < navLinks.length - 1 && (
                      <span
                        className="mx-4 w-[3px] h-3 rounded-full bg-grey-1100/50"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center">
              <WalletBar toggleModal={handleConnectClick} />
            </div>

            <button
              type="button"
              className="md:hidden p-2.5 rounded-lg
                         text-[#F3F5FF] hover:bg-grey-1100/40
                         transition-colors duration-200
                         active:scale-95"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} className="transition-transform" />
              ) : (
                <Menu size={24} className="transition-transform" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
