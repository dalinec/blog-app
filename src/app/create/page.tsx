'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import FormPost from '@/components/FormPost/FormPost';
import BackButton from '@/components/Buttons/BackButton';
import axios from 'axios';

const CreatePage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post('/api/post/create', newPost);
    },
    onError: (error) => {
      console.error(error);
    },

    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });

  return (
    <div>
      <BackButton />
      <h1 className='text-2xl my-5 font-bold text-center'>Add a new post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
