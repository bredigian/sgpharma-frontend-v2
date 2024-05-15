'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import { INews } from '@/types/news.types';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './modal';
import { useState } from 'react';

type Props = {
  data: INews;
  handleActive?: () => void;
};

const NewsItemDetail = ({ data, handleActive }: Props) => {
  return (
    <div className='m-auto flex h-screen w-screen flex-col-reverse bg-white md:m-0 md:h-full md:max-w-screen-sm md:flex-row lg:max-w-screen-md xl:max-w-screen-lg'>
      <div className='information flex h-full w-full flex-col items-start gap-4 px-8 py-4 md:w-[60%] md:px-16 md:py-8'>
        <button
          onClick={handleActive}
          className='text-dark flex w-full items-center justify-start gap-2'
        >
          <ChevronLeftIcon className='text-yellow' width={16} />
          <p className='text-xs lg:text-sm'>Regresar</p>
        </button>
        <span className='text-sm font-semibold lg:text-xl xl:text-3xl'>
          {data?.TITULO}
        </span>
        <p className='max-h-[300px] max-w-full overflow-auto text-justify text-xs lg:text-sm'>
          {data?.DESCRIPCION}
        </p>
        <div className='flex items-center gap-2'>
          <p className='max-h-[500px] max-w-full overflow-auto text-xs lg:text-sm'>
            Visita:
          </p>
          <a
            className='max-h-[500px] max-w-full overflow-auto text-xs text-blue-100 underline lg:text-sm'
            href={data?.URL}
            target='_blank'
          >
            {data?.URL}
          </a>
        </div>
      </div>
      <div className='h-[250px] w-full object-cover md:h-full md:w-[40%]'>
        <Image
          className='h-full w-full object-cover object-center'
          src={data?.IMAGEN_DETALLE}
          alt={`Imagen de posteo ${data?.TITULO}`}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
    </div>
  );
};

export const NewsItem = ({ data }: Props) => {
  const [active, setActive] = useState(false);

  const handleActive = () => setActive(!active);

  return (
    <div
      className='flex h-40 w-[300px] flex-row items-center overflow-hidden rounded-2xl shadow-2xl md:h-[340px] md:w-[260px] md:flex-col xl:h-[400px] xl:w-[320px]'
      onClick={handleActive}
    >
      <Image
        className='h-full w-1/2 cursor-pointer object-cover md:h-[60%] md:w-full'
        src={data.IMAGEN_PRINCIPAL}
        alt={`Imagen de ${data.TITULO}`}
        width={1000}
        height={1000}
        quality={100}
      />
      <div className='flex w-full flex-col items-start gap-2 p-4 md:p-8'>
        <span className='text-[10px] font-medium text-blue-400 md:text-xs lg:text-sm'>
          {data.CATEGORIA}
        </span>
        <span className='text-xs font-semibold text-black md:text-sm lg:text-base'>
          {data.TITULO}
        </span>
      </div>
      <Modal show={active} handleModal={() => setActive(false)}>
        <NewsItemDetail data={data} handleActive={handleActive} />
      </Modal>
    </div>
  );
};

export const HomeNewsItem = ({ data }: Props) => {
  return (
    <div
      key={data.ID}
      className='flex max-w-[400px] flex-col items-center gap-8 md:items-start lg:items-center xl:max-w-[600px] xl:flex-row 2xl:max-w-[800px]'
    >
      <div className='w-[200px] lg:w-[300px] xl:w-[800px]'>
        <Image
          src={data.IMAGEN_PRINCIPAL}
          className='w-full'
          alt='Imagen que hace referencia a la noticia'
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className='flex flex-col items-center gap-2 md:items-start lg:items-start'>
        <span className='text-xs font-medium text-blue-100 md:text-sm lg:text-base'>
          {data.CATEGORIA}
        </span>
        <span className='text-center text-sm font-semibold text-black md:text-start md:text-base lg:text-lg xl:text-xl'>
          {data.TITULO}
        </span>
        <p className='text-justify text-sm text-gray-200 md:text-base lg:text-lg'>
          {data.DESCRIPCION.substring(0, 140).concat('...')}
        </p>
        <button
          type='button'
          className='hover:text-yellow flex items-center gap-2 text-black'
        >
          <ChevronRightIcon color='#ffcd00' className='w-4 lg:w-5' />
          <Link href={'/news'}>
            <small className='text-sm lg:text-base'>Leer más</small>
          </Link>
        </button>
      </div>
    </div>
  );
};

export const FooterNewsItem = ({ data }: Props) => {
  return (
    <Link href={'/news'} className='flex max-w-[350px] items-start gap-4'>
      <Image
        className='h-[75px] w-[75px] object-cover'
        src={data.IMAGEN_PRINCIPAL}
        alt={data.TITULO}
        width={1000}
        height={1000}
        quality={100}
      />
      <div className='flex flex-col items-start gap-2'>
        <span className='text-[10px] text-white md:text-xs lg:text-sm'>
          {data.CATEGORIA}
        </span>
        <p className='text-xs text-white md:text-sm lg:text-base'>
          {data.DESCRIPCION.substring(0, 40).concat('...')}
        </p>
      </div>
    </Link>
  );
};
