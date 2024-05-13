type TFaq = {
  id: string;
  question: string;
  answer: string;
};

export const FAQS_ITEMS: TFaq[] = [
  {
    id: 'faq-1',
    question: '¿Qué significa SG Pharma?',
    answer:
      'Es un acrónimo de su completo: Sprüyt Gihlem Pharmaceutical, ya que uno de sus primeros contactos que se realizaron fue con fabricantes y productos alemanes.',
  },
  {
    id: 'faq-2',
    question: '¿De dónde es originario SG Pharma?',
    answer:
      'SG Pharma nace el 09 de noviembre de 1984 en la Ciudad de Guatemala, con nuevos y contemporáneos productos que lo posicionaron desde un inicio a la vista de la población como una opción más confiable y efectiva para aliviar y sanar su salud.',
  },
  {
    id: 'faq-3',
    question: '¿Existe distribución a otros países?',
    answer:
      '¡Claro! Gracias a la visión empresarial nuestros productos tienen alcance en El Salvador. Así también cuenta con distribución en Belice donde más centroamericanos han podido comprobar la eficiencia de nuestros productos.',
  },
  {
    id: 'faq-4',
    question: '¿Qué productos ofrecen?',
    answer:
      'La diversificación de nuestra línea de productos ha ido en aumento abriendo más opciones para que nuestra población esté sana y activa. Nuestros productos van desde antigripales, multivitamínicos, jarabes para la tos, antibióticos, protectores del hígado, cuidado materno, cuidado infantil y muchos otros. Te invitamos a que veas la sección de nuestro catálogo de productos y lo compruebes.',
  },
  {
    id: 'faq-5',
    question: '¿Dónde fabrican sus productos?',
    answer:
      'Nuestras materias primas son de calidad europea ya que desde sus inicios se hizo el contacto con proveedores en el continente europeo así también en el norteamericano. La producción de nuestros productos se realiza en industrias certificadas por las instituciones nacionales y reguladas por la vigente legislación del país.',
  },
];

type TFeature = {
  id: string;
  description: string;
};

export const FEATURES: TFeature[] = [
  {
    id: 'feature-1',
    description: 'Principios bien definidos en favor del área de salud',
  },
  {
    id: 'feature-2',
    description: 'Una visión de ayuda y acceso para toda la población',
  },
  {
    id: 'feature-3',
    description: 'La calidad y eficiencia de nuestros productos',
  },
  {
    id: 'feature-4',
    description: 'Su composición es única e inigualable',
  },
];
