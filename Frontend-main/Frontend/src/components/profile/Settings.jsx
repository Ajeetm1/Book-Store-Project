import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../LoaderForGrid/Loader";

const Settings = () => {
  const [Value, setValue] = useState({ address: "" });
  const [ProfileData, setProfileData] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e)=>{
    const {name,value} = e.target;
    setValue({...Value,[name]:value});
  }

  useEffect(() => {
    const fetch = async () => {
      const Response = await axios.get(
        "http://localhost:5000/api/v1/userInformation",
        { headers }
      );
      setProfileData(Response.data.data);
      setValue({ address: Response.data.address });
    };
    fetch();
  }, []);
const submitAddress = async()=>{
  const responnse = await axios.put(
        "http://localhost:5000/api/v1/update-address",Value,
        { headers }
      );
      console.log(responnse.data.message)
}
  return (
    <>
      {!ProfileData && (
        <div className="w-full flex items-center justify-center h-[100%]">
          <Loader />
        </div>
      )}

      {ProfileData && (
        <div className="h-[100%] md:p-4 text-zinc-200">
          <h1 className="text-5xl md:text-6xl font-semibold text-zinc-900 mb-8">
            Settings
          </h1>
          <div className="felx gap-12">

            <div className="">
              <label htmlFor="">Username</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {ProfileData.username}
              </p>
            </div>

            <div className="">
              <label htmlFor="">Email</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {ProfileData.email}
              </p>
            </div>

          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="">Address</label>

            <textarea className="p-2 rounded bg-zinc-800 mt-2 font-semibold" rows={5}placeholder="Address"name="address"value={Value.address}onChange={change}/>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-yellow-400 text zinc-700 fonnt-semibold px-3 py-2 rounded hover:bg-yellow-200"onClick={submitAddress}>
              Update
            </button>
          </div>
        </div>
      )}      
    </>
  );
};

export default Settings;
