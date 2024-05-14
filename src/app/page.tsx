import CountersSection from '@/components/counters';
import { HeaderCarousel } from '@/components/carousel';
import HomeAboutSecondarySection from '@/sections/home-about-secondary';
import HomeAboutSection from '@/sections/home-about';
import HomeContactSection from '@/sections/home-contact';
import HomeFaqsSection from '@/sections/home-faqs';
import HomeNewsSection from '@/sections/home-news';
import HomeProductsSection from '@/sections/home-products';
import HomeSocialSection from '@/sections/home-social';
import HomeTestimonialsSection from '@/sections/home-testimonials';

export default function Home() {
  return (
    <main className='flex flex-col gap-12'>
      <h1 className='-z-50 hidden'>SG Pharma</h1>
      <HeaderCarousel />
      <HomeAboutSection />
      <CountersSection />
      <HomeAboutSecondarySection />
      <HomeProductsSection />
      <HomeFaqsSection />
      <HomeSocialSection />
      <HomeTestimonialsSection />
      <HomeNewsSection />
      <HomeContactSection />
    </main>
  );
}
