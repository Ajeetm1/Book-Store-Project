import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Crausoul = ({ books }) => {
  console.log(books);
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % books.length);
  };

  const getPosition = (i) => {
    if (i === index) return "center";
    if (i === (index + 1) % books.length) return "right";
    if (i === (index - 1 + books.length) % books.length) return "left";
    return "hidden";
  };
  return (
    <div>
      
      <div className="overflow-hidden whitespace-nowrap border-y border-zinc-200 py-2 bg-gradient-to-r from-transparent via-yellow-200 to-transparent">

      <div className="flex w-max animate-[marquee_15s_linear_infinite]">

        
        <div className="flex gap-8 text-sm font-semibold text-purple-700 px-4">
          <span>🔥<span className="text-red-600 animate-pulse">10% OFF</span> on all books</span>
          <span>📚 New arrivals every week</span>
          <span>🚀 Free delivery above ₹499</span>
        </div>

        <div className="flex gap-8 text-sm font-semibold text-purple-700 px-4">
          <span>🔥<span className="text-red-600 animate-pulse">10% OFF</span> on all books</span>
          <span>📚 New arrivals every week</span>
          <span>🚀 Free delivery above ₹499</span>
        </div>

      </div>
    </div>
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0 -z-10 bg-black/80 backdrop-blur-xl"></div>

        {/* Slides */}
        {books &&
          books.map((book, i) => {
            const position = getPosition(i);

            return (
              <motion.div
                key={i}
                initial={false}
                animate={
                  position === "center"
                    ? { x: 0, scale: 1.1, rotateY: 0, opacity: 1 }
                    : position === "left"
                      ? { x: -250, scale: 0.9, rotateY: 45, opacity: 0.5 }
                      : position === "right"
                        ? { x: 250, scale: 0.9, rotateY: -45, opacity: 0.5 }
                        : { opacity: 0 }
                }
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <div className="w-[220px] h-[320px] rounded-xl overflow-hidden shadow-2xl bg-zinc-900">
                  <img
                    src={book.url}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Info */}
                  {position === "center" && (
                    <div className="absolute bottom-0 w-full p-4 bg-black/60 backdrop-blur-md text-white">
                      <h3 className="font-semibold">{book.title}</h3>
                      <p className="text-sm text-zinc-300">{book.author}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

        {/* Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
        >
          ▶
        </button>
      </div>
      );
    </div>
  );
};

export default Crausoul;
