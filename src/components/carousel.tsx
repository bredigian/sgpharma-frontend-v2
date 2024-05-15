'use client';

import { CAROUSEL_ITEMS } from '@/constants/carousel-items';
import CarouselDots from './carousel-dots';
import CarouselItem from './carousel-item';
import Image from 'next/image';
import aboutImage1 from '@/assets/images/home/about-1.png';
import aboutImage2 from '@/assets/images/home/about-2.png';
import { useCarousel } from '@/hooks/use-carousel';

export const HeaderCarousel = () => {
  const { selectedIndex, emblaRef, onDotClick } = useCarousel(true);

  return (
    <div
      className='embla relative z-10 overflow-hidden bg-gray-100 pt-36 lg:pt-44'
      ref={emblaRef}
    >
      <div className='embla__container flex items-start'>
        {CAROUSEL_ITEMS.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </div>
      <CarouselDots
        data={CAROUSEL_ITEMS}
        onDotClick={onDotClick}
        selectedIndex={selectedIndex}
        styles='-translate-y-4 md:-translate-y-5 lg:-translate-y-6 mx-auto'
      />
    </div>
  );
};

export const SecondaryCarousel = () => {
  const { emblaRef } = useCarousel();

  return (
    <>
      <div
        className='embla relative z-10 max-w-96 self-center overflow-hidden rounded-3xl md:hidden'
        ref={emblaRef}
      >
        <div className='embla__container flex items-start'>
          <Image
            alt='Imagen ilustrativa de procesos medicinales'
            className='embla__slide aspect-square shrink-0 grow-0 basis-full object-cover'
            width={1000}
            height={1000}
            quality={100}
            src={aboutImage1}
          />
          <Image
            alt='Imagen ilustrativa de procesos medicinales'
            className='embla__slide aspect-square shrink-0 grow-0 basis-full object-cover'
            width={1000}
            height={1000}
            quality={100}
            src={aboutImage2}
          />
        </div>
      </div>
      <div className='hidden w-full items-center justify-center gap-4 md:flex'>
        <Image
          alt='Imagen ilustrativa de procesos medicinales'
          className='h-64 w-fit rounded-3xl object-cover xl:h-96 2xl:h-fit'
          width={1000}
          height={1000}
          quality={100}
          src={aboutImage1}
        />
        <Image
          alt='Imagen ilustrativa de procesos medicinales'
          className='h-64 w-fit rounded-3xl object-cover xl:h-96 2xl:h-fit'
          width={1000}
          height={1000}
          quality={100}
          src={aboutImage2}
        />
      </div>
    </>
  );
};
