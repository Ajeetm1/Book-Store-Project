import React, { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero';
import axios from 'axios';
import  Recent_added  from '../components/Home/Recent_added';
import  Crausoul  from '../components/Home/Crausoul';
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
    <div className="bg-white text-white px-10 py-8">
   <Hero/>
   <Crausoul books={books}/>
   <Recent_added books={books}/>
    </div>
  )
}

export default Home;
