import Hero from "@/components/ui/hero/Hero";
import type { Metadata } from "next";

import React from "react";
import Transition from "./trasnition";
import Catalog from "@/components/ui/catalog/Catalog";
import { ProductService } from "@/services/product.service";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
};

async function getProducts() {
  const data = await ProductService.getAll();
  return data;
}
export default async function Home() {
  const data = await getProducts();
  return (
    <Transition>
      <div className="bg-white pb-6  sm:pb-8 lg:pb-12 ">
        <Hero />
        <Catalog products={data} isFull={false} />
      </div>
    </Transition>
  );
}
