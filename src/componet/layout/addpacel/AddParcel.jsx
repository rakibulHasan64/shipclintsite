import React, { useState } from "react";

function AddParcel() {
   const [parcelType, setParcelType] = useState("Document");

   return (
      <div className="container mx-auto mt-10 px-6 py-8 bg-white shadow rounded-xl">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">Add Parcel</h2>

         <hr className="border-gray-300 mb-6" />

         <h4 className="text-lg font-semibold mb-4">Enter your parcel details</h4>

         {/* Parcel Type Radio */}
         <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2">
               <input
                  type="radio"
                  name="parcelType"
                  value="Document"
                  checked={parcelType === "Document"}
                  onChange={() => setParcelType("Document")}
                  className="accent-green-600"
               />
               <span className="font-medium">Document</span>
            </label>
            <label className="flex items-center gap-2">
               <input
                  type="radio"
                  name="parcelType"
                  value="Not-Document"
                  checked={parcelType === "Not-Document"}
                  onChange={() => setParcelType("Not-Document")}
                  className="accent-gray-400"
               />
               <span className="font-medium">Not-Document</span>
            </label>
         </div>

         {/* Parcel Info */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
               <input
                  type="text"
                  placeholder="Parcel Name"
                  className="w-full border p-2 rounded"
                  required
               />
            </div>
            <div>
               <input
                  type="number"
                  placeholder="Parcel Weight (KG)"
                  className="w-full border p-2 rounded"
                  required
               />
            </div>
         </div>

         {/* Sender & Receiver Details */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            {/* Sender Details */}
            <div>
               <h3 className="text-xl font-bold mb-4">Sender Details</h3>
               <div className="space-y-4">
                  <input
                     type="text"
                     placeholder="Sender Name"
                     className="w-full border p-2 rounded"
                  />
                  <select className="w-full border p-2 rounded">
                     <option>Select Wire house</option>
                     <option>Warehouse A</option>
                     <option>Warehouse B</option>
                  </select>
                  <input
                     type="text"
                     placeholder="Address"
                     className="w-full border p-2 rounded"
                  />
                  <input
                     type="text"
                     placeholder="Sender Contact No"
                     className="w-full border p-2 rounded"
                  />
                  <select className="w-full border p-2 rounded">
                     <option>Select your region</option>
                     <option>Dhaka</option>
                     <option>Chattogram</option>
                  </select>
                  <textarea
                     placeholder="Pickup Instruction"
                     className="w-full border p-2 rounded"
                     rows={3}
                  ></textarea>
               </div>
            </div>

            {/* Receiver Details */}
            <div>
               <h3 className="text-xl font-bold mb-4">Receiver Details</h3>
               <div className="space-y-4">
                  <input
                     type="text"
                     placeholder="Receiver Name"
                     className="w-full border p-2 rounded"
                  />
                  <select className="w-full border p-2 rounded">
                     <option>Select Wire house</option>
                     <option>Warehouse A</option>
                     <option>Warehouse B</option>
                  </select>
                  <input
                     type="text"
                     placeholder="Receiver Address"
                     className="w-full border p-2 rounded"
                  />
                  <input
                     type="text"
                     placeholder="Receiver Contact No"
                     className="w-full border p-2 rounded"
                  />
                  <select className="w-full border p-2 rounded">
                     <option>Select receiver region</option>
                     <option>Dhaka</option>
                     <option>Khulna</option>
                  </select>
                  <textarea
                     placeholder="Delivery Instruction"
                     className="w-full border p-2 rounded"
                     rows={3}
                  ></textarea>
               </div>
            </div>
         </div>

         <p className="text-sm text-gray-500 mb-4">* PickUp Time 4pm - 7pm Approx.</p>

         <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded">
            Proceed to Confirm Booking
         </button>
      </div>
   );
}

export default AddParcel;
