import NewsNewsContainerSection from '@/sections/news-news-container';
import PageHeader from '@/components/page-header';
import newsBackground from '@/assets/background/news.png';

export default function News() {
  return (
    <main className='flex flex-col'>
      <PageHeader title='Noticias' image={newsBackground} />
      <NewsNewsContainerSection />
    </main>
  );
}
