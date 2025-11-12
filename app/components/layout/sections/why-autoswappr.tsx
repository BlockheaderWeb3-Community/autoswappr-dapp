"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  variants: any;
}

const FeatureCard = ({
  image,
  title,
  description,
  variants,
}: FeatureCardProps) => (
  <motion.div
    className="flex flex-col items-center text-center"
    variants={variants}
  >
    <div className="mb-8 md:mb-12">
      <img
        src={image}
        className="w-full"
        alt={`${title} illustration`}
      />
    </div>
    <div className="max-w-md">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#F3F5FF] mb-4 md:mb-6">
        {title}
      </h3>
      <p className="text-base md:text-lg leading-relaxed text-[#DCDFE1]">
        {description}
      </p>
    </div>
  </motion.div>
);

const Divider = ({ variants }: { variants: any }) => (
  <motion.div
    className="hidden lg:flex w-[2px] h-[300px] bg-gradient-to-b from-transparent via-[#1E2021] to-transparent"
    role="presentation"
    aria-hidden="true"
    variants={variants}
  />
);

export default function WhyAutoSwappr() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const features = [
    {
      image: "/dot-pattern-1.svg",
      title: "Security",
      description:
        "Security is at the core of Autoswappr. Your assets are protected by audited smart contracts and industry-best practices at every step.",
    },
    {
      image: "/dot-pattern-2.svg",
      title: "Transparency",
      description:
        "Every transaction is verifiable on-chain. You have full visibility into your swaps and can track all activities with complete transparency.",
    },
    {
      image: "/dot-pattern-3.svg",
      title: "Efficiency",
      description:
        "Automated swaps execute instantly when conditions are met. No manual intervention needed — save time while maximizing your token value.",
    },
  ];

  return (
    <section className="px-6 md:px-[74px] py-16 md:py-24">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-semibold text-[#F3F5FF] text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          Why AutoSwappr?
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20"
          variants={itemVariants}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="px-4 md:px-6 py-2 md:py-3 border border-[#1E2021] rounded-full text-xs md:text-lg font-medium text-[#F3F5FF] bg-[#1E2021]/50 backdrop-blur-sm transition-all hover:border-[#1D8CF4]/50 hover:bg-[#1E2021]"
            >
              {feature.title}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-5 items-start">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
                variants={cardVariants}
              />
              {index < features.length - 1 && (
                <Divider variants={itemVariants} />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
