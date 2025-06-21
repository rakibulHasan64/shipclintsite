import ReactTab from "./ReactTab";


function AboutLayout() {
   return (
      <>
         
         <div className="container mx-auto mb-8 mt-14 py-10 bg-white rounded-2xl shadow">
            <div className="px-11">
               <h3 className="text-[54px] font-bold">About Us</h3>
               <p className="text-gray-500">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From<br /> personal packages to business shipments — we deliver on time, every time.</p>

               <p className="border-[1px] border-gray-400 mt-8 "></p>

               <div className="mt-11">

                  <ReactTab />

               </div>
            </div>



         </div>
         
      </>
   );
}

export default AboutLayout;