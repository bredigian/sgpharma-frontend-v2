'use client';

import { MouseEvent, useState } from 'react';

import Image from 'next/image';
import dottedImage from '@/assets/utils/dotted.png';
import rectangleImage from '@/assets/utils/rectangle-yellow.png';

type Props = {
  id: string;
  image: string;
};

type Position = {
  x: number;
  y: number;
};

export default function ImageZoom({ id, image }: Props) {
  const [cursorPosition, setCursorPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const handleHover = (event: MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget?.getBoundingClientRect();
    const x = event.clientX - container.left;
    const y = event.clientY - container.top;
    setCursorPosition({ x, y });
  };

  return (
    <div className='image-container mx-auto h-[300px] w-full lg:w-[400px] xl:h-[600px]'>
      <Image
        className='absolute hidden w-24 lg:block lg:translate-x-16 lg:translate-y-8 xl:-translate-x-10 xl:translate-y-10'
        src={rectangleImage}
        alt='Imágen decorativa'
        width={1000}
        height={1000}
      />
      <Image
        className='absolute hidden w-48 lg:block lg:translate-x-40 lg:translate-y-40 xl:translate-x-[300px] xl:translate-y-[420px]'
        src={dottedImage}
        alt='Imágen decorativa'
        width={1000}
        height={1000}
      />
      <div className='product-img flex h-full w-full items-center justify-center'>
        <div
          onMouseMove={handleHover}
          onMouseOut={() => setCursorPosition({ x: 0, y: 0 })}
          className='bg-product relative flex h-full w-[200px] cursor-crosshair items-center overflow-hidden rounded-3xl xl:w-[400px]'
        >
          <Image
            className='h-full w-full object-contain xl:h-auto'
            src={image}
            alt={`Imágen del producto ${id}`}
            width={1000}
            height={1000}
          />
        </div>
        <div
          className={`image-zoom absolute hidden translate-x-[460px] overflow-hidden rounded-3xl bg-[#f0f5f9] shadow-2xl 2xl:block ${
            cursorPosition.x !== 0 && cursorPosition.y !== 0
              ? 'visible opacity-100'
              : 'invisible opacity-0'
          } h-[500px] w-[500px]`}
        >
          <Image
            className='ml-52 mt-32 h-[140%] w-[140%] object-contain'
            style={{
              transform: `translate(-${cursorPosition.x}px, -${cursorPosition.y}px) scale(2)`,
            }}
            width={1000}
            height={1000}
            src={image}
            alt={`Imágen del producto ${id}`}
          />
        </div>
      </div>
    </div>
  );
}
