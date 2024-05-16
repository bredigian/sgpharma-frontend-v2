import { toAPI } from '@/lib/utils';

type Props = {
  id: string;
};

export const getAll = async () => {
  const response = await toAPI({
    method: 'GET',
    route: '/products',
    tags: ['data'],
  });
  if ('statusCode' in response) return new Error(response.message);

  return response;
};

export const getById = async ({ id }: Props) => {
  const response = await toAPI({
    method: 'GET',
    route: `/products/detail?id=${id}`,
    tags: ['data'],
  });
  if ('statusCode' in response) return new Error(response.message);

  return response;
};

export const getFavorites = async () => {
  const response = await toAPI({
    method: 'GET',
    route: '/products/favorites',
    tags: ['data'],
  });
  if ('statusCode' in response) return new Error(response.message);

  return response;
};

export const getLatest = async () => {
  const response = await toAPI({
    method: 'GET',
    route: '/products/latests',
    tags: ['data'],
  });
  if ('statusCode' in response) return new Error(response.message);

  return response;
};
