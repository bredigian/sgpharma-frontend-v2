import AboutHistorySection from '@/sections/about-history';
import AboutProductsSection from '@/sections/about-products';
import AboutTargetsSection from '@/sections/about-targets';
import AboutValuesSection from '@/sections/about-values';
import CountersSection from '@/components/counters';
import PageHeader from '@/components/page-header';
import aboutBackground from '@/assets/background/about.png';

export default function About() {
  return (
    <main className='flex flex-col'>
      <PageHeader
        title='Sobre nosotros'
        description='SG Pharma, una compañía farmacéutica líder que lleva 36 años
        impulsando la salud y el bienestar. Nuestros sólidos valores y pasión
        nos guían en cada paso para lograr nuestra misión de tener vidas más
        sanas.'
        image={aboutBackground}
      />
      <AboutHistorySection />
      <CountersSection />
      <AboutTargetsSection />
      <div className='w-full rotate-180 overflow-hidden bg-gray-100 leading-none'>
        <svg
          className='relative block h-[100px] w-full'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z'
            className='shape-fill fill-white'
          ></path>
        </svg>
      </div>
      <AboutValuesSection />
      <AboutProductsSection />
    </main>
  );
}
