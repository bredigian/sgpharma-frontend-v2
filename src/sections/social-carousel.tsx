'use client';

import { ISocial, ISocialImage } from '@/types/social.types';

import CarouselDots from '@/components/carousel-dots';
import CarouselGallery from '@/components/carousel-gallery';
import Image from 'next/image';
import Modal from '@/components/modal';
import { useCarousel } from '@/hooks/use-carousel';
import { useState } from 'react';

type Props = {
  data: ISocial[];
};

export default function SocialCarouselSection({ data }: Props) {
  const [active, setActive] = useState(false);
  const [gallery, setGallery] = useState<ISocialImage[]>([]);

  const { selectedIndex, emblaRef, onDotClick } = useCarousel();

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
      <CarouselDots
        data={data}
        onDotClick={onDotClick}
        selectedIndex={selectedIndex}
      />
      <Modal show={active} handleModal={() => setActive(false)}>
        <CarouselGallery data={gallery as ISocialImage[]} />
      </Modal>
    </>
  );
}
