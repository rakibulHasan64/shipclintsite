import WorksCard from "./worksCard";


function Works() {
   return (
      <>
         
         <div className="container mx-auto py-12">

            <h3 className="text-[32px] font-bold mb-5">How it Works</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-11">

               <WorksCard />
               <WorksCard />
               <WorksCard />
               <WorksCard />

            </div>

         </div>
         
      </>
   );
}

export default Works;