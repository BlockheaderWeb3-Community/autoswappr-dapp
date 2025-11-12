"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatIsAutoSwapper() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  return (
    <section className="px-6 md:px-[74px] py-16 md:py-24">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-semibold text-[#F3F5FF] mb-8 md:mb-12"
          variants={itemVariants}
        >
          What is Autoswappr?
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <p className="text-xl md:text-2xl leading-relaxed text-[#DCDFE1]">
            Autoswappr automatically converts your STRK tokens into USDT — a stable token that holds its value. 
            It runs seamlessly in the background, so you never have to worry about missing the right time to convert. 
            Your transactions are secured with advanced technology that protects your funds and personal data.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
