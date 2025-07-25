"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Sample testimonial data (replace with your actual data)
const testimonials = [
  {
    id: 1,
    quote:
      "Hitsakela Ntiro Projects delivered our commercial building on time and exceeded our expectations with their attention to detail.",
    author: "Jane Doe",
    role: "CEO, Acme Corp",
    image: "/testimonial-jane.jpg",
  },
  {
    id: 2,
    quote:
      "Their team was professional and communicative throughout the residential project, making the process seamless and stress-free.",
    author: "John Smith",
    role: "Homeowner",
    image: "/testimonial-john.jpg",
  },
  {
    id: 3,
    quote:
      "The infrastructure upgrade was a massive success, thanks to Hitsakela’s expertise and commitment to quality.",
    author: "Emily Johnson",
    role: "City Planner",
    image: "/testimonial-emily.jpg",
  },
  {
    id: 4,
    quote:
      "Working with Hitsakela Ntiro Projects was a game-changer for our industrial facility. Highly recommended!",
    author: "Michael Brown",
    role: "Operations Manager, Delta Industries",
    image: "/testimonial-michael.jpg",
  },
];

export default function TestimonialsPage() {
  return (
    <section id="testimonials" className="w-full py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800">
            What Our Clients Say
          </h2>
          <div className="w-16 h-1.5 bg-blue-400 rounded-full mx-auto mt-3" />
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-neutral-600">
            Hear from our satisfied clients about their experiences working with
            Hitsakela Ntiro Projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Quote Icon */}
              <Quote
                className="absolute top-4 left-4 text-blue-400 opacity-20"
                size={40}
              />

              {/* Testimonial Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <p className="text-sm sm:text-base text-neutral-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  {testimonial.image && (
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.author} profile`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-neutral-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}