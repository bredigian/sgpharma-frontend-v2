'use client';

import Card from '@/components/card';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { TARGETS } from '@/constants/targets';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

export default function HomeAboutSecondarySection() {
  const { ref, controls } = useCustomAnimation();

  return (
    <section className='flex w-full flex-col items-center gap-4 bg-gray-100 p-8 lg:p-24'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col items-center gap-4 p-8 lg:p-16 xl:gap-6'
      >
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
          SOBRE NOSOTROS
        </span>
        <span className='text-center text-3xl font-semibold md:text-4xl lg:text-5xl xl:max-w-[1200px] xl:text-[4.5rem]'>
          Impulsando una visión de salud para todos
        </span>
        <p className='max-w-[600px] text-center text-xs text-gray-200 md:text-sm lg:text-base'>
          SG Pharma y su estandarte principal siendo, la calidad de sus
          productos, permite mantener procesos ágiles frente al dinamismo del
          mercado, ofreciendo productos innovadores y vanguardistas.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='flex flex-wrap items-center justify-center gap-6 p-8 lg:p-16'
      >
        {TARGETS.map((target) => {
          return (
            <Card key={target.id} styles={{ maxWidth: '540px' }}>
              <div className='flex flex-col items-start gap-4 p-8'>
                <div className='flex items-center gap-8'>
                  <Image
                    className='w-10 sm:w-[50px] md:w-[60px]'
                    src={target.icon as string}
                    alt='Imagen de tarjeta'
                    width={100}
                    height={100}
                    quality={100}
                  />
                  <span className='w-min text-sm font-semibold lg:text-base'>
                    {target.title}
                  </span>
                </div>
                <p className='text-justify text-xs text-gray-200 md:text-sm lg:text-base'>
                  {target.description}
                </p>
                <Link
                  href={'/about'}
                  className='mt-6 flex items-center gap-2 font-medium duration-300 ease-in-out hover:translate-x-4 md:mt-10'
                >
                  <ChevronRightIcon
                    className='w-4 md:w-[18px] lg:w-5'
                    color='#ffcd00'
                  />
                  Conoce más
                </Link>
              </div>
            </Card>
          );
        })}
      </motion.div>
    </section>
  );
}
