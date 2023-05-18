import React, { useState} from "react";
import Hero from "../Components/Hero/Hero";
import projData from "../Components/Cards/projectCardData";
import CreateProjCard from "../Components/Cards/createProjectCards";
import TestimonialCarousel from "../Components/Carousel/HeroCarousal";

const Homepage = () => {
  const [cardsToShow, setCardsToShow] = useState(6); // state to keep track of number of cards to show

  const handleShowMore = () => {
    setCardsToShow(cardsToShow + 6); // increase number of cards to show by 6 on click of "Show more" button
  };
  const projCards = projData();
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="mx-auto text-center flex flex-col justify-center text-white px-8">
        <h1 className="md:text-6xl text-5xl font-bold md:py-6 pb-12">
          Our Projects
        </h1>
      </div>
      <div className="mx-24 grid md:grid-cols-3 gap-8 ">
        {projCards.slice(0, cardsToShow).map((project) => (
          <CreateProjCard
            image={project.image}
            title={project.title}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
      {cardsToShow < projCards.length && (
        <button
          className="flex justify-center max-w-sm p-12 mx-auto m-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
          onClick={handleShowMore}
        >
          More Projects
        </button>
      )}
      <div className="hidden">
        <div className="text-center container mx-auto px-24">
          <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-white my-8 ">
            Testimonials
          </h2>
          <TestimonialCarousel />
        </div>
      </div>
    </>
  );
};

export default Homepage;
