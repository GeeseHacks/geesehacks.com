import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-blue relative text-white">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
      <div className="border border-white p-10 md:p-20 md:px-28 rounded-xl shadow-custom text-center max-w-[320px] md:max-w-[600px] lg:max-w-[750px] mx-5 md:mx-10 relative">
        <span className="large-qoutation left-[0px] top-[-100px]">
          “
        </span>
        <span className="small-qoutation hidden md:inline left-[50px] top-[40px]">
          “
        </span>
        <p className="font-semibold mb-4 text-xl md:text-2xl">
          Geese Hacks at the University of Waterloo 👏🚀
        </p>
        <p className="text-gray-300 text-left text-md md:text-lg">
          Geese Hacks is an innovative hackathon that encapsulates the spirit of
          Waterloo’s rigorous tech environment. Organized by students and for
          students, it's an arena where coding, creativity, and technology
          collide to transform ideas into reality. This event challenges
          participants to push the boundaries of technology and develop
          solutions that address real-world problems.
        </p>
        <span className="small-qoutation hidden md:inline right-[50px] bottom-[-10px]">
          ”
        </span>
        <span className="large-qoutation right-[-3px] bottom-[-260px]">
          ”
        </span>
      </div>
    </div>
  );
};

export default About;
