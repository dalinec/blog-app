import { PenSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';

const ButtonAction = () => {
  return (
    <div>
      <Link href={'/edit/id'} className='btn mr-2'>
        <PenSquare />
        Edit
      </Link>
      <button className='btn btn-error'>
        <Trash2 />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
