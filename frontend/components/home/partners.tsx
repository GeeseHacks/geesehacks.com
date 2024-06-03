import React from "react";

export default function Partners() {
  return (
    <div className="p-8 sm:p-16 flex flex-col items-center justify-center relative">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
        Our Partners
      </h1>
      <div
        className="absolute w-72 h-36 md:w-80 md:h-40 lg:w-96 lg:h-48 bg-purple-600 rounded-full blur-3xl opacity-30"
        style={{ top: "35%" }}
      ></div>
      <div className="w-full sm:w-3/4 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/gdsc.png"
              alt="Google Developer Student Club"
              className="h-auto max-w-[80%] object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-purple-300 bg-opacity-15 border-2 border-purple-300 rounded-md p-4 min-h-[6rem] hover:scale-105 ease-in-out duration-300">
            <img
              src="/images/cscan.webp"
              alt="CS-Can"
              className="h-auto max-w-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
