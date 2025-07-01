import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Navbar() {
   const { user, logOut } = useAuth();
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => setIsMenuOpen(false);

   return (
      <div>
         <nav className="py-6 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow">
            {/* Logo */}
            <Link to="/" className="flex items-center">
               <img
                  className="h-10 w-auto"
                  src="/18157355.jpg"
                  alt="Logo"
               />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-10 text-lg">
               <li><Link to="/" className="hover:text-gray-500/80 transition">Services</Link></li>
               <li><Link to="/coverage" className="hover:text-gray-500/80 transition">Coverage</Link></li>
               <li><Link to="/about" className="hover:text-gray-500/80 transition">About Us</Link></li>
               <li><Link to="/pricing" className="hover:text-gray-500/80 transition">Pricing</Link></li>
               <li><Link to="/addParcel" className="hover:text-gray-500/80 transition">Add Parcel</Link></li>
               <li><Link to="/dashboard" className="hover:text-gray-500/80 transition">Dashboard</Link></li>
            </ul>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-4">
               {user ? (
                  <button
                     onClick={logOut}
                     className="py-2 px-5 border rounded-lg text-[15px] font-bold bg-red-500 text-white"
                  >
                     Log Out
                  </button>
               ) : (
                  <Link to="/auth/login">
                     <button className="py-2 px-5 border rounded-lg text-[15px] font-bold">
                        Sign In
                     </button>
                  </Link>
               )}

               <Link to="/become-rider">
                  <button className="py-2 px-5 rounded-lg text-[15px] font-bold bg-[#CAEB66]">
                     Be a rider
                  </button>
               </Link>

               <button className="w-[44px] h-[44px] rounded-full bg-black flex items-center justify-center">
                  <MdArrowOutward className="text-white text-lg" />
               </button>
            </div>

            {/* Mobile Menu Button */}
            <button
               aria-label="menu"
               type="button"
               className="md:hidden"
               onClick={toggleMenu}
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" viewBox="0 0 30 30">
                  <path d="M3 7h24M3 15h24M3 23h24" stroke="currentColor" strokeWidth="2" />
               </svg>
            </button>
         </nav>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white px-6 py-4 shadow z-50">
               <ul className="flex flex-col gap-4 text-base font-medium">
                  <li><Link onClick={closeMenu} to="/">Services</Link></li>
                  <li><Link onClick={closeMenu} to="/coverage">Coverage</Link></li>
                  <li><Link onClick={closeMenu} to="/about">About Us</Link></li>
                  <li><Link onClick={closeMenu} to="/pricing">Pricing</Link></li>
                  <li><Link onClick={closeMenu} to="/addParcel">Add Parcel</Link></li>
                  <li><Link onClick={closeMenu} to="/dashboard">Dashboard</Link></li>
               </ul>

               <div className="mt-6 flex flex-col gap-3">
                  {user ? (
                     <button
                        onClick={() => {
                           logOut();
                           closeMenu();
                        }}
                        className="py-2 px-4 border rounded-lg text-sm bg-red-500 text-white"
                     >
                        Log Out
                     </button>
                  ) : (
                     <Link to="/auth/login" onClick={closeMenu}>
                        <button className="py-2 px-4 border rounded-lg text-sm">
                           Sign In
                        </button>
                     </Link>
                  )}

                  <Link to="/become-rider" onClick={closeMenu}>
                     <button className="py-2 px-4 rounded-lg text-sm bg-[#CAEB66]">
                        Be a rider
                     </button>
                  </Link>
               </div>
            </div>
         )}
      </div>
   );
}

export default Navbar;
