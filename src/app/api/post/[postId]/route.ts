import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

interface contextProps {
  params: {
    postId: string;
  };
}

export const DELETE = async (req: Request, context: contextProps) => {
  try {
    const { params } = context;
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not delete the post' },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request, context: contextProps) => {
  try {
    const { params } = context;
    const body = await req.json();

    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not update the post' },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request, context: contextProps) => {
  try {
    const { params } = context;
    const post = await db.post.findFirst({
      where: {
        id: params.postId,
      },
      include: {
        tag: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not fetch the tags' },
      { status: 500 }
    );
  }
};
