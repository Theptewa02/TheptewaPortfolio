import SectionWrapper from "./SectionWrapper";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "SQL"];

  return (
    <SectionWrapper>
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">ทักษะ | Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-2 text-lg">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
