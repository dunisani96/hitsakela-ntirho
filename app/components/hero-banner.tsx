// components/HeroBanner.tsx

"use client";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 px-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Solutions That Matter
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We create impactful projects and products with passion and precision.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
      </div>
    </section>
  );
}
