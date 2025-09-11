// "use client";

// import SectionWrapper from "./SectionWrapper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import GlowBorder from "@/components/GlowBorder";

// const projectImages = [
//   "/images/projects_picture/project-1.jpg",
//   "/images/projects_picture/project-2.jpg",
//   "/images/projects_picture/project-3.jpg",
//   "/images/projects_picture/project-4.jpg",
//   "/images/projects_picture/project-5.jpg",
//   "/images/projects_picture/project-6.jpg",
// ];

// export default function ProjectPage() {
//   return (
//     <SectionWrapper>
//       <div className="max-w-6xl w-full">
//         <h2 className="text-4xl font-extrabold text-center mb-12">
//           โปรเจกต์ | Project
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* ซ้าย = สไลด์ภาพ */}
//           <div className="w-full">
//             <Swiper
//               modules={[Navigation, Pagination]}
//               spaceBetween={20}
//               slidesPerView={1}
//               navigation
//               pagination={{ clickable: true }}
//               className="shadow-lg"
//             >
//               {projectImages.map((img, i) => (
//                 <SwiperSlide key={i}>
//                   <img
//                     src={img}
//                     alt={`project-${i + 1}`}
//                     className="w-full max-h-[400px] object-contain"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//           {/* ขวา = คำอธิบายโปรเจกต์รวม */}
//           <GlowBorder
//             colors={["#155dfc", "#00bcff", "#00d3f2", "#00bcff", "#155dfc"]}
//           >
//             <div className="text-left space-y-6">
//               <h3 className="text-2xl font-bold">โปรเจกต์รวม</h3>
//               <p className="text-gray-300 leading-relaxed">
//                 โปรเจกต์ที่ผมเคยทำมีทั้งเว็บไซต์พอร์ตโฟลิโอ แอปจัดการงาน
//                 เว็บบล็อก แอปแชท และระบบแดชบอร์ด โดยเน้นการใช้เทคโนโลยีอย่าง
//                 Next.js, React, TailwindCSS, Firebase, Socket.io และ MongoDB
//                 เพื่อพัฒนาทั้งฝั่ง Frontend และ Backend
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 จุดประสงค์หลักคือเพื่อฝึกทักษะ Full-stack Development
//                 และสร้างผลงานที่ใช้งานได้จริง รวมถึงเรียนรู้การทำงานร่วมกับ API
//                 และฐานข้อมูล ตลอดจนการออกแบบ UI/UX ให้ตอบโจทย์ผู้ใช้
//               </p>
//             </div>
//           </GlowBorder>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }

"use client";

import React from "react";
import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";

const projectImages = [
  {
    src: "/images/projects_picture/project-1.jpg",
    desc: "เว็บไซต์ Portfolio ที่สร้างด้วย Next.js + TailwindCSS",
  },
  {
    src: "/images/projects_picture/project-2.jpg",
    desc: "แอปจัดการงาน (Task Management App)",
  },
  {
    src: "/images/projects_picture/project-3.jpg",
    desc: "เว็บบล็อกส่วนตัว พร้อมระบบ Markdown",
  },
  {
    src: "/images/projects_picture/project-4.jpg",
    desc: "ระบบแชทเรียลไทม์ด้วย Socket.io",
  },
  {
    src: "/images/projects_picture/project-5.jpg",
    desc: "แดชบอร์ดสำหรับวิเคราะห์ข้อมูล",
  },
  {
    src: "/images/projects_picture/project-6.jpg",
    desc: "แอปทดลองใช้ MongoDB + NextAuth",
  },
];

export default function ProjectGallery() {
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="max-w-7xl mx-auto">
      <div>
          <h2 className="glow-text text-8xl uppercase mb-2 text-center">
            Project
          </h2>
          <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center border-t-4 pt-4 w-[490px] mx-auto">
            โปรเจกต์
          </h2>
        </div>

      <Image.PreviewGroup
        preview={{
          toolbarRender: (
            _,
            { transform: { scale }, actions: { onActive, onZoomOut, onZoomIn } }
          ) => (
            <Space
              size={20}
              className="toolbar-wrapper bg-slate-600/30 px-16 py-4 rounded-full"
            >
              <LeftOutlined className="text-lg"  disabled={current === 0} onClick={() => onActive?.(-1)} />
              <RightOutlined className="text-lg" disabled={current === projectImages.length - 1} onClick={() => onActive?.(1)} />
              <ZoomOutOutlined className="text-lg" disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined className="text-lg" disabled={scale === 50} onClick={onZoomIn} />
            </Space>
          ),
          onChange: (index) => {
            setCurrent(index);
          },
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Image
                src={item.src}
                alt={`project-${i + 1}`}
                width={400}
                className="rounded-xl fill-cyan-500 drop-shadow-md drop-shadow-sky-500"
              />
              <p className="mt-3 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
}
