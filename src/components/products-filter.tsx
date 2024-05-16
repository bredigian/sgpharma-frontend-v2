'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Category } from '@/types/category.types';
import { PAGES } from '@/constants/pages';
import { cn } from '@/lib/utils';
import { useDebouncedCallback } from 'use-debounce';

export default function ProductsFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace, refresh } = useRouter();

  const onChangeValue = useDebouncedCallback((value: string) => {
    const parsedValue = value.trim();
    const params = new URLSearchParams(searchParams);
    if (parsedValue) params.set('filter', parsedValue.toLocaleLowerCase());
    else params.delete('filter');

    replace(`${pathname}?${params.toString()}`);
  }, 400);

  const onChangeType = (value: Category | 'all') => {
    const params = new URLSearchParams(searchParams);
    if (value !== 'all') params.set('type', value.toLocaleLowerCase());
    else params.delete('type');

    replace(`${pathname}?${params.toString()}`);
    refresh();
  };

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
        <button
          key={'all'}
          onClick={() => onChangeType('all')}
          className={cn(
            'text-sm text-blue-400 duration-200 ease-in-out md:text-base lg:text-lg',
            !searchParams.get('type') ? 'font-semibold' : 'font-normal',
          )}
        >
          Todos
        </button>
        {PAGES.filter((item) => item.id === 'products_id')[0]?.subsections?.map(
          (subitem) => (
            <button
              key={subitem.id}
              onClick={() => onChangeType(subitem?.value as Category)}
              className={cn(
                'text-sm text-blue-400 duration-200 ease-in-out md:text-base lg:text-lg',
                searchParams.get('type') === subitem.value
                  ? 'font-semibold'
                  : 'font-normal',
              )}
            >
              {subitem.name}
            </button>
          ),
        )}
      </ul>
    </div>
  );
}
