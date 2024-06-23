import Hero from "@/components/ui/hero/Hero";
import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
};
export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12 ">
      <Hero />
    </div>
  );
}
