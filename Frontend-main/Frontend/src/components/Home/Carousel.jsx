import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ books }) => {
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
     <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-zinc-200/80 py-5 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 bg-[length:200%_200%] animate-gradient-slow shadow-sm">
  
  {/* Ultra Smooth Fade Masking - Corners par clean blending ke liye */}
 <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-purple-500/30 py-5 bg-white ">
  
  {/* Ultra Smooth Fade Masking */}
  <div 
    className="w-full overflow-hidden"
    style={{
      maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
    }}
  >
    {/* Marquee Track - Isme humne 'flex' aur seamless alignment lagaya hai */}
    <div className="flex w-max flex-nowrap animate-marquee hover:[animation-play-state:paused] gap-8 py-1">
      
      {/* ==================== TRACK 1 ==================== */}
      <div className="flex shrink-0 items-center gap-8 text-sm font-bold">
        
        {/* Card 1 */}
        <div className="flex shrink-0 items-center gap-3 bg-blue-600 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
          <span className="text-base">🔥</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">Flash Deal</span>
            <span className="text-zinc-200 text-xs font-semibold"><span className="text-pink-500 font-extrabold">10% OFF</span> on all books</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex shrink-0 items-center gap-3 bg-pink-500 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-cyan-500/30 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
          <span className="text-base">📚</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white text-xs font-black tracking-wider uppercase">Weekly Drops</span>
            <span className="text-zinc-200 text-xs font-semibold">New arrivals every week</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex shrink-0 items-center gap-3 bg-purple-600 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-emerald-500/30 hover:border-emerald-500/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
          <span className="text-base">🚀</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white text-xs font-black tracking-wider uppercase">Free Shipping</span>
            <span className="text-zinc-200 text-xs font-semibold">Free delivery above ₹499</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex shrink-0 items-center gap-3 bg-yellow-600 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-amber-500/30 hover:border-amber-500/80 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
          <span className="text-base">⚡</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">Limited Stock</span>
            <span className="text-zinc-200 text-xs font-semibold">Only a few copies left</span>
          </div>
        </div>

      </div>

      {/* ==================== TRACK 2 (EXACT SAME GAP & CARDS) ==================== */}
      <div className="flex shrink-0 items-center gap-8 text-sm font-bold" aria-hidden="true">
        
        {/* Card 1 */}
        <div className="flex shrink-0 items-center gap-3 bg-green-800 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
          <span className="text-base">🔥</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">Flash Deal</span>
            <span className="text-zinc-200 text-xs font-semibold"><span className="text-white font-extrabold">10% OFF</span> on all books</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex shrink-0 items-center gap-3 bg-red-700 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-cyan-500/30 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
          <span className="text-base">📚</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white text-xs font-black tracking-wider uppercase">Weekly Drops</span>
            <span className="text-zinc-200 text-xs font-semibold">New arrivals every week</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex shrink-0 items-center gap-3 bg-orange-500 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-emerald-500/30 hover:border-emerald-500/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
          <span className="text-base">🚀</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white text-xs font-black tracking-wider uppercase">Free Shipping</span>
            <span className="text-zinc-200 text-xs font-semibold">Free delivery above ₹499</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex shrink-0 items-center gap-3 bg-zinc-900/90 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-amber-500/30 hover:border-amber-500/80 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
          <span className="text-base">⚡</span>
          <div className="flex flex-col items-start leading-none gap-1">
            <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">Limited Stock</span>
            <span className="text-white text-xs font-semibold">Only a few copies left</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>
</div>
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
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
    </div>
  );
};

export default Carousel;
