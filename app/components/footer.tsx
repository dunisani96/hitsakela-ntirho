"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media & Summary */}
        <div className="flex flex-col justify-between h-full">
          {/* Social Media - 1/4 Height */}
          <div className="flex gap-4 bg-gray-800 p-4 rounded-md mb-6">
            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-300">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-400">
              <Instagram />
            </a>
          </div>

          {/* Summary - 3/4 Height */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Head Office</h3>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1" />
              <p>123 Main Street, Suite 456<br />City Name, Country</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone />
              <p>+27 12 345 6789</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail />
              <p>info@companyname.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
