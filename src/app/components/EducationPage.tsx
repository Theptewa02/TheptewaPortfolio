"use client";

import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

import GlowBorder from "@/components/GlowBorder";

export default function EducationPage() {
  const education = [
    {
      year: "2564 - 2568",
      place: "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
      education: "ปริญญาตรี",
      branch: "คณะบริหาธุรกิจ สาขาระบบสารสนเทศ",
      gpa: 3.16,
      logo: "/images/education_picture/rmutk.png",
    },
    {
      year: "2561 - 2564",
      place: "วิทยาลัยพณิชยการเชตุพน",
      education: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      branch: "สาขาคอมพิวเตอร์ธุรกิจ",
      gpa: 3.37,
      logo: "/images/education_picture/chetupon.png",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-full mx-auto">
        <div>
          <h2 className="glow-text text-8xl uppercase mb-2 text-center">
            Education
          </h2>
          <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center border-t-4 pt-4 w-[600px] mx-auto">
            ประวัติการศึกษา
          </h2>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-40 h-40 flex-shrink-0">
                <GlowBorder
                  className="p-[4px] rounded-full inline-block [&>div]:rounded-full [&>div:last-child]:bg-transparent [&>div:last-child]:p-0"
                >
                  <Image
                    src={edu.logo}
                    alt={edu.place}
                    width={200}
                    height={200}
                    className="rounded-full object-cover bg-white"
                  />
                </GlowBorder>
              </div>

              <div className="text-center md:text-left space-y-2">
                <span className="text-md font-bold text-sky-400">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-sky-400">{edu.place}</h3>
                <p className="text-lg text-slate-200">
                  {edu.education} - {edu.branch}
                </p>
                <p>
                  <span className="inline-block bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full shadow-md shadow-cyan-400/50">
                    เกรดเฉลี่ย {edu.gpa}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
