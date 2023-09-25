const FormPost = () => {
  return (
    <form className='flex flex-col items-center justify-center gap-5 mt-10'>
      <input
        type='text'
        placeholder='Post title'
        className='input input-bordered w-full max-w-lg'
      />
      <textarea
        className='textarea textarea-bordered w-full max-w-lg'
        placeholder='Post content'
      ></textarea>
      <select className='select select-bordered w-full max-w-lg'>
        <option disabled selected>
          Select tags
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button className='btn btnBlue w-full max-w-lg'>Create</button>
    </form>
  );
};

export default FormPost;
