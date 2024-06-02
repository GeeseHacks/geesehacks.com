import React from "react";
import Image from "next/image";

export default function Stats() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-16 md:mb-10 text-white pb-36">
        Sponsors & Partners
      </h1>
      <div className="relative flex justify-center items-center">
        <div className="absolute -bottom-16 w-48 h-48 md:w-50 md:h-50 bg-red-600 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute">
          <Image
            src="/images/statsMainImage.png"
            alt="Stats Image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-56">
        <div className="flex flex-col items-center">
          <h1 className="inline-block pr-20 pl-20 pb-3 sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            1000+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500 pb-10">
            Applicants
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="inline-block pr-20 pl-20 pb-3 sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            25+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500 pb-10">
            Events
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="inline-block pr-20 pl-20 pb-3 sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            50+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500 pb-10">
            Organizers
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="inline-block pr-20 pl-20 pb-3 sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            40+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500 pb-10">
            Countries
          </div>
        </div>
      </div>
    </div>
  );
}
