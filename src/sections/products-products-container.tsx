import { Category, ECATEGORIES } from '@/types/category.types';

import { IProduct } from '@/types/products.types';
import ProductItem from '@/components/product-item';
import { getAll } from '@/services/products.service';

export default async function ProductsProductsContainerSection({
  query,
  type,
}: {
  query?: string;
  type?: Category | undefined;
}) {
  const products: IProduct[] | Error = await getAll();

  const filteredProducts =
    products instanceof Error
      ? products
      : products.filter((item) => {
          const matchesType = type
            ? item.CATEGORIA === ECATEGORIES[type]
            : true;
          const matchesQuery = query
            ? item.NOMBRE.toLowerCase().includes(query.toLowerCase()) ||
              item.CATEGORIA.toLowerCase().includes(query.toLowerCase())
            : true;

          return matchesType && matchesQuery;
        });

  return (
    <div className='mx-auto flex min-h-[400px] w-fit flex-row flex-wrap justify-center gap-8 p-8 md:p-16 xl:grid xl:grid-cols-6'>
      {products instanceof Error ? (
        <span className='col-span-full text-base font-medium text-blue-400 lg:text-lg xl:text-xl'>
          {products.message}
        </span>
      ) : (filteredProducts as IProduct[]).length > 0 ? (
        (filteredProducts as IProduct[]).map((item, index) => (
          <ProductItem data={item} index={index} />
        ))
      ) : (
        <span className='col-span-full text-base font-medium text-blue-400 lg:text-lg xl:text-xl'>
          No se encontraron productos.
        </span>
      )}
    </div>
  );
}
