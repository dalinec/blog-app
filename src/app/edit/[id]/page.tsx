'use client';

import FormPost from '@/components/FormPost/FormPost';
import { FormInputPost } from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

interface EditPostpageProps {
  params: {
    id: string;
  };
}

const EditPage = ({ params }: EditPostpageProps) => {
  const router = useRouter();

  const { data: postData, isLoading: isLoadingPost } = useQuery({
    queryKey: ['post', params.id],
    queryFn: async () => {
      const res = await axios.get(`/api/post/${params.id}`);
      return res.data;
    },
  });

  const { mutate: editPost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.patch(`/api/post/${params.id}`, newPost);
    },
    onError: (error) => {
      console.error(error);
    },

    onSuccess: () => {
      router.refresh();
      router.push('/');
    },
  });

  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    editPost(data);
  };

  if (isLoadingPost) {
    return (
      <div className='text-center'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className='text-2xl my-5 font-bold text-center'>Edit the post</h1>
      <FormPost
        submit={handleEditPost}
        initialVal={postData}
        isEditing={true}
        isLoadingSubmit={isLoadingSubmit}
      />
    </div>
  );
};

export default EditPage;
