import Hero from "@/components/ui/hero/Hero";
import type { Metadata } from "next";

import React from "react";

import Catalog from "@/components/ui/catalog/Catalog";
import { ProductService } from "@/services/product.service";
import Transition from "../trasnition";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
};

async function getProducts() {
  const data = await ProductService.getAll();
  return data;
}
export default async function CatalogPage() {
  const data = await getProducts();
  return (
    <Transition>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 ">
        <Catalog products={data} isFull />
      </div>
    </Transition>
  );
}
