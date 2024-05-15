import { INews } from '@/types/news.types';
import { NewsItem } from '@/components/news-item';

type Props = {
  data: INews[];
};
export default function NewsContainer({ data }: Props) {
  return (
    <>
      {data.map((item) => (
        <NewsItem data={item} />
      ))}
    </>
  );
}
