"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample contact info data
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 15 291 1696",],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@ntiroprojects.co.za"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Suite 4, The Chambers 37a Grobler Street, Polokwane, 0700"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
  },
];

// Sample social links
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Facebook", icon: Facebook, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="  text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800">
            Get In Touch
          </h2>
          <div className="w-16 h-1.5 bg-blue-400 rounded-full mx-auto mt-3" />
          <p className="text-gray-500 text-lg font-normal leading-relaxed mt-2 ">
            Ready to start your next project? Contact us today to discuss how we
            can bring your vision to life.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-800 mb-4">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Your full name"
                    aria-required="true"
                    aria-describedby={formStatus ? "form-status" : undefined}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your.email@example.com"
                    aria-required="true"
                    aria-describedby={formStatus ? "form-status" : undefined}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="+27 (555) 123-4567"
                    aria-describedby={formStatus ? "form-status" : undefined}
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="text-black w-full px-3 py-2 harjoittaminen border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    aria-describedby={formStatus ? "form-status" : undefined}
                  >
                    <option value="">Select a service</option>
                    <option value="construction">Civil & Construction</option>
                    <option value="electrical">Electrification</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="vegetation">Vegetation Management</option>
                    <option value="plant-hire">Plant Hire</option>
                    <option value="medical">Medical Supplies</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                  placeholder="Tell us about your project..."
                  aria-required="true"
                  aria-describedby={
                    formStatus ? "form-status" : undefined
                  }
                />
              </div>
              {formStatus && (
                <div
                  id="form-status"
                  className={`text-sm sm:text-base ${
                    formStatus === "success" ? "text-green-600" : "text-red-600"
                  }`}
                  role="alert"
                >
                  {formStatus === "success"
                    ? "Message sent successfully!"
                    : "Failed to send message. Please try again."}
                </div>
              )}
              <motion.div
                whileHover={{ y: isSubmitting ? 0 : -5 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-2 text-sm sm:text-base"
                  aria-label={isSubmitting ? "Submitting message" : "Send message"} variant={undefined} size={undefined}                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    className="bg-white rounded-lg shadow-md p-5 flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-400 rounded-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-neutral-800 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm sm:text-base text-neutral-600"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            {/* <motion.div
              className="bg-white rounded-lg shadow-md p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-neutral-800 mb-4">
                Our Location
              </h4>
              <div className="relative w-full h-48 sm:h-64 rounded-md overflow-hidden">
                <Image
                  src="/map-placeholder.jpg"
                  alt="Map showing Hitsakela Ntiro Projects location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-neutral-600 mt-2 italic">
                Note: Replace with a Google Maps embed for an interactive map.
              </p>
            </motion.div> */}

            {/* Social Links */}
            {/* <motion.div
              className="bg-white rounded-lg shadow-md p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-neutral-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                      aria-label={`Follow us on ${link.name}`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
