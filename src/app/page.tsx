"use client";

import HomePage from "@/app/components/HomePage";
import EducationPage from "@/app/components/EducationPage";
import SkillsPage from "@/app/components/SkillsPage";
import ProjectPage from "@/app/components/ProjectPage";
import ContactPage from "@/app/components/ContactPage";


export default function Page() {
  return (
    <main className="overflow-y-scroll h-screen">
      <div id="home" className="mb-22"><HomePage /></div>
      <div id="education" className="mb-22"><EducationPage /></div>
      <div id="skills" className="mb-22"><SkillsPage /></div>
      <div id="projects" className="mb-22"><ProjectPage /></div>
      {/* <div id="contact" className="mb-22"><ContactPage /></div> */}
    </main>
  );
}
