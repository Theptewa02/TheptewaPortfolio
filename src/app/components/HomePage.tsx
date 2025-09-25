"use client";

import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

import GlowBorder from "@/components/GlowBorder";
import TextType from "@/components/TextType";

import { SiFacebook, SiLine, SiGmail,  } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

export default function HomePage() {
  const contacts = [
    {
      icon: <SiFacebook className="w-6 h-6" />,
      url: "https://facebook.com/game.theptewa",
      label: "Facebook",
      color: "hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/50",
    },
    {
      icon: <SiLine className="w-6 h-6" />,
      url: "https://line.me/ti/p/~yourlineid",
      label: "Line",
      color: "hover:bg-green-500 hover:shadow-xl hover:shadow-green-500/50",
    },
    {
      icon: <SiGmail className="w-6 h-6" />,
      url: "https://mail.google.com/mail/?view=cm&to=theptewa.phuthachat@gmail.com",
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

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr_2fr] gap-10 items-center">
        {/* ด้านซ้าย: ข้อความ */}
        <GlowBorder>
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl font-bold text-slate-600 min-h-[100px]">
              <TextType 
                text={["สวัสดีครับ!\nผม เทพเทวา พุทธชาติ", "Hello!\nI'm Theptewa Phuttachat"]}
                typingSpeed={70}
                pauseDuration={1500}
                showCursor={false}
              />
            </h1>
            <h1 className="text-2xl text-slate-300 mt-6">อยากสมัครงานในตำแหน่ง</h1>
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Full Stack Developer | Software Developer
            </h2>
            <p className="text-[15.5px] leading-relaxed text-justify indent-8 text-slate-300">
              ผมเป็นนักศึกษาจบใหม่ มีความชื่นชอบในการทำงานสายโปรแกรมเมอร์ ชื่นชอบการเขียนโค้ด
              การคิดเชิงตรรกะ และการออกแบบระบบให้ทำงานได้อย่างถูกต้อง
            </p>
            <p className="text-[15.5px] leading-relaxed text-justify indent-8 text-slate-300">
              มีประสบการณ์ฝึกงานด้าน Backend และกำลังศึกษาเทคโนโลยีฝั่ง Frontend ด้วยตัวเอง เพื่อ
              เสริมทักษะและเตรียมพร้อมสู่การทำงานในตำแหน่ง Full Stack Developer อย่างมีประสิทธิภาพ
            </p>

            {/* Contact Zone */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-slate-800 text-white shadow-md transition-colors duration-200 ${c.color}`}
                  aria-label={c.label}
                >
                  {c.icon}
                </a>
              ))}
            </div>
          </div>
        </GlowBorder>

        {/* ด้านขวา: รูปภาพ (วงกลม) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/Theptewa_img.jpg"
            alt="Theptewa"
            width={350}
            height={350}
            className="rounded-full object-cover shadow-xl shadow-sky-600/60"
            priority
          />
        </div>
      </div>
    </div>
  );
}
