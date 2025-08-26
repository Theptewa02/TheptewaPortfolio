import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectPage() {
  const projects = [
    { title: "Portfolio Website", desc: "เว็บไซต์ส่วนตัวที่สร้างด้วย Next.js + Tailwind" },
    { title: "Todo App", desc: "แอปจัดการงานด้วย React และ Firebase" },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">โปรเจกต์ | Project</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>{p.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
