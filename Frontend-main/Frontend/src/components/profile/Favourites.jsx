import React, { useEffect, useState } from "react";
import BookCard from "../BookinCard/BookCard";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

const Favourites = () => {
  const [FavouriteBooks, setFavrouriteBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
       `${API}/get-favourite-book`,
        { headers }
      );
      setFavrouriteBooks(response.data.data);
      
    };
    fetch();
  }, [FavouriteBooks]);
  return (
    <>
   
      {FavouriteBooks && FavouriteBooks.length === 0 && (<div className="text-5xl font-semibold flex items-center justify-center w-full bg-pink-100">No Favourite Books</div>
    )}
     <div className=" gap-4  grid lg:grid-cols-4 md:grid-cols-3 md:ml-20 sm:grid-cols-2">
      {FavouriteBooks &&
        FavouriteBooks.map((items, i) => {
           const originalPrice = parseFloat(items.price);
            const discountedPrice = originalPrice - (originalPrice * 10) / 100;
            const discountedPrice1 = Math.round(discountedPrice)
            console.log(items.title, '→ Discounted:', discountedPrice);
         return(
           <div key={i}>
            <BookCard data={{...items,discountedPrice:discountedPrice1}} Favourites = {true} />
            
          </div>
         );
        })}
    </div>
    </>
  );
};

export default Favourites;
