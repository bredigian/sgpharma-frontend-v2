import { IContactForm } from '@/types/form.types';
import { toAPI } from '@/lib/utils';

type Props = {
  payload: IContactForm;
};

export const sendEmail = async ({ payload }: Props) => {
  const response = await toAPI({
    method: 'GET',
    route: '/contact',
    tags: ['data'],
    body: JSON.stringify(payload),
    isCSR: true,
  });
  if ('statusCode' in response) throw new Error(response.message);

  return response;
};
