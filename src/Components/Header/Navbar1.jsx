import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='z-30 sticky top-0 flex justify-between items-center h-24  mx-auto px-12 text-[#00df9a]'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>INSTYLE</h1>
      <ul className='hidden md:flex'>
      <Link to="/"><li className='p-4 font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400'>Home</li></Link>
      <Link to="/pricing"><li className='p-4 font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400'>Pricing</li></Link>
        <li className='p-4 font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400'>About</li>
        <li className='p-4 font-semibold hover:bg-[#00df9a] hover:text-black ease-in-out duration-400'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>INSTYLE</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Pricing</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar1;
