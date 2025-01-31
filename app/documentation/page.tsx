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
  { id: "introduction", title: "Introduction", component: <Introduction /> },
  {
    id: "getting-started",
    title: "Getting Started",
    component: <GetStarted />,
  },
  { id: "features", title: "Features", component: <Features /> },
  { id: "user-guide", title: "User Guide", component: <UserGuide /> },
  { id: "faqs", title: "FAQs", component: <Faqs /> },
  { id: "security", title: "Security", component: <Security /> },
  { id: "contact", title: "Contact & Support", component: <Contact /> },
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
        <h1 className="text-xl md:text-2xl font-semibold">Documentation</h1>
        <p className="text-base md:text-xl font-thin text-[#A8AFB4]">
          Learn about Autoswappr’s features and how it works.
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
        {sections.map(({ id, title, component }) => (
          <div key={id}>
            <div
              className="flex justify-between items-center border-b border-[#1E2021] pb-4 cursor-pointer"
              onClick={() => setView(view === id ? "" : id)}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
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
