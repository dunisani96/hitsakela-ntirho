// data/projects.tsx

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    services: string[]
    link: string;
    category: string;
}

// export const projects: Project[] = [
//     {
//         id: 1,
//         title: "Civil and. Construction / Mining",
//         description:
//             "",
//         image: "/civil-construc.jpg",
//         link: "/projects/civil-and-construction",
//         category: "Construction"
//     },
//     {
//         id: 2,
//         title: "Electronification",
//         description:
//             "Professional electrical systems installation for residential and commercial properties with certified technicians.",
//         image: "/electrif.jpg",
//         link: "/projects/electronification",
//         category: "Electronification"
//     },

//     {
//         id: 3,
//         title: "Mechanical works",
//         description:
//             "Comprehensive pest control solutions using eco-friendly methods to protect your property year-round.",
//         image: "/mechanical-works.jpg",
//         link: "/projects/mechanical-works",
//         category: "Mechanical"

//     },
//     {
//         id: 4,
//         title: "Plant Hire",
//         description:
//             "Professional landscaping services including design, installation, and ongoing maintenance for beautiful outdoor spaces.",
//         image: "/plant-hire-hero.jpg",
//         link: "/projects/plant-hire",
//         category: "Plant Hire"

//     },
//     {
//         id: 5,
//         title: "Asphalt Cold mix manufacturing",
//         description:
//             "Wide range of construction and industrial equipment available for short-term and long-term rental projects.",
//         image: "/cold-mix-asphalt.jpg",
//         link: "/projects/asphalt-cold-mix",
//         category: "Asphalt"

//     },
//     {
//         id: 6,
//         title: "Vegitation Management",
//         description:
//             "Quality medical supplies and equipment for healthcare facilities, clinics, and medical professionals.",
//         image: "/vegetation.jpg",
//         link: "/projects/vegetation-management",
//         category: "Vegitation"

//     },
//     {
//         id: 7,
//         title: "Pest Control",
//         description:
//             "Comprehensive mechanical solutions including repairs and custom-built systems.",
//         image: "/pest-control.jpeg",
//         link: "/projects/pest-control",
//         category: "Pest Control"

//     },
//     {
//         id: 8,
//         title: "General Medical Supplies",
//         description:
//             "Efficient logistics services to manage supply chains and deliver goods safely.",
//         image: "/general-med.jpg",
//         link: "/projects/general-medical-supplies",
//         category: "Medical"

//     },
// ];
export const projects: Project[] = [
    {
        id: 1,
        title: "Civil and Construction ",
        description:
            "We offer comprehensive civil engineering and construction services.",
        services: [
            "Road construction and surfacing (gravel, tar, asphalt)",
            "Bulk earthworks, excavations, and stormwater drainage",
            "Water and sewer reticulation systems",
            "Concrete works (bridges, culverts, and retaining structures)",
            "Low-cost housing, schools, clinics, and commercial buildings",
            "Building renovations, maintenance, and upgrades",
            "Turnkey project delivery including planning and execution"
        ],
        image: "/civil-construc.jpg",
        link: "/services/civil-and-construction",
        category: "Construction"
    },
    {
        id: 2,
        title: "Electrification",
        description:
            "Professional electrical systems installation for residential and commercial properties with certified technicians.",
        services: [
            "Rural and urban electrification projects.",
            "Installation of transformers, mini-substations, and street lighting.",
            "Low-, medium-, and high-voltage line construction.",
            "Meter installations, audits, and upgrades.",
            "Solar and alternative energy solutions.",
            "Electrical fault detection, repairs, and preventative maintenance."

        ],
        image: "/electrif.jpg",
        link: "/services/electrification",
        category: "Electrification"
    },
    {
        id: 3,
        title: "Mechanical Works",
        description:
            "We provide solutions in heavy mechanical works",
        services: [
            "Borehole drilling, casing, and pump installation.",
            "Fabrication and erection of steel structures.",
            "Installation of industrial machinery and equipment.",
            "Welding, pipe fitting, and plant maintenance.",
            "On-site mechanical troubleshooting and repairs.",
            "Water reticulation pump station installation."
        ],
        image: "/mechanical-works.jpg",
        link: "/services/mechanical-works",
        category: "Mechanical"
    },
    {
        id: 4,
        title: "Plant Hire And Logistics",
        description:
            "We provide reliable machinery and logistical support for project delivery",
        services: [
            "TLBs, graders, rollers, excavators, and tipper trucks for hire.",
            "Logistics for material delivery, site clearance, and earth movement.",
            "Fleet maintenance and operator supply.",
            "Equipment transport and support for remote sites."
        ],
        image: "/plant-hire-hero.jpg",
        link: "/services/plant-hire",
        category: "Plant Hire"
    },
    {
        id: 5,
        title: "Asphalt Cold mix manufacturing",
        description:
            "We produce and supply ready-to-use asphalt materials.",
        services: [
            "High-performance cold mix asphalt suitable for: Pothole patching, Driveway repairs, Temporary road works",
            "Packaging in 25kg or bulk supply.",
            "On-site asphalt patching support for municipalities.",
            "Weather-resistant, flexible application year-round."
        ],
        image: "/cold-mix-asphalt.jpg",
        link: "/services/asphalt-cold-mix",
        category: "Asphalt"
    },
    {
        id: 6,
        title: "Vegetation Management",
        description:
            "Our division ensures a safe, clean, and eco-friendly environment",
        services: [
            "Vegetation management, bush clearing, and tree felling.",
            "Firebreak creation and alien plant removal. ",
            "General site clearance and slope maintenance.",
        ],
        image: "/vegetation.jpg",
        link: "/services/vegetation-management",
        category: "Vegetation"
    },
    {
        id: 7,
        title: "Pest Control",
        description:
            "Comprehensive mechanical solutions including repairs and custom-built systems.",
        services: [
            "Fumigation",
            " Rodent control",
            "Cockroach, termite and mosquito eradication",
            "Residential, commercial, and agricultural pest solutions."

        ],
        image: "/pest-control.jpeg",
        link: "/services/pest-control",
        category: "Pest Control"
    },
    {
        id: 8,
        title: " Medical Equipment Supply",
        description:
            " ",
        services: [
            "Hospital furniture (beds, trolleys, wheelchairs, etc.).",
            "ICU and general ward equipment.",
            "Oxygen concentrators, monitors, and ventilators.",
            "PPE: gloves, masks, gowns, shields, and sanitizer stations.",
            "Mobile clinics and field hospital infrastructure.",
            "Emergency kits, ambulatory equipment, and stretchers.",
            "COVID-19 rapid response supply chain management."
        ],
        image: "/general-med.jpg",
        link: "/services/general-medical-supplies",
        category: "Medical"
    },
];
