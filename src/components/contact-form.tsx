'use client';

import 'ldrs/ring';

import { IContactForm } from '@/types/form.types';
import Loader from './loader';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';

export const HomeContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IContactForm>();

  const onSubmit = async (values: IContactForm) => {
    console.log(values);
    await new Promise(async (resolve, reject) => {
      setTimeout(resolve, 4000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-4 gap-4'>
      <div className='col-span-full flex flex-col gap-2'>
        <input
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es requerido.',
            },
            minLength: {
              value: 4,
              message: 'El nombre debe contener al menos 4 caracteres.',
            },
          })}
          type='text'
          className='rounded-full px-4 py-2 text-sm lg:text-base xl:text-lg'
          placeholder='Nombre completo'
        />
        {errors.name && <small className=''>{errors.name.message}</small>}
      </div>
      <div className='col-span-full flex flex-col gap-2 xl:col-span-2'>
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'El email es requerido.',
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'El email es inválido.',
            },
          })}
          type='email'
          className='rounded-full px-4 py-2 text-sm lg:text-base xl:text-lg'
          placeholder='Email'
        />
        {errors.email && <small className=''>{errors.email.message}</small>}
      </div>
      <div className='col-span-full flex flex-col gap-2 xl:col-span-2'>
        <input
          {...register('phone', {
            required: {
              value: true,
              message: 'El número de teléfono es requerido.',
            },
            minLength: {
              value: 4,
              message:
                'El número de teléfono debe contener al menos 10 caracteres.',
            },
          })}
          type='number'
          className='rounded-full px-4 py-2 text-sm lg:text-base xl:text-lg'
          placeholder='Número de teléfono'
        />
        {errors.phone && <small className=''>{errors.phone.message}</small>}
      </div>
      <button
        disabled={!isValid}
        className={cn(
          'col-span-full mt-2 flex w-full items-center justify-center gap-4 rounded-2xl px-6 py-2 text-sm font-semibold text-white lg:text-base xl:col-span-3',
          isValid ? 'md:hover:bg-blue-400-hover opacity-100' : 'opacity-50',
          isSubmitting ? 'bg-blue-400-hover' : 'bg-blue-400',
        )}
        type='submit'
      >
        {!isSubmitting ? (
          'Enviar'
        ) : (
          <>
            Enviando
            <Loader size={16} />
          </>
        )}
      </button>
    </form>
  );
};
