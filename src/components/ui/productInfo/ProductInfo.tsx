"use client";
import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { FC } from "react";

const ProductInfo: FC<{ products: IProduct[] }> = ({ products }) => {
  const params = useParams<{ slug: string }>();

  const product = products.find((product) => product.slug === params.slug);
  if (!product) {
    return <div>Продукт не найден</div>;
  }
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.price}</p>
      <div className="w-full h-80 lg:h-full lg:w-full overflow-hidden rounded-lg">
        <Image
          src={`https://products-nest-api.onrender.com${product.imageUrl}`}
          alt={product.name}
          className="object-cover object-center"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
