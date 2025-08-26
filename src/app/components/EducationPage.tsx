import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

export default function EducationPage() {
  const education = [
    {
      year: "2564 - 2568",
      place: "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
      education: "ปริญญาตรี",
      branch: "คณะบริหาธุรกิจ สาขาระบบสารสนเทศ",
      gpa: 3.16,
      logo: "/images/rmutk.png",
    },
    {
      year: "2561 - 2564",
      place: "วิทยาลัยพณิชยการเชตุพน",
      education: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      branch: "สาขาคอมพิวเตอร์ธุรกิจ",
      gpa: 3.37,
      logo: "/images/chetupon.png",
    },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">ประวัติการศึกษา | Education</h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* โลโก้ */}
              <div className="w-40 h-40 flex-shrink-0">
                <Image
                  src={edu.logo}
                  alt={edu.place}
                  width={200}
                  height={200}
                  className="rounded-full object-cover bg-white"
                />
              </div>

              {/* รายละเอียด */}
              <div className="text-center md:text-left space-y-2">
                <span className="text-sm font-medium text-gray-500">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold">{edu.place}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.education} - {edu.branch}
                </p>
                <p>
                  <span className="inline-block bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full">
                    เกรดเฉลี่ย {edu.gpa}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
