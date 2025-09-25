// "use client";

// import HomePage from "@/app/components/HomePage";
// import EducationPage from "@/app/components/EducationPage";
// import SkillsPage from "@/app/components/SkillsPage";
// import ProjectPage from "@/app/components/ProjectPage";
// import ContactPage from "@/app/components/ContactPage";

// export default function Page() {
//   return (
//     <main className="overflow-y-scroll hide-scrollbar h-screen">
//       <div id="home" className="mb-22"><HomePage /></div>
//       <div id="education" className="mb-22"><EducationPage /></div>
//       <div id="skills" className="mb-22"><SkillsPage /></div>
//       <div id="projects" className="mb-22"><ProjectPage /></div>
//     </main>
//   );
// }

"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

import Image from "next/image";
import {
  SiFacebook,
  SiLine,
  SiGmail,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import {
  FaPhone,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image as AntdImage, Space } from "antd";

import GlowBorder from "@/components/GlowBorder";
import TextType from "@/components/TextType";
import SpotlightCard from "@/components/SpotlightCard";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ----------------- Contacts -----------------
  const contacts = [
    {
      icon: <SiFacebook className="w-6 h-6" />,
      url: "https://facebook.com/game.theptewa",
      label: "Facebook",
      color: "hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/50",
    },
    {
      icon: <SiLine className="w-6 h-6" />,
      url: "https://line.me/ti/p/y1rgmFMb6n",
      label: "Line",
      color: "hover:bg-green-500 hover:shadow-xl hover:shadow-green-500/50",
    },
    {
      icon: <SiGmail className="w-6 h-6" />,
      url: "mailto:theptewa.phuthachat@gmail.com",
      label: "Gmail",
      color: "hover:bg-red-500 hover:shadow-xl hover:shadow-red-500/50",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      url: "tel:+66808352670",
      label: "Telephone",
      color: "hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/50",
    },
  ];

  // ----------------- Education -----------------
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

  // ----------------- Skills -----------------
  const skillsAndTools = [
    {
      node: <FaPython className="text-sky-600 text-6xl" />,
      title: "Python",
      category: "Language",
    },
    {
      node: <FaHtml5 className="text-orange-600 text-6xl" />,
      title: "HTML",
      category: "Language",
    },
    {
      node: <FaCss3Alt className="text-blue-600 text-6xl" />,
      title: "CSS",
      category: "Language",
    },
    {
      node: <FaPhp className="text-indigo-500 text-6xl" />,
      title: "PHP",
      category: "Language",
    },
    {
      node: <BiLogoJavascript className="text-yellow-400 text-6xl" />,
      title: "JavaScript",
      category: "Language",
    },
    {
      node: <BiLogoTypescript className="text-blue-500 text-6xl" />,
      title: "TypeScript",
      category: "Language",
    },
    {
      node: <SiNextdotjs className="text-black dark:text-white text-6xl" />,
      title: "Next.js",
      category: "Framework",
    },
    {
      node: <FaNodeJs className="text-green-600 text-6xl" />,
      title: "Node.js",
      category: "Framework",
    },
    {
      node: <FaReact className="text-cyan-500 text-6xl" />,
      title: "React",
      category: "Framework",
    },
    {
      node: <SiTailwindcss className="text-cyan-400 text-6xl" />,
      title: "Tailwind CSS",
      category: "Framework",
    },
    {
      node: <BiLogoVisualStudio className="text-blue-500 text-6xl" />,
      title: "VS Code",
      category: "Tool",
    },
    {
      node: <SiGithub className="text-black text-6xl" />,
      title: "Github",
      category: "Tool",
    },
    {
      node: <SiPostman className="text-orange-600 text-6xl" />,
      title: "Postman",
      category: "Tool",
    },
    {
      node: <SiPostgresql className="text-sky-700 text-6xl" />,
      title: "PostgreSQL",
      category: "Database",
    },
    {
      node: <SiMongodb className="text-green-500 text-6xl" />,
      title: "MongoDB",
      category: "Database",
    },
  ];

  // ----------------- Project Toolbar -----------------
  const [current, setCurrent] = React.useState(0);
  const previewConfig = (total: number) => ({
    toolbarRender: (_: any, { transform, actions }: any) => {
      const { scale } = transform;
      const { onActive, onZoomOut, onZoomIn } = actions;
      return (
        <Space
          size={20}
          className="toolbar-wrapper bg-slate-600/30 px-12 py-3 rounded-full"
        >
          <LeftOutlined
            className="text-2xl"
            disabled={current === 0}
            onClick={() => onActive?.(-1)}
          />
          <RightOutlined
            className="text-2xl"
            disabled={current === total - 1}
            onClick={() => onActive?.(1)}
          />
          <ZoomOutOutlined
            className="text-2xl"
            disabled={scale === 1}
            onClick={onZoomOut}
          />
          <ZoomInOutlined
            className="text-2xl"
            disabled={scale === 50}
            onClick={onZoomIn}
          />
        </Space>
      );
    },
    onChange: (i: number) => setCurrent(i),
  });

  return (
    <main className="space-y-32">
      {/* -------- Home -------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr_2fr] gap-10 items-center">
          {/* รูปภาพ */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <Image
              src="/images/Theptewa_img.jpg"
              alt="Theptewa"
              width={350}
              height={350}
              className="rounded-full object-cover shadow-xl shadow-sky-600/60"
              priority
              data-aos="fade-up"
              
            />
          </div>

          {/* ข้อความ */}
          <GlowBorder className="order-2 md:order-1">
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl font-bold text-slate-600 min-h-[100px]">
                <TextType
                  text={[
                    "สวัสดีครับ!\nผม เทพเทวา พุทธชาติ",
                    "Hello!\nI'm Theptewa Phuttachat",
                  ]}
                  typingSpeed={70}
                  pauseDuration={1500}
                  showCursor={false}
                  data-aos="fade-up"
                  
                />
              </h1>
              <h1
                className="text-2xl text-slate-300 mt-6"
                data-aos="fade-up"
                
              >
                อยากสมัครงานในตำแหน่ง
              </h1>
              <h2
                className="text-3xl font-semibold bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 bg-clip-text text-transparent mb-6"
                data-aos="fade-up"
                
                data-aos-delay={50}
              >
                Full Stack Developer | Software Developer
              </h2>
              <p
                className="text-[15.5px] leading-relaxed text-justify indent-8 text-slate-300"
                data-aos="fade-up"
                
                data-aos-delay={50}
              >
                ผมเป็นนักศึกษาจบใหม่ มีความชื่นชอบในการทำงานสายโปรแกรมเมอร์
                ชื่นชอบการเขียนโค้ด การคิดเชิงตรรกะ
                และการออกแบบระบบให้ทำงานได้อย่างถูกต้อง
              </p>
              <p
                className="text-[15.5px] leading-relaxed text-justify indent-8 text-slate-300"
                data-aos="fade-up"
                
                data-aos-delay={50}
              >
                มีประสบการณ์ฝึกงานด้าน Backend และกำลังศึกษาเทคโนโลยีฝั่ง
                Frontend ด้วยตัวเอง เพื่อ
                เสริมทักษะและเตรียมพร้อมสู่การทำงานในตำแหน่ง Full Stack
                Developer อย่างมีประสิทธิภาพ
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                {contacts.map((c, i) => (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-full bg-slate-800 text-white shadow-md transition-colors duration-200 ${c.color}`}
                    aria-label={c.label}
                    data-aos="fade-up"
                    
                    data-aos-delay={i * 50}
                  >
                    {/* icon จะ bounce ตอน hover */}
                    <span className="block group-hover:animate-bounce">
                      {c.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </GlowBorder>
        </div>
      </section>

      {/* -------- Education -------- */}
      <section
        id="education"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-full mx-auto">
          <h2
            className="glow-text text-8xl uppercase mb-2 text-center font-audiowide"
            data-aos="zoom-in"
            
          >
            Education
          </h2>
          <h2
            className="text-5xl font-bold text-sky-600 mb-18 text-center border-t-4 pt-4 w-[600px] mx-auto"
            data-aos="zoom-in"
            
          >
            ประวัติการศึกษา
          </h2>
          <div className="space-y-12">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                
              >
                <div className="w-40 h-40 flex-shrink-0">
                  <GlowBorder className="p-[4px] rounded-full inline-block [&>div]:rounded-full [&>div:last-child]:bg-transparent [&>div:last-child]:p-0">
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
                  <h3 className="text-xl font-bold text-sky-400">
                    {edu.place}
                  </h3>
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
      </section>

      {/* -------- Skills -------- */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-full py-8 space-y-12">
          <h2
            className="glow-text text-8xl uppercase mb-2 text-center"
            data-aos="zoom-in"
            
          >
            Skill
          </h2>
          <h2
            className="text-5xl font-bold text-sky-600 mb-18 text-center border-t-4 pt-4 w-[380px] mx-auto"
            data-aos="zoom-in"
            
          >
            ทักษะ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {skillsAndTools.map((item, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(0, 156, 228, 0.5)"
                className="fill-cyan-500 drop-shadow-md drop-shadow-sky-500 cursor-default flex items-center justify-center"
                data-aos="fade-up"
                
                data-aos-delay={i * 50}
              >
                <div className="flex flex-col items-center px-4">
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    {item.node}
                  </div>
                  <span className="text-white font-semibold mt-2">
                    {item.title}
                  </span>
                  <span className="text-sm text-sky-400">{item.category}</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Projects -------- */}
      <section id="projects" className="max-w-6xl mx-auto px-6">
        <h2
          className="glow-text text-8xl uppercase mb-2 text-center"
          data-aos="zoom-in"
          
        >
          Project
        </h2>
        <h2
          className="text-5xl font-bold text-sky-600 mb-18 text-center border-t-4 pt-4 w-[490px] mx-auto"
          data-aos="zoom-in"
          
        >
          โปรเจกต์
        </h2>
        <div className="space-y-20">
          <div>
            <h3
              className="text-2xl font-bold mb-8 text-sky-400 text-center"
              data-aos="fade-up"
              
            >
              VULNERABILITY SEARCH AND TRACKING SYSTEM
              (ระบบค้นหาและติดตามช่องโหว่)
            </h3>
            <Image
              src="/images/projects_picture/project-bg.jpg"
              alt="cover"
              width={700}
              height={500}
              className="rounded-md mb-8 border-6 border-slate-400 flex mx-auto"
              data-aos="fade-up"
              
            />
            <p
              className="mb-8 text-gray-300 text-lg indent-8 text-justify leading-relaxed"
              data-aos="fade-up"
              
            >
              โปรเจกต์ที่พัฒนาเพื่อใช้ในการค้นหาและติดตามข้อมูลช่องโหว่
              (Vulnerability) โดยทางฝั่ง Frontend ได้ใช้ Next.js และ Tailwind
              CSS ในการพัฒนา ส่วนทางฝั่ง Backend ได้ใช้ Node.js กับ Python
              ร่วมกับ FastAPI และใช้ฐานข้อมูล MongoDB ในการจัดเก็บข้อมูล
              ซึ่งภายหลังได้มีการพัฒนาระบบแจ้งเตือนทางอีเมลอัตโนมัติหาผู้ใช้
              เมื่อมีช่องโหว่ใหม่ที่มีผลกระทบกับผลิตภัณฑ์ที่ผู้ใช้ติดตามอยู่ถูกค้นพบ
            </p>
          </div>
          {/* ---------------- Project 1 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-1">
              <AntdImage.PreviewGroup preview={previewConfig(2)}>
                <div
                  className="relative w-[400px] h-[220px] cursor-pointer"
                  data-aos="fade-right"
                  
                >
                  <AntdImage
                    src="/images/projects_picture/project-1.jpg"
                    alt="project-1-main"
                    width={400}
                    className="absolute top-0 left-0 rounded-md border-6 border-slate-400 shadow-lg z-10"
                  />
                  <AntdImage
                    src="/images/projects_picture/api-1.png"
                    alt="project-1-api"
                    width={400}
                  />
                  <img
                    src="/images/projects_picture/api-1.png"
                    alt="project-1-api"
                    width={400}
                    className="absolute top-1 left-2 rounded-md border-6 border-slate-400 shadow-lg opacity-70 z-0 pointer-events-none"
                  />
                </div>
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-4 md:order-2">
              <h3
                className="text-2xl font-bold text-sky-400"
                data-aos="fade-left"
                
              >
                หน้า CVE Statistics / API
              </h3>
              <p
                className="text-lg indent-8 text-justify leading-relaxed"
                data-aos="fade-left"
                
              >
                หน้าหลักของระบบ ซึ่งจะแสดงข้อมูลสถิติของช่องโหว่
                โดยแบ่งเป็นสถิติจำนวนช่องโหว่ที่เผยแพร่ล่าสุดและแก้ไขล่าสุด
                สถิติคะแนนค่าความรุนแรง (CVSS) ของช่องโหว่
                และสถิติจำนวนช่องโหว่ในแต่ละปี
              </p>
            </div>
          </div>

          {/* ---------------- Project 2 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-2">
              <AntdImage.PreviewGroup preview={previewConfig(2)}>
                <div
                  className="relative w-[400px] h-[220px] cursor-pointer"
                  data-aos="fade-left"
                  
                >
                  <AntdImage
                    src="/images/projects_picture/project-2.jpg"
                    alt="project-2-main"
                    width={400}
                    className="absolute top-0 left-0 rounded-md border-6 border-slate-400 shadow-lg z-10"
                  />
                  <AntdImage
                    src="/images/projects_picture/api-2.png"
                    alt="project-2-api"
                    width={400}
                  />
                  <img
                    src="/images/projects_picture/api-2.png"
                    alt="project-2-api"
                    width={400}
                    className="absolute top-1 left-2 rounded-md border-6 border-slate-400 shadow-lg opacity-70 z-0 pointer-events-none"
                  />
                </div>
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-4 md:order-1">
              <h3
                className="text-2xl font-bold text-sky-400"
                data-aos="fade-right"
                
              >
                หน้า All CVEs / API
              </h3>
              <p
                className="text-lg indent-8 text-justify leading-relaxed"
                data-aos="fade-right"
                
              >
                หน้าแสดงรายการข้อมูล CVE หรือช่องโหว่ทั้งหมดที่ถูกบันทึกไว้
                โดยสามารถเลือกใช้การจัดเรียงข้อมูลช่องโหว่และกรองข้อมูลช่องโหว่ตาม
                วันที่เผยแพร่ล่าสุด, วันที่แก้ไขล่าสุด, ค่าความรุนแรง (CVSS)
                แต่ละเวอร์ชัน, ค่าความเสี่ยง (EPSS), ชื่อผู้ผลิต (Vendor),
                ชื่อผลิตภัณฑ์ (Product) ได้
              </p>
            </div>
          </div>

          {/* ---------------- Project 3 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-1">
              <AntdImage.PreviewGroup preview={previewConfig(2)}>
                <div
                  className="relative w-[400px] h-[220px] cursor-pointer"
                  data-aos="fade-right"
                  
                >
                  <AntdImage
                    src="/images/projects_picture/project-3.jpg"
                    alt="project-3-main"
                    width={400}
                    className="absolute top-0 left-0 rounded-md border-6 border-slate-400 shadow-lg z-10"
                  />
                  <AntdImage
                    src="/images/projects_picture/api-3.png"
                    alt="project-3-api"
                    width={400}
                  />
                  <img
                    src="/images/projects_picture/api-3.png"
                    alt="project-3-api"
                    width={400}
                    className="absolute top-1 left-2 rounded-md border-6 border-slate-400 shadow-lg opacity-70 z-0 pointer-events-none"
                  />
                </div>
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-4 md:order-2">
              <h3
                className="text-2xl font-bold text-sky-400"
                data-aos="fade-left"
                
              >
                หน้า Products / API
              </h3>
              <p
                className="text-lg indent-8 text-justify leading-relaxed"
                data-aos="fade-left"
                
              >
                หน้าแสดงรายการผลิตภัณฑ์ทั้งหมด
                โดยสามารถเลือกใช้การจัดเรียงข้อมูลผลิตภัณฑ์และกรองข้อมูลผลิตภัณฑ์ตาม
                ชื่อผลิตภัณฑ์ (Product Name), ประเภทของผลิตภัณฑ์ (Product Type),
                ชื่อผู้ผลิต (Vendor Name), จำนวนช่องโหว่ (Vulnerabilities) ได้
              </p>
            </div>
          </div>

          {/* ---------------- Project 4 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div
              className="flex justify-center md:order-2"
              data-aos="fade-left"
              
            >
              <AntdImage.PreviewGroup preview={previewConfig(1)}>
                <AntdImage
                  src="/images/projects_picture/project-4.jpg"
                  alt="project-4"
                  width={400}
                  className="rounded-md border-6 border-slate-400 cursor-pointer"
                />
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-4 md:order-1">
              <h3
                className="text-2xl font-bold text-sky-400"
                data-aos="fade-right"
                
              >
                หน้า Watch List
              </h3>
              <p
                className="text-lg indent-8 text-justify leading-relaxed"
                data-aos="fade-right"
                
              >
                หน้าแสดงรายการผลิตภัณฑ์ที่ผู้ใช้ติดตามการแจ้งเตือนไว้ทั้งหมด
                โดยสามารถเลือกกรองรายการผลิตภัณฑ์ได้ตาม ชื่อผู้ผลิต (Vendors),
                ชื่อผลิตภัณฑ์ (Products) ได้
                และสามารถลบรายการผลิตภัณฑ์ที่ผู้ใช้ไม่ต้องการติดตามแจ้งเตือนได้
              </p>
            </div>
          </div>

          {/* ---------------- Project 5 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div
              className="flex justify-center md:order-1"
              data-aos="fade-right"
              
            >
              <AntdImage.PreviewGroup preview={previewConfig(1)}>
                <AntdImage
                  src="/images/projects_picture/project-5.jpg"
                  alt="project-5"
                  width={400}
                  className="rounded-md border-6 border-slate-400 cursor-pointer"
                />
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-4 md:order-2">
              <h3
                className="text-2xl font-bold text-sky-400"
                data-aos="fade-left"
                
              >
                หน้าข้อมูลโดยรวมของรายการผลิตภัณฑ์
              </h3>
              <p
                className="text-lg indent-8 text-justify leading-relaxed"
                data-aos="fade-left"
                
              >
                หน้าแสดงข้อมูลโดยรวมของรายการผลิตภัณฑ์
                โดยจะแสดงจำนวนค่าความรุนแรงของช่องโหว่ทั้งหมด
                โดยแบ่งตามแต่ละเวอร์ชัน
                และแสดงจำนวนช่องโหว่ของรายการผลิตภัณฑ์ต่อปี
              </p>
            </div>
          </div>

          {/* ---------------- Project 6 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-18">
            <div
              className="flex justify-center md:order-2"
              data-aos="fade-left"
              
            >
              <AntdImage.PreviewGroup preview={previewConfig(1)}>
                <AntdImage
                  src="/images/projects_picture/project-6.jpg"
                  alt="project-6"
                  width={400}
                  className="rounded-md border-6 border-slate-400 cursor-pointer"
                />
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-4 md:order-1">
              <h3
                className="text-2xl font-bold text-sky-400"
                data-aos="fade-right"
                
              >
                ตัวอย่างการส่งแจ้งเตือนทางอีเมล
              </h3>
              <p
                className="text-lg indent-8 text-justify leading-relaxed"
                data-aos="fade-right"
                
              >
                ตัวอย่างการส่งแจ้งเตือนทางอีเมล เมื่อมีช่องโหว่ใหม่ถูกค้นพบ
                และช่องโหว่ใหม่มีผลกระทบกับรายการผลิตภัณฑ์ที่ผู้ใช้ติดตามไว้
                ระบบจะส่งแจ้งเตือนอัตโนมัติไปที่อีเมลของผู้ใช้โดยทันที
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
