"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.link.endsWith(`/${slug}`));

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full py-10">
        <div className="container mx-auto px-4">
          <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 mb-4">“{testimonial.message}”</p>
                <p className="font-semibold text-blue-700">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
