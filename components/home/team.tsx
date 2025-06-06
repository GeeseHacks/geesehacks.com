"use client";

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';

interface NavigationItem {
    label: string;
    icon: JSX.Element;
    onClick: () => void;
}

interface Team {
    teamName: string;
    members: TeamMember[];
}

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: Team[] = [
    {
        teamName: 'Big Cows',
        members: [
            { name: 'Cow A', role: 'CEO', image: '/images/sample-person.jpg' },
            { name: 'Cow B', role: 'CTO', image: '/images/sample-person.jpg' },
            { name: 'Cow C', role: 'COO', image: '/images/sample-person.jpg' },
        ]
    },
    {
        teamName: 'Baby Cows',
        members: [
            { name: 'Cow 1', role: 'the milker', image: '/images/sample-person.jpg' },
            { name: 'Cow 2', role: 'the eater', image: '/images/sample-person.jpg' },
            { name: 'Cow 3', role: 'the sleeper', image: '/images/sample-person.jpg' },
        ]
    }
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640); // Adjust this threshold as needed
        };

        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
    };

    const navigation: NavigationItem[] = [
        { label: 'Previous', icon: <FaChevronLeft className="fill-white" size={32} />, onClick: handlePrev },
        { label: 'Next', icon: <FaChevronRight className="fill-white" size={32} />, onClick: handleNext },
    ];

    return (
        <>
            <Head>
                <title>Meet The Team | GeeseHacks</title>
                <meta name="description" content="Meet the amazing teams behind GeeseHacks, their roles, and contributions." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="relative w-full my-8">
                <h1 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-[0_0_20px_#94A5FF]" role="heading">
                    Meet The Team
                </h1>
                {isSmallScreen ? (
                    <div>
                        {teamMembers.map((team, groupIndex) => (
                            <div key={groupIndex} className="mb-8">
                                <h2 className="text-3xl font-semibold mb-4 text-white flex justify-center">{team.teamName}</h2>
                                <div className="flex flex-wrap justify-center">
                                    {team.members.map((item) => (
                                        <div
                                            key={item.name}
                                            className="p-2 rounded-md text-center w-48 sm:w-auto mb-4 sm:mb-0"
                                            aria-labelledby={`member-${item.name}`}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={`Photo of ${item.name}`}
                                                className="drop-shadow-[0_0_10px_#9E63EA] w-28 h-28 rounded-full mx-auto mb-2 object-cover border-4"
                                                width={112}
                                                height={112}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL="/images/placeholder.png"
                                            />
                                            <h3 id={`member-${item.name}`} className="mt-2 sm:mt-4 text-lg sm:text-xl font-medium text-white">{item.name}</h3>
                                            <p className="text-gray-300">{item.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-full flex justify-center items-center flex-col sm:flex-row">
                        {teamMembers.map((team, groupIndex) => (
                            <div
                                key={groupIndex}
                                className={`w-full h-full flex flex-col items-center ${
                                    activeIndex === groupIndex ? 'opacity-100' : 'opacity-0 absolute'
                                }`}
                                aria-labelledby={`team-${team.teamName}`}
                            >
                                <h2 id={`team-${team.teamName}`} className="text-3xl font-semibold mb-4 text-white">{team.teamName}</h2>
                                <div className="flex flex-wrap justify-center">
                                    {team.members.map((item) => (
                                        <div
                                            key={item.name}
                                            className="p-2 rounded-md text-center w-48 sm:w-auto mb-4 sm:mb-0"
                                            aria-labelledby={`member-${item.name}`}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={`Photo of ${item.name}`}
                                                className="drop-shadow-[0_0_10px_#9E63EA] w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-2 object-cover border-4"
                                                width={160}
                                                height={160}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL="/images/placeholder.png"
                                            />
                                            <h3 id={`member-${item.name}`} className="mt-2 sm:mt-4 text-lg sm:text-xl font-medium text-white">{item.name}</h3>
                                            <p className="text-gray-300">{item.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
                            {navigation.map((navItem) => (
                                <button
                                    key={navItem.label}
                                    onClick={navItem.onClick}
                                    className="p-2 rounded-full scale-100 hover:scale-125"
                                    aria-label={navItem.label}
                                >
                                    {navItem.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Carousel;