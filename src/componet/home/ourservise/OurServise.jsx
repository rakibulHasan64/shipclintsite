import OureSerCard from "./OureSerCard";


function OurServise() {
   return (
      <>
         
         <div className="">
            <div className="max-w-[1610px] mx-auto  bg-[#145a32] rounded-2xl py-20">
               <div className="max-w-7xl mx-auto ">
                  <h1 className="text-[40px] font-extrabold text-center text-white">Our Services</h1>
                  <p className="text-[16px] text-center text-white mt-4">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to<br /> business shipments — we deliver on time, every time.</p>

                  <div className="mt-8 py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                     <OureSerCard />
                     <OureSerCard />
                     <OureSerCard />
                     <OureSerCard />
                     <OureSerCard />
                     <OureSerCard />
                  </div>

               </div>

            </div>
            </div>
         
      </>
   );
}

export default OurServise;