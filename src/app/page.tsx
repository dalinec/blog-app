import { getPosts } from './api/posts/getPosts';
import PostCard from '@/components/PostCard/PostCard';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className='grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
      {posts.map((post) => {
        return <PostCard key={post.id} {...post} />;
      })}
    </main>
  );
}
