import {React, useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import projData from './projectCardData'; // import card data

const CardDetails = () => {
  const { id } = useParams();
const data = projData();
  const card = data.find((card) => card.id === parseInt(id));
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % card.image.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8 text-white mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className=" rounded overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105" >
          <img className="w-full rounded-lg shadow-md" src={card.image[activeIndex]} alt={card.title} />
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">{card.title}</h2>
          <p className="mb-4">{card.description}</p>
          <div className="list-disc pl-4 mb-4">
            {card.details}
          </div>
          {/* additional components for the card */}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
