import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import v from "../../assets/buildVideo.mp4";

const Hero = () => {
  // https://www.shutterstock.com/shutterstock/videos/1067878640/preview/stock-footage-hyperlapse-time-lapse-of-construction-city-construction-of-a-large-area-with-skyscrapers-process.webm
  return (
    <div className='text-white'>
    <div className="top-[-75px] flex justify-center w-full h-screen text-center relative md:top-[-72px]">
      <video
        src={v}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute opacity-50"
      />
      
      <div className='max-w-[800px] my-12 w-full pt-24 mx-auto text-center flex flex-col justify-center z-10'>
        <p className='text-white font-bold p-2 text-lg'>
          Build your future with
        </p>
        <h1 className='md:text-6xl text-3xl font-bold md:py-6 text-[#00df9a]'>INSTYLE ARCHITECT</h1>
        <h1 className='md:text-5xl text-3xl font-bold md:py-6'>
          You Dream it.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            We
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]'
            strings={['DESIGN', 'ARCHITECT', 'BUILD']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            it.
          </p>
        </div>
        <p className='md:text-2xl text-xl font-medium text-gray-300 px-4'>We design and build the extraordinary.</p>
        <Link to={"/pricing"} className='bg-red-500 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-white hover:bg-[#00df9a] hover:text-black ease-in-out duration-500 transform transition-transform hover:scale-110'>Get Free Estimation</Link>
      </div>
    </div>
    </div>
  );
};

export default Hero;
