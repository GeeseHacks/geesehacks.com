import React from "react";
import Head from "next/head";

// To whoever who encounter this file: please consider making the code dynamic (use the same card from sponsors)
export default function Partners() {
  return (
    <>
      <Head>
        <title>GeeseHacks - Our Partners</title>
        <meta name="description" content="Meet the amazing partners of GeeseHacks. Learn more about Google Developer Student Club and CS-Can!" />
      </Head>
      <div className="p-8 sm:p-16 flex flex-col items-center justify-center relative text-white" aria-label="Our Partners section">
        <h1 className="text-4xl md:text-6xl md:font-medium text-center mb-12 md:mb-24 text-shadow-section-header-glow">
          And Our Partners
        </h1>
        <div
          className="absolute w-11/12 h-36 md:w-80 md:h-40 lg:w-96 lg:h-48 bg-purple-600 rounded-full blur-3xl opacity-30"
          style={{ top: "35%" }}
        ></div>
        <div className="w-full sm:w-3/4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://gdsc.community.dev/university-of-waterloo-waterloo-canada/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Developer Student Club"
              className="flex"
            >
              <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
                <img
                  src="/images/gdsc-uw.png"
                  alt="Google Developer Student Club logo"
                  className="h-auto max-w-full object-contain"
                />
              </div>
            </a>
            <a
              href="https://cscan-infocan.ca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CS-Can"
              className="flex"
            >
              <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
                <img
                  src="/images/cs-can.png"
                  alt="CS-Can logo"
                  className="h-auto max-w-[80%] object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}