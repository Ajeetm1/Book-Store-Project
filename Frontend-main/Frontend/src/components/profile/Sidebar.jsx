import React from "react";
import read from "../../images/main.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = ({ data }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const role = useSelector((state) => state.auth.role);


  return (
    <>
    <div className="bg-purple-400 p-2  rounded flex flex-col items-center justify-center  lg:h-[80vh] md:h-[90vh] w-full  min-w-[13rem]   top-20  left-20 sticky z-20 md:w-3">
      <div className=" flex items-center flex-col">
        <img
          src={read}
          className="h-[10vh] flex flex-col items-center justify-center"
        ></img>

        <p className="mt-2 text-xl text-black-950 font-semibold">
          {data.username}
        </p>
        <p className="mt-3 text-normal text-zinc-100">{data.email}</p>
        <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
      </div>

      {role === "user" && (
        <div className="w-full flex-col  items-center justify-center h lg:flex md:flex hidden">
          <Link
            to={"/profile"}
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-800 rounded transition-all"
          >
            Favourites
          </Link>

          <Link
            to={"/profile/orderhistory"}
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-800 rounded transition-all"
          >
            Order History
          </Link>

          <Link
            to={"/profile/settings"}
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-800 rounded transition-all"
          >
            Settings
          </Link>
        </div>
      )}

      {/* admin role */}
      {role === "admin" && (
        <div className="w-full flex-col items-center justify-center hidden lg:flex">
          <Link
            to={"/profile"}
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-800 rounded transition-all"
          >
            All Orders
          </Link>

          <Link
            to={"/profile/add-book"}
            className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-800 rounded transition-all"
          >
            Add Book
          </Link>
        </div>
      )}
      <button
        className="bg-zinc-800 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center hover:bg-blue-700 py-2 rounded transition-all duration-300"
        onClick={() => {
          dispatch(authActions.logout());
          dispatch(authActions.changeRole("user"));
          localStorage.clear("id");
          localStorage.clear("token");
          localStorage.clear("role");
          toast.success("logout Scucessful", {
            position: "top-left",
            autoClose: 1000,
            className: "toast-message",
          

            
            
          });
           setTimeout(()=>{
            history("/");
          },1200)
        }}
      >
        
        Log Out
      </button>
      
    </div>
    <ToastContainer  toastStyle={{ zIndex: 9999 }} />
   
    </>
  );
   


};

export default Sidebar;
