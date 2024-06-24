import { IProduct } from "@/types/product.interface";
import axios from "axios";

const url = "https://products-nest-api.onrender.com/products";

export const ProductService = {
  async getAll() {
    const { data } = await axios<IProduct[]>({
      url: url,
      method: "GET",
    });
    return data;
  },
};
