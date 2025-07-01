// import React, { useState } from "react";

// function AddParcel() {
//    const [parcelType, setParcelType] = useState("Document");

//    return (
//       <div className="container mx-auto mt-10 px-6 py-8 bg-white shadow rounded-xl">
//          <h2 className="text-3xl md:text-4xl font-bold mb-6">Add Parcel</h2>

//          <hr className="border-gray-300 mb-6" />

//          <h4 className="text-lg font-semibold mb-4">Enter your parcel details</h4>

//          {/* Parcel Type Radio */}
//          <div className="flex gap-6 mb-6">
//             <label className="flex items-center gap-2">
//                <input
//                   type="radio"
//                   name="parcelType"
//                   value="Document"
//                   checked={parcelType === "Document"}
//                   onChange={() => setParcelType("Document")}
//                   className="accent-green-600"
//                />
//                <span className="font-medium">Document</span>
//             </label>
//             <label className="flex items-center gap-2">
//                <input
//                   type="radio"
//                   name="parcelType"
//                   value="Not-Document"
//                   checked={parcelType === "Not-Document"}
//                   onChange={() => setParcelType("Not-Document")}
//                   className="accent-gray-400"
//                />
//                <span className="font-medium">Not-Document</span>
//             </label>
//          </div>

//          {/* Parcel Info */}
//          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div>
//                <input
//                   type="text"
//                   placeholder="Parcel Name"
//                   className="w-full border p-2 rounded"
//                   required
//                />
//             </div>
//             <div>
//                <input
//                   type="number"
//                   placeholder="Parcel Weight (KG)"
//                   className="w-full border p-2 rounded"
//                   required
//                />
//             </div>
//          </div>

//          {/* Sender & Receiver Details */}
//          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
//             {/* Sender Details */}
//             <div>
//                <h3 className="text-xl font-bold mb-4">Sender Details</h3>
//                <div className="space-y-4">
//                   <input
//                      type="text"
//                      placeholder="Sender Name"
//                      className="w-full border p-2 rounded"
//                   />
//                   <select className="w-full border p-2 rounded">
//                      <option>Select Wire house</option>
//                      <option>Warehouse A</option>
//                      <option>Warehouse B</option>
//                   </select>
//                   <input
//                      type="text"
//                      placeholder="Address"
//                      className="w-full border p-2 rounded"
//                   />
//                   <input
//                      type="text"
//                      placeholder="Sender Contact No"
//                      className="w-full border p-2 rounded"
//                   />
//                   <select className="w-full border p-2 rounded">
//                      <option>Select your region</option>
//                      <option>Dhaka</option>
//                      <option>Chattogram</option>
//                   </select>
//                   <textarea
//                      placeholder="Pickup Instruction"
//                      className="w-full border p-2 rounded"
//                      rows={3}
//                   ></textarea>
//                </div>
//             </div>

//             {/* Receiver Details */}
//             <div>
//                <h3 className="text-xl font-bold mb-4">Receiver Details</h3>
//                <div className="space-y-4">
//                   <input
//                      type="text"
//                      placeholder="Receiver Name"
//                      className="w-full border p-2 rounded"
//                   />
//                   <select className="w-full border p-2 rounded">
//                      <option>Select Wire house</option>
//                      <option>Warehouse A</option>
//                      <option>Warehouse B</option>
//                   </select>
//                   <input
//                      type="text"
//                      placeholder="Receiver Address"
//                      className="w-full border p-2 rounded"
//                   />
//                   <input
//                      type="text"
//                      placeholder="Receiver Contact No"
//                      className="w-full border p-2 rounded"
//                   />
//                   <select className="w-full border p-2 rounded">
//                      <option>Select receiver region</option>
//                      <option>Dhaka</option>
//                      <option>Khulna</option>
//                   </select>
//                   <textarea
//                      placeholder="Delivery Instruction"
//                      className="w-full border p-2 rounded"
//                      rows={3}
//                   ></textarea>
//                </div>
//             </div>
//          </div>

//          <p className="text-sm text-gray-500 mb-4">* PickUp Time 4pm - 7pm Approx.</p>

