"use client";
import React, { useState } from "react";
import TypeWriterComponent from "typewriter-effect";

enum LoadingState {
  Empty,
  Loading,
  Complete,
}

// Custom designed terminal (super cool!) with animation and typewriting effects
const AnimatedTerminal: React.FC = () => {
  const [loading, setLoading] = useState<LoadingState>(LoadingState.Empty);
  const spinner: string[] = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const [spinnerIndex, setSpinnerIndex] = useState<number>(0);

  const triggerLoading = () => {
    setLoading(LoadingState.Loading);
    const spinnerInterval = setInterval(() => {
      setSpinnerIndex((prevIndex) => (prevIndex + 1) % spinner.length);
    }, 100);

    // Simulate loading completion after 5 seconds
    setTimeout(() => {
      setLoading(LoadingState.Complete);
      clearInterval(spinnerInterval);
    }, 3500);
  };

  const getLoadingLine = () => {
    if (loading === LoadingState.Loading) {
      return <div className=""> {spinner[spinnerIndex]} </div>;
    } else if (loading === LoadingState.Complete) {
      return <span>✔️ Loading Completed</span>;
    }
  };

  return (
    <div className="relative bg-black bg-opacity-85 text-white p-8 pt-16 font-mono flex flex-col h-80 rounded-xl drop-shadow-xl w-[calc(35vw)] md:text-sm lg:text-base">
      {/* First line */}
      <div className="flex flex-row">
        <span className="text-gray-500 px-3">$</span>
        {loading === LoadingState.Empty ? (
          <TypeWriterComponent
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString("node ./GeeseHacks.js")
                .callFunction(triggerLoading)
                .start();
            }}
          />
        ) : (
          <span>node ./GeeseHacks.js</span>
        )}
      </div>

      {/* Loading line 1 */}
      <div className="flex flex-row">
        <span className="w-3"></span>
        {getLoadingLine()}
      </div>

      {/* Loading line 2 */}
      {loading === LoadingState.Complete && (
        <div className="flex flex-row">
          <span className="w-3"></span>
          <span>Enjoy Hacking! ✨</span>
        </div>
      )}

      {/* Empty line */}
      {loading === LoadingState.Complete && (
        <div className="flex flex-row">
          <span className="text-gray-500 px-3">$</span>
          <TypeWriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("").start();
            }}
          />
        </div>
      )}

      {/* Hard Coded Buttons */}
      <div className="absolute top-0 left-0 flex px-7 py-5 space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default AnimatedTerminal;
