import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BookCard from "../BookinCard/BookCard";
import Loader from "../LoaderForGrid/Loader";

const Recent_added = () => {
  const [Books, setBooks] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/v1/get-recent-books"
      );
      setBooks(response.data.data);
    };
    fetch();
  }, []);
  return (
    <div className="mt-8 px-4 h-auto">
      <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-500 animate-gradient">
  Recently Added Books
</h4>


      {!Books && (
        <div className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600">
          <Loader />
        </div>
      )}
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-w-[15rem]">
        {Books &&
          Books.map((items, i) => {
            const originalPrice = parseFloat(items.price);
            const discountedPrice = originalPrice - (originalPrice * 10) / 100;
            const discountedPrice1 = Math.round(discountedPrice)
            console.log(items.title, '→ Discounted:', discountedPrice);
            
            return (
                <div key={i}>
              <BookCard data={{...items,discountedPrice:discountedPrice1}} />{" "} 
               
            </div>
            )
})}
      </div>
    </div>
  );
};

export default Recent_added;
