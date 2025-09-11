"use client";

import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

import GlowBorder from "@/components/GlowBorder";
import TextType from "@/components/TextType";

export default function HomePage() {
  return (
    <SectionWrapper>
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
          </div>
        </GlowBorder>

        {/* ด้านขวา: รูปภาพ (วงกลม) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/Theptewa_img.jpg"
            alt="Theptewa"
            width={350}
            height={350}
            className="rounded-full shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
