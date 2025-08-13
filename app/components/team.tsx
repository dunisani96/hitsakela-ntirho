"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Xilombe Tlakula",
      role: "Director",
      description: "Director of Hitsakela ntiro projects",
      image: "/xilombe.jpeg",
      // socials: [
      //   { icon: <Facebook className="w-5 h-5" />, href: "#" },
      //   { icon: <Twitter className="w-5 h-5" />, href: "#" },
      //   { icon: <Github className="w-5 h-5" />, href: "#" },
      //   { icon: <Globe className="w-5 h-5" />, href: "#" },
      // ],
    },
    {
      name: "Monyani Tlakula",
      role: "Director",
      description: "Director of Hitsakela ntiro projects",
      image: "/monyani.jpeg",
      // socials: [
      //   { icon: <Facebook className="w-5 h-5" />, href: "#" },
      //   { icon: <Twitter className="w-5 h-5" />, href: "#" },
      //   { icon: <Github className="w-5 h-5" />, href: "#" },
      //   { icon: <Globe className="w-5 h-5" />, href: "#" },
      // ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Team
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-400 rounded-full mb-4" />
          </div>
          <p className="font-light text-gray-600 lg:mb-16 sm:text-xl">
            Meet the dedicated professionals behind our group of companies, driving
            innovation and excellence across all our services.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex bg-white dark:border-gray-700"
            >
              <Link href={"#"} className="flex-shrink-0">
                <div className="w-64 h-80 relative overflow-hidden rounded-lg sm:rounded-none sm:rounded-l-lg">
                  <Image
                    className="object-cover"
                    src={member.image}
                    alt={`${member.name} Avatar`}
                    fill
                    sizes="256px"
                    priority={index === 0}
                  />
                </div>
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-600">
                  {member.name}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}