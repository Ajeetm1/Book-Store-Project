import React, { useEffect } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { sliderData } from "./CarouselHeader";

export const CarouselHeaders = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // preload Image....
  useEffect(() => {
    const firstImg = new Image();
    firstImg.src = sliderData[0].desktopImg;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [CurrentIndex]);

  // left right button...
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
    <section
      className="relative w-screen max-w-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-gray-950"
      style={{ height: "100vh", minHeight: "480px", maxHeight: "730px" }}
    >
      {/* Slider Main Viewport */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={CurrentIndex}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? "100%" : "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ willChange: "transform, opacity" }} // Hardware GPU Acceleration active
            className={`absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between ${currentSlide.bgClass}`}
          >
            {/* Background Graphic Image Layout */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={currentSlide.desktopImg}
                alt={currentSlide.category}
                loading={CurrentIndex === 0 ? "eager" : "lazy"}
                className="hidden md:block w-full h-full object-cover opacity-85"
              />
            
              
            </div>

            {/* Content Container Block */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-16 text-white max-w-4xl">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
              >
                {currentSlide.title}
              </motion.h1>

              {currentSlide.link ? (
                <motion.a
                  href={currentSlide.link}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="inline-block hover:underline"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 my-2 drop-shadow-md">
                    {currentSlide.category}
                  </h3>
                </motion.a>
              ) : (
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-white my-2"
                >
                  {currentSlide.category}
                </motion.h3>
              )}

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-white/90 mt-2 max-w-lg font-medium drop-shadow-sm"
              >
                {currentSlide.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <IoChevronBack className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <IoChevronForward className="w-6 h-6" />
      </button>

      {/* Navigation Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > CurrentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              CurrentIndex === index ? "w-8 bg-yellow-300" : "w-2.5 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
