'use client';

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

import { ContactForm } from '@/components/contact-form';
import { FaWhatsapp } from 'react-icons/fa6';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

const Icon = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid place-items-center rounded-full border-2 border-yellow-sgpharma p-2'>
      {children}
    </div>
  );
};

export default function ContactInformationSection() {
  const { ref, controls } = useCustomAnimation();

  return (
    <section className='flex w-full flex-col items-center justify-center gap-6 p-8 md:flex-row xl:p-16'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col items-start gap-6'
      >
        <h1 className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-[14px] lg:text-sm xl:text-lg'>
          CONTÁCTANOS
        </h1>
        <span className='max-w-[660px] text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl'>
          Estamos aquí para escucharte y brindarte el mejor servicio
        </span>
        <div className='flex flex-col items-start gap-2'>
          <a
            href='https://www.google.com.gt/maps/search/sg+phar/@14.6374354,-90.5926427,17z?entry=ttu'
            className='flex max-w-[300px] items-start gap-4'
            target='_blank'
          >
            <Icon>
              <MapPinIcon className='w-6 text-yellow-sgpharma' />
            </Icon>
            <p className='text-[14px] text-gray-200 lg:text-sm'>
              3 Av. 13-30 z.3 de Mixco (01057) Colonia El Rosario. Centro
              Empresarial San Javier Bodega No. 14
            </p>
          </a>
          <a
            href='mailto:sac@sgmedicinas.com'
            className='flex max-w-[300px] items-center gap-4'
            target='_blank'
          >
            <Icon>
              <EnvelopeIcon className='w-6 text-yellow-sgpharma' />
            </Icon>
            <p className='text-[14px] text-gray-200 lg:text-sm'>
              sac@sgmedicinas.com
            </p>
          </a>
          <a
            href='tel:50223291700'
            className='flex max-w-[300px] items-center gap-4'
            target='_blank'
          >
            <Icon>
              <PhoneIcon className='w-6 text-yellow-sgpharma' />
            </Icon>
            <p className='text-[14px] text-gray-200 lg:text-sm'>
              (502) 2329-1700
            </p>
          </a>
          <a
            href='https://wa.me/50230005707'
            className='flex max-w-[300px] items-center gap-4'
            target='_blank'
          >
            <Icon>
              <FaWhatsapp className='h-6 w-auto text-yellow-sgpharma' />
            </Icon>
            <p className='text-[14px] text-gray-200 lg:text-sm'>
              (502) 3000-5707
            </p>
          </a>
        </div>
      </motion.div>
      <ContactForm />
    </section>
  );
}
