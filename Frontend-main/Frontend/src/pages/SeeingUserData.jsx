import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

 const SeeingUserData = ({userDivData,userDiv,setuserDiv}) => {
  return (
    <>
    <div className={`${userDiv} top-0 left-0 h-screen w-full bg-zinc-700 opacity-80`}>
</div>{" "}

<div className={`${userDiv} top-0 left-0 h-screen w-full flex  items-center justify-center `}>

  <div className='bg-white rounded p-4 w[80%] md:w-[50%] lg:w-[40%]'>
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-semibold'>User Information</h1>
      <button className='text-red-400 bg-zinc-700 hover:text-red-600 text-2xl' onClick={()=>setuserDiv("hidden")}><AiOutlineCloseCircle /></button>
    </div>
    <div className='mt-2'>
      <label htmlFor=''>
        username:{" "}
        <span className='font-semibold'>
          {userDivData.username}
        </span>
      </label>
    </div>
    <div className='mt-4'>
      <label htmlFor=''>
        Email:<span className='font-semibold'>
          {userDivData.email}
        </span>        
      </label>
    </div>
    <div className='mt-4'>
      <label htmlFor=''>
        Address:{""}<span className='font-semibold'>
          {userDivData.address}
        </span>        
      </label>
    </div>


  </div>
   </div>
   
    </>
  )
}

export default SeeingUserData;
