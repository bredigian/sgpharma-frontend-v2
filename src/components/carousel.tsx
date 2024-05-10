'use client';

import { useCallback, useEffect, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { CAROUSEL_ITEMS } from '@/constants/carousel-items';
import CarouselItem from './carousel-item';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';
import aboutImage1 from '@/assets/images/home/about-1.png';
import aboutImage2 from '@/assets/images/home/about-2.png';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

export const HeaderCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div
      className='embla relative z-10 overflow-hidden bg-gray-100'
      ref={emblaRef}
    >
      <div className='embla__container flex items-start'>
        {CAROUSEL_ITEMS.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </div>
      <div className='embla__dots flex -translate-y-6 items-center justify-center gap-2'>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-5 rounded-full duration-300 ease-in-out',
              index === selectedIndex ? 'w-16 bg-blue-400' : 'w-5 bg-blue-200',
            )}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export const SecondaryCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

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
            src={aboutImage1}
          />
          <Image
            alt='Imagen ilustrativa de procesos medicinales'
            className='embla__slide aspect-square shrink-0 grow-0 basis-full object-cover'
            width={1000}
            height={1000}
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
          src={aboutImage1}
        />
        <Image
          alt='Imagen ilustrativa de procesos medicinales'
          className='h-64 w-fit rounded-3xl object-cover xl:h-96 2xl:h-fit'
          width={1000}
          height={1000}
          src={aboutImage2}
        />
      </div>
    </>
  );
};
