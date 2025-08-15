"use client";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useEffect, use } from "react";
import { CircleChevronRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const project = projects.find((p) =>
    p.link.endsWith(`/${resolvedParams.slug}`)
  );

  useEffect(() => {
    if (!project) {
      router.push("/404");
    }
  }, [project, router]);

  // Loading state while checking for project
  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 px-0 relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-200 opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl bg-pink-200 opacity-60" />

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 left-4 bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md z-20 flex items-center justify-center"
          onClick={() => router.push("/#services")}
          aria-label="Return to home page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Hitsakela Ntiro Projects
        </motion.button>

        <motion.div
          className="relative w-full h-[60vh] overflow-hidden rounded-none shadow-lg"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl"
              variants={itemVariants}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {project.description}
              </p>
              {project.services && (
                <ul className="font-light list-disc list-inside space-y-2 text-gray-700 text-base mt-4">
                  {project.services.map((item, idx) => (
                    // <li key={idx}>  <CircleChevronRight className="w-4 h-4 text-sky-400 mr-2" />{item}</li>
                    <li
                      key={idx}
                      className="flex items-center text-base font-light text-gray-600"
                    >
                      <CircleChevronRight className="w-4 h-4 text-sky-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={`${project.title} details`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 px-4 bg-blue-50 relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-100 opacity-60" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl bg-yellow-100 opacity-60" />

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.message}"
                </blockquote>
                <footer className="font-semibold text-blue-700">
                  — {testimonial.name}
                </footer>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Let's discuss how we can bring your vision to life with innovative
            solutions.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            onClick={() => router.push("/#contact")}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
