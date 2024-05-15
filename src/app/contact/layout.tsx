import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contáctanos | SG Pharma',
  description: 'Estamos aquí para escucharte y brindarte el mejor servicio.',
  keywords: ['SG Pharma, SG Medicinas, Contacto, Contactanos, Servicio'],
  icons: '../favicon.ico',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
