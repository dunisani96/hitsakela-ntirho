import { Hammer, Zap, Bug, Leaf, Truck, Syringe, Wrench, Stethoscope } from "lucide-react";

const services = [
  {
    icon: <Hammer className="w-8 h-8 text-orange-600" />,
    title: "Civil & Construction",
    description: "Infrastructure development, roadworks, and building projects.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Electrification",
    description: "Electrical installations and energy solutions.",
  },
  {
    icon: <Bug className="w-8 h-8 text-red-500" />,
    title: "Pest Control",
    description: "Safe and effective pest management services.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    title: "Vegetation Management",
    description: "Land clearing, maintenance, and vegetation control.",
  },
  {
    icon: <Truck className="w-8 h-8 text-blue-500" />,
    title: "Plant Hire",
    description: "Machinery and equipment rental for all project sizes.",
  },
  {
    icon: <Syringe className="w-8 h-8 text-indigo-500" />,
    title: "Asphalt Cold Mix Manufacturing",
    description: "High-quality asphalt production for roadworks and repairs.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-teal-600" />,
    title: "Mechanical Works",
    description: "Maintenance, repairs, and mechanical installations.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-purple-600" />,
    title: "General Medical Supplies",
    description: "Quality medical consumables and protective gear.",
  },
];

export default function ServicesListHero() {
  return (
    <section className="py-8 px-4 sm:px-6 h-full w-full overflow-y-auto scrollbar-hidden">
      <div className="max-w-3xl mx-auto">
      
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex flex-col  rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-gray-900 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="ml-11 text-sm sm:text-base text-gray-300 mt-2">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}