import { HeaderCarousel, SecondaryCarousel } from '@/components/carousel';

import { ABOUT_ITEMS } from '@/constants/about-items';
import Card from '@/components/card';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Counters } from '@/sections/counters';
import Image from 'next/image';
import Link from 'next/link';
import { TARGETS } from '@/constants/targets';

export default function Home() {
  return (
    <main className='flex flex-col gap-12'>
      <h1 className='-z-50 hidden'>SG Pharma</h1>
      <HeaderCarousel />
      <section className='flex flex-col gap-8 p-8 md:mx-auto md:max-w-[820px] xl:max-w-screen-lg xl:gap-12 2xl:max-w-screen-xl'>
        <SecondaryCarousel />
        <div className='flex items-start gap-4 lg:gap-8'>
          <div className='flex flex-col gap-4'>
            <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm'>
              HISTORIA
            </span>
            <span className='text-lg font-semibold md:text-xl lg:text-4xl xl:text-6xl 2xl:text-[4.5rem]'>
              Comprometidos con tu salud
            </span>
            <p className='max-w-[350px] text-justify text-xs text-gray-200 md:text-sm lg:text-base'>
              SG Pharma, fue fundada el 9 de noviembre de 1986, en la ciudad de
              Guatemala.
            </p>
            <Link
              href={'/about'}
              className='w-fit rounded-full bg-blue-300 px-5 py-2 text-center text-xs font-bold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm lg:mt-8 lg:px-10 lg:py-4 xl:text-base'
            >
              Descubre más
            </Link>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='max-w-[560px] text-justify text-xs text-gray-200 md:text-sm lg:max-w-max lg:text-base'>
              Somos una compañía farmacéutica con presencia en el mercado
              guatemalteco y salvadoreño. Esta es una posición de privilegio que
              debemos a un conjunto de principios bien definidos en favor del
              área de salud a nivel regional.
            </p>
            <div className='flex w-full flex-wrap items-start justify-between gap-4 md:gap-8 lg:justify-start lg:gap-10 2xl:justify-center 2xl:gap-12'>
              {ABOUT_ITEMS.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='flex h-20 flex-col items-center justify-between gap-4 md:h-[100px]'
                  >
                    <Image
                      className='w-12 md:w-16'
                      src={item.image}
                      alt={item.title}
                      width={1000}
                      height={1000}
                    />
                    <span className='text-xs text-black md:text-sm lg:text-base'>
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Counters />
      <section className='flex w-full flex-col items-center gap-4 bg-gray-100 p-8 lg:p-24'>
        <div
          // ref={ref}
          // initial="hidden"
          // animate={controls}
          // variants={{
          //   visible: { opacity: 1 },
          //   hidden: { opacity: 0 },
          // }}
          // transition={{ duration: 0.5, delay: 0.25 }}
          className='flex flex-col items-center gap-4 p-8 lg:p-16 xl:gap-6'
        >
          <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
            SOBRE NOSOTROS
          </span>
          <span className='text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:max-w-[1200px] xl:text-[4.5rem]'>
            Impulsando una visión de salud para todos
          </span>
          <p className='max-w-[600px] text-center text-xs text-gray-200 md:text-sm lg:text-base'>
            SG Pharma y su estandarte principal siendo, la calidad de sus
            productos, permite mantener procesos ágiles frente al dinamismo del
            mercado, ofreciendo productos innovadores y vanguardistas.
          </p>
        </div>
        <div
          // ref={ref2}
          // initial='hidden'
          // animate={controls2}
          // variants={{
          //   visible: { opacity: 1 },
          //   hidden: { opacity: 0 },
          // }}
          // transition={{ duration: 0.5, delay: 0.25 }}
          className='flex flex-wrap items-center justify-center gap-6 p-8 lg:p-16'
        >
          {TARGETS.map((target) => {
            return (
              <Card key={target.id} styles={{ maxWidth: '540px' }}>
                <div className='flex flex-col items-start gap-4 p-8'>
                  <div className='flex items-center gap-8'>
                    <Image
                      className='w-10 sm:w-[50px] md:w-[60px]'
                      src={target.icon as string}
                      alt='Imagen de tarjeta'
                      width={100}
                      height={100}
                    />
                    <span className='w-min text-sm font-semibold lg:text-base'>
                      {target.title}
                    </span>
                  </div>
                  <p className='text-justify text-xs text-gray-200 md:text-sm lg:text-base'>
                    {target.description}
                  </p>
                  <Link
                    href={'/about'}
                    className='mt-6 flex items-center gap-2 font-medium duration-300 ease-in-out hover:translate-x-4 md:mt-10'
                  >
                    <ChevronRightIcon
                      className='w-4 md:w-[18px] lg:w-5'
                      color='#ffcd00'
                    />
                    Conoce más
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
      <section
        // ref={ref}
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.25 }}
        className='3xl:w-[75%] mb-52 flex w-full flex-col items-center gap-24 p-8 lg:p-16'
      >
        <div className='flex w-full flex-col items-center gap-4'>
          <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
            PRODUCTOS
          </span>
          <span className='max-w-[1000px] text-center text-3xl font-semibold md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
            Productos y servicios de primera calidad
          </span>
        </div>
        {/* <div className='flex flex-wrap items-center justify-center gap-24'>
          {errorProducts ? (
            <div className='grid w-full place-items-center sm:h-[280px] lg:h-[420px]'>
              <h3 className='text-center text-black sm:text-sm lg:text-lg xl:text-xl'>
                {errorProducts}
              </h3>
            </div>
          ) : loading ? (
            <div className='grid w-full place-items-center sm:h-[280px] lg:h-[420px]'>
              <Ring size={60} color='#031432' />
            </div>
          ) : (
            productsFavorites?.map((product, index) => {
              return (
                <ProductItem
                  key={product.ID}
                  handleHover={handleHover}
                  index={index}
                  outHover={() => setProductHovered(null)}
                  product={product}
                  productHovered={productHovered}
                  styles={'sm:h-[280px] lg:h-[420px]'}
                  isFavorite
                />
              );
            })
          )}
        </div> */}
        <Link
          href={'/products'}
          className='mt-8 rounded-full bg-blue-300 px-10 py-4 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm xl:text-base'
        >
          Más productos
        </Link>
      </section>
    </main>
  );
}
