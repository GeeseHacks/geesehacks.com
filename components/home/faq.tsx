import React from "react";
import Head from "next/head";
import FaqItem from "./utils/faqItem";

// Define the main Faq component
const Faq: React.FC = () => {
  const faqItems = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is an event where programmers, designers, and developers come together to collaborate on software projects, typically within a set period (usually 24-48 hours). Participants form teams to create a functional prototype or solution based on a theme or challenge."
    },
    {
      question: "Who can participate in GeeseHacks?",
      answer: "GeeseHacks is open to all university/college students, regardless of their skill level or experience."
    },
    {
      question: "How do I register for GeeseHacks?",
      answer: "Registration details will be available on the GeeseHacks website. You can sign up individually or as a team."
    },
    {
      question: "Do I need an idea before the hackathon?",
      answer: "No, you do not need to have an idea before the hackathon. You can brainstorm and develop ideas with your team during the event."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes, there will be mentors available to help you with your project during the hackathon."
    },
    {
      question: "Do I need a team to participate?",
      answer: "You can sign up individually, and teams will be formed during the event if you do not already have one."
    },
    {
      question: "Are there any prizes for winning teams?",
      answer: "There will be prizes for the top teams. Details will be announced during the event."
    },
    {
      question: "Can I work on my project before the hackathon?",
      answer: "No, the project should be developed during the hackathon to ensure fair competition."
    }
  ];

  // Split the items into two columns
  const firstColumnItems = faqItems.filter((_, index) => index % 2 === 0);
  const secondColumnItems = faqItems.filter((_, index) => index % 2 !== 0);

  return (
    <>
      <Head>
        <title>FAQ | GeeseHacks</title>
        <meta name="description" content="Find answers to the most frequently asked questions about GeeseHacks. Learn about the hackathon, how to participate, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="faq" className="h-full flex flex-col items-center px-4 my-24 text-white">
        <h1 className="text-4xl md:text-6xl md:font-medium text-center mb-12 md:mb-24 text-shadow-section-header-glow" aria-label="Frequently Asked Questions">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row w-full max-w-4xl gap-4">
          <div className="flex-1 flex flex-col gap-4">
            {firstColumnItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {secondColumnItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;