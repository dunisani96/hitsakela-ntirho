
"use client"
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";

type Props = {
  params: { slug: string };
};

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



export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.link.endsWith(`/${params.slug}`));
  if (!project) return notFound();

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 px-0 relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-200" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl bg-pink-200" />

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
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
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
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 px-4 bg-blue-50 relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl bg-green-100" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl bg-yellow-100" />

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Testimonials
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <p className="text-gray-700 mb-4 leading-relaxed">
                  “{t.message}”
                </p>
                <p className="font-semibold text-blue-700">- {t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
