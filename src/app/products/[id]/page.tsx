import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { BsArrowLeft } from 'react-icons/bs';
import ButtonShowInstructions from '@/components/button-show-instructions';
import { ECATEGORIES } from '@/types/category.types';
import { IProduct } from '@/types/products.types';
import ImageZoom from '@/components/image-zoom';
import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { getById } from '@/services/products.service';

type Props = {
  params: {
    id?: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detail = await getById({ id: params.id as string });

  return {
    title: `${(detail as IProduct).NOMBRE} | SG Pharma`,
    description: (detail as IProduct).DESCRIPCION,
    keywords: [
      `SG Pharma, SG Medicinas, Producto, Productos, Medicina, Medicamentos, ${(detail as IProduct).NOMBRE}`,
    ],
    icons: '../../favicon.ico',
  };
}

export default async function ProductDetail({ params }: Props) {
  const detail = (await getById({ id: params.id as string })) as
    | IProduct
    | Error;

  if (detail instanceof Error)
    return (
      <main className='flex h-96 w-full flex-col items-center justify-center gap-6 p-8 md:h-[500px] xl:h-[640px]'>
        <span className='text-center font-semibold text-blue-400 md:text-lg xl:text-xl'>
          {detail.message}
        </span>
        <Link
          href={'/products'}
          className='flex items-center gap-2 hover:underline'
        >
          <ArrowLeftIcon width={16} />
          Ir a Productos
        </Link>
      </main>
    );

  return (
    <main className='3xl:min-h-screen flex w-full flex-col items-center gap-12 p-8 md:flex-row md:items-start xl:mx-auto xl:gap-32 xl:p-16 2xl:min-h-[120vh] 2xl:w-[72%]'>
      <>
        <div className='flex w-full flex-col items-start gap-8'>
          <Link
            href={'/products'}
            className='flex items-center gap-4 text-xs text-blue-200 duration-200 ease-in-out hover:font-semibold md:text-sm xl:text-base'
          >
            <BsArrowLeft />
            <span>Volver a Productos</span>
          </Link>
          <ImageZoom id={detail.ID} image={detail.IMAGEN} />
        </div>
        <div className='flex flex-col items-start gap-4 xl:gap-8'>
          <h2 className='text-xs font-semibold uppercase tracking-[5px] text-blue-200 md:text-sm lg:text-base xl:text-lg'>
            {detail?.CATEGORIA}
          </h2>
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${
              detail?.CATEGORIA !== ECATEGORIES.ophthalmological
                ? detail?.CATEGORIA !== ECATEGORIES.gynecological
                  ? 'font-revue'
                  : 'font-qkMarisa'
                : 'font-sans font-semibold'
            }`}
          >
            {detail?.NOMBRE}
          </h1>
          <div className='flex flex-col items-start gap-2 xl:gap-4'>
            {detail?.DESCRIPCION?.split('\n').map((paragraph, index) => (
              <p
                key={index}
                className={cn(
                  'text-justify text-xs text-black lg:text-sm xl:text-base',
                  paragraph === `Indicaciones:\r`
                    ? 'font-semibold'
                    : 'font-normal',
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-xs font-bold text-black lg:text-sm xl:text-base'>
              Dosis sugerida:
            </p>
            {detail?.DOSIS_SUGERIDA?.split('\n').map((paragraph, index) => {
              return (
                <p
                  key={index}
                  className='text-justify text-xs text-black lg:text-sm xl:text-base'
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
          {detail?.ID !== 'SGPHARMAPRODINMUNOX' && (
            <ButtonShowInstructions
              name={detail.NOMBRE}
              file={detail.INSERTO}
            />
          )}
        </div>
      </>
    </main>
  );
}
