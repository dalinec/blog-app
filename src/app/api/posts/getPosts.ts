import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiResponse } from 'next';

export const dynamic = 'force-dynamic'; // defaults to auto

export const getPosts = async (request: NextRequest) => {
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
