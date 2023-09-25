import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const tags = await db.tag.findMany();
    return NextResponse.json(tags, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'could not fetch the tags' },
      { status: 500 }
    );
  }
};
