import React from "react";
import Image from "next/image";

export default function Stats() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold text-center mb-16 md:mb-10 pb-36">
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
        {['$5000', '600+', '100+', '15'].map((stat, index) => (
          <div key={index} className="w-1/5 relative">
            <div className="absolute inset-0 transform translate-y-2 z-0 rounded-2xl shadow-stat-inner-shadow bg-stat-card-bg"></div>
            <div className="relative flex flex-col items-center justify-center rounded-2xl p-9 shadow-stat-card-shadow z-10 bg-stat-card-bg h-32 md:h-44">
              <h1 className="inline-block text-center sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold md:pb-5">
                {stat}
              </h1>
              <div className="text-center text-sm sm:text-base md:text-base lg:text-m xl:text-l font-normal">
                {['in Prizes', 'Hackers', 'Projects Submitted', 'Mentors'][index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
