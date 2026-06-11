"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const name = String(formData.get("name"));
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const description = String(formData.get("description"));

  await prisma.product.create({
    data: {
      name,
      price,
      stock,
      description,
    },
  });

  revalidatePath("/products");
}
