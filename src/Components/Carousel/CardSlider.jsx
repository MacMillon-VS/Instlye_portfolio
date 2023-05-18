import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/500x300',
  'https://via.placeholder.com/500x301',
  'https://via.placeholder.com/500x302',
];

const CardWithSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative h-48">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={images[activeIndex]}
          alt="Slider"
        />
      </div>
    </div>
  );
};

export default CardWithSlider;
