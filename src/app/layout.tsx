import React from "react";
import "./globals.scss";
import { Golos_Text } from "next/font/google";
import Navbar from "@/components/ui/navbar/Navbar";
import Hero from "@/components/ui/hero/Hero";
const font = Golos_Text({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
