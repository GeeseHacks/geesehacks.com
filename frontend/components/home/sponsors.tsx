import React from "react";

export default function Sponsors() {
  return (
    <div className="p-8 sm:p-16 flex flex-col items-center justify-center relative">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
        Our Sponsors
      </h1>
      <div
        className="absolute w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-600 rounded-full blur-2xl opacity-40"
        style={{ top: "30%" }}
      ></div>
      <div className="w-full sm:w-3/4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/google_logo.png"
              alt="Google"
              className="h-auto max-w-[80%] object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/sunlife-logo-vector.webp"
              alt="Sun Life"
              className="h-auto max-w-[80%] object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/uwaterloo_logo.png"
              alt="University of Waterloo"
              className="h-auto max-w-[70%] object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/cscan.webp"
              alt="CS-Can"
              className="h-auto max-w-[70%] object-contain"
            />
          </div>
          {/* <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_arts_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_environment_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
