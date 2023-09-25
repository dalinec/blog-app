'use client';

import { FormInputPost } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Tag } from '@prisma/client';
import axios from 'axios';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost = ({ submit, isEditing }: FormPostProps) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  //fetch list tags, the "data: dataTags" is just a rename of the data that is being fetched
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: async () => {
      const response = await axios.get('/api/tags');
      return response.data;
    },
  });

  console.log(dataTags);

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

      {isLoadingTags ? (
        <span className='loading loading-dots loading-md'></span>
      ) : (
        <select
          {...register('tag', { required: true })}
          defaultValue={''}
          className='select select-bordered w-full max-w-lg border-blue-600'
        >
          <option disabled value=''>
            Select tags
          </option>
          {dataTags?.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      )}

      <button type='submit' className='btn btnBlue w-full max-w-lg'>
        {isEditing ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default FormPost;
