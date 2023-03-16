import { useState } from "react";
<TestimonialCarousel
  testimonials={[
    {
      name: "John Doe",
      position: "CEO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis sit amet libero tincidunt aliquam. Morbi vitae semper mi, vel consequat magna. Sed tristique tellus eu ultricies auctor.",
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      text: "Vestibulum faucibus odio eget orci convallis, vel lacinia nisi sollicitudin. Curabitur malesuada bibendum arcu, eget fringilla felis pretium nec. Aliquam eu nibh sed ex tristique ullamcorper.",
      avatarUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Bob Johnson",
      position: "Developer",
      text: "Phasellus vel mauris accumsan, bibendum mauris nec, iaculis leo. Nullam at mauris dui. Aenean maximus neque eget turpis aliqu",
      avatarUrl: "https://via.placeholder.com/150"
    }
  ]}
  />
const TestimonialCarousel = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
  };

  const handleNext = () => {
    setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
  };



  return (
    <div className="max-w-lg mx-auto">
      <div className="relative">
        <div className="absolute inset-0 bg-gray-900 rounded-lg shadow-lg transform transition-all duration-300 scale-95" />
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform transition-all duration-300 scale-100 p-6">
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-800">{testimonials[currentTestimonial].text}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={testimonials[currentTestimonial].avatarUrl}
              alt={testimonials[currentTestimonial].name}
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentTestimonial].position}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-900 text-white rounded-lg py-2 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-900 text-white rounded-lg py-2 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
