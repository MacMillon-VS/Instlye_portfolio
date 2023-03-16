import React from "react";
import testimonials from "./TestimonialCarouselData";
import { FaStar } from "react-icons/fa";

const TestimonialCarousel = () => {
  

  const TestimonialCard = ({ testimonial }) => (
    <div className=" rounded-lg shadow-md shadow-cyan-700/50 py-4 px-6">
      <p className="text-gray-700 text-base">{testimonial.text}</p>
      <div className="flex items-center mt-4">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-gray-400" />
        <span className="ml-2 text-gray-700 text-sm">{testimonial.rating}</span>
      </div>
      <div className="flex items-center mt-4">
        <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/150" alt="avatar" />
        <div>
          <div className="text-gray-700 font-bold">{testimonial.name}</div>
          <div className="text-gray-600 text-sm">Customer</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center my-12">
      <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-white my-12">Testimonials</h2>
      <div className="flex items-center justify-center">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
