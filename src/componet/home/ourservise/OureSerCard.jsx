

function OureSerCard() {
   return (
      <>
         
         <div className="bg-white shadow-2xl py-5 p-3 rounded-2xl">
            <div className="flex flex-col gap-4 py-5">
               <div className="mx-auto  w-[88px] h-[88px] rounded-full bg-[#EEEDFC] flex items-center justify-center">
                  <img className="   object-cover" src="/service.png" alt="" />
               </div>
               

               <h3 className="text-center text-black text-2xl font-bold w-[255px] mx-auto">Express  & Standard Delivery</h3>

               <p className="text-center text-gray-500">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>

         </div>
         
         
         
      </>
   );
}

export default OureSerCard;