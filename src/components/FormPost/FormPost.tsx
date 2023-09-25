'use client';

import { FormInputPost } from '@/types';
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col items-center justify-center gap-5 mt-10'
    >
      <input
        type='text'
        {...register('title', { required: true })}
        placeholder='Post title'
        className='input input-bordered w-full max-w-lg border-blue-600'
      />
      <textarea
        {...register('content', { required: true })}
        className='textarea textarea-bordered w-full max-w-lg border-blue-600'
        placeholder='Post content'
      ></textarea>
      <select
        {...register('tag', { required: true })}
        defaultValue={''}
        className='select select-bordered w-full max-w-lg border-blue-600'
      >
        <option disabled value=''>
          Select tags
        </option>
        <option>javascript</option>
        <option>tailwind</option>
        <option>nextjs</option>
      </select>
      <button type='submit' className='btn btnBlue w-full max-w-lg'>
        {isEditing ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default FormPost;
