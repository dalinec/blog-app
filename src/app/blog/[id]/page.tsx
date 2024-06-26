import BackButton from '@/components/Buttons/BackButton';
import ButtonAction from '@/components/Buttons/ButtonAction';
import { getPost } from '@/app/api/post/get/getPost';

interface BlogDetailsPageProps {
  params: {
    id: string;
  };
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const post = await getPost(params.id);

  return (
    <>
      <BackButton />
      <div className='flex items-center justify-between mb-5'>
        <div>
          <h2 className='text-xl font-bold my-5'>{post?.title}</h2>
          <span className='badge badge-neutral'>{post?.tag.name}</span>
        </div>
        <div className='hidden sm:block'>
          <ButtonAction id={params.id} />
        </div>
      </div>
      <p className='text-slate-700'>{post?.content}</p>
      <div className='block sm:hidden mt-5'>
        <ButtonAction id={params.id} />
      </div>
    </>
  );
};

export default BlogDetailsPage;
