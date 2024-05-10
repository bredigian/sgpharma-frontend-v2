'use client';

import Image, { StaticImageData } from 'next/image';

import Link from 'next/link';
import circle from '@/assets/utils/circle-yellow.png';
import liston from '@/assets/utils/liston-blue.png';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
};

export default function CarouselItem({
  title,
  subtitle,
  description,
  image,
}: Props) {
  return (
    <div
      id='slider'
      className='embla__slide relative flex min-h-[495px] w-full min-w-0 shrink-0 grow basis-full flex-col items-center justify-start gap-4 px-8 pb-8 md:min-h-fit md:flex-row md:justify-center lg:gap-12'
    >
      <Image
        className='carousel-item__circle1 absolute bottom-8 left-20 hidden w-6 xl:block'
        src={circle}
        alt='Componente decorativo'
      />
      <Image
        className='carousel-item__circle2 absolute hidden w-12 xl:block'
        src={circle}
        alt='Componente decorativo'
      />
      <Image
        className='carousel-item__circle3 absolute hidden w-5 xl:block'
        src={circle}
        alt='Componente decorativo'
      />
      <Image
        className='carousel-item__circle4 absolute bottom-20 right-10 hidden w-6 xl:block 2xl:right-48'
        src={circle}
        alt='Componente decorativo'
      />
      <Image
        className='carousel-item__circle5 absolute bottom-60 right-4 hidden w-4 xl:block 2xl:bottom-80 2xl:right-20'
        src={circle}
        alt='Componente decorativo'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='absolute bottom-14 flex items-center gap-4 rounded-lg bg-white px-4 py-1 md:bottom-10 lg:bottom-20 lg:px-8 lg:py-2 xl:py-4'
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.75,
            type: 'spring',
            bounce: 0.5,
          }}
          className='text-xl font-semibold text-blue-200 lg:text-4xl xl:text-6xl'
        >
          36
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className='text-[10px] font-semibold text-black lg:text-[14px] 2xl:text-base'
        >
          Años
          <br />
          ofreciendo
          <br />
          soluciones
        </motion.span>
      </motion.div>
      <div className='flex flex-col items-center gap-4 lg:items-start lg:gap-6'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-xs font-semibold tracking-[8px] text-blue-200 lg:text-lg xl:text-xl 2xl:text-2xl'
        >
          {subtitle}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1.8,
            type: 'spring',
            bounce: 0.25,
            delay: 0.25,
          }}
          className='text-center text-3xl font-semibold !leading-none text-black lg:max-w-[600px] lg:text-start lg:text-4xl xl:text-[4.5rem]'
        >
          {title}
        </motion.span>
        <motion.p
          initial={{ opacity: 0, translateX: -150 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1.8,
            type: 'spring',
            bounce: 0.25,
            delay: 0.35,
          }}
          className='max-w-[300px] text-center text-sm text-gray-200 lg:max-w-[490px] lg:text-start lg:text-lg xl:text-xl 2xl:text-2xl'
        >
          {description}
        </motion.p>
        <motion.div
          className='lg:mt-8'
          initial={{ opacity: 0, translateX: -120 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 1.8,
            type: 'spring',
            delay: 0.45,
            bounce: '.25',
          }}
        >
          <Link
            className='rounded-full bg-blue-300 px-5 py-2 text-xs font-bold text-white hover:bg-yellow-300 hover:text-blue-300 lg:px-10 lg:py-4 lg:text-sm xl:text-lg'
            href={'/products'}
          >
            Conocer más
          </Link>
        </motion.div>
      </div>
      <div className='flex justify-end'>
        <div className='w-[250px] lg:min-w-[400px] lg:max-w-[500px] xl:min-w-[550px] 2xl:w-full 2xl:max-w-full'>
          <Image
            className='w-full'
            src={image as string}
            alt={'Imagen de demostracion de SG Pharma'}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute flex h-fit w-16 flex-col items-center gap-4 rounded-lg bg-white px-3 py-1.5 lg:w-24 lg:translate-x-2 lg:translate-y-12 lg:px-6 lg:py-3 xl:w-40 xl:px-12 xl:py-6 2xl:translate-x-24 2xl:translate-y-12'
        >
          <Image
            src={liston}
            alt='Liston azul'
            width={100}
            height={100}
            className='w-full'
          />
          <span className='text-center text-[10px] font-semibold text-black lg:text-sm xl:text-base'>
            Calidad
            <br />
            Europea
          </span>
        </motion.div>
      </div>
    </div>
  );
}
