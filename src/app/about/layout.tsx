import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Nosotros | SG Pharma',
  description:
    'SG Pharma, una compañía farmacéutica líder que lleva 36 años impulsando la salud y el bienestar. Nuestros sólidos valores y pasión nos guían en cada paso para lograr nuestra misión de tener vidas más sanas.',
  keywords: [
    'SG Pharma, SG Medicinas, Nosotros, Historia, Farmaceútica, Antigüedad',
  ],
  icons: '../favicon.ico',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
