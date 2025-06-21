import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
   return (
      <>
         
         <div className="">
            <div className=" ">
               

               <div className="flex items-center justify-center bg-[#FAFDF0]  w-full h-screen gap-11">
                  <div className="w-full ">
                     <Outlet />
                  </div>
                  <div className="w-full ">
                     <img className='mx-auto' src="/authImage.png" alt="" />

                  </div>
               </div>


            </div>
         </div>
         
      </>
   );
}

export default RootLayout;