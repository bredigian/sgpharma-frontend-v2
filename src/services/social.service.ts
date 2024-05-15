import { API_URL } from '@/constants/api';

export const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}/welfare`, {
      method: 'GET',
    });
    const result = await response.json();
    if ('statusCode' in result) return new Error('Error');

    return result;
  } catch (error) {
    return new Error('En este momento el servicio no se encuentra disponible.');
  }
};
