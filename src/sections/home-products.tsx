import { IFavoriteProduct } from '@/types/products.types';
import Link from 'next/link';
import ProductItem from '@/components/product-item';
import { getFavorites } from '@/services/products.service';

export default async function HomeProductsSection() {
  const favorites = (await getFavorites()) as IFavoriteProduct[] | Error;

  return (
    <section className='3xl:w-[75%] mb-52 flex w-full flex-col items-center gap-24 p-8 lg:p-16'>
      <div className='flex w-full flex-col items-center gap-4'>
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
          PRODUCTOS
        </span>
        <span className='max-w-[1000px] text-center text-3xl font-semibold md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
          Productos y servicios de primera calidad
        </span>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-24'>
        {favorites instanceof Error ? (
          <span className='text-center font-semibold text-blue-400 md:text-lg xl:text-xl'>
            {favorites.message}
          </span>
        ) : (
          (favorites as IFavoriteProduct[]).map((item) => (
            <ProductItem data={item.producto} isFavorite />
          ))
        )}
      </div>
      <Link
        href={'/products'}
        className='mt-8 rounded-full bg-blue-300 px-10 py-4 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm xl:text-base'
      >
        Más productos
      </Link>
    </section>
  );
}
