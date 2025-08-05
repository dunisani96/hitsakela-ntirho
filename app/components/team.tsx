"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Github, Globe } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Bonnie Green",
      role: "CEO & Web Developer",
      description: "Bonnie drives the technical strategy of the platform and brand.",
      image: "/dev.png", // Placeholder: replace with your image path
      socials: [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
        { icon: <Github className="w-5 h-5" />, href: "#" },
        { icon: <Globe className="w-5 h-5" />, href: "#" },
      ],
    },
    {
      name: "Jese Leos",
      role: "CTO",
      description: "Jese drives the technical strategy of the platform and brand.",
      image: "/man.png", // Placeholder: replace with your image path
      socials: [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
        { icon: <Github className="w-5 h-5" />, href: "#" },
        { icon: <Globe className="w-5 h-5" />, href: "#" },
      ],
    },
    {
      name: "Michael Gough",
      role: "Senior Front-end Developer",
      description: "Michael drives the technical strategy of the platform and brand.",
      image: "/boy.png", // Placeholder: replace with your image path
      socials: [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
        { icon: <Github className="w-5 h-5" />, href: "#" },
        { icon: <Globe className="w-5 h-5" />, href: "#" },
      ],
    },
    {
      name: "Lana Byrd",
      role: "Marketing & Sales",
      description: "Lana drives the technical strategy of the platform and brand.",
      image: "/woman.png", // Placeholder: replace with your image path
      socials: [
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
        { icon: <Github className="w-5 h-5" />, href: "#" },
        { icon: <Globe className="w-5 h-5" />, href: "#" },
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Our Team
          </h2>
                    <div className="flex justify-center">
            <div className="w-24 h-1 bg-blue-400 rounded-full mb-4" />
          </div>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
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
              <Link href={member.socials[0].href}>
                <Image
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.image}
                  alt={`${member.name} Avatar`}
                  width={200}
                  height={200}
                  priority={index === 0} // Optimize loading for first image
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={member.socials[0].href}>{member.name}</Link>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {member.socials.map((social, idx) => (
                    <li key={idx}>
                      <Link
                        href={social.href}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        {social.icon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}