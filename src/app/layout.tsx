import type { Metadata } from "next";
import { Bai_Jamjuree, Audiowide, Kode_Mono } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"], // ใส่ thai ด้วยเพื่อรองรับภาษาไทย
  variable: "--font-bai-jamjuree",
  weight: ["300", "400", "500", "600", "700"], // ใส่น้ำหนักที่ใช้จริง
});

export const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide", // สร้างเป็น CSS variable
});

export const kodeMono = Kode_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kodemono",
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
    <html lang="en">
      <body className={`${baiJamjuree.variable} ${audiowide.variable} ${kodeMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
