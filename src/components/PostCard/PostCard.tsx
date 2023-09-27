import { Tag } from '@prisma/client';
import Link from 'next/link';

interface PostCardProps {
  id: string;
  title: string;
  content: string;
  tag: Tag;
}

const PostCard = ({ title, content, id, tag }: PostCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className='card w-full bg-base-100 shadow-xl border hover:cursor-pointer hover:scale-105 duration-150 ease-in'>
        <div className='card-body'>
          <h2 className='font-semibold text-xl truncate'>{title}</h2>
          <p className='mb-4 truncate'>{content}</p>
          <div className='card-actions justify-end'>
            <span className='badge badge-neutral mr-auto'>{tag.name}</span>
            <div className='hover:underline'>Read More..</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
