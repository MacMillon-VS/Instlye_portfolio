import { useState, useEffect } from 'react';

const CardSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity ${
            activeIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    images: [
      'https://via.placeholder.com/400x300/0000FF/808080?text=Image+1',
      'https://via.placeholder.com/400x300/FF0000/808080?text=Image+2',
      'https://via.placeholder.com/400x300/00FF00/808080?text=Image+3',
    ],
  },
  {
    id: 2,
    images: [
      'https://v1.tailwindcss.com/img/card-top.jpg',
      'https://drive.google.com/uc?id=1n8ezJO7oOFbwLD9YMztAFXpQvEVb_LQi',
    ],
  },
  {
    id: 3,
    images: [
      'https://via.placeholder.com/400x300/00FF00/808080?text=Image+1',
      'https://via.placeholder.com/400x300/0000FF/808080?text=Image+2',
      'https://via.placeholder.com/400x300/FF0000/808080?text=Image+3',
      'https://via.placeholder.com/400x300/000000/808080?text=Image+4',
    ],
  },
];

const CardSliderContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-72">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-200 rounded-lg overflow-hidden">
          <CardSlider images={item.images} />
        </div>
      ))}
    </div>
  );
};

export default CardSliderContainer;
