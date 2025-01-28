"use client";

import Image from "next/image";
import arrow from "../../public/arrow.svg";
import { useState } from "react";
import Introduction from "./Introduction";
import GetStarted from "./GetStarted";
import Features from "./Features";
import Faqs from "./FAQ";
import UserGuide from "./UserGuide";
import Contact from "./Contact";
import Security from "./Security";

const sections = [
  {
    id: "introduction",
    title: "Introduction ",
  },
  {
    id: "getting-started",
    title: "Getting Started",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "user-guide",
    title: "User Guide",
  },
  {
    id: "faqs",
    title: "FAQs",
  },
  {
    id: "security",
    title: "Security",
  },
  {
    id: "contact",
    title: "Contact & Support",
  },
];

export default function Documentation() {
  const [view, setView] = useState("introduction");
  const [number, setNumber] = useState(0);

  function increase() {
    if (number === 6) return;
    setNumber((num) => num + 1);
  }

  function decrease() {
    if (number === 0) return;
    setNumber((num) => num - 1);
  }

  function viewHandler() {
    if (sections[number].id === view) {
      setView("");
      return;
    }
    setView(sections[number].id);
  }

  return (
    <>
      <section className=" bg-none leading-[19.07px] py-12">
        <div className="max-w-[776px] mx-auto text-center mb-12 px-4">
          <h1 className="text-[20px] font-[600] capitalize mb-2 text-[#F3F5FF] text-left">
            Documentation
          </h1>
          <div className="text-[#A199B8] font-[400] text-[16px] leading-relaxed text-left">
            <p>
              For transparency and the purpose of understanding what Autoswappr
              does and how it works,
            </p>
            <p>we have documented every necessary information for you.</p>
          </div>
        </div>

        <main className="">
          <div className="flex md:hidden px-4 mx-auto max-w-[740px] w-[95%] sm:w-4/5 my-16 gap-10 items-center">
            <Image
              src={arrow}
              alt="arrow"
              className={`transition-all duration-300 m:hidden w-[30px] rotate-90`}
              onClick={decrease}
            />
            <div className="w-3/4 font-medium text-xl text-center">
              <h1
                onClick={viewHandler}
                className={`${
                  sections[number].id === view ? "text-[#A199B8]" : "text-[#A199B8]"
                } cursor-pointer`}
              >
                {sections[number].title}
              </h1>
            </div>
            <Image
              src={arrow}
              alt="arrow"
              className={`transition-all duration-300 md:hidden w-[30px] -rotate-90`}
              onClick={increase}
            />
          </div>

          

          <nav className="flex gap-5 mx-auto w-full md:w-fit hidden md:flex pl-2 md:pl-[calc((100%-776px)/2-2rem)]">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setView(section.id)}
                className={`text-[14px] md:text-lg font-[400] py-2 px-4 rounded-[8px] transition ${
                  view === section.id
                    ? "bg-[#323537] text-white border-none"
                    : "bg-[#120A29] text-[#A199B8] border border-[rgba(255,255,255,0.2)] hover:bg-[#323537]"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>

          <section className="max-w-[740px] w-[95%] sm:w-4/5 mx-auto my-16 grid gap-10">
            {/* Introduction */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "introduction") {
                  setView("");
                  return;
                }
                setView("introduction");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[#F3F5FF] text-[20px] sm:font-semibold sm:text-xl">
                  introduction
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  brief overview of AUTOSWAPPER
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "introduction" ? "rotate-180" : "rotate-0"
                } transition-all duration-300`}
              />
            </div>
            {view === "introduction" && <Introduction />}

            {/* Getting Started */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "getting-started") {
                  setView("");
                  return;
                }
                setView("getting-started");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[20px] text-[#F3F5FF] sm:font-semibold sm:text-xl">
                  getting started
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  step-by-step guide
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "getting-started" ? "rotate-0" : "-rotate-90"
                } transition-all duration-300`}
              />
            </div>
            {view === "getting-started" && <GetStarted />}

            {/* Features */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "features") {
                  setView("");
                  return;
                }
                setView("features");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[#F3F5FF] text-[20px] sm:font-semibold sm:text-xl">
                  Features
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  what we offer
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "features" ? "rotate-0" : "-rotate-90"
                } transition-all duration-300`}
              />
            </div>
            {view === "features" && <Features />}

            {/* User Guide */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "user-guide") {
                  setView("");
                  return;
                }
                setView("user-guide");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[#F3F5FF] text-[20px] sm:font-semibold sm:text-xl">
                  User Guide
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  How it works
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "user-guide" ? "rotate-0" : "-rotate-90"
                } transition-all duration-300`}
              />
            </div>
            {view === "user-guide" && <UserGuide />}

            {/* FAQs */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "faqs") {
                  setView("");
                  return;
                }
                setView("faqs");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[#F3F5FF] text-[20px] sm:font-semibold sm:text-xl">
                  FAQs
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  questions we are usually asked
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "faqs" ? "rotate-0" : "-rotate-90"
                } transition-all duration-300`}
              />
            </div>
            {view === "faqs" && <Faqs />}

            {/* Security */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "security") {
                  setView("");
                  return;
                }
                setView("security");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[#F3F5FF] text-[20px] sm:font-semibold sm:text-xl">
                  Security
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  How secure is AUTOSWAPPR
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "security" ? "rotate-0" : "-rotate-90"
                } transition-all duration-300`}
              />
            </div>
            {view === "security" && <Security />}

            {/* Contact & Support */}
            <div
              className="flex justify-between items-center border-b-[#433b5a] border-b-[2px] pb-5 cursor-pointer"
              onClick={() => {
                if (view === "contact") {
                  setView("");
                  return;
                }
                setView("contact");
              }}
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="capitalize leading-[27.24px] font-[600] text-[#F3F5FF] text-[20px] sm:font-semibold sm:text-xl">
                  Contact & Support
                </h3>
                <span className="border-r w-[3px] h-3 border-r-[#100827]" />
                <h5 className="uppercase text-[#A199B8] text-[12px] font-[400] sm:font-normal sm:text-xs leading-[16.34px]">
                  reach out to us
                </h5>
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className={`${
                  view === "contact" ? "rotate-0" : "-rotate-90"
                } transition-all duration-300`}
              />
            </div>
            {view === "contact" && <Contact />}
          </section>
        </main>
      </section>
    </>
  );
}
