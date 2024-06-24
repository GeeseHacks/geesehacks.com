import React from "react";
import Image from "next/image";

export default function JoinUs() {
  return (
    <div>
        <div className="relative flex justify-center items-center mt-[-4rem] z-[-1]">
            <Image
                src="/images/campfire.png"
                alt="Stats Image"
                className="w-128 h-auto lg:w-1/2 lg:h-auto"
                width={1000}
                height={1000}
            />
        </div>
        <div className="text-xl text-center text-white flex flex-col gap-4 p-8 mt-[-7rem]">
            <p>Our hackathon thrives thanks to the generous support of our sponsors</p>
            <a href="mailto:geesehack@gmail.com" target="_blank" rel="noopener noreferrer" className="underline">Join us in making it happen!</a>
        </div>
    </div>
  );
}
