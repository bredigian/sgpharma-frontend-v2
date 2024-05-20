'use client';

import { CheckIcon, PlayIcon } from '@heroicons/react/24/outline';
import { FAQS_ITEMS, FEATURES } from '@/constants/faqs';

import Dropdown from '@/components/dropdown';
import Image from 'next/image';
import Link from 'next/link';
import faqImage from '@/assets/images/home/faqs.png';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';
import { useDropdown } from '@/hooks/use-dropdown';

export default function HomeFaqsSection() {
  const { active, handleActive } = useDropdown();
  const { ref, controls } = useCustomAnimation();

  return (
    <motion.section
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className='flex w-full flex-col items-center bg-gray-100 p-8 md:p-16 lg:p-32'
    >
      <div className='flex max-w-[1200px] -translate-y-60 flex-col items-center gap-8 rounded-2xl bg-yellow-sgpharma p-8 md:p-16 lg:flex-row lg:p-24'>
        <div className='flex flex-col items-center gap-4 lg:w-3/4 lg:items-start'>
          <span className='text-center text-xs font-semibold tracking-[5px] text-blue-300 md:text-sm lg:text-start lg:text-base'>
            DESCUBRE LA EXCELENCIA FARMACÉUTICA
          </span>
          <span className='text-center text-3xl font-semibold text-blue-300 md:text-4xl lg:text-start lg:text-5xl'>
            Medicamentos de calidad que marcan la diferencia
          </span>
          <p className='text-center text-sm text-blue-300 md:text-base lg:text-start'>
            Productos medicinales de calidad europea con una visión de ayuda y
            acceso para toda la población
          </p>
        </div>
        <Link
          href={'/products'}
          className='mt-4 rounded-full bg-blue-300 px-10 py-4 text-center text-xs font-semibold text-white hover:bg-white hover:text-blue-300 md:text-sm lg:mt-8 lg:w-[270px] lg:text-base xl:text-lg'
        >
          Ver productos
        </Link>
      </div>
      <div className='flex flex-col justify-center gap-4 md:gap-12 lg:gap-24 xl:flex-row xl:items-start 2xl:flex-row'>
        <div className='flex flex-col items-center gap-8 xl:items-start'>
          <div className='flex flex-col items-center gap-4 xl:items-start'>
            <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
              ¿TIENES PREGUNTAS?
            </span>
            <span className='w-min text-center text-3xl font-semibold md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
              ¿Podemos ayudarte?
            </span>
            <p className='text-center text-sm text-gray-200 lg:text-base'>
              Estamos a disposición para cualquier consulta
            </p>
          </div>
          <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-start'>
            <div className='relative grid place-items-center'>
              <Image
                alt='Imágen ilustrativa'
                src={faqImage}
                width={1000}
                height={1000}
                quality={100}
                className='w-[160px] md:w-[240px] lg:w-full'
              />
              <a
                type='button'
                href='#'
                className='absolute w-[40px] rounded-full bg-blue-300 p-3 text-white hover:bg-white hover:text-blue-300 md:w-[52.5px] md:p-[18px] lg:w-[65px] lg:p-6'
              >
                <PlayIcon />
              </a>
            </div>
            <ul className='flex flex-col gap-2'>
              {FEATURES.map((item) => (
                <li key={item.id} className='flex items-start gap-2'>
                  <CheckIcon width={20} color='#124196' />
                  <p className='max-w-[270px] text-sm text-gray-200 sm:text-base xl:text-lg'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className='flex flex-col items-center gap-4'>
          {FAQS_ITEMS.map((item, index) => {
            return (
              <Dropdown
                key={item.id}
                active={active as number}
                index={index}
                title={item.question}
                description={item.answer}
                maxHeight={'h-[360px] md:h-[260px] lg:h-[340px]'}
                handleActive={() => handleActive(index)}
              />
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
