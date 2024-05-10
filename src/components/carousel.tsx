'use client';

import { useCallback, useEffect, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { CAROUSEL_ITEMS } from '@/constants/carousel-items';
import CarouselItem from './carousel-item';
import { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

export const Carousel = () => {
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
