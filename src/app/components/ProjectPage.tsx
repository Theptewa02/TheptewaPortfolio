"use client";

import React from "react";
import {
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";

export default function ProjectGallery() {
  const [current, setCurrent] = React.useState(0);

  // ฟังก์ชัน PreviewGroup เดียวกันทุกที่
  // ✨ สร้าง type ขึ้นมาเอง
  interface ToolbarInfo {
    transform: { scale: number };
    actions: {
      onActive?: (delta: number) => void;
      onZoomOut?: () => void;
      onZoomIn?: () => void;
    };
  }

  const previewConfig = (total: number) => ({
    toolbarRender: (_: any, { transform, actions }: ToolbarInfo) => {
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
    <div className="max-w-6xl mx-auto px-6">
      {/* หัวข้อ */}
      <div>
        <h2 className="glow-text text-8xl uppercase mb-2 text-center">
          Project
        </h2>
        <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center border-t-4 pt-4 w-[490px] mx-auto">
          โปรเจกต์
        </h2>
      </div>

      <div className="space-y-20">
        {/* ---------------- Project 1 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ภาพ */}
          <div className="flex justify-center md:order-2">
            <Image.PreviewGroup preview={previewConfig(2)}>
              <div className="relative w-[400px] h-[220px] cursor-pointer">
                {/* project (โชว์และกดได้) */}
                <Image
                  src="/images/projects_picture/project-1.jpg"
                  alt="project-1-main"
                  width={400}
                  className="absolute top-0 left-0 border-6 border-white shadow-lg z-10"
                />
                {/* api (กดได้ใน preview แต่ไม่เกะกะในหน้า) */}
                <Image
                  src="/images/projects_picture/api-1.png"
                  alt="project-1-api"
                  width={400}
                />
                {/* api สำหรับโชว์เป็น background (ไม่กดได้) */}
                <img
                  src="/images/projects_picture/api-1.png"
                  alt="project-1-api"
                  width={400}
                  className="absolute top-9 left-3 border-6 border-white shadow-lg opacity-70 z-0 pointer-events-none"
                />
              </div>
            </Image.PreviewGroup>
          </div>

          {/* รายละเอียด */}
          <div className="text-gray-300 space-y-4 md:order-2">
            <h3 className="text-2xl font-bold text-sky-400">โปรเจกต์ 1</h3>
            <p className="leading-relaxed">
              เว็บไซต์ Portfolio ที่สร้างด้วย Next.js + TailwindCSS
            </p>
          </div>
        </div>

        {/* ---------------- Project 2 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* รายละเอียด */}
          <div className="text-gray-300 space-y-4 md:order-1">
            <h3 className="text-2xl font-bold text-sky-400">โปรเจกต์ 2</h3>
            <p className="leading-relaxed">
              แอปจัดการงาน (Task Management App)
            </p>
          </div>
          {/* ภาพ */}
          <div className="flex justify-center md:order-2">
            <Image.PreviewGroup preview={previewConfig(2)}>
              <div className="relative w-[400px] h-[220px] cursor-pointer">
                {/* project (โชว์และกดได้) */}
                <Image
                  src="/images/projects_picture/project-2.jpg"
                  alt="project-2-main"
                  width={400}
                  className="absolute top-0 left-0 border-6 border-white shadow-lg z-10"
                />
                {/* api (กดได้ใน preview แต่ไม่เกะกะในหน้า) */}
                <Image
                  src="/images/projects_picture/api-2.png"
                  alt="project-2-api"
                  width={400}
                />
                {/* api สำหรับโชว์เป็น background (ไม่กดได้) */}
                <img
                  src="/images/projects_picture/api-2.png"
                  alt="project-2-api"
                  width={400}
                  className="absolute top-9 left-3 border-6 border-white shadow-lg opacity-70 z-0 pointer-events-none"
                />
              </div>
            </Image.PreviewGroup>
          </div>
        </div>

        {/* ---------------- Project 3 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ภาพ */}
          <div className="flex justify-center md:order-2">
            <Image.PreviewGroup preview={previewConfig(2)}>
              <div className="relative w-[400px] h-[220px] cursor-pointer">
                {/* project (โชว์และกดได้) */}
                <Image
                  src="/images/projects_picture/project-3.jpg"
                  alt="project-3-main"
                  width={400}
                  className="absolute top-0 left-0 border-6 border-white shadow-lg z-10"
                />
                {/* api (กดได้ใน preview แต่ไม่เกะกะในหน้า) */}
                <Image
                  src="/images/projects_picture/api-3.png"
                  alt="project-3-api"
                  width={400}
                />
                {/* api สำหรับโชว์เป็น background (ไม่กดได้) */}
                <img
                  src="/images/projects_picture/api-3.png"
                  alt="project-3-api"
                  width={400}
                  className="absolute top-9 left-3 border-6 border-white shadow-lg opacity-70 z-0 pointer-events-none"
                />
              </div>
            </Image.PreviewGroup>
          </div>
          {/* รายละเอียด */}
          <div className="text-gray-300 space-y-4 md:order-2">
            <h3 className="text-2xl font-bold text-sky-400">โปรเจกต์ 3</h3>
            <p className="leading-relaxed">
              เว็บบล็อกส่วนตัว พร้อมระบบ Markdown
            </p>
          </div>
        </div>

        {/* ---------------- Project 4 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* รายละเอียด */}
          <div className="text-gray-300 space-y-4 md:order-1">
            <h3 className="text-2xl font-bold text-sky-400">โปรเจกต์ 4</h3>
            <p className="leading-relaxed">ระบบแชทเรียลไทม์ด้วย Socket.io</p>
          </div>
          {/* ภาพ */}
          <div className="flex justify-center md:order-2">
            <Image.PreviewGroup preview={previewConfig(1)}>
              <Image
                src="/images/projects_picture/project-4.jpg"
                alt="project-4"
                width={400}
                className="border-6 border-white cursor-pointer"
              />
            </Image.PreviewGroup>
          </div>
        </div>

        {/* ---------------- Project 5 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ภาพ */}
          <div className="flex justify-center md:order-1">
            <Image.PreviewGroup preview={previewConfig(1)}>
              <Image
                src="/images/projects_picture/project-5.jpg"
                alt="project-5"
                width={400}
                className="border-6 border-white cursor-pointer"
              />
            </Image.PreviewGroup>
          </div>
          {/* รายละเอียด */}
          <div className="text-gray-300 space-y-4 md:order-2">
            <h3 className="text-2xl font-bold text-sky-400">โปรเจกต์ 5</h3>
            <p className="leading-relaxed">แดชบอร์ดสำหรับวิเคราะห์ข้อมูล</p>
          </div>
        </div>

        {/* ---------------- Project 6 ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* รายละเอียด */}
          <div className="text-gray-300 space-y-4 md:order-1">
            <h3 className="text-2xl font-bold text-sky-400">โปรเจกต์ 6</h3>
            <p className="leading-relaxed">แอปทดลองใช้ MongoDB + NextAuth</p>
          </div>
          {/* ภาพ */}
          <div className="flex justify-center md:order-2">
            <Image.PreviewGroup preview={previewConfig(1)}>
              <Image
                src="/images/projects_picture/project-6.jpg"
                alt="project-6"
                width={400}
                className="border-6 border-white cursor-pointer"
              />
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
// --------------------------------------------------------------------------

// "use client";

// import React, { useState } from "react";
// import { createPortal } from "react-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Image as AntdImage } from "antd";
// import Image from "next/image";

// interface Section {
//   id: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// const project = {
//   title:
//     "VULNERABILITY SEARCH AND TRACKING SYSTEM (ระบบค้นหาและติดตามช่องโหว่)",
//   description:
//     "Frontend: Next.js, React, Tailwind CSS | Backend: Node.js, Python (FastAPI) | Database: MongoDB | Email Notification System",
//   cover: "/images/projects_picture/project-bg.jpg",
//   sections: [
//     {
//       id: 1,
//       title: "หน้า CVE Statistics / API",
//       description:
//         "หน้าหลักของระบบ ซึ่งจะแสดงข้อมูลสถิติของช่องโหว่ โดยแบ่งเป็นสถิติจำนวนช่องโหว่ที่เผยแพร่ล่าสุดและแก้ไขล่าสุด สถิติคะแนนค่าความรุนแรง (CVSS) ของช่องโหว่ และสถิติจำนวนช่องโหว่ในแต่ละปี",
//       images: [
//         "/images/projects_picture/project-1.jpg",
//         "/images/projects_picture/api-1.png",
//       ],
//     },
//     {
//       id: 2,
//       title: "หน้า All CVEs / API",
//       description:
//         "หน้าแสดงรายการข้อมูล CVE หรือช่องโหว่ทั้งหมดที่ถูกบันทึกไว้ โดยสามารถเลือกใช้การจัดเรียงข้อมูลช่องโหว่และกรองข้อมูลช่องโหว่ตาม วันที่เผยแพร่ล่าสุด, วันที่แก้ไขล่าสุด, ค่าความรุนแรง (CVSS) แต่ละเวอร์ชัน, ค่าความเสี่ยง (EPSS), ชื่อผู้ผลิต (Vendor), ชื่อผลิตภัณฑ์ (Product) ได้",
//       images: [
//         "/images/projects_picture/project-2.jpg",
//         "/images/projects_picture/api-2.png",
//       ],
//     },
//     {
//       id: 3,
//       title: "หน้า Products / API",
//       description:
//         "หน้าแสดงรายการผลิตภัณฑ์ทั้งหมด โดยสามารถเลือกใช้การจัดเรียงข้อมูลผลิตภัณฑ์และกรองข้อมูลผลิตภัณฑ์ตาม ชื่อผลิตภัณฑ์ (Product Name), ประเภทของผลิตภัณฑ์ (Product Type), ชื่อผู้ผลิต (Vendor Name), จำนวนช่องโหว่ (Vulnerabilities) ได้",
//       images: [
//         "/images/projects_picture/project-3.jpg",
//         "/images/projects_picture/api-3.png",
//       ],
//     },
//     {
//       id: 4,
//       title: "หน้า Watch List",
//       description:
//         "หน้าแสดงรายการผลิตภัณฑ์ที่ผู้ใช้ติดตามการแจ้งเตือนไว้ทั้งหมด โดยสามารถเลือกกรองรายการผลิตภัณฑ์ได้ตาม ชื่อผู้ผลิต (Vendors), ชื่อผลิตภัณฑ์ (Products) ได้ และสามารถลบรายการผลิตภัณฑ์ที่ผู้ใช้ไม่ต้องการติดตามแจ้งเตือนได้",
//       images: ["/images/projects_picture/project-4.jpg"],
//     },
//     {
//       id: 5,
//       title: "หน้าข้อมูลโดยรวมของรายการผลิตภัณฑ์",
//       description:
//         "หน้าแสดงข้อมูลโดยรวมของรายการผลิตภัณฑ์ โดยจะแสดงจำนวนค่าความรุนแรงของช่องโหว่ทั้งหมด โดยแบ่งตามแต่ละเวอร์ชัน และแสดงจำนวนช่องโหว่ของรายการผลิตภัณฑ์ต่อปี",
//       images: ["/images/projects_picture/project-5.jpg"],
//     },
//     {
//       id: 6,
//       title: "ตัวอย่างการส่งแจ้งเตือนทางอีเมล",
//       description:
//         "ตัวอย่างการส่งแจ้งเตือนทางอีเมล เมื่อมีช่องโหว่ใหม่ถูกค้นพบ และช่องโหว่ใหม่มีผลกระทบกับรายการผลิตภัณฑ์ที่ผู้ใช้ติดตามไว้ ระบบจะส่งแจ้งเตือนอัตโนมัติไปที่อีเมลของผู้ใช้โดยทันที",
//       images: ["/images/projects_picture/project-6.jpg"],
//     },
//   ] as Section[],
// };

// import { FiChevronDown } from "react-icons/fi";

// function CustomModal({
//   open,
//   onClose,
//   children,
// }: {
//   open: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }) {
//   const [mounted, setMounted] = React.useState(false);
//   const [showArrow, setShowArrow] = React.useState(false);

//   const contentRef = React.useRef<HTMLDivElement>(null);

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   React.useEffect(() => {
//     if (!open) return;

//     const el = contentRef.current;
//     if (!el) return;

//     const handleScroll = () => {
//       const { scrollTop, clientHeight, scrollHeight } = el;
//       if (scrollTop + clientHeight < scrollHeight - 5) {
//         setShowArrow(true);
//       } else {
//         setShowArrow(false);
//       }
//     };

//     handleScroll(); // run once
//     el.addEventListener("scroll", handleScroll);
//     return () => el.removeEventListener("scroll", handleScroll);
//   }, [open]);

//   if (!mounted) return null;

//   return createPortal(
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           key="backdrop"
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           {/* พื้นหลัง */}
//           <div
//             className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//             onClick={onClose}
//           />

//           {/* กล่อง Modal */}
//           <motion.div
//             ref={contentRef}
//             key="modal"
//             className="relative z-10 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[90vh] 
//               overflow-y-auto rounded-2xl bg-white/20 backdrop-blur-lg 
//               border border-white/20 shadow-2xl p-10 hide-scrollbar"
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 30 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//           >
//             {children}

//             {/* ลูกศร + background */}
//             <AnimatePresence>
//               {showArrow && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="sticky bottom-0 left-0 w-full flex justify-center"
//                 >
//                   <div className="w-full flex justify-center bg-gradient-to-t from-black/20 to-transparent py-2">
//                     <motion.div
//                       animate={{ y: [0, 8, 0] }}
//                       transition={{
//                         duration: 1.2,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="text-white/80"
//                     >
//                       <FiChevronDown size={28} />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* <AnimatePresence>
//               {showArrow && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute bottom-0 left-0 right-0 w-full"
//                 >
//                   <div className="w-full flex justify-center bg-gradient-to-t from-black/30 to-transparent py-2 rounded-b-2xl">
//                     <motion.div
//                       animate={{ y: [0, 8, 0] }}
//                       transition={{
//                         duration: 1.2,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="text-white/80"
//                     >
//                       <FiChevronDown size={28} />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence> */}

//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     document.body
//   );
// }

// export default function ProjectSection() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="max-w-6xl mx-auto px-6">
//       {/* หัวข้อ */}
//       <div>
//         <h2 className="glow-text text-8xl uppercase mb-2 text-center">
//           Project
//         </h2>
//         <h2 className="text-5xl font-bold text-sky-600 mb-12 text-center border-t-4 pt-4 w-[490px] mx-auto">
//           โปรเจกต์
//         </h2>
//       </div>

//       {/* การ์ดโปรเจกต์ */}
//       <div
//         onClick={() => setOpen(true)}
//         className="cursor-pointer border-4 border-gray-500 rounded-2xl p-6 bg-neutral-900 hover:bg-gray-700 transition max-w-xl mx-auto"
//       >
//         <img
//           src={project.cover}
//           alt={project.title}
//           className="w-full rounded-xl mb-4"
//         />
//         <h3 className="text-xl font-bold text-sky-400 mb-2">{project.title}</h3>
//         <p className="text-gray-300">{project.description}</p>
//       </div>

//       {/* Modal */}
//       <CustomModal open={open} onClose={() => setOpen(false)}>
//         <div className="space-y-10">
//           <div>
//             <h3 className="text-3xl font-bold mb-2 text-sky-400">
//               {project.title}
//             </h3>
//             <Image
//               src="/images/projects_picture/project-bg.jpg"
//               alt="cover"
//               width={800}
//               height={400}
//               className="rounded-md border border-slate-400"
//             />
//             <p className="mt-4 mb-4 text-gray-300 text-[16px] indent-6 text-justify">
//               โปรเจกต์ที่พัฒนาเพื่อใช้ในการค้นหาและติดตามข้อมูลช่องโหว่
//               (Vulnerability) โดยทางฝั่ง Frontend ได้ใช้ Next.js และ Tailwind
//               CSS ในการพัฒนา ส่วนทางฝั่ง Backend ได้ใช้ Node.js กับ Python
//               ร่วมกับ FastAPI และใช้ฐานข้อมูล MongoDB ในการจัดเก็บข้อมูล
//               ซึ่งภายหลังได้มาการพัฒนาระบบแจ้งเตือนทางอีเมลอัตโนมัติหาผู้ใช้
//               เมื่อมีช่องโหว่ใหม่ที่มีผลกระทบกับผลิตภัณฑ์ที่ผู้ใช้ติดตามอยู่ถูกค้นพบ
//             </p>
//           </div>

//           {project.sections.map((section) => (
//             <div key={section.id}>
//               <h3 className="text-2xl font-bold text-sky-400 mb-2">
//                 {section.title}
//               </h3>
//               <div>
//                 <AntdImage.PreviewGroup>
//                   {section.images.map((src, i) => (
//                     <AntdImage
//                       key={i}
//                       src={src}
//                       alt={`${section.title}-${i}`}
//                       className="rounded-md border border-slate-400"
//                     />
//                   ))}
//                 </AntdImage.PreviewGroup>
//               </div>
//               <p className="mt-4 mb-4 text-gray-300 text-[16px] indent-6 text-justify">
//                 {section.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </CustomModal>
//     </div>
//   );
// }
