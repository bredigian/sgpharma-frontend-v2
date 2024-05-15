'use client';

import { ISocial, ISocialImage } from '@/types/social.types';
import { useCallback, useEffect, useState } from 'react';

import CarouselGallery from '@/components/carousel-gallery';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';
import Modal from '@/components/modal';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  data: ISocial[];
};

export default function SocialCarouselSection({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [active, setActive] = useState(false);

  const [gallery, setGallery] = useState<ISocialImage[]>([]);

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
    <>
      <div
        ref={emblaRef}
        className='embla relative z-10 mx-auto max-w-[940px] cursor-grab overflow-hidden rounded-xl border-2 border-gray-100 active:cursor-grabbing'
      >
        <div className='embla__container flex'>
          {data.map((item) => (
            <div
              key={item.ID}
              className='embla__slide mx-2 flex shrink-0 grow basis-full flex-col items-center gap-4 p-4 md:flex-row md:items-start'
              onClick={() => {
                setActive(true);
                setGallery(item.desarrollo_social_galeria);
              }}
            >
              <Image
                alt={`Imágen de ${item.ID}`}
                src={item.IMAGEN_PRINCIPAL}
                width={1000}
                height={1000}
                quality={100}
                className='w-full max-w-72 rounded-xl'
              />
              <div className='flex flex-col items-center gap-4 md:items-start'>
                <span className='text-center text-xs font-semibold text-black md:text-start md:text-sm lg:text-lg xl:text-xl'>
                  {item.TITULO}
                </span>
                <p className='text-justify text-[10px] text-gray-200 md:text-sm lg:text-base'>
                  {item.DESCRIPCION}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='embla__dots flex items-center justify-center gap-2'>
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
      <Modal show={active} handleModal={() => setActive(false)}>
        <CarouselGallery data={gallery as ISocialImage[]} />
      </Modal>
    </>
  );
}
