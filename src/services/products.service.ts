import { API_URL } from '@/constants/api';

export const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'GET',
      next: {
        revalidate: 302400,
      },
    });
    const result = await response.json();
    if ('statusCode' in result)
      return new Error('Ocurrió un error al obtener los productos.');

    return result;
  } catch (error) {
    return new Error('En este momento el servicio no se encuentra disponible.');
  }
};

type Props = {
  id: string;
};

export const getById = async ({ id }: Props) => {
  try {
    const response = await fetch(`${API_URL}/products/detail?id=${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    if ('statusCode' in result)
      return new Error('Ocurrió un error al obtener el producto.');

    return result;
  } catch (error) {
    return new Error('En este momento el servicio no se encuentra disponible.');
  }
};

export const getFavorites = async () => {
  try {
    const response = await fetch(`${API_URL}/products/favorites`, {
      method: 'GET',
      next: {
        revalidate: 302400,
      },
    });
    const result = await response.json();
    if ('statusCode' in result)
      return new Error('Ocurrió un error al obtener los productos.');

    return result;
  } catch (error) {
    return new Error('En este momento el servicio no se encuentra disponible.');
  }
};
