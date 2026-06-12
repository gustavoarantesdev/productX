"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const name = String(formData.get("name"));
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const description = String(formData.get("description"));

  const existingProduct = await prisma.product.findUnique({
    where: { name },
  });

  if (existingProduct) {
    throw new Error("Já existe um produto com esse nome");
  }

  await prisma.product.create({
    data: {
      name,
      price,
      stock,
      description,
    },
  });

  revalidatePath("/products/create");
  redirect("/products");
}
