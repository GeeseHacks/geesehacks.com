import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function JoinUs() {
  return (
    <>
      <Head>
        <title>Join Us | GeeseHacks</title>
        <meta name="description" content="Join us at GeeseHacks and support our hackathon through sponsorship opportunities. Reach out to sponsor@geesehacks.com to get involved!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <div className="relative flex justify-center items-center mt-[-4rem] z-[-1]">
          <Image
            src="/images/campfire.png"
            alt="Campfire representing community and collaboration"
            className="w-128 h-auto lg:w-1/2 lg:h-auto"
            width={1000}
            height={1000}
          />
        </div>
        <div className="text-xl text-center text-white flex flex-col gap-4 p-8 mt-[-7rem]">
          <p>Our hackathon thrives thanks to the generous support of our sponsors</p>
          <a
            href="https://drive.google.com/file/d/1FjJW1jM1XmsS3_7OuRFptcO46eC2cP69/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            aria-label="Contact us to become a sponsor"
          >
            Join us in making it happen!
          </a>
        </div>
      </div>
    </>
  );
}
