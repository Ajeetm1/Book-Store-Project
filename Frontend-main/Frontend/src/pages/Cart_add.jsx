import React, { useState, useEffect } from 'react';
import axios from "axios";
import Loader from "../components/LoaderForGrid/Loader"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import cart_empty from '../images/cart_empty.png';
const API = import.meta.env.VITE_API_BASE_URL;

const Cart = () => {
  const Navigate = useNavigate();
  const [cart,setCart] = useState([]);
  const [Total,setTotal] = useState(); 
  const [Total1,setTotal1] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {      
        const Response = await axios.get(`${API}/get-user-cart`, {headers});
        // console.log(Response.data.data)
        setCart(Response.data.data);
       
      
    };
    fetch();
  }, []);
  const deleteItem = async(bookid)=>{
    const response = await axios.put(`${API}/remove-to-cart/${bookid}`,{},{headers}      
    );
    alert(response.data.message);
  }
  useEffect(() => {
  if (cart && cart.length > 0) {
    let total = 0;
    let total1 = 0;
    cart.map((items) => {
            const originalPrice = parseFloat(items.price);
            const discountedPrice = originalPrice - (originalPrice * 10) / 100;
            const discountedPrice1 = Math.round(discountedPrice)
            total += Number(items.price); 
            total1 += Number(discountedPrice1);// make sure price is a number
    });
    setTotal(total);
    setTotal1(total1)
  } else {
    setTotal(0); // handle case where cart is empty
  }
}, [cart]);

const PlaceOrder = async () => { 
  try  {   
        const Response = await axios.post(`${API}/place-order`, {orders:cart},{headers});
        alert(Response.data.message);
        Navigate("/profile/orderHistory");
  } catch(error){
    console.log(error)
  }
}
  return (
    <div className='bg-white px-12 h-[screen] py-6'>
      {!cart && <Loader/>} 
      {cart && cart.length === 0  && (
        <div className="h-screen">
          <div className="h-[100%] flex items-center justify-center flex-col">
            <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">
              Empty Cart
            </h1>
            <img
              src={cart_empty}
              alt="empty cart"
              className="lg:h-[50vh] bg-black bg-transparent text-green-500"
            />
          </div>
        </div>
      )}
      {cart && cart.length > 0 &&(
       
        <>
          <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
           
          </h1>

          {cart.map((items, i) => {
             const originalPrice = parseFloat(items.price);
            const discountedPrice = originalPrice - (originalPrice * 10) / 100;
            const discountedPrice1 = Math.round(discountedPrice)
            return(
              <div
              className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-600 justify-between items-center"
              key={i}
            >
              <img
                src={items.url}
                alt={items.title}
                className="h-[25vh] md:h-[25vh] object-cover hover:scale-125 hover:border-2 hover:border-blue-100 transition-transform duration-300 ease-linear "
              />

              <div className="w-full md:w-auto">
                <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">
                  {items.title}
                </h1>
                <p className="text-normal text-zinc-400 mt-2 hidden lg:block">
                  {items.description.slice(0, 100)}...
                </p>

                <p className="text-normal text-zinc-400 mt-2 hidden md:block lg:hidden">
                  {items.description.slice(0, 60)}...
                </p>

                <p className="text-normal text-zinc-400 mt-2 block md:hidden">
                  {items.description.slice(0, 100)}...
                </p>

                <div className="flex mt-4 w-full md:w-auto items-center justify-start">
                   <span className='text-white text-3xl'>₹{discountedPrice1}</span>
                  <span className="text-zinc-400 text-3xl line-through ml-1 ">
                    ₹{items.price}
                  </span>
                  <span className="text-2xl ml-1 text-red-500 ">
                (10% OFF)
              </span>
                 
                  <button
                    className="bg-red-100 text-red-500 border hover:border-2 border-red-500 rounded p-2 ms-12"
                    onClick={() => deleteItem(items._id)} 
                  >
                    
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>
            </div>
            )
          })}
        </>
      )}
       
      {cart && cart.length >0 && (
        <div className='mt-4 w-full flex items-center justify-end mb-8'>
          <div className='p-4 bg-yellow-200 rounded'>
            <h1 className='text-3xl text-black font-semibold'>Total Amount</h1>
            <div className='mt-3 flex items-center justify-between text-xl text-zinc-700'>
              <h2 className='font-semibold text-blue-700'>{cart.length} books price:</h2>
               <span className='font-semibold text-black ml-1'>₹{Total1}</span>
              <span className='font-semibold line-through ml-2 text-zinc-500'>₹{Total}</span>
              
            </div>
            <div className='w-[100%] mt-3'>
              <button className='bg-green-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-green-400 hover:text-white'onClick={PlaceOrder}>
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
