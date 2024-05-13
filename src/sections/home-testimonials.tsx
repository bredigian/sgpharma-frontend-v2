'use client';

import { useCallback, useEffect, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';
import { TESTIMONIALS_ITEMS } from '@/constants/testimonials-items';
import { cn } from '@/lib/utils';
import testimonial1 from '@/assets/images/home/testimonial-1.png';
import testimonial2 from '@/assets/images/home/testimonial-2.png';
import testimonial3 from '@/assets/images/home/testimonial-3.png';
import testimonial4 from '@/assets/images/home/testimonial-4.png';
import testimonial5 from '@/assets/images/home/testimonial-5.png';
import testimonial6 from '@/assets/images/home/testimonial-6.png';
import testimonial7 from '@/assets/images/home/testimonial-7.png';
import testimonial8 from '@/assets/images/home/testimonial-8.png';
import testimonialIcon from '@/assets/utils/testimonial-icon.png';
import useEmblaCarousel from 'embla-carousel-react';

export default function HomeTestimonialsSection() {
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
    <section className='relative flex w-full flex-col items-center gap-6 overflow-hidden bg-gray-100 p-8 md:p-16 lg:gap-12 lg:p-32'>
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.5 }}
        className='absolute left-10 w-24 translate-y-[200px]'
        src={testimonial1}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.75 }}
        className='absolute left-20 w-20 translate-y-[300px] lg:left-40'
        src={testimonial2}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 1 }}
        className='absolute bottom-96 left-16 w-16 lg:left-24'
        src={testimonial3}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 1.25 }}
        className='absolute bottom-40 left-10 w-24 lg:left-32'
        src={testimonial4}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 1.5 }}
        className='absolute right-8 w-16 translate-y-[150px] lg:right-40'
        src={testimonial5}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 1.75 }}
        className='absolute right-10 w-24 translate-y-[300px]'
        src={testimonial6}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 2 }}
        className='absolute bottom-80 right-4 w-20 lg:right-40'
        src={testimonial7}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <Image
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 2.25 }}
        className='absolute bottom-20 right-10 w-16 lg:right-10'
        src={testimonial8}
        alt='Imágen ilustrativa'
        width={1000}
        height={1000}
      />
      <div className='flex flex-col items-center gap-4'>
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
          TESTIMONIOS
        </span>
        <span className='text-center text-3xl font-semibold md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
          Palabras de nuestros clientes
        </span>
      </div>
      <Image
        className='w-10 lg:w-16 xl:w-20'
        src={testimonialIcon}
        alt='Imagen en referencia a las citas de los clientes'
        width={1000}
        height={1000}
      />
      <div
        className='embla relative z-10 flex max-w-72 cursor-grab flex-col gap-8 overflow-hidden bg-transparent active:cursor-grabbing md:max-w-96 xl:max-w-screen-sm 2xl:max-w-screen-lg'
        ref={emblaRef}
      >
        <div className='embla__container flex items-start rounded-xl'>
          {TESTIMONIALS_ITEMS.map((item) => (
            <div
              key={item.id}
              className='embla__slide mx-4 flex shrink-0 grow basis-full flex-col gap-8 rounded-2xl bg-black/10 px-8 py-8 text-center backdrop-blur-sm md:bg-transparent md:backdrop-blur-0'
            >
              <p className='text-lg font-medium italic md:text-xl xl:text-2xl 2xl:text-3xl'>
                {item.message}
              </p>
              <div className='flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4'>
                <Image
                  alt='Imágen ilustrativa'
                  width={1000}
                  height={1000}
                  src={item.avatar}
                  className='w-16 rounded-xl'
                />
                <span className='font-medium lg:text-lg'>{item.name}</span>
                <small>{item.rol}</small>
              </div>
            </div>
          ))}
        </div>
        <div className='embla__dots flex items-center justify-center gap-2'>
          {TESTIMONIALS_ITEMS.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-5 rounded-full duration-300 ease-in-out',
                index === selectedIndex
                  ? 'w-16 bg-blue-400'
                  : 'w-5 bg-blue-200',
              )}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>
      </div>
      {/* <Carousel
        style={{ width: '50%', margin: 'auto' }}
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
        renderBottomCenterControls={renderBottomCenterControls}
        pauseOnHover={false}
        // dragging={false}
        swiping={false}
      >
        {testimonials.map((item) => {
          return (
            <div
              key={item.id}
              className='flex w-full cursor-grab select-none flex-col items-center sm:gap-8 lg:gap-16'
            >
              <p className='border-gray-200 text-center font-bold italic text-black sm:max-h-[360px] sm:w-[300px] sm:overflow-auto sm:rounded-3xl sm:border-[1px] sm:p-4 sm:text-lg sm:backdrop-blur-md md:max-h-max md:border-none lg:w-full lg:rounded-none lg:p-0 lg:text-2xl lg:backdrop-blur-0'>
                {item.message}
              </p>
              <div className='flex items-center overflow-hidden border-gray-200 sm:flex-col sm:gap-4 sm:rounded-3xl sm:border-[1px] sm:p-4 sm:backdrop-blur-md md:flex-row md:border-none lg:gap-8 lg:rounded-none lg:p-0 lg:backdrop-blur-0'>
                <div className='overflow-hidden rounded-2xl'>
                  <img
                    className='w-full'
                    src={item.avatar}
                    alt='Avatar del cliente'
                  />
                </div>
                <div className='flex items-center gap-2 sm:flex-col lg:flex-row'>
                  <span className='font-bold text-black sm:text-sm md:text-base lg:text-lg'>
                    {item.name}
                  </span>
                  <span className='text-xs text-gray-200 lg:mt-[6px]'>
                    {item.rol}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel> */}
    </section>
  );
}
