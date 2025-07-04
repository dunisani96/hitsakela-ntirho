"use client"

import { motion } from "framer-motion"
import { Building2, Zap, Shield, TreePine, Truck, Heart } from "lucide-react"

const sectors = [
  {
    icon: Building2,
    title: "Civil and Construction",
    description:
      "Comprehensive construction services from foundation to completion, delivering quality infrastructure projects.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Electrification",
    description:
      "Professional electrical installations and maintenance services for residential and commercial properties.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Pest Control",
    description: "Effective pest management solutions to protect your property and ensure a safe, healthy environment.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TreePine,
    title: "Vegetation Management",
    description: "Expert landscaping and vegetation control services to maintain and enhance your outdoor spaces.",
    gradient: "from-green-600 to-lime-500",
  },
  {
    icon: Truck,
    title: "Plant Hire",
    description: "Reliable equipment rental services with well-maintained machinery for all your project needs.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "General Medical Supplies",
    description: "Quality medical equipment and supplies to support healthcare facilities and professionals.",
    gradient: "from-red-500 to-rose-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
}

export default function CompanySectors() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Group of Companies
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Delivering excellence across multiple sectors with specialized expertise and unwavering commitment to
            quality
          </motion.p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={sector.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${sector.gradient} mb-6 relative z-10`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {sector.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {sector.description}
                    </motion.p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent rounded-full -translate-y-10 translate-x-10 opacity-50" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-50 to-transparent rounded-full translate-y-8 -translate-x-8 opacity-30" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
