"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, MapPin } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: any, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 120;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <div className="backdrop-blur-lg text-blue-400 font-semibold w-full flex flex-col fixed top-0 z-50">
      {/* Main Navbar */}
      <div className="w-full  bg-transparent py-4 px-4 md:px-6 border-b border-gray-300 shadow-sm">
        <div className="container mx-auto flex justify-between items-center min-h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Hitsakela Ntiro Projects
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-gray-900 font-semibold">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className="hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="hover:text-blue-600"
            >
              Contact
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#team"
              onClick={(e) => handleSmoothScroll(e, "team")}
              className="hover:text-blue-600"
            >
              Team
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-4 px-2">
            <div className="flex flex-col space-y-3 text-gray-700 font-medium">
              <a
                href="/"
                className="py-2 px-3 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="py-2 px-3 rounded hover:bg-gray-100"
                onClick={(e) => handleSmoothScroll(e, "/about")}
              >
                About
              </a>
              <a
                href="/contact"
                className="py-2 px-3 rounded hover:bg-gray-100"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contact
              </a>
              <a
                href="/service"
                className="py-2 px-3 rounded hover:bg-gray-100"
                onClick={(e) => handleSmoothScroll(e, "service")}
              >
                Services
              </a>
              <a
                href="/team"
                className="py-2 px-3 rounded hover:bg-gray-100"
                onClick={(e) => handleSmoothScroll(e, "team")}
              >
                Our Team
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
