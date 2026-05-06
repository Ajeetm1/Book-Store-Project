import { Link } from "react-router-dom";
import axios from "axios";
import Favourites from "../profile/Favourites";
const API =import.meta.env.VITE_API_BASE_URL;
const BookCard = ({ data, Favourites }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };

  const handleRemoveBook = async () => {
    const response = await axios.put(
     `${API}/favourite-book-removed`,
      {},
      { headers }
    );
    alert(response.data.message);
  };

    
    return (
      <div className="group bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md 
rounded-2xl p-4 flex flex-col h-full min-w-[10rem] 
shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

  <Link to={`/view-book-details/${data._id}`} className="flex flex-col">

    
    <div className="relative overflow-hidden rounded-lg 
    bg-gradient-to-br from-indigo-50 to-purple-200 
    dark:from-zinc-800 dark:to-zinc-900 
    h-[25vh] flex items-center justify-center">

      <img
        src={data.url}
        alt={data.title}
        className="max-h-full object-contain 
        transition-transform duration-500 group-hover:scale-105"
      />

      
      <div className="absolute inset-0 pointer-events-none 
      bg-gradient-to-t from-black/5 to-transparent"></div>
    </div>

    
    <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100 line-clamp-1">
      {data.title}
    </h2>

    
    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
      {data.author}
    </p>

    
    <div className="mt-3 flex items-center gap-2">
      <span className="text-lg font-semibold text-indigo-600">
        ₹{data.discountedPrice}
      </span>

      <span className="line-through text-sm text-zinc-400">
        ₹{data.price}
      </span>

     <span
  className="ml-auto text-xs font-medium text-red-600 bg-green-400 px-2 py-0.5 rounded
  transition duration-300 animate-pulse"
>
  10% OFF
</span>
    </div>

  </Link>

  
  {Favourites && (
    <button
      className="mt-4 w-full flex justify-center px-4 py-2 rounded-lg 
      bg-indigo-600 text-white font-medium 
      hover:bg-indigo-700 transition"
      onClick={handleRemoveBook}
    >
      Remove from Favourite
    </button>
  )}

  
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
  transition duration-500 bg-gradient-to-br from-transparent via-indigo-100/30 to-transparent pointer-events-none"></div>

</div>
    );

};

export default BookCard;
