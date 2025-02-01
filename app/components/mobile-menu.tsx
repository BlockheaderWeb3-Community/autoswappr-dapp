import React from "react";
import WalletBar from "./WalletBar";
import LockBodyScroll from "./lock-body-scroll";

function MobileMenu({
  navLinks,
  closeMenu,
  toggleConnectModal,
}: {
  navLinks: { title: string; href: string }[];
  closeMenu: () => void;
  toggleConnectModal: () => void;
}) {
  return (
    <>
      <LockBodyScroll lock={true} />
      <div
        className="absolute inset-0 bg-black bg-opacity-60 z-[30] backdrop-blur-sm flex justify-center pt-[150px] text-center"
        onClick={closeMenu}
      >
        <ul className="flex flex-col gap-y-4">
          {navLinks.map((link) => (
            <li key={link.title} className="px-4">
              <a
                href={link.href}
                className="text-base text-[#e7ecf0] hover:text-white block"
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className="px-4 py-2">
            <div onClick={(e) => e.stopPropagation()}>
              <WalletBar toggleModal={toggleConnectModal} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
