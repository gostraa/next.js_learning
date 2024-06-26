import ProductItem from "@/components/ui/catalog/product-item/ProductItem";
import ProductInfo from "@/components/ui/productInfo/ProductInfo";

import { ProductService } from "@/services/product.service";
import { IProduct } from "@/types/product.interface";

import React from "react";

async function getProducts() {
  const data = await ProductService.getAll();
  return data;
}

export default async function ProductPage() {
  const allProducts = await getProducts();

  return <ProductInfo products={allProducts} />;
}
