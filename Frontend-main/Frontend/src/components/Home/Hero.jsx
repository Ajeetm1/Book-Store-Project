import React from "react";
import image from "../../images/main.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  return (
     <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6">

      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>  
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-black to-pink-500 bg-clip-text text-transparent animate-[gradient_6s_linear_infinite]">
          Discover Your Next Great Read
        </h1>

        <p className="mt-6 text-zinc-700 font-medium max-w-md leading-relaxed">
          Your next great read is waiting. From timeless classics to fresh new
          favorites, we’ve got something for every kind of reader.
        </p>

        
        <div className="mt-10">
          <Link
            to="/all-books"
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 500);
            }}
            className={`relative inline-block px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 
            ${clicked ? "scale-90" : "scale-100"}
            bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 text-white 
            hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40`}
          >
            <span className="relative z-10">Browse the Shelf</span>

            
            <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition duration-300"></span>
          </Link>
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex justify-center mt-10 md:mt-0 z-10">

        <div className="relative group">

          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500 rounded-xl"></div>

          
          <img
            src={image}
            alt="books"
            className="relative w-[300px] md:w-[400px] rounded-xl transition-all duration-500 
            group-hover:scale-110 group-hover:rotate-1 shadow-xl"
          />

          
          <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-5 -right-5 w-6 h-6 bg-purple-500 rounded-full animate-ping"></div>

        </div>
      </div>
    </div>
  );
};
export default Hero;
