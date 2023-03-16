import React from "react";

const CreateProjCard=({project})=>{
    return (
    <div className="mt-8 max-w-sm rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
  <img className="w-full rounded-lg transform transition-transform duration-300 hover:scale-110" src={project.image} alt="Sunset in the mountains"/>
  
    <div className="px-6 py-4 rounded-b-lg bg-[#00df9a] font-bold md:text-xl mb-2 text-black hover:bg-white text-center">{project.title}</div>
  
</div>
    );
}


export default CreateProjCard;