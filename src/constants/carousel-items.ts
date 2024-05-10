import { StaticImageData } from 'next/image';
import carouselItem1 from '../assets/images/home/carousel-item-1.png';
import carouselItem2 from '../assets/images/home/carousel-item-2.png';
import carouselItem3 from '../assets/images/home/carousel-item-3.png';

type TCarouselItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string | StaticImageData;
};

export const CAROUSEL_ITEMS: TCarouselItem[] = [
  {
    id: 'carousel_item_1',
    title: 'Compromiso con la salud',
    subtitle: 'CALIDAD EUROPEA',
    description:
      'Ofreciendo soluciones rápidas y eficaces en Guatemala y El Salvador',
    image: carouselItem1,
  },
  {
    id: 'carousel_item_2',
    title: 'Vida saludable',
    subtitle: 'TU ALIADO PARA UNA',
    description:
      'Somos una compañia farmacéutica con presencia en el mercado guatemalteco y salvadoreño',
    image: carouselItem2,
  },
  {
    id: 'carousel_item_3',
    title: 'Más alta calidad',
    subtitle: 'MEDICAMENTOS DE LA',
    description: 'Con sentido y responsabilidad humana',
    image: carouselItem3,
  },
];
