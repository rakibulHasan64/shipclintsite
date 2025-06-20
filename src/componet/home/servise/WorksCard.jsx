import React from 'react';

function WorksCard() {
   return (
      <>
         
         <div className="bg-white shadow-amber-400/20 shadow-2xl pt-7 p-5 rounded-2xl">

            <div className="px-5 py-5 ">
               <div className="flex flex-col gap-4">
                  <img className="w-[50px] h-[50px]" src="/bookingIcon.png" alt="" />
                  <h3>Booking Pick & Drop</h3>
                  <p>From personal packages to business shipments — we deliver on time, every time.</p>
               </div>

            </div>

         </div>
         
      </>
   );
}

export default WorksCard;