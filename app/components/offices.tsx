"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";


const API_KEY= "AIzaSyDUV8mmfRam2DrQ4vTgVk4B54xfUatNxM8";

const offices = [
  {
    city: "Head Office",
    address: "Suite 4, The Chambers, 37A Grobler Street, Polokwane, 0700",
    phone: "+27 15 291 1619",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=37A+Grobler+Street,Polokwane,0700,South+Africa`,
  },
  {
    city: "Western Cape",
    address: "456 Long Street, CBD, Cape Town, 8000",
    phone: "+27 21 765 4321",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=456+Long+Street,Cape+Town,8000,South+Africa`,
  },
  {
    city: "Gauteng",
    address: "789 Beach Road, Umhlanga, 4319",
    phone: "+27 31 555 7890",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=789+Beach+Road,Umhlanga,4319,South+Africa`,
  },
  {
    city: "Mpumalanga",
    address: "109 Mlondolozi House, 6 Ehmke Street, Bombela, 1200",
    phone: "+27 31 555 7890",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=6+Ehmke+Street,Bombela,1200,South+Africa`,
  },
];


export default function Offices() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-16 text-center">
      {/* Hero */}
      <section className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        <motion.h2
          className="text-4xl text-black md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Offices
        </motion.h2>
        <div className="flex justify-center">
          <div className="w-50 h-1 justify-center bg-blue-400 rounded-full mb-4" />
        </div>
        <motion.p
          className="text-lg text-black max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Visit any of our regional offices located across South Africa.
        </motion.p>
      </section>

      {/* Office Cards */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <motion.div
            key={office.city}
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <iframe
              src={office.mapSrc}
              className="w-full h-56 border-b"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
              <p className="flex items-center text-sm mb-1">
                <MapPin className="w-4 h-4 mr-2" />
                {office.address}
              </p>
              <p className="flex items-center text-sm mb-1">
                <Phone className="w-4 h-4 mr-2" />
                {office.phone}
              </p>
              <p className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" />
                {office.email}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
