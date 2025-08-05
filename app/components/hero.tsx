"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ServicesListHero from "./service-list";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Main Container */}
      <div className="relative z-10 grid grid-cols-1 md:flex md:flex-row h-full w-full">
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-10 h-full">
          <motion.div
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
          </motion.div>

          {/* <motion.h1
            className=" grid sm:grid-cols-1 justify-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-24 md:w-130 h-2 bg-sky-400 rounded-full mb-4" />
            Group of Companies
          </motion.h1> */}
          <motion.h1
            className="flex flex-col md:pt-10 items-center text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-80 md:w-160 mb-10  h-1 bg-sky-400 rounded-full mb-2" />
            Group of Companies
          </motion.h1>
          {/* 
          <motion.div
            className="sm:absolute sm:bottom-6 left-1/2 transform -translate-x-1/2 md:left-6 md:translate-x-0 flex flex-col md:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="#about">
              <Button
                size="lg"
                className="text-white font-semibold bg-gradient-to-r from-sky-500 to-blue-400 hover:from-blue-600 hover:to-blue-700"
              >
                View Our Group of Companies
              </Button>
            </Link>
            <div className="flex gap-4">
              <div className="w-8 h-8 md:w-15 md:h-15 rounded-full bg-red-500" />
              <div className="w-8 h-8 md:w-15 md:h-15 rounded-full bg-sky-500" />
              <div className="w-8 h-8 md:w-15 md:h-15 rounded-full bg-green-700" />
              <div className="w-8 h-8 md:w-15 md:h-15 rounded-full bg-yellow-300" />
            </div>
          </motion.div> */}

          <motion.div
            className="
    flex flex-col md:flex-row
    items-center md:items-start
    justify-center md:justify-start
    text-center md:text-left
    gap-4
    absolute bottom-6
    left-1/2 -translate-x-1/2
    md:left-6 md:translate-x-0
  "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="#about" className="mx-auto md:mx-0">
              <Button
                size="lg"
                className="
        text-white font-semibold 
        bg-gradient-to-r from-sky-500 to-blue-400 
        hover:from-blue-600 hover:to-blue-700
      "
              >
                View Our Group of Companies
              </Button>
            </Link>

            <div className="flex gap-4 mx-auto md:mx-0">
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-red-500" />
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-sky-500" />
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-green-700" />
              <div className="w-5 h-5 md:w-15 md:h-15 rounded-full bg-yellow-300" />
            </div>
          </motion.div>
        </div>

        {/* Right Section (Image + Services) */}
        <div className="grid sm:grid-cols-1 md:flex md:flex-[1.2] h-[50%] md:h-full">
          {/* Image */}
          <motion.div
            className=" relative h-full md:flex-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/carousel-contracting-5.jpg"
              alt="Center Section Image"
              fill
              className="hidden sm:block grid sm:grid-cols-1 sm:w-16 aspect-auto object-cover object-bottom-right"
              priority
            />
          </motion.div>

          {/* Our Groups Section */}
          <motion.div
            className=" hidden sm:block flex flex-col justify-center items-center bg-sky-400 text-white px-4 h-full pt-10 md:pt-20 md:flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-white pb-2">
              Our Groups
            </h3>
            <ServicesListHero />
          </motion.div>
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
