import SectionWrapper from "./SectionWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <SectionWrapper>
      <div className="max-w-xl w-full text-center">
        <h2 className="text-4xl font-extrabold mb-6">ช่องทางติดต่อ | Contact</h2>
        <form className="space-y-4">
          <Input placeholder="ชื่อของคุณ" />
          <Input type="email" placeholder="อีเมล" />
          <Textarea placeholder="ข้อความ..." />
          <Button type="submit" className="w-full">ส่งข้อความ</Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
