'use client';

import 'ldrs/ring';

import { IContactForm } from '@/types/form.types';
import Loader from './loader';
import { cn } from '@/lib/utils';
import { sendEmail } from '@/services/contact.service';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

export const HomeContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IContactForm>();

  const onSubmit = async (values: IContactForm) => {
    try {
      await sendEmail({ payload: values });
      toast.success('Email enviado exitosamente.');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
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
              value: 10,
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
          isValid ? 'opacity-100 md:hover:bg-blue-400-hover' : 'opacity-50',
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

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IContactForm>();

  const onSubmit = async (values: IContactForm) => {
    try {
      await sendEmail({ payload: values });
      toast.success('Email enviado exitosamente.');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <form
      className='flex w-full max-w-[550px] flex-col gap-6 rounded-2xl bg-blue-50 p-8'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label
        htmlFor='name'
        className='text-xl font-medium text-black lg:text-2xl xl:text-3xl'
      >
        ¡Conéctate con nosotros!
      </label>
      <div className='flex flex-col gap-2'>
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
      <div className='flex flex-col gap-2'>
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
          placeholder='Correo electrónico'
        />
        {errors.email && <small className=''>{errors.email.message}</small>}
      </div>
      <div className='flex flex-col gap-2'>
        <input
          {...register('phone', {
            required: {
              value: true,
              message: 'El número de teléfono es requerido.',
            },
            minLength: {
              value: 10,
              message:
                'El número de teléfono debe contener al menos 10 caracteres.',
            },
          })}
          type='number'
          className='rounded-full px-4 py-2 text-sm lg:text-base xl:text-lg'
          placeholder='50212345678'
        />
        {errors.phone && <small className=''>{errors.phone.message}</small>}
      </div>
      <div className='flex flex-col gap-2'>
        <textarea
          {...register('message', {
            required: {
              value: true,
              message: 'El mensaje es requerido.',
            },
            minLength: {
              value: 25,
              message: 'El mensaje debe contener al menos 25 caracteres.',
            },
          })}
          placeholder='Mensaje'
          className='h-[200px] w-full resize-none rounded-2xl p-4 text-sm outline-none placeholder:text-black placeholder:opacity-50 md:text-base lg:text-lg'
        />
        {errors.message && <small className=''>{errors.message.message}</small>}
      </div>

      <button
        disabled={!isValid}
        className={cn(
          'col-span-full mt-2 flex w-full items-center justify-center gap-4 rounded-2xl px-6 py-2 text-sm font-semibold text-white lg:text-base xl:col-span-3',
          isValid ? 'opacity-100 md:hover:bg-blue-400-hover' : 'opacity-50',
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
