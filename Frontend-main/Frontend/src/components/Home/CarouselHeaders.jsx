import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { sliderData } from "./CarouselHeader";

export const CarouselHeaders = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Preload Images
  useEffect(() => {
    sliderData.forEach((slide) => {
      if (slide.desktopImg) {
        const img = new Image();
        img.src = slide.desktopImg;
      }
    });
  }, []);

  // Auto Play Slider
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

  // FIX 3: Swipe gesture / Drag handler
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const currentSlide = sliderData[CurrentIndex];

  return (
    /* FIX 1 & 2: Space issue fix karne ke liye margin zero aur Mobile height (55vh / min-380px) rakhi hai */
    <section className="relative w-full min-h-[300px] h-[45vh] sm:h-[65vh] md:h-[70vh] max-h-[700px] overflow-hidden m-0 p-0 ">
      
      {/* Background Fallback Blur Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-sm opacity-40 transition-all duration-700 pointer-events-none" 
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
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            
            /* FIX 3: Touch Swipe Gestures integration */
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
            style={{ willChange: "transform, opacity" }}
            className={`absolute inset-0 w-full h-full flex flex-col justify-end md:justify-center cursor-grab active:cursor-grabbing select-none ${currentSlide.bgClass}`}
          >
            {/* Background Graphic Image */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none ">
              <img
                src={currentSlide.desktopImg}
                alt={currentSlide.category}
                loading="eager"
                className="w-full h-full object-cover opacity-90 md:opacity-100"
              />
              <div className="absolute inset-0  " />
            </div>

            {/* Content Container Block (Mobile Responsive Padding & Heights) */}
            <div className="relative z-10 w-full flex flex-col justify-end md:justify-center px-4 pb-10 sm:px-8 md:pb-0 md:px-16 text-white max-w-4xl h-full pointer-events-none">
              
              <motion.h1
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-5xl font-bold tracking-tight mb-1 drop-shadow-lg"
              >
                {currentSlide.title}
              </motion.h1>

              {currentSlide.link ? (
                <motion.a
                  href={currentSlide.link}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block hover:underline pointer-events-auto"
                >
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-yellow-300 my-0.5 md:my-2 drop-shadow-md">
                    {currentSlide.category}
                  </h3>
                </motion.a>
              ) : (
                <motion.h3
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-xl md:text-3xl font-bold text-white my-0.5 md:my-2"
                >
                  {currentSlide.category}
                </motion.h3>
              )}

              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xs sm:text-sm md:text-xl text-white/90 mt-1 max-w-lg font-normal md:font-medium drop-shadow-md line-clamp-2 sm:line-clamp-3 md:line-clamp-none"
              >
                {currentSlide.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Arrow Buttons (Mobile view par thode chote aur semi-transparent) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <IoChevronBack className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all focus:outline-none backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <IoChevronForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Navigation Dot Indicators */}
      <div className="absolute bottom-2.5 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 md:gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > CurrentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              CurrentIndex === index ? "w-5 sm:w-6 md:w-8 bg-yellow-300" : "w-1.5 sm:w-2 md:w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};