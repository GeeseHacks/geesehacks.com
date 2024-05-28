import React from "react";

export default function Partners() {
  return (
    <div className="p-8 sm:p-16 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
        Our Partners
      </h1>
      <div className="w-full sm:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border border-purple-600 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_mathematics_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border border-purple-600 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_science_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border border-purple-600 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/UWaterloo-Engineering.jpg"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border border-purple-600 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_health_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border border-purple-600 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_arts_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border border-purple-600 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/waterloo_environment_logo_horiz_rgb.png"
              alt="University of Waterloo"
              className="h-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
