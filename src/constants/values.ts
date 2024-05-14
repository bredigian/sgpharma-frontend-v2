import { StaticImageData } from 'next/image';
import compromisoImage from '@/assets/images/home/compromiso.png';
import fidelidadImage from '@/assets/images/home/fidelidad.png';
import honestidadImage from '@/assets/images/home/honestidad.png';
import integridadImage from '@/assets/images/home/integridad.png';
import nacionalismoImage from '@/assets/images/about/nacionalismo.png';

type TValue = {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
};

export const VALUES: TValue[] = [
  {
    id: 'discover-1',
    image: compromisoImage,
    title: 'Compromiso',
    description:
      'Ofreciendo sólidos acuerdos con nuestros clientes lo que nos ha permitido reforzar y consolidar nuevos lazos comerciales.',
  },
  {
    id: 'discover-2',
    image: honestidadImage,
    title: 'Honestidad',
    description:
      'Negociaciones justas que aportan beneficios a nuestros clientes y consumidores, obteniendo productos de calidad que dan un valor agregado a su negocio y salud.',
  },
  {
    id: 'discover-3',
    image: fidelidadImage,
    title: 'Fidelidad',
    description:
      'Transmitimos un ambiente de confianza con nuestros clientes y consumidores a través de la cordialidad y seguridad de la garantía de nuestros productos.',
  },
  {
    id: 'discover-4',
    image: integridadImage,
    title: 'Integridad',
    description:
      'Nuestro personal se distingue por obrar por el cumplimiento de nuestros valores, con responsabilidad e identidad empresarial.',
  },
  {
    id: 'discover-5',
    image: nacionalismoImage,
    title: 'Nacionalismo',
    description:
      'Inculcamos la ciudadanía con el fin de demostrarle a nuestros colaboradores y clientes la importancia de hacer cumplir nuestras responsabilidades sociales para fomentar y formar un mejor país, una mejor región.',
  },
];
