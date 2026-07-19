import React, { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero';
import axios from 'axios';
import  Recent_added  from '../components/Home/Recent_added';
import Carousel from '../components/Home/Carousel';
import { CarouselHeaders } from '../components/Home/CarouselHeaders';
const API = import.meta.env.VITE_API_BASE_URL;
console.log(API)

 const Home = () => {
  const [books,setbooks] = useState([])
  console.log(books)
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API}/get-recent-books`);
      setbooks(response.data.data);
      console.log(response.data.data)
    };
    fetch();
  }, []);
  return (
    <div className="bg-white text-white px-0 py-0">
    <CarouselHeaders/>
   <Hero/>
   <Carousel books={books}/>
   <Recent_added books={books}/>
    </div>
  )
}

export default Home;
