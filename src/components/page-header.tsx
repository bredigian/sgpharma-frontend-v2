'use client';

import Image, { StaticImageData } from 'next/image';

import circleYellow from '@/assets/utils/circle-yellow.png';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

type Props = {
  image: StaticImageData;
  title: string;
  description?: string;
};

export default function PageHeader({ image, title, description }: Props) {
  const { ref, controls } = useCustomAnimation();

  return (
    <section className='relative grid place-items-center'>
      <Image
        className='page-header__circle1 absolute hidden h-6 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
        quality={100}
      />
      <Image
        className='page-header__circle2 absolute hidden h-10 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
        quality={100}
      />

      <Image
        className='page-header__circle3 absolute hidden h-4 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
        quality={100}
      />

      <Image
        className='page-header__circle4 absolute hidden h-8 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
        quality={100}
      />
      <Image
        className='page-header__circle5 absolute hidden h-6 w-auto xl:block'
        src={circleYellow}
        alt='Componente decorativo'
        width={1000}
        height={1000}
        quality={100}
      />
      <Image
        alt={`Header de sección '${title}'`}
        width={1000}
        height={1000}
        className='h-[450px] w-full object-cover lg:h-[500px] xl:h-[640px]'
        src={image}
        quality={100}
      />
      <div className='absolute flex flex-col items-center gap-6 p-8'>
        <motion.h1
          ref={ref}
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className='text-center text-3xl font-semibold text-black md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            ref={ref}
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='max-w-[820px] text-center text-xs text-black md:text-sm lg:text-base xl:text-lg'
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
