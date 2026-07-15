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
      icon: <SiFacebook className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />,
      url: "https://facebook.com/game.theptewa",
      label: "Facebook",
      color:
        "hover:bg-blue-600 hover:shadow-[0_0_20px_#2563eb] hover:shadow-blue-500/70",
    },
    {
      icon: <SiLine className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />,
      url: "https://line.me/ti/p/y1rgmFMb6n",
      label: "Line",
      color:
        "hover:bg-green-500 hover:shadow-[0_0_20px_#22c55e] hover:shadow-green-400/70",
    },
    {
      icon: <SiGmail className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />,
      url: "mailto:theptewa.phuthachat@gmail.com",
      label: "Gmail",
      color:
        "hover:bg-red-500 hover:shadow-[0_0_20px_#ef4444] hover:shadow-red-400/70",
    },
    {
      icon: <FaPhone className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4" />,
      url: "tel:+66808352670",
      label: "Telephone",
      color:
        "hover:bg-emerald-500 hover:shadow-[0_0_20px_#10b981] hover:shadow-emerald-400/70",
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
    <main className="space-y-32 overflow-x-hidden">
      {/* -------- Home -------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="lg:max-w-5xl md:max-w-4xl max-w-xl mx-auto grid md:grid-cols-[3fr_2fr] gap-6 items-center">
          {/* รูปภาพ */}
          <div className="flex justify-center lg:justify-end order-1 md:order-2">
            <div className="relative lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] w-[200px] h-[200px]">
              <Image
                src="/images/Theptewa_img.jpg"
                alt="Theptewa"
                fill
                className="rounded-full object-cover shadow-xl shadow-sky-600/60 border-4 border-sky-600"
                priority
                data-aos="fade-up"
              />
            </div>
          </div>

          {/* ข้อความ */}
          <GlowBorder className="order-2 md:order-1">
            <div className="md:text-left text-center max-w-2xl">
              <h1 className="lg:text-[30px] lg:min-h-[100px] md:text-[22px] md:min-h-[70px] text-[17px] min-h-[60px] font-bold text-slate-300 font-audiowide"
                data-aos="fade-up">
                สวัสดีครับ!<br></br>ผม เทพเทวา พุทธชาติ
              </h1>

              <h1
                className="lg:text-[16px] md:text-[14px] text-[12px] text-slate-300 mt-4 mb-2"
                data-aos="fade-up"
              >
                สนใจทำงานในตำแหน่ง
              </h1>

              <h2
                className="lg:text-[18px] md:text-[17px] text-[16px] font-semibold text-sky-400 mb-6 font-audiowide"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                <TextType 
                text={["Full Stack Developer", "Software Developer", "Frontend/Backend Developer"]}
                typingSpeed={50}
                pauseDuration={1600}
                showCursor={false}
              />
              </h2>

              <p
                className="lg:text-[16px] md:text-[14px] text-[12px] leading-relaxed md:indent-8 text-slate-300"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                ผมเป็นนักศึกษาจบใหม่ มีความชื่นชอบในการทำงานสายโปรแกรมเมอร์
                การเขียนโค้ด การคิดเชิงตรรกะ
                และการออกแบบระบบให้ทำงานได้อย่างถูกต้อง
              </p>
              <p
                className="lg:text-[16px] md:text-[14px] text-[12px] leading-relaxed md:indent-8 text-slate-300"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                มีประสบการณ์ฝึกงานด้าน Backend และกำลังศึกษาเทคโนโลยีฝั่ง
                Frontend ด้วยตัวเอง เพื่อเสริมทักษะตัวเองและเติบโตในสายงาน Developer
              </p>

              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                {contacts.map((c, i) => (
                  <a
                    key={i}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-full bg-slate-800 text-white shadow-md transition-all duration-300 ${c.color}`}
                    aria-label={c.label}
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                  >
                    {c.icon}
                  </a>
                ))}
              </div>
            </div>
          </GlowBorder>
        </div>
      </section>

      {/* -------- Education -------- */}
      <section id="education" className="flex items-center justify-center px-6">
        <div className="max-w-full mx-auto">
          {/* หัวข้อหลัก */}
          <h2
            className="en-title glow-text uppercase mb-4 border-b-4 border-sky-400 w-fit mx-auto font-audiowide"
            data-aos="zoom-in"
          >
            Education
          </h2>

          {/* หัวข้อย่อย */}
          <h2
            className="th-title font-bold text-sky-600 mb-12 text-center mx-auto"
            data-aos="zoom-in"
          >
            ประวัติการศึกษา
          </h2>

          <div className="space-y-12">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* โลโก้ */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0">
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

                {/* เนื้อหา */}
                <div className="text-center md:text-left space-y-2 px-2">
                  <span className="lg:text-[18px] md:text-[16px] text-[14px] font-bold text-sky-400">
                    {edu.year}
                  </span>
                  <h3 className="lg:text-[24px] md:text-[20px] text-[16px] font-bold text-sky-400">
                    {edu.place}
                  </h3>
                  <p className="lg:text-[20px] md:text-[16px] text-[12px] text-slate-200">
                    {edu.education} - {edu.branch}
                  </p>
                  <p>
                    <span className="lg:text-[18px] md:text-[16px] text-[14px] inline-block bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full shadow-md shadow-cyan-400/50">
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
      <section id="skills" className="flex items-center justify-center px-6">
        <div className="max-w-full mx-auto">
          {/* หัวข้อหลัก */}
          <h2
            className="en-title glow-text uppercase mb-4 border-b-4 border-sky-400 w-fit mx-auto font-audiowide"
            data-aos="zoom-in"
          >
            Skill
          </h2>

          {/* หัวข้อย่อย */}
          <h2
            className="th-title font-bold text-sky-600 mb-12 text-center mx-auto"
            data-aos="zoom-in"
          >
            ทักษะ
          </h2>

          {/* Grid แสดงสกิล */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {skillsAndTools.map((item, i) => (
              <SpotlightCard
                key={i}
                spotlightColor="rgba(0, 156, 228, 0.5)"
                className="fill-cyan-500 drop-shadow-md drop-shadow-sky-500 cursor-default flex items-center justify-center"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="flex flex-col items-center px-2">
                  {/* Icon */}
                  <div className="bg-white rounded-full p-3 flex items-center justify-center">
                    {item.node}
                  </div>

                  {/* Title */}
                  <span className="lg:text-[18px] md:text-[16px] text-[14px] text-white mt-2 font-audiowide ">
                    {item.title}
                  </span>

                  {/* Category */}
                  <span className="lg:text-[16px] md:text-[14px] text-[12px] text-sky-400 font-audiowide">
                    {item.category}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Projects -------- */}
      <section id="projects" className="max-w-6xl mx-auto px-6">
        {/* หัวข้อหลัก */}
        <h2
          className="en-title glow-text uppercase mb-4 border-b-4 border-sky-400 w-fit mx-auto font-audiowide"
          data-aos="zoom-in"
        >
          Project
        </h2>
        <h2
          className="th-title font-bold text-sky-600 mb-12 text-center mx-auto"
          data-aos="zoom-in"
        >
          โปรเจกต์
        </h2>

        <div className="space-y-20">
          {/* ---------------- Intro Project ---------------- */}
          <div>
            <h3
              className="lg:text-[28px] md:text-[22px] text-[18px] font-semibold mb-6 text-sky-400 text-center font-audiowide"
              data-aos="fade-up"
            >
              VULNERABILITY SEARCH AND TRACKING SYSTEM <br />
              (ระบบค้นหาและติดตามช่องโหว่)
            </h3>
            <Image
              src="/images/projects_picture/project-bg.jpg"
              alt="cover"
              width={700}
              height={500}
              className="rounded-md mb-8 border-4 border-slate-400 flex mx-auto"
              data-aos="fade-up"
            />
            <p
              className="lg:text-[26px] md:text-[20px] text-[16px] md:indent-10 indent-4.5 mb-8 text-gray-300 text-justify leading-relaxed mx-auto"
              data-aos="fade-up"
            >
              โปรเจกต์ที่พัฒนาเพื่อใช้ในการค้นหาและติดตามข้อมูลช่องโหว่
              (Vulnerability) โดยทางฝั่ง Frontend ได้ใช้ Next.js และ Tailwind
              CSS ในการพัฒนา ส่วนทางฝั่ง Backend ได้ใช้ Node.js กับ Python
              ร่วมกับ FastAPI และใช้ฐานข้อมูล MongoDB ในการจัดเก็บข้อมูล
              ซึ่งภายหลังได้มีการเพิ่มฟังก์ชัน
              ส่งแจ้งเตือนทางอีเมลอัตโนมัติหาผู้ใช้
              เมื่อมีช่องโหว่ใหม่ที่มีผลกระทบกับผลิตภัณฑ์ที่ผู้ใช้ติดตามอยู่ถูกค้นพบ
            </p>
          </div>

          {/* ---------------- Project 1 ---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-1">
              <AntdImage.PreviewGroup preview={previewConfig(2)}>
                <div
                  className="relative w-[360px] h-[200px] cursor-pointer"
                  data-aos="fade-right"
                >
                  <AntdImage
                    src="/images/projects_picture/project-1.jpg"
                    alt="project-1-main"
                    width={360}
                    className="absolute top-0 left-0 rounded-md border-4 border-slate-400 shadow-lg z-10"
                  />
                  <AntdImage
                    src="/images/projects_picture/api-1.png"
                    alt="project-1-api"
                    width={360}
                  />
                  <img
                    src="/images/projects_picture/api-1.png"
                    alt="project-1-api"
                    width={360}
                    className="absolute top-1 left-2 rounded-md border-4 border-slate-400 shadow-lg opacity-70 z-0 pointer-events-none"
                  />
                </div>
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-3 md:order-2">
              <h3
                className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-sky-400 font-audiowide"
                data-aos="fade-left"
              >
                หน้า CVE Statistics / API
              </h3>
              <p
                className="lg:text-[20px] md:text-[18px] text-[16px] md:indent-10 indent-4.5 text-justify leading-relaxed"
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
                  className="relative w-[360px] h-[200px] cursor-pointer"
                  data-aos="fade-left"
                >
                  <AntdImage
                    src="/images/projects_picture/project-2.jpg"
                    alt="project-2-main"
                    width={360}
                    className="absolute top-0 left-0 rounded-md border-4 border-slate-400 shadow-lg z-10"
                  />
                  <AntdImage
                    src="/images/projects_picture/api-2.png"
                    alt="project-2-api"
                    width={360}
                  />
                  <img
                    src="/images/projects_picture/api-2.png"
                    alt="project-2-api"
                    width={360}
                    className="absolute top-1 left-2 rounded-md border-4 border-slate-400 shadow-lg opacity-70 z-0 pointer-events-none"
                  />
                </div>
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-3 md:order-1">
              <h3
                className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-sky-400 font-audiowide"
                data-aos="fade-right"
              >
                หน้า All CVEs / API
              </h3>
              <p
                className="lg:text-[20px] md:text-[18px] text-[16px] md:indent-10 indent-4.5 text-justify leading-relaxed"
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
                  className="relative w-[360px] h-[200px] cursor-pointer"
                  data-aos="fade-right"
                >
                  <AntdImage
                    src="/images/projects_picture/project-3.jpg"
                    alt="project-3-main"
                    width={360}
                    className="absolute top-0 left-0 rounded-md border-4 border-slate-400 shadow-lg z-10"
                  />
                  <AntdImage
                    src="/images/projects_picture/api-3.png"
                    alt="project-3-api"
                    width={360}
                  />
                  <img
                    src="/images/projects_picture/api-3.png"
                    alt="project-3-api"
                    width={360}
                    className="absolute top-1 left-2 rounded-md border-4 border-slate-400 shadow-lg opacity-70 z-0 pointer-events-none"
                  />
                </div>
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-3 md:order-2">
              <h3
                className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-sky-400 font-audiowide"
                data-aos="fade-left"
              >
                หน้า Products / API
              </h3>
              <p
                className="lg:text-[20px] md:text-[18px] text-[16px] md:indent-10 indent-4.5 text-justify leading-relaxed"
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
                  width={360}
                  className="rounded-md border-4 border-slate-400 cursor-pointer"
                />
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-3 md:order-1">
              <h3
                className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-sky-400 font-audiowide"
                data-aos="fade-right"
              >
                หน้า Watch List
              </h3>
              <p
                className="lg:text-[20px] md:text-[18px] text-[16px] md:indent-10 indent-4.5 text-justify leading-relaxed"
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
                  width={360}
                  className="rounded-md border-4 border-slate-400 cursor-pointer"
                />
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-3 md:order-2">
              <h3
                className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-sky-400 font-audiowide"
                data-aos="fade-left"
              >
                หน้าข้อมูลโดยรวมของรายการผลิตภัณฑ์
              </h3>
              <p
                className="lg:text-[20px] md:text-[18px] text-[16px] md:indent-10 indent-4.5 text-justify leading-relaxed"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <div
              className="flex justify-center md:order-2"
              data-aos="fade-left"
            >
              <AntdImage.PreviewGroup preview={previewConfig(1)}>
                <AntdImage
                  src="/images/projects_picture/project-6.jpg"
                  alt="project-6"
                  width={360}
                  className="rounded-md border-4 border-slate-400 cursor-pointer"
                />
              </AntdImage.PreviewGroup>
            </div>
            <div className="text-gray-300 space-y-3 md:order-1">
              <h3
                className="lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-sky-400"
                data-aos="fade-right"
              >
                ตัวอย่างการส่งแจ้งเตือนทางอีเมล
              </h3>
              <p
                className="lg:text-[20px] md:text-[18px] text-[16px] md:indent-10 indent-4.5 text-justify leading-relaxed"
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
      <footer className="mt-32 border-t border-slate-700/50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 text-slate-300">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-audiowide text-sky-400">
              Theptewa Portfolio
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Personal portfolio website showcasing projects, skills and
              experience in modern web development.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sky-400 font-audiowide">
              Tech Stack
            </h4>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Next.js",
                "React",
                "TailwindCSS",
                "Ant Design",
                "shadcn/ui",
                "React Bits",
                "Node.js",
                "TypeScript",
                "AOS",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-sky-400 hover:text-sky-400 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sky-400 font-audiowide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📧 theptewa.phuthachat@gmail.com</li>
              <li>📱 080-835-2670</li>
              <li>🌐 github.com/Theptewa02</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500 space-y-2">
          <p>
            © {new Date().getFullYear()} Theptewa Phuttachat. All rights
            reserved.
          </p>

          <p className="text-slate-400">
            Designed & Developed by{" "}
            <span className="text-sky-400 font-semibold">
              Theptewa Phuttachat
            </span>{" "}
            — Assisted by{" "}
            <span className="text-emerald-400 font-semibold">ChatGPT (AI)</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
