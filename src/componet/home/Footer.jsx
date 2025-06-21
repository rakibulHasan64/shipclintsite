import {
   FaFacebookF,
   FaLinkedinIn,
   FaInstagram,
   FaTwitter,
} from "react-icons/fa";

function Footer() {
   return (
      <footer className="bg-black container mx-auto rounded-2xl text-white py-16 px-4 mb-5">
         <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <img src="/logo.png" alt="logo" className="h-8 w-auto" />
               <span className="text-2xl font-semibold">Profast</span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base max-w-xl text-gray-400">
               Enjoy fast, reliable parcel delivery with real-time tracking and zero
               hassle. From personal packages to business shipments — we deliver on
               time, every time.
            </p>

            {/* Navigation Links */}
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base mt-2">
               <li>
                  <a href="#" className="hover:text-gray-300">
                     Home
                  </a>
               </li>
               <li>
                  <a href="#" className="hover:text-gray-300">
                     Services
                  </a>
               </li>
               <li>
                  <a href="#" className="hover:text-gray-300">
                     Portfolio
                  </a>
               </li>
               <li>
                  <a href="#" className="hover:text-gray-300">
                     Pricing
                  </a>
               </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
               <a href="#" className="hover:text-blue-500">
                  <FaFacebookF size={18} />
               </a>
               <a href="#" className="hover:text-blue-700">
                  <FaLinkedinIn size={18} />
               </a>
               <a href="#" className="hover:text-pink-500">
                  <FaInstagram size={18} />
               </a>
               <a href="#" className="hover:text-blue-400">
                  <FaTwitter size={18} />
               </a>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
 