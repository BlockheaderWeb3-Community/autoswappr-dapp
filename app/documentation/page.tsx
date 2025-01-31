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
    title: "Introduction",
    description: "Brief overview of autoswappr",
    component: <Introduction />,
  },
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Brief overview of autoswappr",
    component: <GetStarted />,
  },
  {
    id: "features",
    title: "Features",
    description: "what we offer",
    component: <Features />,
  },
  {
    id: "user-guide",
    title: "User Guide",
    description: "How it works",
    component: <UserGuide />,
  },
  {
    id: "faqs",
    title: "FAQs",
    description: "questions we are usually asked",
    component: <Faqs />,
  },
  {
    id: "security",
    title: "Security",
    description: "How secure IS AUTOSWAPPR",
    component: <Security />,
  },
  {
    id: "contact",
    title: "Contact & Support",
    description: "reach out to us",
    component: <Contact />,
  },
];

export default function Documentation() {
  const [view, setView] = useState("introduction");
  const [index, setIndex] = useState(0);

  const navigate = (direction: number) => {
    setIndex((prev) =>
      Math.max(0, Math.min(sections.length - 1, prev + direction))
    );
  };

  return (
    <section className="relative bg-main-bg bg-cover bg-center text-[#F3F5FF] px-4 lg:px-[187px] min-h-[95vh] pt-[100px] md:pt-[147px]">
      <div className="max-w-[936px] mb-10">
        <h1 className="text-xl text-[#F3F5FF] font-semibold mb-2">
          Documentation
        </h1>
        <p className="text-base font-thin text-[#DCDFE1]">
          For transparency and the purpose of understanding what Autoswappr does
          and how it works, we have documented every necessary information for
          you.
        </p>
      </div>
      <div className="flex md:hidden px-4 mx-auto max-w-[740px] w-[95%] sm:w-4/5 my-4 gap-10">
        <Image
          src={arrow}
          alt="prev"
          className="w-[30px] rotate-90"
          onClick={() => navigate(-1)}
        />
        <h1
          className="text-xl text-center cursor-pointer"
          onClick={() => setView(sections[index].id)}
        >
          {sections[index].title}
        </h1>
        <Image
          src={arrow}
          alt="next"
          className="w-[30px] -rotate-90"
          onClick={() => navigate(1)}
        />
      </div>
      <nav className="hidden md:flex gap-5">
        {sections.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={`py-2 px-6 border border-[#1E2021] rounded-lg transition ${view === id ? "bg-[#323537] text-[#F3F5FF]" : "bg-[#010307] text-[#979FA5] hover:bg-[#010307]"}`}
          >
            {title}
          </button>
        ))}
      </nav>
      <section className="md:w-[994px] my-10 grid gap-10">
        {sections.map(({ id, title, component, description }) => (
          <div key={id}>
            <div
              className="flex justify-between items-center border-b border-[#1E2021] pb-4 cursor-pointer"
              onClick={() => setView(view === id ? "" : id)}
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className="w-[3px] h-4 bg-[#2C3035] rounded-lg" />
                <h5 className="uppercase text-[#A8AFB4] text-[10px] font-[300] sm:font-normal sm:text-xs leading-[16.34px]">
                  {description}
                </h5>
              </div>
              <Image
                src={arrow}
                alt="toggle"
                className={`transition-all duration-300 ${view === id ? "rotate-0" : "-rotate-90"}`}
              />
            </div>
            <div className={`${view === id ? "py-6" : ""}`}>
              {view === id && component}
            </div>
          </div>
        ))}
      </section>
      <div className="hidden md:block w-full h-[50px] bg-main-bg bottom-0 rotate-180" />
    </section>
  );
}
