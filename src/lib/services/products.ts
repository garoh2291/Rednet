"use server";

import { cache } from "react";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const getProducts = cache(async (limit?: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const products: IProduct[] = [];
  const total = 0;

  return {
    products,
    total,
  };
});
