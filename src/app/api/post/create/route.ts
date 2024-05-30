import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    revalidatePath('/');
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not create the post' },
      { status: 500 }
    );
  }
};
