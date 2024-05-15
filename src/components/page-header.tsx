import Image, { StaticImageData } from 'next/image';

import circleYellow from '@/assets/utils/circle-yellow.png';

type Props = {
  image: StaticImageData;
  title: string;
  description?: string;
};

export default function PageHeader({ image, title, description }: Props) {
  return (
    <section className='relative grid place-items-center'>
      <Image
        className='page-header__circle1 absolute hidden h-6 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
      />
      <Image
        className='page-header__circle2 absolute hidden h-10 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
      />

      <Image
        className='page-header__circle3 absolute hidden h-4 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
      />

      <Image
        className='page-header__circle4 absolute hidden h-8 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
      />
      <Image
        className='page-header__circle5 absolute hidden h-6 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
      />
      <Image
        alt={`Header de sección '${title}'`}
        width={1000}
        height={1000}
        className='h-[450px] w-full object-cover lg:h-[500px] xl:h-[640px]'
        src={image}
      />
      <div className='absolute flex flex-col items-center gap-6 p-8'>
        <h1 className='text-center text-3xl font-semibold text-black md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
          {title}
        </h1>
        {description && (
          <p className='max-w-[820px] text-center text-xs text-black md:text-sm lg:text-base xl:text-lg'>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
