import { Category } from '@/types/category.types';

type TPage = {
  id: string;
  name: string;
  path: `/${string}`;
  value?: Category;
  subsections?: TPage[];
};

export const PAGES: TPage[] = [
  {
    id: 'home_id',
    name: 'Inicio',
    path: '/',
  },
  {
    id: 'about_id',
    name: 'Nosotros',
    path: '/about',
  },
  {
    id: 'products_id',
    name: 'Productos',
    path: '/products',
    subsections: [
      {
        id: 'products_etichs_id',
        name: 'Ética',
        value: 'ethic',
        path: '/products?type=ethic',
      },
      {
        id: 'products_otc_id',
        name: 'OTC',
        value: 'otc',
        path: '/products?type=otc',
      },
      {
        id: 'products_oftalmic_id',
        name: 'Oftalmológica',
        value: 'ophthalmological',
        path: '/products?type=ophthalmological',
      },
      {
        id: 'products_gynecological_id',
        name: 'Ginecológica',
        value: 'gynecological',
        path: '/products?type=gynecological',
      },
      {
        id: 'products_pediatric_id',
        name: 'Infantil',
        value: 'infantile',
        path: '/products?type=infantile',
      },
    ],
  },
  {
    id: 'social_id',
    name: 'Desarrollo Social',
    path: '/social',
  },
  {
    id: 'news_id',
    name: 'Noticias',
    path: '/news',
  },
  {
    id: 'contact_id',
    name: 'Contáctanos',
    path: '/contact',
  },
];
