import React, { useEffect, useState } from 'react'
import Sidebar from '../components/profile/Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../components/LoaderForGrid/Loader';
import MobileNav from '../components/profile/MobileNav';
const API = import.meta.env.VITE_API_BASE_URL;

 const Profile = () => {
//  const isloggedIn =  useSelector();
const [profile,setprofile]=useState(null);
 const headers = {
  id:localStorage.getItem("id"),
  Authorization:`Bearer ${localStorage.getItem("token")}`
 }
//  console.log(headers)
  useEffect(()=>{
    const fetch = async()=>{
      const Response = await axios.get(`${API}/userInformation`,{headers})
      setprofile(Response.data.data)
      // console.log(Response.data.data)
     
     
    };
  fetch();
   
  },[])
  return (
    <div className='bg-blue-300 px-2 md:px-12 flex flex-col md:flex-row h-[100%]  py-8 gap-2'>
      {!profile && <div className='w-full h-[100%] flex justify-center items-center '><Loader/></div>}
      {profile && <>
      <div className='w-full md:w-1/6 lg:h-[screen]'><Sidebar data={profile}/>
      <MobileNav/>
      </div>

      <div className='w-full md:w-5/6'>
    
        <Outlet/>
      </div>
      </>}
    </div>
  )
}

export default Profile;
