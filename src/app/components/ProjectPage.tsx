"use client";

import SectionWrapper from "./SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GlowBorder from "../../components/GlowBorder";

const projectImages = [
  "/images/projects_picture/project-1.jpg",
  "/images/projects_picture/project-2.jpg",
  "/images/projects_picture/project-3.jpg",
  "/images/projects_picture/project-4.jpg",
  "/images/projects_picture/project-5.jpg",
  "/images/projects_picture/project-6.jpg",
];

export default function ProjectPage() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          โปรเจกต์ | Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ซ้าย = สไลด์ภาพ */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="shadow-lg"
            >
              {projectImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`project-${i + 1}`}
                    className="w-full max-h-[400px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ขวา = คำอธิบายโปรเจกต์รวม */}
          <GlowBorder
            colors={["#155dfc", "#00bcff", "#00d3f2", "#00bcff", "#155dfc"]}
          >
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-bold">โปรเจกต์รวม</h3>
              <p className="text-gray-300 leading-relaxed">
                โปรเจกต์ที่ผมเคยทำมีทั้งเว็บไซต์พอร์ตโฟลิโอ แอปจัดการงาน
                เว็บบล็อก แอปแชท และระบบแดชบอร์ด โดยเน้นการใช้เทคโนโลยีอย่าง
                Next.js, React, TailwindCSS, Firebase, Socket.io และ MongoDB
                เพื่อพัฒนาทั้งฝั่ง Frontend และ Backend
              </p>
              <p className="text-gray-300 leading-relaxed">
                จุดประสงค์หลักคือเพื่อฝึกทักษะ Full-stack Development
                และสร้างผลงานที่ใช้งานได้จริง รวมถึงเรียนรู้การทำงานร่วมกับ API
                และฐานข้อมูล ตลอดจนการออกแบบ UI/UX ให้ตอบโจทย์ผู้ใช้
              </p>
            </div>
          </GlowBorder>
        </div>
      </div>
    </SectionWrapper>
  );
}
