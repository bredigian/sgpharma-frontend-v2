import { ECATEGORIES } from '@/types/category.types';
import { IProduct } from '@/types/products.types';
import ProductItem from '@/components/product-item';
import { getAll } from '@/services/products.service';

export default async function ProductsProductsContainerSection({
  query,
  type,
}: {
  query?: string;
  type?: string;
}) {
  const products: IProduct[] = await getAll();

  const filteredProducts =
    query && type
      ? products
          .filter((item) => item.CATEGORIA === ECATEGORIES[type as string])
          .filter((item) => {
            if (item.NOMBRE.toLowerCase().includes(query.toLowerCase()))
              return true;
            if (item.CATEGORIA.toLowerCase().includes(query.toLowerCase()))
              return true;
          })
      : query
        ? products.filter((item) => {
            if (item.NOMBRE.toLowerCase().includes(query.toLowerCase()))
              return true;
            if (item.CATEGORIA.toLowerCase().includes(query.toLowerCase()))
              return true;
          })
        : type
          ? products.filter(
              (item) => item.CATEGORIA === ECATEGORIES[type as string],
            )
          : products;

  return (
    <div className='mx-auto flex min-h-[400px] w-fit flex-row flex-wrap justify-center gap-8 p-8 md:p-16 xl:grid xl:grid-cols-6'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
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
