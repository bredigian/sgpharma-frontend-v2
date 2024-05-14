'use client';

import Dropdown from '@/components/dropdown';
import Image from 'next/image';
import { TARGETS } from '@/constants/targets';
import targetImage from '@/assets/images/about/target.png';
import { useState } from 'react';

export default function AboutTargetsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className='flex w-full flex-col gap-4 p-8 md:flex-row md:justify-between md:p-16 lg:p-32 xl:justify-around'>
      <Image
        src={targetImage}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
        className='mx-auto w-full max-w-80 object-contain md:mx-0 xl:max-w-[450px]'
      />
      <div className='flex flex-col items-start gap-4 md:w-1/2'>
        <span
          style={{ letterSpacing: '5px' }}
          className='text-xs font-semibold text-blue-200 md:text-sm lg:text-base xl:text-lg'
        >
          MÁS QUE UNA FARMACÉUTICA
        </span>
        <span className='text-3xl font-semibold text-black lg:text-4xl xl:text-5xl 2xl:text-[4.5rem]'>
          Guiando el camino hacia un futuro saludable y accesible
        </span>
        <div className='flex flex-col items-center gap-4'>
          {TARGETS.map((target, index) => {
            return (
              <Dropdown
                key={target.id}
                index={index}
                active={active as number}
                handleActive={() => setActive(index === active ? null : index)}
                title={target.title}
                description={target.description}
                maxHeight={'h-[250px]'}
                isAbout
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
