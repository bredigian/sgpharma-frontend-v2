'use client';

import { cn, revalidateCache } from '@/lib/utils';

import { IProduct } from '@/types/products.types';
import Image from 'next/image';
import Link from 'next/link';
import favoriteLabel from '@/assets/utils/gold-label.png';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';
import { useState } from 'react';

type Props = {
  data: IProduct;
  index?: number;
  isFavorite?: boolean;
};

export default function ProductItem({ data, index, isFavorite }: Props) {
  const { ref, controls } = useCustomAnimation();

  const isPar = !isFavorite ? (index as number) % 2 === 0 : undefined;

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={`relative xl:col-span-2 ${
        index === 3
          ? 'xl:row-span-3'
          : isPar
            ? 'xl:row-span-3'
            : 'xl:row-span-4'
      }`}
    >
      {isFavorite && (
        <Image
          className='absolute right-0 top-0 z-40 w-20 -translate-y-8 translate-x-8 drop-shadow-xl lg:w-24'
          src={favoriteLabel}
          alt='Etiqueta de destacado'
          width={1000}
          height={1000}
          quality={100}
        />
      )}
      <div className='relative flex h-full w-[220px] flex-col items-start overflow-hidden rounded-2xl md:w-[250px] lg:w-[280px]'>
        <div className='absolute z-0 h-full w-full bg-[#f0f5f9] px-2'></div>
        <Image
          src={data.IMAGEN}
          alt={`Imágen de ${data.NOMBRE}`}
          width={1000}
          height={1000}
          quality={100}
          className={cn(
            'my-auto w-full duration-200 ease-in-out',
            hovered ? 'scale-105' : 'scale-100',
          )}
          onError={() => revalidateCache()}
        />
        <Link
          href={`products/${data.ID}`}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          className='absolute z-10 flex h-full w-full cursor-pointer flex-col items-start justify-end bg-transparent p-8 opacity-0 duration-300 ease-in-out hover:bg-blue-200-transparent hover:opacity-100'
        >
          <span className='text-xs font-semibold tracking-[2px] text-white md:text-sm lg:text-base'>
            {data.CATEGORIA}
          </span>
          <span className='text-base font-semibold text-white md:text-lg lg:text-xl'>
            {data.NOMBRE}
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
