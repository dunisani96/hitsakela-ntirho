// components/SolutionsDropdown.jsx
import { useState, useRef, useEffect } from 'react';
import {
  Hammer,
  Zap,
  Bug,
  Leaf,
  Truck,
  Syringe,
  Wrench,
  Stethoscope,
} from 'lucide-react';

const services = [
  {
    icon: <Hammer className="w-5 h-5 text-orange-600" />,
    title: 'Civil & Construction',
    description: 'Infrastructure development, roadworks, and building projects.',
    href: 'services/civil-and-construction',
  },
  {
    icon: <Zap className="w-5 h-5 text-yellow-500" />,
    title: 'Electrification',
    description: 'Electrical installations and energy solutions.',
    href: 'services/electrification',
  },
   {
    icon: <Wrench className="w-5 h-5 text-teal-600" />,
    title: 'Mechanical Works',
    description: 'Maintenance, repairs, and mechanical installations.',
    href: 'services/mechanical-works',
  },
   {
    icon: <Truck className="w-5 h-5 text-blue-500" />,
    title: 'Plant Hire and Logistics',
    description: 'Machinery and equipment rental for all project sizes.',
    href: 'services/plant-hire',
  },
    {
    icon: <Syringe className="w-5 h-5 text-indigo-500" />,
    title: 'Asphalt Cold Mix Manufacturing',
    description: 'High-quality asphalt production for roadworks and repairs.',
    href: 'services/asphalt-cold-mix',
  },
   {
    icon: <Leaf className="w-5 h-5 text-green-500" />,
    title: 'Vegetation Management',
    description: 'Land clearing, maintenance, and vegetation control.',
    href: 'services/vegetation-management',
  },
  {
    icon: <Bug className="w-5 h-5 text-red-500" />,
    title: 'Pest Control',
    description: 'Safe and effective pest management services.',
    href: 'services/pest-control',
  },
 
  {
    icon: <Stethoscope className="w-5 h-5 text-purple-600" />,
    title: 'General Medical Supplies',
    description: 'Quality medical consumables and protective gear.',
    href: 'services/general-medical-supplies',
  },
];

export default function SolutionsDropdown() {


  // Toggle popover visibility
 

  return (
    <div className="relative">
      <button
       
        className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900"
      >
        <span>Services</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <div
       
      >
        <div className="p-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                {item.icon}
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.title}
                  <span className="absolute inset-0"></span>
                </a>
                <p className=" font-light mt-1 text-gray-600 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}