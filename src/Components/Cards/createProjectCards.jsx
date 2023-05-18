import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const CreateProjCard=({image, title, id})=>{
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
// Sample images link
// "https://via.placeholder.com/500x300",
// "https://v1.tailwindcss.com/img/card-top.jpg"
  function handleLoad() {
    setLoaded(true);
  }
    return (
      <Link to={`/projects/${id}`}>
      {!loaded && (
      <div role="status" className="max-w-sm border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
        <div className="flex items-center justify-center h-48 mb-2 bg-gray-300 rounded dark:bg-gray-700">
          <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
          </svg>
        </div>
</div>
      )}
    
    <div className="h-40 md:h-52 mt-4 rounded overflow-hidden shadow-lg "> 
  <LazyLoadImage className={`w-full h-full object-cover rounded-t-lg transform transition-transform duration-1000 hover:scale-110 ${!loaded ? "hidden" : ""}`}
  onLoad={handleLoad} src={image[activeIndex]} alt="Sunset in the mountains"></LazyLoadImage>
  {!loaded && (
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      )}
   
</div>
    <div className={`px-6 py-3 md:py-4 rounded-b-lg bg-red-500 font-bold md:text-xl mb-2 text-white hover:bg-[#00df9a] hover:text-black text-center ${!loaded ? "hidden" : ""}`}>{title}</div>
</Link>
    );
}


export default CreateProjCard;