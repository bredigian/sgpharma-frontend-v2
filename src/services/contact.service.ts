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
    if ('statusCode' in result) return new Error('Error');

    return result;
  } catch (error) {
    if (error) return error;

    return new Error('En este momento el servicio no se encuentra disponible.');
  }
};
