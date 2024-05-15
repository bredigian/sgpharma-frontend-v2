import { INews } from '@/types/news.types';
import Image from 'next/image';
import { getAll } from '@/services/news.service';

export default async function NewsNewsContainerSection() {
  const news: INews[] | Error = await getAll();

  return (
    <section className='flex w-full flex-wrap items-center justify-center gap-6 p-8 md:p-16 xl:p-32'>
      {news instanceof Error ? (
        <span className='text-center text-base font-medium text-blue-400 lg:text-lg xl:text-xl'>
          {news.message}
        </span>
      ) : (
        (news as INews[]).map((item) => (
          <div className='flex h-40 w-[300px] flex-row items-center overflow-hidden rounded-2xl shadow-2xl md:h-[340px] md:w-[260px] md:flex-col xl:h-[400px] xl:w-[320px]'>
            <div className='h-full w-[230px] cursor-pointer md:h-[60%] md:w-full'>
              <Image
                className='h-full w-full object-cover'
                src={item.IMAGEN_PRINCIPAL}
                alt={`Imagen de ${item.TITULO}`}
                width={1000}
                height={1000}
              />
            </div>
            <div className='flex w-full flex-col items-start gap-2 p-4 md:p-8'>
              <span className='text-[10px] font-medium text-blue-400 md:text-xs lg:text-sm'>
                {item.CATEGORIA}
              </span>
              <span className='text-xs font-semibold text-black md:text-sm lg:text-base'>
                {item.TITULO}
              </span>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
