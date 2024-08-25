"use client"; // Ensure this directive is at the top for client-side components

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function Stats() {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Stats | GeeseHacks</title>
        <meta name="description" content="Check out the impressive stats for GeeseHacks including prizes, participants, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div ref={ref} className="text-white" aria-labelledby="stats-header">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          aria-live="polite"
        >
          {["$5000", "600+", "100+", "15"].map((stat, index) => (
            <motion.div
              key={index}
              className="w-3/4 md:w-1/5 relative"
              variants={itemVariants}
              aria-labelledby={`stat-${index}`}
            >
              <div className="absolute inset-0 transform translate-y-2 translate-x-2 z-0 rounded-2xl shadow-stat-inner-shadow bg-indigo-300"></div>
              <div className="relative flex flex-col items-center justify-center rounded-2xl p-9 shadow-stat-card-shadow z-10 bg-stat-card-bg h-32 md:h-44">
                <h2
                  id={`stat-${index}`}
                  className="text-center sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold md:pb-5"

                  role="heading"
                >
                  {stat}
                </h2>
                <div className="text-center text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal">
                  {[
                    "in Prizes",
                    "Hackers",
                    "Projects Submitted",
                    "Mentors",
                  ][index]}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}