'use client';

import { CAROUSEL_ITEMS } from '@/constants/carousel-items';
import CarouselItem from './carousel-item';
import useEmblaCarousel from 'embla-carousel-react';

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();

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
    </div>
  );
};
