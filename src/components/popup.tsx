'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { IProduct } from '@/types/products.types';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import circleYellow from '@/assets/utils/circle-yellow.png';
import { usePopup } from '@/store/popup.store';

type Props = {
  data: IProduct;
};

export default function Popup({ data }: Props) {
  const { showPopup, hide } = usePopup();

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm'
        >
          <div className='relative z-40 h-[250px] w-[250px] rounded-full border-4 border-white p-2 md:h-[340px] md:w-[340px] lg:h-[500px] lg:w-[500px]'>
            <div className='popup relative z-30 flex h-full w-full flex-col items-center justify-center gap-8 rounded-full bg-white'>
              <span className='text-xs text-blue-300 md:text-lg lg:text-xl'>
                Te presentamos un
              </span>
              <span className='text-center text-lg font-semibold leading-tight text-blue-300 md:text-3xl lg:text-6xl'>
                Producto
                <br />
                Nuevo
              </span>
              <Link
                onClick={hide}
                href={`/products/${data?.ID}`}
                className='w-[120px] rounded-full bg-yellow-sgpharma px-4 py-2 text-center text-xs font-semibold text-blue-300 hover:bg-blue-300 hover:text-white md:w-[180px] md:text-[14px] lg:w-[270px] lg:px-10 lg:py-4 lg:text-sm xl:text-base'
              >
                Ver producto
              </Link>
            </div>
            <Image
              className='absolute z-20 hidden md:right-0 md:top-0 md:block md:w-[140px] md:translate-x-20 md:translate-y-4 lg:w-[200px] lg:translate-x-20'
              src={circleYellow}
              alt='Circulo 1'
              id='circle-1'
              width={1000}
              height={1000}
              quality={100}
            />
            <Image
              className='absolute z-20 hidden md:left-0 md:top-0 md:block md:w-[120px] md:translate-y-8 lg:translate-y-14'
              src={circleYellow}
              alt='Circulo 2'
              id='circle-2'
              width={1000}
              height={1000}
              quality={100}
            />
            <Image
              className='absolute z-20 hidden md:left-0 md:top-0 md:block md:w-[30px] md:-translate-x-4 md:translate-y-72 lg:-translate-x-8 lg:translate-y-[380px]'
              src={circleYellow}
              alt='Circulo 3'
              id='circle-3'
              width={1000}
              height={1000}
              quality={100}
            />
            <Image
              className='absolute left-0 top-0 z-20 hidden w-[30px] -translate-x-4 md:block md:translate-x-[280px] md:translate-y-[340px] lg:translate-x-[435px] lg:translate-y-[420px]'
              src={circleYellow}
              alt='Circulo 4'
              id='circle-4'
              width={1000}
              height={1000}
              quality={100}
            />
            <Image
              className='absolute z-20 w-[110px] -translate-y-20 md:right-0 md:top-24 md:w-[50px] md:translate-x-72 lg:w-[60px] lg:translate-x-[380px] lg:translate-y-0'
              src={circleYellow}
              alt='Circulo 5'
              id='circle-5'
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <Image
            src={data?.IMAGEN}
            className='absolute z-50 h-[140px] w-[140px] translate-x-24 translate-y-32 overflow-hidden rounded-full bg-product object-cover p-2 md:relative md:h-[300px] md:w-[300px] md:-translate-x-10 md:translate-y-[60px] md:p-4 lg:h-[380px] lg:w-[380px] lg:-translate-x-14 lg:p-8'
            alt={`Imágen de ${data?.NOMBRE}`}
            width={1000}
            height={1000}
            quality={100}
          />
          <button
            onClick={hide}
            className='absolute -translate-y-36 translate-x-32 md:-translate-y-48 md:translate-x-72'
          >
            <IoMdClose className='text-xl text-white lg:text-3xl' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
