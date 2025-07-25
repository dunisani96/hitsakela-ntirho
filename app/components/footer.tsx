"use client";

import { Alert } from "@heroui/alert";
import { motion } from "framer-motion";
import {Button} from '@heroui/button'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { heroui } from "@heroui/theme";

export default function Footer() {
  function handleSendMessage() {
    console.log("Hello");
  }

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Form Section (Dark Background) */}
        <motion.div
          className="bg-blue-400 text-white p-6 sm:p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Contact Us
          </h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              <Alert
              color="success"
              description="form submitted"
              title="Success"
              variant="faded"
              
              />

            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              aria-label="Your Email"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              aria-label="Your Message"
            />
            <Button
              type="submit"
              className="inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold text-white border-2 border-white bg-transparent rounded-lg hover:bg-white hover:text-gray-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 group transition-all duration-300"
              whileHover={{ x: 5, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Send Message
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </form>
        </motion.div>

        {/* Social Media & Head Office Section */}
        <motion.div
          className="flex flex-col min-h-[400px] sm:min-h-[450px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Social Media (30% Height, White Background) */}
          <div className="flex-[0.3] bg-gray-900 text-white p-6 sm:p-8 rounded-t-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-blue-500 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Head Office (70% Height, Light Gray Background) */}
          <div className="flex-[0.7] bg-gray-100 text-gray-800 p-6 sm:p-8 rounded-b-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Head Office
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <p>
                  Suite 4, The Chambers ,37a Grobler Street,
                  <br />
                  Polokwane, 0700
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <p>+27 12 345 6789</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <p>info@companyname.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
