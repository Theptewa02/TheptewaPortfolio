import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function HomePage() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ด้านซ้าย: ข้อความ */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">สวัสดีครับ ผมชื่อ Theptewa</h1>
          <h2 className="text-2xl text-blue-600 font-semibold">
            Full Stack Developer
          </h2>
          <p className="text-muted-foreground text-lg">
            ผมสนใจการพัฒนาเว็บไซต์ทั้งฝั่ง Frontend และ Backend  
            โดยใช้เทคโนโลยีอย่าง Next.js, React, Node.js และฐานข้อมูล SQL/NoSQL
          </p>
        </div>

        {/* ด้านขวา: รูปภาพ (วงกลม) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/Theptewa_img.jpg"
            alt="Theptewa"
            width={300}
            height={300}
            className="rounded-full shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
