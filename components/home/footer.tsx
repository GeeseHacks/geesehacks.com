import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Carousel from "./utils/carousel";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
        <title>Footer | GeeseHacks</title>
        <meta name="description" content="Join us for a weekend full of geese! Learn more about the GeeseHacks organizing team, follow us on Instagram and LinkedIn, and review the MLH Code of Conduct." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <footer className="flex flex-col items-center justify-around p-4 md:p-6 px-4 md:px-16 bg-gray-900/50">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8" aria-label="Join us for a weekend full of geese!">
          Join us for a weekend full of geese!
        </h1>

        {/* Organizer Team Carousel Section */}
        <section className="flex flex-col sm:flex-row items-center justify-between w-full pb-7 gap-5">
          <div className="flex flex-col text-white gap-3 min-w-fit text-center sm:text-left">
            <h2 className="text-base sm:text-2xl font-bold">The Organizing Team</h2>
            <p className="text-xs sm:text-sm">Contact us at <a href="mailto:geesehack@gmail.com" className="underline">geesehack@gmail.com</a></p>
          </div>
          <Carousel />
        </section>

        <div className="text-white flex flex-row items-center justify-between w-full">
          <p className="w-[350px] text-xs sm:text-base">Made with 💙 by the GeeseHacks Team</p>

          <div className="flex flex-row gap-4">
            <a
              href="https://www.instagram.com/geesehacks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size="25px" />
            </a>
            <a
              href="https://ca.linkedin.com/company/geesehacks-hackathon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Connect with us on LinkedIn"
            >
              <FaLinkedinIn size="25px" />
            </a>
          </div>

          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[350px] text-right text-xs sm:text-base"
            aria-label="Read the MLH Code of Conduct"
          >
            MLH Code of Conduct
          </a>
        </div>
      </footer>
    </>
  );
}