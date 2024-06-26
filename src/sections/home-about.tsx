'use client';

import { ABOUT_ITEMS } from '@/constants/about-items';
import Image from 'next/image';
import Link from 'next/link';
import { SecondaryCarousel } from '@/components/carousel';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

export default function HomeAboutSection() {
  const { ref, controls } = useCustomAnimation();

  return (
    <section className='flex flex-col gap-8 p-8 md:mx-auto md:max-w-[820px] xl:max-w-screen-lg xl:gap-12 2xl:max-w-screen-xl'>
      <SecondaryCarousel />
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ type: 'spring', duration: 1.5, delay: 0.65 }}
        className='flex items-start gap-4 lg:gap-8'
      >
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
            debemos a un conjunto de principios bien definidos en favor del área
            de salud a nivel regional.
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
                    quality={100}
                  />
                  <span className='text-xs text-black md:text-sm lg:text-base'>
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
