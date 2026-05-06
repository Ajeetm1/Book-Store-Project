import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Motion_framer } from "./Motion_framer";
import BookCard from "../BookinCard/BookCard";
import Loader from "../LoaderForGrid/Loader";


const Recent_added = ({books}) => {
  console.log("hello")
  
 
  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };
  
  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

 
  return (
    <section className="relative mt-16 px-6 py-10 overflow-hidden">

  
  <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-500/20 blur-3xl rounded-full"></div>

  
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between"
  >
    <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight">
      Recently Added
      <span className="block text-sm font-normal text-zinc-500 mt-1">
        Fresh arrivals curated for you
      </span>
    </h2>

    
    <div className="hidden md:block w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent mt-4 md:mt-0"></div>
  </motion.div>

  
  {!books && (
    <div className="flex justify-center py-10">
      <div className="w-8 h-8 animate-spin text-zinc-400">
        <Loader />
      </div>
    </div>
  )}


  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
  >
    {books &&
      books.map((items, i) => {
        const originalPrice = parseFloat(items.price);
        const discountedPrice =
          originalPrice - (originalPrice * 10) / 100;

        return (
          <motion.div key={i} variants={item}>
            <Motion_framer>
              <div className="group rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <BookCard
                  data={{
                    ...items,
                    discountedPrice: Math.round(discountedPrice),
                  }}
                />
              </div>
            </Motion_framer>
          </motion.div>
        );
      })}
  </motion.div>

</section>
  );
};

export default Recent_added;
