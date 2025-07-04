"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Slides data: title and corresponding background image
const slides = [
  {
    title: "Empowering Industries",
    image: "electrification.jpg",
  },
  {
    title: "Driving Innovation",
    image: "civil-and-construction.jpg",
  },
  {
    title: "Building the Future",
    image: "construction.jpg",
  },
  {
    title: "Trusted Medical Suppliers",
    image: "medical.jpg",
  },
    {
    title: "Pest Control",
    image: "pest-control.jpg",
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
    <section className="relative h-[80vh] w-full overflow-hidden">
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
            className="inline-flex items-center px-10 py-5 border-2 border-yellow-600 text-white font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide.title}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {currentSlide.title}{" "}
              <span className="text-blue-400">Our Group</span>
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we’re transforming civil works, electrification,
            medical supply, and more with innovation and integrity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
