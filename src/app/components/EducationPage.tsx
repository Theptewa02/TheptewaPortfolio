import SectionWrapper from "./SectionWrapper";

export default function EducationPage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">การศึกษา</h2>
        <ul className="space-y-4">
          <li className="border-l-4 pl-4">
            <h3 className="font-semibold">2020 - 2024</h3>
            <p>ปริญญาตรี วิทยาการคอมพิวเตอร์ มหาวิทยาลัย XYZ</p>
          </li>
          <li className="border-l-4 pl-4">
            <h3 className="font-semibold">2017 - 2019</h3>
            <p>มัธยมปลาย สายวิทย์-คณิต โรงเรียน ABC</p>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
}
