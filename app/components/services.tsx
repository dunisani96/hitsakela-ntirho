"use client";

import Image from "next/image";
import { Project, projects } from "@/data/projects";
import { motion, Variant, Variants } from "framer-motion";
import { CircleChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const services: Project[] = projects;

const cardColors: Record<string, string> = {
  Construction: "bg-orange-400",
  Electrification: "bg-blue-400",
  "Pest Control": "bg-lime-600",
  Vegetation: "bg-green-400",
  "Plant Hire": "bg-yellow-400",
  Medical: "bg-purple-400",
  Mechanical: "bg-red-400",
  Asphalt: "bg-gray-400",
};

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      role="region"
      aria-labelledby="services-heading"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-15" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-sky-400 rounded-full mb-4" />
          </div>
          <motion.p
            className="text-base font-light text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive solutions tailored to meet your specific needs across
            all our specialized sectors.
          </motion.p>
        </motion.div>

        {/* Grid of Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col h-full"
            >
              <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full rounded-lg">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                  <motion.div
                    variants={imageVariants}
                    className="w-full h-full"
                  >
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index === 0}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {service.category}
                  </div>
                </div>

                {/* Card Body */}
                <div
                  className={`p-6 flex-grow ${
                    cardColors[service.category] || "bg-gray-50"
                  }`}
                >
                  <h3 className="text-xl text-white font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-white font-normal  leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={
                      service.link ||
                      `/projects/${encodeURIComponent(service.title)}`
                    }
                    className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-transparent border border-white rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fallback List View for Accessibility */}
        <motion.div
          className="mt-12 sm:hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Our Services
          </h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                className="flex items-center text-base font-light text-gray-600"
              >
                <CircleChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                {service.title}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
