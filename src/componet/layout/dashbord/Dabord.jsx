


import { Outlet } from 'react-router-dom';
import Sidbar from './Sidbar';
import DasBordStactik from './DasBordStactik';


function Dashboard() {
   return (


      <div className="w-1/1 mx-auto">
         <div className="flex min-h-screen ">
         
            <div className="w-68 bg-gray-800 text-white p-4 ">
               <Sidbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 p-6">
               <div className="">
               
               </div>
               <Outlet />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
