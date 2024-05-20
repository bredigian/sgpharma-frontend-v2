import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

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
  const { ref, controls } = useCustomAnimation();

  const isActive = active === index;
  const delay = index * 0.25;

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5, delay }}
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
    </motion.div>
  );
}
