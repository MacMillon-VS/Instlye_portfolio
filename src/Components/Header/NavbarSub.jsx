import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineInstagram } from 'react-icons/ai';

const NavbarSub = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='md:flex justify-end items-center h-4 mx-auto px-4 text-cyan-300 hidden'>
      <ul className='hidden md:flex'>
        <li className='p-4'><AiOutlineInstagram size={20}/></li>
        <li className='p-4'><AiOutlineInstagram size={20}/></li>
        <li className='p-4'><AiOutlineInstagram size={20}/></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default NavbarSub;