import { API_URL } from '@/constants/api';
import { IContactForm } from '@/types/form.types';

type Props = {
  payload: IContactForm;
};

export const sendEmail = async ({ payload }: Props) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    if ('statusCode' in result)
      throw new Error('Ocurrió un error al enviar el email.');

    return result;
  } catch (error) {
    throw new Error('En este momento el servicio no se encuentra disponible.');
  }
};
