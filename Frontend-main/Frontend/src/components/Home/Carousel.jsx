import React from "react";
import { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";

const Carousel = ({ books }) => {
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

  const ANIMATIONS = {
    center: {
      x: 0,
      scale: 1.1,
      rotateY: 0,
      opacity: 1,
    },
    left: {
      x: -250,
      scale: 0.9,
      rotateY: 45,
      opacity: 0.5,
    },
    right: {
      x: 250,
      scale: 0.9,
      rotateY: -45,
      opacity: 0.5,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <div>
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-zinc-200/80 py-5 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 bg-[length:200%_200%] animate-gradient-slow shadow-sm">
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-orange-600 py-5 bg-orange-200 ">
          <div
            className="w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex w-max flex-nowrap animate-marquee hover:[animation-play-state:paused] gap-8 py-1">
              <div className="flex shrink-0 items-center gap-8 text-sm font-bold">
                {/* Card 1 */}
                <div className="flex shrink-0 items-center gap-3 bg-blue-600 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <span className="text-base">🔥</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">
                      Flash Deal
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      <span className="text-pink-500 font-extrabold">
                        10% OFF
                      </span>{" "}
                      on all books
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex shrink-0 items-center gap-3 bg-pink-500 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-cyan-500/30 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <span className="text-base">📚</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white text-xs font-black tracking-wider uppercase">
                      Weekly Drops
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      New arrivals every week
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex shrink-0 items-center gap-3 bg-purple-600 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-emerald-500/30 hover:border-emerald-500/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <span className="text-base">🚀</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white text-xs font-black tracking-wider uppercase">
                      Free Shipping
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      Free delivery above ₹499
                    </span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex shrink-0 items-center gap-3 bg-yellow-600 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-amber-500/30 hover:border-amber-500/80 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <span className="text-base">⚡</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">
                      Limited Stock
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      Only a few copies left
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex shrink-0 items-center gap-8 text-sm font-bold"
                aria-hidden="true"
              >
                {/* Card 1 */}
                <div className="flex shrink-0 items-center gap-3 bg-green-800 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <span className="text-base">🔥</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">
                      Flash Deal
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      <span className="text-white font-extrabold">10% OFF</span>{" "}
                      on all books
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex shrink-0 items-center gap-3 bg-red-700 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-cyan-500/30 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <span className="text-base">📚</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white text-xs font-black tracking-wider uppercase">
                      Weekly Drops
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      New arrivals every week
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex shrink-0 items-center gap-3 bg-orange-500 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-emerald-500/30 hover:border-emerald-500/80 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <span className="text-base">🚀</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white text-xs font-black tracking-wider uppercase">
                      Free Shipping
                    </span>
                    <span className="text-zinc-200 text-xs font-semibold">
                      Free delivery above ₹499
                    </span>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex shrink-0 items-center gap-3 bg-zinc-900/90 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-amber-500/30 hover:border-amber-500/80 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <span className="text-base">⚡</span>
                  <div className="flex flex-col items-start leading-none gap-1">
                    <span className="text-white animate-pulse text-xs font-black tracking-wider uppercase">
                      Limited Stock
                    </span>
                    <span className="text-white text-xs font-semibold">
                      Only a few copies left
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Wrapper */}
<div className="w-full flex flex-col items-center mt-6 px-4">

  {/* 1. Animated Header Section (Top & Center) */}
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-center mb-4 z-20"
  >
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tight drop-shadow-md">
      🌙 Late Night Page Turners
    </h1>
    <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
      Handpicked books for your late-night reading sessions
    </p>
  </motion.div>

  {/* 2. Carousel Viewport */}
  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] flex items-center justify-center overflow-hidden rounded-2xl">
    
    {/* Dark Glass Background */}
    <div className="absolute inset-0 -z-10 bg-zinc-950/80 border border-white/5 rounded-2xl"></div>

    {/* Slides */}
    {books &&
      books.map((book, i) => {
        const position = getPosition(i);

        return (
          <motion.div
            key={book._id}
            initial={false}
            animate={ANIMATIONS[position]}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            className="absolute transform-gpu"
          >
            <div className="relative w-[130px] h-[180px] sm:w-[170px] sm:h-[230px] md:w-[200px] md:h-[260px] lg:w-[220px] lg:h-[280px] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 group">
              <img
                src={book.url}
                alt={book.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {/* Info Overlay (Lag-Free Gradient) */}
              {position === "center" && (
                <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 md:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent text-white transition-opacity duration-200">
                  <h3 className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2 leading-snug break-words">
                    {book.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 mt-0.5 truncate">
                    {book.author}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}

    {/* Navigation Buttons */}
    <button
      onClick={prev}
      aria-label="Previous Book"
      className="absolute left-3 sm:left-5 z-20 text-white bg-black/40 hover:bg-black/70 p-2.5 sm:p-3 rounded-full border border-white/10 transition-all active:scale-95"
    >
      ◀
    </button>

    <button
      onClick={next}
      aria-label="Next Book"
      className="absolute right-3 sm:right-5 z-20 text-white bg-black/40 hover:bg-black/70 p-2.5 sm:p-3 rounded-full border border-white/10 transition-all active:scale-95"
    >
      ▶
    </button>
  </div>
</div>
    </div>
  );
};

export default React.memo(Carousel);
