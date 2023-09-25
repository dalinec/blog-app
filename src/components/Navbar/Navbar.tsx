import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='navbar bg-neutral-100 '>
      <div className='container'>
        <div className='flex-1'>
          <Link href={'/'}>
            <BookOpen />
          </Link>
        </div>
        <div className='flex-none'>
          <Link href={'/create'} className='btn btn-ghost'>
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
