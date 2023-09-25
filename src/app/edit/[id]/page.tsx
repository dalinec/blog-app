'use client';

import FormPost from '@/components/FormPost/FormPost';
import { FormInputPost } from '@/types';
import { SubmitHandler } from 'react-hook-form';

const EditPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className='text-2xl my-5 font-bold text-center'>Edit the post</h1>
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
};

export default EditPage;
