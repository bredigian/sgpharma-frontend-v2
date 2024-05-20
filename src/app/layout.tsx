import './globals.css';

import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';
import { Header } from '@/components/header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SG Pharma',
  description:
    'SG Pharma, una compañía farmacéutica líder que lleva 36 años impulsando la salud y el bienestar, ofrenciendo soluciones rápidas y eficaces en Guatemala y El Salvador.',
  keywords: ['SG Pharma, SG Medicinas'],
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
