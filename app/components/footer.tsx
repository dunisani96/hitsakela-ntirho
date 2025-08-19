"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="bg-sky-500 text-white py-12  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <div>
            <p className="mb-8">
              <a href="#">
                <Image
                  src="/ntiro-new-logo.png"
                  alt="Hitsakela Ntiro Projects Logo"
                  width={200}
                  height={104}
                  className="mx-auto md:mx-0"
                />
              </a>
            </p>
            <p className="font-normal">
              <strong>Hitsakela Ntiro Projects</strong> is a leading 100% black
              owned South African company specializing in civil and
              construction, electrification, pest control, vegetation
              management, plant hire, and medical supplies.
            </p>
          </div>
        </div>

        {/* Accreditation */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Accreditation</h2>
          <div>
            <p>
              <a href="#">
                <Image
                  src="/nhbrc.webp"
                  alt="Accreditation Badge"
                  width={250}
                  height={250}
                  className="mx-auto md:mx-0"
                />
              </a>
              <br />
              <a href="#">
                <Image
                  src="/bee.webp"
                  alt="B-BBEE LEVEL 1"
                  width={206}
                  height={21}
                  className="mx-auto md:mx-0"
                />
              </a>
              <br/>
              <a href="#">
                <Image
                  src="/ecbsa.gif"
                  alt="Accreditation Badge"
                  width={250}
                  height={250}
                  className="mx-auto md:mx-0"
                />
              </a>

            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <span className="block font-semibold">Head Office</span>
                <span className="font-normal">
                  Suite 4, The Chambers, 37a Grobler Street, Polokwane, 0700
                </span>
              </div>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5" />
              <p className="font-bold">
                Call:
                <span className="font-light"> +27 15 291 1619</span>
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5" />
              <p>
                Email:{" "}
                <a
                  className="font-light"
                  href="mailto:info@ntiroprojects.co.za"
                >
                  info@ntiroprojects.co.za
                </a>
              </p>
            </li>
          </ul>
          <p className="mt-8 flex justify-center md:justify-start">
            <motion.button
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                const pdfUrl = "/profile-ntiro.pdf"; // Replace with actual PDF path
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "company-profile.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="p-3 text-white bg-red-500 hover:bg-blue-600 rounded-full flex items-center justify-center"
              aria-label="Download company profile PDF"
              title="Download Profile"
            >
              <Download size={50} />
            </motion.button>
            <span className="w-2 px-2 font-normal">Download company profile</span>
          </p>
        </div>
      </div>
    </div>
  );
}
