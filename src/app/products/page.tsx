import PageTitle from "@/components/ui/PageTitle";
import { prisma } from "@/lib/prisma";
import { Plus } from "lucide-react";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  if (products.length === 0) {
    return (
      <div>
        <PageTitle title="Produtos" />
        <div className="p-4 pt-0">
          <p className="text-red-400 pb-4 text-sm">
            Nenhum produto cadastrado.
          </p>
          <button className="flex items-center py-2 px-4 bg-blue-500 rounded-lg text-white cursor-pointer hover:bg-blue-600">
            <Plus className="mr-1" size={20} />
            Cadastre
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PageTitle title="Produtos" />
    </div>
  );
}
