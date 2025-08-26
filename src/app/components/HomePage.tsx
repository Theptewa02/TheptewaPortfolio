import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function HomePage() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ด้านซ้าย: ข้อความ */}
        <div className="space-y-4 text-center md:text-left max-w-xl">
          <h1 className="text-4xl font-bold">สวัสดีครับ</h1>
          <h1 className="text-4xl font-bold">ผม เทพเทวา พุทธชาติ</h1>
          <h1 className="text-2xl text-gray-600">อยากสมัครงานในตำแหน่ง</h1>
          <h2 className="text-2xl font-semibold text-blue-600">
            Full Stack Developer | Software Developer
          </h2>
          <p className="text-muted-foreground text-[16px] leading-relaxed text-justify indent-6">
            ผมเป็นนักศึกษาจบใหม่ มีความชื่นชอบในการทำงานสายโปรแกรมเมอร์ ชื่นชอบการ
            เขียนโค้ด การคิดเชิงตรรกะ และการออกแบบระบบให้ทำงานได้อย่างถูกต้อง
          </p>
          <p className="text-muted-foreground text-[16px] leading-relaxed text-justify indent-6">
            มีประสบการณ์ฝึกงานด้าน Backend และกำลังศึกษาเทคโนโลยีฝั่ง Frontend
            ด้วยตัวเอง เพื่อเสริมทักษะและเตรียมพร้อมสู่การทำงานในตำแหน่ง Full
            Stack Developer อย่างเต็มศักยภาพ
          </p>
        </div>

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
