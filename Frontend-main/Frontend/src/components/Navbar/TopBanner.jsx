import React, { useEffect, useState } from "react";
import discountlogo from "../../images/discount.gif";
import salelogo from '../../images/big-sale.gif'
import Deliverylogo from '../../images/delivery-truck.gif'

export const TopBanner = () => {
  const offers = [
    {
      text: " Mega Sale: Get 50% OFF on all Fiction Books!",
      icon: 
        <img
          className="w-10 h-10 inline-block align-middle"
          src={discountlogo}
          alt="discount"
        />     
    },

    { text: " Free Delivery on orders above ₹499!",
        icon: 
        <img
          className="w-10 h-10 inline-block align-middle"
          src={Deliverylogo}
          alt="discount"
        />    
     },

    {
      text: " Buy 2 Get 1 Free on Best Sellers!",
      icon: 
        <img
          className="w-10 h-10 inline-block align-middle"
          src={salelogo}
          alt="discount"
        />      
    },
  ];

  const [CurrentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    },2000);
    return () => clearInterval(timer);
  }, [offers.length]);


  const currnetOffer=offers[CurrentIndex]
  return (
    <div className="w-full bg-white text-center text-xs md:text-xl h-10">
      <div className="flex items-center justify-center gap-2"></div>

      {currnetOffer.icon}
      <span>{offers[CurrentIndex].text}</span>
    </div>
  );
};
