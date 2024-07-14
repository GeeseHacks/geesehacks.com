"use client"; // Ensure this directive is at the top for client-side components

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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
  }, [ref]);

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
    <div ref={ref} className="text-white">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="text-4xl md:text-6xl md:font-medium text-center mb-12 md:mb-24 text-shadow-section-header-glow"
      >
        By the Numbers
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-4"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {["$5000", "600+", "100+", "15"].map((stat, index) => (
          <motion.div
            key={index}
            className="w-3/4 md:w-1/5 relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 transform translate-y-2 z-0 rounded-2xl shadow-stat-inner-shadow bg-stat-card-bg"></div>
            <div className="relative flex flex-col items-center justify-center rounded-2xl p-9 shadow-stat-card-shadow z-10 bg-stat-card-bg h-32 md:h-44">
              <h1 className="inline-block text-center sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold md:pb-5">
                {stat}
              </h1>
              <div className="text-center text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal">
                {
                  ["in Prizes", "Hackers", "Projects Submitted", "Mentors"][
                    index
                  ]
                }
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
