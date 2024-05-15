import PageHeader from '@/components/page-header';
import aboutBackground from '@/assets/background/about.png';

export default function NotFound() {
  return (
    <main className='flex flex-col'>
      <PageHeader title='Página no encontrada' image={aboutBackground} />
    </main>
  );
}
