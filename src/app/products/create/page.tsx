import PageTitle from "@/components/ui/PageTitle";
import { createProduct } from "../actions";

export default function CreateProductPage() {
  return (
    <div>
      <PageTitle title="Cadastrar Produto" />

      <form action={createProduct} className="gap-y-3 w-full flex flex-col">
        <div className="">
          <label htmlFor="name" className="font-medium mb-2">
            Nome
            <span className="font-bold text-red-500 ml-1">*</span>
          </label>
          <input type="text" id="name" required className="my-input" />

          <label htmlFor="price" className="font-medium mb-2">
            Preço
            <span className="font-bold text-red-500 ml-1">*</span>
          </label>
          <input type="number" id="price" required className="my-input" />
        </div>
      </form>
    </div>
  );
}
