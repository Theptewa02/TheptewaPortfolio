import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Squares from "@/components/Squares";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"], // ใส่ thai ด้วยเพื่อรองรับภาษาไทย
  variable: "--font-bai-jamjuree",
  weight: ["300", "400", "500", "600", "700"], // ใส่น้ำหนักที่ใช้จริง
});

export const metadata: Metadata = {
  title: "Portfolio | Theptewa",
  description: "Personal portfolio website built with Next.js, TailwindCSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${baiJamjuree.variable} font-sans antialiased`}>
        {/* <div className="fixed inset-0 -z-10">
          <Squares
            speed={0.3}
            squareSize={100}
            direction="down"
            borderColor="#1447e6"
            hoverFillColor="#193cb8"
          />
        </div> */}
        {children}
      </body>
    </html>
  );
}
