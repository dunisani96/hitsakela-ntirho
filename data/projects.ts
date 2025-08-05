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
        link: "/projects/civil-and-construction",
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
        link: "/projects/electronification",
        category: "Electrification"
    },
    {
        id: 3,
        title: "Mechanical works",
        description:
            "Comprehensive pest control solutions using eco-friendly methods to protect your property year-round.",
        services: [
            "Pest control using eco-friendly methods",
            "Protection of property year-round"
        ],
        image: "/mechanical-works.jpg",
        link: "/projects/mechanical-works",
        category: "Mechanical"
    },
    {
        id: 4,
        title: "Plant Hire",
        description:
            "Professional landscaping services including design, installation, and ongoing maintenance for beautiful outdoor spaces.",
        services: [
            "Landscaping design",
            "Installation of outdoor features",
            "Ongoing maintenance for outdoor spaces"
        ],
        image: "/plant-hire-hero.jpg",
        link: "/projects/plant-hire",
        category: "Plant Hire"
    },
    {
        id: 5,
        title: "Asphalt Cold mix manufacturing",
        description:
            "Wide range of construction and industrial equipment available for short-term and long-term rental projects.",
        services: [
            "Cold mix asphalt manufacturing",
            "Construction and industrial equipment rental"
        ],
        image: "/cold-mix-asphalt.jpg",
        link: "/projects/asphalt-cold-mix",
        category: "Asphalt"
    },
    {
        id: 6,
        title: "Vegetation Management",
        description:
            "Quality medical supplies and equipment for healthcare facilities, clinics, and medical professionals.",
        services: [
            "Vegetation management services"
        ],
        image: "/vegetation.jpg",
        link: "/projects/vegetation-management",
        category: "Vegetation"
    },
    {
        id: 7,
        title: "Pest Control",
        description:
            "Comprehensive mechanical solutions including repairs and custom-built systems.",
        services: [
            "Mechanical repairs",
            "Custom-built systems"
        ],
        image: "/pest-control.jpeg",
        link: "/projects/pest-control",
        category: "Pest Control"
    },
    {
        id: 8,
        title: "General Medical Supplies",
        description:
            "Efficient logistics services to manage supply chains and deliver goods safely.",
        services: [
            "Logistics services",
            "Supply chain management",
            "Goods delivery"
        ],
        image: "/general-med.jpg",
        link: "/projects/general-medical-supplies",
        category: "Medical"
    },
];
