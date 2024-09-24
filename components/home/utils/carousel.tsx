'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import director1 from '/public/images/organizerHeadshots/directors/gen.jpg'
import director2 from '/public/images/organizerHeadshots/directors/danny.jpg'
import director3 from '/public/images/organizerHeadshots/directors/nathan.jpg'

import events1 from '/public/images/organizerHeadshots/events/anna.jpg'
import events2 from '/public/images/organizerHeadshots/events/james.jpg'
import events3 from '/public/images/organizerHeadshots/events/katrina.jpg'
import events4 from '/public/images/organizerHeadshots/events/mackenzie.jpg'
import events5 from '/public/images/organizerHeadshots/events/saima.jpg'

import marketing1 from '/public/images/organizerHeadshots/marketing/angela.jpg'
import marketing2 from '/public/images/organizerHeadshots/marketing/lin.jpg'
import marketing3 from '/public/images/organizerHeadshots/marketing/jane.jpg'
import marketing4 from '/public/images/organizerHeadshots/marketing/adrienne.jpg'
import marketing5 from '/public/images/organizerHeadshots/marketing/leslie.jpg'

import software1 from '/public/images/organizerHeadshots/software/ri.jpg'
import software2 from '/public/images/organizerHeadshots/software/eric.jpg'
import software3 from '/public/images/organizerHeadshots/software/bill.jpg'
import software4 from '/public/images/organizerHeadshots/software/brianna.png'
import software5 from '/public/images/organizerHeadshots/software/deekshu.jpg'
import software6 from '/public/images/organizerHeadshots/software/jennifer.jpg'
import software7 from '/public/images/organizerHeadshots/software/sarah.jpg'

import sponsorship1 from '/public/images/organizerHeadshots/sponsorship/linda.jpg'
import sponsorship2 from '/public/images/organizerHeadshots/sponsorship/ajai.jpg'
import sponsorship3 from '/public/images/organizerHeadshots/sponsorship/harry.jpg'
import sponsorship4 from '/public/images/organizerHeadshots/sponsorship/karanveer.jpg'
import sponsorship5 from '/public/images/organizerHeadshots/sponsorship/srinikesh.jpg'
import sponsorship6 from '/public/images/organizerHeadshots/sponsorship/leo.jpg'

import finance1 from '/public/images/organizerHeadshots/finance/aryan.jpg'
import finance2 from '/public/images/organizerHeadshots/finance/mica.jpeg'

const images = [
  director1,
  director2,
  director3,
  events1,
  events2,
  events3,
  events4,
  events5,
  marketing1,
  marketing2,
  marketing3,
  marketing4,
  marketing5,
  software1,
  software2,
  software3,
  software4,
  software5,
  software6,
  software7,
  sponsorship1,
  sponsorship2,
  sponsorship3,
  sponsorship4,
  sponsorship5,
  sponsorship6,
  finance1,
  finance2,
  // Add more images as needed
];

const Carousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (container) {
        scrollAmount -= 1;
        if (scrollAmount <= -container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.style.transform = `translateX(${scrollAmount}px)`;
      }
    };

    const interval = setInterval(scroll, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex grow w-full overflow-hidden relative">
        <div className="w-full p-2">
            <div
                className="flex will-change-transform gap-5"
                ref={containerRef}
                style={{ whiteSpace: 'nowrap' }}
            >
                {images.concat(images).map((image, index) => (
                    <Image key={index} src={image} alt={`Organizer ${index + 1}`} className="min-w-16 h-16 rounded-full object-cover shadow-organizers-purple-shadow border-2" width={0} height={0} />
                ))}
            </div>
        </div>
        <div
        className="w-full h-full absolute"
        style={{
            backgroundImage: "linear-gradient(to right, rgba(18, 30, 47, 1), rgba(18, 30, 47, 0) 15%, rgba(18, 30, 47, 0) 85%, rgba(18, 30, 47, 1))"
        }}
        ></div>    </div>
  )
}

export default Carousel;
