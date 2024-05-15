import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { INews } from '@/types/news.types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: INews;
};

export default function HomeNewsItem({ data }: Props) {
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
}
