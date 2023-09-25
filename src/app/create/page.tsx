'use client';

import { SubmitHandler } from 'react-hook-form';
import FormPost from '@/components/FormPost/FormPost';
import { FormInputPost } from '@/types';
import BackButton from '@/components/Buttons/BackButton';

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl my-5 font-bold text-center'>Add a new post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
