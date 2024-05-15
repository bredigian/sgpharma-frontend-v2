import Image from 'next/image';
import Link from 'next/link';
import productsImage from '@/assets/images/about/products.png';

export default function AboutProductsSection() {
  return (
    <section className='flex flex-col gap-4 md:flex-row md:items-center lg:justify-between'>
      <div className='flex flex-col gap-4 p-8 md:w-1/2 md:p-16 2xl:ml-32'>
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base xl:text-lg'>
          SG PHARMA
        </span>
        <span className='max-w-[600px] text-3xl font-semibold text-black md:text-4xl lg:text-5xl 2xl:text-6xl'>
          Medicamentos de la más alta calidad
        </span>
        <p className='text-sm text-gray-200 lg:text-base xl:text-lg'>
          Con sentido y responsabilidad humana.
        </p>
        <Link
          href={'/products'}
          className='mt-8 w-fit rounded-full bg-blue-300 px-10 py-4 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 lg:text-sm xl:text-base'
        >
          Ver productos
        </Link>
      </div>
      <Image
        src={productsImage}
        className='h-full w-full max-w-[688px] md:w-1/2'
        width={1000}
        height={1000}
        quality={100}
        alt='Imágen que hace referencia a los productos'
      />
    </section>
  );
}
