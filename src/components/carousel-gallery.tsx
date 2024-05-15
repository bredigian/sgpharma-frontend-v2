import { useCallback, useEffect, useState } from 'react';

import { EmblaCarouselType } from 'embla-carousel';
import { ISocialImage } from '@/types/social.types';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  data: ISocialImage[];
};

export default function CarouselGallery({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
      ref={emblaRef}
      className='embla relative z-10 mx-auto max-w-72 cursor-grab gap-8 overflow-hidden active:cursor-grabbing md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg'
    >
      <div className='embla__container flex'>
        {data.map((item) => (
          <div
            className='embla__slide flex h-[340px] w-[340px] shrink-0 grow basis-full select-none md:h-[480px] md:w-[480px] lg:h-[700px] lg:w-[700px]'
            key={item.ID}
          >
            <Image
              className='h-full w-full select-none object-contain'
              src={item.URL}
              alt={`Imágen de detalle ${null}`}
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        ))}
      </div>
      <div className='embla__dots mx-auto mt-8 flex w-fit items-center justify-center gap-2 rounded-full bg-white p-4'>
        {data.map((_, index) => (
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
}
