import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Desarrollo social | SG Pharma',
  description:
    'Tenemos un departamento encargado el cual agenda y calendariza actividades como jornadas médicas en hospitales o municipalidades con lo que hacemos llegar a nuestro producto a la población de forma integral.',
  keywords: [
    'SG Pharma, SG Medicinas, Desarrollo Social, Desarrollo, Social, Población, Sociedad, Personas',
  ],
  icons: '../favicon.ico',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
