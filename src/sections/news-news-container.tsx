import { INews } from '@/types/news.types';
import Image from 'next/image';
import NewsContainer from './news-container';
import { getAll } from '@/services/news.service';

export default async function NewsNewsContainerSection() {
  const news: INews[] | Error = await getAll();

  return (
    <section className='flex w-full flex-col items-center'>
      {news instanceof Error ? (
        <span className='p-8 text-center text-base font-medium text-blue-400 md:p-16 lg:text-lg xl:p-32 xl:text-xl'>
          {news.message}
        </span>
      ) : (
        <NewsContainer data={news} />
      )}
    </section>
  );
}
