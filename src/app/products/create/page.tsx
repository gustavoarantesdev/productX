import PageTitle from "@/components/ui/PageTitle";
import { createProduct } from "./actions";
import Link from "next/link";

export default function CreateProductPage() {
  return (
    <div>
      <PageTitle title="Cadastrar Produto" />

      <form action={createProduct} className="flex w-full flex-col px-4">
        <label htmlFor="name" className="mb-2 block font-medium">
          Nome
          <span className="ml-1 font-bold text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="my-input mb-2 w-lg"
          autoFocus
          autoComplete="off"
        />

        <div className="mb-2 flex w-lg gap-x-4">
          <div className="w-full">
            <label htmlFor="price" className="mb-2 block font-medium">
              Preço
              <span className="ml-1 font-bold text-red-500">*</span>
            </label>
            <input
              type="string"
              name="price"
              id="price"
              required
              className="my-input"
              min={0}
              autoComplete="off"
            />
          </div>

          <div className="">
            <label htmlFor="stock" className="mb-2 block font-medium">
              Estoque
              <span className="ml-1 font-bold text-red-500">*</span>
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              required
              className="my-input"
              min={0}
            />
          </div>
        </div>

        <label htmlFor="description" className="mb-2 block font-medium">
          Descrição
        </label>
        <textarea
          name="description"
          id="description"
          className="my-input mb-4 w-lg"
        ></textarea>

        <div className="flex w-lg justify-end gap-x-4">
          <Link
            href={"/products"}
            className="my-transition flex w-fit cursor-pointer items-center rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-600 hover:bg-gray-300"
          >
            Retornar
          </Link>
          <button
            type="submit"
            className="my-transition cursor-pointer items-center rounded-lg bg-green-600 px-4 py-2 text-center text-white hover:bg-green-700"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
