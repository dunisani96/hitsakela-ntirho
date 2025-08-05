"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Slides data: title and corresponding background image
const slides = [
  {
    title: "Civil And Construction",
    image: "civil-and-construction.jpg",
  },
  {
    title: "Electrification",
    image: "electrification.jpg",
  },
  {
    title: "Mechanical Engineering",
    image: "building.jpg",
  },
  {
    title: "Plant Hire and Logistics",
    image: "plant-hire-hero.jpg",
  },
  {
    title: "Asphalt Cold mix manufacturing",
    image: "pest-control.jpeg",
  },
  {
    title: "Environmental and Pest Management",
    image: "reforest.jpg",
  },
   {
    title: "Medical Equipment Supply",
    image: "medical.jpg",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Cycle every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${currentSlide.image}')` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <motion.button
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-400 text-white font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-base sm:text-lg md:text-6xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Group
          </motion.button>
          <motion.p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we’re transforming civil works, electrification,
            medical supply, and more with innovation and integrity.
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide.title}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {currentSlide.title}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}