//          <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded">
//             Proceed to Confirm Booking
//          </button>
//       </div>
//    );
// }

// export default AddParcel;

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const generateTrackingID = () => {
   const date = new Date();
   const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
   const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
   return `PCL-${datePart}-${rand}`;
};

const AddParcel = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const { user } = useAuth();


   const serviceCenters = useLoaderData();
   const axiosSecure = useAxiosSecure();
   // Extract unique regions
   const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
   // Get districts by region
   const getDistrictsByRegion = (region) =>
      serviceCenters.filter((w) => w.region === region).map((w) => w.district);

   const parcelType = watch("type");
   const senderRegion = watch("sender_region");
   const receiverRegion = watch("receiver_region");

   const onSubmit = (data) => {
      const weight = parseFloat(data.weight) || 0;
      const isSameDistrict = data.sender_center === data.receiver_center;

      let baseCost = 0;
      let extraCost = 0;
      let breakdown = "";

      if (data.type === "document") {
         baseCost = isSameDistrict ? 60 : 80;
         breakdown = `Document delivery ${isSameDistrict ? "within" : "outside"} the district.`;
      } else {
         if (weight <= 3) {
            baseCost = isSameDistrict ? 110 : 150;
            breakdown = `Non-document up to 3kg ${isSameDistrict ? "within" : "outside"} the district.`;
         } else {
            const extraKg = weight - 3;
            const perKgCharge = extraKg * 40;
            const districtExtra = isSameDistrict ? 0 : 40;
            baseCost = isSameDistrict ? 110 : 150;
            extraCost = perKgCharge + districtExtra;

            breakdown = `
        Non-document over 3kg ${isSameDistrict ? "within" : "outside"} the district.<br/>
        Extra charge: ৳40 x ${extraKg.toFixed(1)}kg = ৳${perKgCharge}<br/>
        ${districtExtra ? "+ ৳40 extra for outside district delivery" : ""}
      `;
         }
      }

      const totalCost = baseCost + extraCost;

      Swal.fire({
         title: "Delivery Cost Breakdown",
         icon: "info",
         html: `
      <div class="text-left text-base space-y-2">
        <p><strong>Parcel Type:</strong> ${data.type}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Delivery Zone:</strong> ${isSameDistrict ? "Within Same District" : "Outside District"}</p>
        <hr class="my-2"/>
        <p><strong>Base Cost:</strong> ৳${baseCost}</p>
        ${extraCost > 0 ? `<p><strong>Extra Charges:</strong> ৳${extraCost}</p>` : ""}
        <div class="text-gray-500 text-sm">${breakdown}</div>
        <hr class="my-2"/>
        <p class="text-xl font-bold text-green-600">Total Cost: ৳${totalCost}</p>
      </div>
    `,
         showDenyButton: true,
         confirmButtonText: "💳 Proceed to Payment",
         denyButtonText: "✏️ Continue Editing",
         confirmButtonColor: "#16a34a",
         denyButtonColor: "#d3d3d3",
         customClass: {
            popup: "rounded-xl shadow-md px-6 py-6",
         },
      }).then((result) => {
         if (result.isConfirmed) {
            const parcelData = {
               ...data,
               cost: totalCost,
               created_by: user.email,
               payment_status: 'unpaid',
               delivery_status: 'not_collected',
               creation_date: new Date().toISOString(),
               tracking_id: generateTrackingID(),
            };

            console.log("Ready for payment:", parcelData);

            axiosSecure.post('/parcels', parcelData)
               .then(res => {
                  console.log(res.data);
                  if (res.data.insertedId) {
                     // TODO: redirect to a payment page 
                     Swal.fire({
                        title: "Redirecting...",
                        text: "Proceeding to payment gateway.",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                     });
                  }
               })

         }
      });
   };

   return (
      <div className="p-6 max-w-6xl mx-auto">
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
         
            <div className="text-center">
               <h2 className="text-3xl font-bold">Send a Parcel</h2>
               <p className="text-gray-500">Fill in the details below</p>
            </div>

            <div className="border p-4 rounded-xl shadow-md space-y-4">
               <h3 className="font-semibold text-xl">Parcel Info</h3>
               <div className="space-y-4">
               
                  <div>
                     <label className="label">Parcel Name</label>
                     <input
                        {...register("title", { required: true })}
                        className="input input-bordered w-full"
                        placeholder="Describe your parcel"
                     />
                     {errors.title && <p className="text-red-500 text-sm">Parcel name is required</p>}
                  </div>

         
                  <div>
                     <label className="label">Type</label>
                     <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                           <input
                              type="radio"
                              value="document"
                              {...register("type", { required: true })}
                              className="radio"
                           />
                           Document
                        </label>
                        <label className="flex items-center gap-2">
                           <input
                              type="radio"
                              value="non-document"
                              {...register("type", { required: true })}
                              className="radio"
                           />
                           Non-Document
                        </label>
                     </div>
                     {errors.type && <p className="text-red-500 text-sm">Type is required</p>}
                  </div>

            
                  <div>
                     <label className="label">Weight (kg)</label>
                     <input
                        type="number"
                        step="0.1"
                        {...register("weight")}
                        disabled={parcelType !== "non-document"}
                        className={`input input-bordered w-full ${parcelType !== "non-document" ? "bg-gray-100 cursor-not-allowed" : ""
                           }`}
                        placeholder="Enter weight"
                     />
                  </div>
               </div>
            </div>


      
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Sender Info */}
               <div className="border p-4 rounded-xl shadow-md space-y-4">
                  <h3 className="font-semibold text-xl">Sender Info</h3>
                  <div className="grid grid-cols-1 gap-4">
                     <input {...register("sender_name", { required: true })} className="input input-bordered w-full" placeholder="Name" />
                     <input {...register("sender_contact", { required: true })} className="input input-bordered w-full" placeholder="Contact" />
                     <select {...register("sender_region", { required: true })} className="select select-bordered w-full">
                        <option value="">Select Region</option>
                        {uniqueRegions.map((region) => (
                           <option key={region} value={region}>{region}</option>
                        ))}
                     </select>
                     <select {...register("sender_center", { required: true })} className="select select-bordered w-full">
                        <option value="">Select Service Center</option>
                        {getDistrictsByRegion(senderRegion).map((district) => (
                           <option key={district} value={district}>{district}</option>
                        ))}
                     </select>
                     <input {...register("sender_address", { required: true })} className="input input-bordered w-full" placeholder="Address" />
                     <textarea {...register("pickup_instruction", { required: true })} className="textarea textarea-bordered w-full" placeholder="Pickup Instruction" />
                  </div>
               </div>

               {/* Receiver Info */}
               <div className="border p-4 rounded-xl shadow-md space-y-4">
                  <h3 className="font-semibold text-xl">Receiver Info</h3>
                  <div className="grid grid-cols-1 gap-4">
                     <input {...register("receiver_name", { required: true })} className="input input-bordered w-full" placeholder="Name" />
                     <input {...register("receiver_contact", { required: true })} className="input input-bordered w-full" placeholder="Contact" />
                     <select {...register("receiver_region", { required: true })} className="select select-bordered w-full">
                        <option value="">Select Region</option>
                        {uniqueRegions.map((region) => (
                           <option key={region} value={region}>{region}</option>
                        ))}
                     </select>
                     <select {...register("receiver_center", { required: true })} className="select select-bordered w-full">
                        <option value="">Select Service Center</option>
                        {getDistrictsByRegion(receiverRegion).map((district) => (
                           <option key={district} value={district}>{district}</option>
                        ))}
                     </select>
                     <input {...register("receiver_address", { required: true })} className="input input-bordered w-full" placeholder="Address" />
                     <textarea {...register("delivery_instruction", { required: true })} className="textarea textarea-bordered w-full" placeholder="Delivery Instruction" />
                  </div>
               </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
               <button className="btn btn-primary text-black">Submit</button>
            </div>
         </form>
      </div>
   );
};

export default AddParcel;
