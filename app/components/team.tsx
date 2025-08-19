"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const teamMembers = [
  {
    name: "Xilombe Tlakula",
    role: "Director",
    description: "Director of Hitsakela Ntiro Projects",
    image: "/xilombe.jpeg",
  },
  {
    name: "Monyani Tlakula",
    role: "Director",
    description: "Director of Hitsakela Ntiro Projects",
    image: "/monyani.jpeg",
  },
  {
    name: "Amos Baloyi",
    role: "Technical Manager",
    description: "Technical Manager of Hitsakela Ntiro Projects",
    image: "/amos.jpeg",
  },
  {
    name: "Chiedza Nhindiri",
    role: "Administrator",
    description: "Administrator of Hitsakela Ntiro Projects",
    image: "/chiedza.jpeg",
  },
];

export default function Team() {
  return (
    <section id="team" className="" aria-labelledby="team-heading">
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
            Our Team
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
            Meet the dedicated professionals behind our group of companies,
            driving innovation and excellence across all our services.
          </motion.p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-16">
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              variants={itemVariants}
            >
              <Link href="#" className="block w-full">
                <motion.div  variants={imageVariants} className="relative w-full aspect-[3/4] max-w-[256px] mx-auto sm:max-w-[300px]">
                  <Image
                    className="object-cover rounded-t-lg w-full h-full"
                    src={member.image}
                    alt={`${member.name} Avatar`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index === 0}
                  />
                </motion.div>
              </Link>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-base font-base text-gray-500 mb-2">
                  {member.role}
                </p>
                <p className="text-base font-light text-gray-600">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
