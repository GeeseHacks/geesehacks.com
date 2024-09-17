"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import wave from "@/public/images/wave.png";
const smallQuotation = 'text-8xl font-bold absolute';
const largeQuotation = 'hidden md:block text-[250px] md:text-[320px] font-bold absolute opacity-15';

const aboutText = `GeeseHacks is an innovative hackathon that encapsulates the
  spirit of Waterloo's rigorous tech environment. Organized by
  students and for students, it's an arena where coding,
  creativity, and technology collide to transform ideas into
  reality. This event challenges participants to push the boundaries
  of technology and develop solutions that address real-world
  problems.`;

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Head>
        <title>About Us - GeeseHacks</title>
        <meta name="description" content="Learn about GeeseHacks, an innovative hackathon at the University of Waterloo where coding, creativity, and technology collide to transform ideas into reality." />
      </Head>
      <div ref={ref} className="relative flex flex-col items-center justify-center text-white" aria-label="About GeeseHacks section">
        {/* <Image
          className="wave absolute top-0 left-0 w-full h-auto z-0 opacity-100 transition-opacity duration-500 ease-out"
          src={wave}
          alt="wave"
        /> */}


        {/* <Image className="wave top-2 left-0 z-10 opacity-10 absolute md:top-8 wave" src={wave} alt="wave" /> */}

        {/* Make the wave transparent */}
        {/* <div className="wave-container">
          <Image
            className="wave"
            src={wave}
            alt="wave"
            style={{ backgroundColor: 'transparent' }}
          />
        </div> */}

        <div className="relative flex justify-center items-center">
          <Image
            src="/images/campfire.png"
            alt="Campfire representing community and collaboration"
            width={500}
            height={500}
          />
        </div>


        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="pb-40 pd:b-64 lg:pt-[2rem] lg:pb-72"
        >
          <motion.h1 variants={containerVariants} className="text-4xl md:text-6xl md:font-medium text-center mb-12 md:mb-24 text-shadow-section-header-glow">
            About Us
          </motion.h1>
          <motion.div variants={containerVariants} className="bg-gradient-to-tr from-violet-700 via-slate-50 to-violet-700 rounded-3xl p-1 mx-5 md:mx-10">
            <div className="bg-[#121E2F] relative p-7 sm:p-12 md:p-20 md:px-28 rounded-3xl shadow-purple-shadow text-center max-w-96 sm:max-w-lg md:max-w-xl lg:max-w-3xl">
              <div className="absolute inset-0 flex justify-center items-center z-10" aria-hidden="true">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
              </div>
              <span className={`${largeQuotation} -top-32 -left-12 md:-left-16 md:-top-44 z-20`} aria-hidden="true">
                “
              </span>
              <span className={`${smallQuotation} hidden md:inline left-12 top-10 z-20`} aria-hidden="true">
                “
              </span>
              <p className="font-semibold mb-4 text-xl md:text-2xl z-20 relative">
                GeeseHacks at the University of Waterloo 👏🚀
              </p>
              <p className="text-gray-300 text-left text-md md:text-lg z-20 relative">
                {aboutText}
              </p>
              <span className={`${smallQuotation} hidden md:inline right-12 -bottom-2 z-20`} aria-hidden="true">
                ”
              </span>
              <span className={`${largeQuotation} -right-12 -bottom-64 md:-right-16 md:-bottom-80 lg:top-64 z-20`} aria-hidden="true">
                ”
              </span>
              <Image
                className="absolute -right-5 -bottom-16 md:-right-5 md:-bottom-20 z-20"
                src="/images/star.png"
                alt="Star Image"
                width={23}
                height={23}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                className="absolute right-7 -bottom-16 md:right-10 md:-bottom-20 z-20"
                src="/images/star.png"
                alt="Star Image"
                width={13}
                height={13}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;