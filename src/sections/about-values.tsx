import Image from 'next/image';
import { VALUES } from '@/constants/values';

export default function AboutValuesSection() {
  return (
    <section className='flex flex-col items-center gap-4 bg-gray-100 p-8 pb-44 sm:w-full xl:p-16'>
      <span className='text-center text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base xl:text-lg'>
        NUESTROS VALORES
      </span>
      <span className='max-w-screen-lg text-center text-3xl font-semibold text-black lg:text-4xl xl:text-5xl'>
        Cimientos sólidos para una empresa comprometida con la salud y el
        bienestar
      </span>
      <div className='mt-12 flex flex-wrap items-start justify-evenly gap-4 xl:gap-8'>
        {VALUES.map((item, index) => {
          // const delay = (index + 1) * 0.25;

          return (
            <div className='flex h-80 w-[136px] flex-col items-center gap-2 rounded-2xl border-2 border-yellow-sgpharma p-4 md:h-[300px] md:w-[150px] lg:w-[170px] xl:h-[360px] xl:w-[220px] xl:gap-4 xl:border-4'>
              <Image
                className='h-8 w-auto object-contain md:h-12 xl:h-20'
                src={item.image}
                alt='Imágen ilustrativa'
                width={1000}
                height={1000}
              />
              <span className='text-sm font-semibold text-black xl:text-base'>
                {item.title}
              </span>
              <p className='text-center text-[10px] text-black xl:text-sm'>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
