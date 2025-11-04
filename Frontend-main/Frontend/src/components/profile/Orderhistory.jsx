import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../LoaderForGrid/Loader";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
const API =import.meta.env.VITE_API_BASE_URL;

const Orderhistory = () => {
  const [Orderhistory, setOrderHistory] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const Response = await axios.get(
       `${API}/get-order-history`,
        { headers }
      );
      console.log(Response.data.data);
      setOrderHistory(Response.data.data);
    };
    fetch();
  }, []);

  const removeBook = async(bookid)=>{
    try{
        const response = await axios.put(`${API}/remove-cancel-order/${bookid}`,{},{headers}      
    );
    alert(response.data.message);
     setOrderHistory((prev) => prev.filter((order) => order._id !== bookid));
    }catch(error){
       console.log('Failed to remove book',error);
    }
  }

  return (
    <div className="bg-white px-12 h-auto pb-4">
      {!Orderhistory && (
        <div className="flex items-center justify-center h-[100%]">
          <Loader />
        </div>
      )}

      {Orderhistory && Orderhistory.length === 0 && (
        <div className="h-[80vh] p-4 text-zinc-200">
          <div className="h-[100%] flex items-center justify-center flex-col">
            <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-900 mb-8">
              No Order History
            </h1>
            <img
              src="/empty.cart.png"
              alt="empty cart"
              className="lg:h-[20vh] mb-8"
            />
          </div>
        </div>
      )}

      {Orderhistory && Orderhistory.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-200">
          <h1 className="text-3xl lg:text-3xl font-semibold text-zinc-900 mb-8">
            Your order History
          </h1>
          <div className="mt-4 bg-zinc-700 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>

            <div className="w-[22%]">
              <h1 className="">Books</h1>
            </div>

            <div className="w-[45%]">
              <h1 className="">Description</h1>
            </div>

            <div className="w-[9%]">
              <h1 className="">Price</h1>
            </div>

            <div className="w-[19%]">
              <h1 className="">Status</h1>
            </div>

            <div className="w-none md:w-[5%] hidden md:block">
              <h1 className="">Mode</h1>
            </div>
          </div>
          {Orderhistory.map((items, i) => {
            const originalPrice = parseFloat(items.book.price);
            const discountedPrice = originalPrice - (originalPrice * 10) / 100;
            const discountedPrice1 = Math.round(discountedPrice)
            console.log(items.title, '→ Discounted:');
            return( <div
              key={items._id}
              className="bg-zinc-800 w-full rounded py-2 px-2 flex gap-4 hover:bg-zinc-700 hover:cursor-pointer"
            >
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[22%]">
                <Link
                  to={`/view-book-details/${items.book._id}`}
                  className="hover:text-blue-300"
                >
                  {items.book.title}
                </Link>
              </div>
              <div className="w-[45%]">
                <h1 className="">
                  {items.book?.description
                    ? `${items.book.description.slice(0, 40)}...`
                    : "No description available"}
                </h1>
              </div>

              <div className="w-[9%]">
               
                  <span className="text-green-400">₹{discountedPrice1}</span>
                   <span className="line-through text-zinc-500 ml-1">₹{items.book.price}</span>
              </div>

              <div className="w-[16%]">
                <h1 className="font-semibold text-green-400">
                  {items.status === "Order placed" ? (
                    <div className="text-yellow-300">{items.status}</div>
                  ) : items.status === "Canceled" ? (
                    <div className="text-red-500 text-justify">
                      {items.status}
                      <button className="bg-red-400 h-4 hover:bg-red-600 ml-1 text-black "onClick={()=>removeBook(items._id)}>
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  ) : (
                    items.status
                  )}
                </h1>
              </div>

              <div className="w-none md:w-[5%] hidden md:block">
                <h1 className="text-sm text-zinc-400">COD</h1>
              </div>
            </div>)
           
          })}
        </div>
      )}
    </div>
  );
};

export default Orderhistory;
