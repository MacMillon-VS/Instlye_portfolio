import React from "react";
import HeroSlider from "react-slick";

//Components
import {PrevArrow, NextArrow} from './Arrows.component';

import testimonials from "./TestimonialCarouselData";
import { FaStar } from "react-icons/fa";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const TestimonialCard = ({ testimonial }) => (
    <div className=" rounded-b-lg shadow-md hover:shadow-inner rounded-t-lg hover:shadow-cyan-700/100 shadow-cyan-700/100 py-4 px-4 mx-8 my-4">
      <p className="text-gray-700 shadow-md text-base">{testimonial.text}</p>
      {/* <div className="flex items-center pt-4 px-4">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-gray-400" />
        <span className="ml-2 text-gray-700 text-sm">{testimonial.rating}</span>
      </div> */}
      <div className="flex items-center py-2 px-4 ">
        <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/150" alt="avatar" />
        <div className="pb-4 ">
          <div className="text-gray-700 font-bold">{testimonial.name}</div>
          {/* <div className="text-gray-600 text-sm">Customer</div> */}
        </div>
      </div>
    </div>
  );
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <>
    <HeroSlider {...settings}>
    {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))}
    </HeroSlider>
    </>
  );
};

export default HeroCarousal;