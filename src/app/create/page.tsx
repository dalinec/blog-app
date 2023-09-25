'use client';

import { SubmitHandler } from 'react-hook-form';
import FormPost from '@/components/FormPost/FormPost';
import { FormInputPost } from '@/types';

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className='text-2xl my-5 font-bold text-center'>Add a new post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
