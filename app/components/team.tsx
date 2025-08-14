// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function Team() {
//   const teamMembers = [
//     {
//       name: "Xilombe Tlakula",
//       role: "Director",
//       description: "Director of Hitsakela Ntiro Projects",
//       image: "/xilombe.jpeg",
    
//     },
//     {
//       name: "Monyani Tlakula",
//       role: "Director",
//       description: "Director of Hitsakela Ntiro Projects",
//       image: "/monyani.jpeg",
     
//     },
//       {
//       name: "Amos Baloyi",
//       role: "Technical Manager",
//       description: "Technical Manager of Hitsakela Ntiro Projects",
//       image: "/amos.jpeg",
     
//     },
//       {
//       name: "Chiedza Nhindiri",
//       role: "Administrator",
//       description: "Administrator of Hitsakela Ntiro Projects",
//       image: "/chiedza.jpeg",
     
//     },
//   ];

//   return (
//     <section className="bg-white">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//         <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
//           <motion.h2
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Our Team
//           </motion.h2>
//           <div className="flex justify-center">
//             <div className="w-24 h-1 bg-blue-400 rounded-full mb-4" />
//           </div>
//           <p className="font-light text-gray-600 lg:mb-16 sm:text-xl">
//             Meet the dedicated professionals behind our group of companies, driving
//             innovation and excellence across all our services.
//           </p>
//         </div>
//         <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="items-center bg-gray-50 rounded-lg shadow  w-full sm:flex bg-white dark:border-gray-700"
//             >
//               <Link href={"#"} className="flex-shrink-0">
//                 <div className="w-64 h-80 relative overflow-hidden rounded-lg sm:rounded-none sm:rounded-l-lg">
//                   <Image
//                     className="object-cover"
//                     src={member.image}
//                     alt={`${member.name} Avatar`}
//                     fill
//                     sizes="256px"
//                     priority={index === 0}
//                   />
//                 </div>
//               </Link>
//               <div className="p-5">
//                 <h3 className="text-xl font-bold tracking-tight text-gray-600">
//                   {member.name}
//                 </h3>
//                 <span className="text-gray-500 dark:text-gray-400">{member.role}</span>
//                 <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
//                   {member.description}
//                 </p>
               
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants :Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const teamMembers = [
  {
    name: "Xilombe Tlakula",
    role: "Director",
    description: "Director of Hitsakela Ntiro Projects",
    image: "/xilombe.jpeg",
  },
  {
    name: "Monyani Tlakula",
    role: "Director",
    description: "Director of Hitsakela Ntiro Projects",
    image: "/monyani.jpeg",
  },
  {
    name: "Amos Baloyi",
    role: "Technical Manager",
    description: "Technical Manager of Hitsakela Ntiro Projects",
    image: "/amos.jpeg",
  },
  {
    name: "Chiedza Nhindiri",
    role: "Administrator",
    description: "Administrator of Hitsakela Ntiro Projects",
    image: "/chiedza.jpeg",
  },
];

export default function Team() {
  return (
    <section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      role="region"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            id="team-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Team
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-sky-400 rounded-full mb-4" />
          </div>
          <motion.p
            className="text-base font-light text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet the dedicated professionals behind our group of companies, driving
            innovation and excellence across all our services.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              variants={itemVariants}
            >
              <Link href="#" className="block w-full">
                <div className="relative w-full aspect-[3/4] max-w-[256px] mx-auto sm:max-w-[300px]">
                  <Image
                    className="object-cover rounded-t-lg"
                    src={member.image}
                    alt={`${member.name} Avatar`}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    priority={index === 0}
                  />
                </div>
              </Link>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-base font-base text-gray-500 mb-2">{member.role}</p>
                <p className="text-base font-light text-gray-600">{member.description}</p>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}