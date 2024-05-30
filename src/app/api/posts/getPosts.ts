import { db } from '@/lib/db';

export const dynamic = 'force-dynamic'; // defaults to auto

export const getPosts = async () => {
  const res = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return res;
};
