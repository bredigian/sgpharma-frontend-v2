import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Nuestros productos | SG Pharma',
  description:
    'Conoce cada una de nuestras líneas especializadas con medicamentos de calidad europea creados para apoyarte en el cuidado de la salud.',
  keywords: ['SG Pharma, SG Medicinas, Productos, Medicamentos, Salud'],
  icons: '../favicon.ico',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
