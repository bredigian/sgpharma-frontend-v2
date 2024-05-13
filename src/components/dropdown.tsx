import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

type Props = {
  title: string;
  description: string;
  active: number;
  index: number;
  handleActive: () => void;
  maxHeight: string;
  isAbout?: boolean;
};

export default function Dropdown({
  title,
  description,
  active,
  index,
  handleActive,
  maxHeight,
  isAbout,
}: Props) {
  const isActive = active === index;

  return (
    <div
      //   className={`flex flex-col items-start gap-4 rounded-2xl bg-white px-10 py-4 shadow-xl duration-300 ease-in-out ${
      //     active === index
      //       ? maxHeight
      //       : `${isAbout ? 'h-[56px]' : 'h-[80px]'} md:h-[56px] lg:h-[58px]`
      //   } max-w-[450px] overflow-hidden`}
      className={cn(
        'flex max-w-[420px] flex-col items-start gap-4 overflow-hidden rounded-2xl bg-white px-10 py-4 shadow-xl duration-300 ease-in-out',
        isActive ? 'h-fit' : 'h-[52px] xl:h-[60px]',
      )}
    >
      <div className='flex items-center'>
        <span
          className={cn(
            'max-w-[200px] text-ellipsis text-sm font-medium text-black md:max-w-max lg:text-base xl:text-lg',
            isActive
              ? 'overflow-auto text-wrap'
              : 'overflow-hidden text-nowrap',
          )}
        >
          {title}
        </span>
        <button
          type='button'
          className={`absolute w-[30px] -translate-x-14 md:w-[33px] lg:w-[36px] ${
            isActive ? 'bg-yellow-sgpharma' : 'bg-blue-300'
          } rounded-full p-1 text-white lg:p-2`}
          onClick={handleActive}
        >
          {isActive ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
      <span className='w-full border-[1px] border-[#c2c2c2] opacity-50'></span>
      <p className='text-justify text-xs text-gray-200 md:text-sm lg:text-base'>
        {description}
      </p>
    </div>
  );
}
