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
      <div className="flex flex-wrap justify-center items-center mt-56 gap-4">
      <div style={{ width: 'calc(20% - 4px)' }}>
        <div className="flex flex-col items-center bg-opacity-15 border border-purple-300 rounded-2xl p-4">
          <h1 className="inline-block sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            1000+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500">
            Applicants
          </div>
        </div>
      </div>
      <div style={{ width: 'calc(20% - 4px)' }}>
        <div className="flex flex-col items-center bg-gray-900 bg-opacity-15 border border-purple-300 rounded-2xl p-4">
          <h1 className="inline-block sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            25+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500">
            Events
          </div>
        </div>
      </div>
      <div style={{ width: 'calc(20% - 4px)' }}>
        <div className="flex flex-col items-center bg-opacity-15 border border-purple-300 rounded-2xl p-4">
          <h1 className="inline-block sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            50+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500">
            Organizers
          </div>
        </div>
      </div>
      <div style={{ width: 'calc(20% - 4px)' }}>
        <div className="flex flex-col items-center bg-opacity-15 border border-purple-300 rounded-2xl p-4">
          <h1 className="inline-block sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-white">
            40+
          </h1>
          <div className="text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal text-gray-500">
            Countries
          </div>
      </div>
        </div>
      </div>
    </div>
  );
}
