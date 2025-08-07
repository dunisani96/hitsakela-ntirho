import {
  Hammer,
  Zap,
  Bug,
  Leaf,
  Truck,
  Syringe,
  Wrench,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: <Hammer className="w-5 h-5 text-orange-600" />,
    title: "Civil & Construction",
    description: "Infrastructure development, roadworks, and building projects.",
  },
  {
    icon: <Zap className="w-5 h-5 text-yellow-500" />,
    title: "Electrification",
    description: "Electrical installations and energy solutions.",
  },
  {
    icon: <Bug className="w-5 h-5 text-red-500" />,
    title: "Pest Control",
    description: "Safe and effective pest management services.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-green-500" />,
    title: "Vegetation Management",
    description: "Land clearing, maintenance, and vegetation control.",
  },
  {
    icon: <Truck className="w-5 h-5 text-blue-500" />,
    title: "Plant Hire",
    description: "Machinery and equipment rental for all project sizes.",
  },
  {
    icon: <Syringe className="w-5 h-5 text-indigo-500" />,
    title: "Asphalt Cold Mix Manufacturing",
    description: "High-quality asphalt production for roadworks and repairs.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-teal-600" />,
    title: "Mechanical Works",
    description: "Maintenance, repairs, and mechanical installations.",
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-purple-600" />,
    title: "General Medical Supplies",
    description: "Quality medical consumables and protective gear.",
  },
];

export default function ServicesListHero() {
  return (
   <div className="relative">
      

      <div
      
      >
        <div className="p-4">
          {[
            {
              name: 'Analytics',
              description: 'Get a better understanding of your traffic',
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                >
                  <path
                    d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              href: '#',
            },
            {
              name: 'Engagement',
              description: 'Speak directly to your customers',
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                >
                  <path
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              href: '#',
            },
            {
              name: 'Security',
              description: "Your customers' data will be safe and secure",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                >
                  <path
                    d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              href: '#',
            },
            {
              name: 'Integrations',
              description: 'Connect with third-party tools',
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                >
                  <path
                    d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              href: '#',
            },
            {
              name: 'Automations',
              description: 'Build strategic funnels that will convert',
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                >
                  <path
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              href: '#',
            },
          ].map((item) => (
            <div
              key={item.name}
              className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                {item.icon}
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0"></span>
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}
