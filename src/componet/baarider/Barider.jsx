import React from "react";

function Barider() {
   return (
      <div className="container mx-auto mt-10 px-9 mb-6 py-7 bg-white shadow rounded-2xl">
         <h3 className="text-[40px] md:text-[56px] font-bold mb-7">Be a Rider</h3>
         <p>
            Enjoy fast, reliable parcel delivery with real-time tracking and zero
            hassle. From personal packages to business shipments — we deliver on
            time, every time.
         </p>

         <hr className="border-[1px] mt-8 border-gray-400" />

         <div className="mt-8">
            <form className="mb-9">
               <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                  {/* Left Side - Form */}
                  <div className="w-full lg:w-2/3">
                     <h3 className="text-2xl font-bold mb-6">Tell us about yourself</h3>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="text-lg font-medium block mb-1">Full Name</label>
                           <input
                              type="text"
                              placeholder="Enter your full name"
                              className="w-full border p-2 rounded"
                              required
                           />
                        </div>

                        <div>
                           <label className="text-lg font-medium block mb-1">Father's Name</label>
                           <input
                              type="text"
                              placeholder="Enter father's name"
                              className="w-full border p-2 rounded"
                              required
                           />
                        </div>

                        <div>
                           <label className="text-lg font-medium block mb-1">Email</label>
                           <input
                              type="email"
                              placeholder="Enter your email"
                              className="w-full border p-2 rounded"
                              required
                           />
                        </div>

                        <div>
                           <label className="text-lg font-medium block mb-1">Age</label>
                           <input
                              type="number"
                              placeholder="Enter your age"
                              className="w-full border p-2 rounded"
                              required
                           />
                        </div>

                        <div>
                           <label className="text-lg font-medium block mb-1">NID Number</label>
                           <input
                              type="number"
                              placeholder="Enter NID number"
                              className="w-full border p-2 rounded"
                              required
                           />
                        </div>

                        <div>
                           <label className="text-lg font-medium block mb-1">Contact Number</label>
                           <input
                              type="number"
                              placeholder="Enter contact number"
                              className="w-full border p-2 rounded"
                              required
                           />
                        </div>

                        <div className="md:col-span-2">
                           <label className="text-lg font-medium block mb-1">Preferred Delivery Area</label>
                           <select className="w-full border p-2 rounded" required>
                              <option value="">Select delivery destination</option>
                              <option value="Dhaka">Dhaka</option>
                              <option value="Chattogram">Chattogram</option>
                              <option value="Khulna">Khulna</option>
                              <option value="Other">Other</option>
                           </select>
                        </div>
                     </div>

                     <button
                        type="submit"
                        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
                     >
                        Submit Application
                     </button>
                  </div>

                  {/* Right Side - Image */}
                  <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
                     <img src="/agent-pending.png" alt="Rider Application" className="max-w-full" />
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Barider;
