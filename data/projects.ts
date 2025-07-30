// data/projects.tsx

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Civil and. Construction / Mining",
        description:
            "Full-scale commercial building projects from design to completion, including offices, retail spaces, and industrial facilities.",
        image: "/civil-construc.jpg",
        link: "/projects/civil-and-construction",
        category: "Construction"
    },
    {
        id: 2,
        title: "Electronification",
        description:
            "Professional electrical systems installation for residential and commercial properties with certified technicians.",
        image: "/electrif.jpg",
        link: "/projects/electronification",
        category: "Electronification"
    },

    {
        id: 3,
        title: "Mechanical works",
        description:
            "Comprehensive pest control solutions using eco-friendly methods to protect your property year-round.",
        image: "/mechanical-works.jpg",
        link: "/projects/mechanical-works",
        category: "Mechanical"

    },
    {
        id: 4,
        title: "Plant Hire",
        description:
            "Professional landscaping services including design, installation, and ongoing maintenance for beautiful outdoor spaces.",
        image: "/plant-hire-hero.jpg",
        link: "/projects/plant-hire",
        category: "Plant Hire"

    },
    {
        id: 5,
        title: "Asphalt Cold mix manufacturing",
        description:
            "Wide range of construction and industrial equipment available for short-term and long-term rental projects.",
        image: "/cold-mix-asphalt.jpg",
        link: "/projects/asphalt-cold-mix",
        category: "Asphalt"

    },
    {
        id: 6,
        title: "Vegitation Management",
        description:
            "Quality medical supplies and equipment for healthcare facilities, clinics, and medical professionals.",
        image: "/vegetation.jpg",
        link: "/projects/vegetation-management",
        category: "Vegitation"

    },
    {
        id: 7,
        title: "Pest Control",
        description:
            "Comprehensive mechanical solutions including repairs and custom-built systems.",
        image: "/pest-control.jpeg",
        link: "/projects/pest-control",
        category: "Pest Control"

    },
    {
        id: 8,
        title: "General Medical Supplies",
        description:
            "Efficient logistics services to manage supply chains and deliver goods safely.",
        image: "/general-med.jpg",
        link: "/projects/general-medical-supplies",
        category: "Medical"

    },
];
