"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800">
            Our Projects
          </h2>
          <div className="w-16 h-1.5 bg-blue-400 rounded-full mx-auto mt-3" />
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-neutral-600">
            Explore our diverse portfolio of successful projects, showcasing our
            expertise in construction, infrastructure, and more.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={project.image}
                  alt={`${project.title} project image`}
                  fill
                  className="object-cover"
                  priority={project.id === 1}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 flex-1">
                  {project.description}
                </p>
                <Link href={`/projects/${project.link.split("/").pop()}`}> {/* Updated link */}
                  <Button
                    variant="outline"
                    className="w-full bg-white sm:w-auto flex items-center justify-center gap-2 text-blue-500 border-blue-500 hover:bg-blue-50"
                  >
                    View Project <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
