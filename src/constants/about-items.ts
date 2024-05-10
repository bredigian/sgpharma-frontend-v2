import { StaticImageData } from 'next/image';
import compromisoImage from '@/assets/images/home/compromiso.png';
import fidelidadImage from '@/assets/images/home/fidelidad.png';
import honestidadImage from '@/assets/images/home/honestidad.png';
import integridadImage from '@/assets/images/home/integridad.png';

type TAboutItem = {
  id: string;
  title: string;
  image: StaticImageData;
};

export const ABOUT_ITEMS: TAboutItem[] = [
  {
    id: 'compromiso_item',
    title: 'Compromiso',
    image: compromisoImage,
  },
  {
    id: 'honestidad_item',
    title: 'Honestidad',
    image: honestidadImage,
  },
  {
    id: 'fidelidad_item',
    title: 'Fidelidad',
    image: fidelidadImage,
  },
  {
    id: 'integridad_item',
    title: 'Integridad',
    image: integridadImage,
  },
];
