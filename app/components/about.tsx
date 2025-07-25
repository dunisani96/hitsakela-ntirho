"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Satisfied Clients",
    description: "Trusted by businesses across multiple industries",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Delivering excellence since our establishment",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance when you need it",
  },
  {
    icon: Globe,
    number: "6",
    label: "Specialized Sectors",
    description: "Comprehensive services across diverse industries",
  },
];

const values = [
  {
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring superior results that exceed expectations.",
  },
  {
    title: "Innovation Focus",
    description:
      "Embracing cutting-edge technologies and methodologies to deliver modern, efficient solutions.",
  },
  {
    title: "Client Partnership",
    description:
      "Building lasting relationships through transparent communication and collaborative approaches.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const statsVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about">
      {/* Hero Section */}


      <section className="bg-white ">
        <motion.div
          className="text-center mb-16 pt-16 "
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
            About Our Group
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-400 rounded-full mb-4" />
          </div>
          {/* <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are a dynamic group of companies united by a shared commitment
              to excellence, innovation, and sustainable growth. With decades of
              combined experience across multiple sectors, we deliver
              comprehensive solutions that drive success for our clients and
              communities.
            </motion.p> */}
        </motion.div>

        <motion.div>
          <img
            src="riverside-office-park.jpg"
            alt="Our team and facilities"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-15" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          {/* <motion.div
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
              About Our Group
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are a dynamic group of companies united by a shared commitment
              to excellence, innovation, and sustainable growth. With decades of
              combined experience across multiple sectors, we deliver
              comprehensive solutions that drive success for our clients and
              communities.
            </motion.p>
          </motion.div> */}

          {/* Main Content Grid */}
          <div className="">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 w-full"
            >
              <motion.div variants={itemVariants} className="text-center">
                {/* <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  About our group
                </h3> */}

              

              

                <div className="mt-20 text-left grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-900 mb-6 text-2lg tracking-normal text-lg/8 font-normal">
                      Hitsakela Ntiro Projects, trading as Ntiro Projects –
                      Group of Companies, is a dynamic and 100% black-owned
                      South African enterprise founded in 2003. We operate
                      across multiple sectors, delivering integrated solutions
                      in construction, electrification, mechanical engineering,
                      environmental services, logistics, and health technology
                      supply. With a strong footprint in both the public and
                      private sectors, we pride ourselves on sustainable service
                      delivery, local empowerment, and innovation. We are driven
                      by a mission to develop infrastructure, uplift
                      communities, and meet the evolving needs of our continent
                      with professionalism and excellence.
                    </p>
                  </div>

                  <div>
                    
                      <motion.div variants={itemVariants} className="pt-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                          Our Core Values
                        </h4>
                        <div className="space-y-4">
                          {values.map((value, index) => (
                            <motion.div
                              key={value.title}
                              className="flex items-start space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-1">
                                  {value.title}
                                </h5>
                                <p className="text-gray-600">
                                  {value.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                
              </motion.div>
            </motion.div>

            {/* Right Content - Image Placeholder */}
          </div>

          {/* Stats Section */}
          {/* <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* Call to Action */}
          {/* <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Projects
            </motion.button>
          </motion.div> */}
        </div>
      </section>
    </section>
  );
}
