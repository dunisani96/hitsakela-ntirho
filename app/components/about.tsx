"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Github,
  Globe,
  CircleChevronRight,
  Compass,
  Target,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const aboutContent = {
  introduction: {
    title: "Introduction",
    description:"Hitsakela Ntiro Projects , trading as Ntiro Projects – Group of Companies, is a dynamic and 100% black-owned South African enterprise founded in 2003. We operate across multiple sectors, delivering integrated solutions in construction, electrification, mechanical engineering, environmental services, logistics, and health technology supply. With a strong footprint in both the public and private sectors, we pride ourselves on sustainable service delivery, local empowerment, and innovation. We are driven by a mission to develop infrastructure, uplift communities, and meet the evolving needs of our continent with professionalism and excellence."
  },
  vision: {
    title: "Vision",
    description:
      "To deliver professional, high-quality services in construction, transport, vegetation management, horticulture, landscaping, pest control, events, print works, marketing, and general supply at competitive prices, fostering long-term community relationships and maximizing resource efficiency.",
  },
  mission: {
    title: "Mission",
    description:
      "Our short-term goal is to secure contracts that optimize our resources, while our long-term vision is to grow as a leader in the construction industry, delivering sustainable and innovative solutions that uplift communities.",
  },
  natureOfBusiness: {
    title: "Nature of Business",
    services: [
      "Building Construction and Alterations",
      "Civil Works",
      "Vegetation Management",
      "Horticulture",
      "Landscaping",
      "Pest Control",
      "General Supply of Goods and Services",
      "Environmental Management",
      "Plumbing",
      "Electrification High Voltage Systems",
      "Fencing",
      "General Logistics and Plant Maintenance",
    ],
  },
  environment: {
    title: "Environment",
    description:
      "We adhere to strict health and safety standards, ensuring compliance with safety regulations. All employees receive comprehensive technical and practical training to maintain a safe and sustainable work environment.",
  },
};

export default function About() {
  return (
    <main id="about" className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-gray-50"
        role="region"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About us
          </motion.h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-sky-400 rounded-full mb-4" />
          </div>
          <motion.p
            className="text-base font-light text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A 100% Black-owned South African enterprise delivering innovative,
            sustainable solutions since 2003.
          </motion.p>
        </div>
      </section>

      {/* About Content Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative"
        role="region"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Introduction */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {aboutContent.introduction.title}
                </h2>
                <p className="text-base font-light text-gray-600 leading-relaxed">
                  {aboutContent.introduction.description}
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/construction-about.jpg"
                    alt="Ntiro Projects in action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>

           
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[aboutContent.vision, aboutContent.mission].map((item) => (
                <motion.div
                  key={item.title}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3">
                    {item.title === "Vision" ? (
                      <Target
                        className="w-10 h-10 text-sky-400 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <Compass
                        className="w-10 h-10 text-sky-400 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base font-light text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Nature of Business */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.natureOfBusiness.title}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutContent.natureOfBusiness.services.map(
                  (service, index) => (
                    <li
                      key={index}
                      className="flex items-center text-base font-light text-gray-600"
                    >
                      <CircleChevronRight className="w-4 h-4 text-sky-400 mr-2" />
                      {service}
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Environment */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.environment.title}
              </h2>
              <p className="text-base font-light text-gray-600 leading-relaxed">
                {aboutContent.environment.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
