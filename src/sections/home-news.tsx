import { HomeContactForm } from '@/components/contact-form';
import Link from 'next/link';

export default function HomeNewsSection() {
  return (
    <section className='flex w-full flex-col items-center gap-8 p-8 md:p-16 lg:gap-12 lg:p-32'>
      <div className='flex w-full flex-col items-center justify-around gap-8 md:flex-row xl:gap-16'>
        <div
          //   ref={ref}
          //   initial='hidden'
          //   animate={controls}
          //   variants={{
          //     visible: { opacity: 1 },
          //     hidden: { opacity: 0 },
          //   }}
          //   transition={{ duration: 0.5, delay: 0.25 }}
          className='flex flex-col items-center gap-4 md:items-start'
        >
          <span className='text-xs font-semibold tracking-[5px] text-blue-200 md:text-sm lg:text-base'>
            NOTICIAS
          </span>
          <span className='w-min text-center text-3xl font-semibold md:text-start md:text-[40px] lg:text-5xl xl:text-[4.5rem]'>
            Mantente informado
          </span>
          <p className='max-w-[400px] text-justify text-sm text-gray-200 lg:text-base'>
            Últimas novedades: Mantente informado sobre las noticias y avances
            en el mundo de la salud con SG Pharma.
          </p>
          <Link
            href={'/news'}
            className='rounded-full bg-blue-300 px-6 py-3 text-xs font-semibold text-white hover:bg-yellow-sgpharma hover:text-blue-300 md:text-sm lg:text-base'
          >
            Ver más
          </Link>
        </div>
        {/* <div className='col-span-5 flex flex-col gap-8'>
          {errorNews ? (
            <h3 className='text-center text-black sm:text-sm lg:text-lg xl:text-xl'>
              {errorNews}
            </h3>
          ) : (
            news?.map((item) => {
              const truncatedDescription =
                item.DESCRIPCION?.length > 175
                  ? item.DESCRIPCION?.substring(0, 175) + '...'
                  : item.DESCRIPCION;
              return (
                <div
                  key={item.ID}
                  className='flex gap-8 sm:max-w-[400px] sm:flex-col sm:items-center md:items-start lg:items-center xl:max-w-[600px] xl:flex-row 2xl:max-w-[800px]'
                >
                  <div className='sm:w-[200px] lg:w-[300px] xl:w-[800px]'>
                    <img
                      src={item.IMAGEN_PRINCIPAL}
                      className='w-full'
                      alt='Imagen que hace referencia a la noticia'
                    />
                  </div>
                  <div className='flex flex-col gap-2 sm:items-center md:items-start lg:items-start'>
                    <span className='font-bold text-blue-100 sm:text-xs md:text-[14px] lg:text-sm'>
                      {item.CATEGORIA}
                    </span>
                    <span className='font-bold text-black sm:text-center sm:text-sm md:text-start md:text-base lg:text-lg'>
                      {item.TITULO}
                    </span>
                    <p className='text-justify text-gray-200 sm:text-[14px] md:text-sm lg:text-base'>
                      {truncatedDescription}
                    </p>
                    <button
                      type='button'
                      className='hover:text-yellow flex items-center gap-2 text-black'
                    >
                      <ChevronRightIcon
                        width={width >= 1024 ? 20 : 16}
                        color='#ffcd00'
                      />
                      <Link to={'/news'} onClick={() => window.scrollTo(0, 0)}>
                        <h3 className='sm:text-sm lg:text-base'>Leer más</h3>
                      </Link>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div> */}
      </div>
      <div
        // ref={ref2}
        // initial='hidden'
        // animate={controls2}
        // variants={{
        //   visible: { opacity: 1 },
        //   hidden: { opacity: 0 },
        // }}
        // transition={{ duration: 0.5, delay: 0.25 }}
        className='flex w-[90%] flex-col items-center justify-evenly gap-6 rounded-2xl bg-yellow-sgpharma p-8 md:flex-row lg:gap-12 lg:p-16 xl:w-[75%]'
      >
        <div className='flex flex-col items-center gap-4 md:items-start'>
          <span
            style={{ letterSpacing: '5px' }}
            className='text-xs font-semibold text-black md:text-sm lg:text-lg'
          >
            ¿TIENES DUDAS?
          </span>
          <span className='max-w-min text-center text-2xl font-semibold text-black md:text-start md:text-3xl lg:text-4xl'>
            Nosotros te contactamos
          </span>
        </div>
        <HomeContactForm />
      </div>
    </section>
  );
}
