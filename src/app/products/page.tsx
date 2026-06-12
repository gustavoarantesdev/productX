import PageTitle from "@/components/ui/PageTitle";
import { prisma } from "@/lib/prisma";
import { Ellipsis, Plus } from "lucide-react";
import Link from "next/link";

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
          <p className="pb-4 text-sm text-red-400">
            Nenhum produto cadastrado.
          </p>

          <Link
            href={"/products/create"}
            className="flex w-fit cursor-pointer items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            <Plus className="mr-1" size={20} />
            Cadastre
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PageTitle title="Produtos" />

      <div className="mx-4 w-xl overflow-x-auto rounded-lg border border-gray-300 shadow-sm">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Nome
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Preço
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Estoque
              </th>
              <th scope="col" className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="px-6 py-3 font-medium whitespace-nowrap text-black">
                  {product.name}
                </td>
                <td className="px-6 py-3">R$ {product.price.toString()}</td>
                <td className="px-6 py-3">{product.stock}</td>
                <td className="px-6 py-3">
                  <button className="cursor-pointer rounded-lg bg-gray-200 p-1 hover:bg-gray-300">
                    <Ellipsis size={20} />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4">
        <Link
          href={"/products/create"}
          className="my-trasition flex w-fit cursor-pointer items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          <Plus className="mr-1" size={20} />
          Cadastre
        </Link>
      </div>
    </div>
  );
}
