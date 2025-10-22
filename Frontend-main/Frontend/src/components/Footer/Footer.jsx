import React from 'react'
import { IoBookSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

 const Footer = () => {
  return (
   

<footer className="bg-black ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-100 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            
              <a href="/" className="flex items-center">
                 <div className='bg-white h-auto w-7 justify-center flex mr-2 text-3xl text-blue-600'><IoBookSharp /></div>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MyBookHouse</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">JS Store</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Department Store</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2025 <a href="https://BookHouse.com/" className="hover:underline">BookHouse™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-green-300 dark:hover:text-white">
                 <FaFacebookSquare />
                  <span className="sr-only">Facebook page</span>
              </a>

              <a href="#" className="text-gray-500 hover:text-green-300 dark:hover:text-white ms-5">
                 <FaLinkedin />

                  <span className="sr-only">Discord community</span>
              </a>
             
              <a href="#" className="text-zinc-500 hover:text-green-300 dark:hover:text-white ms-5">
                  <FaGithub />
                  <span className="sr-only">GitHub account</span>
              </a>
              
          </div>
      </div>
    </div>
</footer>

  )
}
export default Footer;
