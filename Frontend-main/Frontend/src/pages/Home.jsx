import React from 'react'
import Hero from '../components/Home/Hero';
import  Recent_added  from '../components/Home/Recent_added';

 const Home = () => {
  return (
    <div className="bg-white text-white px-10 py-8">
   <Hero/>
   <Recent_added/>
    </div>
  )
}

export default Home;
