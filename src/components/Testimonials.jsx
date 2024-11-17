import React, { Fragment, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data2 from "./api/data2";

const Dashboard = () => {
  const [people, setPeople] = useState(data2);
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
      <section className="h-[80vh] flex flex-col items-center justify-center w-full mx-auto py-10 xl:py-20  sm:p-4 ">
        {/* Title */}
        <div className="text-center">
          <h2 className="flex items-center justify-center text-3xl sm:text-5xl  font-bold capitalize">
             
            Our Clients
          </h2>
        </div>

        {/* Reviews Slider */}
        <div className="relative mx-auto w-full max-w-3xl h-[100vh] flex overflow-hidden text-center ">
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
                className={`${position} absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out flex flex-col items-center justify-center `}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-[150px] h-[150px] rounded-full object-cover border-4 border-gray-300 shadow-lg mx-auto mb-4"
                />
                <h4 className="uppercase text-purple-400 mb-2">{name}</h4>
                <p className="capitalize text-lg text-gray-600">{title}</p>
                <p className="mt-6 max-w-2xl mx-auto text-gray-500">{quote}</p>
                <FaQuoteRight className="text-purple-400 text-4xl mt-4" />
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
