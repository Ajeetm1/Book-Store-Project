import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/LoaderForGrid/Loader";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FcFinePrint } from "react-icons/fc";
import SeeingUserData from "./SeeingUserData";
const API = import.meta.env.VITE_API_BASE_URL;

const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState();
  const [Option, setOption] = useState(-1);
  const [Values, setValues] = useState({ status: "" });
  const [Userdiv, setUserdiv] = useState("hidden");
  const [userDivData, setuserDivdata] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${API}/get-all-orders`,
        { headers }
      );
      setAllOrders(response.data.data);
    };
    fetch();
  }, [AllOrders]);  

  const change = (e) => {
    const { value } = e.target;
    setValues({ status: value });
  };

  const submitChange = async (i) => {
    const id = AllOrders[i]._id;
    try {
      const response = await axios.put(
        `${API}/update-status/${id}`,
        Values,
        { headers }
      );
      alert(response.data.message);
      setOption(-1); // ✅ hide dropdown after update
    } catch (error) {
      alert("Failed to update status");
    }
  };

  AllOrders && AllOrders.splice(AllOrders.length - 1, 1);

  return (
    <>
      {!AllOrders && (
        <div className="h-[100%] flex items-center justify-center">
          {" "}
          <Loader />
        </div>
      )}
      {AllOrders && AllOrders.length > 0 && (
        <div className="h-[100%] p-0 sm:ml-20 md:p-4 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-8">
            All Orders
          </h1>
          <div className="mt-4 bg-zinc-400 w-full rounded py-2 px-4  flex gap-2 ">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>

            <div className="w-[40%] md:w-[22%]">
              <h1 className="">Books</h1>
            </div>

            <div className="w-0 md:w-[45%] hidden md:block">
              <h1 className="">Description</h1>
            </div>

            <div className=" w-[17%] md:w-[9%]">
              <h1 className="">Price</h1>
            </div>

            <div className="w-[30%] md:w-[16%]">
              <h1 className="">Status</h1>
            </div>

            <div className="w-[10%] md:w-[5%]">
              <h1 className=""></h1>
            </div>
          </div>

          {AllOrders &&
            AllOrders.map((orders, i) => (
              
              <div
                className="bg-zinc-800 w-full rounded py-4 px-2 flex  hover:bg-zinc-700 hover:cursor-pointer"
              >
                <div className="w-[3%]">
                  <h1 className="text-center">{i + 1}</h1>
                </div>

                <div className="w-[40%] md:w-[22%]">
                  <Link
                    to={`/view-book-details/${orders.book._id}`}
                    className="hover:text-blue-300"
                  >
                    {orders.book.title}
                  </Link>
                </div>

                <div className="w-0 md:w-[45%] hidden md:block">
                  <h1 className="">
                    {orders.book?.description
                      ? `${orders.book.description.slice(0, 40)}...`
                      : "No description available"}
                  </h1>
                </div>

                <div className="w-[17%] md:w-[9%]">
                  <h1 className="">${orders.book.price}</h1>
                </div>

                <div className="md:w-[16%] w-[30%]">
                  <h1 className="font-semibold text-white">
                    <button
                      className="hover:scale-105 transition-all duration-300"
                      onClick={() => {
                        setOption(i);
                        setValues({ status: orders.status || "Order placed" }); // ✅ Set default safely
                      }}
                    >
                      {orders.status === "Order placed" ? (
                        <div className="text-yellow-300">{orders.status}</div>
                      ) : orders.status === "Canceled" ? (
                        <div className="text-red-500">{orders.status}</div>
                      ) : (
                        <div className="text-green-500">{orders.status}</div>
                      )}
                    </button>

                    <div className={`${Option === i ? "flex" : "hidden"}`}>
                      <select
                        name="status"
                        onChange={change}
                        value={Values.status}
                        className="bg-zinc-600 min-w-0 text-sm"
                      >
                        {[
                          "Order placed",
                          "Out for delivery",
                          "Delivered", 
                          "Canceled",
                        ].map((items, i) => (
                          <option value={items} key={i}>
                            {items}
                          </option>
                        ))}
                      </select>

                      <button
                        className="text-green-500 hover:text-pink-400 mx-2 border"
                        onClick={() => {
                          submitChange(i);
                        }}
                      >
                        <FaCheck />
                      </button>
                    </div>
                  </h1>
                </div>

                <div className="w-[10%] md:w-[5%]">
                  <button
                    className="text-xl hover:bg-orange-500 border rounded"
                    onClick={() => {
                      setUserdiv("fixed");
                      setuserDivdata(orders.user);
                    }}
                  >
                    <FcFinePrint />
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {userDivData && (
        <SeeingUserData
          userDivData={userDivData}
          userDiv={Userdiv}
          setuserDiv={setUserdiv}
        />
      )}
    </>
  );
};

export default AllOrders;
