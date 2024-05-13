import { StaticImageData } from 'next/image';
import target1 from '@/assets/images/home/target-1.png';
import target2 from '@/assets/images/home/target-2.png';

type TTarget = {
  id: string;
  icon: StaticImageData | string;
  title: string;
  description: string;
};

export const TARGETS: TTarget[] = [
  {
    id: 'target-1',
    icon: target1,
    title: 'Nuestra visión',
    description:
      'Ser una empresa de cobertura a nivel centroamericano y del caribe, con el fin primordial de crear y dar acceso a medicina vanguardista, sin afectar la economía popular, ofreciendo los mejores medicamentos de la actualidad.',
  },
  {
    id: 'target-2',
    icon: target2,
    title: 'Nuestra misión',
    description:
      'Generar el acceso de la población, a medicamentos de la más alta calidad, producida con estándares internacionales, manteniendo costos razonables; con el fin de contar con una población sana.',
  },
];
