import React from "react";
import Head from "next/head";
import Image from 'next/image';

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
              <div className="w-full flex justify-center items-center bg-gradient-to-br from-purple-600/20 to-indigo-300/20 border-0 border-purple-300 rounded-2xl p-4 min-h-[6rem] hover:scale-102 ease-in-out duration-300">
                <Image
                  src="/images/gdsc-uw.webp"
                  alt="Google Developer Student Club logo"
                  width={600}
                  height={200}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="/images/gdsc-uw.webp"
                  className="h-auto p-7 max-w-full object-contain"
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
              <div className="w-full flex justify-center items-center bg-gradient-to-br  from-purple-600/20 to-indigo-300/20 border-0 border-purple-300 rounded-2xl p-6 min-h-[6rem] hover:scale-102 ease-in-out duration-300">
                <Image
                  src="/images/cs-can.webp"
                  alt="CS-Can logo"
                  width={500}
                  height={200}
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL="/images/cs-can.webp"
                  className="h-auto max-w-[70%] object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}