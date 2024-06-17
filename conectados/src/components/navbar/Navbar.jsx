import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="shadow bg-cyan-200">
        <div className="container px-4 py-2 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
          <div className="flex items-center">
              <a href="#">
                <img className="w-auto h-6 sm:h-14" src="https://i.postimg.cc/137hMjd6/LOGO111.png" alt="Logo" />
              </a>
              <span className="ml-2 text-sm sm:text-xl text-black dark:text-black">Contratalo</span>
            </div>
            <div className="hidden lg:flex lg:justify-center">
              <a href="#" className="block px-3 py-2 mt-2 text-sm text-black rounded-lg dark:text-black lg:mx-4 lg:my-0">Home</a>
              <a href="#" className="block px-3 py-2 mt-2 text-sm text-black rounded-lg dark:text-black lg:mx-4 lg:my-0">About</a>
              <a href="#" className="block px-3 py-2 mt-2 text-sm text-black rounded-lg dark:text-black lg:mx-4 lg:my-0">Contact</a>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-black dark:text-black hover:text-black dark:hover:text-black focus:outline-none focus:text-black dark:focus:text-black"
                aria-label="Toggle menu"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg
                  className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`lg:flex lg:items-center lg:justify-center ${isOpen ? 'block' : 'hidden'} lg:mt-0 lg:p-0 lg:relative`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-full">
              <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="block px-3 py-2 mt-2 text-sm text-black rounded-lg dark:text-black lg:mx-4 lg:my-0">Home</a>
                <a href="#" className="block px-3 py-2 mt-2 text-sm text-black rounded-lg dark:text-black lg:mx-4 lg:my-0">About</a>
                <a href="#" className="block px-3 py-2 mt-2 text-sm text-black rounded-lg dark:text-black lg:mx-4 lg:my-0">Contact</a>
              </div>
              <div className="flex items-center lg:ml-4">
              <div className="text-black dark:text-black block px-4 py-2 text-sm rounded-lg">
              <IoPersonSharp size={25} className="cursor-pointer" />
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:hidden ${isOpen ? 'hidden' : 'hidden'} absolute inset-x-0 bottom-0 z-20 bg-white dark:bg-cyan-200 px-4 py-5 transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col space-y-4">
            <a href="#" className="block px-4 py-2 text-sm text-black rounded-lg dark:text-black">Home</a>
            <a href="#" className="block px-4 py-2 text-sm text-black rounded-lg dark:text-black">About</a>
            <a href="#" className="block px-4 py-2 text-sm text-black rounded-lg dark:text-black">Contact</a>
            <div className="text-black dark:text-black block px-4 py-2 text-sm rounded-lg">
              <IoPersonSharp size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
