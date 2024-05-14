'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Link from 'next/link';
import { PAGES } from '@/constants/pages';
import { cn } from '@/lib/utils';
import { useDebouncedCallback } from 'use-debounce';

export default function ProductsFilter({ type }: { type?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onChangeValue = useDebouncedCallback((value: string) => {
    const parsedValue = value.trim();
    const params = new URLSearchParams(searchParams);
    if (parsedValue) params.set('filter', parsedValue.toLocaleLowerCase());
    else params.delete('filter');

    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className='flex flex-col items-center gap-6 p-8 md:p-16'>
      <input
        type='text'
        placeholder='Filtra por nombre'
        autoComplete='off'
        onChange={(event) => onChangeValue(event.target.value)}
        defaultValue={searchParams.get('filter')?.toString()}
        className='w-full max-w-screen-sm rounded-full border-2 border-blue-400 px-4 py-2 text-sm lg:text-base xl:text-lg'
      />
      <ul className='flex w-full flex-wrap items-center justify-center gap-3 lg:gap-6'>
        <Link
          key={'all'}
          href={
            searchParams.get('filter')
              ? `/products?filter=${searchParams.get('filter')}`
              : '/products'
          }
          className={cn(
            'text-sm text-blue-400 duration-200 ease-in-out md:text-base lg:text-lg',
            !type ? 'font-semibold' : 'font-normal',
          )}
        >
          Todos
        </Link>
        {PAGES.filter((item) => item.id === 'products_id')[0]?.subsections?.map(
          (subitem) => (
            <Link
              key={subitem.id}
              href={
                searchParams.get('filter')
                  ? `${subitem.path}&filter=${searchParams.get('filter')}`
                  : subitem.path
              }
              className={cn(
                'text-sm text-blue-400 duration-200 ease-in-out md:text-base lg:text-lg',
                type === subitem.value ? 'font-semibold' : 'font-normal',
              )}
            >
              {subitem.name}
            </Link>
          ),
        )}
      </ul>
    </div>
  );
}
