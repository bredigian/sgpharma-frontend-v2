import { INews } from '@/types/news.types';
import NewsContainer from './news-container';
import { getAll } from '@/services/news.service';

export default async function NewsNewsContainerSection() {
  const news = (await getAll()) as INews[] | Error;

  return (
    <section className='flex w-full flex-wrap items-center justify-center gap-6 p-8 md:p-16 xl:p-32'>
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
