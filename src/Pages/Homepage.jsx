import Hero from '../Components/Hero/Hero';
import ProjectCards from '../Components/Cards/createProjectCards';

import projCards from "../Components/Cards/projectCardData";
import TestimonialCarousel from '../Components/Carousel/TestC';
import CreateProjCard from '../Components/Cards/createProjectCards';

const Homepage = () => {
  return (
    <>
      <div>
      <Hero />
      </div>
      <div className='mx-auto mt-12 text-center flex flex-col justify-center text-white px-8'>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">Our Projects</h1>
       
      </div>
      <div className="mx-12 grid md:grid-cols-3 gap-8 ">
        {projCards.map((project)=>(
               <CreateProjCard project={project} key={project.id}/>
          ))}    
        </div>
      <div>
        <TestimonialCarousel/>
      </div>
      
    </>
  );
};

export default Homepage;
