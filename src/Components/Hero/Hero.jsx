import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] my-12 w-full  mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Build your future In Style
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          You Dream it.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            We
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['DESIGN', 'ARCHITECT', 'BUILD']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            it.
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 px-4'>We design and build the extraordinary.</p>
        <Link to={"/pricing"} className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black hover:bg-white hover:text-black ease-in-out duration-500 transform transition-transform hover:scale-110'>Get Estimation</Link>
      </div>
    </div>
  );
};

export default Hero;
