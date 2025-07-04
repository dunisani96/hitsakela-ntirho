"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const services = [
  {
    image: "civil-and-construction.jpg",
    title: "Commercial Construction",
    description:
      "Full-scale commercial building projects from design to completion, including offices, retail spaces, and industrial facilities.",
    category: "Construction",
  },
  {
    image: "electrification.jpg",
    title: "Electrical Installation",
    description:
      "Professional electrical systems installation for residential and commercial properties with certified technicians.",
    category: "Electrification",
  },
  {
    image: "pest-control.jpeg",
    title: "Integrated Pest Management",
    description:
      "Comprehensive pest control solutions using eco-friendly methods to protect your property year-round.",
    category: "Pest Control",
  },
  {
    image: "vegetation-2.jpg",
    title: "Landscape Design & Maintenance",
    description:
      "Professional landscaping services including design, installation, and ongoing maintenance for beautiful outdoor spaces.",
    category: "Vegetation",
  },
  {
    image: "plant-hire-hero.jpg",
    title: "Heavy Equipment Rental",
    description:
      "Wide range of construction and industrial equipment available for short-term and long-term rental projects.",
    category: "Plant Hire",
  },
  {
    image: "/medical.jpg",
    title: "Medical Equipment Supply",
    description:
      "Quality medical supplies and equipment for healthcare facilities, clinics, and medical professionals.",
    category: "Medical",
  },
  {
    image: "/mechanical.jpg",
    title: "Mechanical Services",
    description:
      "Comprehensive mechanical solutions including repairs and custom-built systems.",
    category: "Mechanical",
  },
  {
    image: "/logistics.jpg",
    title: "Logistics & Transportation",
    description:
      "Efficient logistics services to manage supply chains and deliver goods safely.",
    category: "Logistics",
  },
];

const cardColors: Record<string, string> = {
  Construction: "bg-orange-400",
  Electrification: "bg-blue-400",
  "Pest Control": "bg-red-400",
  Vegetation: "bg-yellow-400",
  "Plant Hire": "bg-gray-400",
  Medical: "bg-green-400",
  Mechanical: "bg-purple-400",
  Logistics: "bg-pink-400",
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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-white">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96  rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80  rounded-full blur-3xl" />

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
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive solutions tailored to meet your specific needs across all our specialized sectors.
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                {/* Badge */}
                {service.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </motion.div>
                )}

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

                  <motion.button
                    className="inline-flex items-center text-white font-semibold hover:underline group/btn"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
