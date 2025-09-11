// "use client";

// import SectionWrapper from "./SectionWrapper";

// import LogoLoop from "@/components/LogoLoop";

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

// const languages = [
//   { node: <FaPython className="text-sky-600 text-6xl" />, title: "Python" },
//   { node: <FaHtml5 className="text-orange-600 text-6xl" />, title: "HTML" },
//   { node: <FaCss3Alt className="text-blue-600 text-6xl" />, title: "CSS" },
//   { node: <FaPhp className="text-indigo-500 text-6xl" />, title: "PHP" },
//   { node: <FaJsSquare className="text-yellow-400 text-6xl" />, title: "JavaScript" },
//   { node: <SiTypescript className="text-blue-500 text-6xl" />, title: "TypeScript" },
// ];

// const frameworks = [
//   { node: <SiNextdotjs className="text-black dark:text-white text-6xl" />, title: "Next.js" },
//   { node: <FaNodeJs className="text-green-600 text-6xl" />, title: "Node.js" },
//   { node: <FaReact className="text-cyan-500 text-6xl" />, title: "React" },
//   { node: <SiTailwindcss className="text-cyan-400 text-6xl" />, title: "Tailwind CSS" },
// ];

// const tools = [
//   { node: <BiLogoVisualStudio className="text-blue-500 text-6xl" />, title: "VS Code" },
//   { node: <SiGithub className="text-black text-6xl" />, title: "Github" },
//   { node: <SiPostman className="text-orange-600 text-6xl" />, title: "Postman" },
//   { node: <SiPostgresql className="text-sky-700 text-6xl" />, title: "PostgreSQL" },
//   { node: <SiMongodb className="text-green-500 text-6xl" />, title: "MongoDB" },
// ];

// export default function SkillsMarqueePage() {
//   return (
    // <SectionWrapper>
    //   <div className="max-w-full py-8 space-y-12">
    //     <div>
    //       <h2 className="glow-text text-8xl uppercase mb-2 text-center">
    //         Skills
    //       </h2>
    //       <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center border-t-4 pt-4 w-[400px] mx-auto">
    //         ทักษะ
    //       </h2>
    //     </div>

    //     <div className="space-y-16">
//           <div>
//             <h3 className="text-2xl font-semibold text-center mb-4 text-sky-400 ">Language</h3>
//             <LogoLoop logos={languages}/>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold text-center mb-4 text-sky-400 ">Framework</h3>
//             <LogoLoop logos={frameworks}/>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold text-center mb-4 text-sky-400 ">Tool</h3>
//             <LogoLoop logos={tools}/>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }

"use client";

import SectionWrapper from "./SectionWrapper";
import SpotlightCard from "@/components/SpotlightCard";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { 
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoVisualStudio
} from "react-icons/bi";

const skillsAndTools = [
  { node: <FaPython className="text-sky-600 text-6xl" />, title: "Python", category: "Language" },
  { node: <FaHtml5 className="text-orange-600 text-6xl" />, title: "HTML", category: "Language" },
  { node: <FaCss3Alt className="text-blue-600 text-6xl" />, title: "CSS", category: "Language" },
  { node: <FaPhp className="text-indigo-500 text-6xl" />, title: "PHP", category: "Language" },
  { node: <BiLogoJavascript className="text-yellow-400 text-6xl" />, title: "JavaScript", category: "Language" },
  { node: <BiLogoTypescript className="text-blue-500 text-6xl" />, title: "TypeScript", category: "Language" },

  { node: <SiNextdotjs className="text-black dark:text-white text-6xl" />, title: "Next.js", category: "Framework" },
  { node: <FaNodeJs className="text-green-600 text-6xl" />, title: "Node.js", category: "Framework" },
  { node: <FaReact className="text-cyan-500 text-6xl" />, title: "React", category: "Framework" },
  { node: <SiTailwindcss className="text-cyan-400 text-6xl" />, title: "Tailwind CSS", category: "Framework" },

  { node: <BiLogoVisualStudio className="text-blue-500 text-6xl" />, title: "VS Code", category: "Tool" },
  { node: <SiGithub className="text-black text-6xl" />, title: "Github", category: "Tool" },
  { node: <SiPostman className="text-orange-600 text-6xl" />, title: "Postman", category: "Tool" },

  { node: <SiPostgresql className="text-sky-700 text-6xl" />, title: "PostgreSQL", category: "Database" },
  { node: <SiMongodb className="text-green-500 text-6xl" />, title: "MongoDB", category: "Database" },
];

export default function SkillsPage() {
  return (
    <SectionWrapper>
      <div className="max-w-full py-8 space-y-12">
        <div>
          <h2 className="glow-text text-8xl uppercase mb-2 text-center">
            Skills
          </h2>
          <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center border-t-4 pt-4 w-[380px] mx-auto">
            ทักษะ
          </h2>
        </div>

        {/* แสดงเป็น Grid ของ SpotlightCard */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skillsAndTools.map((item, i) => (
            <SpotlightCard
              key={i}
              spotlightColor="rgba(0, 156, 228, 0.3)"
              className="fill-cyan-500 drop-shadow-md drop-shadow-sky-500 cursor-default flex items-center justify-center"
            >
            <div className="flex flex-col items-center px-4">
              {/* {item.node} */}
              <div className="bg-white rounded-full p-3 flex items-center justify-center">
                {item.node}
              </div>
              <span className="mt-3 text-white font-semibold">{item.title}</span>
              <span className="text-sm text-sky-400">{item.category}</span>
            </div>
          </SpotlightCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
