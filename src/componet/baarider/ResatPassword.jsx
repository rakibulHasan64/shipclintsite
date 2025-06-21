


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResatPassword() {
   const [email, setEmail] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Forgot password request for:", email);
   
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

         <Link to={"/"}><div className="flex items-center absolute top-6 left-8">
            <img className="h-9" src="/logo.png" alt="dummyLogoColored" />
            <span className="text-[32px] font-extrabold ml-2">Profast</span>
         </div></Link>
         <div className="bg-white p-8 rounded-xl  w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Forgot Password</h2>
            <p className="text-gray-600 mb-6">
               Enter your email address to receive a password reset link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="you@example.com"
                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                     required
                  />
               </div>

               <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
               >
                  Send Reset Link
               </button>
            </form>
         </div>
      </div>
   );
}

export default ResatPassword;
