import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div>
         <nav className=" py-6 relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow  transition-all">
            <a className='flex items-center' href="#">
               <img
                  className="h-9"
                  src="/logo.png"
                  alt="dummyLogoColored"
               />
               <span className='text-[32px] font-extrabold '>Profast</span>
            </a>

            <ul className="md:flex hidden items-center gap-10 text-lg">
               <li>
                  <Link to="/" className="hover:text-gray-500/80 transition">Services</Link>
               </li>
               <li>
                  <Link to="/coverage" className="hover:text-gray-500/80 transition">Coverage</Link>
               </li>
               <li>
                  <Link to="/about" className="hover:text-gray-500/80 transition">About Us</Link>
               </li>
               <li>
                  <Link to="/pricing" className="hover:text-gray-500/80 transition">Pricing</Link>
               </li>
               <li>
                  <Link to="/be-a-rider" className="hover:text-gray-500/80 transition">Be a Rider</Link>
               </li>
            </ul>

            <div className="flex items-center gap-4">
               <button  className="py-2 px-5 border rounded-lg text-[15px] font-bold">
                  Sign In
               </button>

               <button className='py-2 px-5  rounded-lg text-[15px] font-bold bg-[#CAEB66]'>
                  Be a rider
               </button>

               <button className='w-[44px] h-[44px] rounded-full bg-black flex items-center justify-center'><MdArrowOutward className='text-white text-lg' /></button>
            </div>

            <button
               aria-label="menu-btn"
               type="button"
               className="menu-btn inline-block md:hidden active:scale-90 transition"
               onClick={toggleMenu}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
               </svg>
            </button>

            {isMenuOpen && (
               <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
                  <ul className="flex flex-col space-y-4 text-lg">
                     <li><a href="#" className="text-sm">Home</a></li>
                     <li><a href="#" className="text-sm">Services</a></li>
                     <li><a href="#" className="text-sm">Portfolio</a></li>
                     <li><a href="#" className="text-sm">Pricing</a></li>
                  </ul>
                  <button type="button" className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full">
                     Get started
                  </button>
               </div>
            )}
         </nav>
      </div>
   );
}

export default Navbar;
