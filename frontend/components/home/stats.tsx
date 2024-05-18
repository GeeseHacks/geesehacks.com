import React from 'react'
import Image from "next/image";

export default function Stats() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/statsMainImage.png"
          alt="Stats Image"
          width={500}
          height={500}
        />
      </div>
      <div className="text-lg font-bold text-white text-4xl flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center"> 
          <h1 className="inline-block pr-20 pl-20 pb-3">1000+</h1> 
          <div className="text-sm font-normal text-gray-500 pb-10">Applicants</div>
        </div>
        <div className="flex flex-col items-center"> 
          <h1 className="inline-block pr-20 pl-20 pb-3">25+</h1> 
          <div className="text-sm font-normal text-gray-500 pb-10">Events</div>
        </div>
        <div className="flex flex-col items-center"> 
          <h1 className="inline-block pr-20 pl-20 pb-3">50+</h1> 
          <div className="text-sm font-normal text-gray-500 pb-10">Organizers</div>
        </div>
        <div className="flex flex-col items-center"> 
          <h1 className="inline-block pr-20 pl-20 pb-3">40+</h1> 
          <div className="text-sm font-normal text-gray-500 pb-10">Countries</div>
        </div>
        
      </div>



    </div>
  )
}
