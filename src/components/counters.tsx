'use client';

import { COUNTERS } from '@/constants/counters';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

export default function CountersSection() {
  return (
    <aside className='flex w-full flex-col gap-4 bg-yellow-sgpharma p-8 md:flex-row md:flex-wrap md:gap-0 md:gap-y-8 lg:h-[448px] lg:items-center lg:gap-0 lg:p-16 xl:p-24'>
      {COUNTERS.map((item) => (
        <div
          key={item.id}
          className='flex h-fit items-center justify-between gap-2 md:w-1/2 md:justify-start md:gap-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40'
        >
          <span className='text-3xl font-semibold text-white md:text-[40px] lg:text-6xl 2xl:text-7xl'>
            +
          </span>
          <CountUp
            className={cn(
              'grow text-3xl font-semibold text-white md:grow-0 md:text-4xl lg:text-6xl 2xl:text-7xl',
              item.id === 'counter-2'
                ? 'xl:min-w-56'
                : item.id === 'counter-4'
                  ? 'xl:min-w-36'
                  : 'xl:min-w-24',
            )}
            end={item.number}
            duration={3}
          />
          <span className='font-semibold text-white md:text-lg lg:text-xl 2xl:text-2xl'>
            {item.text}
          </span>
        </div>
      ))}
    </aside>
  );
}
