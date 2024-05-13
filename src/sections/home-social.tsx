import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_ITEMS } from '@/constants/social';
import social1 from '@/assets/images/home/social-1.png';
import social2 from '@/assets/images/home/social-2.png';
import whiteListon from '@/assets/utils/liston-white.png';

export default function HomeSocialSection() {
  return (
    <section className='flex flex-col items-center gap-4 p-8 md:p-16 lg:p-32 xl:flex-row xl:items-start xl:justify-center xl:gap-16'>
      <div className='grid max-w-[430px] grid-cols-5 lg:max-w-[520px] xl:gap-4'>
        <Image
          src={whiteListon}
          alt='Imagén ilustrativa'
          width={1000}
          height={1000}
          className='col-span-2 w-min self-center rounded-xl bg-yellow-sgpharma p-2 sm:col-span-1 sm:w-20 sm:p-4'
        />
        <Image
          src={social1}
          alt='Imagén ilustrativa'
          width={1000}
          height={1000}
          className='col-span-3 duration-300 ease-in-out hover:scale-105 sm:col-span-4'
        />
        <Image
          src={social2}
          alt='Imagén ilustrativa'
          width={1000}
          height={1000}
          className='col-span-4 max-w-52 -translate-y-12 duration-300 ease-in-out hover:scale-105 lg:max-w-96 xl:max-w-72'
        />
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
        className='flex max-w-[820px] flex-col items-center gap-4 lg:items-start'
      >
        <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-lg'>
          TRANSFORMANDO VIDAS
        </span>
        <span className='max-w-[600px] text-center text-3xl font-semibold md:text-[40px] lg:text-start lg:text-5xl xl:text-[4.5rem]'>
          Construyendo un futuro con salud
        </span>
        <p className='text-justify text-sm text-gray-200 lg:text-base'>
          Tenemos un departamento encargado el cual agenda y calendariza
          actividades como jornadas médicas en hospitales o municipalidades, con
          lo que hacemos llegar nuestro producto a la población de forma
          integral.
        </p>
        <ul className='mt-6 flex w-full flex-wrap items-baseline justify-center gap-4 lg:mt-12 xl:justify-start xl:gap-12 2xl:gap-20'>
          {SOCIAL_ITEMS.map((disc) => {
            return (
              <li
                key={disc.id}
                className='flex flex-col items-center gap-4 lg:items-start'
              >
                <Image
                  className='h-12 w-12 object-contain md:h-16 md:w-16'
                  src={disc.image}
                  alt='Imagén ilustrativa'
                  width={1000}
                  height={1000}
                />
                <span className='w-min text-center text-xs font-medium text-black md:text-sm lg:w-max lg:text-start lg:text-base'>
                  {disc.title}
                </span>
              </li>
            );
          })}
        </ul>
        <Link
          href={'/social'}
          className='mt-6 rounded-full bg-blue-300 px-6 py-3 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm lg:px-10 lg:py-4 lg:text-base'
        >
          Descubre más
        </Link>
      </div>
    </section>
  );
}
