import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { sliderData } from "./CarouselHeader";

export const CarouselHeaders = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  useEffect(() => {
    sliderData.forEach((slide) => {
      if (slide.desktopImg) {
        const img = new Image();
        img.src = slide.desktopImg;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [CurrentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentSlide = sliderData[CurrentIndex];

  return (
   
    <section className="relative w-full min-h-[500px] h-[85vh] md:h-screen max-h-[750px] overflow-hidden ">
      
     
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-sm opacity-40 transition-all duration-700" 
        style={{ backgroundImage: `url(${currentSlide.desktopImg})` }}
      />

      <div className="relative w-full h-full z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={CurrentIndex}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? "100%" : "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: "transform, opacity" }}
            className={`absolute inset-0 w-full h-full flex flex-col justify-end md:justify-center ${currentSlide.bgClass}`}
          >
 
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={currentSlide.desktopImg}
                alt={currentSlide.category}
                loading="eager"
                className="w-full h-full object-cover opacity-75 md:opacity-85"
              />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-black/10" />
            </div>

        
            <div className="relative z-10 w-full flex flex-col justify-end md:justify-center px-6 pb-16 md:pb-0 md:px-16 text-white max-w-4xl h-full">
              
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            
                className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-1 md:mb-2 drop-shadow-lg"
              >
                {currentSlide.title}
              </motion.h1>

              {currentSlide.link ? (
                <motion.a
                  href={currentSlide.link}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block hover:underline"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 my-1 md:my-2 drop-shadow-md">
                    {currentSlide.category}
                  </h3>
                </motion.a>
              ) : (
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-white my-1 md:my-2"
                >
                  {currentSlide.category}
                </motion.h3>
              )}

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
             
                className="text-sm sm:text-base md:text-xl text-white/90 mt-1 md:mt-2 max-w-lg font-normal md:font-medium drop-shadow-md line-clamp-3 md:line-clamp-none"
              >
                {currentSlide.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

     
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <IoChevronBack className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <IoChevronForward className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* for Navigation Dot Indicators................ */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > CurrentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              CurrentIndex === index ? "w-6 md:w-8 bg-yellow-300" : "w-2 md:w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};