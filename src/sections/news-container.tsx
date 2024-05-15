import { INews } from '@/types/news.types';
import { NewsItem } from '@/components/news-item';

type Props = {
  data: INews[];
};
export default function NewsContainer({ data }: Props) {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-6 p-8 md:p-16 xl:p-32'>
      {data.map((item) => (
        <NewsItem data={item} />
      ))}
    </div>
  );
}
