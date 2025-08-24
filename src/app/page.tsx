import HomePage from "@/app/components/HomePage";
import EducationPage from "@/app/components/EducationPage";
import SkillsPage from "@/app/components/SkillsPage";
import ProjectPage from "@/app/components/ProjectPage";
import ContactPage from "@/app/components/ContactPage";

export default function Page() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <div id="home" className="snap-start"><HomePage /></div>
      <div id="education" className="snap-start"><EducationPage /></div>
      <div id="skills" className="snap-start"><SkillsPage /></div>
      <div id="projects" className="snap-start"><ProjectPage /></div>
      <div id="contact" className="snap-start"><ContactPage /></div>
    </main>
  );
}
