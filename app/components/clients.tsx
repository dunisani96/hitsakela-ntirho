"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Clients() {
  // Placeholder client logos (replace with actual logo paths and alt text)
  const clients = [
    { src: "/limpop.png", alt: "Limpopo Provincial Government Logo" },
    { src: "/vharanani.png", alt: "Vharanani Properties" },
    { src: "/vhembe.png", alt: "Polokwane Municipality Logo" },
    { src: "/stats.webp", alt: "South African National Roads Agency Logo" },
    { src: "/chabane.png", alt: "CV Chabane" },
  ];

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleClients, setVisibleClients] = useState(1); // Default to 1 for mobile
  const carouselRef = useRef<HTMLDivElement>(null);

  // Determine number of visible clients based on viewport
  useEffect(() => {
    const updateVisibleClients = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint: 3 clients visible
        setVisibleClients(3);
      } else if (window.innerWidth >= 640) {
        // sm breakpoint: 2 clients visible
        setVisibleClients(2);
      } else {
        // Mobile: 1 client visible
        setVisibleClients(1);
      }
    };

    updateVisibleClients();
    window.addEventListener("resize", updateVisibleClients);
    return () => window.removeEventListener("resize", updateVisibleClients);
  }, []);

  // Auto-scroll effect only if there are more clients than visible
  useEffect(() => {
    if (clients.length <= visibleClients) {
      return; // No auto-scroll if clients fit in the viewport
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= clients.length - visibleClients + 1
          ? 0
          : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [clients.length, visibleClients]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - visibleClients : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= clients.length - visibleClients + 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <section id="clients" className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Our clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-400 rounded-full mb-4" />
          </div>
          <p className="text-base font-light text-gray-600 max-w-3xl mx-auto mb-4">
            Hitsakela Ntiro Projects, a 100% black-owned South African leader in construction, electrification, and more.
          </p>
          {/* Carousel */}
          <div className="relative mb-10 overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleClients)}%)` }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-32 sm:h-40">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Navigation Buttons (only show if there are more clients than visible) */}
            {clients.length > visibleClients && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  aria-label="Previous client"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                  aria-label="Next client"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}