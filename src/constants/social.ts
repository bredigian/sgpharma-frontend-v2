import { StaticImageData } from 'next/image';
import socialDiscover1 from '@/assets/images/home/social-discover-1.png';
import socialDiscover2 from '@/assets/images/home/social-discover-2.png';
import socialDiscover3 from '@/assets/images/home/social-discover-3.png';

type TSocialItem = {
  id: string;
  image: StaticImageData;
  title: string;
};

export const SOCIAL_ITEMS: TSocialItem[] = [
  {
    id: 'discover-1',
    image: socialDiscover3,
    title: 'Excelencia',
  },
  {
    id: 'discover-2',
    image: socialDiscover1,
    title: 'Accesibilidad',
  },
  {
    id: 'discover-3',
    image: socialDiscover2,
    title: 'Responsabilidad Social',
  },
];
