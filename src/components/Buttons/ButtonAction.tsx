'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { PenSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ButtonActionProps {
  id: string;
}

const ButtonAction = ({ id }: ButtonActionProps) => {
  const router = useRouter();

  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/post/${id}`);
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
      <Link href={'/edit/id'} className='btn mr-2'>
        <PenSquare />
        Edit
      </Link>
      <button onClick={() => deletePost()} className='btn btn-error'>
        {isLoading ? (
          <>
            <span className='loading loading-spinner'></span>
            <span>Loading...</span>
          </>
        ) : (
          <>
            <Trash2 />
            Delete
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonAction;
