"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "Johannesburg",
    address: "123 Main Street, Sandton, 2196",
    phone: "+27 11 123 4567",
    email: "jhb@ntirogroup.co.za",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.075961825475!2d28.0588!3d-26.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509e622cf9f47%3A0x429d4739ec5df50a!2sSandton!5e0!3m2!1sen!2sza!4v1687955998505",
  },
  {
    city: "Cape Town",
    address: "456 Long Street, CBD, 8000",
    phone: "+27 21 765 4321",
    email: "cpt@ntirogroup.co.za",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.498998227901!2d18.4196!3d-33.9258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6763f8d8f49f%3A0x6cf10c5eaefc8b52!2sCape%20Town!5e0!3m2!1sen!2sza!4v1687956050622",
  },
  {
    city: "Durban",
    address: "789 Beach Road, Umhlanga, 4319",
    phone: "+27 31 555 7890",
    email: "dbn@ntirogroup.co.za",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.329181542643!2d31.0836!3d-29.7283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7058caaae0b5f%3A0x11211239dfeb16b6!2sUmhlanga!5e0!3m2!1sen!2sza!4v1687956107512",
  },
];

export default function Offices() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-16">
      {/* Hero */}
      <section className=" text-white py-20 px-4 text-center">
        <motion.h1
          className="text-4xl text-black md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Offices
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
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
