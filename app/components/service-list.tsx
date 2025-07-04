import {
  Hammer,
  Zap,
  Bug,
  Leaf,
  Truck,
  Syringe,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Hammer className="w-7 h-7 text-orange-600" />,
    title: "Civil & Construction",
    description: "Infrastructure development, roadworks, and building projects.",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-500" />,
    title: "Electrification",
    description: "Electrical installations and energy solutions.",
  },
  {
    icon: <Bug className="w-7 h-7" />,
    title: "Pest Control",
    description: "Safe and effective pest management services.",
  },
  {
    icon: <Leaf className="w-7 h-7 text-green-500" />,
    title: "Vegetation",
    description: "Land clearing, maintenance, and vegetation control.",
  },
  {
    icon: <Truck className="w-7 h-7 text-blue-500" />,
    title: "Plant Hire",
    description: "Machinery and equipment rental for all project sizes.",
  },
  {
    icon: <Syringe className="w-7 h-7 text-indigo-500" />,
    title: "General Medical Supplies",
    description: "Quality medical consumables and protective gear.",
  },
  {
    icon: <Wrench className="w-7 h-7 text-teal-600" />,
    title: "Mechanical Works",
    description: "Maintenance, repairs, and mechanical installations.",
  },
];

export default function ServicesListHero() {
  return (
    <div className="h-full w-full overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-white scrollbar-track-white/20">
      <ul className="space-y-6 text-white">
        {services.map((service, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex items-center gap-3">
              {service.icon}
              <span className="text-lg font-semibold">{service.title}</span>
            </div>
            <p className="ml-8 text-sm mt-1 text-white/80">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
