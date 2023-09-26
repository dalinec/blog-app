import { db } from '@/lib/db';

export const getPost = async (id: string) => {
  const res = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  return res;
};
