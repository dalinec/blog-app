import { db } from '@/lib/db';

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
