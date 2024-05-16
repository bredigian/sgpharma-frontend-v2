import { toAPI } from '@/lib/utils';

export const getAll = async () => {
  const response = await toAPI({
    method: 'GET',
    route: '/news',
    tags: ['data'],
  });
  if ('statusCode' in response) return new Error(response.message);

  return response;
};
