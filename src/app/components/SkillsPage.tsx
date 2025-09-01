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
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-500 text-6xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
];

const tools = [
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700 text-6xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
  { name: "Github", icon: <SiGithub className="text-black text-6xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600 text-6xl" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500 text-6xl" /> },
];

// marquee row
function SkillRow({
  skills,
}: {
  skills: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <div className="relative overflow-hidden">
      {/* fade ซ้าย–ขวา */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-blue-100 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-blue-100 to-transparent z-10"></div>

      {/* แถวไอคอนเลื่อน */}
      <div className="flex animate-marquee whitespace-nowrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-6 text-center"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
        {/* duplicate */}
        {skills.map((skill, index) => (
          <div
            key={`dup-${index}`}
            className="flex flex-col items-center mx-6 text-center"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold mb-10">ทักษะ | Skills</h2>

        <h3 className="text-2xl font-semibold mb-4">Language</h3>
        <SkillRow skills={languages} />

        <h3 className="text-2xl font-semibold my-6">Framework</h3>
        <SkillRow skills={frameworks} />

        <h3 className="text-2xl font-semibold my-6">Tools</h3>
        <SkillRow skills={tools} />
      </div>
    </SectionWrapper>
  );
}
