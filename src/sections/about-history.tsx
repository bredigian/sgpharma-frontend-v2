'use client';

import Image from 'next/image';
import historyImage from '@/assets/images/about/history.png';
import { motion } from 'framer-motion';
import { useCustomAnimation } from '@/hooks/use-animation';

export default function AboutHistorySection() {
  const { ref, controls } = useCustomAnimation();

  return (
    <section className='relative mx-auto flex max-w-screen-lg flex-col bg-gray-100 p-8 md:flex-row md:flex-wrap md:p-16 lg:p-32 xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className='relative mx-auto w-full max-w-96 py-4 md:mx-0 md:w-1/2 md:max-w-[50%] md:px-4 lg:grid lg:place-items-center'
      >
        <div className='relative lg:max-w-96'>
          <Image
            alt='Imágen ilustrativa'
            src={historyImage}
            width={1000}
            height={1000}
            quality={100}
            className='w-full rounded-xl'
          />
          <div className='absolute -bottom-3 -right-3 flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full bg-blue-300 p-2 lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] 2xl:-bottom-8 2xl:-right-16 2xl:h-[200px] 2xl:w-[200px]'>
            <span className='text-xl font-semibold text-white lg:text-3xl xl:text-5xl 2xl:text-6xl'>
              36
            </span>
            <span className='text-center text-[10px] text-white lg:text-xs xl:text-sm'>
              Años ofreciendo soluciones
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col gap-4 py-4 md:w-1/2 md:px-4'
      >
        <div className='mt-4 flex flex-col gap-4'>
          <span className=' text-nowrap text-xs font-semibold tracking-[5px] text-blue-200 lg:text-sm xl:text-base'>
            INNOVACIÓN Y EXCELENCIA
          </span>
          <span className='text-2xl font-semibold text-black lg:text-4xl xl:text-[56px] xl:leading-none'>
            Calidad europea para Centroamérica
          </span>
        </div>
        <p className='text-justify text-xs text-black lg:text-base xl:text-lg'>
          SG Pharma, fue fundada el 9 de noviembre de 1986, en la ciudad de
          Guatemala.
        </p>
        <p className='text-justify text-xs text-black lg:text-base xl:text-lg'>
          Somos una compañía farmacéutica con presencia en el mercado
          guatemalteco y salvadoreño. Esta es una posición de privilegio que
          debemos a un conjunto de principios bien definidos a favor del área de
          salud a nivel regional.
        </p>
        <p className='lg:xl:leading-nonetext-base text-justify text-xs text-black xl:text-lg'>
          Desde sus orígenes, su giro comercial ha sido la venta y promoción de
          productos medicinales, siempre con una visión de ayuda y acceso para
          toda la población.
        </p>
      </motion.div>
      <motion.p
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='py-4 text-justify text-xs text-black md:w-1/2 md:px-4 lg:text-base xl:text-lg'
      >
        La calidad y eficiencia de nuestros productos se debe a que son creados
        con materias primas europeas, con las cuales hasta el día de hoy se
        siguen elaborando. Su composición es única e inigualable lo que nos hace
        distinguir y destacar en el mercado, ofreciendo soluciones rápidas y
        eficaces.
      </motion.p>
      <motion.p
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='py-4 text-justify text-xs text-black md:w-1/2 md:px-4 lg:text-base xl:text-lg'
      >
        En la cual trabajamos una gama de productos a exportar e importar;
        contamos también con la División de Representaciones, que busca
        incorporar representaciones internacionales, para poder ofrecer y
        comercializar nuestros productos en todo el istmo Centroamericano.
      </motion.p>
      <motion.p
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='py-4 text-justify text-xs text-black md:w-1/2 md:px-4 lg:text-base xl:text-lg'
      >
        SG Pharma y su estandarte principal siendo, la calidad de sus productos,
        permite mantener procesos ágiles frente al dinamismo del mercado,
        ofreciendo productos innovadores y vanguardistas.
      </motion.p>
      <motion.p
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='py-4 text-justify text-xs text-black md:w-1/2 md:px-4 lg:text-base xl:text-lg'
      >
        Con el transcurso de los años se han incrementado las divisiones
        internas de la empresa, contando actualmente con las divisiones de
        productos éticos, ginecológicos, oftalmológicos y OTC, además de la
        recién incorporada división de Negociaciones Internacionales.
      </motion.p>
    </section>
  );
}
