import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Noticias | SG Pharma',
  description: 'Informate de las últimas noticias acerca de la salud.',
  keywords: ['SG Pharma, SG Medicinas, Noticias, Información'],
  icons: '../favicon.ico',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
