import React from "react";
import image from "../../images/main.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-auto  flex flex-col flex-wrap md:flex-row items-center justify-center">
      <div className="w-full md:mb-0 lg:w-3/6 flex-col items-center lg:items-start justify-center">
        <h1
          className="text-4xl font-semibold text-green-700 lg:text-left text-center
        text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-black to-pink-500 animate-gradient"
        >
          Discover Your Next Great Read
        </h1>
        <p className="mt-4 text-zinc-800 font-semibold lg-text-left text-center">
          Your next great read is waiting. From timeless classics to fresh new
          favorites, we’ve got something for every kind of reader. Start
          exploring and let the journey unfold!
        </p>

        <div className="mt-8 mb-5 sm:text-base px-3 flex">
          <div className="relative group rounded-full p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient bg-[length:700%_300%]">
            <Link
              to="/all-books"
              className="block text-yellow-500 text-3xl font-semibold px-8 py-3 bg-white rounded-full group-hover:bg-zinc-800 transition-colors duration-300"
            >
              Browse the Shelf
            </Link>
          </div>
        </div>
      </div>
      <div className="w-auto lg:w-3/6  md:w-4/6 h-auto  md flex items-center object-contain">
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};
export default Hero;
