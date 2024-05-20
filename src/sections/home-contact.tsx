'use client';

import { HomeContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

export default function HomeContactSection() {
  const { ref, controls } = useCustomAnimation();

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className='flex w-[90%] translate-y-8 flex-col items-center justify-evenly gap-6 self-center rounded-2xl bg-yellow-sgpharma p-8 md:flex-row lg:gap-12 lg:p-16 xl:w-[75%]'
    >
      <div className='flex flex-col items-center gap-4 md:items-start'>
        <span className='text-xs font-semibold tracking-[5px] text-black md:text-sm lg:text-lg'>
          ¿TIENES DUDAS?
        </span>
        <span className='max-w-min text-center text-2xl font-semibold text-black md:text-start md:text-3xl lg:text-4xl'>
          Nosotros te contactamos
        </span>
      </div>
      <HomeContactForm />
    </motion.div>
  );
}
