'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const jobTitles = [
  "Developer",
  "Integrator",
  "Project Manager",
  "Problem Solver",
  "Software Engineer"
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= jobTitles.length - 1) {
          setIsComplete(true);
          return jobTitles.length - 1;
        }
        return nextIndex;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [isComplete]);

  return (
    <div className="bg-white flex items-center p-8 m-6 rounded-lg shadow-md overflow-hidden max-w-full">
      <div className="w-full flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
            I&apos;m Alejandra Bernabel
            <br />
            <span className="block mt-2" style={{ color: '#FFB400' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {jobTitles[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>

        {/* Image */}
        <div className="flex-1 min-w-0 relative w-full h-75 md:h-100 max-w-125">
          <Image
            src="/hero-image.png"
            alt="Alejandra Bernabel"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
