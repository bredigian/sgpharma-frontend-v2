import { StaticImageData } from 'next/image';
import testimonial1 from '@/assets/images/home/carousel-testimonial-1.png';
import testimonial2 from '@/assets/images/home/carousel-testimonial-2.png';
import testimonial3 from '@/assets/images/home/carousel-testimonial-3.png';

type TTestimonial = {
  id: string;
  name: string;
  avatar: StaticImageData;
  rol: string;
  message: string;
};

export const TESTIMONIALS_ITEMS: TTestimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Oralia Ramírez',
    avatar: testimonial1,
    rol: 'Ama de casa',
    message:
      'SG Pharma ha sido mi compañero de confianza en mi camino hacia una mejor salud. Los medicamentos que ofrecen no solo son de calidad excepcional, sino que realmente han cambiado mi vida. Me han brindado soluciones rápidas y eficaces para mis problemas de salud, permitiéndome disfrutar de una vida plena.',
  },
  {
    id: 'testimonial-2',
    name: 'Juan Pérez',
    avatar: testimonial2,
    rol: 'Comerciante',
    message:
      'SG Pharma ha sido un verdadero salvavidas para mí y mi familia. Gracias a sus medicamentos de calidad europea, hemos podido encontrar soluciones rápidas y eficaces para nuestros problemas de salud. Su compromiso con la excelencia y la accesibilidad nos ha permitido acceder a tratamientos efectivos sin sacrificar nuestra economía.',
  },
  {
    id: 'testimonial-3',
    name: 'Jackeline Orantes',
    avatar: testimonial3,
    rol: 'Secretaria',
    message:
      'Su compromiso con la accesibilidad me permitió acceder a un tratamiento de alta calidad si tener que preocuparme por el costo. Estoy agradecida por su enfoque centrado en el bienestar de la comunidad',
  },
];
