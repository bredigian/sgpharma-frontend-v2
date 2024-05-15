import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaWaze } from 'react-icons/fa6';

import { FooterNewsItem } from './news-item';
import { INews } from '@/types/news.types';
import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from '@/constants/pages';
import { getAll } from '@/services/news.service';
import logoWhite from '@/assets/logos/logo_white.png';

export default async function Footer() {
  const PRODUCTS_TYPES = PAGES.find((item) => item.id === 'products_id');

  const news: INews[] | Error = await getAll();

  return (
    <footer className='flex w-full flex-col-reverse justify-evenly gap-12 bg-blue-400 p-14 md:p-24 lg:flex-row lg:items-start xl:p-36'>
      <div
        // ref={ref}
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.25 }}
        className='flex max-w-[260px] flex-col items-start gap-8 lg:mt-36 lg:gap-4'
      >
        <Image
          className='w-14 lg:mb-8 lg:w-28'
          src={logoWhite}
          alt='Logo de SG Pharma'
          width={1000}
          height={1000}
          quality={100}
        />
        <div className='flex flex-col items-start gap-4'>
          <div className='flex items-start gap-2'>
            <MapPinIcon className='w-20 text-yellow-sgpharma' />
            <a
              className='text-xs text-white hover:text-yellow-sgpharma md:text-sm lg:text-base'
              href='https://www.google.com.gt/maps/search/sg+phar/@14.6374354,-90.5926427,17z?entry=ttu'
              target='_blank'
            >
              3 Av. 13-30 z.3 de Mixco (01057) Colonia El Rosario. Centro
              Empresarial San Javier Bodega No. 14
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <EnvelopeIcon className='w-6 text-yellow-sgpharma' />
            <a
              className='text-xs text-white hover:text-yellow-sgpharma md:text-sm lg:text-base'
              href='mailto:sac@sgmedicinas.com'
              target='_blank'
            >
              sac@sgmedicinas.com
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <PhoneIcon className='w-6 text-yellow-sgpharma' />
            <a
              className='text-xs text-white hover:text-yellow-sgpharma md:text-sm lg:text-base'
              href='tel:+50223291700'
              target='_blank'
            >
              (502) 2329-1700
            </a>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <a
            className='text-xl text-white lg:text-base'
            href='https://www.facebook.com/sgpharmagt'
            target='_blank'
          >
            <FaFacebookF className='text-white hover:text-yellow-sgpharma' />
          </a>
          <a
            className='text-xl text-white lg:text-base'
            href='https://www.instagram.com/compartimos_salud/'
            target='_blank'
          >
            <BsInstagram className='text-white hover:text-yellow-sgpharma' />
          </a>
          <a
            className='text-xl text-white lg:text-base'
            href='https://wa.me/50230005707'
            target='_blank'
          >
            <BsWhatsapp className='text-white hover:text-yellow-sgpharma' />
          </a>
          <a
            className='text-xl text-white lg:text-base'
            href='https://waze.com/ul/h9fxe68u5n'
            target='_blank'
          >
            <FaWaze className='text-white hover:text-yellow-sgpharma' />
          </a>
        </div>
        <a
          href='https://wa.me/50240037831'
          target='_blank'
          className='mt-6 text-center text-xs text-white hover:underline lg:mt-12'
        >
          Designed with love by Azul Marino © 2023
        </a>
      </div>
      <div
        // ref={ref}
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col items-start gap-4 lg:mt-36'
      >
        <span className='text-sm font-semibold text-white lg:text-base'>
          Productos
        </span>
        <ul className='flex flex-col items-start gap-4'>
          {PRODUCTS_TYPES?.subsections?.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.path}
                className='text-xs text-white hover:text-yellow-sgpharma md:text-sm lg:text-base'
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div
        // ref={ref}
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col items-start gap-4 lg:mt-36'
      >
        <span className='text-sm font-semibold text-white lg:text-base'>
          Ir a
        </span>
        <ul className='flex flex-col items-start gap-4'>
          {PAGES.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.path}
                className='text-xs text-white hover:text-yellow-sgpharma md:text-sm lg:text-base'
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div
        // ref={ref}
        // initial='hidden'
        // animate={controls}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.25 }}
        className='items-sart flex flex-col gap-4 lg:mt-36'
      >
        <span className='text-sm font-semibold text-white lg:text-base'>
          Noticias
        </span>
        {news instanceof Error ? (
          <span className='text-xs font-semibold text-white md:text-sm xl:text-base'>
            {news.message}
          </span>
        ) : (
          (news as INews[]).map((item) => <FooterNewsItem data={item} />)
        )}
      </div>
    </footer>
  );
}
