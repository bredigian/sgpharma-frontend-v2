import { HomeNewsItem } from '@/components/news-item';
import { INews } from '@/types/news.types';
import Link from 'next/link';
import { getAll } from '@/services/news.service';

export default async function HomeNewsSection() {
  const news: INews[] | Error = await getAll();

  return (
    <section className='flex w-full flex-col items-center justify-around gap-8 p-8 md:flex-row md:items-start md:p-16 lg:p-32 xl:items-center xl:gap-16'>
      <div
        //   ref={ref}
        //   initial='hidden'
        //   animate={controls}
        //   variants={{
        //     visible: { opacity: 1 },
        //     hidden: { opacity: 0 },
        //   }}
        //   transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col items-center gap-4 md:items-start'
      >
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
          NOTICIAS
        </span>
        <span className='w-min text-center text-3xl font-semibold md:text-start md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
          Mantente informado
        </span>
        <p className='max-w-[400px] text-justify text-sm text-gray-200 lg:text-base'>
          Últimas novedades: Mantente informado sobre las noticias y avances en
          el mundo de la salud con SG Pharma.
        </p>
        <Link
          href={'/news'}
          className='rounded-full bg-blue-300 px-6 py-3 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm lg:text-base'
        >
          Ver más
        </Link>
      </div>
      <div className='flex flex-col gap-8'>
        {news instanceof Error ? (
          <span className='text-center font-semibold text-blue-400 md:text-lg xl:text-xl'>
            {news.message}
          </span>
        ) : (
          (news as INews[]).map((item) => <HomeNewsItem data={item} />)
        )}
      </div>
    </section>
  );
}
