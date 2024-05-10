import { Carousel } from '@/components/carousel';

export default function Home() {
  return (
    <main className='flex w-dvw flex-col'>
      <h1 className='-z-50 hidden'>SG Pharma</h1>
      <Carousel />
    </main>
  );
}
