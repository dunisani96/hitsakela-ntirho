"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

// Define interface for office data (TypeScript)
interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  mapSrc: string;
}

// Move API key to environment variable access
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";

// Office data
const offices: Office[] = [
  {
    city: "Head Office",
    address: "Suite 4, The Chambers, 37A Grobler Street, Polokwane, 0700",
    phone: "+27 15 291 1619",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=37A+Grobler+Street,Polokwane,0700,South+Africa`,
  },
  {
    city: "Western Cape",
    address: "Unit 3, 8 End Street Bellville",
    phone: "+27 21 002 8727",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=8+End+Street+Bellville+Western+Cape+South+Africa`,
  },
  {
    city: "Gauteng",
    address: "Shop 263, Louis Pasteur 254 Sisulu Street, Pretoria, 0001",
    phone: "+27 12 320 0690",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Shop+263,+Louis+Pasteur,+254+Sisulu+Street,+Pretoria,+0001,+South+Africa`,
  },
  {
    city: "Mpumalanga",
    address: "109 Mlondolozi House, 6 Ehmke Street, Bombela, 1200",
    phone: "+27 13 752 2606",
    email: "info@ntiroprojects.co.za",
    mapSrc: `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=6+Ehmke+Street,Bombela,1200,South+Africa`,
  },
];

// Office Card Component
const OfficeCard = ({ office, index }: { office: Office; index: number }) => (
  <motion.div
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
      title={`Map of ${office.city} office at ${office.address}`}
    ></iframe>
    <div className="p-6 flex-grow flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
      <p className="flex items-center text-sm mb-1">
        <MapPin className="w-4 h-4 mr-2" />
        {office.address}
      </p>
      <p className="flex items-center text-sm mb-1">
        <Phone className="w-4 h-4 mr-2" />
        <a href={`tel:${office.phone}`} className="hover:text-blue-600">
          {office.phone}
        </a>
      </p>
      <p className="flex items-center text-sm">
        <Mail className="w-4 h-4 mr-2" />
        <a href={`mailto:${office.email}`} className="hover:text-blue-600">
          {office.email}
        </a>
      </p>
    </div>
  </motion.div>
);

export default function Offices() {
  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen text-gray-800 pb-16 text-center">
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
            <div className="w-24 h-1 bg-sky-400 rounded-full mb-4" />
          </div>
        <motion.p
          className="text-base font-light text-gray-600 max-w-3xl mx-auto"
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
          <OfficeCard key={office.city} office={office} index={index} />
        ))}
      </section>
    </main>
  );
}