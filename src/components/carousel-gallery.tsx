import CarouselDots from './carousel-dots';
import { ISocialImage } from '@/types/social.types';
import Image from 'next/image';
import { revalidateCache } from '@/lib/utils';
import { useCarousel } from '@/hooks/use-carousel';

type Props = {
  data: ISocialImage[];
};

export default function CarouselGallery({ data }: Props) {
  const { selectedIndex, emblaRef, onDotClick } = useCarousel();

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
              alt={`Imágen de detalle ${item.ID}`}
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        ))}
      </div>
      <CarouselDots
        data={data}
        onDotClick={onDotClick}
        selectedIndex={selectedIndex}
        styles='mx-auto gap-2 mt-8 rounded-full bg-white p-4'
      />
    </div>
  );
}
