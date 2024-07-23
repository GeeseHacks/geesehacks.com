"use client";

import React, { Suspense, lazy } from "react";
import HeroButton from "./utils/heroButton";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image';
import backgroundImage from "@/public/images/heroBackground.webp";
import Head from "next/head";

// Lazy load AnimatedTerminal
const AnimatedTerminal = lazy(() => import("./utils/terminal"));

// SET TO TRUE WHEN APPLICATION OPENS
const applicationOpen = false;

const containerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <>
    <Head>
        <title>GeeseHacks - Hero Section</title>
        <meta name="description" content="Join us at GeeseHacks, happening from January 10-12 in Waterloo, ON. Stay tuned for hacker applications!" />
      </Head>
      <div className="bg-cover w-full h-screen flex items-center justify-center md:justify-evenly bg-bottom" aria-label="Hero section">
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            priority
            placeholder="blur"
            quality={80}
          />
        </div>
        <div className="flex-col space-y-8 mb-3 mx-3 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="text-white text-2xl text-center mx-2 md:text-left lg:text-3xl text-shadow-white-glow">
              January 10-12 · Waterloo, ON
            </motion.h1>  

            <motion.h1 variants={itemVariants} className="text-white text-center text-5xl my-6 sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-shadow-white-glow">
              GeeseHacks
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-white mx-2 text-center font-semilight text-lg lg:text-xl lg:text-left text-shadow-white-glow">
                Hacker applications open soon. Stay tuned!
              </h1>
            </motion.div>
          </motion.div>

          <div className="flex flex-row justify-center md:justify-normal gap-6 px-2">
            <a href="https://www.instagram.com/geesehacks/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform duration-300">
              <div className="rounded-full bg-[#EAE0D5] p-2">
                <FaInstagram size="30px" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/geesehacks" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-300">
              <div className="rounded-full bg-[#EAE0D5] p-2">
                <FaLinkedinIn size="30px" />
              </div>
            </a>
          </div>

          {applicationOpen && (
            <div className="flex space-x-4 justify-center md:justify-start">
              <HeroButton href="/apply">Apply Now</HeroButton>
            </div>
          )}
        </div>
        <div className="flex mt-8 sr-only md:not-sr-only" aria-hidden="true">
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedTerminal />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Hero;