"use client";

import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from '../components/home/about';
import Stats from '../components/home/stats';
import JoinUs from '../components/home/joinUs';
import Partners from '../components/home/partners';
import Faq from '../components/home/faq';
import Team from '../components/home/team';
import Sponsors from '../components/home/sponsors';
import Footer from '../components/home/footer';
import Head from "next/head";
import BackgroundStars from "@/components/home/utils/backgroundStars";
import { motion } from "framer-motion"; 

import "./globals.css";

// SEO text for reference
const aboutText = `GeeseHacks is an innovative hackathon that encapsulates the
  spirit of Waterloo's rigorous tech environment. Organized by
  students and for students, it's an arena where coding,
  creativity, and technology collide to transform ideas into
  reality. This event challenges participants to push the boundaries
  of technology and develop solutions that address real-world
  problems.`;

export default function Home() {
  return (
    <>
      <Head>
        <title>GeeseHacks</title>
        <meta name="description" content="Join us at GeeseHacks, January 10-12 in Waterloo, ON. Hacker applications open soon. Stay tuned!" />
      </Head>

      {/* Glow Effect */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute top-60 left-60 m-20 w-1/2 h-1/2 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-full blur-lg opacity-5"></div>
        <div className="absolute bottom-60 right-60 m-20 w-1/2 h-1/2 bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 rounded-full blur-lg opacity-5"></div>
      </div>

      {/* Background Stars */}
      <BackgroundStars />
      
      <Navbar />
      <div id="hero"> <Hero /> </div>
      <div id="about"> <About /> </div>
      <div id="statistics"> <Stats /> </div>
      <div id="joinUs"> <JoinUs /> </div>
      <div id="sponsors"> <Sponsors /> </div>
      <div id="partners"> <Partners /> </div>
      {/* <div id="team"> <Team /> </div> */}
      <div id="faq"> <Faq /> </div>
      <Footer />
    </>
  );
}
