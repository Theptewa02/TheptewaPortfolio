// "use client";

// import SectionWrapper from "./SectionWrapper";
// import {
//   FaPython,
//   FaHtml5,
//   FaCss3Alt,
//   FaPhp,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiTailwindcss,
//   SiNextdotjs,
//   SiPostgresql,
//   SiMongodb,
//   SiPostman,
//   SiGithub,
// } from "react-icons/si";
// import {
//   BiLogoVisualStudio
// } from "react-icons/bi";

// // Data
// const languages = [
//   { name: "Python", icon: <FaPython className="text-sky-600 text-6xl" /> },
//   { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
//   { name: "PHP", icon: <FaPhp className="text-indigo-500 text-6xl" /> },
//   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-6xl" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-6xl" /> },
// ];

// const frameworks = [
//   { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-6xl" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
//   { name: "React", icon: <FaReact className="text-cyan-500 text-6xl" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-6xl" /> },
// ];

// const tools = [
//   { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500 text-6xl" /> },
//   { name: "Github", icon: <SiGithub className="text-black text-6xl" /> },
//   { name: "Postman", icon: <SiPostman className="text-orange-600 text-6xl" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700 text-6xl" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
// ];

// // Main component
// export default function SkillsPage() {
//   return (
//     <section className="px-6 py-12">
//       <h2 className="text-2xl font-bold mb-12 text-center">ทักษะ | Skills</h2>

//       <div className="space-y-16 max-w-5xl mx-auto">
//         {/* Row 1: Left */}
//         <SkillRow title="Language" skills={languages} position="left" />
//         {/* Row 2: Right */}
//         <SkillRow title="Framework" skills={frameworks} position="right" />
//         {/* Row 3: Left */}
//         <SkillRow title="Tool" skills={tools} position="left" />
//       </div>
//     </section>
//   );
// }

// // Row Layout
// function SkillRow({
//   title,
//   skills,
//   position,
// }: {
//   title: string;
//   skills: { name: string; icon: React.ReactNode }[];
//   position: "left" | "right";
// }) {
//   return (
//     <div
//       className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
//         position === "right" ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       {/* Title */}
//       <h3 className="text-xl font-semibold text-center">{title}</h3>

//       {/* Icons */}
//       <div className="grid grid-cols-3 gap-6 justify-items-center">
//         {skills.map((skill, idx) => (
//           <Skill key={idx} {...skill} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Icon Item
// function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
//   return (
//     <div className="flex flex-col items-center transition-transform hover:scale-110">
//       <div className="p-2 rounded-xl shadow-md bg-white dark:bg-neutral-900">
//         {icon}
//       </div>
//       <span className="mt-2 text-sm font-medium">{name}</span>
//     </div>
//   );
// }
// --------------------------------------------------------------------

"use client";

import SectionWrapper from "./SectionWrapper";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { 
  BiLogoVisualStudio 
} from "react-icons/bi";

const languages = [
  { name: "Python", icon: <FaPython className="text-sky-600 text-6xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-6xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-6xl" /> },
];

const frameworks = [
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-6xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-6xl" /> },
];

const tools = [
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500 text-6xl" /> },
  { name: "Github", icon: <SiGithub className="text-black text-6xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600 text-6xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700 text-6xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
];

export default function SkillsMarqueePage() {
  return (
    <SectionWrapper>
      <section className="w-full py-8 space-y-12">
        <h2 className="text-4xl font-extrabold text-center">ทักษะ | Skills</h2>
        
        <SkillMarquee title="Language" skills={languages} />
        <SkillMarquee title="Framework" skills={frameworks} />
        <SkillMarquee title="Tool" skills={tools} />
      </section>
    </SectionWrapper>
  );
}

function SkillMarquee({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>

      <div className="pointer-events-none absolute top-0 left-0 w-36 h-full bg-gradient-to-r from-blue-100 dark:from-neutral-900 to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-36 h-full bg-gradient-to-l from-blue-100 dark:from-neutral-900 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-6"
          >
            <div className="p-3 rounded-xl shadow bg-white dark:bg-neutral-800">
              {skill.icon}
            </div>
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
