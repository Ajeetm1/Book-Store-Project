import React from 'react'
import Loader from '../components/LoaderForGrid/Loader';
import BookCard from '../components/BookinCard/BookCard';
import axios from 'axios';
import { useState,useEffect } from 'react';



 const Allbooks = () => {

   const [Books, setBooks] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/get-all-books"
      );
      setBooks(response.data.data);
    };
    fetch();
  }, []);
  return (
    
    <div className='mt-8 h-auto py-6 px-6'>
       <h3 className="text-5xl text-black font-semibold bg-gradient-to-tr from-yellow-500 via-white to-blue-600 animate-gradient p-2 ">AllBook Are Here</h3>
      {!Books && (
        <div className='w-full h-screen flex items-center justify-center'>
      <Loader/>{" "}
      </div>
      )}
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-w-[15rem] bg-green-400 p-2">
       {Books &&
  Books.map((items, i) => {
    const originalPrice = parseFloat(items.price);
    const discountedPrice = originalPrice - (originalPrice * 10) / 100;
    console.log(items.title, '→ Discounted:', discountedPrice);

    return (
      <div className='min-w-[15rem]' key={i}>
        <BookCard data={{ ...items, discountedPrice }} />
      </div>
    );
  })}
      </div>
      Allbooks</div>
  )
} 
export default Allbooks;
