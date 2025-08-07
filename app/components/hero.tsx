"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import ServicesListHero from "./service-list";
import { ChevronDown } from "lucide-react";
import ServiceList from "./service-list";
import { useState } from "react";

export default function HeroSection() {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Main Container */}
      <div className="relative z-10 grid grid-cols-1 md:flex md:flex-row h-full w-full">
        {/* Left Section (Text) */}
        <div className="flex flex-col  items-center md:items-start text-center md:text-left px-6 sm:px-10 h-full">
          {/* <motion.div
            className="mb-10 "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/ntiro-logo.svg"
              alt="Ntiro Logo"
              width={1000} // increased width
              height={200} // increased height
              className="object-contain w-full max-w-[100vw] sm:max-w-3xl md:max-w-2xl"
              priority
            />
          </motion.div> */}
          <motion.div
            className=" pt-20 mb-10"
            initial={{ opacity: 0, y: 20 }} // Start from below
            animate={{ opacity: 1, y: -20 }} // Move up to a higher position
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth easing for natural motion
          >
            <Image
              src="/ntiro-logo.svg"
              alt="Ntiro Logo"
              width={1000}
              height={200}
              className="object-contain w-full max-w-[100vw] sm:max-w-3xl md:max-w-2xl"
              priority
            />
          </motion.div>

          <motion.h1
            className="flex flex-col md:pt-10 items-center text-4xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-80 md:w-160 mb-10  h-1 bg-sky-400 rounded-full mb-2" />
            Group of Companies
          </motion.h1>

          <motion.div
            className="
              flex flex-col md:flex-row
              items-center md:items-start
              justify-center md:justify-start
              text-center md:text-left
              gap-4
              pl-50
              mb-30
              absolute bottom-6
              left-1/2 -translate-x-1/2
              md:left-6 md:translate-x-0
              items-center
  "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="#service" className="mx-auto md:mx-0">
              <button className="bg-sky-400 h-16 w-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">
                View Our Group Of Companies
              </button>
            </Link>

            <div className="flex gap-4 mx-auto md:mx-0">
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-red-500" />
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-sky-500" />
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-green-700" />
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-yellow-300" />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-1 md:flex md:flex-[1.2] h-[50%] md:h-full">
          {/* Image */}
          <div className="grid sm:grid-cols-1 md:flex md:flex-[1.2] h-[50%] md:h-full relative">
            {/* Image Section */}
            <motion.div
              className="relative h-full md:flex-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/carousel-contracting-5.jpg"
                alt="Center Section Image"
                fill
                className="hidden sm:block sm:w-16 aspect-auto object-cover object-bottom-right"
                priority
              />
            </motion.div>

            {/* Toggle Button */}
            <div className="absolute bottom-4 left-4 z-50 mb-5">
              <button
                onClick={toggleServices}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition-all"
              >
                <span className="text-sm font-medium text-gray-800">
                  {showServices ? "Hide Services" : "Show Services"}
                </span>
                <motion.div
                  animate={{ rotate: showServices ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-800" />
                </motion.div>
              </button>
            </div>

            {/* Services List Toggle */}
            <AnimatePresence>
              {showServices && (
                <motion.div
                  key="service-list"
                  className="absolute bottom-16 left-4 right-4 bg-white rounded-xl shadow-lg p-4 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ServiceList />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="h-10 w-5 rounded-full border-2 border-white p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="h-2 w-2 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
