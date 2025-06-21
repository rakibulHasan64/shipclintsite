import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPass() {
   const [password, setPassword] = useState('');
   const [confirmPass, setConfirmPass] = useState('');
   const [error, setError] = useState('');

   const handleReset = (e) => {
      e.preventDefault();

      if (password !== confirmPass) {
         setError("Passwords do not match");
         return;
      }

      setError('');
      console.log("New Password:", password);
      // এখানে তোমার API বা Firebase resetPasswordWithCode() ব্যবহার করা যাবে
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

         <Link to={"/"}><div className="flex items-center absolute top-6 left-8">
            <img className="h-9" src="/logo.png" alt="dummyLogoColored" />
            <span className="text-[32px] font-extrabold ml-2">Profast</span>
         </div></Link>
         <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
            <p className="text-gray-600 mb-6">Enter your new password below.</p>

            <form onSubmit={handleReset} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium mb-1">New Password</label>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Enter new password"
                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                     required
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <input
                     type="password"
                     value={confirmPass}
                     onChange={(e) => setConfirmPass(e.target.value)}
                     placeholder="Confirm new password"
                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                     required
                  />
               </div>

               {error && <p className="text-red-500 text-sm">{error}</p>}

               <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
               >
                  Reset Password
               </button>
            </form>
         </div>
      </div>
   );
}

export default ResetPass;
