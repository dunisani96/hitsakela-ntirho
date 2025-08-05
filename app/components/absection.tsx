"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ABSection() {
  return (
    <motion.section
      className="relative bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 py-16 px-8 overflow-hidden"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dots"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <circle cx="10" cy="10" r="2" fill="#3B82F6" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="1440" height="800" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="p-8 bg-white bg-opacity-90 rounded-xl shadow-lg backdrop-blur-lg"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            We craft innovative digital experiences that elevate your brand and
            inspire your audience. Our passionate team leverages creativity and
            cutting-edge technology to bring your vision to life with precision
            and style.
          </p>

          <div className="space-y-6">
            {/* Feature Card 1 */}
            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 bg-white rounded-full shadow-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2H17z" />
                  <circle cx="12" cy="8" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Dedicated Team
                </h3>
                <p className="text-gray-500 text-sm">
                  A passionate group of experts committed to delivering
                  excellence in every project.
                </p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 bg-white rounded-full shadow-lg">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 21h6v-1H9v1zm3-18a4 4 0 00-4 4c0 1.38.56 2.63 1.46 3.54A5.978 5.978 0 009 12h6a5.978 5.978 0 00-1.46-3.46A4 4 0 0015 7a4 4 0 00-4-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Innovative Approach
                </h3>
                <p className="text-gray-500 text-sm">
                  We embrace creativity and technology to craft unique solutions
                  tailored for you.
                </p>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 bg-white rounded-full shadow-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 0012 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 0016 14zM8 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 004 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 008 14zM12 4c-2.21 0-4 1.79-4 4 0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3 0-2.21-1.79-4-4-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Customer Centric
                </h3>
                <p className="text-gray-500 text-sm">
                  Your satisfaction is our priority — we listen, adapt, and
                  deliver beyond expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="relative p-4"
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-green-400 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="About Us"
            className="relative rounded-xl shadow-xl object-cover w-full h-full hover:opacity-90 transition-opacity duration-300"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
