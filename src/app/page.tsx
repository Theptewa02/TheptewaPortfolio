"use client";

import HomePage from "@/app/components/HomePage";
import EducationPage from "@/app/components/EducationPage";
import SkillsPage from "@/app/components/SkillsPage";
import ProjectPage from "@/app/components/ProjectPage";
import ContactPage from "@/app/components/ContactPage";

import ScrollVelocity from "@/components/ScrollVelocity";

export default function Page() {
  return (
    <main className="overflow-y-scroll h-screen">
      <div id="home"><HomePage /></div>
      <div id="education">
        {/* <ScrollVelocity
          texts={['Education |', 'ประวัติการศึกษา |']} 
          velocity={50} 
          className="text-blue-400"
        /> */}
        <EducationPage />
      </div>
      <div id="skills"><SkillsPage /></div>
      <div id="projects"><ProjectPage /></div>
      <div id="contact"><ContactPage /></div>
    </main>
  );
}
