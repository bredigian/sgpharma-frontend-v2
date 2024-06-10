import { API_URL } from '@/constants/api';
import { IResponse } from '@/types/response.types';
import { type ClassValue, clsx } from 'clsx';
import { revalidateTag } from 'next/cache';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const revalidateCache = () => {
  revalidateTag('data');
};

type TFetchMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Props = {
  route: string;
  method: TFetchMethod;
  body?: RequestInit['body'];
  headers?: {
    'Content-Type'?: 'application/json';
    Authorization?: `Bearer ${string}`;
  };
  tags?: string[];
  isCSR?: boolean;
};

export const toAPI = async ({
  route,
  method,
  body,
  headers,
  tags,
  isCSR,
}: Props) => {
  try {
    const response = await fetch(`${API_URL}${route}`, {
      method: method,
      body: body ?? undefined,
      headers: headers ?? undefined,
      next: {
        revalidate: 43200,
        tags: tags ?? undefined,
      },
    });

    return (await response.json()) as IResponse;
  } catch (error) {
    if (!isCSR) return new Error('El servicio no se encuentra disponible.');
    else throw new Error('El servicio no se encuentra disponible.');
  }
};
