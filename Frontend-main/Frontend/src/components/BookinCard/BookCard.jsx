import { Link } from "react-router-dom";
import axios from "axios";
import Favourites from "../profile/Favourites";

const BookCard = ({ data, Favourites }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };

  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:5000/api/v1/favourite-book-removed",
      {},
      { headers }
    );
    alert(response.data.message);
  };

    // ...existing code...
    return (
      <div className="bg-white/90 dark:bg-slate-800 rounded-xl p-4 flex flex-col h-full min-w-[10rem] shadow-sm hover:shadow-md transition-shadow duration-200">
        <Link to={`/view-book-details/${data._id}`} className="group">
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 h-[25vh] flex items-center justify-center">
              <img
                src={data.url}
                alt={data.title}
                className="max-h-full object-contain transition-transform duration-300 ease-linear group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.0)_40%,rgba(0,0,0,0.03)_100%)] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_40%,rgba(255,255,255,0.02)_100%)]"></div>
            </div>
  
            <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
              {data.title}
            </h2>
  
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              By <span className="font-medium">{data.author}</span>
            </p>
  
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xl font-bold text-emerald-600">
                ₹{data.discountedPrice}
              </span>
              <span className="line-through text-sm text-gray-400">
                ₹{data.price}
              </span>
              <span className="ml-auto text-xs text-red-500 font-semibold">
                (10% OFF)
              </span>
            </div>
          </div>
        </Link>
  
        {Favourites && (
          <button
            className="mt-4 w-full flex-rows justify-center px-4 py-2 rounded-md bg-yellow-50 border border-yellow-300 text-yellow-800 font-semibold hover:bg-yellow-100 transition-colors"
            onClick={handleRemoveBook}
          >
            Remove from favourite
          </button>
        )}
      </div>
    );
  // ...existing code...
};

export default BookCard;
