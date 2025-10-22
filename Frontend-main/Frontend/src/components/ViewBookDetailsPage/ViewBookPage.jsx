import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../LoaderForGrid/Loader";
import { GrLanguage } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const ViewBookPage = () => {
  const { id } = useParams();
  const naviagate = useNavigate();
  const [Books, setBooks] = useState();
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  // console.log(isloggedIn);
  // console.log(role);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/get-book-by-id/${id}`
      );
      // console.log(response.data.data);
      setBooks(response.data.data);
    };
    fetch();
  }, []);
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,bookid:id,
   
  }
  const handleFavourite = async ()=>{
    const response = await axios.put("http://localhost:5000/api/v1/favourite-book",{},{headers}

    )
    alert(response.data.message);
  };
  // cart...
  const handleCart = async ()=>{
    const response= await axios.put("http://localhost:5000/api/v1/add-to-cart",{},{headers})
    alert(response.data.message);
  };
  if (!Books) {
    return (
      <div className="p-8 text-gray-700 flex items-center justify-center">
        Loading..
        <Loader />
      </div>
    );
  }
  const deletebook = async ()=>{
    if(window.confirm('Are you sure Delete this book!')){
       const response = await axios.delete(`http://localhost:5000/api/v1/delete-books`,{headers})
   console.log(response)
   naviagate("/all-books")
    }
   
  }
  return (
    <div className="px-4 md:px-12 py-8 bg-yellow-100 lg:flex-row flex flex-col gap-6 items-start">
      <div className="lg:w-3/6 w-full"> 
        <div className="flex flex-col lg:flex-row   justify-around  p-16 rounded bg-gradient-to-r from-black via-gray-700 to-purple-500 animate-gradient-slow bg-[length:200%_200%]  ">
          <img
            src={Books.url}
            alt="/"
            className="h[40vh] md:h[40vh] lg:h-[60vh] rounded md:p-20 lg:p-2 hover:scale-95 ease-linear transform transition"
          />

          {/* for user  */}
           {isloggedIn === true &&role=== "user" && (
            <div className="flex flex-col md:flex-row items-center justify-between lg:justify-start lg:flex-col mt-4 lg:mt-0">
              <button className="bg-purple-500 text-3xl p-1 mb-4 rounded lg:rounded-full items-center justify-center"onClick={handleFavourite}>
                <FcLike />
                <span className="ms-4 block lg:hidden text-black font-semibold">
                  Favrouites
                </span>
              </button>
              <button className="bg-blue-300 md:mt-0 mt-2 text-3xl p-2  rounded lg:rounded-full text-yellow-300 items-center justify center"onClick={handleCart}>
                <FaCartPlus />
                <span className="ms-4 block lg:hidden text-black font-semibold">
                  Add to cart
                </span>
              </button>
            </div>
          )}

          {/* for admin */}
          {isloggedIn === true &&role === "admin" && (
            <div className="flex flex-col md:flex-row items-center justify-between lg:justify-start lg:flex-col mt-4 lg:mt-0">
              <Link to={`/updateBook/${id}`} className="bg-purple-300 text-3xl p-2 rounded lg:rounded-full items-center justify-center hover:text-blue-400 hover:scale-95">
               <FaEdit />
                <span className="ms-4 block lg:hidden text-black font-semibold">
                  Edit
                </span>
              </Link>
              <button className="bg-blue-300 text-3xl p-2 md:mt-2 mt-2 rounded lg:rounded-full text-yellow-300 items-center justify center hover:text-red-400 hover:scale-95"onClick={deletebook}>
              <AiFillDelete />
                <span className="ms-4 block lg:hidden text-black font-semibold">
                  Delete
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-2 w-3/6 lg:flex lg:flex-wrap ">
        <h1 className="text-black text-4xl font-semibold ">{Books.title}</h1>
        <p className="text-blue-600 mt-2 p-3 font-semibold  ">by {Books.author} <span className="text-black">(Author)</span> </p>
        <p className="text-zinc-500 mt-4 text-xl font-sans text-justify  w-[80vw]  ">{Books.description}</p>
        <p className="flex mt-4 items-ceter justify-start text-zinc-800">
          <GrLanguage className="me-2 mt-1" />
          {Books.language}
        </p>
        <p className="text-black-500 font-bold mt-3 text-xl ml-auto">
          Price: {Books.price}$
        </p>
      </div>
    </div>
  );
};

export default ViewBookPage;
