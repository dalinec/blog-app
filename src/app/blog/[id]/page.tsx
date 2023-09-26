import BackButton from '@/components/Buttons/BackButton';
import ButtonAction from '@/components/Buttons/ButtonAction';
import { getPost } from '@/app/api/post/get/getPost';

interface BlodDetailsPageProps {
  params: {
    id: string;
  };
}

const BlogDetailsPage = async ({ params }: BlodDetailsPageProps) => {
  const post = await getPost(params.id);

  return (
    <>
      <div className='mb-8'>
        <BackButton />
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold my-5'>{post?.title}</h2>
          <ButtonAction />
        </div>
      </div>
      <p className='text-slate-700'>{post?.content}</p>
      <span className='badge badge-neutral mr-auto'>{post?.tag.name}</span>
    </>
  );
};

export default BlogDetailsPage;
