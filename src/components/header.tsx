'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from '@/constants/pages';
import { cn } from '@/lib/utils';
import logo from '@/assets/logos/logo.png';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const [showSubsections, setShowSubsections] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const path = usePathname();
  const isProductDetail = path.includes('SGPHARMAPROD');

  return (
    <header
      className={cn(
        'max-w-screen top-0 z-50 flex w-full flex-col duration-300 ease-in-out md:flex-row md:items-center md:justify-evenly md:gap-2 md:duration-300',
        scrolled || showNavbar ? 'bg-white' : 'bg-transparent',
        scrolled ? 'md:px-8 md:py-3' : 'md:px-8 md:py-6',
        isProductDetail ? 'sticky' : 'fixed',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between px-8 py-6 duration-300 ease-in-out md:justify-evenly md:px-0 md:py-0',
        )}
      >
        <Bars3Icon
          className={cn(
            'absolute duration-300 ease-in-out md:-z-20 md:hidden',
            !showNavbar ? 'opacity-100' : '-z-20 opacity-0',
          )}
          width={35}
          onClick={() => setShowNavbar(!showNavbar)}
        />
        <XMarkIcon
          className={cn(
            'absolute duration-300 ease-in-out md:-z-20 md:hidden',
            !showNavbar ? '-z-20 opacity-0' : 'opacity-100',
          )}
          width={35}
          onClick={() => setShowNavbar(!showNavbar)}
        />
        <Link className='flex w-full justify-center md:w-fit' href={'/'}>
          <Image
            src={logo}
            alt='SG Pharma'
            className='w-24 lg:w-32'
            width={1000}
            height={1000}
            quality={100}
          />
        </Link>
      </div>
      <nav
        className={cn(
          'absolute top-36 w-dvw px-8 py-6 duration-300 ease-in-out md:relative md:top-0 md:w-fit md:translate-x-0 md:px-0 md:py-0',
          !showNavbar ? '-translate-x-full' : 'translate-x-0 bg-white',
        )}
      >
        <ul className='flex w-full flex-col items-center gap-4 font-medium md:flex-row lg:gap-6'>
          {PAGES.map((item) => (
            <li
              key={item.id}
              className='overflow-hidden text-ellipsis text-nowrap md:text-sm lg:text-base'
            >
              {item.id !== 'products_id' ? (
                <Link href={item.path} onClick={() => setShowNavbar(false)}>
                  {item.name}
                </Link>
              ) : (
                <div
                  className='relative'
                  onMouseEnter={() => setShowSubsections(true)}
                  onMouseLeave={() => setShowSubsections(false)}
                >
                  <Link href={item.path} onClick={() => setShowNavbar(false)}>
                    {item.name}
                  </Link>
                  <div
                    className={cn(
                      'fixed -translate-x-4 flex-col gap-2 bg-white p-4 opacity-0 shadow-xl duration-300 ease-in-out',
                      !showSubsections
                        ? 'hidden md:invisible md:-z-50 md:flex md:opacity-0'
                        : 'hidden md:visible md:z-50 md:flex md:opacity-100',
                    )}
                  >
                    {item.subsections?.map((subitem) => (
                      <Link
                        key={subitem.id}
                        className='grow text-sm'
                        href={subitem.path}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
