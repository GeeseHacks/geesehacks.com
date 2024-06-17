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
import marketing2 from '/public/images/organizerHeadshots/marketing/jane.jpg'

import software1 from '/public/images/organizerHeadshots/software/ri.jpg'
import software2 from '/public/images/organizerHeadshots/software/eric.jpg'

import sponsorship1 from '/public/images/organizerHeadshots/sponsorship/linda.jpg'
import sponsorship2 from '/public/images/organizerHeadshots/sponsorship/ajai.jpg'
import sponsorship3 from '/public/images/organizerHeadshots/sponsorship/hareeee.jpg'
import sponsorship4 from '/public/images/organizerHeadshots/sponsorship/karanveer.jpg'
import sponsorship5 from '/public/images/organizerHeadshots/sponsorship/srinikesh.jpg'

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
  software1,
  software2,
  sponsorship1,
  sponsorship2,
  sponsorship3,
  sponsorship4,
  sponsorship5
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
    <div className="overflow-hidden w-full p-2">
      <div
        className="flex will-change-transform gap-5"
        ref={containerRef}
        style={{ whiteSpace: 'nowrap' }}
      >
        {images.concat(images).map((image, index) => (
            <Image src={image} alt={`Organizer ${index + 1}`} className="w-16 h-16 rounded-full object-contain shadow-organizers-purple-shadow border-2" width={60} height={60} />
        ))}
      </div>
    </div>
  )
}

export default Carousel;
