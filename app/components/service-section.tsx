"use client";

import { Project, projects } from "@/data/projects";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

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

const containerVariants = {
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
      id="service"
      className="bg-gray-50 py-20 px-4 relative overflow-hidden bg-white"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-30 h-1 bg-blue-400 rounded-full mb-4" />
          </div>

          <motion.p
            className="font-light text-gray-600 lg:mb-16 sm:text-xl "
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative flex flex-col h-full"
            >
              <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {service.category}
                  </div>
                </div>

                {/* Card Body */}
                <div
                  className={`p-6 flex-grow text-white ${
                    cardColors[service.category] || "bg-gray-100"
                  }`}
                >
                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.a
                    href={
                      service.link ||
                      `/projects/${encodeURIComponent(service.title)}`
                    }
                    className="m-2 inline-flex items-center px-6 py-3 text-sm font-semibold text-white border-2 border-white bg-transparent rounded-lg hover:bg-white hover:text-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 group/btn transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
