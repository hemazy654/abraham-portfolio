import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraham Gbadamosi — Abstract Artist & Graphic Designer",
  description:
    "Visual stories through simplicity, color, and imagination. Abstract art, branding, and graphic design from Lagos, Nigeria.",
  openGraph: {
    title: "Abraham Gbadamosi — Abstract Artist & Graphic Designer",
    description:
      "Visual stories through simplicity, color, and imagination. Abstract art, branding, and graphic design from Lagos, Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
