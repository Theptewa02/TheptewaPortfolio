"use client";

import SectionWrapper from "./SectionWrapper";
import LogoLoop from "../../components/LogoLoop";
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
  { node: <FaPython className="text-sky-600 text-6xl" />, title: "Python" },
  { node: <FaHtml5 className="text-orange-600 text-6xl" />, title: "HTML" },
  { node: <FaCss3Alt className="text-blue-600 text-6xl" />, title: "CSS" },
  { node: <FaPhp className="text-indigo-500 text-6xl" />, title: "PHP" },
  { node: <FaJsSquare className="text-yellow-400 text-6xl" />, title: "JavaScript" },
  { node: <SiTypescript className="text-blue-500 text-6xl" />, title: "TypeScript" },
];

const frameworks = [
  { node: <SiNextdotjs className="text-black dark:text-white text-6xl" />, title: "Next.js" },
  { node: <FaNodeJs className="text-green-600 text-6xl" />, title: "Node.js" },
  { node: <FaReact className="text-cyan-500 text-6xl" />, title: "React" },
  { node: <SiTailwindcss className="text-cyan-400 text-6xl" />, title: "Tailwind CSS" },
];

const tools = [
  { node: <BiLogoVisualStudio className="text-blue-500 text-6xl" />, title: "VS Code" },
  { node: <SiGithub className="text-black text-6xl" />, title: "Github" },
  { node: <SiPostman className="text-orange-600 text-6xl" />, title: "Postman" },
  { node: <SiPostgresql className="text-sky-700 text-6xl" />, title: "PostgreSQL" },
  { node: <SiMongodb className="text-green-500 text-6xl" />, title: "MongoDB" },
];

export default function SkillsMarqueePage() {
  return (
    <SectionWrapper>
      <div className="w-full py-8 space-y-12">
        <h2 className="text-4xl font-extrabold text-center">ทักษะ | Skills</h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Language</h3>
            <LogoLoop logos={languages}/>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Framework</h3>
            <LogoLoop logos={frameworks}/>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Tool</h3>
            <LogoLoop logos={tools}/>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}