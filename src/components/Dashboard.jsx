import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./api/data";

const Dashboard = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // Auto Slide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  // Handler for navigation buttons
  const handleIndex = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <Fragment >
      <section id="services" className=" sm:h-[80vh] h-[60vh]  flex flex-col items-center justify-center w-full mx-auto  md:my-20 md:py-10 sm:p-4">
        {/* Title */}
        <div className="text-center sm:mb-12">
          <h2 className="flex items-center justify-center text-3xl sm:text-5xl md:text-7xl font-bold capitalize">
            Our Services
          </h2>
        </div>

        {/* Reviews Slider */}
        <div className="relative mx-auto sm:mt-8 w-full max-w-7xl h-[70vh] flex overflow-hidden text-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "translate-x-full opacity-0";
            if (personIndex === index) {
              position = "translate-x-0 opacity-100";
            } else if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "-translate-x-full opacity-0";
            }

            return (
              <article
                key={id}
                className={`${position} absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out flex flex-col items-center justify-center`}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-[200px] sm:h-[300px] md:h-[1000px] w-auto rounded-2xl object-cover border-4 border-gray-300 shadow-lg mb-6"
                />
                {/* <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{name}</h4>
                <p className="text-sm sm:text-lg text-gray-500 mt-2">{title}</p>
                <p className="text-sm sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto px-4">{quote}</p> */}
              </article>
            );
          })}

          {/* Left Arrow Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-white w-8 h-8 sm:w-10 sm:h-10 grid place-items-center rounded-full transition hover:bg-purple-400"
            onClick={() => handleIndex(index - 1)}
          >
            <FiChevronLeft />
          </button>

          {/* Right Arrow Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-white w-8 h-8 sm:w-10 sm:h-10 grid place-items-center rounded-full transition hover:bg-purple-400"
            onClick={() => handleIndex(index + 1)}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
