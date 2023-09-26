import { Tag } from '@prisma/client';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  content: string;
  id: string;
  tag: Tag;
}

const PostCard = ({ title, content, id, tag }: PostCardProps) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl border'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='mb-4'>{content}</p>
        <div className='card-actions justify-end'>
          <span className='badge badge-neutral mr-auto'>{tag.name}</span>
          <Link href={`/blog/${id}`} className='hover:underline'>
            Read More..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
