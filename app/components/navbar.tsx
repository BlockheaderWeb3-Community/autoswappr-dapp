"use client";
import React, { useState } from "react";
import WalletBar from "./WalletBar";
import Image from "next/image";
import { X } from "lucide-react";
import menu from "@/public/menu-11.svg";
import MobileMenu from "./mobile-menu";
import { createPortal } from "react-dom";
import LockBodyScroll from "./lock-body-scroll";
import { WalletModal } from "./WalletModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [connectModalIsOpen, setConnectModalIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "AutoSwap", href: "/select-tokens" },
    { title: "Activity", href: "/activity-log" },
    { title: "Dex", href: "/dex" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm px-6 md:px-[80px] z-20 py-5 md:py-[26px] flex items-center justify-between">
      <LockBodyScroll lock={isMenuOpen || connectModalIsOpen} />

      {connectModalIsOpen &&
        createPortal(
          <WalletModal setIsOpen={setConnectModalIsOpen} />,
          document.body
        )}
      {isMenuOpen &&
        createPortal(
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMenuOpen(false)}
            toggleConnectModal={() => setConnectModalIsOpen((prev) => !prev)}
          />,
          document.body
        )}

      {/* Logo */}
      <button
        className="flex items-center cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/auto-swappr-logo.svg"
          className="w-[85px] hidden md:inline-block"
          alt=""
        />
        <img
          src="/auto-swappr-logo-icon.svg"
          className="md:hidden inline-block w-[24px]"
          alt=""
        />
      </button>

      {/* Desktop Navigation */}
      {/* {address && ( */}
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className=" hover:opacity-80 text-sm md:text-base  text-[#F3F5FF] transition-all ease-in-out font-medium"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      {/* )} */}

      {/* Connect Wallet Button */}
      <div className="hidden md:flex items-center">
        <WalletBar toggleModal={() => setConnectModalIsOpen((prev) => !prev)} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} />
        ) : (
          <Image src={menu} alt="menu icon" width={24} height={24} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
